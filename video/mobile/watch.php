<?php
// +-------------------------------------------------------------------------+
// | Mobile Melody Plug-in for PHP Melody ( www.phpsugar.com )
// +-------------------------------------------------------------------------+
// | MOBILE MELODY IS NOT FREE SOFTWARE
// | If you have downloaded this software from a website other
// | than www.phpsugar.com or if you have received
// | this software from someone who is not a representative of
// | phpSugar, you are involved in an illegal activity.
// | ---
// | In such case, please contact: support@phpsugar.com.
// +-------------------------------------------------------------------------+
// | Developed by: phpSugar (www.phpsugar.com) / support@phpsugar.com
// | Copyright: (c) 2004-2015 PhpSugar.com. All rights reserved.
// +-------------------------------------------------------------------------+
session_start();
$page_type = 'video';
include('settings.php');

$uniq_id = magicSlashes($_GET['vid']);
$video_is_restricted = false;

if ( ! empty($uniq_id) && strlen($uniq_id) < 10) 
{
	$video = request_video($uniq_id);
	
	if ( ! $video && (is_admin() || (is_moderator() && mod_can('manage_videos'))))
	{
		// check the Trash
		$video = request_video($uniq_id, 'detail', false, true);
	}

	$category_name = make_cats_mobi('pm_categories', $video['category']);
	$now = time();

	$video_subtitles = array();
	$video_subtitles = (array) get_video_subtitles($uniq_id);

	if(strstr($video['category'], ",")) 
	{
		$temp = explode(",", $categories);
		$categories = trim($temp[0]);
	} else {
		$categories = $video['category'];
	}
			
	if ( ! $video_is_restricted && update_view_count_mobi($video['id']))
	{
		add_to_chart($video['uniq_id']);
	}

if($video == 0) { 
		header("Location: ". _URL_MOBI ."/index."._FEXT);
		exit;
	}
} else {
		header("Location: ". _URL_MOBI ."/index."._FEXT);
		exit;
}

$comments_no = ($video['allow_comments'] == 1) ? count_entries('pm_comments', 'uniq_id', $uniq_id) : 0;
$guestname = '';
if(isset($_COOKIE[COOKIE_AUTHOR]) && $_COOKIE[COOKIE_AUTHOR] != '')
{
	$guestname = str_replace( array('"', '>', '<'), "", $_COOKIE[COOKIE_AUTHOR]);
}

if ($config['allow_emojis'])
{
	if ( ! class_exists('Emojione\\Client'))
	{
		include(ABSPATH .'include/emoji/autoload.php');
	} 
	$emoji_client = new Emojione\Client(new Emojione\Ruleset());
	$emoji_client->ascii = true;
	$emoji_client->unicodeAlt = false;
}

$meta_title = $video['video_title']." - "._SITENAME;
include('header.php');

if ($config['comment_system_facebook'] == 1) : ?>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<?php endif; ?>

<div id="video_player">
	<h1><?php echo $video['video_title']; ?></h1>
	<div class="video_details">
	<strong><?php echo $lang['articles_by'] ." ". $video['submitted']; ?></strong> <span class="added_date"><?php echo time_since($video['added_timestamp'])." ". $lang['ago']; ?></span> <span class="video_views border2"><?php echo pm_number_format_mobi($video['site_views']); ?> <?php echo $lang['views']; ?></span>
	</div>
<?php if ($video['restricted'] == '1' && ! $logged_in) : ?>
	<div class="video_details">
		<?php echo $lang['restricted_sorry']; ?>
		<br /><br />
		<?php echo $lang['restricted_register']; ?>
		<form action="<?php echo _URL_MOBI;?>/signin.php" method="post" name="login_form" class="login" autocomplete="off">
		<input name="username" type="text" size="15" class="inputtext" placeholder="<?php echo $lang['your_username_or_email'];?>" autofocus="autofocus" />
		<input name="pass" type="password" size="15" class="inputtext" placeholder="<?php echo $lang['password'];?>" />
		<input type="hidden" name="ref" value="<?php echo '/watch.php?vid='. $video['uniq_id']; ?>" />
		<button class="submit border2" name="Login"><?php echo $lang['login']; ?></button>
		</form>
	</div>
<?php else : ?>
<!---->
<?php
if ($config['total_preroll_ads'] > 0)
{
	if (isset($_COOKIE[COOKIE_PREROLLAD]) && strlen($_COOKIE[COOKIE_PREROLLAD]) > 0)
	{
		$display_preroll_ad = false;
	}
	
	if ( ! $video)
	{
		$preroll_ad_data = get_preroll_ad();
		
		if (is_array($preroll_ad_data))
		{
			$display_preroll_ad = true;

			$preroll_ad_data['timeleft_start'] = ($preroll_ad_data['duration'] > 60) ? sec2hms($preroll_ad_data['duration']) : $preroll_ad_data['duration'];
			$preroll_ad_player_uniq_id = $video['uniq_id'];
			$preroll_ad_player_page = $page;
		}
		else
		{
			$display_preroll_ad = false;
		}
		return $preroll_ad_data;
	}

	//
	$sql_where = $sql = '';
	$sql_where .= (is_array($userdata) && $userdata['id'] != 0) ? " (user_group = '0' OR user_group = '1') " : " (user_group = '0' OR user_group = '2') "; // 0 = everyone; 1 = logged only; 2 = guests only
	$sql_where .= ($sql_where != '') ? ' AND ' : '';
	$sql_where .= " status = '1' ";
	
	$sql = "SELECT * FROM pm_preroll_ads WHERE $sql_where ";
	
	if ( ! $result = mysql_query($sql))
	{
		$display_preroll_ad = false;
	}

	$categories = explode(',', $video['category']);
	
	$units = array();
	while ($row = mysql_fetch_assoc($result))
	{
		$options = array();
		if (strlen($row['options']) > 0)
		{
			$options = (array) unserialize($row['options']);
		}
		
		if (count($options['ignore_source']) > 0)
		{
			if (in_array($video['source_id'], $options['ignore_source']))
			{
				continue;
			}
		}
		
		if (count($options['ignore_category']) > 0)
		{
			$found = false; 
			foreach ($options['ignore_category'] as $k => $ignore_cat_id)
			{
				if (in_array($ignore_cat_id, $categories))
				{
					$found = true;
					break;
				}
			}
			
			if ($found)
			{
				continue;
			}
		}

		$units[] = array_merge($row, $options);
		unset($options);
	}
	mysql_free_result($result);

	$units_count = count($units);
	
	if ($units_count == 0)
	{
		$display_preroll_ad = false;
	}
	
	$rand = rand(0, $units_count-1);
	$preroll_ad_data = $units[$rand];
	
	$display_preroll_ad = true;
	$preroll_ad_data['timeleft_start'] = ($preroll_ad_data['duration'] > 60) ? sec2hms($preroll_ad_data['duration']) : $preroll_ad_data['duration'];
	$preroll_ad_player_uniq_id = $video['uniq_id'];
	$preroll_ad_player_page = $page;
}
?>

<?php if($display_preroll_ad == true) { ?>
<div id="preroll_placeholder" class="border-radius4">
	<div class="preroll_countdown">
	<?php echo $lang['preroll_ads_timeleft']; ?> <span class="preroll_timeleft"><?php echo $preroll_ad_data['timeleft_start']; ?></span>
	</div>
	<?php echo $preroll_ad_data['code']; ?>

	<?php if($preroll_ad_data['skip']) : ?>
		<div class="preroll_skip_countdown">
		   <?php echo $lang['preroll_ads_skip_msg']; ?> <span class="preroll_skip_timeleft"><?php echo $preroll_ad_data['skip_delay_seconds']; ?></span>
		</div>
		<div class="preroll_skip_button">
		<button class="btn btn-blue hide" id="preroll_skip_btn"><?php echo $lang['preroll_ads_skip']; ?></button>
		</div>
	<?php endif; ?>
	
	<?php if($preroll_ad_data['preroll_ad_data'] == 0) : ?>
		<img src="<?php echo _URL; ?>/ajax.php?p=stats&do=show&aid=<?php echo $preroll_ad_data['id']; ?>&at=<?php echo _AD_TYPE_PREROLL; ?>" width="1" height="1" border="0" />
	<?php endif; ?>
</div>
<?php 
} else { 
	include('player.php');
}
?>
<!---->
<?php endif; ?>
</div>

<?php echo show_mm_ad("mobile_video"); // ad after the video ?>

<div id="content">
    <div id="share">
	<div class="fb-like" data-href="<?php echo urldecode(makevideolink($video['uniq_id'], $video['video_title'], $video['video_slug'])); ?>" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
    </div>
	<?php if(!empty($video['description'])) { ?>
	<div id="video_description">
		<p class="description_txt">
		<?php echo $video['description']; ?>
		</p>
	</div>
	<?php } ?>

	<div id="related_categories">
		<strong><?php echo $lang['related_cats']; ?></strong>: <?php echo $category_name; ?>
	</div>

	<ul id="related-content-nav-links"> 
		<li id="btn_blue"><a href="#related" id="nav-link-related"><?php echo $lang['tab_related']; ?></a></li>
		<?php if ($video['allow_comments'] == 1) : ?>
		<li id="btn_blue"><a href="#comments" id="nav-link-comments"><?php echo $lang['comments']; ?><!-- (<?php echo $comments_no; ?>)--></a></li>
		<?php else : ?>
		<li id="btn_blue">&nbsp;</li>
		<?php endif;?>
	</ul>

	<div id="related" <?php echo (isset($_COOKIE['mm_related_view']) && $_COOKIE['mm_related_view'] != 'related') ? 'style="display: none;"' : ''; ?>>
		<ul id="video_listing">
		<?php
		$related_videos = mobi_get_related_video_list(explode(',', $video['category']), $video['video_title'], _RELATED_LIMIT, $video['id']);
		if (count($related_videos) > 0)
		{
			foreach ($related_videos as $k => $video_data)
			{
				echo videoLI($video_data);
			}
		}
		?>
		</ul>
	</div>
	
	<?php if ($video['allow_comments'] == 1) : ?>
	<div id="comments" <?php echo (isset($_COOKIE['mm_related_view']) && $_COOKIE['mm_related_view'] != 'comments') ? 'style="display: none;"' : ''; ?>>
		<?php if (((int) $config['comment_system_native'] + (int) $config['comment_system_facebook'] + (int) $config['comment_system_disqus']) > 1) : ?>
		<ul id="comments-nav-links">
			<?php if ($config['comment_system_native'] == 1) : ?>
				<li <?php echo ($_comment_primary == 'native') ? 'class="active"' : ''; ?>><a href="#comments-native" id="nav-link-comments-native" data-toggle="tab"><?php echo $lang['comments']; ?></a></li>
			<?php endif; ?>
			<?php if ($config['comment_system_facebook'] == 1) : ?>
				<li <?php echo ($_comment_primary == 'facebook') ? 'class="active"' : ''; ?>><a href="#comments-facebook" id="nav-link-comments-facebook" data-toggle="tab">Facebook</a></li>
			<?php endif; ?>
			<?php if ($config['comment_system_disqus'] == 1) : ?>
				<li <?php echo ($_comment_primary == 'disqus') ? 'class="active"' : ''; ?>><a href="#comments-disqus" id="nav-link-comments-disqus" data-toggle="tab">Disqus</a></li>
			<?php endif; ?>
		</ul>
		<?php endif; ?>
		
		 <div class="tab-content" id="comments-content">
			
			<?php if ($config['comment_system_native'] == 1) : ?>
			<div class="post_comment" id="comments-native">
				<?php if($logged_in == 1) : ?>		
					<span class="mycommentspan" name="mycommentspan" id="mycommentspan"></span>
					<form name="myform" method="post" id="myform" action="">
						<label for="comment_txt"><?php echo $lang['post_comment']; ?></label>
						<br /> 
						<textarea name="comment_txt" id="c_comment_txt" style="width: 99%" rows="3"></textarea>
						<br />
						<input type="hidden" id="c_vid" name="vid" value="<?php echo $video['uniq_id']; ?>" />
						<input type="hidden" id="c_user_id" name="user_id" value="<?php echo $userdata['id']; ?>" />
						<button class="submit border2" id="c_submit"><?php echo $lang['submit_comment']; ?></button>
					</form>
				<?php elseif ($logged_in == 0 && $config['guests_can_comment'] == 1) : ?> 
					<span class="mycommentspan" name="mycommentspan" id="mycommentspan"></span>
					<form name="myform" method="post" id="myform" action="">
						<label for="comment_txt"><?php echo $lang['post_comment']; ?></label>
						<br /> 
						<textarea name="comment_txt" id="c_comment_txt" style="width: 99%" rows="3"></textarea>
						<div id="pm-comment-form">
							<br />
							<input type="text" id="c_username" name="username" value="<?php echo $guestname; ?>" class="inputtext" placeholder="<?php echo $lang['your_name']; ?>" autocapitalization="true" />
							<img src="<?php echo _URL; ?>/include/securimage_show.php?sid=<?php echo md5(uniqid(time() + rand(0, 99))); ?>" id="secure_image" align="absmiddle" alt="">
		            		<img src="<?php echo _URL_MOBI; ?>/images/icon-refresh.png" width="18" height="18" border="0" onclick="document.getElementById('secure_image').src = '<?php echo _URL;?>/include/securimage_show.php?sid=' + Math.random(); return false;" />
							<br /> 
							<input type="text" name="imagetext" id="captcha" class="inputtext" autocomplete="off" placeholder="<?php echo $lang['enter_captcha'];?>" autocapitalization="false">
						</div>
						<input type="hidden" id="c_vid" name="vid" value="<?php echo $video['uniq_id']; ?>" />
						<input type="hidden" id="c_user_id" name="user_id" value="0" />
						<button class="submit border2" id="c_submit"><?php echo $lang['submit_comment']; ?></button>
					</form>
				<?php else :
					translate('<a href="'._URL_MOBI.'/login.'._FEXT.'">Sign in</a> with your <strong>'._SITENAME.'</strong> account to post comments.', lmore_signin2post); 
				endif; ?>
				
				<ul id="video_comments">
					<li style="display: none;" id="preview_comment"></li>
				<?php
				$sql = mysql_query("SELECT * FROM pm_comments WHERE uniq_id = '". $uniq_id ."' AND approved = '1' ORDER BY id DESC LIMIT "._COMMENTS_LIMIT);
				while ($row = mysql_fetch_array($sql))
				{
					$comment_id = $row['id'];
					//$row['comment'] = htmlentities($row['comment'], ENT_COMPAT, 'UTF-8');
					?>
						<li>
						<img src="<?php echo getavatar($row['user_id'], $row['username']); ?>" border="0" class="comm_avatar border4" />
						<div class="comment">
							<span class="comm_name"><?php echo $row['username']; ?></span>
							<span class="comm_date"><?php echo time_since($row['added'])." ".$lang['ago']; ?></span>
							<div class="comm_txt"><?php echo ($config['allow_emojis'] == 1) ? $emoji_client->shortnameToImage($row['comment']) : $row['comment']; ?></div>
						</div>
						</li>
					<?php
				}
				if (mysql_num_rows($sql) > 0 && mysql_num_rows($sql) >= _COMMENTS_LIMIT) :
				?>
				<div id="morec<?php echo $comment_id; ?>" class="morecbox">
					<div class="case" id="video_comments"></div>
					<div class="extra_data" id="<?php echo $uniq_id; ?>"></div>
					<div align="center">
						<div id="loader"><img src="<?php echo _URL_MOBI; ?>/images/moreajax.gif" /></div>
						<button class="minimal morec" id="<?php echo $comment_id; ?>">
							<?php translate("Load more comments", lmore_comments); ?>
						</button>
					</div>
				</div>
				<?php endif; ?>
				</ul><!--/.comments-->
			</div><!--/.post_comment-->
			
			<?php endif; ?>
			
			<?php if ($config['comment_system_facebook'] == 1) : ?>
			<div id="comments-facebook">
				<div class="fb-comments" data-href="<?php echo $video['video_href']; ?>" data-numposts="<?php echo $config['comments_page']; ?>" data-order-by="<?php echo $config['fb_comment_sorting']; ?>" data-colorscheme="light" data-width="200" data-mobile="true"></div>
			</div>
			<?php endif; ?>
			
			<?php if ($config['comment_system_disqus'] == 1) : ?>
			<div id="comments-disqus">
				<div id="disqus_thread"></div> 
				<script type="text/javascript">
				    var disqus_shortname = '<?php echo $config['disqus_shortname']; ?>'; 
				    var disqus_identifier = 'video-<?php echo $video['uniq_id']; ?>';
				    /* * * DON'T EDIT BELOW THIS LINE * * */
				    (function() {
				        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
				        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
				    })();
				</script>
			</div>
			<?php endif; ?>
		 </div><!--/.tab-content-->
	</div><!--/#comments-->
	<?php endif;?>
<?php
include('footer.php');
