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
// | Copyright: (c) 2004-2016 PhpSugar.com. All rights reserved.
// +-------------------------------------------------------------------------+
session_start();
$page_type = 'video';
include('settings.php');

if($_POST['select_language'] == 1 || (strcmp($_POST['select_language'],"1") == 0))
{
	require_once('../include/settings.php');
	
	$l_id = (int) $_POST['lang_id'];
	if( ! array_key_exists($l_id, $langs) )
	{
		$l_id = 1;
	}
	
	setcookie(COOKIE_LANG, $l_id, time()+COOKIE_TIME, COOKIE_PATH);
	exit();
}


$meta_title = _SITENAME;
include('header.php');
$_page = "index";
$_login = $_GET['login'];

$welcome_msg = '';
if ($_login == 1)
	$welcome_msg = $lang['loggedin'];

if(!empty($welcome_msg))
	echo '<div id="welcome">'.$welcome_msg.'</div>';
?>
<div id="content">
<?php
	$sql = mysql_query("SELECT * FROM pm_videos WHERE featured = '1' AND added <= '". time() ."' 
	AND source_id IN (". implode(',', $_mobile_supported_sources) .") 
	ORDER BY id DESC LIMIT "._FEATURED_LIMIT);
$featured_count = mysql_num_rows($sql);

if($featured_count == 0) {
	$sql = mysql_query("SELECT * FROM pm_videos WHERE added <= '". time() ."' 
						AND source_id IN (". implode(',', $_mobile_supported_sources) .") 
						ORDER BY site_views DESC LIMIT "._FEATURED_LIMIT);
						
	$featured_count = mysql_num_rows($sql);
}
if($featured_count >= 1) {
?>
<div id="divider" class="featured_videos" <?php if(_RTL == 1) echo 'dir="rtl"'; ?>><?php echo strtoupper($lang['featured']); ?></div>
<div id="slider" <?php if(_RTL == 1) echo 'dir="rtl"'; ?>>
	<ul>
	<?php
	while($row = mysql_fetch_array($sql))
	{
		$video_id = $row['id'];
		echo videoLIslider($row);
	}
	?>
	</ul>
</div>
<nav>
	<a href='#' id='prev' onclick='slider.prev();return false;'><em><?php echo $lang['prev']; ?></em></a>
	<span id='position'>
	<?php for ($i=1; $i<=$featured_count; $i++) { 
	if($i == 1) 
		echo "<em class='on'>&bull;</em>"; 
	else
		echo "<em>&bull;</em>"; 
	} ?>		
	</span>
	<a href='#' id='next' onclick='slider.next();return false;'><em><?php echo $lang['next']; ?></em></a>
</nav>

<ul id="featured">

</ul>
<?php
} // end featured area
?>

<div id="divider" class="new_videos"><?php echo strtoupper($lang['new_videos']); ?></div>
<ul id="video_listing">
	<?php
	$sql = mysql_query("SELECT * FROM pm_videos WHERE added <= '". time() ."' AND source_id IN (". implode(',', $_mobile_supported_sources) .") 
	ORDER BY id DESC LIMIT "._NEW_LIMIT);
	while($row = mysql_fetch_array($sql))
	{
	$video_id = $row['id'];
	echo videoLI($row);
	}
	?>
	<div id="more<?php echo $video_id; ?>" class="morebox">
	<div class="case" id="new_videos"></div>
	<div class="extra_data" id=""></div>
	<div align="center">
	<div id="loader"><img src="<?php echo _URL_MOBI; ?>/images/moreajax.gif" /></div>
	<button class="minimal more" id="<?php echo $video_id; ?>">
	<?php translate("Load more videos", lmore_videos); ?>
	</button>
	</div>
	</div>
</ul>
</div>
<?php
include('footer.php');
?>