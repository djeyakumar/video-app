{include file='header.tpl' p="index"} 
    <div class="slider swiper-container">
        <div class="swiper-wrapper">
            {foreach from=$top_videos key=k item=video_data}
            <div class="item swiper-slide" style="background-image: url({$smarty.const._URL}/templates/{$template_dir}/{$video_data.yt_banner})">
                <div class="container">
                    <div class="inner"><a href="{$video_data.video_href}" class="name">{$video_data.video_title}</a> 
                        {if $video_data.yt_length != 0}
                        <div class="meta"><span class="quality">{$video_data.duration}</span></div>
                        {/if}
                        <span class="category">{$video_data.views_compact}<a href="{$video_data.video_href}"> {$lang.views}</a></span> 
                        <p class="desc">{$video_data.description}</p>
                    </div>
                </div>
            </div>
            {/foreach}
        </div>
        <div class="paging">
            <div class="container">
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
    <div class="banner-right">
        <div id="top-news">
            <div class="top-news">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="active"><a href="#tn-news" role="tab" data-toggle="tab">{$lang.top_m_videos}</a>
                    </li>
                    <li><a href="#tn-notice" role="tab" data-toggle="tab">{$lang._categories}</a>
                    </li>
                </ul>
                <div class="top-news-content">
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane in fade active" id="tn-news">
                            <ul class="tn-news" style="overflow-y: scroll;">
                                {foreach from=$top_videos key=k item=video_data}
                                <li>
                                    <a href="{$video_data.video_href}" class="thumb news-thumb" style="background-image:url({$video_data.thumb_img_url});">
                                        {if $video_data.yt_length != 0}
                                        <span class="pull-right"><span class="label label-default">{$video_data.duration}</span></span>
                                        {/if}
                                    </a>
                                    <div class="tnc-info">
                                        <h4>
                                            <a href="{$video_data.video_href}">{$video_data.video_title}</a>
                                        </h4>
                                        <span>{$video_data.views_compact} {$lang.views}</span>
                                    </div>
                                    <div class="clearfix"></div>
                                </li>
                                {/foreach}
                            </ul>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="tn-notice">
                            <ul class="list-group">
                                {dropdown_menu_video_categories max_levels=0}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="body-wrapper">
    <div class="container container-custom">
        <div class="alert alert-primary notice">
            <h1>Watch Free Movies Online</h1> {$meta_title} - just a faster and better place for watching online movies for free.</div>
        <div class="widget hidden-lg hidden-md">
            <div class="widget-title"><span>Sponsored News</span>
            </div>
            <div class="widget-body text-center">
                <div style="min-height:250px;">
                    <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad_728x90.gif" alt="" class="img-responsive" />
                </div>
            </div>
        </div>
        <div class="widget">
            <div class="text-center" style="overflow:hidden">
                <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad_728x90.gif" alt="" class="img-responsive" />
            </div>
        </div>
        <div class="widget recommend">
            <div class="widget-title">
                <h2>{$lang.new_videos}</h2>
            </div>
            <div class="widget-title">
                <h2>Suggestions</h2> 
                <div class="tabs" data-target=".widget.recommend .content"> <a class="tab active" data-name="recommend">Recommended</a>  <a class="tab" data-name="views-week">Most Watched This Week</a>  <a class="tab" data-name="views-month">Most Watched This Month</a>  <a class="tab" data-name="most-favorited">Most Favorited</a> 
                </div>
            </div>
            <div class="widget-body">
                <div class="content" data-name="recommend">
                    <div class="row movie-list">
                    	{foreach from=$new_videos key=k item=video_data}
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
{include file='footer.tpl' p="index"}