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

/**
 * Use this function to delete a GET $varname in $url.   
 * 
 * Example: url = http://www.example.com/index.php?a=1&b=2    
 * removeqsvar(url, 'a') => http://www.example.com/index.php?b=2
 * 
 * @param string $url
 * @param string $varname
 * @return string 
 */
function removeqsvar($url, $varname)
{
	list($urlpart, $qspart) = array_pad(explode('?', $url), 2, '');
	parse_str($qspart, $qsvars);
	unset($qsvars[$varname]);
	foreach ($qsvars as $k => $v)
	{
		$newqs .= $k.'='.$v.'&';
	}
	$newqs = rtrim($newqs, '&');
	return ($newqs != '') ? $urlpart.'?'.$newqs : $urlpart;
}

// Cookies
if ( ! defined('COOKIE_DEVICE'))
{
	define('COOKIE_DEVICE', 'melody_device');
}

if ( ! defined('COOKIE_PATH'))
{
	define('COOKIE_SUFX', md5(_URL));
	define('COOKIE_PATH', preg_replace('|https?://[^/]+|i', '', _URL.'/' ));
	define('COOKIE_SECURE', ssl_enabled());
	if (version_compare(phpversion(), '5.2', '>='))
	{
		define('COOKIE_DOMAIN', false);
		define('COOKIE_HTTPONLY', true);
	}
	else
	{
		$cookie_domain = false;
		if ($parsed_url['host'] != 'localhost')
		{
			$pieces = explode('.', $parsed_url['host']);
			$pieces_count = count($pieces);
	
			$cookie_domain = '.'. $pieces[$pieces_count - 2] . '.'. $pieces[$pieces_count - 1];
			$cookie_domain .= '; HttpOnly';
			unset($pieces, $pieces_count);
		}
		define('COOKIE_DOMAIN', $cookie_domain);
		define('COOKIE_HTTPONLY', false);
		unset($cookie_domain);
	}
	unset($parsed_url);
}
// --------------------------------------------- 

$current_URL = get_current_url();
$current_base_URL = rtrim(get_current_base_url(), '/');
$device_url = (strpos($current_URL, _URL_MOBI) === false) ? 'desktop' : 'mobile';
$tmp_parts = explode('/', $_SERVER['SCRIPT_NAME']);
$_script = array_pop($tmp_parts);
$compatible_scripts = array('article.php', 'article_read.php', 'category.php', 'index.php', 'login.php',
							'page.php', 'register.php', 'search.php', 'upload.php', 'watch.php');

if (in_array($_GET['ui'], array('mobile', 'desktop')) !== false)
{
	if ($_GET['ui'] == 'mobile')
	{
		setcookie(COOKIE_DEVICE, 'mobile', time() + 84000, COOKIE_PATH, COOKIE_DOMAIN, COOKIE_SECURE, COOKIE_HTTPONLY);

		$takemehome = _URL_MOBI .'/'. $_script;
		$takemehome .= ($_SERVER['QUERY_STRING'] != '') ? '?'. $_SERVER['QUERY_STRING'] : '';
		$takemehome = removeqsvar($takemehome, 'ui');
		/// --- -- -- --- 
	}
	else
	{
		setcookie(COOKIE_DEVICE, 'desktop', time() + 84000, COOKIE_PATH, COOKIE_DOMAIN, COOKIE_SECURE, COOKIE_HTTPONLY);

		$takemehome = str_replace('/mobile/', '/', $current_URL);
		$takemehome = removeqsvar($takemehome, 'ui');
	}

	if ( ! in_array($_script, $compatible_scripts) || ($_script == 'category.php' && empty($_GET['cat'])))
	{
		$pieces = explode('/', $takemehome);
		unset($pieces[count($pieces) - 1]);
		$takemehome = implode('/', $pieces);
	}

	header('Location: '. $takemehome);
	exit();
}

if (isset($_COOKIE[COOKIE_DEVICE]))
{
	if ($_COOKIE[COOKIE_DEVICE] != $device_url)
	{
		if ($device_url == 'mobile')
		{
			$takemehome = str_replace('/mobile/', '/', $current_URL);

			header('Location: '. $takemehome);
			exit();
		}
		elseif ($device_url == 'desktop')
		{
			$takemehome = _URL_MOBI .'/'. $_script;
			$takemehome .= ($_SERVER['QUERY_STRING'] != '') ? '?'. $_SERVER['QUERY_STRING'] : '';
			$takemehome = removeqsvar($takemehome, 'ui');

			header('Location: '. $takemehome,TRUE, 307);
			exit();
		}
	}
}
else
{
	if ( ! is_object($mobile_detector))
	{
		$mobile_detector = new Mobile_Detect;
	}
	
	if ($mobile_detector->isMobile())
	{
		setcookie(COOKIE_DEVICE, 'mobile', time() + 84000, COOKIE_PATH, COOKIE_DOMAIN, COOKIE_SECURE, COOKIE_HTTPONLY);
			
		if (strpos($current_URL, '/mobile/') === false)
		{
			//User is NOT on mobile site, redirect 
			$takemehome = _URL_MOBI .'/'. $_script;
			$takemehome .= ($_SERVER['QUERY_STRING'] != '') ? '?'. $_SERVER['QUERY_STRING'] : '';
			$takemehome = removeqsvar($takemehome, 'ui');

			header('Location: '. $takemehome);
			exit();
		}
		//Continue as usual
	}
	else
	{
		setcookie(COOKIE_DEVICE, 'desktop', time() + 84000, COOKIE_PATH, COOKIE_DOMAIN, COOKIE_SECURE, COOKIE_HTTPONLY);
			
		if (strpos($current_URL, '/mobile/') !== false)
		{
			//User IS on mobile site, redirect
			$takemehome = str_replace('/mobile/', '/', $current_URL);
			
			header('Location: '. $takemehome);
			exit();
		}
		//Continue as usual
	}
}
?>
