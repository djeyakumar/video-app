<link href="{$smarty.const._URL}/templates/{$template_dir}/css/new-style.css" rel="stylesheet">
{include file="header.tpl" p="detail" tpl_name="video-watch"}
{if $show_addthis_widget == '1'}
{include file='widget-socialite.tpl'}
{/if}

<div id="body-wrapper">
	<div class="container" id="movie">
		<ol class="breadcrumb">
			<li class="active"><h3><span itemprop="name">{$video_data.video_title}</span></h3> 
			</li>
		</ol>

		<div class="widget hidden-lg hidden-md"></div>

		<div class="mt widget">
			<div class="widget">
				<div class="text-center" style="overflow:hidden">
					<img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad_728x90.gif" alt="" class="img-responsive" />
				</div>
			</div>
		</div>

		<div class="widget">
		
			<div id="hide-vid">
				<div class="row">
					<div class="col-xs-24">
					    <div id="primary" itemprop="video" itemscope itemtype="http://schema.org/VideoObject" style="height: auto;">
			                <div class="pm-player-full-width">
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
			                                <button class="btn btn-blue hide" id="preroll_skip_btn">{$lang.preroll_ads_skip}</button>
			                            </div>
			                            {/if}
			                            {if $preroll_ad_data.disable_stats == 0}
			                            <img src="{$smarty.const._URL}/ajax.php?p=stats&do=show&aid={$preroll_ad_data.id}&at={$smarty.const._AD_TYPE_PREROLL}" width="1" height="1" border="0" />
			                            {/if}
			                        </div>
			                        {else}
			                        {include file="player.tpl" page="detail"}
			                        {/if}
			                    </div>
			                </div>
					        <div class="well">
			                    <div class="row">
			                        <div class="col-xs-12">
			                            <button class="btn btn-small {if $bin_rating_vote_value == 1}active{/if}" id="bin-rating-like" type="button"><i class="fa fa-thumbs-up"></i> {$lang._like}</button>
			                            <button class="btn btn-small {if $bin_rating_vote_value == 0 && $bin_rating_vote_value !== false}active{/if}" id="bin-rating-dislike" type="button"><i class="fa fa-thumbs-down"></i></button>
			                        </div>
			                        <div class="col-xs-12">
			                            <div class="pull-right">
			                                <button class="btn btn-small" type="button" data-toggle="button" id="pm-vc-share"><i class="fa fa-share-alt"></i> {$lang._share}</button>
			                                <input type="hidden" name="bin-rating-uniq_id" value="{$video_data.uniq_id}">
			                                {if $logged_in}
			                                <button class="btn btn-small" type="button" data-toggle="button" id="pm-vc-playlists" data-video-id="{$video_data.id}" title="{$lang.add_to_playlist}"><i class="fa fa-plus"></i> {$lang.add_to}</button>
			                                {/if}
			                                <button class="btn btn-small" type="button" data-toggle="button" id="pm-vc-report" rel="tooltip" data-placement="right" title="{$lang.report_video}"><i class="fa fa-flag"></i></button>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="row">
									<div class="col-xs-24">
										<div id="bin-rating-response" class="hide well well-small"></div>
						                <div id="bin-rating-like-confirmation" class="hide well well-small alert alert-well">
						                    <button type="button" class="close" data-dismiss="alert">&times;</button>
						                    <p>{$lang.confirm_like}</p>
						                    <div class="row">
						                        <div class="col-xs-3">
						                            <a href="https://www.facebook.com/sharer.php?u={$facebook_like_href}&amp;t={$facebook_like_title}" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on FaceBook"><i class="pm-vc-sprite facebook-icon"></i></a>
						                            <a href="https://twitter.com/home?status=Watching%20{$facebook_like_title}%20on%20{$facebook_like_href}" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Twitter"><i class="pm-vc-sprite twitter-icon"></i></a>
						                            <a href="https://plus.google.com/share?url={$facebook_like_href}" onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Google+"><i class="pm-vc-sprite google-icon"></i></a>
						                        </div>
						                        <div class="col-xs-9">
						                        	<div class="input-group">
														<span class="input-group-addon">URL</span>
														<input type="text" class="form-control" name="share_video_link" id="share_video_link" type="text" value="{$video_data.video_href_urldecoded}" class="span11" onClick="SelectAll('share_video_link');">
													</div>
						                        </div>
						                    </div>
						                </div>
						                <div id="bin-rating-dislike-confirmation" class="hide-dislike hide well well-small">
						                    <button type="button" class="close" data-dismiss="alert">&times;</button>
						                    <p>{$lang.confirm_dislike}</p>
						                </div>
						                <!--#bin-rating-like-confirmation-->
						                <div id="pm-vc-playlists-content" class="hide">
						                    {if $logged_in}
						                    <h2 class="upper-blue">{$lang.my_playlists}</h2>
						                    <div id="playlist-ajax-response" class="hide"></div>
						                    {include file="video-watch-playlists.tpl"}
						                    <div id="playlist-create-ajax-response" class="hide"></div>
						                    <form class="form-inline pm-playlist-add-form">
						                        <input type="text" class="col-xs-14" name="playlist_name" placeholder="{$lang.playlist_enter_name}">
						                        <select name="visibility" class="col-xs-6">
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
						                        <input type="hidden" id="name" name="name" class="form-control" value="{if $logged_in}{$s_name}{/if}">
						                        <input type="hidden" id="email" name="email" class="form-control" value="{if $logged_in}{$s_email}{/if}">
						                        <select name="reason" class="input-medium inp-small">
						                            <option value="{$lang.report_form1}" selected="selected">{$lang.report_form1}</option>
						                            <option value="{$lang.report_form4}">{$lang.report_form4}</option>
						                            <option value="{$lang.report_form5}">{$lang.report_form5}</option>
						                            <option value="{$lang.report_form6}">{$lang.report_form6}</option>
						                            <option value="{$lang.report_form7}">{$lang.report_form7}</option>
						                        </select>
						                        {if ! $logged_in}
						                        <input type="text" name="imagetext" class="form-control inp-small" autocomplete="off" placeholder="{$lang.confirm_comment}">
						                        <button class="btn btn-small btn-link" onclick="document.getElementById('securimage-report').src = '{$smarty.const._URL}/include/securimage_show.php?sid=' + Math.random(); return false;"><i class="icon-refresh"></i> </button>
						                        <img src="{$smarty.const._URL}/include/securimage_show.php?sid={echo_securimage_sid}" id="securimage-report" alt="" class="border-radius3">
						                        {/if}
						                        <button type="submit" name="Submit" class="btn btn-danger" value="{$lang.submit_send}">{$lang.report_video}</button>
						                        <input type="hidden" name="p" value="detail">
						                        <input type="hidden" name="do" value="report">
						                        <input type="hidden" name="vid" value="{$video_data.uniq_id}">
						                    </form>
						                </div>
						                <!-- #pm-vc-report-content-->
						                <div id="pm-vc-share-content" class="well">
						                    <div class="row">
						                        <div class="col-xs-8">
						                        	<div class="input-group">
														<span class="input-group-addon">URL</span>
														<input type="text" class="form-control" name="video_link" id="video_link" type="text" value="{$video_data.video_href_urldecoded}" class="input-medium" onClick="SelectAll('video_link');">
													</div>
						                        </div>
						                        <div class="col-xs-8">
						                            {if $video_data.allow_embedding == 1}
						                            <button class="btn border-radius0 btn-video" type="button" id="pm-vc-embed">{$lang._embed}</button>
						                            {/if}
						                            <button class="btn border-radius0 btn-video" type="button" data-toggle="button" id="pm-vc-email"><i class="icon-envelope"></i> {$lang.email_video}</button>
						                        </div>
						                        <div class="col-xs-8">
						                            <a class="btn btn-social-icon btn-facebook" href="https://www.facebook.com/sharer.php?u={$facebook_like_href}&amp;t={$facebook_like_title}" onclick="javascript:window.open(this.href,
						                                '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on FaceBook"><i class="fa fa-facebook"></i></a>
						                            <a class="btn btn-social-icon btn-twitter" href="https://twitter.com/home?status=Watching%20{$facebook_like_title}%20on%20{$facebook_like_href}" onclick="javascript:window.open(this.href,
						                                '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Twitter"><i class="fa fa-twitter"></i></a>
						                            <a class="btn btn-social-icon btn-google" href="https://plus.google.com/share?url={$facebook_like_href}" onclick="javascript:window.open(this.href,
						                                '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Google+"><i class="fa fa-google-plus"></i></a>  
						                        </div>
						                    </div>
						                    {if $video_data.allow_embedding == 1}
						                    <div class="row">
						                        <div class="col-xs-24">
								                    <div id="pm-vc-embed-content">
								                        <hr />
								                        <textarea name="pm-embed-code" id="pm-embed-code" rows="3" class="col-xs-12" onClick="SelectAll('pm-embed-code');">{$embedcode_to_share}</textarea>
								                    </div>
								                    {/if}
								                    <div id="pm-vc-email-content">
								                        <hr />
								                        <div id="share-confirmation" class="hide well well-small"></div>
								                        <form name="sharetofriend" action="" method="POST" class="form-inline">
								                            <input type="text" id="name" name="name" class="form-control inp-small" value="{$s_name}" placeholder="{$lang.your_name}">
								                            <input type="text" id="email" name="email" class="form-control inp-small" placeholder="{$lang.friends_email}">
								                            {if ! $logged_in}   
								                            <input type="text" name="imagetext" class="form-control inp-small" autocomplete="off" placeholder="{$lang.confirm_comment}">
								                            <button class="btn btn-small btn-link" onclick="document.getElementById('securimage-share').src = '{$smarty.const._URL}/include/securimage_show.php?sid=' + Math.random(); return false;"><i class="icon-refresh"></i> </button>
								                            <img src="{$smarty.const._URL}/include/securimage_show.php?sid={echo_securimage_sid}" id="securimage-share" alt="">
								                            {/if}
								                            <input type="hidden" name="p" value="detail">
								                            <input type="hidden" name="do" value="share">
								                            <input type="hidden" name="vid" value="{$video_data.uniq_id}">
								                            <button type="submit" name="Submit" class="btn btn-success">{$lang.submit_send}</button>
								                        </form>
								                    </div>
								                </div>
								            </div>
						                </div>
						                <!-- #pm-vc-share-content -->
									</div>
								</div>
			                </div>
					    </div>
					    <!-- #primary -->
					</div>
				</div>
			</div>

			<div id="show-vid">
			</div>
			
			<div class="mt row">
				<div class="pull-right col-md-7 col-xs-24">
					<div class="row hd-buttons">
						<div class="col-md-24">
							<a class="full btn btn-lg btn-primary" href="javascript:;" rel="nofollow" target="_blank"> <i class="fa fa-play-circle"></i> Stream in HD</a>
							
							<div class="mgbox">
								<div class="mgline type-w" style="position: relative;">
									<div class="image-with-text">
										<div class="mcimg">
											<a target="_blank" href="" rel="nofollow">
												<div class="image-container">
													<img class="mcimg" width="492" height="328" src="{$smarty.const._URL}/templates/{$template_dir}/images/2099014_492x328.jpg">
												</div>
											</a>
										</div>
										<div class="text-elements">
											<div class="text_on_hover">
												<div class="mctitle"><a target="_blank" href="" rel="nofollow">Hyderabad Guy Loses 15 Kg In 2 Weeks With This 1 Simple Method!</a>
												</div>
												<div class="fake"></div>
												<div class="mgtobottom"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="mgline type-w" style="position: relative;">
									<div class="image-with-text">
										<div class="mcimg">
											<a target="_blank" href="" rel="nofollow">
												<div class="image-container">
													<img class="mcimg" width="492" height="328" src="{$smarty.const._URL}/templates/{$template_dir}/images/2125628_492x328.jpg">
												</div>
											</a>
										</div>
										<div class="text-elements">
											<div class="text_on_hover">
												<div class="mctitle"><a target="_blank" href="" rel="nofollow">She Will Love You More After You Do This In Bed</a>
												</div>
												<div class="fake"></div>
												<div class="mgtobottom"></div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
					
				</div>
				<div class="col-left col-md-17 col-xs-24">
					<div class="alert alert-primary notice"> 
						<i class="fa fa-hand-o-right"></i> Lorem ipsum is simply dummy text of the printing and typesetting industry.
					</div>
					<div id="servers">
						<div class="server row">
							<label class="name col-md-4 col-sm-5"> <i class="fa fa-server"></i> Server F2</label>
							<div class="col-md-20 col-sm-19">
								<ul class="episodes range active">
									<li> <a class="active" href="javascript:;">01</a> 
									</li>
								</ul>
							</div>
						</div>
						<div class="server row">
							<label class="name col-md-4 col-sm-5"> <i class="fa fa-server"></i> Server F1</label>
							<div class="col-md-20 col-sm-19">
								<ul class="episodes range active">
									<li> <a href="javascript:;">01</a> 
									</li>
								</ul>
							</div>
						</div>
						<div class="server row">
							<label class="name col-md-4 col-sm-5"> <i class="fa fa-server"></i> OpenLoad</label>
							<div class="col-md-20 col-sm-19">
								<ul class="episodes range active">
									<li> <a href="javascript:;">01</a> 
									</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div id="info" class="mt">
						<div class="row">
							<div class="thumb col-md-6 hidden-sm hidden-xs">
								<img src="{$video_data.thumb_img_url}" alt="{$video_data.attr_alt}">
							</div>
							<div class="info col-md-18">
								<div>
									 {if $logged_in && $is_admin == 'yes' && ! $video_data.in_trash}
		                            <div class="btn-action-group pull-right">
		                                <a href="#" onclick="return confirm_action(pm_lang.delete_video_confirmation, '{$smarty.const._URL}/{$smarty.const._ADMIN_FOLDER}/modify.php?vid={$video_data.uniq_id}&a=3'); return false;" rel="tooltip" class="btn btn-mini btn-danger" title="{$lang.trash} ({$lang._admin_only})" target="_blank">{$lang.trash}</a> <a href="{$smarty.const._URL}/{$smarty.const._ADMIN_FOLDER}/modify.php?vid={$video_data.uniq_id}" rel="tooltip" class="btn btn-mini" title="{$lang.edit} ({$lang._admin_only})" target="_blank">{$lang.edit}</a>
		                            </div>
		                            {/if}
									<h1 class="name">{$video_data.video_title}</h1> 
									{if $video_data.featured == 1}
	                                	<span class="label label-warning">{$lang.featured}</span>
	                                {/if}
									<div class="mt-md addthis_native_toolbox"></div>
									<div class="desc">
										{$video_data.description}
									</div>
									<div class="row">
										<dl class="meta col-sm-12"> <dt>Genre:</dt> 
											<dd> <a href="javascript:;" title="Thriller movies">Thriller</a>, <a href="javascript:;" title="Action movies">Action</a> 
											</dd> <dt>Stars:</dt> 
											<dd> <a href="javascript:;" title="Clive Standen's movies">Clive Standen</a>, <a href="javascript:;" title="James Landry Hébert's movies">James Landry Hébert</a>, <a href="" title="Simu Liu's movies">Simu Liu</a>, <a href="javascript:;" title="Jennifer Marsala's movies">Jennifer Marsala</a> 
											</dd> <dt>Director:</dt> 
											<dd>Luc Besson,Alexander Cary</dd><dt>Country:</dt> 
											<dd> <a href="javascript:;" title="United States movies">United States</a>, <a href="javascript:;" title="France movies">France</a> 
											</dd>
										</dl>
										<dl class="meta col-sm-12"> <dt>Rating:</dt> 
											<dd class="rating"> <span>8.4</span> / <span>7</span> times</dd> <dt>Release:</dt> 
											<dd>2017-02-27</dd> <dt>Quality:</dt> 
											<dd><span class="quality">HD 720p</span>
											</dd>
										</dl>
									</div>
								</div>
								<div class="row pm-author-data">
				                    <div class="col-xs-4">
				                        <span class="pm-avatar">
				                        <a href="{$video_data.author_profile_href}"><img src="{$video_data.author_avatar_url}" height="50" width="50" alt="" class="img-polaroid" border="0"></a>
				                        {if $video_data.author_data.channel_verified == 1 && $smarty.const._MOD_SOCIAL}<a href="#" rel="tooltip" title="{$lang.verified_channel}" class="pm-verified-user"><img src="{$smarty.const._URL}/templates/{$smarty.const._TPLFOLDER}/img/ico-verified.png" /></a>{/if}
				                        </span>
				                    </div>
				                    <div class="col-xs-14">
				                        <div class="pm-submit-data">{$lang.added} <time datetime="{$video_data.html5_datetime}" title="{$video_data.full_datetime}">{$video_data.time_since_added} {$lang.ago}</time> {$lang._by} <a href="{$video_data.author_profile_href}">{$video_data.author_name}</a> {$lang._in} {$category_name}</div>
				                        <div class="clearfix"></div>
				                        {if $smarty.const._MOD_SOCIAL && $logged_in == '1' && $video_data.author_user_id != $s_user_id}
				                        {include file="user-subscribe-button.tpl" profile_data=$video_data profile_user_id=$video_data.author_user_id}
				                        {/if}
				                    </div>
				                </div>
							</div>
						</div>
						<div class="row">
		                	<div class="col-xs-24">
		                		{include file="comments.tpl" tpl_name="video-watch" allow_comments=$video_data.allow_comments}
		                	</div>
		                </div>
					</div>
					<div id="tags">
						<label>Keywords:</label> <a href="javascript:;" rel="tag">taken</a> 
					</div>
				</div>
			</div>
			
			<div class="widget">
				<div class="widget-title"> <span>{$lang.tab_related}</span> 
				</div>
				<div class="widget-body">
					<div class="row movie-list">
						{foreach from=$related_video_list key=k item=related_video_data}
	                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-8 col-xs-12">
	                        <div class="item">
	                        	{if $related_video_data.yt_length != 0}<div class="quality">{$related_video_data.duration}</div>{/if}
						    	{if $related_video_data.mark_new}<div class="quality">{$lang._new}</div>{/if}
						    	{if $related_video_data.mark_popular}<div class="status"><span>{$lang._popular}</span></div>{/if}
	                        	<a class="poster" href="{$related_video_data.video_href}">
	                            	<img src="{$related_video_data.thumb_img_url}" alt="{$related_video_data.attr_alt}">
	                            </a>
	                            <a class="name" href="{$related_video_data.video_href}">{$related_video_data.video_title}</a>
	                        </div>
	                        <span class="pm-video-attr-author">{$lang.articles_by} <a href="{$related_video_data.author_profile_href}">{$related_video_data.author_name}</a></span>
	                        <span><small>{$lang.added} <time datetime="{$related_video_data.html5_datetime}" title="{$related_video_data.full_datetime}">{$related_video_data.time_since_added} {$lang.ago}</time></small></span>
						    <span><small>{$related_video_data.views_compact} {$lang.views} / {$related_video_data.likes_compact} {$lang._likes}</small></span>
						    <p class="desc" rel="tooltip" title="{$related_video_data.excerpt}">{$related_video_data.excerpt}</p>
						    {if $related_video_data.featured}
						    <span class="pm-video-li-info">
						    <span class="label label-featured">{$lang._feat}</span>
						    </span>
						    {/if}
	                    </div>
	                    {foreachelse}
	                    {$lang.top_videos_msg2}
	                    {/foreach}
					</div>
				</div>
			</div>

			<div class="widget">
				<div class="widget-title"> <span>{$lang._popular}</span> 
				</div>
				<div class="widget-body">
					<div class="row movie-list">
						{foreach from=$related_video_list key=k item=video_data}
	                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-8 col-xs-12">
	                        <div class="item">
	                        	{if $video_data.yt_length != 0}<div class="quality">{$video_data.duration}</div>{/if}
						    	{if $video_data.mark_new}<div class="quality">{$lang._new}</div>{/if}
						    	{if $video_data.mark_popular}<div class="status"><span>{$lang._popular}</span></div>{/if}
	                        	<a class="poster" href="{$video_data.video_href}">
	                            	<img src="{$video_data.thumb_img_url}" alt="{$video_data.attr_alt}">
	                            </a>
	                            <a class="name" href="{$video_data.video_href}">{$video_data.video_title}</a>
	                        </div>
	                        <span class="pm-video-attr-author">{$lang.articles_by} <a href="{$video_data.author_profile_href}">{$video_data.author_name}</a></span>
	                        <span><small>{$lang.added} <time datetime="{$video_data.html5_datetime}" title="{$video_data.full_datetime}">{$video_data.time_since_added} {$lang.ago}</time></small></span>
						    <span><small>{$video_data.views_compact} {$lang.views} / {$video_data.likes_compact} {$lang._likes}</small></span>
						    <p class="desc" rel="tooltip" title="{$video_data.excerpt}">{$video_data.excerpt}</p>
						    {if $video_data.featured}
						    <span class="pm-video-li-info">
						    <span class="label label-featured">{$lang._feat}</span>
						    </span>
						    {/if}
	                    </div>
	                    {foreachelse}
	                    {$lang.top_videos_msg2}
	                    {/foreach}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{include file='footer.tpl' p="video-watch"}