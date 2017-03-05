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
$form_load_time = (int) $_SESSION['register-form'];
$_SESSION['register-form'] = time();

@header( 'Expires: Wed, 11 Jan 1984 05:00:00 GMT' );
@header( 'Last-Modified: ' . gmdate( 'D, d M Y H:i:s' ) . ' GMT' );
@header( 'Cache-Control: no-cache, must-revalidate, max-age=0' );
@header( 'Pragma: no-cache' );

$page_type = 'video';
include('settings.php');

if ($config['spambot_prevention'] == 'recaptcha')
{
	require( ABSPATH .'include/recaptcha/autoload.php');
	$recaptcha = new \ReCaptcha\ReCaptcha($config['recaptcha_private_key']);
}

if( is_user_logged_in() ) {
	header("Location: ". _URL_MOBI ."/index."._FEXT);
	exit();
}

if (isset($_POST['Register']))
{
	$config['register_time_to_submit'] = (int) $config['register_time_to_submit'];
	$time_to_submit = time() - $form_load_time;

	// check the honeypot
	if ((strlen($_POST['website']) != 10) || ( ! ctype_digit($_POST['website']))
		|| ($config['register_time_to_submit'] > 0 && ($time_to_submit < $config['register_time_to_submit'] || $time_to_submit > 1200)))
	{
		if ($conn_id)
		{
			@mysql_close($conn_id);
		}
		header('Location: '. _URL_MOBI .'/register.'. _FEXT);
		exit();
	}
}

$meta_title = $lang['register']." - "._SITENAME;
include('header.php');

$errors = array();
$nr_errors = 0;
$logged_in = 0;

if( isset($_POST['Register']) && $config['allow_registration'] == '1') 
{
	unset($_POST['website']);

	// check CAPTCHA code
	if ($config['spambot_prevention'] == 'recaptcha')
	{
		$response = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
		if ( ! $response->isSuccess())
		{
			$errors['captcha'] = $lang['register_err_msg1'];
		}
	}
	
	if ($config['spambot_prevention'] == 'securimage')
	{
		include (ABSPATH ."include/securimage/securimage.php");
		$img = new Securimage();
		if ( ! $img->check($_POST['imagetext']))
		{
			$errors['captcha'] = $lang['register_err_msg1'];
		}
	}
	
	$required_fields = array('email' => $lang['your_email'],
							 'username' => $lang['username'], 
							 'pass' => $lang['password'], 
							 'confirm_pass' => $lang['confirm_pass'], 
							 'name' => $lang['your_name'],
							 );
	foreach( $_POST as $key => $value) {
		$value = trim($value);
		if(array_key_exists(strtolower($key), $required_fields) && empty($value) )
			$errors[$key] = $required_fields[$key]." ".$lang['register_err_msg8'];
	}
	$inputs = array();
	foreach($_POST as $key => $val)
	{
		$val = trim($val);
		$val = specialchars($val, 1);
		$inputs[$key] = $val;
	}
	
	$nr_errors = count($errors);
	if($nr_errors == 0) {
		
		// @since v2.3 
		foreach ($_POST as $k => $v)
		{
			$_POST[$k] = str_ireplace(array("\r", "\n", "%0a", "%0d"), '', stripslashes($v));
		}
		
		// grab the fields - values in variables and filter them for safety
		$email 		= trim($_POST['email']);
		$username	= trim($_POST['username']);
		$pass		= $_POST['pass'];
		$conf_pass	= $_POST['confirm_pass'];
		$name 		= sanitize_name($_POST['name']);

		// check if the requried fields are valid
			if($var = validate_email($email)) {
				if($var == 1) 
					$errors['email'] = $lang['register_err_msg2'];
				if($var == 2)
					$errors['email'] = $lang['register_err_msg3'];
			}

		if($var = check_username($username)) { 
			if($var == 1)
				$errors['username'] = $lang['register_err_msg4'];
			if($var == 2)
				$errors['username'] = $lang['register_err_msg5'];
			if($var == 3)
				$errors['username'] = $lang['register_err_msg6'];
		}
		
		if( strcmp($pass, $conf_pass)) { 
			$errors['pass'] = $lang['register_err_msg7'];
		}

	} // end if(nr_errors == 0);

	$nr_errors = count($errors);
	
	if( ! $nr_errors ){
		 
		// prepare everything for mysql
		$email 		= prepare_for_mysql($email);
		$username 	= prepare_for_mysql($username);
		$name 		= prepare_for_mysql($name);
		$time_now 	= time();

		$sql = "INSERT INTO pm_users (username, password, email, name, reg_date, last_signin, reg_ip, about, power, activation_key) VALUES ";
		
		$ip = addslashes(pm_get_ip());

		if ($config['account_activation'] == AA_ADMIN)
		{
			$sql .= "('".$username."', '".md5($pass)."', '".$email."', '".$name."', '".$time_now."', '".$time_now."', '".$ip."', '', '".U_INACTIVE."', '')";
		}
		else if($config['account_activation'] == AA_USER)
		{
			$activation_key = '';
			$activation_key = generate_activation_key();
			$sql .= "('".$username."', '".md5($pass)."', '".$email."', '".$name."', '".$time_now."', '".$time_now."', '".$ip."', '', '".U_INACTIVE."', '".$activation_key."')";
		
		}
		else if($config['account_activation'] == AA_DISABLED)
		{
			$sql .= "('".$username."', '".md5($pass)."', '".$email."', '".$name."', '".$time_now."', '".$time_now."', '".$ip."', '', '".U_ACTIVE."', '')";
		}
		
		$result = @mysql_query($sql);
		if( ! $result )
		{
			echo $lang['login_msg11'].' <em>' . $config['contact_mail'] . "</em>";
			exit();
		}
		$user_id = @mysql_insert_id();
		
		insert_playlist($user_id, PLAYLIST_TYPE_WATCH_LATER, array());
		insert_playlist($user_id, PLAYLIST_TYPE_FAVORITES, array());
		insert_playlist($user_id, PLAYLIST_TYPE_LIKED, array());
		insert_playlist($user_id, PLAYLIST_TYPE_HISTORY, array());
		
		if (_MOD_SOCIAL && $user_id)
		{
			log_activity(array('user_id' => $user_id, 'activity_type' => ACT_TYPE_JOIN));
		}

		//	MAILS
		if ($config['account_activation'] == AA_ADMIN)
		{
			require_once("../include/class.phpmailer.php");
			
				//*** DEFINING E-MAIL VARS
				$mailsubject = sprintf($lang['mailer_subj6'], _SITENAME);
				
				$array_content[]=array("mail_username", $username);  
				$array_content[]=array("mail_password", $pass);
				$array_content[]=array("mail_ip", $ip);
				$array_content[]=array("mail_sitename", _SITENAME);
				$array_content[]=array("mail_url", _URL);
				//*** END DEFINING E-MAIL VARS
			
			if(file_exists('../email_template/'.$_language_email_dir.'/email_registration_pending.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/'.$_language_email_dir.'/email_registration_pending.txt');
			}
			elseif(file_exists('../email_template/english/email_registration_pending.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/english/email_registration_pending.txt');
			}
			elseif(file_exists('../email_template/email_registration_pending.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/email_registration_pending.txt');
			}
			else
			{
				@log_error('Email template "email_registration_pending.txt" not found!', 'Register Page', 1);
				$mail = TRUE;
			}
			if($mail !== TRUE)
			{
				@log_error($mail, 'Register Page', 1);
			}
			
			$msg = $lang['register_msg6'];
		}
		else if ($config['account_activation'] == AA_USER)
		{	
			$activation_link  =    _URL;
			$activation_link .=    "/login." . _FEXT;
			$activation_link .=    "?do=activate&u=" . $user_id . "&key=" . $activation_key;
			
			// ** SENDING EMAIL ** //
	
			require_once("../include/class.phpmailer.php");
			
				//*** DEFINING E-MAIL VARS
				$mailsubject = sprintf($lang['mailer_subj4'], _SITENAME);
				
				$array_content[]=array("mail_username", $username);  
				$array_content[]=array("mail_password", $pass);
				$array_content[]=array("mail_ip", $ip);
				$array_content[]=array("mail_sitename", _SITENAME);
				$array_content[]=array("mail_url", _URL);
				$array_content[]=array("mail_activation_link", $activation_link);
				//*** END DEFINING E-MAIL VARS
			
			if(file_exists('../email_template/'.$_language_email_dir.'/email_registration2.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/'.$_language_email_dir.'/email_registration2.txt');
			}
			elseif(file_exists('../email_template/english/email_registration2.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/english/email_registration2.txt');
			}
			elseif(file_exists('../email_template/email_registration2.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/email_registration2.txt');
			}
			else
			{
				@log_error('Email template "email_registration2.txt" not found!', 'Register Page', 1);
				$mail = TRUE;
			}
			if($mail !== TRUE)
			{
				@log_error($mail, 'Register Page', 1);
			}
			// ** END SENDING EMAIL ** //		
			
			$msg = $lang['register_msg4'];
		}
		elseif($config['account_activation'] == AA_DISABLED)
		{	
			// ** SENDING EMAIL ** //
	
			require_once("../include/class.phpmailer.php");
			
				//*** DEFINING E-MAIL VARS
				$mailsubject = sprintf($lang['mailer_subj1'], _SITENAME);
				
				$array_content[]=array("mail_username", $username);  
				$array_content[]=array("mail_password", $pass);
				$array_content[]=array("mail_ip", $ip);
				$array_content[]=array("mail_sitename", _SITENAME);
				$array_content[]=array("mail_url", _URL);
				//*** END DEFINING E-MAIL VARS
			
			if(file_exists('../email_template/'.$_language_email_dir.'/email_registration.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/'.$_language_email_dir.'/email_registration.txt');
			}
			elseif(file_exists('../email_template/english/email_registration.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/english/email_registration.txt');
			}
			elseif(file_exists('../email_template/email_registration.txt'))
			{
				$mail = send_a_mail($array_content, $email, $mailsubject, '../email_template/email_registration.txt');
			}
			else
			{
				@log_error('Email template "email_registration.txt" not found!', 'Register Page', 1);
				$mail = TRUE;
			}
			if($mail !== TRUE)
			{
				@log_error($mail, 'Register Page', 1);
			}
			// ** END SENDING EMAIL ** //
			
			$msg = $lang['register_msg5'];
		}
		$success = 1;
	}
}// end if($_POST['Register'] == "Register");
else if (isset($_POST['Register']) && $config['allow_registration'] == '0')
{
	$errors[] = $lang['registration_closed'];
}
?>

<div id="welcome">
	<div><?php echo $lang['register']; ?></div>
<?php
if($errors) {
	echo "<ul class='alerts-warning'>";
	foreach ($errors as $msg_error) {
		echo "<li>".$msg_error."</li>\n";
	}
	echo "</ul>";
}
?>
<?php if ($config['allow_registration'] == '0') 
{
	$info_msg = '<ul class="alerts-warning"><li>'. $lang['registration_closed'] .'</li></ul>';
}
else
{
	echo '<ul class="alerts-success"><li>'. $msg .'</li></ul>';
}
?>
</div>
<div id="content">
<?php
if ($config['allow_registration'] == '1')
{
	if($success != 1) 
	{
	?> 
		<form action="register.php" method="post" name="register-form" id="register-form" class="login">
		<input type="text" name="name" value="<?php echo prepare_for_mysql($_POST['name']);?>" class="inputtext" placeholder="<?php echo $lang['your_name'];?>" autofocus="autofocus" autocapitalization="true" />
		<input type="text" name="username" value="<?php echo prepare_for_mysql($_POST['username']);?>" maxlength="32" class="inputtext" placeholder="<?php echo $lang['username'];?>" autocapitalization="false" />
		<input type="email" name="email" value="<?php echo prepare_for_mysql($_POST['email']);?>" class="inputtext" placeholder="<?php echo $lang['your_email'];?>" autocapitalization="false" />
		<input name="pass" type="password" maxlength="32" class="inputtext" placeholder="<?php echo $lang['password'];?>" />
		<input name="confirm_pass" type="password" maxlength="32" class="inputtext" placeholder="<?php echo $lang['password_retype'];?>" />
		<input name="website" type="text" maxlength="32" class="inputtext botmenot" />

		<?php
		if ($config['spambot_prevention'] == 'recaptcha')
		{
			echo recaptcha_get_html($config['recaptcha_public_key']);
			echo '<br />'; 
		} 
		else if ($config['spambot_prevention'] == 'securimage')
		{
			?>
			<br />
			<img src="<?php echo _URL;?>/include/securimage_show.php?sid=<?php echo md5(uniqid(time() + rand(0, 99)));?>" id="secure_image" align="absmiddle" alt="">
            <img src="images/icon-refresh.png" width="18" height="18" border="0" onclick="document.getElementById('secure_image').src = '<?php echo _URL;?>/include/securimage_show.php?sid=' + Math.random(); return false;" />
			<br /> 
			<input type="text" name="imagetext"class="inputtext" autocomplete="off" placeholder="<?php echo $lang['enter_captcha'];?>" autocapitalization="false">
			<?php
		}
		
		?>
        <br />
		<button class="submit border2" name="Register"><?php echo $lang['register']; ?></button>
		</form>
	<?php
	} elseif($success == 1) {
		unset($_SESSION['register-form']);
	?>
	<div id="logged_redirect" class="border4">
		<div align="center"><?php echo str_replace("%s", "index.php", $lang['login_msg15']); ?></div>
		</div>
	<meta http-equiv="refresh" content="10;URL=index.php?login=1" />
	<?php
	}
}
?>
</div>
<?php
include('footer.php');
?>