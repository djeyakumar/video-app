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

$page_type = 'upload';
include('settings.php');

if ($config['spambot_prevention'] == 'recaptcha')
{
	require( ABSPATH .'include/recaptcha/autoload.php');
	$recaptcha = new \ReCaptcha\ReCaptcha($config['recaptcha_private_key']);
}

if( ! is_user_logged_in() ) {
	header("Location: ". _URL_MOBI ."/index."._FEXT);
	exit();
}

$meta_title = $lang['upload_video']." - "._SITENAME;
include('header.php');

$exec_limit = 300;
if ( ! ini_get('safe_mode'))
{
	if (ini_get('max_execution_time') < $exec_limit)
	{
		ini_set('max_execution_time', $exec_limit);
	}
	if (ini_get('max_input_time') < $exec_limit)
	{
		ini_set('max_input_time', $exec_limit);
	}
}

$errors = array();
$inputs = array();
$max_filesize_bytes = return_bytes($config['allow_user_uploadvideo_bytes']);

$whitelist	   = array('flv', 'mov', 'avi', 'divx', 'mp4', 'wmv', 'mkv',
						'asf', 'wma', 'mp3', 'm4v', 'm4a', '3gp', '3g2');

$allowed_types = array( 'video/x-flv', 	'video/quicktime', 'video/x-msvideo',
						'video/x-divx', 'video/mp4', 'video/x-ms-wmv',
						'application/octet-stream',  'video/avi', 'video/x-matroska',
						'video/x-ms-asf', 'audio/x-ms-wma',	'audio/mp4', 'video/3gpp',
						'video/3gpp2', 'audio/mpeg', 'video/mpeg', 'application/force-download',
						'audio/mp3', 'audio/mpeg3', 'video/x-m4v', 'audio/x-m4a');

$whitelist_img	  = array('jpg', 'gif', 'png', 'jpeg');
$allowed_types_img = array('image/png', 'image/gif', 'image/jpg', 'image/jpeg', 'image/pjpeg');

$form_action = 'upload.php';
$uploads_per_day = (int) $config['user_upload_daily_limit']; // videos/day/user
$uploaded_today = 0;
$today_start = mktime(0, 0, 0);
$today_end	 = mktime(23, 59, 59);

$form_id = substr(md5(time()), 0, 8);
$nonce = csrfguard_raw( substr(md5('_uploadform'.$form_id.$userdata['id'].pm_get_ip()), 3, 8) );

/***************/
if ($max_filesize_bytes == 0)
{
	$max_filesize_bytes = 1024 * 2048; // 2MB
}

$sql = "SELECT COUNT(*) as total
		FROM pm_temp
		WHERE user_id = '". $userdata['id'] ."'
		  AND source_id = '1'
		  AND added >= '". $today_start ."'
		  AND added <= '". $today_end ."'";
$result = mysql_query($sql) or die(mysql_error());
$row = @mysql_fetch_assoc($result);
mysql_free_result($result);

$uploaded_today = $row['total'];

unset($sql, $result, $row);

if ($uploaded_today > $uploads_per_day)
{
	$success = 2;
}
else
{
	if (count($_POST) > 0)
	{
		$del_tmp_file = false;
		$category_id = (int) $_POST['category'];
		$img = $_FILES['capture'];
		$videofile = $_FILES['videofile'];

		$required_fields = array('video_title' => $lang['video']);

		foreach ($_POST as $key => $value)
		{
			$value = unspecialchars(trim($value), 1);
			$_POST[$key] = $value;

			if (array_key_exists(strtolower($key), $required_fields) && empty($value))
				$errors[$key] = $required_fields[$key]." ".$lang['register_err_msg8'];
		}

		if ($category_id <= 0)
		{
			$errors['category'] = $lang['choose_category'];
		}

		// upload image
		$thumbnail = '';
		$ext = pm_get_file_extension($img['name']);
		$ext = strtolower($ext);

		if (($img['size'] >= 0 && $img['size'] <= $max_filesize_bytes) && strlen($img['name']) > 0) //&& $img['error'] == 0)
		{
			if (in_array($img['type'], $allowed_types_img) && in_array($ext, $whitelist_img))
			{
				$ext = 'jpg'; // save as JPG
				do
				{
					$new_name  = md5($img['name'].rand(1,888));
					$new_name  = substr($new_name, 2, 10);
					$new_name .= '.'.$ext;
				} while (file_exists(_THUMBS_DIR_PATH . $new_name));

				$copy = copy($img['tmp_name'], _THUMBS_DIR_PATH . $new_name);
				if ($copy === TRUE)
				{
					$resize = resize_then_crop(_THUMBS_DIR_PATH . $new_name, _THUMBS_DIR_PATH . $new_name, THUMB_W_VIDEO, THUMB_H_VIDEO, "255", "255", "255", $allowed_types_img);

					if($resize != false)
					{
						$thumbnail = $new_name;
					}
				}
			}
		}
		// end upload image



		// upload video
		if ( ! is_user_logged_in()) 
		{
			$errors['videofile'] = $lang['upload_login_first'];
		}
		
		if ($errors['videofile'] == '')
		{
			$ext = pm_get_file_extension($videofile['name']);
			$ext = strtolower($ext);

			if (($videofile['size'] >= 0 && $videofile['size'] <= $max_filesize_bytes) && strlen($videofile['name']) > 0 && $videofile['error'] == 0)
			{
				if (in_array($videofile['type'], $allowed_types) && in_array($ext, $whitelist))
				{					
					do
					{
						$new_name  = md5($videofile['name'].rand(1,888));
						$new_name  = substr($new_name, 2, 10);
						$new_name .= '.'.$ext;
					}
					while (file_exists(_VIDEOS_DIR_PATH . $new_name));
										
					if ($move = move_uploaded_file($videofile['tmp_name'], _VIDEOS_DIR_PATH . $new_name))
					{
						// INSERT INTO pm_temp, disregarding the current configuration
						// with special title and shit. 
						$sql = "INSERT INTO pm_temp
										(url, video_title, description, yt_length, tags, category, username, user_id, 
										 added, source_id, language, thumbnail, yt_id, url_flv, mp4)
								VALUES ('". $new_name ."', 'n/a', '". secure_sql($tmp_description) ."', 0, '', 0, '". $userdata['username'] ."', 
										'". $userdata['id'] ."', '". time() ."', 1, 1, '', '', '', '')";
						$result = mysql_query($sql) or die(mysql_error());
						
						if ( ! $result)
						{
							$errors['videofile'] = $lang['upload_errmsg1'];
						}
						else
						{
							$success_msg = mysql_insert_id();
						}
						
					}
					else
					{
						$errors['videofile'] = $lang['upload_errmsg1'];
					}
				}
				else
				{
					$errors['videofile'] = $lang['upload_errmsg2'];
				}	
			}
			else
			{
				switch ($videofile['error'])
				{	

					case UPLOAD_ERR_INI_SIZE:
						$errors['videofile'] = $lang['upload_errmsg3'];
					break;
					
					case UPLOAD_ERR_FORM_SIZE:
						$errors['videofile'] = $lang['upload_errmsg4'];
					break;
					
					case UPLOAD_ERR_PARTIAL:
						$errors['videofile'] = $lang['upload_errmsg5'];
					break;
					
					case  UPLOAD_ERR_NO_FILE:
						$errors['videofile'] = $lang['upload_errmsg6'];
					break;
					
					case UPLOAD_ERR_NO_TMP_DIR:
						$errors['videofile'] = $lang['upload_errmsg7'];
					break;
					
					case 7: //UPLOAD_ERR_CANT_WRITE:
						$errors['videofile'] = $lang['upload_errmsg8'];
					break;
					
					case 8: //UPLOAD_ERR_EXTENSION:
						$errors['videofile'] = $lang['upload_errmsg9'];
					break;
					
					default:
					case UPLOAD_ERR_OK:
					break;
				}
			}
		}
		
		
		if ($errors['videofile'] != '')
		{
			if ($videofile['tmp_name'] != '' && file_exists($videofile['tmp_name']))
			{
				@unlink($videofile['tmp_name']);
			}
			//echo $errors['videofile'];
		}

		// end upload video

		if (count($errors['videofile']) > 0)
		{
			$del_tmp_file = true;
		}
		else
		{
			$mysql_insert_id = $success_msg;
			if ($mysql_insert_id)
			{
				$sql = "SELECT *
						FROM pm_temp
						WHERE id = ". secure_sql($mysql_insert_id);
				$row = false;
				if ($result = mysql_query($sql))
				{
					$row = mysql_fetch_assoc($result);
					mysql_free_result($result);
				}

				if (is_array($row) && count($row) > 0)
				{
					if ($row['user_id'] == $userdata['id'])
					{
						if ($_POST['duration'] != '')
						{
							$pieces = explode(':', $_POST['duration']);
							$pieces[0] = (int) $pieces[0];
							$pieces[1] = (int) $pieces[1];

							$duration = (int) ($pieces[0] * 60) + $pieces[1];
						}

						$description = trim($_POST['description']);
						$description = stripslashes($description);
						$description = nl2br($description);
						$description = str_replace(array("\r", "\n"), '', $description);
						$description = removeEvilTags($description);
						$description = secure_sql($description);

						if(_STOPBADCOMMENTS == '1')
						{
							$description = search_bad_words($description);
						}
						$description = word_wrap_pass($description);

						$video_title = 	secure_sql($_POST['video_title']);
						$video_title = 	str_replace( array("<", ">"), '', $video_title);

						$tags = removeEvilTags($_POST['tags']);
						$tags = secure_sql($tags);

						if ($config['auto_approve_suggested_videos'] == '1')
						{
							$video_details = array();

							$video_details['video_title'] = $video_title;
							$video_details['description'] = $description;
							$video_details['category'] = $category_id;
							$video_details['yt_length'] = $duration;
							$video_details['tags'] = $tags;
							$video_details['language'] = 1;
							$video_details['age_verification'] = 0;
							$video_details['submitted_user_id'] = (int) $userdata['id'];
							$video_details['submitted'] = $userdata['username'];
							$video_details['added'] = time();
							$video_details['source_id'] = 1;
							$video_details['featured'] = 0;
							$video_details['restricted'] = 0;
							$video_details['yt_thumb'] = $thumbnail;
							$video_details['direct'] = $row['url'];
							$video_details['url_flv'] = $row['url'];
							$video_details['allow_comments'] = 1;
							
							$uniq_id = generate_video_uniq_id();
							$video_details['uniq_id'] = $uniq_id;

							// try to rename uploaded thumb
							if ($thumbnail != '')
							{
								$ext = 'jpg';
								if (rename(_THUMBS_DIR_PATH . $thumbnail, _THUMBS_DIR_PATH . $uniq_id . '-1.'. $ext))
								{
									$video_details['yt_thumb'] = $uniq_id . '-1.'. $ext;
								}
							}


							// insert to database
							$new_video = insert_new_video($video_details, $new_video_id);
							if ($new_video !== true)
							{
								$errors['mediafile'] = $lang['upload_errmsg1'];
							}
							else
							{

								// do tags
								if ($video_details['tags'] != '')
								{
									$tags = explode(",", $video_details['tags']);
									foreach($tags as $k => $tag)
									{
										$tags[$k] = stripslashes(trim($tag));
									}
									//	remove duplicates and 'empty' tags
									$temp = array();
									for($i = 0; $i < count($tags); $i++)
									{
										if($tags[$i] != '')
											if($i <= (count($tags)-1))
											{
												$found = 0;
												for($j = $i + 1; $j < count($tags); $j++)
												{
													if(strcmp($tags[$i], $tags[$j]) == 0)
														$found++;
												}
												if($found == 0)
													$temp[] = $tags[$i];
											}
									}
									$tags = $temp;
									//	insert tags
									if(count($tags) > 0)
										insert_tags($uniq_id, $tags);
								}

								$sql = "DELETE FROM pm_temp
										WHERE id = ". $row['id'];
								mysql_query($sql) or die(mysql_error());
							}
							header("Location: ". _URL_MOBI .'/upload.'. _FEXT .'?s=approved');
							exit();
						}
						else
						{
							$sql = "UPDATE pm_temp
									   SET video_title = '". $video_title ."',
									   	   description = '". $description ."',
										   yt_length = '". $duration ."',
										   tags = '". $tags ."',
										   category = '". $category_id ."',
										   added = '". time() ."',
										   thumbnail = '". $thumbnail ."'
									WHERE id = ". secure_sql($mysql_insert_id);

							$result = mysql_query($sql) or die(mysql_error());


							if ( ! $result)
							{
								$errors['mediafile'] = $lang['upload_errmsg1'];
							}
							else
							{
								// success
								if ( ! headers_sent())
								{
								    header("Location: ". _URL_MOBI .'/upload.'. _FEXT .'?s=uploaded');
								}
								else
								{
								    echo '<meta http-equiv="refresh" content="0; url='. _URL_MOBI .'/upload.'. _FEXT .'?s=uploaded">';
								}
								exit();
							}
						}
					}
					else
					{
						// Current User ID different from Uploader's User ID
						$errors['mediafile'] = $lang['upload_errmsg1'];
					}
				}
				else
				{
					// pm_temp row not found or mysql error
					$errors['mediafile'] = $lang['upload_errmsg6'];
				}
			}
			else
			{
				// $mysql_insert_id = 0
				$errors['mediafile'] = $lang['upload_errmsg1'];
			}
		}


		foreach ($_POST as $key => $value)
		{
			$_POST[$key] = specialchars($value, 1);
		}

		if ($del_tmp_file && strlen($img['tmp_name']) > 0)
		{
			@unlink($img['tmp_name']);
		}
	} // end if Submit
} // end if daily limit not reached

/*************/

$success_msg = secure_sql($_GET['s']);
?>
<div id="welcome">
	<div><?php echo $lang['upload']; ?></div>

<?php
if($errors) {
	echo "<ul class='alerts-warning'>";
	foreach ($errors as $msg_error) {
		echo "<li>".$msg_error."</li>\n";
	}
	echo "</ul>";
} elseif($success_msg == 'uploaded' || $success_msg == 'approved' ) {
	$msg = $lang['suggest_msg4'];
	$msg .= "<a href='upload.php'>".$lang['add_another_one']."</a> or <a href='index.php'>".$lang['return_home']."</a>";
	echo '<ul class="alerts-success"><li>'. $msg .'</li></ul>';
}
?>
</div>
<div id="content">

	<form class="login" name="upload-video-form" id="upload-video-form" enctype="multipart/form-data" method="post" action="upload.php">
	<fieldset>
	    <div class="control-group">
	      <div class="controls">
			<div class="btn-upload border-radius4"><span id="uploadButtonPlaceholder"></span></div>
			<div>
			<small><div id="uploadProgressBar"></div></small>
			<div id="divStatus"></div>
			<ol id="uploadLog"></ol>
			</div>
			<input type="hidden" name="form_id" value="<?php echo $form_id;?>" />
			<input type="hidden" name="_pmnonce_t" value="<?php echo $nonce['_pmnonce_t'];?>" />
			<input type="hidden" name="temp_id" id="temp_id" value="" />
	      </div>
	    </div>

	    <div class="control-group">
	      <label class="control-label" for="videofile"><?php echo $lang['upload_video']; ?></label>
	      <div class="controls">
				<input type="file" name="videofile" value="" size="40">
	      </div>
	    </div>

	    <div class="control-group">
	      <label class="control-label" for="capture"><?php echo $lang['upload_video2']; ?></label>
	      <div class="controls">
	      <input type="file" name="capture" class="capture" value="" size="40" />
	      </div>
	    </div>
		<div  id="upload-video-extra">
			<div class="control-group">
		      <label class="control-label" for="video_title"><?php echo $lang['video']; ?></label>
		      <div class="controls">
		      <input name="video_title" type="text" value="<?php echo $_POST['video_title']; ?>" class="inputtext">
		      </div>
		    </div>
			<div class="control-group">
		      <label class="control-label" for="duration"><?php echo $lang['_duration']; ?></label>
		      <div class="controls">
		      <input name="duration" id="duration" type="text" value="<?php echo $_POST['duration']; ?>" class="inputtext" style="text-align: center;">
		      <br />
	          <small class="help-inline"><?php echo $lang['duration_format']; ?></small>
		      </div>
		    </div>
		    <div class="control-group">
		      <label class="control-label" for="category"><?php echo $lang['category']; ?></label>
		      <div class="controls">
		      <?php echo categories_dropdown(); ?>
		      </div>
		    </div>
		    <div class="control-group">
		      <label class="control-label" for="description"><?php echo $lang['description']; ?></label>
		      <div class="controls">
				<textarea name="description" class="span5" rows="3"><?php echo $_POST['description']; ?></textarea>
		      </div>
		    </div>
		    <div class="control-group">
		      <label class="control-label" for="tags"><?php echo $lang['tags']; ?></label>
		      <div class="controls">
				<div class="tagsinput">
		          <input id="tags_upload" name="tags" type="text" class="inputtext" value="<?php echo $_POST['tags']; ?>" placeholder="tag1, tag2, tag3">
		        </div>
		      </div>
		    </div>
		    <div class="">
		      <div class="controls">
				<button name="Submit" type="submit" id="upload_btn" value="<?php echo $lang['submit_upload']; ?>" class="submit border2" data-loading-text="<?php echo $lang['submit_send']; ?>"><?php echo $lang['submit_upload']; ?></button>
		      </div>
		    </div>
		</div><!-- #upload-video-extra -->		
	</fieldset>
	</form>
</div>
<?php
include('footer.php');
?>