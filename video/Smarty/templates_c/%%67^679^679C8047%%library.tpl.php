<?php /* Smarty version 2.6.20, created on 2017-03-18 03:45:14
         compiled from library.tpl */ ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "header.tpl", 'smarty_include_vars' => array('p' => 'general','tpl_name' => "top-imdb")));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?> 
<div id="body-wrapper">
    <div class="container">
        <div class="widget margin-top">
            <div class="widget">
                <div class="text-center" style="overflow:hidden">
                    <img src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/images/ad_728x90.gif" alt="" class="img-responsive" />
                </div>
            </div>
            <div class="widget-title style2">
				<h2><?php echo $this->_tpl_vars['page_title']; ?>
</h2>
            </div>
            <div class="paging">
                <ul class="pagination">
                    <?php $_from = $this->_tpl_vars['libHeads']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['head']):
?>
                        <?php if ($this->_tpl_vars['head'] == $this->_tpl_vars['q']): ?>
                            <li class="active"><a href="library.php?q=<?php echo $this->_tpl_vars['head']; ?>
&p=<?php echo $this->_tpl_vars['p']; ?>
"><?php echo $this->_tpl_vars['head']; ?>
</a></li>
                        <?php else: ?>
                            <li><a href="library.php?q=<?php echo $this->_tpl_vars['head']; ?>
&p=<?php echo $this->_tpl_vars['p']; ?>
"><?php echo $this->_tpl_vars['head']; ?>
</a></li>
                        <?php endif; ?>
                    <?php endforeach; endif; unset($_from); ?>
                </ul>
            </div>
            <div class="widget-body">
                <div class="content" data-name="movies">
                    <div class="row movie-list">
                    	<?php $_from = $this->_tpl_vars['movies']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
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
                        </ul>
                    </div>
                </div>
            </div>
            
            <?php echo $this->_tpl_vars['pagination']; ?>


        </div>
    </div>
</div>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "footer.tpl", 'smarty_include_vars' => array('tpl_name' => "video-new")));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?> 