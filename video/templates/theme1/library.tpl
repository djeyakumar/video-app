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
            </div>
            <div class="paging">
                <ul class="pagination">
                    {foreach from=$libHeads key=k item=head}
                        {if $head eq $q}
                            <li class="active"><a href="library.php?q={$head}&p={$p}">{$head}</a></li>
                        {else}
                            <li><a href="library.php?q={$head}&p={$p}">{$head}</a></li>
                        {/if}
                    {/foreach}
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
            
            {$pagination}

        </div>
    </div>
</div>
{include file="footer.tpl" tpl_name="video-new"} 