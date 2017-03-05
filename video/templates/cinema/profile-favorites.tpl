{include file='header.tpl' no_index='1' p="favorites"} 
<div id="wrapper" class="pm-wrapper-black">
  <div class="pm-page-bar">
      <div class="container-fluid">
        <div class="row-fluid">
          <div class="span6">
          	<h1>{$lang.my_favorites}</h1>
          </div>
          <div class="span6">
          {if $logged_in == '1'}
            <nav id="second-nav" class="tabbable" role="navigation">
                <ul class="nav nav-tabs pull-right">
                <li><a href="{$smarty.const._URL}/edit_profile.{$smarty.const._FEXT}">{$lang.edit_profile}</a></li>

                <li class="active"><a href="{$smarty.const._URL}/playlists.{$smarty.const._FEXT}">{$lang.my_playlists}</a></li>
                {if $smarty.const._ALLOW_USER_SUGGESTVIDEO == '1'}
                <li><a href="{$smarty.const._URL}/suggest.{$smarty.const._FEXT}">{$lang.suggest}</a></li>
                {/if}
                {if $smarty.const._ALLOW_USER_UPLOADVIDEO == '1'}
                <li><a href="{$smarty.const._URL}/upload.{$smarty.const._FEXT}">{$lang.upload_video}</a></li>
                {/if}
                <li><a href="{$smarty.const._URL}/memberlist.{$smarty.const._FEXT}">{$lang.members_list}</a></li>
				{if isset($mm_profilemenu_insert)}{$mm_profilemenu_insert}{/if}
                </ul>
            </nav><!-- #site-navigation -->
          {/if}
          </div>
          </div><!-- .row-fluid -->
      </div><!-- .container-fluid -->
  </div><!-- .pm-page-bar -->
  
    <div class="container-fluid">
      <div class="row-fluid">
      
        <div class="span12 extra-space">
		<div id="primary">
        
        <div class="row-fluid">
        	<div class="span8">
                {if $action == 'show'}
                    {include file="player.tpl" page="favorites"}
                {/if}
                
                {if $action == 'show'}
                    {if !empty($problem)}
                    {$problem}
                    {/if}
                {/if}
                
        
                {if $action == 'add' || $action == 'del'}
                    {if !empty($add_problem)}
                        {$add_problem}<br />
                        <a href="javascript:history.back()">{$lang.return_to_ppage}</a>
                    {/if}
                {/if}
            </div>
            <div class="span4">
                
                    <ul class="pm-ul-playlist-videos">
                    {foreach from=$favorite_videos_list key=k item=video_data name=favorite_foreach}
                      <li id="favorite-{$smarty.foreach.favorite_foreach.iteration}">
                        <div class="pm-li-video">
                            <span class="pm-video-thumb pm-thumb-106 pm-thumb border-radius2">
                            <span class="pm-video-li-thumb-info">
                            {if $video_data.yt_length != 0}<span class="pm-label-duration border-radius3 opac7">{$video_data.duration}</span>{/if}
                            {if $video_data.mark_new}<span class="label label-new">{$lang._new}</span>{/if}
                            {if $video_data.mark_popular}<span class="label label-pop">{$lang._popular}</span>{/if}
                            {if $logged_in}
                            <span class="watch-later hide">
                                <button class="btn btn-mini watch-later-add-btn-{$video_data.id}" onclick="watch_later_add({$video_data.id}); return false;" rel="tooltip" title="{$lang.add_to} {$lang.watch_later}"><i class="icon-time"></i></button>
                                <button class="btn btn-mini btn-remove hide watch-later-remove-btn-{$video_data.id}" onclick="watch_later_remove({$video_data.id}); return false;" rel="tooltip" title="{$lang.playlist_remove_item}"><i class="icon-ok"></i></button>
                            </span>
                            {/if}
                            </span>
                            <a href="{$video_data.video_href}" class="pm-thumb-fix pm-thumb-106" onClick="ajax_request('video', 'p=favorites&do=request&vid={$video_data.uniq_id}', '#embed_Playerholder', 'html', true);return false;"><span class="pm-thumb-fix-clip"><img src="{$video_data.thumb_img_url}" alt="{$video_data.attr_alt}" width="106"><span class="vertical-align"></span></span></a>
                            </span>
                            
                            <h3 dir="ltr"><a href="{$video_data.video_href}" onClick="ajax_request('video', 'p=favorites&do=request&vid={$video_data.uniq_id}', '#embed_Playerholder', 'html', true);return false;" class="pm-title-link" title="{$video_data.attr_alt}">{$video_data.video_title}</a></h3>
                            <div class="pm-video-attr">
                                <span class="pm-video-attr-author">{$lang.articles_by} <a href="{$video_data.author_profile_href}">{$video_data.author_name}</a></span>
                                <span class="pm-video-attr-since"><small>{$lang.added} <time datetime="{$video_data.html5_datetime}" title="{$video_data.full_datetime}">{$video_data.time_since_added} {$lang.ago}</time></small></span>
                                <span class="pm-video-attr-numbers">{if $video_data.likes_compact > 0}{$video_data.likes_compact} {$lang._likes}{/if}</small></span>
                            </div>
                            <p class="pm-video-attr-desc"></p>
                            
                            {if $video_data.featured}
                            <span class="pm-video-li-info">
                                <span class="label label-featured">{$lang._feat}</span>
                            </span>
                            {/if}
                            {if $self}
                            <span class="li-controlers">
                            <button class="btn-mini btn-remove border-radius3" onclick="onpage_delete_favorite('{$video_data.uniq_id}', '#favorite-{$smarty.foreach.favorite_foreach.iteration}'); return false;" rel="tooltip" title="{$lang.delete_from_fav}">x</button>
                            </span>
                            {/if}
                        </div>
                      </li>
                    {foreachelse}
                        {$lang.top_videos_msg2}
                    {/foreach}
                    </ul>
            </div>
        </div>
        
		<div class="element-videos">
        {if $share_link != ''}
        <h2>{$lang.myfavorites_share}</h2> 
        <div class="alert alert-well">
        <div class="row-fluid">
            <div class="span9 panel-1">
            <div class="input-prepend"><span class="add-on">URL</span><input name="video_link" id="video_link" type="text" value="{$share_link}" class="span10 inp-small" onClick="SelectAll('video_link');"> </div>
            </div>

            <div class="span3" align="right">
            <a href="https://www.facebook.com/sharer.php?u={$share_link}&amp;t={$meta_title}" onclick="javascript:window.open(this.href,
'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on FaceBook"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/facebook-round.png" alt=""></a>
            <a href="https://twitter.com/home?status=Watching%20{$meta_title}%20on%20{$share_link}" onclick="javascript:window.open(this.href,
'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Twitter"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/twitter-round.png"  alt=""></a>
            <a href="https://plus.google.com/share?url={$share_link}" onclick="javascript:window.open(this.href,
'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;" rel="tooltip" title="Share on Google+"><img
src="{$smarty.const._URL}/templates/{$template_dir}/img/gplus-round.png" alt=""></a>
            </div>
        </div>
        </div>
        {/if}
        </div>
		</div><!-- #primary -->
    </div><!-- #content -->
  </div><!-- .row-fluid -->

</div><!-- .container-fluid -->     
        
{include file='footer.tpl'} 