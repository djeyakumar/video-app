{include file="header.tpl" p="general" tpl_name="video-new"}
<div id="wrapper">
    <div class="pm-page-bar">
        <div class="container-fluid">
          <div class="row-fluid">
            <div class="span10">
            <h1 class="entry-title compact">{$lang.recently_added}</h1>
            </div>
            <div class="span2">
            <div class="btn-group btn-group-sort pull-right opac7">
                <form class="form-inline li-dropdown-inside opac7">
                <select name="categories" class="inp-small" size="1" onChange="javascript:document.location=this.value;">
                <option value="" selected="selected">{$lang.select}</option>
                <option value="{$smarty.const._URL}/newvideos.{$smarty.const._FEXT}">{$lang.any_time}</option>
                <option value="{$smarty.const._URL}/newvideos.{$smarty.const._FEXT}?d=today">{$lang.today}</option>
                <option value="{$smarty.const._URL}/newvideos.{$smarty.const._FEXT}?d=yesterday">{$lang.yesterday}</option>
                <option value="{$smarty.const._URL}/newvideos.{$smarty.const._FEXT}?d=month">{$lang.this_month}</option>
                </select>
                </form>
            </div>
            </div>
            
            </div><!-- .row-fluid -->
        </div><!-- .container-fluid -->
    </div><!-- .pm-page-bar -->
    
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12">
        <div id="primary">
        
        <ul class="pm-ul-browse-videos thumbnails" id="pm-grid">
        {foreach from=$results key=k item=video_data}
          <li>
            <div class="pm-li-video">
                <span class="pm-video-thumb pm-thumb-194 pm-thumb">
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
                
                <a href="{$video_data.video_href}" class="pm-thumb-fix pm-thumb-194"><span class="pm-thumb-fix-clip"><img src="{$video_data.thumb_img_url}" alt="{$video_data.attr_alt}" width="194"><span class="vertical-align"></span></span></a>
                </span>
                
                <h3 class="alpha60" dir="ltr"><a href="{$video_data.video_href}" class="pm-title-link" title="{$video_data.attr_alt}">{$video_data.video_title}</a></h3>
                <div class="pm-video-attr">
                    <span class="pm-video-attr-author">{$lang.articles_by} <a href="{$video_data.author_profile_href}">{$video_data.author_name}</a></span>
                    <span class="pm-video-attr-since"><small>{$lang.added} <time datetime="{$video_data.html5_datetime}" title="{$video_data.full_datetime}">{$video_data.time_since_added} {$lang.ago}</time></small></span>
                    <span class="pm-video-attr-numbers"><small>{if $video_data.likes_compact > 0}{$video_data.likes_compact} {$lang._likes}{/if}</small></span>
                </div>
                <p class="pm-video-attr-desc">{$video_data.excerpt}</p>
                
                {if $video_data.featured}
                <span class="pm-video-li-info">
                    <span class="label label-featured">{$lang._feat}</span>
                </span>
                {/if}
            </div>
          </li>
                
        {foreachelse}
            {$lang.top_videos_msg2}
        {/foreach}
        </ul>
        
        {if $empty_results}
            <p class="alert">{$lang.nv_page_sorry_msg}</p>
        {/if}
        
        <div class="clearfix"></div>
        {if is_array($pagination)}
        <div class="pagination pagination-centered">
            <ul>
                {foreach from=$pagination key=k item=pagination_data}
                <li{foreach from=$pagination_data.li key=attr item=attr_val} {$attr}="{$attr_val}"{/foreach}>
                    <a{foreach from=$pagination_data.a key=attr item=attr_val} {$attr}="{$attr_val}"{/foreach}>{$pagination_data.text}</a>
                </li>
                {/foreach}
            </ul>
        </div>
        {/if}
		</div><!-- #primary -->
        </div><!-- #content -->
      </div><!-- .row-fluid -->
    </div><!-- .container-fluid -->
{include file="footer.tpl" tpl_name="video-new"}