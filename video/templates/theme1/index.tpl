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
<div id="body-wrapper">
    <div class="container container-custom">
        <div class="home-socials">
            <div> <span class="text">Like and share our website to support us.</span> 
            </div>
            <!-- change social plugin-->
            <div style="float:left;" class="hidden-xs fb-like fb_iframe_widget"><span style="vertical-align: bottom; width: 73px; height: 20px;"><iframe name="f15c6eb22aad4ac" width="1000px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:like Facebook Social Plugin" src="https://www.facebook.com/v2.7/plugins/like.php?action=like&amp;app_id=1262034157158608&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fao6eUeuGXQq.js%3Fversion%3D42%23cb%3Df64176090945e8%26domain%3Dfmovies.se%26origin%3Dhttps%253A%252F%252Ffmovies.se%252Ff24e4efd7310ab4%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Ffacebook.com%2Ffmoviesdotto&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=true" style="border: none; visibility: visible; width: 73px; height: 20px;" class=""></iframe></span>
            </div>
            <div style="float: left;" class="addthis_native_toolbox" data-url="javascript:;" data-title="Watch Online Movies Free - Free Movies | FMovies" data-description="Free Movies. Watch Movies Online free, in high quality. You also can download any movie and series without registration. Watch latest movies in HD for free, free movies streaming now. watch online movies">
                <div id="atstbx" class="at-share-tbx-element at-share-tbx-native addthis_default_style addthis_20x20_style addthis-smartlayers addthis-animated at4-show">
                    <a class="addthis_button_facebook_share at_native_button at300b" fb:share:layout="button_count">
                        <div class="fb-share-button fb_iframe_widget" data-layout="button_count" data-href="javascript:;" style="height: 25px;" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=1262034157158608&amp;container_width=85&amp;href=https%3A%2F%2Ffmovies.se%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey"><span style="vertical-align: bottom; width: 84px; height: 20px;"><iframe name="f30be2daacb4b58" width="1000px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:share_button Facebook Social Plugin" src="https://www.facebook.com/v2.7/plugins/share_button.php?app_id=1262034157158608&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fao6eUeuGXQq.js%3Fversion%3D42%23cb%3Df1467a6da77f5a%26domain%3Dfmovies.se%26origin%3Dhttps%253A%252F%252Ffmovies.se%252Ff24e4efd7310ab4%26relation%3Dparent.parent&amp;container_width=85&amp;href=https%3A%2F%2Ffmovies.se%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey" style="border: none; visibility: visible; width: 84px; height: 20px;" class=""></iframe></span>
                        </div>
                    </a>
                    <a class="addthis_button_facebook_send at_native_button at300b">
                        <div class="fb-send fb_iframe_widget" data-href="javascript:;" data-type="box_count" style="height: 25px;" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=1262034157158608&amp;container_width=54&amp;href=https%3A%2F%2Ffmovies.se%2F&amp;locale=en_US&amp;sdk=joey"><span style="vertical-align: bottom; width: 54px; height: 20px;"><iframe name="f173ea997f8d684" width="1000px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:send Facebook Social Plugin" src="https://www.facebook.com/v2.7/plugins/send.php?app_id=1262034157158608&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fao6eUeuGXQq.js%3Fversion%3D42%23cb%3Df3c4c63bec2d774%26domain%3Dfmovies.se%26origin%3Dhttps%253A%252F%252Ffmovies.se%252Ff24e4efd7310ab4%26relation%3Dparent.parent&amp;container_width=54&amp;href=https%3A%2F%2Ffmovies.se%2F&amp;locale=en_US&amp;sdk=joey" style="border: none; visibility: visible; width: 54px; height: 20px;" class=""></iframe></span>
                        </div>
                    </a>
                    <a class="addthis_button_tweet at_native_button at300b">
                        <div class="tweet_iframe_widget" style="width: 62px; height: 25px;"><span><iframe id="twitter-widget-2" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.a0ec3119d8db2bc5422f2144c89ad7a9.en.html#dnt=false&amp;id=twitter-widget-2&amp;lang=en&amp;original_referer=https%3A%2F%2Ffmovies.se%2F&amp;size=m&amp;text=Watch%20Online%20Movies%20Free%20-%20Free%20Movies%20%7C%20FMovies%3A&amp;time=1488111664373&amp;type=share&amp;url=https%3A%2F%2Ffmovies.se%2F%23.WLLILSThVW0.twitter" style="position: static; visibility: visible; width: 60px; height: 20px;" data-url="javascript:;#.WLLILSThVW0.twitter"></iframe></span>
                        </div>
                    </a>
                    <a class="addthis_button_google_plusone at_native_button at300b" g:plusone:size="medium">
                        <div class="google_plusone_iframe_widget" style="width: 90px; height: 25px;"><span><div id="___plusone_0" style="text-indent: 0px; margin: 0px; padding: 0px; background: transparent; border-style: none; float: none; line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 90px; height: 20px;"><iframe ng-non-bindable="" frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="position: static; top: 0px; width: 90px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 20px;" tabindex="0" vspace="0" width="100%" id="I0_1488111664346" name="I0_1488111664346" src="https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&amp;size=medium&amp;hl=en-US&amp;origin=https%3A%2F%2Ffmovies.se&amp;url=https%3A%2F%2Ffmovies.se%2F&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.-fasA9ieQ_Q.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCPkhNGIivn4XTNYYb-_ttaiW1kAhw#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&amp;id=I0_1488111664346&amp;parent=https%3A%2F%2Ffmovies.se&amp;pfname=&amp;rpctoken=26081870" data-gapiattached="true" title="+1"></iframe></div></span>
                        </div>
                    </a><a class="addthis_counter addthis_pill_style at_native_button addthis_nonzero" href="#" style="display: inline-block;"><a class="atc_s addthis_button_compact">Share<span></span></a><a class="addthis_button_expanded" target="_blank" title="More" href="#">6.3K</a></a>
                    <div class="atclear"></div>
                </div>
            </div>
            <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-follow-button twitter-follow-button-rendered" title="Twitter Follow Button" src="https://platform.twitter.com/widgets/follow_button.a0ec3119d8db2bc5422f2144c89ad7a9.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=fmoviesdotto&amp;show_count=true&amp;show_screen_name=true&amp;size=m&amp;time=1488111663445" style="position: static; visibility: visible; width: 228px; height: 20px;" data-screen-name="fmoviesdotto"></iframe>
            <!-- change social plugin-->
            <div class="clearfix"></div>
        </div>
        
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
        
        <div class="widget recommend">
            <div class="widget-title">
				<a class="more" href="javascript:;">View more <i class="fa fa-caret-right"></i></a>
                <h2>{$lang.top_videos}</h2> 
                <div class="tabs" data-target=".widget.recommend .content"> <a class="tab active" data-name="recommend">Recommended</a>  <a class="tab" data-name="views-week">Most Watched This Week</a>  <a class="tab" data-name="views-month">Most Watched This Month</a>  <a class="tab" data-name="most-favorited">Most Favorited</a> 
                </div>
            </div>
            <div class="widget-body">
                <div class="content" data-name="recommend">
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

        <div class="widget">
            <div class="text-center" style="overflow:hidden">
                <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad1.jpg" alt="" class="img-responsive" />
            </div>
        </div>

        <div class="widget recommend">
            <div class="widget-title">
				<a class="more" href="javascript:;">View more <i class="fa fa-caret-right"></i></a>
                <h2>{$lang.new_videos}</h2> 
                <div class="tabs" data-target=".widget.recommend .content"> <a class="tab active" data-name="recommend">Recommended</a>  <a class="tab" data-name="views-week">Most Watched This Week</a>  <a class="tab" data-name="views-month">Most Watched This Month</a>  <a class="tab" data-name="most-favorited">Most Favorited</a> 
                </div>
            </div>
            <div class="widget-body">
                <div class="content" data-name="recommend">
                    <div class="row movie-list">
                        {foreach from=$new_videos key=k item=video_data}
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

        <div class="widget">
            <div class="text-center" style="overflow:hidden">
                <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad_728x90_2.gif" alt="" class="img-responsive" />
            </div>
        </div>

        <div class="widget recommend">
            <div class="widget-title">
				<a class="more" href="javascript:;">View more <i class="fa fa-caret-right"></i></a>
                <h2>FEATURED MOVIES</h2> 
                <div class="tabs" data-target=".widget.recommend .content"> <a class="tab active" data-name="recommend">Recommended</a>  <a class="tab" data-name="views-week">Most Watched This Week</a>  <a class="tab" data-name="views-month">Most Watched This Month</a>  <a class="tab" data-name="most-favorited">Most Favorited</a> 
                </div>
            </div>
            <div class="widget-body">
                <div class="content" data-name="recommend">
                    <div class="row movie-list">
                        {foreach from=$featured_videos key=k item=video_data}
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