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

$logged_in	= is_user_logged_in();
$userdata	= array();
$user_adv	= array();

if($logged_in) 
{
	$userdata = fetch_user_info($_SESSION[COOKIE_NAME]);
	
	//	check banlist
	$ban = banlist($userdata['id']);
	
	if($ban['id'] == '')
	{
		$smarty->assign('logged_in', 1);
		$smarty->assign('s_user_id', $userdata['id']);
		$smarty->assign('s_username', $userdata['username']);
		$smarty->assign('s_name', $userdata['name']);
		$smarty->assign('s_country', $userdata['country']);
		$smarty->assign('s_email', $userdata['email']);
		$smarty->assign('s_avatar', $userdata['avatar']);
		$smarty->assign('s_power', $userdata['power']);
	
		if (is_admin()) 
		{
			$smarty->assign('is_admin', 'yes');
		}
		
		if (is_moderator())
		{
			$smarty->assign('is_moderator', 'yes');
		}
		
		if (is_editor())
		{
			$smarty->assign('is_editor', 'yes');
		}
		
		$time_now = time();
		if ($userdata['last_signin'] < ($time_now - 300))
		{
			$sql = "UPDATE pm_users 
					SET last_signin  = '". $time_now ."', 
						last_signin_ip = '". addslashes(pm_get_ip()) ."' 
					WHERE id = '". $userdata['id'] ."'";
			@mysql_query($sql);
		}
	}
	else
	{
		logout();
		$logged_in = 0;
		$smarty->assign('logged_in', 0);
	}
}
?>