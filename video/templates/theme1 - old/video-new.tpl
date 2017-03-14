{include file="header.tpl" p="general" tpl_name="video-new"} 
<div id="body-wrapper">
    <div class="container">
        <div class="widget margin-top">
            <div class="widget-title style2">
				<h1>{$lang.recently_added}</h1>
				<form class="filter-items" action="">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="filter">
                                <div class="heading">Sort by</div>
                                <ul class="sort">
                                    <li data-value="post_date:desc"><i class="fa fa-clock-o"></i> Latest</li>
                                    <li data-value="views:desc"><i class="fa fa-eye"></i> Most viewed</li>
                                    <li data-value="title:asc"><i class="fa fa-sort-alpha-asc"></i> Name</li>
                                    <li data-value="imdb:desc"><i class="fa fa-fire"></i> IMDb</li>
                                    <li data-value="year:desc"><i class="fa fa-calendar"></i> Release date</li>
                                </ul>
                                <input type="hidden" name="sort" value="post_date:desc">
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="filter genre">
                                <div class="heading">Genre</div>
                                <ul class="checkbox c3">
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_action">
                                        <label for="genre_action">Action</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_adventure">
                                        <label for="genre_adventure">Adventure</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_animation">
                                        <label for="genre_animation">Animation</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_biography">
                                        <label for="genre_biography">Biography</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_costume">
                                        <label for="genre_costume">Costume</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_comedy">
                                        <label for="genre_comedy">Comedy</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_crime">
                                        <label for="genre_crime">Crime</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_documentary">
                                        <label for="genre_documentary">Documentary</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_drama">
                                        <label for="genre_drama">Drama</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_family">
                                        <label for="genre_family">Family</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_fantasy">
                                        <label for="genre_fantasy">Fantasy</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_game-show">
                                        <label for="genre_game-show">Game-Show</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_history">
                                        <label for="genre_history">History</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_horror">
                                        <label for="genre_horror">Horror</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_kungfu">
                                        <label for="genre_kungfu">Kungfu</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_music">
                                        <label for="genre_music">Music</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_mystery">
                                        <label for="genre_mystery">Mystery</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_reality-tv">
                                        <label for="genre_reality-tv">Reality-TV</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_romance">
                                        <label for="genre_romance">Romance</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_sci-fi">
                                        <label for="genre_sci-fi">Sci-Fi</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_sport">
                                        <label for="genre_sport">Sport</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_thriller">
                                        <label for="genre_thriller">Thriller</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_tv-show">
                                        <label for="genre_tv-show">TV Show</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_war">
                                        <label for="genre_war">War</label>
                                    </li>
                                    <li>
                                        <input name="genre[]" type="checkbox" id="genre_western">
                                        <label for="genre_western">Western</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="genre_mode" name="genre_mode">
                                        <label for="genre_mode" style="color: #fe505a">Mode: AND</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8">
                            <div class="filter country">
                                <div class="heading">Country</div>
                                <ul class="checkbox c2">
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_united-states">
                                        <label for="country_united-states">United States</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_united-kingdom">
                                        <label for="country_united-kingdom">United Kingdom</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_france">
                                        <label for="country_france">France</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_japan">
                                        <label for="country_japan">Japan</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_korea">
                                        <label for="country_korea">Korea</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_thailand">
                                        <label for="country_thailand">Thailand</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_hongkong">
                                        <label for="country_hongkong">Hongkong</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_taiwan">
                                        <label for="country_taiwan">Taiwan</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_india">
                                        <label for="country_india">India</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_china">
                                        <label for="country_china">China</label>
                                    </li>
                                    <li>
                                        <input name="country[]" type="checkbox" id="country_international">
                                        <label for="country_international">International</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-8 col-sm-6 col-xs-12">
                            <div class="filter type">
                                <div class="heading">Type</div>
                                <ul class="checkbox c1">
                                    <li>
                                        <input name="type[]" id="type_movie" type="checkbox" value="movie">
                                        <label for="type_movie">Movie</label>
                                    </li>
                                    <li>
                                        <input name="type[]" id="type_series" type="checkbox" value="series">
                                        <label for="type_series">TV-Series</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-8 col-sm-6 col-xs-12">
                            <div class="filter subtitle">
                                <div class="heading">Subtitle</div>
                                <ul class="checkbox c1">
                                    <li>
                                        <input name="subtitle[]" id="type_1" type="checkbox" value="1">
                                        <label for="type_1">Yes</label>
                                    </li>
                                    <li>
                                        <input name="subtitle[]" id="type_0" type="checkbox" value="0">
                                        <label for="type_0">No</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-8 col-sm-6 col-xs-12">
                            <div class="filter subtitle">
                                <div class="heading">Quality</div>
                                <ul class="checkbox c1">
                                    <li>
                                        <input name="quality[]" id="quality_HD 1080p" type="checkbox" value="HD 1080p">
                                        <label for="quality_HD 1080p">HD 1080p</label>
                                    </li>
                                    <li>
                                        <input name="quality[]" id="quality_HD 720p" type="checkbox" value="HD 720p">
                                        <label for="quality_HD 720p">HD 720p</label>
                                    </li>
                                    <li>
                                        <input name="quality[]" id="quality_HDRip" type="checkbox" value="HDRip">
                                        <label for="quality_HDRip">HDRip</label>
                                    </li>
                                    <li>
                                        <input name="quality[]" id="quality_SD" type="checkbox" value="SD">
                                        <label for="quality_SD">SD</label>
                                    </li>
                                    <li>
                                        <input name="quality[]" id="quality_TS" type="checkbox" value="TS">
                                        <label for="quality_TS">TS</label>
                                    </li>
                                    <li>
                                        <input name="quality[]" id="quality_CAM" type="checkbox" value="CAM">
                                        <label for="quality_CAM">CAM</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-8 col-sm-6 col-xs-12">
                            <div class="filter quality">
                                <div class="heading">Release</div>
                                <ul class="checkbox c1">
                                    <li>
                                        <input name="release[]" type="checkbox" id="release_2017" value="2017">
                                        <label for="release_2017">2017</label>
                                    </li>
                                    <li>
                                        <input name="release[]" type="checkbox" id="release_2016" value="2016">
                                        <label for="release_2016">2016</label>
                                    </li>
                                    <li>
                                        <input name="release[]" type="checkbox" id="release_2015" value="2015">
                                        <label for="release_2015">2015</label>
                                    </li>
                                    <li>
                                        <input name="release[]" type="checkbox" id="release_2014" value="2014">
                                        <label for="release_2014">2014</label>
                                    </li>
                                    <li>
                                        <input name="release[]" type="checkbox" id="release_2013" value="2013">
                                        <label for="release_2013">2013</label>
                                    </li>
                                    <li>
                                        <input name="release[]" type="checkbox" id="release_2012" value="2012">
                                        <label for="release_2012">2012</label>
                                    </li>
                                    <li>
                                        <input name="release[]" type="checkbox" id="release_older" value="older">
                                        <label for="release_older">Older</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p class="help-block text-center">Leave an option empty means choose "all"</p>
                    <div class="submit">
                        <button class="btn btn-primary" type="submit">Filter movies</button>
                    </div>
                </form>
            </div>
            <div class="widget-body">
                <div class="widget">
                    <div class="text-center" style="overflow:hidden">
                        <img src="{$smarty.const._URL}/templates/{$template_dir}/images/ad_728x90.gif" alt="" class="img-responsive" />
                    </div>
                </div>

                {if is_array($pagination)}
                <div class="paging">
                    <ul class="pagination">
                    {foreach from=$pagination key=k item=pagination_data}
                        <li{foreach from=$pagination_data.li key=attr item=attr_val} {$attr}="{$attr_val}"{/foreach}>
                            <a{foreach from=$pagination_data.a key=attr item=attr_val} {$attr}="{$attr_val}"{/foreach}>{$pagination_data.text}</a>
                        </li>
                    {/foreach}
                    </ul>
                </div>
                {/if}

                <div class="row movie-list">
                	{foreach from=$results key=k item=video_data}
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
                    </ul>

                    {if $empty_results}
                        <p class="alert">{$lang.nv_page_sorry_msg}</p>
                    {/if}
                </div>

                {if is_array($pagination)}
                <div class="paging">
                    <ul class="pagination">
                    {foreach from=$pagination key=k item=pagination_data}
                        <li{foreach from=$pagination_data.li key=attr item=attr_val} {$attr}="{$attr_val}"{/foreach}>
                            <a{foreach from=$pagination_data.a key=attr item=attr_val} {$attr}="{$attr_val}"{/foreach}>{$pagination_data.text}</a>
                        </li>
                    {/foreach}
                    </ul>
                </div>
                {/if}
            </div>
        </div>
    </div>
</div>
{include file="footer.tpl" tpl_name="video-new"} 