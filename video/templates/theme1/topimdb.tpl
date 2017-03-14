{include file="header.tpl" p="general" tpl_name="top-imdb"} 
<div id="body-wrapper">
    <div class="container">
        <div class="widget margin-top">
            <div class="widget">
                <div class="text-center" style="overflow:hidden">
                    <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad_728x90.gif" alt="" class="img-responsive" />
                </div>
            </div>
            <div class="widget-title style2">
				<h2>{$page_title}</h2>

                <!-- <div class="tabs" data-target=".widget.movies .content">
                    <a class="tab active" data-name="movies">Movies</a>
                    <a class="tab" data-name="tv-series">TV Series</a>
                </div> -->
            </div>
            <div class="paging">
                <ul class="pagination">
                    <li class="disabled"><span>«</span>
                    </li>
                    <li class="active"><span>1</span>
                    </li>
                    <li><a href="movies?page=2">2</a>
                    </li>
                    <li><a href="movies?page=3">3</a>
                    </li>
                    <li><a href="movies?page=4">4</a>
                    </li>
                    <li><a href="movies?page=5">5</a>
                    </li>
                    <li><a href="movies?page=6">6</a>
                    </li>
                    <li><a href="movies?page=7">7</a>
                    </li>
                    <li><a href="movies?page=8">8</a>
                    </li>
                    <li class="disabled"><span>...</span>
                    </li>
                    <li><a href="movies?page=428">428</a>
                    </li>
                    <li><a href="movies?page=429">429</a>
                    </li>
                    <li><a href="movies?page=2" rel="next">»</a>
                    </li>
                </ul>
            </div>
            <div class="widget-body">
                <div class="content" data-name="movies">
                    <div class="row movie-list">
                    	{foreach from=$movies key=k item=video_data}
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
                        </ul>
                    </div>
                </div>
            </div>
            <div class="paging">
                <ul class="pagination">
                    <li class="disabled"><span>«</span>
                    </li>
                    <li class="active"><span>1</span>
                    </li>
                    <li><a href="movies?page=2">2</a>
                    </li>
                    <li><a href="movies?page=3">3</a>
                    </li>
                    <li><a href="movies?page=4">4</a>
                    </li>
                    <li><a href="movies?page=5">5</a>
                    </li>
                    <li><a href="movies?page=6">6</a>
                    </li>
                    <li><a href="movies?page=7">7</a>
                    </li>
                    <li><a href="movies?page=8">8</a>
                    </li>
                    <li class="disabled"><span>...</span>
                    </li>
                    <li><a href="movies?page=428">428</a>
                    </li>
                    <li><a href="movies?page=429">429</a>
                    </li>
                    <li><a href="movies?page=2" rel="next">»</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
{include file="footer.tpl" tpl_name="video-new"} 