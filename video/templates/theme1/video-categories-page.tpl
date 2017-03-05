{include file='header.tpl' p="general" tpl_name="video-categories-page"}
<div id="body-wrapper">
    <div class="container">
        <div class="widget margin-top">
            <div class="widget-title style2">
                <h1>{$lang._categories}</h1>
            </div>
            <div class="widget-body">
                <div class="widget">
                    <div class="text-center" style="overflow:hidden">
                        <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad_728x90.gif" alt="" class="img-responsive" />
                    </div>
                </div>

                <div class="row movie-list">
                	{foreach from=$categories_data key=k item=category_data}
					{if $category_data.parent_id == 0}
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                        <div class="item">
                        	<a class="poster" href="{$category_data.url}">
                            	<img src="{$category_data.image_url}" alt="{$category_data.attr_alt}">
                            </a>
                            <a class="name" href="{$category_data.url}">{smarty_fewchars s=$category_data.name length=32}</a>
                        </div>
                    </div>
                    {/if}
                    {/foreach}
                </div>
            </div>
        </div>
    </div>
</div>
{include file="footer.tpl" tpl_name="video-categories-page"} 