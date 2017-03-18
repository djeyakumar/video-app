<?php /* Smarty version 2.6.20, created on 2017-03-18 01:57:16
         compiled from header.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'default', 'header.tpl', 65, false),array('modifier', 'escape', 'header.tpl', 82, false),array('function', 'dropdown_menu_video_categories', 'header.tpl', 204, false),)), $this); ?>
<!DOCTYPE html>
<html dir="<?php if (@_IS_RTL == '1'): ?>rtl<?php else: ?>ltr<?php endif; ?>">

<head>

	<meta name="google-site-verification" content="MdbvcXNsz2ls5NE2K74Eq42Z0XSI4vs8OTk7_fFjMhQ" />
	<meta name="dailymotion-domain-verification" content="dmldh8xifsmp6kvrg" />
	<meta name="msvalidate.01" content="5372E815944EF25C6A2772E98BB057DE" />
	<meta name="alexaVerifyID" content="ZSnSyhNenpxP0YlyXgEUohO9pXI"/> 
	<meta name='yandex-verification' content='57c4149ebb64f62f' />
	<!-- Go to www.addthis.com/dashboard to customize your tools -->
	<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-568e8fbe0d4dd77d"></script>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=1024,maximum-scale=1.0">
	<title><?php echo $this->_tpl_vars['meta_title']; ?>
</title>
	<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=edge,chrome=1">  
	<?php if ($this->_tpl_vars['no_index'] == '1' || @_DISABLE_INDEXING == '1'): ?>
	<meta name="robots" content="noindex,nofollow">
	<meta name="googlebot" content="noindex,nofollow">
	<?php endif; ?>
	<meta name="title" content="<?php echo $this->_tpl_vars['meta_title']; ?>
" />
	<meta name="keywords" content="<?php echo $this->_tpl_vars['meta_keywords']; ?>
" />
	<meta name="description" content="<?php echo $this->_tpl_vars['meta_description']; ?>
" />

	<link rel="shortcut icon" href="<?php echo @_URL; ?>
/templates/<?php echo @_TPLFOLDER; ?>
/img/favicon.ico">
	
	<?php if ($this->_tpl_vars['tpl_name'] == "video-category"): ?>
	<link rel="alternate" type="application/rss+xml" title="<?php echo $this->_tpl_vars['meta_title']; ?>
" href="<?php echo @_URL; ?>
/rss.php?c=<?php echo $this->_tpl_vars['cat_id']; ?>
" />
	<?php elseif ($this->_tpl_vars['tpl_name'] == "video-top"): ?>
	<link rel="alternate" type="application/rss+xml" title="<?php echo $this->_tpl_vars['meta_title']; ?>
" href="<?php echo @_URL; ?>
/rss.php?feed=topvideos" />
	<?php elseif ($this->_tpl_vars['tpl_name'] == "article-category"): ?>
	<link rel="alternate" type="application/rss+xml" title="<?php echo $this->_tpl_vars['meta_title']; ?>
" href="<?php echo @_URL; ?>
/rss.php?c=<?php echo $this->_tpl_vars['cat_id']; ?>
&feed=articles" />
	<?php else: ?>
	<link rel="alternate" type="application/rss+xml" title="<?php echo $this->_tpl_vars['meta_title']; ?>
" href="<?php echo @_URL; ?>
/rss.php" />
	<?php endif; ?>
	<?php if ($this->_tpl_vars['comment_system_facebook'] && $this->_tpl_vars['fb_app_id'] != ''): ?>
	<meta property="fb:app_id" content="<?php echo $this->_tpl_vars['fb_app_id']; ?>
" />
	<?php endif; ?>
	<!-- CSS -->
	<link href="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" media="screen" href="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/css/bootstrap-social.css">
	<link href="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/css/bootstrap-select.min.css" rel="stylesheet">

	<link href="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/css/style.css" rel="stylesheet">
	<link href="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/css/styles.css" rel="stylesheet">
	<link href="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">

	<link href='//fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<?php if ($this->_tpl_vars['tpl_name'] == 'video-watch' && $this->_tpl_vars['playlist']): ?>
	<link rel="canonical" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
"/>
	<?php endif; ?>
	<script type="text/javascript">
	var MELODYURL = "<?php echo @_URL; ?>
";
	var MELODYURL2 = "<?php echo @_URL2; ?>
";
	var TemplateP = "<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
";
	var _LOGGEDIN_ = <?php if ($this->_tpl_vars['logged_in']): ?> true <?php else: ?> false <?php endif; ?>;
	 
	<?php if ($this->_tpl_vars['tpl_name'] == 'index' || $this->_tpl_vars['tpl_name'] == 'video-watch'): ?>
	<?php echo '
	var pm_video_data = {
	'; ?>
	
		uniq_id: "<?php echo $this->_tpl_vars['video_data']['uniq_id']; ?>
",
		url: "<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
",
		duration: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['yt_length'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		duration_str: "<?php echo $this->_tpl_vars['video_data']['duration']; ?>
",
		category: "<?php echo $this->_tpl_vars['video_data']['category']; ?>
".split(','),
		category_str: "<?php echo $this->_tpl_vars['video_data']['category']; ?>
",
		featured: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['featured'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		restricted: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['restricted'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		allow_comments: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['allow_comments'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		allow_embedding: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['allow_embedding'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		is_stream: <?php if ($this->_tpl_vars['video_data']['is_stream']): ?>true<?php else: ?>false<?php endif; ?>,
		views: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['site_views'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		likes: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['likes'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		dislikes: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['dislikes'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		publish_date_str: "<?php echo $this->_tpl_vars['video_data']['html5_datetime']; ?>
",
		publish_date_timestamp: <?php echo ((is_array($_tmp=@$this->_tpl_vars['video_data']['added_timestamp'])) ? $this->_run_mod_handler('default', true, $_tmp, 0) : smarty_modifier_default($_tmp, 0)); ?>
,
		embed_url: "<?php echo $this->_tpl_vars['video_data']['embed_href']; ?>
",
		thumb_url: "<?php echo $this->_tpl_vars['video_data']['thumb_img_url']; ?>
",
		preview_image_url: "<?php echo $this->_tpl_vars['video_data']['preview_image']; ?>
",
		title: '<?php echo ((is_array($_tmp=$this->_tpl_vars['video_data']['video_title'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'quotes') : smarty_modifier_escape($_tmp, 'quotes')); ?>
',
		autoplay_next: <?php if ($this->_tpl_vars['video_data']['autoplay_next']): ?>true<?php else: ?>false<?php endif; ?>,
		autoplay_next_url: "<?php echo $this->_tpl_vars['video_data']['autoplay_next_url']; ?>
"
	<?php echo '
	}
	'; ?>

	<?php endif; ?>
	</script>
	<?php echo '
	<script type="text/javascript">
	 var pm_lang = {
		lights_off: "'; ?>
<?php echo $this->_tpl_vars['lang']['lights_off']; ?>
<?php echo '",
		lights_on: "'; ?>
<?php echo $this->_tpl_vars['lang']['lights_on']; ?>
<?php echo '",
		validate_name: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_name']; ?>
<?php echo '",
		validate_username: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_username']; ?>
<?php echo '",
		validate_pass: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_pass']; ?>
<?php echo '",
		validate_captcha: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_captcha']; ?>
<?php echo '",
		validate_email: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_email']; ?>
<?php echo '",
		validate_agree: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_agree']; ?>
<?php echo '",
		validate_name_long: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_name_long']; ?>
<?php echo '",
		validate_username_long: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_username_long']; ?>
<?php echo '",
		validate_pass_long: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_pass_long']; ?>
<?php echo '",
		validate_confirm_pass_long: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_confirm_pass_long']; ?>
<?php echo '",
		choose_category: "'; ?>
<?php echo $this->_tpl_vars['lang']['choose_category']; ?>
<?php echo '",
		validate_select_file: "'; ?>
<?php echo $this->_tpl_vars['lang']['upload_errmsg10']; ?>
<?php echo '",
		validate_video_title: "'; ?>
<?php echo $this->_tpl_vars['lang']['validate_video_title']; ?>
<?php echo '",
		please_wait: "'; ?>
<?php echo $this->_tpl_vars['lang']['please_wait']; ?>
<?php echo '",
		// upload video page
		swfupload_status_uploaded: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_status_uploaded']; ?>
<?php echo '",
		swfupload_status_pending: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_status_pending']; ?>
<?php echo '",
		swfupload_status_queued: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_status_queued']; ?>
<?php echo '",
		swfupload_status_uploading: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_status_uploading']; ?>
<?php echo '",
		swfupload_file: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_file']; ?>
<?php echo '",
		swfupload_btn_select: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_btn_select']; ?>
<?php echo '",
		swfupload_btn_cancel: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_btn_cancel']; ?>
<?php echo '",
		swfupload_status_error: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_status_error']; ?>
<?php echo '",
		swfupload_error_oversize: "'; ?>
<?php echo $this->_tpl_vars['lang']['swfupload_error_oversize']; ?>
<?php echo '",
		swfupload_friendly_maxsize: "'; ?>
<?php echo $this->_tpl_vars['upload_limit']; ?>
<?php echo '",
		upload_errmsg2: "'; ?>
<?php echo $this->_tpl_vars['lang']['upload_errmsg2']; ?>
<?php echo '",
		// playlist
		playlist_delete_confirm: "'; ?>
<?php echo $this->_tpl_vars['lang']['playlist_delete_confirm']; ?>
<?php echo '",
		playlist_delete_item_confirm: "'; ?>
<?php echo $this->_tpl_vars['lang']['playlist_delete_item_confirm']; ?>
<?php echo '",
		show_more: "'; ?>
<?php echo $this->_tpl_vars['lang']['show_more']; ?>
<?php echo '",
		show_less: "'; ?>
<?php echo $this->_tpl_vars['lang']['show_less']; ?>
<?php echo '",
		delete_video_confirmation: "'; ?>
<?php echo $this->_tpl_vars['lang']['delete_video_confirmation']; ?>
<?php echo '",
		browse_all: "'; ?>
<?php echo $this->_tpl_vars['lang']['browse_all']; ?>
<?php echo '",
		upload_error_unknown: "'; ?>
<?php echo ((is_array($_tmp=@$this->_tpl_vars['lang']['error_unknown'])) ? $this->_run_mod_handler('default', true, $_tmp, 'Unknown error occured') : smarty_modifier_default($_tmp, 'Unknown error occured')); ?>
<?php echo '"
	 }
	</script>
	'; ?>


	<script type="text/javascript" src="<?php echo @_URL; ?>
/js/swfobject.js"></script>
	<?php if ($this->_tpl_vars['facebook_image_src'] != ''): ?>
		<link rel="image_src" href="<?php echo $this->_tpl_vars['facebook_image_src']; ?>
" />
		<meta property="og:url"  content="<?php if ($this->_tpl_vars['tpl_name'] == 'article-read'): ?><?php echo $this->_tpl_vars['article']['link']; ?>
<?php else: ?><?php echo $this->_tpl_vars['video_data']['video_href']; ?>
<?php endif; ?>" />
		<?php if ($this->_tpl_vars['tpl_name'] == 'article-read'): ?>
		<meta property="og:type" content="article" />
		<?php endif; ?>
		<meta property="og:title" content="<?php echo $this->_tpl_vars['meta_title']; ?>
" />
		<meta property="og:description" content="<?php echo $this->_tpl_vars['meta_description']; ?>
" />
		<meta property="og:image" content="<?php echo $this->_tpl_vars['facebook_image_src']; ?>
" />
		<meta property="og:image:width" content="480" />
		<meta property="og:image:height" content="360" />
		<?php if ($this->_tpl_vars['video_data']['source_id'] == $this->_tpl_vars['_sources']['localhost']['source_id']): ?>
			<link rel="video_src" href="<?php echo @_URL; ?>
/uploads/videos/<?php echo $this->_tpl_vars['video_data']['url_flv_raw']; ?>
"/>
			<meta property="og:video:url" content="<?php echo @_URL; ?>
/uploads/videos/<?php echo $this->_tpl_vars['video_data']['url_flv_raw']; ?>
" />
		<?php endif; ?>
	<?php endif; ?>
	<!-- <style type="text/css"><?php echo $this->_tpl_vars['theme_customizations']; ?>
</style> -->
	<?php if (isset ( $this->_tpl_vars['mm_header_inject'] )): ?><?php echo $this->_tpl_vars['mm_header_inject']; ?>
<?php endif; ?>
</head>
<?php if ($this->_tpl_vars['tpl_name'] == "video-category"): ?>
<body class="with-slide">
<?php elseif ($this->_tpl_vars['tpl_name'] == "video-watch"): ?>
<body class="watching">
<?php elseif ($this->_tpl_vars['tpl_name'] == "article-category"): ?>
<body class="with-slide">
<?php elseif ($this->_tpl_vars['tpl_name'] == "article-read"): ?>
<body class="with-slide">
<?php elseif ($this->_tpl_vars['tpl_name'] == 'page'): ?>
<body class="with-slide">
<?php else: ?>
<body class="with-slide">
<?php endif; ?>
<?php if ($this->_tpl_vars['maintenance_mode']): ?>
	<div class="alert alert-danger" align="center"><strong>Currently running in maintenance mode.</strong></div>
<?php endif; ?>
<?php if (( $this->_tpl_vars['tpl_name'] == 'article-read' || $this->_tpl_vars['tpl_name'] == 'video-watch' ) && $this->_tpl_vars['comment_system_facebook']): ?>
<!-- Facebook Javascript SDK -->
<div id="fb-root"></div>
<?php echo '
<script>(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
	fjs.parentNode.insertBefore(js, fjs);
}(document, \'script\', \'facebook-jssdk\'));
</script>
'; ?>

<?php endif; ?>
<?php if (isset ( $this->_tpl_vars['mm_body_top_inject'] )): ?><?php echo $this->_tpl_vars['mm_body_top_inject']; ?>
<?php endif; ?>

<div id="header-wrapper">
	<div id="header">
		<div class="container">
			<div class="menu-toggler btn btn-gray"><i class="fa fa-list"></i>
			</div>
			<div class="search-toggler btn btn-gray"><i class="fa fa-search"></i>
			</div>
			<div id="logo">
				<a href="<?php echo @_URL; ?>
/index.<?php echo @_FEXT; ?>
" rel="home"></a> 
			</div>
			<ul id="menu">
				<li><a href="<?php echo @_URL; ?>
/index.<?php echo @_FEXT; ?>
"><?php echo $this->_tpl_vars['lang']['homepage']; ?>
</a></li>
				<li class="has-children">
				<?php if (@_SEOMOD): ?>
					<a href="<?php if (@USER_DEVICE != 'mobile'): ?><?php echo @_URL; ?>
/browse.<?php echo @_FEXT; ?>
<?php else: ?>#<?php endif; ?>">Genres <b class="caret"></b></a>
				<?php else: ?>
					<a href="<?php if (@USER_DEVICE != 'mobile'): ?><?php echo @_URL; ?>
/category.php<?php else: ?>#<?php endif; ?>">Genres <b class="caret"></b></a>
				<?php endif; ?>
					<ul class="sub-menu">
						<?php echo smarty_html_list_categories(array('max_levels' => 3), $this);?>

					</ul>
				</li>

				<li class="has-children"> <a>Country <b class="caret"></b></a> 
					<ul class="sub-menu" style="height: 500px; overflow-y: scroll;">
						<?php $_from = $this->_tpl_vars['countries']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['country']):
?>
						<li><a href="country.php?id=<?php echo $this->_tpl_vars['country']['id']; ?>
"><?php echo $this->_tpl_vars['country']['name']; ?>
</a></li>
						<?php endforeach; endif; unset($_from); ?>
					</ul>
				</li>

				<li> <a title="Movies" href="videotype.php?type=0">Movies</a> 
				</li>
				<li> <a title="Movies" href="videotype.php?type=1">TV - Series</a> 
				</li>
				<li> <a title="Movies" href="topimdb.php">TOP IMDB</a> 
				</li>
				<li> <a title="Movies" href="library.php">A-Z List</a> 
				</li>
				<li> <a title="Request" href="javascript:;/movies">Request</a> 
				</li>
				
				
				<?php if (isset ( $this->_tpl_vars['mm_menu_always_inject1'] )): ?><?php echo $this->_tpl_vars['mm_menu_always_inject1']; ?>
<?php endif; ?>		
				<?php if (isset ( $this->_tpl_vars['mm_menu_always_inject2'] )): ?><?php echo $this->_tpl_vars['mm_menu_always_inject2']; ?>
<?php endif; ?>	
				<?php if ($this->_tpl_vars['logged_in'] != 1 && isset ( $this->_tpl_vars['mm_menu_notlogged_inject'] )): ?><?php echo $this->_tpl_vars['mm_menu_notlogged_inject']; ?>
<?php endif; ?>
				
				<?php if (is_array ( $this->_tpl_vars['header_page_links'] ) && ! empty ( $this->_tpl_vars['header_page_links'] )): ?>
				<li class="has-children">
					<a><?php echo $this->_tpl_vars['lang']['pages']; ?>
 <b class="caret"></b></a>
					<ul class="sub-menu">
						<?php $_from = $this->_tpl_vars['header_page_links']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['page_data']):
?>
							<li><a href="<?php echo $this->_tpl_vars['page_data']['page_url']; ?>
"><?php echo $this->_tpl_vars['page_data']['title']; ?>
</a></li>
						<?php endforeach; endif; unset($_from); ?>
					</ul>
				</li>
				<?php endif; ?>

				<?php if ($this->_tpl_vars['logged_in'] != '1'): ?>
					<?php if ($this->_tpl_vars['allow_registration'] == '1'): ?>
						<?php if ($this->_tpl_vars['allow_facebook_login'] || $this->_tpl_vars['allow_twitter_login']): ?>
						<li><a data-toggle="modal" href="#header-register-form" class="btn-register border-radius2"><?php echo $this->_tpl_vars['lang']['register']; ?>
</a></li>
						<?php else: ?>
						<li><a href="<?php echo @_URL; ?>
/register.<?php echo @_FEXT; ?>
" class="btn-register border-radius2"><?php echo $this->_tpl_vars['lang']['register']; ?>
</a></li>
						<?php endif; ?>
					<?php endif; ?>
				<?php endif; ?>
			</ul>
			<div id="search">
				<form action="<?php echo @_URL; ?>
/article.php" method="get" onSubmit="return validateSearch('true');">
					<input id="appendedInputButton" size="16" name="keywords" type="text" placeholder="<?php echo $this->_tpl_vars['lang']['submit_search']; ?>
..." x-webkit-speech speech onwebkitspeechchange="this.form.submit();">
					<button type="submit"><i class="fa fa-search"></i>
					</button>
				</form>
			</div>
			<div id="sign">
				<button class="btn btn-primary btn-login" data-toggle="modal" data-target="#header-login-form" title="<?php echo $this->_tpl_vars['lang']['login']; ?>
">Login</button>
			</div>
		</div>
	</div>