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

@header( 'Expires: Wed, 11 Jan 1984 05:00:00 GMT' );
@header( 'Last-Modified: ' . gmdate( 'D, d M Y H:i:s' ) . ' GMT' );
@header( 'Cache-Control: no-cache, must-revalidate, max-age=0' );
@header( 'Pragma: no-cache' );

require_once('settings.php');

// Initialize some variables
$errors = array();
$nr_errors = 0;
$logged_in = 0;

$mode = '';
$redir = '';
$mode = ($_GET['do']) ? $_GET['do'] : '';

switch($mode){ 
	default:
	case 'login':
		//	check if user is already logged in
		//	if he already is, redirect him to index page
		if (is_user_logged_in()) 
		{
			header("Location: ". _URL_MOBI ."/index."._FEXT."");
			exit();
		}
		// get the last referer so that we can redirect the user to his last visited page after logging him in.
		$redir = $_POST['ref'];
		if( $redir === false){ 	
			$redir = "index."._FEXT;
		}
		$redir = ltrim($redir, '/ ');

		if( isset($_POST['Login'])) 
		{
			$reason = false;
			$errors = array();
			
			$email = $username = '';
			if (strpos($_POST['username'], '@') !== false && strlen($_POST['username']) > 5)
			{
				$email = trim($_POST['username']);
				$email = str_replace("\'", "''", $email);
				$email = secure_sql($email);
				
				if (is_real_email_address($email))
				{
					$sql = "SELECT username 
							FROM pm_users 
							WHERE email LIKE '$email'";
				
					if ($result = @mysql_query($sql))
					{
						$row = mysql_fetch_assoc($result);
						mysql_free_result($result);
						$username = $row['username'];
					}
				}
			}
			else
			{
				$username = trim($_POST['username']);
			}
			$pass = $_POST['pass'];

			if (empty($username) && empty($pass))
			{
				$reason = 1;
			}
			else
			{
				if (empty($username))
				{
					$reason = 1;
					
					if ($email != '')
					{
						$reason = 2;
					}
				}
				
				if (empty($pass))
				{
					$reason = 3;
				}
			}
			
			
			if ( ! confirm_login($username, $pass, false) && $username != '' && $pass != '')
			{
				$reason = 4;
			}
			
			if (count($errors) == 0)
			{
				$user_id = username_to_id($username);
				$ban = banlist($user_id);

				if ($ban['user_id'] == $user_id && $user_id != '')
				{				
					$reason = 5;
				}
			}

			if ($reason)
			{
				header('Location: '. _URL_MOBI .'/login.'. _FEXT .'?reason='. $reason);
				exit();
			}
			else 
			{
				if( is_user_account_active('', $username) == 0 )
				{
					header('Location: '. _URL_MOBI .'/login.'. _FEXT .'?reason=6');
					exit();
				}
				else
				{
					log_user_in($username, $pass);
				}
				header('Location: '. _URL_MOBI .'/'. $redir);
				exit();
			}
		}
		else { 
			// show the form. 
			header("Location: ". _URL_MOBI ."/index."._FEXT."?login=1");
			exit();
		}
	break;

	case 'register':
		header("Location: ". _URL_MOBI ."/register."._FEXT);
		exit();
	break;

	case 'logout':
		logout();
		header("Location: ". _URL_MOBI ."/index."._FEXT."?login=2");
	break;

	case 'forgot_pass':
		
		if(is_user_logged_in()) { 
			logout();
		}
		$dobreak = false;
		if($dobreak) break;
		if (isset($_POST['Send']))
		{
			// @since v2.3 
			foreach ($_POST as $k => $v)
			{
				$_POST[$k] = str_ireplace(array("\r", "\n", "%0a", "%0d"), '', stripslashes($v));
			}
			
			$email = $username = '';
			if (strpos($_POST['username_email'], '@') !== false)
			{
				$email = trim($_POST['username_email']);
			}
			else
			{
				$username = trim($_POST['username_email']);
			}
			$inputs = array();
			
			foreach($_POST as $k => $v)
			{
				$inputs[$k] = htmlspecialchars($v);
			}
			
			if( empty($email) && empty($username) )
			{
				$reason = '103';
			}
			elseif ($email != '')
			{
				$validation = validate_email($email);
				
				if ($validation == 1)
				{
					$reason = '104';
				}
				else if ($validation == false)
				{
					$reason = '105';
				}
				
			}
			else
			{
				$validation = check_username($username);

				if ($validation == 1)
				{
					$reason = '106';
				}
				else if ($validation == 2)
				{
					$reason = '107';
				}
			}
		
			if ($reason)
			{
				header('Location: '. _URL_MOBI .'/login.'. _FEXT .'?reason='. $reason .'&show=forgot_pass');
				exit();
			}


			$sql = "SELECT id, username, name, email, power, activation_key
						FROM pm_users 
						WHERE ";
			if ($email != '')
			{
				$email = $email;
				$email = stripslashes($email);
				$email = secure_sql($email);

				$sql .= " email LIKE '". $email ."'";
			}
			else
			{
				$username = stripslashes($username);
				$username = strtolower($username);
				$username = secure_sql($username);
				
				$sql .= " LOWER(username) = '". $username ."'";
			}

			$result = @mysql_query($sql);
			$user = @mysql_fetch_assoc($result);
			@mysql_free_result($result);
			
			$dobreak = false;
			if($dobreak) break;
			
			if ($user == false)
			{
				$reason = '108';
			}
			else if( $user['power'] == U_INACTIVE )
			{
				if ($user['activation_key'] != '')
				{
					$reason = '109';
				}
				else
				{
					$reason = '110';
				}
			}
			else
			{
				$new_pass = array();
				$new_pass = reset_password($user['email']);
				
				if( ! $new_pass ) {
					$reason = '111';
					header('Location: '. _URL_MOBI .'/login.'. _FEXT .'?reason='. $reason .'&show=forgot_pass');
					exit();
				}
				else
				{
					$email = $user['email'];
					
					$activation_link  =    _URL;
					$activation_link .=    "/login." . _FEXT;
					$activation_link .=    "?do=pwdreset&u=" . $user['id'] . "&key=" . $new_pass['key'];
					
					if (preg_match("/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/", pm_get_ip()) !== false)
					{
						$ip = pm_get_ip();
					}
					else
					{
						$ip = 'Unknown';
					}
					
					require_once("../include/class.phpmailer.php");
						//*** DEFINING E-MAIL VARS
						$mailsubject = sprintf($lang['mailer_subj3'], _SITENAME);
						
						$array_content[]=array("mail_username", $user['username']);  
						$array_content[]=array("mail_new_pass", $new_pass['pass']);
						$array_content[]=array("mail_ip", $ip);
						$array_content[]=array("mail_sitename", _SITENAME);
						$array_content[]=array("mail_url", _URL);
						$array_content[]=array("mail_activation_link", $activation_link);
						//*** END DEFINING E-MAIL VARS
						if(file_exists('../email_template/'.$_language_email_dir.'/email_forgot_password.txt'))
						{
							$mail = send_a_mail($array_content, $email, $mailsubject, 'email_template/'.$_language_email_dir.'/email_forgot_password.txt');
						}
						elseif(file_exists('../email_template/english/email_forgot_password.txt'))
						{
							$mail = send_a_mail($array_content, $email, $mailsubject, 'email_template/english/email_forgot_password.txt');
						}
						elseif(file_exists('../email_template/email_forgot_password.txt'))
						{
							$mail = send_a_mail($array_content, $email, $mailsubject, 'email_template/email_forgot_password.txt');
						}
						else
						{
							@log_error('Email template "email_forgot_password.txt" not found!', 'User Login Page', 1);
							$mail = TRUE;
						}
						if($mail !== TRUE)
						{
							@log_error($mail, 'User Login Page', 1);
						}
					
					// ** END SENDING EMAIL ** //
					header('Location: '. _URL_MOBI .'/login.'. _FEXT .'?msg=resetted&show=forgot_pass');
					exit();
				}
			}
			
			header('Location: '. _URL_MOBI .'/login.'. _FEXT .'?reason='. $reason .'&show=forgot_pass');
			exit();
		}// end if $_POST['send'] == 'send'
		else
		{ 
			header('Location: '. _URL_MOBI .'/login.'. _FEXT .'&show=forgot_pass');
			exit();
		}
	break;
	
	case 'pwdreset':
	case 'activate':
		
		if(is_user_logged_in()) {
			header("Location: ". _URL_MOBI. "/index."._FEXT);
			exit();
		}
		
		$user_id	= (int) $_GET['u'];
		$key		= trim($_GET['key']);
		$success	= 0;

		if($user_id && $key != '')
		{
			$sql = "SELECT * FROM pm_users WHERE id = '".secure_sql($user_id)."'";
			$result = mysql_query($sql);
			$user = mysql_fetch_assoc($result);
			mysql_free_result($result);
			
			if($user == '' || is_array($user) === FALSE)
			{
				$reason = 100;
			}
			elseif($user['power'] != U_INACTIVE)
			{
				$reason = 101;
			}
			elseif($user['activation_key'] == '' || (strcmp($user['activation_key'], $key) != 0))
			{
				$reason = 102;
			}
			else
			{
				$sql = "UPDATE pm_users SET power = '".U_ACTIVE."', activation_key = '' WHERE id = '".$user['id']."'";
				@mysql_query($sql);

				header("Location: ". _URL_MOBI ."/login."._FEXT."?msg=activated");
			}
		}
		
		if ($reason)
		{
			header('Location: '. _URL_MOBI .'/login.'. _FEXT .'?reason='. $reason);
		}
		
		exit();
	break;

}// end big Switch
exit();
?>