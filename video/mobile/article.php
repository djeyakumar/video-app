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
$page_type = 'article';
include('settings.php');

if ( ! _MOD_ARTICLE)
{
	header("Location: ". _URL_MOBI ."/index.". _FEXT);
	exit();
}
$cat = magicSlashes($_GET['c']);
$cat_id = get_catid_mobi('art_categories', $cat);
$category_name = get_catname_mobi('art_categories', $cat);

$meta_title = $category_name." - "._SITENAME;
include('header.php');

if($cat_id == '') {
?>
	<div id="navigation"><?php translate("Browsing the articles", browse_art); ?></div>
	<ul id="category_listing">
	<?php
	echo list_categories_mobi('art_categories', 0, '', array('max_levels' => 2));
	?>
	</ul>
<?php
}
?>
<div id="content">
	<?php
	if($cat_id != '' && is_numeric($cat_id)) {
	?>
		<div id="navigation"><?php echo $category_name; ?></div>
		<ul id="art_listing">
		<?php
		
		// do sticky articles first
		$time_now = time();
		$articles = array();
		
		$sql = "SELECT * 
				FROM art_articles 
				WHERE status = 1 
				  AND date <= '". $time_now ."' 
				  AND featured = '1'
				ORDER BY id DESC";
		$result = mysql_query($sql);
		if (mysql_num_rows($result) > 0)
		{
			while ($row = mysql_fetch_assoc($result))
			{
				$articles[$row['id']] = $row;
			}
			mysql_free_result($result);
		}
		
		$sql = "SELECT * 
				FROM art_articles 
				WHERE date <= '". $time_now ."' 
				  AND status = '1' 
				  AND (category LIKE '". $cat_id ."' 
					 OR category LIKE '". $cat_id .",%' 
					 OR category LIKE '%,". $cat_id ."' 
					 OR category LIKE '%,". $cat_id .",%')  
				ORDER BY date DESC LIMIT ". _BROWSE_ART_LIMIT;
		$result = mysql_query($sql);
		$total_regular = mysql_num_rows($result);
		if ($total_regular > 0)
		{
			while ($row = mysql_fetch_assoc($result))
			{
				$articles[$row['id']] = $row;
			}
			mysql_free_result($result);
		}
		
		$total_articles = count($articles);
		if ($total_articles)
		{
			foreach ($articles as $a_id => $a_data)
			{ 
				$last_date = $a_data['date'];
				echo articleLI($a_data);
			}
		}
		
		
		if($total_articles > 0 && $total_regular >= _BROWSE_ART_LIMIT) : 
		?>
		
		<div id="more<?php echo $last_date; ?>" class="morebox">
			<div align="center">
			<div id="loader"><img src="<?php echo _URL_MOBI; ?>/images/moreajax.gif" /></div>
			<button class="minimal more" id="<?php echo $last_date; ?>"><?php translate("Load more", lmore); ?></button>
			</div>
			<div class="case" id="browse_articles"></div>
			<div class="extra_data" id="<?php echo $cat_id; ?>"></div>
		</div>
		</ul>
	<?php
		elseif ($total_regular == 0) : ?>
			<div class="noresults"><?php echo $lang['article_no_articles']; ?></div>
	<?php 
		endif;
	}
	?>
</div>
<?php
include('footer.php');
?>