<?php /* Smarty version 2.6.20, created on 2017-03-14 17:32:48
         compiled from footer.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'escape', 'footer.tpl', 6, false),array('modifier', 'date_format', 'footer.tpl', 54, false),array('modifier', 'default', 'footer.tpl', 81, false),)), $this); ?>
		<div id="footer">
			<div class="container">
				<div class="row">
					<div class="info col-lg-9 col-xs-24 pull-right">
						<div class="logo-img">
							<a href="<?php echo @_URL; ?>
/index.<?php echo @_FEXT; ?>
" rel="home"><img src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/images/video123.png" alt="<?php echo ((is_array($_tmp=@_SITENAME)) ? $this->_run_mod_handler('escape', true, $_tmp) : smarty_modifier_escape($_tmp)); ?>
" title="<?php echo ((is_array($_tmp=@_SITENAME)) ? $this->_run_mod_handler('escape', true, $_tmp) : smarty_modifier_escape($_tmp)); ?>
" border="0" width="124" /></a>
						</div>
					</div>
					<div class="connect col-lg-7 col-sm-12">
						<div class="row">
							<div class="col-xs-12">
								<div class="socials">
									<?php if ($this->_tpl_vars['tpl_name'] == "video-category"): ?>
									<a href="<?php echo @_URL; ?>
/rss.php?c=<?php echo $this->_tpl_vars['cat_id']; ?>
" title="<?php echo $this->_tpl_vars['meta_title']; ?>
 RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									<?php elseif ($this->_tpl_vars['tpl_name'] == "video-new"): ?>
									<a href="<?php echo @_URL; ?>
/rss.php" title="<?php echo $this->_tpl_vars['meta_title']; ?>
 RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									<?php elseif ($this->_tpl_vars['tpl_name'] == "video-top"): ?>
									<a href="<?php echo @_URL; ?>
/rss.php?feed=topvideos" title="<?php echo $this->_tpl_vars['meta_title']; ?>
 RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									<?php elseif ($this->_tpl_vars['tpl_name'] == "article-category" || $this->_tpl_vars['tpl_name'] == "article-read"): ?>
									<a href="<?php echo @_URL; ?>
/rss.php?c=<?php echo $this->_tpl_vars['cat_id']; ?>
&feed=articles" title="<?php echo $this->_tpl_vars['meta_title']; ?>
 RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									<?php else: ?>
									<a href="<?php echo @_URL; ?>
/rss.php" title="<?php echo $this->_tpl_vars['meta_title']; ?>
 RSS" class="pm-rss-link"><i class="pm-vc-sprite ico_rss"></i> RSS</a>
									<?php endif; ?>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-24">
								<?php if (@MOBILE_MELODY && @USER_DEVICE == 'mobile'): ?>
									<a href="<?php echo $this->_tpl_vars['_footer_switch_ui_link']; ?>
" rel="nofollow" class="foot-list"><?php echo $this->_tpl_vars['lang']['switch_to_mobile_ui']; ?>
</a>
								<?php endif; ?>
								<a href="<?php echo @_URL; ?>
/index.<?php echo @_FEXT; ?>
" class="foot-list"><?php echo $this->_tpl_vars['lang']['homepage']; ?>
</a>
								<a href="<?php echo @_URL; ?>
/contact_us.<?php echo @_FEXT; ?>
" class="foot-list"><?php echo $this->_tpl_vars['lang']['contact_us']; ?>
</a>
								<?php if ($this->_tpl_vars['logged_in'] != '1' && $this->_tpl_vars['allow_registration'] == '1'): ?>
									<?php if ($this->_tpl_vars['allow_facebook_login'] || $this->_tpl_vars['allow_twitter_login']): ?>
										<a class="primary ajax-modal foot-list" data-toggle="modal" data-backdrop="true" data-keyboard="true" href="#header-register-form"><?php echo $this->_tpl_vars['lang']['register']; ?>
</a>
									<?php else: ?>
										<a href="<?php echo @_URL; ?>
/register.<?php echo @_FEXT; ?>
" class="foot-list"><?php echo $this->_tpl_vars['lang']['register']; ?>
</a>
									<?php endif; ?>
								<?php endif; ?>
								<?php if ($this->_tpl_vars['logged_in'] == '1' && $this->_tpl_vars['s_power'] == '1'): ?>
									<a href="<?php echo @_URL; ?>
/<?php echo @_ADMIN_FOLDER; ?>
/" class="foot-list"><?php echo $this->_tpl_vars['lang']['admin_area']; ?>
</a><?php endif; ?>
								<?php if (is_array ( $this->_tpl_vars['footer_page_links'] )): ?>
								  <?php $_from = $this->_tpl_vars['footer_page_links']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['page_data']):
?>
									<a href="<?php echo $this->_tpl_vars['page_data']['page_url']; ?>
" class="foot-list"><?php echo $this->_tpl_vars['page_data']['title']; ?>
</a>
								  <?php endforeach; endif; unset($_from); ?>
								<?php endif; ?>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-24">
								<p class="desc"><span class="sitename">Copyright</span>  
									<?php if (@_POWEREDBY == 1): ?><?php echo $this->_tpl_vars['lang']['powered_by']; ?>
<br /><?php endif; ?>
									&copy; <?php echo ((is_array($_tmp=time())) ? $this->_run_mod_handler('date_format', true, $_tmp, '%Y') : smarty_modifier_date_format($_tmp, '%Y')); ?>
 <?php echo @_SITENAME; ?>
. <?php echo $this->_tpl_vars['lang']['rights_reserved']; ?>

								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/js/jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/js/bootstrap-select.js"></script>
	<script type="text/javascript" src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/js/all.js"></script>
	<script type="text/javascript" src="<?php echo @_URL; ?>
/templates/<?php echo $this->_tpl_vars['template_dir']; ?>
/js/addthis_widget.js"></script>


</body>

</html>

<!-- MODAL SECTION STARTS -->
<?php if (! $this->_tpl_vars['logged_in']): ?>
<div id="header-login-form" class="modal fade" role="dialog" style="z-index: 1051;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 id="header-login-form-label"><?php echo ((is_array($_tmp=@$this->_tpl_vars['lang']['login'])) ? $this->_run_mod_handler('default', true, $_tmp, 'Login') : smarty_modifier_default($_tmp, 'Login')); ?>
</h3>
            </div>
            <div class="modal-body">
                <p></p>
                <?php if ($this->_tpl_vars['allow_facebook_login'] || $this->_tpl_vars['allow_twitter_login']): ?>
                <div class="pm-social-accounts">
                    <p><?php echo $this->_tpl_vars['lang']['login_with_social']; ?>
</p>
                    <?php if ($this->_tpl_vars['allow_facebook_login']): ?>
                    <a href="<?php echo @_URL; ?>
/login.php?do=facebook" class="btn btn-facebook" rel="nofollow"><i class="fa fa-facebook-square"></i>Facebook</a>
                    <?php endif; ?>
                    <?php if ($this->_tpl_vars['allow_twitter_login']): ?>
                    <a href="<?php echo @_URL; ?>
/login.php?do=twitter" class="btn btn-twitter" rel="nofollow"><i class="fa fa-twitter"></i> Twitter</a>
                    <?php endif; ?>
                </div>
                <div class="clearfix"></div>
                <hr />
                <?php endif; ?>
                <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "user-auth-login-form.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>
<!-- MODAL SECTION ENDS -->