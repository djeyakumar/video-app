<!DOCTYPE html>
<html dir="{if $smarty.const._IS_RTL == '1'}rtl{else}ltr{/if}">

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
	<title>{$meta_title}</title>
	<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=edge,chrome=1">  
	{if $no_index == '1' || $smarty.const._DISABLE_INDEXING == '1'}
	<meta name="robots" content="noindex,nofollow">
	<meta name="googlebot" content="noindex,nofollow">
	{/if}
	<meta name="title" content="{$meta_title}" />
	<meta name="keywords" content="{$meta_keywords}" />
	<meta name="description" content="{$meta_description}" />

	<link rel="shortcut icon" href="{$smarty.const._URL}/templates/{$smarty.const._TPLFOLDER}/img/favicon.ico">
	
	{if $tpl_name == "video-category"}
	<link rel="alternate" type="application/rss+xml" title="{$meta_title}" href="{$smarty.const._URL}/rss.php?c={$cat_id}" />
	{elseif $tpl_name == "video-top"}
	<link rel="alternate" type="application/rss+xml" title="{$meta_title}" href="{$smarty.const._URL}/rss.php?feed=topvideos" />
	{elseif $tpl_name == "article-category"}
	<link rel="alternate" type="application/rss+xml" title="{$meta_title}" href="{$smarty.const._URL}/rss.php?c={$cat_id}&feed=articles" />
	{else}
	<link rel="alternate" type="application/rss+xml" title="{$meta_title}" href="{$smarty.const._URL}/rss.php" />
	{/if}
	{if $comment_system_facebook && $fb_app_id != ''}
	<meta property="fb:app_id" content="{$fb_app_id}" />
	{/if}
	<!-- CSS -->
	<link href="{$smarty.const._URL}/templates/{$template_dir}/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" media="screen" href="{$smarty.const._URL}/templates/{$template_dir}/css/bootstrap-social.css">
	<link href="{$smarty.const._URL}/templates/{$template_dir}/css/bootstrap-select.min.css" rel="stylesheet">

	<link href="{$smarty.const._URL}/templates/{$template_dir}/css/style.css" rel="stylesheet">
	<link href="{$smarty.const._URL}/templates/{$template_dir}/css/styles.css" rel="stylesheet">
	<link href="{$smarty.const._URL}/templates/{$template_dir}/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">

	<link href='//fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	{if $tpl_name == 'video-watch' && $playlist}
	<link rel="canonical" href="{$video_data.video_href}"/>
	{/if}
	<script type="text/javascript">
	var MELODYURL = "{$smarty.const._URL}";
	var MELODYURL2 = "{$smarty.const._URL2}";
	var TemplateP = "{$smarty.const._URL}/templates/{$template_dir}";
	var _LOGGEDIN_ = {if $logged_in} true {else} false {/if};
	 
	{if $tpl_name == 'index' || $tpl_name == 'video-watch'}
	{literal}
	var pm_video_data = {
	{/literal}	
		uniq_id: "{$video_data.uniq_id}",
		url: "{$video_data.video_href}",
		duration: {$video_data.yt_length|default:0},
		duration_str: "{$video_data.duration}",
		category: "{$video_data.category}".split(','),
		category_str: "{$video_data.category}",
		featured: {$video_data.featured|default:0},
		restricted: {$video_data.restricted|default:0},
		allow_comments: {$video_data.allow_comments|default:0},
		allow_embedding: {$video_data.allow_embedding|default:0},
		is_stream: {if $video_data.is_stream}true{else}false{/if},
		views: {$video_data.site_views|default:0},
		likes: {$video_data.likes|default:0},
		dislikes: {$video_data.dislikes|default:0},
		publish_date_str: "{$video_data.html5_datetime}",
		publish_date_timestamp: {$video_data.added_timestamp|default:0},
		embed_url: "{$video_data.embed_href}",
		thumb_url: "{$video_data.thumb_img_url}",
		preview_image_url: "{$video_data.preview_image}",
		title: '{$video_data.video_title|escape:'quotes'}',
		autoplay_next: {if $video_data.autoplay_next}true{else}false{/if},
		autoplay_next_url: "{$video_data.autoplay_next_url}"
	{literal}
	}
	{/literal}
	{/if}
	</script>
	{literal}
	<script type="text/javascript">
	 var pm_lang = {
		lights_off: "{/literal}{$lang.lights_off}{literal}",
		lights_on: "{/literal}{$lang.lights_on}{literal}",
		validate_name: "{/literal}{$lang.validate_name}{literal}",
		validate_username: "{/literal}{$lang.validate_username}{literal}",
		validate_pass: "{/literal}{$lang.validate_pass}{literal}",
		validate_captcha: "{/literal}{$lang.validate_captcha}{literal}",
		validate_email: "{/literal}{$lang.validate_email}{literal}",
		validate_agree: "{/literal}{$lang.validate_agree}{literal}",
		validate_name_long: "{/literal}{$lang.validate_name_long}{literal}",
		validate_username_long: "{/literal}{$lang.validate_username_long}{literal}",
		validate_pass_long: "{/literal}{$lang.validate_pass_long}{literal}",
		validate_confirm_pass_long: "{/literal}{$lang.validate_confirm_pass_long}{literal}",
		choose_category: "{/literal}{$lang.choose_category}{literal}",
		validate_select_file: "{/literal}{$lang.upload_errmsg10}{literal}",
		validate_video_title: "{/literal}{$lang.validate_video_title}{literal}",
		please_wait: "{/literal}{$lang.please_wait}{literal}",
		// upload video page
		swfupload_status_uploaded: "{/literal}{$lang.swfupload_status_uploaded}{literal}",
		swfupload_status_pending: "{/literal}{$lang.swfupload_status_pending}{literal}",
		swfupload_status_queued: "{/literal}{$lang.swfupload_status_queued}{literal}",
		swfupload_status_uploading: "{/literal}{$lang.swfupload_status_uploading}{literal}",
		swfupload_file: "{/literal}{$lang.swfupload_file}{literal}",
		swfupload_btn_select: "{/literal}{$lang.swfupload_btn_select}{literal}",
		swfupload_btn_cancel: "{/literal}{$lang.swfupload_btn_cancel}{literal}",
		swfupload_status_error: "{/literal}{$lang.swfupload_status_error}{literal}",
		swfupload_error_oversize: "{/literal}{$lang.swfupload_error_oversize}{literal}",
		swfupload_friendly_maxsize: "{/literal}{$upload_limit}{literal}",
		upload_errmsg2: "{/literal}{$lang.upload_errmsg2}{literal}",
		// playlist
		playlist_delete_confirm: "{/literal}{$lang.playlist_delete_confirm}{literal}",
		playlist_delete_item_confirm: "{/literal}{$lang.playlist_delete_item_confirm}{literal}",
		show_more: "{/literal}{$lang.show_more}{literal}",
		show_less: "{/literal}{$lang.show_less}{literal}",
		delete_video_confirmation: "{/literal}{$lang.delete_video_confirmation}{literal}",
		browse_all: "{/literal}{$lang.browse_all}{literal}",
		upload_error_unknown: "{/literal}{$lang.error_unknown|default:'Unknown error occured'}{literal}"
	 }
	</script>
	{/literal}

	<script type="text/javascript" src="{$smarty.const._URL}/js/swfobject.js"></script>
	{if $facebook_image_src != ''}
		<link rel="image_src" href="{$facebook_image_src}" />
		<meta property="og:url"  content="{if $tpl_name == 'article-read'}{$article.link}{else}{$video_data.video_href}{/if}" />
		{if $tpl_name == 'article-read'}
		<meta property="og:type" content="article" />
		{/if}
		<meta property="og:title" content="{$meta_title}" />
		<meta property="og:description" content="{$meta_description}" />
		<meta property="og:image" content="{$facebook_image_src}" />
		<meta property="og:image:width" content="480" />
		<meta property="og:image:height" content="360" />
		{if $video_data.source_id == $_sources.localhost.source_id}
			<link rel="video_src" href="{$smarty.const._URL}/uploads/videos/{$video_data.url_flv_raw}"/>
			<meta property="og:video:url" content="{$smarty.const._URL}/uploads/videos/{$video_data.url_flv_raw}" />
		{/if}
	{/if}
	<!-- <style type="text/css">{$theme_customizations}</style> -->
	{if isset($mm_header_inject)}{$mm_header_inject}{/if}
</head>
{if $tpl_name == "video-category"}
<body class="with-slide">
{elseif $tpl_name == "video-watch"}
<body class="watching">
{elseif $tpl_name == "article-category"}
<body class="with-slide">
{elseif $tpl_name == "article-read"}
<body class="with-slide">
{elseif $tpl_name == "page"}
<body class="with-slide">
{else}
<body class="with-slide">
{/if}
{if $maintenance_mode}
	<div class="alert alert-danger" align="center"><strong>Currently running in maintenance mode.</strong></div>
{/if}
{if ($tpl_name == 'article-read' || $tpl_name == 'video-watch') && $comment_system_facebook}
<!-- Facebook Javascript SDK -->
<div id="fb-root"></div>
{literal}
<script>(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
{/literal}
{/if}
{if isset($mm_body_top_inject)}{$mm_body_top_inject}{/if}

<div id="header-wrapper">
	<div id="header">
		<div class="container">
			<div class="menu-toggler btn btn-gray"><i class="fa fa-list"></i>
			</div>
			<div class="search-toggler btn btn-gray"><i class="fa fa-search"></i>
			</div>
			<div id="logo">
				<a href="{$smarty.const._URL}/index.{$smarty.const._FEXT}" rel="home"></a> 
			</div>
			<ul id="menu">
				<li><a href="{$smarty.const._URL}/index.{$smarty.const._FEXT}">{$lang.homepage}</a></li>
				<li class="has-children">
				{if $smarty.const._SEOMOD}
					<a href="{if $smarty.const.USER_DEVICE != 'mobile'}{$smarty.const._URL}/browse.{$smarty.const._FEXT}{else}#{/if}">Genres <b class="caret"></b></a>
				{else}
					<a href="{if $smarty.const.USER_DEVICE != 'mobile'}{$smarty.const._URL}/category.php{else}#{/if}">Genres <b class="caret"></b></a>
				{/if}
					<ul class="sub-menu">
						{dropdown_menu_video_categories max_levels=3}
					</ul>
				</li>

				<li class="has-children"> <a>Country <b class="caret"></b></a> 
					<ul class="sub-menu" style="height: 500px; overflow-y: scroll;">
						{foreach from=$countries key=k item=country}
						<li><a href="country.php?id={$country.id}">{$country.name}</a></li>
						{/foreach}
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
				
				
				{if isset($mm_menu_always_inject1)}{$mm_menu_always_inject1}{/if}		
				{if isset($mm_menu_always_inject2)}{$mm_menu_always_inject2}{/if}	
				{if $logged_in != 1 && isset($mm_menu_notlogged_inject)}{$mm_menu_notlogged_inject}{/if}
				
				{if is_array($header_page_links) && !empty($header_page_links) }
				<li class="has-children">
					<a>{$lang.pages} <b class="caret"></b></a>
					<ul class="sub-menu">
						{foreach from=$header_page_links key=k item=page_data}
							<li><a href="{$page_data.page_url}">{$page_data.title}</a></li>
						{/foreach}
					</ul>
				</li>
				{/if}

				{if $logged_in != '1'}
					{if $allow_registration == '1'}
						{if $allow_facebook_login || $allow_twitter_login}
						<li><a data-toggle="modal" href="#header-register-form" class="btn-register border-radius2">{$lang.register}</a></li>
						{else}
						<li><a href="{$smarty.const._URL}/register.{$smarty.const._FEXT}" class="btn-register border-radius2">{$lang.register}</a></li>
						{/if}
					{/if}
				{/if}
			</ul>
			<div id="search">
				<form action="{$smarty.const._URL}/article.php" method="get" onSubmit="return validateSearch('true');">
					<input id="appendedInputButton" size="16" name="keywords" type="text" placeholder="{$lang.submit_search}..." x-webkit-speech speech onwebkitspeechchange="this.form.submit();">
					<button type="submit"><i class="fa fa-search"></i>
					</button>
				</form>
			</div>
			<div id="sign">
				<button class="btn btn-primary btn-login" data-toggle="modal" data-target="#header-login-form" title="{$lang.login}">Login</button>
			</div>
		</div>
	</div>
