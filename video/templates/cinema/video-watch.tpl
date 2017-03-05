{include file="header.tpl" p="detail" tpl_name="video-watch"}
<div id="wrapper">
<div id="pm-cinema-player">
{if $show_addthis_widget == '1'}
{include file='widget-socialite.tpl'}
{/if}
		<div class="container-fluid {if $playlist}pm-cinema-player-playlists{/if}">
			<div class="row-fluid">
				<div class="span12">
					<div id="pm-video-detail" class="border-radius3 {if $video_data.restricted == '1' && ! $logged_in}restricted{/if}">
					<div class="row-fluid">
							<div class="span12">
									<div class="row-fluid">
											<div class="span6">
											{if $video_data.featured == 1}
													<span class="label label-featured">{$lang.featured}</span>
											{/if}
											</div>
											<div class="span6">
													<div id="lights-div"><a class="lightOn" href="#">{$lang.lights_off}</a></div>
											</div>
									</div>
							</div>
					</div>
					<div id="video-wrapper">
						{if $display_preroll_ad == true}
						<div id="preroll_placeholder" class="border-radius4">
						<div class="preroll_countdown">
												{$lang.preroll_ads_timeleft} <span class="preroll_timeleft">{$preroll_ad_data.timeleft_start}</span>
						</div>
												{$preroll_ad_data.code}
												{if $preroll_ad_data.skip}
												<div class="preroll_skip_countdown">
													 {$lang.preroll_ads_skip_msg} <span class="preroll_skip_timeleft">{$preroll_ad_data.skip_delay_seconds}</span>
												</div>
			<div class="preroll_skip_button">
												<a href="#" class="btn btn-blue hide" id="preroll_skip_btn">{$lang.preroll_ads_skip}</a>
												</div>
						{/if}
						{if $preroll_ad_data.disable_stats == 0}
							<img src="{$smarty.const._URL}/ajax.php?p=stats&do=show&aid={$preroll_ad_data.id}&at={$smarty.const._AD_TYPE_PREROLL}" width="1" height="1" border="0" />
						{/if}
						</div>
						{else}
						<div class="row-fluid">

							<div class="{if $playlist}span8{else}span12{/if}">
								{include file="player.tpl" page="detail"}
							</div>
							{if $playlist}
							<div class="span4">
								<div class="pm-sidebar-playlist">
								<div class="pm-playlist-header">
								<div class="pm-playlist-name">
									<a href="#">{smarty_fewchars s=$playlist.title length=40}</a>
								</div>
								<div class="pm-playlist-data">
									<span class="pm-playlist-creator">
														{$lang._by} <a href="{$playlist.user_profile_href}">{$playlist.user_name}</a>
									</span> 
									&ndash; 
									<span class="pm-playlist-video-count">
										{if $playlist.items_count == 1}
											1 {$lang._video}
										{else}
											{$playlist.items_count} {$lang.videos}
										{/if}
									</span>
								</div>
								</div>
								<div class="pm-playlist-controls">
								<a href="{$playlist_prev_url}" rel="nofollow"><i class="icon-fast-backward icon-white opac7" rel="tooltip" title="{$lang.playlist_prev_video}"></i></a> 
								<a href="{$playlist_next_url}" rel="nofollow"><i class="icon-fast-forward icon-white opac7" rel="tooltip" title="{$lang.playlist_next_video}"></i></a> 
								</div>


										<div class="pm-video-playlist">
												<ul class="unstyled">
													{foreach from=$playlist_items key=index item=list_video}
													<li {if $video_data.id == $list_video.id}class="pm-video-playlist-playing"{/if}>
														<a href="{$list_video.playlist_video_href}" class="pm-video-playlist-href" rel="nofollow"></a>

														<span class="pm-video-index">
														{if $video_data.id == $list_video.id}
											&#9658;
										{else}
											{$index+1}
										{/if}
										</span>
										<span class="pm-video-thumb pm-thumb-80">
											<span class="pm-video-li-thumb-info">
												<span class="pm-video-li-thumb-info">
													{if $list_video.yt_length > 0}<span class="pm-label-duration border-radius3 opac7">{$list_video.duration}</span>{/if}
													{if $logged_in}
													<span class="watch-later hide">
														<button class="btn btn-mini watch-later-add-btn-{$list_video.id}" onclick="watch_later_add({$list_video.id}); return false;" rel="tooltip" title="{$lang.add_to} {$lang.watch_later}"><i class="icon-time"></i></button>
														<button class="btn btn-mini btn-remove hide watch-later-remove-btn-{$list_video.id}" onclick="watch_later_remove({$list_video.id}); return false;" rel="tooltip" title="{$lang.playlist_remove_item}"><i class="icon-ok"></i></button>
													</span>
													{/if}
												</span>
												<a href="{$list_video.playlist_video_href}" class="pm-thumb-fix pm-thumb-80" rel="nofollow">
													<span class="pm-thumb-fix-clip">
														<img src="{$list_video.thumb_img_url}" alt="{$list_video.video_title}" width="80">
														<span class="vertical-align"></span>
													</span>
												</a>
											</span>
										</span>
										<h3><a href="{$list_video.playlist_video_href}" class="pm-title-link"  rel="nofollow">{$list_video.video_title}</a></h3>
										<div class="pm-video-attr">
											<span class="pm-video-attr-numbers">
												<small>{$list_video.site_views} {$lang.views}</small></small></span>
										</div>
										{if $list_video.featured}
										<span class="pm-video-li-info"> 
											<span class="label label-featured">{$lang._feat}</span>
										</span>
										{/if}
										
										</li>
									{/foreach}
								</ul>
								</div>
								</div>
								<div class="clearfix"></div>
								
							</div>
							{/if}
						</div>
						{/if}
					</div><!--#video-wrapper-->
					</div>
				</div>
				<div class="row-fluid">
				<div class="span12">
					<div id="pm-video-detail-data">
						<div class="pm-video-control">
								<div class="row-fluid">
										<div class="span10">
										<h1 class="entry-title">{$video_data.video_title}</h1>
										{if $logged_in && $is_admin == 'yes'}
										<a href="{$smarty.const._URL}/{$smarty.const._ADMIN_FOLDER}/modify.php?vid={$video_data.uniq_id}" rel="tooltip" class="btn btn-flat btn-mini" title="{$lang.edit} ({$lang._admin_only})" target="_blank">{$lang.edit}</a>
										{/if}
										<div class="clear"></div>
										</div>
										
										<div class="span2">
										<span class="pm-vc-views">
										<strong>{$video_data.site_views_formatted}</strong>
										<small>{$lang.views}</small>
										</span>
										<div class="clearfix"></div>
										<div class="progress" title="{$video_data.up_vote_count_formatted} {$lang._likes}, {$video_data.down_vote_count_formatted} {$lang._dislikes}">
											<div class="bar bar-success" id="rating-bar-up-pct" style="width: {$video_data.up_pct}%;"></div>
											<div class="bar bar-danger" id="rating-bar-down-pct" style="width: {$video_data.down_pct}%;"></div>
										</div>
										</div>
								</div>
						</div>

			<div id="pm-video-buttons">
			
						<form name="addtofavorites" id="addtofavorites" class="form-inline" action="">
						<button class="btn btn-small btn-flat {if $bin_rating_vote_value == 1}active{/if}" id="bin-rating-like" type="button"><i class="icon-thumbs-up icon-white"></i> {$lang._like}</button>
						<button class="btn btn-small btn-flat {if $bin_rating_vote_value == 0 && $bin_rating_vote_value !== false}active{/if}" id="bin-rating-dislike" type="button"><i class="icon-thumbs-down icon-white"></i></button>
						<button class="btn btn-small btn-flat" type="button" data-toggle="button" id="pm-vc-share">{$lang._share}</button>
						<input type="hidden" name="bin-rating-uniq_id" value="{$video_data.uniq_id}">
						{if $logged_in}
						<button class="btn btn-small btn-flat" type="button" data-toggle="button" id="pm-vc-playlists" data-video-id="{$video_data.id}" title="{$lang.add_to_playlist}"><i class="pm-vc-sprite i-playlists"></i> {$lang.add_to_playlist}</button>
						{else}
							<!--{$lang.dp_alt_1}-->
						{/if}
						<button class="btn btn-small btn-flat" type="button" data-toggle="button" id="pm-vc-report" title="{$lang.report_video}"><i class="icon-flag icon-white"></i></button>
						{if !empty($video_data.description)}<button class="btn btn-small btn-flat" type="button" data-toggle="button" id="pm-vc-description" title="{$lang.description}">{$lang.description}</button>{/if}
						<button class="btn btn-small btn-flat" id="jump-comments">{$lang.comments} ({$comment_count})</button>
						</form>
						</div>
						<div class="pm-player-full-width">

								<div id="pm-vc-description-content" class="hide well well-small alert alert-well">
										<p>{$video_data.description}</p>                    
										{if !empty($tags)}
					<hr />
										<div class="video-tags">
												<strong>{$lang.tags}</strong>: {$tags}
										</div>
										{/if}     
								</div>
								
								<div id="bin-rating-response" class="hide well well-small"></div>
								<div id="bin-rating-like-confirmation" class="hide well well-small alert alert-well">
								<button type="button" class="close" data-dismiss="alert">&times;</button>
								<p>{$lang.confirm_like}</p>
										<div class="row-fluid">
												<div class="span3 panel-1">
												<a href="https://www.facebook.com/sharer.php?u={$facebook_like_href}&amp;t={$facebook_like_title}" onclick="javascript:window.open(this.href,
					'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on FaceBook"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/facebook-round.png" alt=""></a>
												<a href="https://twitter.com/home?status=Watching%20{$facebook_like_title}%20on%20{$facebook_like_href}" onclick="javascript:window.open(this.href,
					'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Twitter"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/twitter-round.png"  alt=""></a>
												<a href="https://plus.google.com/share?url={$facebook_like_href}" onclick="javascript:window.open(this.href,
					'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Google+"><img
					src="{$smarty.const._URL}/templates/{$template_dir}/img/gplus-round.png" alt=""></a>
												</div>
												<div class="span9 panel-3">
												<div class="input-prepend"><span class="add-on">URL</span><input name="share_video_link" id="share_video_link" type="text" value="{$video_data.video_href}" class="span11" onClick="SelectAll('share_video_link');"></div>
												</div>
										</div>
								</div>
								<div id="bin-rating-dislike-confirmation" class="hide-dislike hide well well-small">
								<button type="button" class="close" data-dismiss="alert">&times;</button>
								<p>{$lang.confirm_dislike}</p>
								</div>
				
								<div id="pm-vc-playlists-content" class="hide">
								{if $logged_in}
													<h2 class="upper-blue">{$lang.my_playlists}</h2>
									<div id="playlist-ajax-response" class="hide"></div>
									{include file="video-watch-playlists.tpl"}
									<div id="playlist-create-ajax-response" class="hide"></div>
									
									<form class="form-inline pm-playlist-add-form">
										<input type="text" class="span8" name="playlist_name" placeholder="{$lang.playlist_enter_name}">
										<select name="visibility" class="span2">
											<option value="{$smarty.const.PLAYLIST_PUBLIC}">{$lang.public}</option>
											<option value="{$smarty.const.PLAYLIST_PRIVATE}">{$lang.private}</option>
										</select>
										<input type="hidden" name="video_id" value="{$video_data.id}" />
										<button type="submit" id="create_playlist_submit_btn" class="btn" onclick="playlist_create(this, 'video-watch'); return false;" disabled>{$lang.playlist_create_new}</button>
									</form>
											{else}
									<div class="alert alert-danger">
										{$lang.playlist_msg_login_required}
									</div>
								{/if}
								</div>  

								<div id="pm-vc-report-content" class="hide well well-small alert alert-well">
										<div id="report-confirmation" class="hide"></div>
										<form name="reportvideo" action="" method="POST" class="form-inline">
											<input type="hidden" id="name" name="name" class="input-small" value="{if $logged_in}{$s_name}{/if}">
											<input type="hidden" id="email" name="email" class="input-small" value="{if $logged_in}{$s_email}{/if}">
										
											<select name="reason" class="input-medium inp-small">
												<option value="{$lang.report_form1}" selected="selected">{$lang.report_form1}</option>
												<option value="{$lang.report_form4}">{$lang.report_form4}</option>
												<option value="{$lang.report_form5}">{$lang.report_form5}</option>
												<option value="{$lang.report_form6}">{$lang.report_form6}</option>
												<option value="{$lang.report_form7}">{$lang.report_form7}</option>
											</select>
											
											{if ! $logged_in}
												<input type="text" name="imagetext" class="input-small inp-small" autocomplete="off" placeholder="{$lang.confirm_comment}">
												<button class="btn btn-small btn-link" onclick="document.getElementById('securimage-report').src = '{$smarty.const._URL}/include/securimage_show.php?sid=' + Math.random(); return false;"><i class="icon-refresh"></i> </button>
												<img src="{$smarty.const._URL}/include/securimage_show.php?sid={echo_securimage_sid}" id="securimage-report" alt="" class="border-radius3">
											{/if}
											<button type="submit" name="Submit" class="btn btn-danger" value="{$lang.submit_send}">{$lang.report_video}</button>
											<input type="hidden" name="p" value="detail">
											<input type="hidden" name="do" value="report">
											<input type="hidden" name="vid" value="{$video_data.uniq_id}">
										</form>
								</div>
				
								<div id="pm-vc-share-content" class="well alert alert-well">
										<div class="row-fluid">
												<div class="span4 panel-1">
												<div class="input-prepend"><span class="add-on">URL</span><input name="video_link" id="video_link" type="text" value="{$video_data.video_href}" class="input-medium" onClick="SelectAll('video_link');"></div>
												</div>
												<div class="span5 panel-2">
												{if $video_data.allow_embedding == 1}
												<button class="btn border-radius0" type="button" id="pm-vc-embed">{$lang._embed}</button>
												{/if}
												<button class="btn border-radius0" type="button" data-toggle="button" id="pm-vc-email"><i class="icon-envelope"></i> {$lang.email_video}</button>
												</div>
												<div class="span3 panel-3">
												<a href="https://www.facebook.com/sharer.php?u={$facebook_like_href}&amp;t={$facebook_like_title}" onclick="javascript:window.open(this.href,
					'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on FaceBook"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/facebook-round.png"></a>
												<a href="https://twitter.com/home?status=Watching%20{$facebook_like_title}%20on%20{$facebook_like_href}" onclick="javascript:window.open(this.href,
					'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Twitter"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/twitter-round.png"></a>
												<a href="https://plus.google.com/share?url={$facebook_like_href}" onclick="javascript:window.open(this.href,
					'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Google+"><img
					src="{$smarty.const._URL}/templates/{$template_dir}/img/gplus-round.png" alt="" /></a>  
												</div>
										</div>
				
										{if $video_data.allow_embedding == 1}
										<div id="pm-vc-embed-content">
										<hr />
											<textarea name="pm-embed-code" id="pm-embed-code" rows="3" class="span12" onClick="SelectAll('pm-embed-code');">{$embedcode_to_share}</textarea>
										</div>
										{/if}
										<div id="pm-vc-email-content">
										<hr />
								<div id="share-confirmation" class="hide well well-small"></div>
												<form name="sharetofriend" action="" method="POST" class="form-inline">
													<input type="text" id="name" name="name" class="input-small inp-small" value="{$s_name}" placeholder="{$lang.your_name}">
													<input type="text" id="email" name="email" class="input-small inp-small" placeholder="{$lang.friends_email}">
													{if ! $logged_in}   
															<input type="text" name="imagetext" class="input-small inp-small" autocomplete="off" placeholder="{$lang.confirm_comment}">
															<button class="btn btn-small btn-link" onclick="document.getElementById('securimage-share').src = '{$smarty.const._URL}/include/securimage_show.php?sid=' + Math.random(); return false;"><i class="icon-refresh"></i> </button>
															<img src="{$smarty.const._URL}/include/securimage_show.php?sid={echo_securimage_sid}" id="securimage-share" alt="">
													{/if}
													<input type="hidden" name="p" value="detail">
													<input type="hidden" name="do" value="share">
													<input type="hidden" name="vid" value="{$video_data.uniq_id}">
													<button type="submit" name="Submit" class="btn btn-success">{$lang.submit_send}</button>
												</form>
										</div>
								</div><!-- #pm-vc-share-content -->
						</div><!--end pm-player-full-width -->
					</div>
				</div><!-- .span12 -->
				</div><!-- row-fluid -->
			</div>
		</div>
</div>

<div class="clearfix"></div>
	<div class="pm-wide-slider element-videos">
		<div class="slide-prev"><a id="pm-slide-tabr-prev"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/arr-b-left.png" /></a></div>
		<div class="container-fluid">
			<h2>{$lang.tab_related}</h2>
		</div>
		<div id="pm-slide"> 
		<ul class="pm-ul-top-videos pm-slide-top" id="pm-ul-tabr-videos">
		{foreach from=$related_video_list key=k item=related_video_data}
			<li>
				<div class="pm-li-video">
				<span class="pm-video-thumb pm-thumb-194 pm-thumb-top">
				<span class="pm-video-li-thumb-info">
				<span class="pm-label-duration border-radius3 opac7">{$related_video_data.duration}</span>
				{if $logged_in}
				<span class="watch-later hide">
					<button class="btn btn-mini watch-later-add-btn-{$related_video_data.id}" onclick="watch_later_add({$related_video_data.id}); return false;" rel="tooltip" title="{$lang.add_to} {$lang.watch_later}"><i class="icon-time"></i></button>
					<button class="btn btn-mini btn-remove hide watch-later-remove-btn-{$related_video_data.id}" onclick="watch_later_remove({$related_video_data.id}); return false;" rel="tooltip" title="{$lang.playlist_remove_item}"><i class="icon-ok"></i></button>
				</span>
				{/if}
				</span>
				<a href="{$related_video_data.video_href}" rel="fadeparty" class="pm-thumb-fix pm-thumb-194"><span class="pm-thumb-fix-clip"><img src="{$related_video_data.thumb_img_url}" alt="{$related_video_data.attr_alt}" width="194"><span class="vertical-align"></span></span></a>
				</span>
				<h3 class="alpha60" dir="ltr"><a href="{$related_video_data.video_href}" rel="fadeparty" class="pm-title-link">{$related_video_data.video_title}</a></h3>
				</div>
			</li>
		{foreachelse}
			{$lang.top_videos_msg2}
		{/foreach}
		</ul>
		</div>
		<div class="slide-next"><a id="pm-slide-tabr-next"> <img src="{$smarty.const._URL}/templates/{$template_dir}/img/arr-b-right.png" /></a></div>
		<div class="clearfix"></div>
	</div>

	<div class="pm-wide-slider element-videos">
		<div class="slide-prev"><a id="pm-slide-tabp-prev"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/arr-b-left.png" /></a></div>
		<div class="container-fluid">
			<h2>{$lang._popular}</h2>
		</div>
		<div id="pm-slide"> 
		<ul class="pm-ul-top-videos pm-slide-top" id="pm-ul-tabp-videos">
			{foreach from=$popular_video_list key=k item=popular_video_data}
				<li>
					<div class="pm-li-video">
					<span class="pm-video-thumb pm-thumb-194 pm-thumb-top">
					<span class="pm-video-li-thumb-info">
					<span class="pm-label-duration border-radius3 opac7">{$popular_video_data.duration}</span>
					{if $logged_in}
					<span class="watch-later hide">
						<button class="btn btn-mini watch-later-add-btn-{$popular_video_data.id}" onclick="watch_later_add({$popular_video_data.id}); return false;" rel="tooltip" title="{$lang.add_to} {$lang.watch_later}"><i class="icon-time"></i></button>
						<button class="btn btn-mini btn-remove hide watch-later-remove-btn-{$popular_video_data.id}" onclick="watch_later_remove({$popular_video_data.id}); return false;" rel="tooltip" title="{$lang.playlist_remove_item}"><i class="icon-ok"></i></button>
					</span>
					{/if}
					</span>
					<a href="{$popular_video_data.video_href}" rel="fadeparty" class="pm-thumb-fix pm-thumb-194"><span class="pm-thumb-fix-clip"><img src="{$popular_video_data.thumb_img_url}" alt="{$popular_video_data.attr_alt}" width="194"><span class="vertical-align"></span></span></a>
					</span>
					<h3 class="alpha60" dir="ltr"><a href="{$popular_video_data.video_href}" rel="fadeparty" class="pm-title-link">{$popular_video_data.video_title}</a></h3>
					</div>
				</li>
			{foreachelse}
				{$lang.top_videos_msg2}
			{/foreach}
		</ul>
		</div>
		<div class="slide-next"><a id="pm-slide-tabp-next"> <img src="{$smarty.const._URL}/templates/{$template_dir}/img/arr-b-right.png" /></a></div>
		<div class="clearfix"></div>
	</div>


		<div class="container-fluid">
	<div class="row-fluid">
				<div class="span12">
		<div id="primary">

						{if $ad_3 != ''}
						<div class="pm-ad-zone" align="center">{$ad_3}</div>
						{/if}

						
					<div id="pm-comment-box">
						<a id="view-comments"></a>
					{include file="comments.tpl" tpl_name="video-watch" allow_comments=$video_data.allow_comments}
					</div>
		</div>
		</div><!-- #primary -->
				</div>        

			</div><!-- .row-fluid -->
		</div><!-- .container-fluid -->
{include file="footer.tpl" p="detail" tpl_name="video-watch"} 