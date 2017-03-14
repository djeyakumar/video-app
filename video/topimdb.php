<?php
// +------------------------------------------------------------------------+
// | PHP Melody ( www.phpsugar.com )
// +------------------------------------------------------------------------+
// | PHP Melody IS NOT FREE SOFTWARE
// | If you have downloaded this software from a website other
// | than www.phpsugar.com or if you have received
// | this software from someone who is not a representative of
// | PHPSUGAR, you are involved in an illegal activity.
// | ---
// | In such case, please contact: support@phpsugar.com.
// +------------------------------------------------------------------------+
// | Developed by: PHPSUGAR (www.phpsugar.com) / support@phpsugar.com
// | Copyright: (c) 2004-2013 PHPSUGAR. All rights reserved.
// +------------------------------------------------------------------------+

session_start();
define('IGNORE_MOBILE', true);
require('config.php');
require_once('include/functions.php');
require_once('include/user_functions.php');
require_once('include/islogged.php');
require_once('include/rating_functions.php');

require 'extensions/IMDBApi/class_IMDb.php';
$imdb = new IMDb(true);
$movies = array();
$tv_series = array();
$videos = $imdb->chart_top();
$index = 0;
$pageSize = 16;
$page = isset($_GET['page']) && !empty($_GET['page']) ? $_GET['page'] : 1;
foreach ($videos as $key => $video) {
	if($video->type == "feature") {
		$from = ($page * $pageSize) - $pageSize;
		$to = ($page * $pageSize);
		if($index >= $from && $index < $to ) {
			$data = array(
				"video_title"=>$video->title,
				"rating"=>$video->rating,
				"img_url"=>$video->image->url
			);
			$movies[] = $data;
		}
		$index++;
	}
}

$page_title = "TOP IMDB";
$smarty->assign('page_title', $page_title);
$smarty->assign('template_dir', $template_f);
$smarty->assign('movies', $movies);
$modframework->trigger_hook('newvideos_bottom');
$smarty->display('topimdb.tpl');
?>