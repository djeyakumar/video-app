<?php /* Smarty version 2.6.20, created on 2017-03-18 01:57:16
         compiled from index.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'smarty_fewchars', 'index.tpl', 76, false),array('function', 'dropdown_menu_video_categories', 'index.tpl', 84, false),)), $this); ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'header.tpl', 'smarty_include_vars' => array('p' => 'index')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?> 
<div class="container new-con" style="position: relative;width: 1595px; background: #fff; box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2); padding-bottom: 0px; padding:0;">
    <div class="slider swiper-container" id="slider">
        <div class="swiper-wrapper">
            <?php $_from = $this->_tpl_vars['recommended_movies']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['video_data']):
?>
            <div class="item swiper-slide" style="background-image: url(<?php echo $this->_tpl_vars['video_data']['yt_banner']; ?>
)">
                <div class="container">
					<div class="slide-caption">
                        <h2><a href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
"><?php echo $this->_tpl_vars['video_data']['video_title']; ?>
</a></h2>
                        <p class="sc-desc"><?php echo $this->_tpl_vars['video_data']['description']; ?>
</p>
                        <div class="slide-caption-info">
                            <!-- <div class="block">
                                <strong>Genre:</strong>
                                <a href="javascript:;" title="Comedy Movies">Comedy</a>
                            </div> -->
                            <div class="block">
                                <strong>Duration:</strong> <?php echo $this->_tpl_vars['video_data']['duration']; ?>
 min
                            </div>
                            <div class="block">
                                <strong>Release:</strong> <?php echo $this->_tpl_vars['video_data']['video_year']; ?>

                            </div>
                            <div class="block"><strong>Views:</strong> <?php echo $this->_tpl_vars['video_data']['yt_views']; ?>
</div>
                        </div> 
					    <a href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
" class="btn btn-success mt20"> Watch </a> 
					</div>
                </div>
            </div>
            <?php endforeach; endif; unset($_from); ?>
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
                    <li class="active"><a href="#tn-news" role="tab" data-toggle="tab"><?php echo $this->_tpl_vars['lang']['top_m_videos']; ?>
</a>
                    </li>
                    <li><a href="#tn-notice" role="tab" data-toggle="tab">FAN PAGE</a>
                    </li>
                </ul>
                <div class="top-news-content">
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane in fade active" id="tn-news">
                            <ul class="tn-news" style="overflow-y: scroll;">
                                <?php $_from = $this->_tpl_vars['top_videos']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['video_data']):
?>
                                <li>
                                    <a href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
" class="thumb news-thumb" style="background-image:url(<?php echo $this->_tpl_vars['video_data']['thumb_img_url']; ?>
);">
                                        <?php if ($this->_tpl_vars['video_data']['yt_length'] != 0): ?>
                                        <span class="pull-right"><span class="label label-default"><?php echo $this->_tpl_vars['video_data']['duration']; ?>
</span></span>
                                        <?php endif; ?>
                                    </a>
                                    <div class="tnc-info">
                                        <h4>
                                            <a href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
"><?php echo $this->_tpl_vars['video_data']['video_title']; ?>
</a>
                                        </h4>
                                        <span><?php echo $this->_tpl_vars['video_data']['views_compact']; ?>
 <?php echo $this->_tpl_vars['lang']['views']; ?>
</span>
                                    </div>
                                    <div class="clearfix"></div>
                                </li>
                                <?php endforeach; endif; unset($_from); ?>
                            </ul>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="tn-notice">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVideoone-1764015350594475%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=188010698357473" height="500" style="border:none;overflow:hidden; width:100%;" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                            <!-- <ul class="tn-news" style="overflow-y: scroll;">
                                <?php $_from = $this->_tpl_vars['categories']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['category_data']):
?>
                                <li>
                                    <a href="<?php echo $this->_tpl_vars['category_data']['url']; ?>
" class="thumb news-thumb" style="background-image:url(<?php echo $this->_tpl_vars['category_data']['image_url']; ?>
);" alt="<?php echo $this->_tpl_vars['category_data']['attr_alt']; ?>
">
                                    </a>
                                    <div class="tnc-info">
                                        <h4>
                                            <a class="name" href="<?php echo $this->_tpl_vars['category_data']['url']; ?>
"><?php echo smarty_fewchars(array('s' => $this->_tpl_vars['category_data']['name'],'length' => 32), $this);?>
</a>
                                        </h4>
                                    </div>
                                    <div class="clearfix"></div>
                                </li>
                                <?php endforeach; endif; unset($_from); ?>
                            </ul> -->
                            <!-- <ul class="list-group">
                                <?php echo smarty_html_list_categories(array('max_levels' => 0), $this);?>

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
            <h1>Watch Free Movies Online</h1> <?php echo $this->_tpl_vars['meta_title']; ?>
 - just a faster and better place for watching online movies for free.
        </div>

        <div class="widget hidden-lg hidden-md">
            <div class="widget-body text-center">
                <div style="min-height:250px;">
                    <img src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/images/ad_728x90.gif" alt="" class="img-responsive" />
                </div>
            </div>
        </div>
        
        <div class="widget">
            <div class="text-center" style="overflow:hidden">
                <img src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/images/ad_728x90.gif" alt="" class="img-responsive" />
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
                    	<?php $_from = $this->_tpl_vars['featured_movies']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['video_data']):
?>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                            	<?php if ($this->_tpl_vars['video_data']['yt_length'] != 0): ?><div class="quality"><?php echo $this->_tpl_vars['video_data']['duration']; ?>
</div><?php endif; ?>
						    	<?php if ($this->_tpl_vars['video_data']['mark_new']): ?><div class="quality"><?php echo $this->_tpl_vars['lang']['_new']; ?>
</div><?php endif; ?>
						    	<?php if ($this->_tpl_vars['video_data']['mark_popular']): ?><div class="status"><span><?php echo $this->_tpl_vars['lang']['_popular']; ?>
</span></div><?php endif; ?>
                            	<a class="poster" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
">
                                	<img src="<?php echo $this->_tpl_vars['video_data']['thumb_img_url']; ?>
" alt="<?php echo $this->_tpl_vars['video_data']['attr_alt']; ?>
">
                                </a>
                                <a class="name" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
"><?php echo $this->_tpl_vars['video_data']['video_title']; ?>
</a>
                            </div>
						    <p class="desc" rel="tooltip" title="<?php echo $this->_tpl_vars['video_data']['excerpt']; ?>
"><?php echo $this->_tpl_vars['video_data']['excerpt']; ?>
</p>
                        </div>
                        <?php endforeach; else: ?>
                            <?php echo $this->_tpl_vars['lang']['top_videos_msg2']; ?>

                        <?php endif; unset($_from); ?>
                    </div>
                </div>
                <div class="content hidden" data-name="views-today">
                    <div class="row movie-list">
                        <?php $_from = $this->_tpl_vars['top_videos']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['video_data']):
?>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                                <?php if ($this->_tpl_vars['video_data']['yt_length'] != 0): ?><div class="quality"><?php echo $this->_tpl_vars['video_data']['duration']; ?>
</div><?php endif; ?>
                                <?php if ($this->_tpl_vars['video_data']['mark_new']): ?><div class="quality"><?php echo $this->_tpl_vars['lang']['_new']; ?>
</div><?php endif; ?>
                                <?php if ($this->_tpl_vars['video_data']['mark_popular']): ?><div class="status"><span><?php echo $this->_tpl_vars['lang']['_popular']; ?>
</span></div><?php endif; ?>
                                <a class="poster" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
">
                                    <img src="<?php echo $this->_tpl_vars['video_data']['thumb_img_url']; ?>
" alt="<?php echo $this->_tpl_vars['video_data']['attr_alt']; ?>
">
                                </a>
                                <a class="name" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
"><?php echo $this->_tpl_vars['video_data']['video_title']; ?>
</a>
                            </div>
                            <p class="desc" rel="tooltip" title="<?php echo $this->_tpl_vars['video_data']['excerpt']; ?>
"><?php echo $this->_tpl_vars['video_data']['excerpt']; ?>
</p>
                        </div>
                        <?php endforeach; else: ?>
                        <?php echo $this->_tpl_vars['lang']['top_videos_msg2']; ?>

                        <?php endif; unset($_from); ?>
                    </div>
                </div>
                <div class="content hidden" data-name="views-imdb">
                    <div class="row movie-list">
                        <?php $_from = $this->_tpl_vars['topimdb']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['video_data']):
?>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                                <?php if ($this->_tpl_vars['video_data']['rating']): ?><div class="quality"><span><?php echo $this->_tpl_vars['video_data']['rating']; ?>
</span></div><?php endif; ?>
                                <a class="poster" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
">
                                    <img src="<?php echo $this->_tpl_vars['video_data']['img_url']; ?>
">
                                </a>
                                <a class="name" href="#"><?php echo $this->_tpl_vars['video_data']['video_title']; ?>
</a>
                            </div>
                        </div>
                        <?php endforeach; else: ?>
                        <?php echo $this->_tpl_vars['lang']['top_videos_msg2']; ?>

                        <?php endif; unset($_from); ?>
                    </div>
                </div>
            </div>
        </div>

        <div class="widget">
            <div class="text-center" style="overflow:hidden">
                <img src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/images/ad1.jpg" alt="" class="img-responsive" />
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
                        <?php $_from = $this->_tpl_vars['movie_videos']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['video_data']):
?>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                                <?php if ($this->_tpl_vars['video_data']['yt_length'] != 0): ?><div class="quality"><?php echo $this->_tpl_vars['video_data']['duration']; ?>
</div><?php endif; ?>
                                <?php if ($this->_tpl_vars['video_data']['mark_new']): ?><div class="quality"><?php echo $this->_tpl_vars['lang']['_new']; ?>
</div><?php endif; ?>
                                <?php if ($this->_tpl_vars['video_data']['mark_popular']): ?><div class="status"><span><?php echo $this->_tpl_vars['lang']['_popular']; ?>
</span></div><?php endif; ?>
                                <a class="poster" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
">
                                    <img src="<?php echo $this->_tpl_vars['video_data']['thumb_img_url']; ?>
" alt="<?php echo $this->_tpl_vars['video_data']['attr_alt']; ?>
">
                                </a>
                                <a class="name" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
"><?php echo $this->_tpl_vars['video_data']['video_title']; ?>
</a>
                            </div>
                            <p class="desc" rel="tooltip" title="<?php echo $this->_tpl_vars['video_data']['excerpt']; ?>
"><?php echo $this->_tpl_vars['video_data']['excerpt']; ?>
</p>
                        </div>
                        <?php endforeach; else: ?>
                            <?php echo $this->_tpl_vars['lang']['top_videos_msg2']; ?>

                        <?php endif; unset($_from); ?>
                    </div>
                </div>
            </div>
        </div>

        <div class="widget">
            <div class="text-center" style="overflow:hidden">
                <img src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/images/ad_728x90_2.gif" alt="" class="img-responsive" />
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
                        <?php $_from = $this->_tpl_vars['tv_videos']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['video_data']):
?>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-8 col-xs-12">
                            <div class="item">
                                <?php if ($this->_tpl_vars['video_data']['yt_length'] != 0): ?><div class="quality"><?php echo $this->_tpl_vars['video_data']['duration']; ?>
</div><?php endif; ?>
                                <?php if ($this->_tpl_vars['video_data']['mark_new']): ?><div class="quality"><?php echo $this->_tpl_vars['lang']['_new']; ?>
</div><?php endif; ?>
                                <?php if ($this->_tpl_vars['video_data']['mark_popular']): ?><div class="status"><span><?php echo $this->_tpl_vars['lang']['_popular']; ?>
</span></div><?php endif; ?>
                                <a class="poster" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
">
                                    <img src="<?php echo $this->_tpl_vars['video_data']['thumb_img_url']; ?>
" alt="<?php echo $this->_tpl_vars['video_data']['attr_alt']; ?>
">
                                </a>
                                <a class="name" href="<?php echo $this->_tpl_vars['video_data']['video_href']; ?>
"><?php echo $this->_tpl_vars['video_data']['video_title']; ?>
</a>
                            </div>
                            <p class="desc" rel="tooltip" title="<?php echo $this->_tpl_vars['video_data']['excerpt']; ?>
"><?php echo $this->_tpl_vars['video_data']['excerpt']; ?>
</p>
                        </div>
                        <?php endforeach; else: ?>
                            <?php echo $this->_tpl_vars['lang']['top_videos_msg2']; ?>

                        <?php endif; unset($_from); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'footer.tpl', 'smarty_include_vars' => array('p' => 'index')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>