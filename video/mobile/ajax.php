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

define('PM_DOING_AJAX', true);

require('../config.php');
require_once('settings.php');
require_once('../include/functions.php');
require_once('../include/user_functions.php');
require_once('../include/islogged.php');
require_once('../include/settings.php');
require_once('functions.php');

$illegal_chars = array(">", "<", "&", "'", '"');

$lastpos = $_POST['lastpos'];
$extradata = magicSlashes($_POST['extradata']);

if ($_GET['case'] != '' || $_POST['case'] != '')
{
	$case = ($_GET['case'] != '') ? $_GET['case'] : $_POST['case'];
}

if ($_GET['do'] != '' || $_POST['do'] != '')
{
	$action = ($_GET['do'] != '') ? $_GET['do'] : $_POST['do'];
}

if ($case == '')
{
	exit();
}

switch($case)
{
	case 'video':
		
		switch ($action)
		{
			
			case 'like':
			case 'upvote':
			case 'dislike':
			case 'downvote':
									
				if ( ! is_user_logged_in())
				{
					echo json_encode(array('success' => false,
										   'msg' => $lang['login_first']
										  ));
					exit();
				}

				require_once(ABSPATH . '/include/rating_functions.php');
				
				$response 	= array('success' => false, 'msg' => '');
				$video_id 	= trim($_POST['vid']);
				
				if (preg_match('/([0-9a-zA-Z-]{5,20})/', $video_id) != 0)
				{
					$video = request_video($video_id, 'detail', true);
					if (is_array($video))
					{
						$vote_value = 0;
						
						switch ($action)
						{
							case 'like':
							case 'upvote':
								$vote_value = 1;
							break;
						}
						
						$voted = bin_rating_vote($video['uniq_id'], $vote_value);
						
						$response['success'] = true;
						$item_meta = bin_rating_get_item_meta($video['uniq_id']);
						$balance = bin_rating_calc_balance($item_meta['up_vote_count'], $item_meta['down_vote_count']);
						$response = array_merge($response, $balance, $item_meta);
					}
					else
					{
						$response['success'] = false;
						$response['msg'] = $lang['video_not_found'];
					}
				}
				else
				{
					$response['success'] = false;
					$response['msg'] = $lang['video_not_found'];
				}
				
				echo json_encode($response);
				exit();
			break;
			
			case 'getplayer': // called after a Pre-roll ad has finished running
			
				$uniq_id = trim($_GET['vid']);
				$ad_id = (int) $_GET['aid'];
				$player_page = trim($_GET['player']);
				$playlist_uniq_id = $_GET['playlist'];
				
				if ($player_page == '' || ! in_array($player_page, array('index', 'detail', 'favorites', 'embed')))
				{
					$player_page = 'detail';
				}
	
				if(strlen($uniq_id) < 10 && strlen($uniq_id) > 5)
				{
					if(!ctype_alnum($uniq_id))
						$uniq_id = '';
					else
						$uniq_id = secure_sql($uniq_id);
				}
				else
				{
					$uniq_id = '';
				}
				
				if ($uniq_id == '')
				{
					exit('Invalid video ID');
				}
				
				//	set ad delay cookie ?
				if (empty($_COOKIE[COOKIE_PREROLLAD]))
				{
					if ($config['total_preroll_ads'] > 0)
					{
						if ($config['preroll_ads_delay'] != 0)
						{
							setcookie(COOKIE_PREROLLAD, PREROLL_AD_HASH, time() + $config['preroll_ads_delay'], COOKIE_PATH);
						}
					}
				}
				
				if ($player_page == 'detail' && $playlist_uniq_id != '')
				{
					$playlist = get_playlist($playlist_uniq_id);
	
					if (($playlist['visibility'] == PLAYLIST_PRIVATE && $playlist['user_id'] != $userdata['id']) || $playlist['items_count'] == 0)
					{
						$playlist = false;
					}
					else
					{
						$playlist_items = playlist_get_items($playlist['list_id'], 0, $playlist['items_count'], $playlist['sorting']);
						
						// prev/next links
						foreach ($playlist_items as $k => $item)
						{
							if ($item['uniq_id'] == $uniq_id)
							{
								$total_items = count($playlist_items);
								$pos = ($k == 0) ? $total_items - 1 : $k - 1;
								
								$playlist_prev_url = $playlist_items[$pos]['playlist_video_href'];
								
								$pos = ($k == ($total_items - 1)) ?  0 : $k + 1;
								$playlist_next_url = $playlist_items[$pos]['playlist_video_href'];
								
								unset($pos, $total_items);
								
								break;
							}
						}
					}
					
				}

				$video = request_video($uniq_id);

				$video_subtitles = array();
				$video_subtitles = (array) get_video_subtitles($uniq_id);
					
				$embedcode = generate_embed_code($video['uniq_id'], $video, false, 'iframe');
				$video_data = $video;
				$page = $player_page;
				include('player.php');
				
				exit();
			break;

		}
	break;

	case 'stats': // advertisments
	
		$ad_id = (int) $_GET['aid'];
		$ad_type = (int) $_GET['at'];
		
		switch ($action) 
		{
			case 'show':
				
				if ( ! pm_detect_crawler())
				{
					if ($ad_id && in_array($ad_type, array(_AD_TYPE_CLASSIC, _AD_TYPE_VIDEO, _AD_TYPE_PREROLL)))
					{
						$sql_table = '';
						switch ($ad_type)
						{
							case _AD_TYPE_CLASSIC:
								$sql_table = 'pm_ads';
							break;
							
							case _AD_TYPE_VIDEO:
								$sql_table = 'pm_videoads';
							break;
							
							case _AD_TYPE_PREROLL:
								$sql_table = 'pm_preroll_ads';
							break;
						}
						
						$sql = "SELECT COUNT(*) as total_found FROM $sql_table WHERE id = $ad_id";
						if ($result = @mysql_query($sql))
						{
							$row = mysql_fetch_assoc($result);
							mysql_free_result($result);
							
							if ($row['total_found'] > 0)
							{
								$sql = "INSERT INTO pm_ads_log (date, ad_id, ad_type, impressions)
										VALUES (CURDATE(), $ad_id, $ad_type, 1) 
										ON DUPLICATE KEY 
											UPDATE impressions = impressions + 1";
								@mysql_query($sql);
				
							}
						}
					}
				}

				header("Content-type: image/gif"); 
				header("Expires: Wed, 5 Feb 1986 06:06:06 GMT"); 
				header("Cache-Control: no-cache"); 
				header("Cache-Control: must-revalidate"); 
				printf('%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%', 71,73,70,56,57,97,1,0,1,0,128,255,0,192,192,192,0,0,0,33,249,4,1,0,0,0,0,44,0,0,0,0,1,0,1,0,0,2,2,68,1,0,59);
				
				exit();
			
			break;
			
			case 'skip':
				
				if ($ad_id && in_array($ad_type, array(_AD_TYPE_CLASSIC, _AD_TYPE_VIDEO, _AD_TYPE_PREROLL)))
				{
					$sql_table = '';
					switch ($ad_type)
					{
						case _AD_TYPE_CLASSIC:
							$sql_table = 'pm_ads';
						break;
						
						case _AD_TYPE_VIDEO:
							$sql_table = 'pm_videoads';
						break;
						
						case _AD_TYPE_PREROLL:
							$sql_table = 'pm_preroll_ads';
						break;	
					}
					
					$sql = "SELECT COUNT(*) as total_found FROM $sql_table WHERE id = $ad_id";
					if ($result = @mysql_query($sql))
					{
						$row = mysql_fetch_assoc($result);
						mysql_free_result($result);
						
						if ($row['total_found'] > 0)
						{
							$sql = "INSERT INTO pm_ads_log (date, ad_id, ad_type, skips)
									VALUES (CURDATE(), $ad_id, $ad_type, 1) 
									ON DUPLICATE KEY 
										UPDATE skips = skips + 1";
							@mysql_query($sql); 
						}
					}
				}

			break;
			
			case 'click':
			break;
		}
		break;


}
if ($lastpos == '' || $case == '')
{
	exit();
}

if(isSet($lastpos))
{
	$lastpos = mysql_real_escape_string($lastpos);
	//$result=mysql_query("SELECT * FROM pm_videos WHERE id<'".$lastpos."' ORDER BY id DESC LIMIT 9");
	
	switch ($case)
	{
		case 'new_videos':
			$result = mysql_query("SELECT * FROM pm_videos WHERE added <= '". time() ."' AND id<'".$lastpos."' AND source_id IN (". implode(',', $_mobile_supported_sources) .")  ORDER BY id DESC LIMIT 5");
			$extradata = $extradata;
		break;
		
		case 'browse':
			$result = mysql_query("SELECT * FROM pm_videos WHERE added <= '". time() ."' AND id<'".$lastpos."' AND (category LIKE '%,".$extradata.",%' 
					   OR category LIKE '%,".$extradata."' 
					   OR category LIKE '".$extradata.",%' 
					   OR category='".$extradata."') 
					   AND source_id IN (". implode(',', $_mobile_supported_sources) .") 
					   ORDER BY id DESC LIMIT 5");
		break;
		
		case 'browse_articles':
			$result = mysql_query("SELECT * FROM art_articles WHERE status = '1' 
				AND date<'".$lastpos."' 
				AND (category LIKE '". $extradata ."' 
					 OR category LIKE '". $extradata .",%' 
					 OR category LIKE '%,". $extradata ."' 
					 OR category LIKE '%,". $extradata .",%')  
				ORDER BY date DESC LIMIT 5");

		break;	
		
		case 'video_comments': 
			$result = mysql_query("SELECT * FROM pm_comments WHERE uniq_id = '".$extradata."' AND approved = '1' AND id<'".$lastpos."' ORDER BY added DESC LIMIT 10");
				
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
			
		break;
	
		case 'search': //get keys
		break;
		
		case 'related_videos': // get uniq-id
		break;

	}
	

	while($row=mysql_fetch_array($result))
	{
		$video_id = $row['id'];
		$article_id = $row['date'];
		if($case == 'video_comments') {
			//$row['comment'] = htmlentities($row['comment'], ENT_COMPAT, 'UTF-8');
?>
			<li>
			<img src="<?php echo getavatar($row['user_id'], $row['username']); ?>" border="0" class="comm_avatar border4" />
			<div class="comment">
				<span class="comm_name"><?php echo $row['username']; ?></span><span class="comm_date"><?php echo time_since($row['added'])." ".$lang['ago']; ?></span>
				<div class="comm_txt"><?php echo ($config['allow_emojis'] == 1) ? $emoji_client->shortnameToImage($row['comment']) : $row['comment']; ?></div>
			</div>
			</li>
<?php
		} elseif($case == 'browse') { 
			echo videoLI($row);
		} elseif($case == 'browse_articles') {
			echo articleLI($row);
		} else { 
			echo videoLI($row);
		}
	}
	$total_results = mysql_num_rows($result);
	if($case == "video_comments" && $total_results > 0) {
?>
	<div id="morec<?php echo $video_id; ?>" class="morecbox">
	<div align="center">
	<div id="loader"><img src="<?php echo _URL_MOBI; ?>/images/moreajax.gif" /></div>
	<button class="minimal morec" id="<?php echo $video_id; ?>">
	<?php translate("Load more comments", lmore_comments); ?>
	</button>
	</div>
	<div class="case" id="<?php echo $case; ?>"></div>
	<div class="extra_data" id="<?php echo $extradata; ?>"></div>
	</div>
<?php
	} elseif($case == "browse_articles" && $total_results > 0) {
?>
	<div id="more<?php echo $article_id; ?>" class="morebox">
	<div align="center">
	<div id="loader"><img src="<?php echo _URL_MOBI; ?>/images/moreajax.gif" /></div>
	<button class="minimal more" id="<?php echo $article_id; ?>">
	<?php translate("Load more", lmore); ?>
	</button>
	</div>
	<div class="case" id="<?php echo $case; ?>"></div>
	<div class="extra_data" id="<?php echo $extradata; ?>"></div>
<?php
	}
	elseif($total_results > 0) {
?>
	<div id="more<?php echo $video_id; ?>" class="morebox">
	<div align="center">
	<div id="loader"><img src="<?php echo _URL_MOBI; ?>/images/moreajax.gif" /></div>
	<button class="minimal more" id="<?php echo $video_id; ?>">
	<?php translate("Load more videos", lmore_videos); ?>
	</button>
	</div>
	<div class="case" id="<?php echo $case; ?>"></div>
	<div class="extra_data" id="<?php echo $extradata; ?>"></div>
<?php
	} elseif($total_results == 0) {
	
	}
}
?>