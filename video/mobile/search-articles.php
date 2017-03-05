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
include('header.php');

$searchstring = trim($_GET['keywords']);
$searchstring = urldecode($searchstring);
$searchstring = str_replace(array("%", ","), '', $searchstring);
$searchstring = substr($searchstring, 0, 80); // limit search phrase
$searchstring = htmlspecialchars($searchstring, ENT_NOQUOTES);
$searchstring = secure_sql($searchstring);
?>
<div id="content">
	<div id="navigation"><?php echo $lang['search_results']; ?> - &ldquo;<em><?php echo $searchstring; ?></em>&rdquo;</div>
	<ul id="art_listing">
<?php
$page = $_GET['page'];

if(empty($page) || !is_numeric($page) || $page == '')
	$page = 1;

$limit = _SEARCH_RESULTS_LIMIT;
$from = $page * $limit - ($limit);
$total_results = 0;
$num_res = 0;

if((isset($_GET['btn']) && trim($_GET['btn']) != '') || (empty($_GET['btn']) && trim($searchstring) != ''))
{
	// update hits for this search pharse
	if ($page == 1)
	{
		$sql = "SELECT COUNT(*) as total 
				FROM pm_searches 
				WHERE string = '". $searchstring ."'";
		$result = @mysql_query($sql);
		$row = @mysql_fetch_assoc($result);
		@mysql_free_result($sql_string_check);
		
		if ($row['total'] > 0)
		{
			@mysql_query("UPDATE pm_searches SET hits=hits+1 WHERE string = '".$searchstring."'");
		}
		else
		{
			@mysql_query("INSERT INTO pm_searches SET string = '".$searchstring."', hits = '1'");
		}				
	}

	$keyword = $searchstring;	
	if ($keyword != '')
	{
		$keyword = str_replace( array("%", ">", "<"), '', $keyword);
		$keyword = trim($keyword);
		$keyword = secure_sql($keyword);
		
		$where = '';
		$and = '';
		$terms = explode(' ', $keyword);
		$limit_terms = 10; // limit query terms
		$searched_terms = 0;
		
		foreach ($terms as $k => $term)
		{
			$term = trim($term, "\"'\n\r.,-_()[]{} ");
			
			if (strlen($term) >= 2)
			{
				$where .= "{$and} ((title LIKE '%".$term."%') OR (content LIKE '%".$term."%')) ";
				$and = ' AND ';
				$searched_terms++;
			}
			
			if ($searched_terms >= $limit_terms)
			{
				break;
			}
		}
		
		if (count($terms) > 1)
		{
			$where .= " OR ((title LIKE '%".$keyword."%') OR (content LIKE '%".$keyword."%'))";
		}
		
		$sql = "SELECT id, title, content, category, status, date, author, allow_comments, comment_count, views 
				FROM art_articles 
				WHERE date <= '". time() ."' AND (". $where .")";
	}
	$result = @mysql_query($sql);
	
	// get total found rows
	$sql = "SELECT FOUND_ROWS()";
	$result2 = mysql_query($sql);
	$num_res = mysql_fetch_array($result2);
	$num_res = (int) $num_res[0];
	$total_results = $num_res;

	
	$j = 0; 
	$item = '';
			
	if ($total_results > 0)
	{
		while ($row = mysql_fetch_array($result)) 
		{ 
		echo articleLI($row);
		}
		mysql_free_result($result);
	}
	else
	{
		$item = '<div class="noresults">'.$lang['search_results_msg1'].'</div>';
	}
}
else
{
	$item = '<div class="noresults">'.$lang['search_results_msg2'].'</div>';
}

// generate pagination
$uri = $_SERVER['REQUEST_URI'];
$uri = explode('?', $uri);
if (strlen($uri[1]) == 0)
{
	$uri[1] ='keywords='. magicSlashes($_GET['keywords']) .'&btn=Search';
}


$filename = ('' != $_SERVER['PHP_SELF']) ? basename($_SERVER['PHP_SELF']) : 'search.php';

$pagination = generate_smart_pagination_mobi($page, $total_results, $limit, 1, $filename, $uri[1], 0);	

?>
<?php echo $item; ?>
	</ul>

	<?php if($total_results > $limit) { ?>
	<div id="pagination" class="border4">
	<?php echo $pagination; ?>
	</div>
	<?php } ?>
</div>

<?php
include('footer.php');
?>