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

if ($_GET['do'] == 'activate')
{
	header("Location: ". _URL_MOBI ."/signin.php?do=activate&u=". $_GET['u'] ."&key=". $_GET['key']);
	exit();
}
if ($_GET['do'] == 'pwdreset')
{
	header("Location: ". _URL_MOBI ."/signin.php?do=pwdreset&u=". $_GET['u'] ."&key=". $_GET['key']);
	exit();	
}

$meta_title = $lang['login']." - "._SITENAME;
include('header.php');

$ref = mobi_get_last_referer();
$info_msg = '';

if ($_GET['reason'] != '')
{
	switch ($_GET['reason'])
	{
		case '1': $info_msg = $lang['login_msg1']; break;
		case '2': $info_msg = $lang['login_msg3']; break;
		case '3': $info_msg = $lang['login_msg2']; break;
		case '4': $info_msg = $lang['login_msg3']; break;
		case '5': $info_msg = sprintf($lang['login_msg16'], ''); break;
		case '6': $info_msg = $lang['login_msg4']; break;
		case '100': $info_msg = $lang['login_msg12']; break;
		case '101': $info_msg = $lang['login_msg13']; break;
		case '102': $info_msg = $lang['login_msg14']; break;
		case '103': $info_msg = $lang['login_msg8']; break;
		case '104': $info_msg = $lang['register_err_msg2']; break;
		case '105': $info_msg = $lang['login_msg7']; break;
		case '106': $info_msg = $lang['register_err_msg4']; break;
		case '107': $info_msg = $lang['register_err_msg5']; break;
		case '108': $info_msg = $lang['login_msg8']; break;
		case '109': $info_msg = $lang['login_msg4']; break;
		case '110': $info_msg = $lang['login_msg17']; break;
		case '111': $info_msg = $lang['login_msg9']; break;
	}
	$info_msg = '<ul class="alerts-warning"><li>'. $info_msg .'</li></ul>';
}

if ($_GET['msg'] == 'activated')
{
	$info_msg = '<ul class="alerts-success"><li>'. $lang['activate_account_msg1'] .'</li></ul>';
}

if ($_GET['msg'] == 'resetted')
{
	$info_msg = '<ul class="alerts-success"><li>'. $lang['fp_msg'] .'</li></ul>';
}

if ($logged_in == 1)
{
	$info_msg .= '<ul class="alerts-success"><li>'. $lang['loggedin'] .'</li></ul>';
}
?>
<div id="welcome">
<?php echo $lang['login']; ?>
<?php echo $info_msg; ?>
</div>
<div id="content">

<?php
if($logged_in != 1) {
?> 
	<?php
	if($_GET['show'] == 'forgot_pass') {
	?> 
	<form class="login" name="forgot-pass" id="reset-form" method="post" action="signin.php?do=forgot_pass">
	<input type="text" class="inputtext" name="username_email" placeholder="<?php echo $lang['your_username_or_email'];?>" value="">
	<br />
	<button type="submit" name="Send" value="<?php echo $lang['submit_send'];?>" class="submit border2"><?php echo $lang['submit_send'];?></button> 
	</form>
	<?php
	} else {
	?>
	<form action="signin.php" method="post" name="login_form" class="login" autocomplete="off">
	<input name="username" type="text" size="15" class="inputtext" placeholder="<?php echo $lang['your_username_or_email'];?>" autofocus="autofocus" />
	<input name="pass" type="password" size="15" class="inputtext" placeholder="<?php echo $lang['password'];?>" />
	<input type="hidden" name="ref" value="" />
	<br />
	<button class="submit border2" name="Login"><?php echo $lang['login']; ?></button> <a href="login.php?show=forgot_pass"><?php echo $lang['forgot_pass'];?></a>
	</form>
	<?php
	}
	?>
<?php
} elseif($logged_in == 1) {
?>
<div id="logged_redirect" class="border4">
	<img src="<?php echo getavatar($userdata['id'], $userdata['username']); ?>" border="0" class="comm_avatar border4" />
	<div align="center"><?php echo str_replace("%s", "index.php", $lang['login_msg15']); ?></div>
	</div>
<meta http-equiv="refresh" content="3;URL=index.php?login=1" />
<?php
}
?>
</div>
<?php
include('footer.php');
?>