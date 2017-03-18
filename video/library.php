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

$pageSize = 16;
$libHeads = array("0-9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
	"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

$q = isset($_GET['q']) && !empty($_GET['q']) ? $_GET['q'] : '0-9';
$p = isset($_GET['p']) && !empty($_GET['p']) ? $_GET['p'] : 1;

$list = get_videos("letter", $pageSize, $p);

$total = $list['total'];
$movies = $list['videos'];

$total_pages = (int) ($total / $pageSize);

$pagination = "";
if($total_pages > 0) {
	$pagination .= '<div class="paging">';
	$pagination .= '<ul class="pagination">';
	for($ind = 1; $ind <= $total_pages; $ind++) {
		if($p == $ind) {
			$pagination .= '<li class="active"><a href="library.php?q='.$q.'&p='.$ind.'">'.$ind.'</a></li>';
		} else {
			$pagination .= '<li><a href="library.php?q='.$q.'&p='.$ind.'">'.$ind.'</a></li>';
		}
	}
	$pagination .= '</ul>';
	$pagination .= '</div>';
}

$page_title = "Movies By Letter";
$smarty->assign('q', $q);
$smarty->assign('p', $p);
$smarty->assign('pagination', $pagination);

$smarty->assign('page_title', $page_title);
$smarty->assign('libHeads', $libHeads);
$smarty->assign('template_dir', $template_f);
$smarty->assign('movies', $movies);
$modframework->trigger_hook('newvideos_bottom');
$smarty->display('library.tpl');
?>