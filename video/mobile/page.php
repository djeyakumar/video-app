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

if ($_GET['p'] != '')
{
	$page_id = (int) $_GET['p'];
}
else if ($_GET['name'] != '')
{
	$page_name = trim($_GET['name']);
	$page_name = urlencode($page_name); // @since 1.6.5
}

if ( ! $page_id && ! $page_name)
{
	header('Location: '. _URL_MOBI .'/index.php');
	exit();
}

$page = array();
if ($page_id)
{
	$page = get_page($page_id);
}
else
{
	$page = get_page_by_name($page_name);
}

if (count($page) == 0)
{
	$page['title'] = $lang['page_missing_title'];
	$page['content'] = $lang['page_missing_msg'];
}
else
{
	page_update_view_count($page['id']); // @since 1.6.5
}

$author = fetch_user_advanced($page['author']);
$author = $author['name'];

$meta_title = $page['title']." - "._SITENAME;
include('header.php');
?>
<div id="content">
	<div id="page">
	<h2><?php echo $page['title'];?></h2>
		<div class="page_poster">
		<?php echo $lang['articles_by']." ".$author;?>, <?php echo time_since($page['date'])." ".$lang['ago'];?>
		</div>

	<?php echo $page['content'];?>
	</div>
</div>
<?php
include('footer.php');
?>