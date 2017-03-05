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

function update_view_count_mobi($video_id, $current_view_count = '') // @since 1.6.5
{
	global $config, $_setcookie_secure, $_setcookie_httponly;
	$updated = false;
	$session_list = array();
	$cookie_list = array();

	$fn_encode = 'base64_encode'; //(function_exists('gzcompress')) ? 'gzcompress' : 'base64_encode';
	$fn_decode = 'base64_decode'; //(function_exists('gzuncompress')) ? 'gzuncompress' : 'base64_decode';

	if (pm_detect_crawler())
	{
		return false;
	}
	
	if ($_COOKIE['watched_video_list'])
	{
		$cookie_list = (array) explode(',', $fn_decode($_COOKIE['watched_video_list']));
	}

	if ( ! in_array('watched', $_SESSION))
	{
		$_SESSION['watched'] = '';
	}
	
	$session_list = (array) unserialize($_SESSION['watched']);

	$list = array_merge($cookie_list, $session_list);
	
	if (count($list) > 0)
	{
		foreach ($list as $k => $v)
		{
			$v = (int) $v;
			if ($v)
			{
				$list[$k] = $v;
			}
			else 
			{
				unset($list[$k]);
			}
		}
	}

	if ( ! in_array($video_id, $list))
	{
		$featured_treshold = (int) $config['auto_feature'];
		$sql_featured = ''; 
		if ($featured_treshold > 0 && ($current_view_count+1 == $featured_treshold))
		{
			$sql_featured = ", featured = '1' ";
		}
		
		$sql = "UPDATE pm_videos 
				SET site_views = site_views+1 "; 
		$sql .= ($mark_watched) ? ", lastwatched = '". time() ."' " : '';
		$sql .= $sql_featured ." 
				WHERE id = '". $video_id ."'";
				
		$result = @mysql_query($sql);
		$session_list[] = $cookie_list[] = (int) $video_id;
		$_SESSION['watched'] = serialize($session_list);
		@setcookie('watched_video_list', $fn_encode(implode(',', $cookie_list)), time() + 86400, COOKIE_PATH); // keep for 24 hours
		$updated = true;
	}
	return $updated;
}
function pm_number_format_mobi($number)
{
	return number_format($number, 0, '.', ',');
}

function is_serialized_mobi($data) 
{
    // if it isn't a string, it isn't serialized
    if ( !is_string( $data ) )
        return false;
    $data = trim( $data );
    if ( 'N;' == $data )
        return true;
    if ( !preg_match( '/^([adObis]):/', $data, $badions ) )
        return false;
    switch ( $badions[1] ) {
        case 'a' :
        case 'O' :
        case 's' :
            if ( preg_match( "/^{$badions[1]}:[0-9]+:.*[;}]\$/s", $data ) )
                return true;
            break;
        case 'b' :
        case 'i' :
        case 'd' :
            if ( preg_match( "/^{$badions[1]}:[0-9.E-]+;\$/", $data ) )
                return true;
            break;
    }
    return false;
}
function list_categories_mobi($table = 'pm_categories', $parent = 0, $selected = 0, $args = array()) // deprecated: $parent 
{
	$output = '';
	
	$defaults = array(
		'db_table' => $table,
		'selected' => 0, 
		'order_by' => 'position',
		'sort' => 'ASC',
		'selected_grandfather' => 0, 
		'spacer' => "\t",
		'max_levels' => 1,
		'ul_wrapper' => true
	);
	
	$options = array_merge($defaults, $args);
	$options['selected'] = ( ! is_object($selected)) ? $selected : 0;
	extract($options);
	
	$parents = $parent_ids = $children = array();
	$categories = load_categories($options);
	
	foreach ($categories as $c_id => $c)
	{
		if ($c['parent_id'] == 0)
		{
			$parents[] = $c;
			$parent_ids[] = $c['id'];
		}
		else
		{
			$children[$c['parent_id']][] = $c;
		}
	}

	// find "grandfather" of selected child category
	if (count($parent_ids) > 0 && $selected > 0 && ( ! in_array($selected, $parent_ids)))
	{
		$options['selected_grandfather'] = $selected;

		$counter = 0;
		$exit_limit = count($parent_ids) * 3;
		while (( ! in_array($options['selected_grandfather'], $parent_ids)) && $counter < $exit_limit)
		{
			$find = $options['selected_grandfather'];
			foreach ($children as $pid => $children_arr)
			{
				$found = false;
			
				if (count($children_arr) > 0)
				{
					foreach ($children_arr as $k => $child)
					{
						if ($child['id'] == $find)
						{
							$found = true;
							$options['selected_grandfather'] = $child['parent_id'];
							break;
						}
					}
					if ($found)
					{
						break;
					}
				}
			}
			
			$counter++;
		}
	}
	
	foreach ($parents as $k => $p)
	{
		$options['expand_items'] = ($options['selected_grandfather'] == $p['id']) ? true : false;
		$output .= list_categories_display_item_mobi($p, $children, 0, $options);
	}

	if (count($children) > 0 && $options['max_levels'] == 0)
	{
		foreach ($children as $parent_id => $orphans)
		{
			foreach ($orphans as $k => $orphan)
			{
				$orphan['parent_id'] = 0;
				$output .= list_categories_display_item_mobi($orphan, $empty, 0, $options);
			}
		}
	}
	
	//	wrapper
	if ($ul_wrapper)
	{
		return "\n".$output."\n";
	}
	
	return $output;
}
function list_categories_display_item_mobi($item, &$all_children, $level = 0, $options)
{
	$li_class = $caturl = $output = $li_item = '';

	if ( ! $item)
		return;
	
	$padding = str_repeat($options['spacer'], $level);
		
	// href
	if($options['db_table'] == 'pm_categories') {
		if(_SEOMOD == 1) 
			$caturl = _URL_MOBI."/browse-". $item['tag'] ."-videos-1-date.html";
		else
			$caturl = _URL_MOBI."/category.php?cat=". $item['tag'];
	}
	else {
		$caturl = art_make_link_mobi('category', array('id' => $item['id'], 'tag' => $item['tag']));
	}
	$sub_cats = '';

	if (isset($all_children[$item['id']]) && ($level < $options['max_levels'] || $options['max_levels'] == 0))
	{
		$sub_cats .= "\n";
		
		foreach ($all_children[$item['id']] as $k => $child)
		{
			if ( ! isset($newlevel))
			{
				$newlevel = true;
				if ($level == 0)
					$sub_cats .= $padding."<span id='maximizer'><a href='#' class='maximizer'>+</a></span>\n<ul id='subcategory_listing'>\n";
				else
					$sub_cats .= $padding."<ul id='subcategory_listing'>\n";

			}
			$sub_cats .= list_categories_display_item_mobi($child, $all_children, $level+1, $options);
		}
		unset($all_children[$item['id']]);
	}
	
	// li class
	if ($item['id'] == $options['selected'])
	{
		if ($item['parent_id'] == 0)
		{
			$li_class = 'selectedcat';
		}
		else 
		{
			$li_class = 'selectedsubcat';
		}
	}
	else 
	{
		$li_class = '';
	}
	
	if ($options['selected_grandfather'] > 0)
	{
		if ($item['id'] == $options['selected_grandfather'])
		{
			if ($item['parent_id'] == 0)
			{
				$li_class = 'selectedcat';
			}
			else 
			{
				$li_class = 'selectedsubcat';
			}
		}
	}
		
	// li
	$output .= $padding .'<li class="'. $li_class .'"><a href="'. $caturl .'">'. htmlentities($item['name'],ENT_COMPAT,'UTF-8') .'</a>';
	if(_SHOW_CAT_COUNT == 1 && $options['db_table'] == 'pm_categories')
		$output .= ' <span class="category_count">'.$item['total_videos'].'</span>';
	elseif(_SHOW_CAT_COUNT == 1 && $options['db_table'] == 'art_categories')
		$output .= ' <span class="category_count">'.$item['total_articles'].'</span>';	
		
	$output .= $sub_cats;
	
	if (isset($newlevel) && $newlevel)
	{
		$output .= "$padding</ul>\n";
	}
		
	$output .= "$padding</li>\n";
	
	return $output;
}

function getavatar($user_id, $username) {

	if ($user_id == 0)
	{
		$avatar_url = _AVATARS_DIR .'pm-avatar.png';
	}
	else
	{
		$sql = "SELECT id, gender, avatar, power  
				FROM pm_users 
				WHERE username = '".secure_sql($username)."'";
		$result = @mysql_query($sql);
		if ( ! $result)
		{
			$avatar_url = _AVATARS_DIR .'pm-avatar.png';
		}
		else
		{
			$user = mysql_fetch_assoc($result);
			mysql_free_result($result);
			
			if (empty($user['avatar']) || $user['avatar'] == 'pm-avatar.png')
			{
				$avatar_url = _AVATARS_DIR .'pm-avatar.png';
			}
			else
			{
				$avatar_url = _AVATARS_DIR . $user['avatar'];
			}
		}
		
	}
	return $avatar_url;
}
function make_cats_mobi($table = 'pm_categories', $cat_ids) {
	
	$categories = load_categories(array('db_table' => $table));
	
	$selected = explode(',', $cat_ids);
	
	foreach ($selected as $k => $v)
	{
		$selected[$k] = (int) $v;
	}
	
	$links = '';
	
	foreach ($categories as $c_id => $c)
	{
		if (in_array($c_id, $selected))
		{
			if($table == 'pm_categories') {
			{
				if(_SEOMOD == 1) 
					$links .= "&bull; <a href=\""._URL_MOBI."/browse-". $c['tag'] ."-videos-1-date.html\" class=\"border2\">".$c['name']."</a>";
				else
					$links .= "&bull; <a href=\""._URL_MOBI."/category.php?cat=".$c['tag']."\" class=\"border2\">".$c['name']."</a>";
				}
					
				
			} else {
				$links .= "&bull; <a href=\"".art_make_link_mobi('category', array('id' => $c['id'], 'tag' => $c['tag']))."\" class=\"border2\">".$c['name']."</a> ";
			}
		}
	}

	return $links;
}
function sec2min_mobi($sec) {
	if($sec == 0)
		return "";
   
    	$hms = "";
	$hours = intval(intval($sec) / 3600);
	if ($hours)
	{
		$hms .= ($padHours) ? str_pad($hours, 2, "0", STR_PAD_LEFT).':' : $hours.':';
	}
	$minutes = intval(($sec / 60) % 60);
	$hms .= str_pad($minutes, 2, "0", STR_PAD_LEFT).':';
	$seconds = intval($sec % 60);
	$hms .= str_pad($seconds, 2, "0", STR_PAD_LEFT);
	return $hms;
}
function videoLI($video) {
	global $lang;
	$sql_date = date('Y-m-d', $video['added']);
	$date_diff = round( abs(strtotime(date('Y-m-d'))-strtotime($sql_date)) / 86400, 0 );
	$listing = '<li>
				<div id="card">
				<div id="video_thumb">';
if($date_diff < _ISNEW_DAYS)
	$listing .= '<span class="is_new">'. $lang["_new"] .'</span>';
if($video['site_views'] > _ISPOPULAR)
	$listing .= '<span class="is_hot">'. $lang["_popular"] .'</span>'; 
if($video['featured'] == 1)
	$listing .= '<span class="is_featured">'. $lang["_feat"] .'</span>';
	
	if($video['yt_length'] > 0) {
		$listing .= '<div class="duration">';
		$listing .= sec2min_mobi($video['yt_length']);
		$listing .= '</div>';
	}

		$listing .= '<a href="'.makevideolink_mobi($video['uniq_id'], $video['video_title'], $video['video_slug']).'"><img src="'.show_thumb($video['uniq_id']).'" border="0" class="border2 border_th" /></a>
				</div>
				<div id="video_nfo">
					<div class="video_title"><a href="'.makevideolink_mobi($video['uniq_id'], $video['video_title'], $video['video_slug']).'" class="ellipsis">'.$video['video_title'].'</a></div>
					<div class="added_date">'.time_since($video['added']).' '.$lang['ago'].'</div>
				</div>
				</div>
			</li>';

	return $listing;
}
function videoLIslider($video) {
	global $lang;
	$sql_date = date('Y-m-d', $video['added']);
	$date_diff = round( abs(strtotime(date('Y-m-d'))-strtotime($sql_date)) / 86400, 0 );
	$listing = '<li>
				<div id="card" style="background-image: url(\''.show_thumb($video['uniq_id']).'\');">
				<a href="'.makevideolink_mobi($video['uniq_id'], $video['video_title'], $video['video_slug']).'"></a>
				';
				
if($date_diff < _ISNEW_DAYS)
	$listing .= '<span class="is_new">'. $lang["_new"] .'</span>';
if($video['site_views'] > _ISPOPULAR)
	$listing .= '<span class="is_hot">'. $lang["_popular"] .'</span>';
if($video['featured'] == 1)
	$listing .= '<span class="is_featured">'. $lang["_feat"] .'</span>';
	
	$listing .= '<div id="video_nfo"></div>
				<div id="video_nfo_2">
					<div class="video_title"><a href="'.makevideolink_mobi($video['uniq_id'], $video['video_title'], $video['video_slug']).'" class="ellipsis">'.$video['video_title'].'</a></div>
				</div>
				</div>
			</li>';

	return $listing;
}

function articleLI($article) {
	global $lang;

	$sql_date = date('Y-m-d', $article['date']);
	$date_diff = round( abs(strtotime(date('Y-m-d'))-strtotime($sql_date)) / 86400, 0 );
	
	$listing = '<li>';
	$listing .= 	'<div id="article_ico">';
	if($date_diff < _ISNEW_DAYS)
		$listing .= '<span class="is_new">'. $lang["_new"] .'</span>';
	$listing .= 	'</div>';	
	$listing .= 	'<div id="article_nfo">
					<div class=""><a href="'.art_make_link_mobi('article', $article).'">'.$article['title'].'</a></div>
					<div class="added_date">'.time_since($article['date']).' '.$lang['ago'].'</div>
				</div>
				</li>';

	//return $listing;
	return $listing;
}

function request_video_mobi($uniq_id = '', $page = "detail", $autoplay = false)
{
	global $config;
	
	$old_src_id = 0;
	$video 		= array();
	
	if($uniq_id == '')
	{
		return 0;
	}
	
	if(ctype_alnum($uniq_id) === false)
	{
		return 0;
	}
	
	$uniq_id = secure_sql($uniq_id);
	
	$sql = "SELECT pm_videos.*, pm_videos_urls.mp4, pm_videos_urls.direct 
			FROM pm_videos 
			LEFT JOIN pm_videos_urls 
				   ON (pm_videos.uniq_id = pm_videos_urls.uniq_id) 
			WHERE pm_videos.uniq_id = '". $uniq_id ."'";

	$result =  @mysql_query($sql);
	if ( ! $result)
	{
		return 0;
	}
	
	if (mysql_num_rows($result) > 0)
	{
		$video = mysql_fetch_assoc($result);
	}
	else
	{
		return 0;
	}
	
	mysql_free_result($result);

	$video['is_stream'] 	= false;
	$video['video_title']	= stripslashes($video['video_title']);
//	$video['added']			= time_since($video['added']);
	$video['submitted']		= ($video['submitted'] == 'bot') ? 'admin' : $video['submitted'];
	
	$video_sources = fetch_video_sources();
	
	$video['video_player']	= $config['video_player'];
	
	if ($video['source_id'] == 3)
	{
		$config['video_player'] = 'jwplayer';
		$video['video_player'] = 'jwplayer';
	}
	
	switch ($config['video_player'])
	{
		case 'jwplayer':
		case 'jwplayer6':
		case 'flvplayer':
		case 'videojs':
	
			if ($video_sources[ $video['source_id'] ]['flv_player_support'] == 0 || 
				$video_sources[ $video['source_id'] ]['user_choice'] == 'embed')
			{
				$video['video_player']	= 'embed';
			}

		break;
		
		case 'embed':
			
			if ($video_sources[ $video['source_id'] ]['embed_player_support'] == 0)
			{
				$video['video_player']	= 'flvplayer';
			}
			
		break;
	}

	if ($video['source_id'] == 0)
	{
		$sql = "SELECT * 
				FROM pm_embed_code 
				WHERE uniq_id = '". $video['uniq_id'] ."'";

		$result = mysql_query($sql);
		$row = mysql_fetch_assoc($result);
		mysql_free_result($result);
		
		if (is_serialized_mobi($row['embed_code']))
		{
			$video['video_player'] = 'jwplayer';
			$video['is_stream'] = true;
			$video['jw_flashvars'] = array();
			
			$jw_flashvars = unserialize($row['embed_code']);

			foreach ($jw_flashvars as $k => $v)
			{
				$video['jw_flashvars'][$k] = $v;
			}
			$pieces = explode(';', $video['url_flv'], 2);
			$video['jw_flashvars']['file'] = make_url_https(str_replace(array('?', '=', '&'), array('%3F', '%3D', '%26'), $pieces[0]));
			$video['jw_flashvars']['streamer'] = make_url_https(str_replace(array('?', '=', '&'), array('%3F', '%3D', '%26'), $pieces[1]));
		}
		else
		{
			$video['video_player'] = 'embed';
			$video['embed_code'] = $row['embed_code'];
		}
		$embed_code = $row['embed_code'];
		$embed_code = str_replace("%%player_w%%", _PLAYER_W_INDEX, $embed_code);
		$embed_code = str_replace("%%player_h%%", _PLAYER_H_INDEX, $embed_code);
		$embed_code = str_replace("%%player_wmode%%", 'transparent', $embed_code);
		echo $embed_code;
	}
	
	if ($video['source_id'] == 1 || $video['source_id'] == 2)
	{
		$tmp_parts = explode('.', $video['url_flv']);
		$ext = array_pop($tmp_parts);
		$ext = strtolower($ext);
		$old_src_id = $video['source_id'];
		switch ($ext)
		{
			case 'mov':
			case '3gp':
			case '3g2':
			case 'm4a':
			//case 'm4v':
				
				$video['video_player']  = 'embed';
				$video['source_id'] 	= $video_sources['quicktime']['source_id'];
				//$video['url_flv'] = _URL .'/videos.php?vid='. $video['uniq_id'];
				
			break;
			
			case 'wmv':
			case 'asf':
			case 'wma':
				
				$video['video_player']  = 'embed';
				$video['source_id'] 	= $video_sources['windows media player']['source_id'];
				//$video['url_flv'] = _URL .'/videos.php?vid='. $video['uniq_id'];
				//$video['url_flv'] = _VIDEOS_DIR . $video['url_flv'];
				
			break;
			
			case 'mp3':
				
				$video['video_player']  = 'embed';
				$video['source_id'] = $video_sources['mp3']['source_id'];
				//$video['url_flv'] = _URL .'/videos.php?vid='. $video['uniq_id'];
			
			break;
			
			case 'mkv':
			case 'divx':
			case 'avi':
				
				$video['video_player']  = 'embed';
				$video['source_id'] 	= $video_sources['divx']['source_id'];
				//$video['url_flv'] = _URL .'/videos.php?vid='. $video['uniq_id'];
				
			break;
		}
	}
	
	if ($video['source_id'] == $video_sources['mp3']['source_id'])
	{
		//$video['url_flv'] = _URL .'/videos.php?vid='. $video['uniq_id'];
		$video['video_player']  = 'embed';
	}
	
	if ($video['source_id'] == 3 && $video['direct'] == '')
	{
		$video['direct'] = make_url_https('http://www.youtube.com/watch?v='. $video['yt_id']);
	}
	if (in_array($video['source_id'], array($video_sources['youtube']['source_id'], $video_sources['vimeo']['source_id'], $video_sources['dailymotion']['source_id'])))
	{
		$video['direct'] = make_url_https($video['direct']);
	}
	
	if ($video['yt_thumb'] != '')
	{
		if (strpos($video['yt_thumb'], 'http') !== false)
		{
			$video['preview_image'] = make_url_https($video['yt_thumb']);
		}
		else
		{
			$video['preview_image'] = _THUMBS_DIR . $video['yt_thumb'];
		}
	}
	
	if ($video['video_player'] == 'embed')
	{
		if ($video['source_id'] > 0)
		{
			$embed_code = $video_sources[ $video['source_id'] ]['embed_code'];
		}
		else
		{
			$embed_code = $video['embed_code'];
		}
		
		if ($video['source_id'] == $video_sources['sevenload']['source_id'] && strlen($video['yt_id']) > 7)
		{
			$video['yt_id'] = substr($video['yt_id'], 0, 7);
		}
		
		$embed_code = str_replace("%%yt_id%%", $video['yt_id'], $embed_code);
		$embed_code = str_replace("%%player_bgcolor%%", _BGCOLOR, $embed_code);
		$embed_code = str_replace("%%player_timecolor%%", _TIMECOLOR, $embed_code);
		$video['url_flv'] = make_url_https(str_replace("&", "&amp;", $video['url_flv']));
		$embed_code = str_replace("%%url_flv%%", make_url_https($video['url_flv']), $embed_code);
		$embed_code = str_replace("%%direct%%", make_url_https($video['direct']), $embed_code);
		$embed_code = str_replace("%%use_hq_vids%%", $config['use_hq_vids'], $embed_code);
		$embed_code = str_replace("%%yt_thumb%%", urlencode($video['preview_image']), $embed_code);
		
		
		if ($autoplay == true)	//	Override autoplay
		{
			$embed_code = str_replace("%%player_autoplay%%", '1', $embed_code);
		}
		else
		{
			if ($page == 'embed')
			{
				$embed_code = str_replace("%%player_autoplay%%", '0', $embed_code);
			}
			else
			{
				$embed_code = str_replace("%%player_autoplay%%", $config['player_autoplay'], $embed_code);
			}
		}
		
		if ($video['source_id'] == 17 && $video['direct'] != '')	//	trilulilu.ro
		{
			$temp = '';
			$temp = rtrim($video['direct'], "/");
			$temp = str_replace(array('http://', 'https://', 'www.'), "", $temp);
			
			@preg_match('/^trilulilu\.ro\/(.*?)\/([a-zA-Z0-9]+)$/i', $temp, $matches);
			$embed_code = str_replace("%%username%%", $matches[1], $embed_code);
		}
		
		$embed_code = str_replace( array("\n", "\r", "'"), array(' ', ' ', '"'), $embed_code);
		
		switch ($page)
		{
			case 'index':
				
				$embed_code = str_replace("%%player_w%%", _PLAYER_W_INDEX, $embed_code);
				$embed_code = str_replace("%%player_h%%", _PLAYER_H_INDEX, $embed_code);
				$embed_code = str_replace("%%player_wmode%%", 'transparent', $embed_code);
				
			break;
			
			case 'favorites':
				
				$embed_code = str_replace("%%player_w%%", _PLAYER_W_FAVS, $embed_code);
				$embed_code = str_replace("%%player_h%%", _PLAYER_H_FAVS, $embed_code);
				$embed_code = str_replace("%%player_wmode%%", 'transparent', $embed_code);
				
			break;
			
			case 'embed':
				
				$embed_code = str_replace("%%player_w%%", _PLAYER_W_EMBED, $embed_code);
				$embed_code = str_replace("%%player_h%%", _PLAYER_H_EMBED, $embed_code);
				$embed_code = str_replace("%%player_wmode%%", 'window', $embed_code);
							
			break; 
			
			default:
			case 'detail':
			
				$embed_code = str_replace("%%player_w%%", _PLAYER_W, $embed_code);
				$embed_code = str_replace("%%player_h%%", _PLAYER_H, $embed_code);
				$embed_code = str_replace("%%player_wmode%%", 'window', $embed_code);
				
			break;
		}		
		
		$embed_code = str_replace("%%site_url%%", _URL, $embed_code);
		
		$video['embed_code'] = $embed_code;
		
		if ($old_src_id > 0)
		{
			$video['source_id'] = $old_src_id;
		}
	}
	
	$video['site_views_formatted'] = pm_number_format_mobi($video['site_views']);
	
	return $video;
}

function generate_player($uniq_id, $width = '', $height = '')
{
	global $lang;
	
	$embed_code = '';
	
	if ($uniq_id == '')
		return '';

	$video = ( ! is_array($uniq_id) && is_string($uniq_id)) ? request_video_mobi($uniq_id, 'embed', true) : $uniq_id;

	if ( ! is_array($video))
	{
		return '';
	}

	switch ($video['source_id'])
	{
		/*
case '0':
			$embed_code = $video['embed_code'];
		break;
*/

		case '3':
		$embed_code = '<iframe width="'.$width.'" height="'.$height.'" src="'. make_url_https('http://www.youtube.com/embed/'.$video['yt_id']) .'?rel=0&amp;hd=1" frameborder="0" allowfullscreen></iframe>';
		break;
		
		case '57':
		case '44':
		case '2':
		case '1':
			//Hack by Trace to make compatible with all devices instead of just iOS
			$tmp_parts = explode('.', $video['url_flv']);
			$ext = array_pop($tmp_parts);
			$ext = strtolower($ext);
			if($ext == 'mov' || $ext == 'm4a'|| $ext == 'm4v' || $ext == 'mp4' || $ext == 'm2a' || $ext == 'm2v' || $ext == '3g2' || $ext == '3gp' || $ext == 'mp3') {
			if($ext == 'mp3' || $ext == 'm4a')
				$type = 'audio';
			else
				$type = 'video';
			$embed_code = 'Loading...</div>'; //Close this div as we will insert the player with javascript
			$embed_code.= '<div><script language="javascript">
			$(function(){
				var screenw = window.outerWidth;
				var screenh = screenw/16*9; //Common video format + 20px for controls

				tag = \'<'.$type.' id="playingvid" style="width:\' + screenw + \'px;'.(($type=='video')?'height:\' + screenh + \'px;':'').'" controls allowfullscreen>\'+

					\'	<source src="';
			if ($video['source_id']==1 && strpos($video['url_flv'], 'http') !== 0 && strpos($video['url_flv'], '//') !== 0){
				$embed_code.= _VIDEOS_DIR . $video['url_flv'];
			}else{
				$embed_code.= make_url_https($video['url_flv']);
			}
			$embed_code.= '"></video>\';
				$("#video_player .videoWrapper").html(tag);
				$(window).resize(function() {
				 var screenw = document.body.clientWidth;
				 var screenh = screenw/16*9; //Common video format + 20px for controls
				 $("#playingvid").width(screenw).height(screenh);
				});
			});
			</script>
			';
			
			} else {
				$embed_code = $lang['suggest_msg5'];
			}
		break;
		
		case '5':
		$embed_code = '<iframe frameborder="0" width="'.$width.'" height="'.$height.'" src="//www.dailymotion.com/embed/video/'.$video['yt_id'].'"></iframe>';
		break;
		
		case '16':
		$embed_code = '<iframe src="//player.vimeo.com/video/'.$video['yt_id'] .'?byline=0&amp;portrait=0&amp;player=mobile" width="'.$width.'" height="'.$height.'" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe>';
		break;

		case '18':
		$embed_code = '<iframe src="//blip.tv/play/'.$video['yt_id'] .'.html" width="'.$width.'" height="'.$height.'" frameborder="0" allowfullscreen></iframe>';
		break;
		
	}

	return $embed_code;
}
function makevideolink_mobi($uniq_id, $video_title = '', $video_slug = '')
{
	$r = array();
	$url_part = '';
	
	if (_SEOMOD == 1) 
	{
		if ('' != $video_slug)
		{
			$url_part = $video_slug;
		}
		else if ('' != $video_title)
		{
			$url_part = $video_title .'-video';
		}
		else
		{
			$query 	= @mysql_query("SELECT video_title, video_slug FROM pm_videos WHERE uniq_id = '".$uniq_id."'");
			$r 		= mysql_fetch_array($query);
			mysql_free_result($query);
			
			if ($r['video_slug'] != '')
			{
				$url_part = $r['video_slug'];
			}
			else
			{
				$url_part = $r['video_title'] .'-video';
			}
		}
		$video_title_clean = sanitize_title($url_part);
		
		$return = _URL_MOBI .'/'. $video_title_clean .'_'. $uniq_id .'.html';
	} 
	else 
	{
		$return = _URL_MOBI .'/watch.php?vid='.$uniq_id;
	}
	
	return $return;
}

function art_make_link_mobi($type = 'article', $args = array())
{
	$url = '';
	
	$url = _URL_MOBI .'/';
	switch ($type)
	{
		case 'article':
			
			if (_SEOMOD)
			{
				$url_part = '';
				
				if ($args['article_slug'] != '')
				{
					$url_part = $args['article_slug'];
				}
				else
				{
					$url_part = sanitize_title($args['title']);
					if (strlen($url_part) == 0)
					{
						$url_part = 'read';
					}
					$url_part = 'read-'. $url_part;
					$url_part = preg_replace('/-video$/', '_video', $url_part); // pre-v2.1
				}
				$url .= 'articles/'. $url_part .'_'. $args['id'] .'.'. _FEXT;
			}
			else
			{
				$url .= 'article_read.php?a='. $args['id'];
			}
		break;
		
		case 'category':
		case 'browse-articles':
		
			if (_SEOMOD)
			{
				$url .= 'articles/';
				
				if ($args['tag'] != '')
				{
					$url .= 'browse-'. $args['tag'];
				}
				else
				{
					$url .= 'index';
				}
				
				$url .= ($args['page'] != '') ? '-'. $args['page'] : '-1';
				$url .= '.'. _FEXT;
			}
			else
			{
				$url .= 'article.php?';
				
				if ($args['tag'] != '')
				{
					$url .= 'c='. $args['tag'];
				}
				
				$url .= '&page='. $args['page'];
			}
		
		break;
	}
	return $url;
}
function show_mm_ad($ad_name) {
	$query = mysql_query("SELECT code FROM pm_ads WHERE active = '1' AND position = '".$ad_name."'");
	$row = mysql_fetch_array($query);
	if(!empty($row[0]))
		return "<div id='adzone'>".$row[0]."</div>";
	else
		return '';
}
function translate($englishonly, $langvar) {
	global $lang;
	if(empty($lang[''.$langvar.''])) 
		echo $englishonly; 
	else 
		echo $lang[''.$langvar.''];
}

function get_catid_mobi($table = 'pm_categories', $tag) 
{
	$categories = load_categories(array('db_table' => $table));
	foreach ($categories as $c_id => $c)
	{
		if ($c['tag'] == $tag)
		{
			return $c_id;
		}
	}
	return false;
}
function get_catname_mobi($table = 'pm_categories', $tag) 
{
	$categories = load_categories(array('db_table' => $table));
	foreach ($categories as $c_id => $c)
	{
		if ($c['tag'] == $tag)
		{
			return $c['name'];
		}
	}
	return '';
}
function art_update_view_count_mobi($article_id) // @since 1.6.5 
{
	$updated = false;
	$read = array();
	
	if ( ! in_array('read', $_SESSION))
	{
		$_SESSION['read'] = '';
	}
	
	$read = (array) unserialize($_SESSION['read']);

	if ( ! in_array($article_id, $read))
	{
		$sql = "UPDATE art_articles 
				SET views = views+1   
				WHERE id = '". $article_id ."'";
		$result = @mysql_query($sql);
		$read[] = $article_id;
		$_SESSION['read'] = serialize($read);
		$updated = true;
	}
	
	return $updated;
}

function generate_smart_pagination_mobi($page = 1, $totalitems, $limit = 15, $adjacents = 1, $targetpage = "/", $pagestring = "&page=", $seomod = 0)
{
	global $lang;
	
	if(!$adjacents) $adjacents = 1;
	if(!$limit) $limit = 15;
	if(!$page) $page = 1;
	if(!$targetpage) $targetpage = "/";
	
	$prev = $page - 1;
	$next = $page + 1;
	$lastpage = ceil($totalitems / $limit);
	$lpm1 = $lastpage - 1;
	//	this function will replace the existing "page=N" with it's own page number when building the links
	//	so let's check if there is any "page=" in the original $pagestring. If non found, add one to help things out
	if($seomod == 1)
	{
		$pagestring1 = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-1-', $targetpage);
		$pagestring2 = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-2-', $targetpage);
		$pagestringlpm1 = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-'.$lpm1.'-', $targetpage);
		$pagestringlast = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-'.$lastpage.'-', $targetpage);	
	}
	else
	{
		if(strpos($pagestring, 'page=', 0) === FALSE)
			$pagestring .= "&page=";
		
		$pagestring1 = preg_replace('/page=([0-9]*)/', 'page=1', $pagestring);
		$pagestring2 = preg_replace('/page=([0-9]*)/', 'page=2', $pagestring);
		$pagestringlpm1 = preg_replace('/page=([0-9]*)/', 'page='.$lpm1, $pagestring);
		$pagestringlast = preg_replace('/page=([0-9]*)/', 'page='.$lastpage, $pagestring);
	}	
		$pagination = "";
		if($lastpage > 1)
		{	
			$pagination .= "<div class=\"pagination\"";
			if($margin || $padding)
			{
				$pagination .= " style=\"";
				if($margin)
					$pagination .= "margin: $margin;";
				if($padding)
					$pagination .= "padding: $padding;";
				$pagination .= "\"";
			}
			$pagination .= ">";
	
			//previous button
			if ($page > 1)
			{
				if($seomod == 1)
				{
					$url_query = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-'.$prev.'-', $targetpage);
					$pagination .= "<a href=\"$url_query\">&laquo; ".$lang['prev']."</a>";
				}
				else
				{
					$url_query = preg_replace('/page=([0-9]*)/', 'page='.$prev, $pagestring);
					$pagination .= "<a href=\"$targetpage?$url_query\">&laquo; ".$lang['prev']."</a>";
				}
			}
			else
					$pagination .= "<span class=\"disabled\">&laquo; ".$lang['prev']."</span>";
			
			//pages	
			if ($lastpage < 7 + ($adjacents * 2))	//not enough pages to bother breaking it up
			{	
				for ($counter = 1; $counter <= $lastpage; $counter++)
				{
					if ($counter == $page)
						$pagination .= "<span class=\"current\">$counter</span>";
					else
					{
						if($seomod == 1)
						{
							$url_query = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-'.$counter.'-', $targetpage); 
							$pagination .= "<a href=\"$url_query\">$counter</a>";
						}
						else
						{
							$url_query = preg_replace('/page=([0-9]*)/', 'page='.$counter, $pagestring);
							$pagination .= "<a href=\"$targetpage?$url_query\">$counter</a>";
						}
					}					
				}
			}
			elseif($lastpage >= 7 + ($adjacents * 2))	//enough pages to hide some
			{
				//close to beginning; only hide later pages
				if($page < 2 + ($adjacents * 3))		
				{
					for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++)
					{
						if ($counter == $page)
							$pagination .= "<span class=\"current\">$counter</span>";
						else
						{
							if($seomod == 1)
							{
								$url_query = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-'.$counter.'-', $targetpage); 
								$pagination .= "<a href=\"$url_query\">$counter</a>";
							}
							else
							{
								$url_query = preg_replace('/page=([0-9]*)/', 'page='.$counter, $pagestring);
								$pagination .= "<a href=\"$targetpage?$url_query\">$counter</a>";
							}
//							$url_query = preg_replace('/page=([0-9]*)/', 'page='.$counter, $pagestring);
//							$pagination .= "<a href=\"$targetpage?$url_query\">$counter</a>";	
						}				
					}
					$pagination .= "...";
					if($seomod == 1)
					{					
						$pagination .= "<a href=\"$pagestringlpm1\">$lpm1</a>";
						$pagination .= "<a href=\"$pagestringlast\">$lastpage</a>";		
					}
					else
					{
						$pagination .= "<a href=\"$targetpage?$pagestringlpm1\">$lpm1</a>";
						$pagination .= "<a href=\"$targetpage?$pagestringlast\">$lastpage</a>";		
					}
				}
				//in middle; hide some front and some back
				elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2))
				{
					if($seomod == 1)
					{					
						$pagination .= "<a href=\"$pagestring1\">1</a>";
						$pagination .= "<a href=\"$pagestring2\">2</a>";		
					}
					else
					{
						$pagination .= "<a href=\"$targetpage?$pagestring1\">1</a>";
						$pagination .= "<a href=\"$targetpage?$pagestring2\">2</a>";
					}				
					$pagination .= "...";
					for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++)
					{
						if ($counter == $page)
							$pagination .= "<span class=\"current\">$counter</span>";
						else
						{
							if($seomod == 1)
							{
								$url_query = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-'.$counter.'-', $targetpage);  
								$pagination .= "<a href=\"$url_query\">$counter</a>";
							}
							else
							{
								$url_query = preg_replace('/page=([0-9]*)/', 'page='.$counter, $pagestring);
								$pagination .= "<a href=\"$targetpage?$url_query\">$counter</a>";
							}						
//							$url_query = preg_replace('/page=([0-9]*)/', 'page='.$counter, $pagestring);
//							$pagination .= "<a href=\"$targetpage?$url_query\">$counter</a>";
						}
					}
					$pagination .= "...";
					if($seomod == 1)
					{					
						$pagination .= "<a href=\"$pagestringlpm1\">$lpm1</a>";
						$pagination .= "<a href=\"$pagestringlast\">$lastpage</a>";		
					}
					else
					{
						$pagination .= "<a href=\"$targetpage?$pagestringlpm1\">$lpm1</a>";
						$pagination .= "<a href=\"$targetpage?$pagestringlast\">$lastpage</a>";		
					}					
//					$pagination .= "<a href=\"$targetpage?$pagestringlpm1\">$lpm1</a>";
//					$pagination .= "<a href=\"$targetpage?$pagestringlast\">$lastpage</a>";		
				}
				//close to end; only hide early pages
				else
				{
					if($seomod == 1)
					{					
						$pagination .= "<a href=\"$pagestring1\">1</a>";
						$pagination .= "<a href=\"$pagestring2\">2</a>";		
					}
					else
					{
						$pagination .= "<a href=\"$targetpage?$pagestring1\">1</a>";
						$pagination .= "<a href=\"$targetpage?$pagestring2\">2</a>";
					}				
					$pagination .= "...";
					for ($counter = $lastpage - (1 + ($adjacents * 3)); $counter <= $lastpage; $counter++)
					{
						if ($counter == $page)
							$pagination .= "<span class=\"current\">$counter</span>";
						else
						{
							if($seomod == 1)
							{
								$url_query = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-'.$counter.'-', $targetpage); 
								$pagination .= "<a href=\"$url_query\">$counter</a>";
							}
							else
							{
								$url_query = preg_replace('/page=([0-9]*)/', 'page='.$counter, $pagestring);
								$pagination .= "<a href=\"$targetpage?$url_query\">$counter</a>";
							}
						}
					}
				}
			}
			
			//next button
			if ($page < $counter - 1) 
			{
				if($seomod == 1)
				{
					$url_query = preg_replace('/browse-(.*?)-videos-([0-9]*)-/', 'browse-$1-videos-'.$next.'-', $targetpage);  
					$pagination .= "<a href=\"$url_query\">".$lang['next']." &raquo;</a>";
				}
				else
				{
					$url_query = preg_replace('/page=([0-9]*)/', 'page='.$next, $pagestring);
					$pagination .= "<a href=\"$targetpage?$url_query\">".$lang['next']." &raquo;</a>";
				}				
			}
			else
				$pagination .= "<span class=\"disabled\">".$lang['next']." &raquo;</span>";				
			$pagination .= "</div>\n";
		}
//	}	
	return $pagination;
}

function mobi_get_last_referer() 
{
	$page = ($_SESSION['previous_page'] != '') ? $_SESSION['previous_page'] : 'index.'. _FEXT;
	// do some cleanup
	$page = str_replace(_URL_MOBI, '', $page);
	$page = preg_replace('|https?://[^/]+|i', '', $page);
	
	return '/'. $page;
	
	// backup
	/*if ( ! empty($_SERVER['HTTP_REFERER']))
	{		
		$referer = strip_tags($_SERVER['HTTP_REFERER']);
		$referer = str_replace( array("<",">", "'", '"'), "", $referer);
		$referer = str_replace(_URL, '', $referer);		
		$referer = preg_replace('|https?://[^/]+|i', '', $referer );
		
		return $referer;
	}*/
}

function mobi_get_related_video_list($category_id = 0, $video_title = '', $limit = 5, $video_id = 0)
{
	global $config, $_mobile_supported_sources;
	
	if ( ! $category_id && $video_title == '')
	{
		return get_video_list('', '', 0, $limit);
	}

	$ids = array();
	$categories = load_categories();
	
	if (is_array($category_id))
	{
		$tmp_max = 0;
		$tmp_cat_id = $category_id[0];
		foreach ($category_id as $k => $cid)
		{
			if ((int) $categories[$cid]['published_videos'] > $tmp_max)
			{
				$tmp_max = (int) $categories[$cid]['published_videos'];
				$tmp_cat_id = $cid;
			}
		}
		$category_id = $tmp_cat_id;
	}
	
	$total_videos = (int) $categories[$category_id]['published_videos'];
	$video_id = (int) $video_id;

	$rand_from = 0;
	
	$sql = "SELECT id
			FROM pm_videos 
			WHERE MATCH (video_title) AGAINST ('". addslashes($video_title) ."')
			  AND added <= '". time() ."' 
			  AND id != $video_id
			  AND source_id IN (". implode(',', $_mobile_supported_sources) .")
			LIMIT 0, $limit";

	$result = mysql_query($sql);

	if (mysql_num_rows($result) == 0) // backup method; just serve something
	{
		$sql = "SELECT id 
				FROM pm_videos 
				WHERE (category LIKE '%,$category_id,%' 
					 OR category like '%,$category_id' 
					 OR category like '$category_id,%' 
					 OR category='$category_id') 
				  AND added <= '". time() ."'
				  AND id != $video_id
				  AND source_id IN (". implode(',', $_mobile_supported_sources) .")
				LIMIT $rand_from, $limit";
		$result = mysql_query($sql);
	}
	
	while ($row = mysql_fetch_assoc($result))
	{
		$ids[] = $row['id'];
	}

	mysql_free_result($result);
	$total_ids = count($ids);
	// fill it to the brim
	if ($total_ids > 0 && $total_ids < $limit)
	{

		$limit_left = $limit - $total_ids;
		
		$sql = "SELECT id 
				FROM pm_videos 
				WHERE (category LIKE '%,$category_id,%' 
					 OR category like '%,$category_id' 
					 OR category like '$category_id,%' 
					 OR category='$category_id') 
				  AND added <= '". time() ."'
				  AND id != $video_id
				  AND source_id IN (". implode(',', $_mobile_supported_sources) .")
				LIMIT $rand_from, $limit_left";

		$result = mysql_query($sql);
		if (mysql_num_rows($result) > 0)
		{
			while ($row = mysql_fetch_assoc($result))
			{
				if ( ! in_array($row['id'], $ids))
				{
					$ids[] = $row['id'];
				}
			}
			mysql_free_result($result);
		}
	}

	return get_video_list('', '', 0, $limit, 0, $ids);
}
