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

// define meta tags & common variables
if ($config['homepage_title'] != '' && $meta_title == '')
	$meta_title = $config['homepage_title'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
         "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php if(_RTL == 1) echo 'dir="rtl"'; ?>>
<head>

<link rel="stylesheet" media="screen" href="http://fonts.googleapis.com/earlyaccess/droidarabickufi.css"/>

<title><?php echo $meta_title; ?></title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="stylesheet" type="text/css" media="screen" href="<?php echo _URL_MOBI; ?>/css/style.<?php if(_RTL == 1) echo 'rtl.'; ?>css">
<link rel="stylesheet" type="text/css" media="screen" href="<?php echo _URL_MOBI; ?>/css/font-awesome.min.css">
<?php if($page_type == 'video') : ?>
<link rel="stylesheet" type="text/css" href="<?php echo _URL_MOBI; ?>/css/jssocials.css" />
<link rel="stylesheet" type="text/css" href="<?php echo _URL_MOBI; ?>/css/jssocials-theme-flat.css" />
<?php endif; ?>
<?php if ($config['allow_emojis'] == 1 && ($page_type == 'video' || $page_type == 'article')) : ?>
<link rel="stylesheet" href="//cdn.jsdelivr.net/emojione/2.0.0/assets/css/emojione.min.css" />
<?php endif; ?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>
<script src="<?php echo _URL_MOBI; ?>/js/modernizr.js"></script> 
<?php if($page_type == 'video') : ?>
<script src="<?php echo _URL_MOBI; ?>/js/jssocials.min.js"></script>
<?php endif; ?>
<!-- Start iPhone -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no,target-densitydpi=medium-dpi;"/>
<link rel="apple-touch-icon" href="<?php echo _URL_MOBI; ?>/images/touch-icon-iphone.png" />
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo _URL_MOBI; ?>/images/touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo _URL_MOBI; ?>/images/touch-icon-iphone4.png" />
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo _URL_MOBI; ?>/images/touch-icon-ipad2.png" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="HandheldFriendly" content="True" />
<meta http-equiv="cleartype" content="on" />
<!-- End iPhone -->
<?php if ($config['comment_system_facebook'] == 1 && $config['fb_app_id'] != '') : ?>
<meta property="fb:app_id" content="<?php echo $config['fb_app_id']; ?>"/>
<?php endif; ?>
<meta content="text/html; charset=iso-8859-1" http-equiv="Content-Type" />
<meta name="robots" content="noindex,nofollow" />
<meta name="googlebot" content="noindex,nofollow" />
<script type="text/javascript">
 var JS_URL = "<?php echo _URL;?>";
 var JS_MOBI_URL = "<?php echo _URL_MOBI;?>";
 var MELODYURL = "<?php echo _URL;?>";
 var MELODYURL2 = "<?php echo _URL;?>";
</script>
</head>
<body>
<div id="fb-root"></div>
<?php if($config['show_addthis_widget'] == 1) { ?>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=140361892688&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<?php } ?>


  <header id="header" class="wide-header">
  <a id="cd-menu-trigger" href="#0"><span class="cd-menu-text">Menu</span><span class="cd-menu-icon"></span></a>
  	<span class="sitetitle">
    <?php if ($config['custom_logo_url'] != '') : ?>
      <a href="<?php echo _URL_MOBI;?>/index.<?php echo _FEXT;?>"><img src="<?php echo $config['custom_logo_url']; ?>"  border="0" class="custom-logo" /></a>
    <?php else: ?>
      <a href="<?php echo _URL_MOBI;?>/index.<?php echo _FEXT;?>"><h1><?php echo _SITENAME; ?></h1></a>
    <?php endif; ?>
  	</span>
  </header>

  <nav id="cd-lateral-nav">
    <?php if($logged_in == 1) : ?>
    <div class="user-details">
      <a href="#" class="user-avatar"><img src="<?php echo getavatar($userdata['id'], $userdata['username']); ?> " border="0" /></a>
      <span class="user-name"><?php echo $userdata['name'];?></span>
    </div>
    <?php endif; ?>
    <div class="clearfix"></div>
      <div id="search_form" data-search-autocomplete-enabled="true">
      <?php 
      if($page_type == 'video' || $page_type == 'upload' || $page_type == '') {
      ?>
      <form action="<?php echo _URL_MOBI; ?>/search.php" method="get" id="search" name="search" class="search" />
      <input name="keywords" type="text" value="" id="inputString" autocomplete="off" autocapitalize="off" placeholder="<?php echo $lang['submit_search'];?>" class="search_keywords border2"  />
      <?php
      } elseif($page_type == 'article') {
      ?>
      <form action="<?php echo _URL_MOBI; ?>/search-articles.php" method="get" id="search" name="search" class="search" />
      <input name="keywords" type="text" value="" id="inputString" autocomplete="off" autocapitalize="off" placeholder="<?php echo $lang['submit_search']." ".$lang['articles'];?>" class="search_keywords border2"  />
      <?php } ?>
      <button class="submit border2" name="btn"><i class="fa fa-search"></i></button>
      </form>
    </div>

    <ul class="cd-navigation cd-single-item-wrapper">
      <li><a href="<?php echo _URL_MOBI; ?>/index.<?php echo _FEXT;?>"><?php echo $lang['homepage'];?></a></li>
      <li><a href="<?php echo _URL_MOBI; ?>/category.<?php echo _FEXT; ?>"><?php echo $lang['videos'];?></a></li>
      <?php if (_MOD_ARTICLE) { ?>
      <li><a href="<?php echo _URL_MOBI; ?>/article.<?php echo _FEXT; ?>"><?php echo $lang['articles'];?></a></li>
      <?php } ?>
    </ul> <!-- cd-navigation -->

    <ul class="cd-navigation cd-single-item-wrapper">
      <?php
      if($logged_in == 1) {
      echo '<li><a href="'._URL_MOBI.'/profile-edit.php">'.$lang['edit_profile'].'</a></li>';
      if ($config['allow_user_uploadvideo'] == '1')
      {
      echo '<li><a href="'._URL_MOBI.'/upload.'._FEXT.'">'.$lang['upload'].'</a></li>';
      }
      echo '<li><a href="'._URL_MOBI.'/signin.php?do=logout">'.$lang['logout'].'</a></li>';
      } else {
      echo '<li><a href="'._URL_MOBI.'/login.'._FEXT.'">'.$lang['login'].'</a></li>';

      if ($config['allow_registration'] == '1')
      {
      echo '<li><a href="'._URL_MOBI.'/register.'._FEXT.'">'.$lang['register'].'</a></li>';
      }
      }
      ?>
    </ul> <!-- cd-single-item-wrapper -->
  </nav>
<div class="cd-main-content">
<?php echo show_mm_ad("mobile_header"); ?>
