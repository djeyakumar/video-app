		<div class="container">
			{if $ad_6}
			<div class="floating_ad_left sticky_ads">
			{$ad_6}
			</div>
			{/if}

			{if $ad_7}
			<div class="floating_ad_right sticky_ads">
			{$ad_7}
			</div>
			{/if}
			{if $ad_2 != ''}
			<div align="center">{$ad_2}</div>
			{/if}
		</div>
		<div id="footer">
			<div class="container">
				<div class="row">
					<div class="info col-lg-9 col-xs-24 pull-right">
						{if $_custom_logo_url != ''}
							<div class="logo-img">
								<a href="{$smarty.const._URL}/index.{$smarty.const._FEXT}" rel="home"><img src="{$_custom_logo_url}" alt="{$smarty.const._SITENAME|escape}" title="{$smarty.const._SITENAME|escape}" border="0" /></a>
							</div>
						  {else}
							<h3 style="margin-top: 5px;"><a href="{$smarty.const._URL}/index.{$smarty.const._FEXT}" rel="home" style="color: #fe505a;">{$smarty.const._SITENAME}</a></h3>
						{/if}
					</div>
					<div class="connect col-lg-7 col-sm-12">
						<div class="row">
							<div class="col-xs-12">
								<div class="socials">
									{if $tpl_name == "video-category"}
									<a href="{$smarty.const._URL}/rss.php?c={$cat_id}" title="{$meta_title} RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									{elseif $tpl_name == "video-new"}
									<a href="{$smarty.const._URL}/rss.php" title="{$meta_title} RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									{elseif $tpl_name == "video-top"}
									<a href="{$smarty.const._URL}/rss.php?feed=topvideos" title="{$meta_title} RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									{elseif $tpl_name == "article-category" || $tpl_name == "article-read"}
									<a href="{$smarty.const._URL}/rss.php?c={$cat_id}&feed=articles" title="{$meta_title} RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									{else}
									<a href="{$smarty.const._URL}/rss.php" title="{$meta_title} RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									{/if}
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-24">
								{if $smarty.const.MOBILE_MELODY && $smarty.const.USER_DEVICE == 'mobile'}
									<a href="{$_footer_switch_ui_link}" rel="nofollow" class="foot-list">{$lang.switch_to_mobile_ui}</a>
								{/if}
								<a href="{$smarty.const._URL}/index.{$smarty.const._FEXT}" class="foot-list">{$lang.homepage}</a>
								<a href="{$smarty.const._URL}/contact_us.{$smarty.const._FEXT}" class="foot-list">{$lang.contact_us}</a>
								{if $logged_in != '1' && $allow_registration == '1'}
									{if $allow_facebook_login || $allow_twitter_login}
										<a class="primary ajax-modal foot-list" data-toggle="modal" data-backdrop="true" data-keyboard="true" href="#header-register-form">{$lang.register}</a>
									{else}
										<a href="{$smarty.const._URL}/register.{$smarty.const._FEXT}" class="foot-list">{$lang.register}</a>
									{/if}
								{/if}
								{if $logged_in == '1' && $s_power == '1'}
									<a href="{$smarty.const._URL}/{$smarty.const._ADMIN_FOLDER}/" class="foot-list">{$lang.admin_area}</a>{/if}
								{if is_array($footer_page_links)}
								  {foreach from=$footer_page_links key=k item=page_data}
									<a href="{$page_data.page_url}" class="foot-list">{$page_data.title}</a>
								  {/foreach}
								{/if}
							</div>
						</div>
						<div class="row">
							<div class="col-xs-24">
								<p class="desc"><span class="sitename">Copyright</span>  
									{if $smarty.const._POWEREDBY == 1}{$lang.powered_by}<br />{/if}
									&copy; {$smarty.now|date_format:'%Y'} {$smarty.const._SITENAME}. {$lang.rights_reserved}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="{$smarty.const._URL}/templates/{$template_dir}/js/jquery.min.js"></script>
	<script type="text/javascript" src="{$smarty.const._URL}/templates/{$template_dir}/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="{$smarty.const._URL}/templates/{$template_dir}/js/bootstrap-select.js"></script>
	<script type="text/javascript" src="{$smarty.const._URL}/templates/{$template_dir}/js/all.js"></script>
	<script type="text/javascript" src="{$smarty.const._URL}/templates/{$template_dir}/js/addthis_widget.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script> 

</body>

</html>