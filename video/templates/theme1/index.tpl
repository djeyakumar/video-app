{include file='header.tpl' p="index"} 
<div class="container new-con" style="position: relative;width: 1595px; background: #fff; box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2); padding-bottom: 0px; padding:0;">
    <div class="slider swiper-container" id="slider">
        <div class="swiper-wrapper">
            {foreach from=$recommended_movies key=k item=video_data}
            <div class="item swiper-slide" style="background-image: url({$video_data.yt_banner})">
                <div class="container">
					<div class="slide-caption">
                        <h2><a href="{$video_data.video_href}">{$video_data.video_title}</a></h2>
                        <p class="sc-desc">{$video_data.description}</p>
                        <div class="slide-caption-info">
                            <!-- <div class="block">
                                <strong>Genre:</strong>
                                <a href="javascript:;" title="Comedy Movies">Comedy</a>
                            </div> -->
                            <div class="block">
                                <strong>Duration:</strong> {$video_data.duration} min
                            </div>
                            <div class="block">
                                <strong>Release:</strong> {$video_data.video_year}
                            </div>
                            <div class="block"><strong>Views:</strong> {$video_data.yt_views}</div>
                        </div> 
					    <a href="{$video_data.video_href}" class="btn btn-success mt20"> Watch </a> 
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
                    <li><a href="#tn-notice" role="tab" data-toggle="tab">FAN PAGE</a>
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
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVideoone-1764015350594475%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=188010698357473" height="500" style="border:none;overflow:hidden; width:100%;" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                            <!-- <ul class="tn-news" style="overflow-y: scroll;">
                                {foreach from=$categories key=k item=category_data}
                                <li>
                                    <a href="{$category_data.url}" class="thumb news-thumb" style="background-image:url({$category_data.image_url});" alt="{$category_data.attr_alt}">
                                    </a>
                                    <div class="tnc-info">
                                        <h4>
                                            <a class="name" href="{$category_data.url}">{smarty_fewchars s=$category_data.name length=32}</a>
                                        </h4>
                                    </div>
                                    <div class="clearfix"></div>
                                </li>
                                {/foreach}
                            </ul> -->
                            <!-- <ul class="list-group">
                                {dropdown_menu_video_categories max_levels=0}
                            </ul> -->
                        </div>
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
            <h1>Watch Free Movies Online</h1> {$meta_title} - just a faster and better place for watching online movies for free.
        </div>

        <div class="widget hidden-lg hidden-md">
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
        
        <div class="widget suggestion">
            <div class="widget-title">
				<a class="more" href="topvideos.php">View more <i class="fa fa-caret-right"></i></a>
                <h2>Suggestion</h2> 
                <div class="tabs" data-target=".widget.suggestion .content">
                    <a class="tab active" data-name="views-feature">Featured Movies</a>
                    <a class="tab" data-name="views-today">Top view today</a>
                    <a class="tab" data-name="views-imdb">Top IMDB</a>
                </div>
            </div>
            <div class="widget-body">
                <div class="content active" data-name="views-feature">
                    <div class="row movie-list">
                    	{foreach from=$featured_movies key=k item=video_data}
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                            	{if $video_data.yt_length != 0}<div class="quality">{$video_data.duration}</div>{/if}
						    	{if $video_data.mark_new}<div class="quality">{$lang._new}</div>{/if}
						    	{if $video_data.mark_popular}<div class="status"><span>{$lang._popular}</span></div>{/if}
                            	<a class="poster" href="{$video_data.video_href}">
                                	<img src="{$video_data.thumb_img_url}" alt="{$video_data.attr_alt}">
                                </a>
                                <a class="name" href="{$video_data.video_href}">{$video_data.video_title}</a>
                            </div>
						    <p class="desc" rel="tooltip" title="{$video_data.excerpt}">{$video_data.excerpt}</p>
                        </div>
                        {foreachelse}
                            {$lang.top_videos_msg2}
                        {/foreach}
                    </div>
                </div>
                <div class="content hidden" data-name="views-today">
                    <div class="row movie-list">
                        {foreach from=$top_videos key=k item=video_data}
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                                {if $video_data.yt_length != 0}<div class="quality">{$video_data.duration}</div>{/if}
                                {if $video_data.mark_new}<div class="quality">{$lang._new}</div>{/if}
                                {if $video_data.mark_popular}<div class="status"><span>{$lang._popular}</span></div>{/if}
                                <a class="poster" href="{$video_data.video_href}">
                                    <img src="{$video_data.thumb_img_url}" alt="{$video_data.attr_alt}">
                                </a>
                                <a class="name" href="{$video_data.video_href}">{$video_data.video_title}</a>
                            </div>
                            <p class="desc" rel="tooltip" title="{$video_data.excerpt}">{$video_data.excerpt}</p>
                        </div>
                        {foreachelse}
                        {$lang.top_videos_msg2}
                        {/foreach}
                    </div>
                </div>
                <div class="content hidden" data-name="views-imdb">
                    <div class="row movie-list">
                        {foreach from=$topimdb key=k item=video_data}
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                                {if $video_data.rating}<div class="quality"><span>{$video_data.rating}</span></div>{/if}
                                <a class="poster" href="{$video_data.video_href}">
                                    <img src="{$video_data.img_url}">
                                </a>
                                <a class="name" href="#">{$video_data.video_title}</a>
                            </div>
                        </div>
                        {foreachelse}
                        {$lang.top_videos_msg2}
                        {/foreach}
                    </div>
                </div>
            </div>
        </div>

        <div class="widget">
            <div class="text-center" style="overflow:hidden">
                <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad1.jpg" alt="" class="img-responsive" />
            </div>
        </div>

        <div class="widget">
            <div class="widget-title">
                <a class="more" href="videotype.php?type=0">View more <i class="fa fa-caret-right"></i></a>
                <h2>Movies</h2>
            </div>
            <div class="widget-body">
                <div class="content">
                    <div class="row movie-list">
                        {foreach from=$movie_videos key=k item=video_data}
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                                {if $video_data.yt_length != 0}<div class="quality">{$video_data.duration}</div>{/if}
                                {if $video_data.mark_new}<div class="quality">{$lang._new}</div>{/if}
                                {if $video_data.mark_popular}<div class="status"><span>{$lang._popular}</span></div>{/if}
                                <a class="poster" href="{$video_data.video_href}">
                                    <img src="{$video_data.thumb_img_url}" alt="{$video_data.attr_alt}">
                                </a>
                                <a class="name" href="{$video_data.video_href}">{$video_data.video_title}</a>
                            </div>
                            <p class="desc" rel="tooltip" title="{$video_data.excerpt}">{$video_data.excerpt}</p>
                        </div>
                        {foreachelse}
                            {$lang.top_videos_msg2}
                        {/foreach}
                    </div>
                </div>
            </div>
        </div>

        <div class="widget">
            <div class="text-center" style="overflow:hidden">
                <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad_728x90_2.gif" alt="" class="img-responsive" />
            </div>
        </div>

        <div class="widget">
            <div class="widget-title">
                <a class="more" href="videotype.php?type=1">View more <i class="fa fa-caret-right"></i></a>
                <h2>TV Series</h2>
            </div>
            <div class="widget-body">
                <div class="content">
                    <div class="row movie-list">
                        {foreach from=$tv_videos key=k item=video_data}
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                                {if $video_data.yt_length != 0}<div class="quality">{$video_data.duration}</div>{/if}
                                {if $video_data.mark_new}<div class="quality">{$lang._new}</div>{/if}
                                {if $video_data.mark_popular}<div class="status"><span>{$lang._popular}</span></div>{/if}
                                <a class="poster" href="{$video_data.video_href}">
                                    <img src="{$video_data.thumb_img_url}" alt="{$video_data.attr_alt}">
                                </a>
                                <a class="name" href="{$video_data.video_href}">{$video_data.video_title}</a>
                            </div>
                            <p class="desc" rel="tooltip" title="{$video_data.excerpt}">{$video_data.excerpt}</p>
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