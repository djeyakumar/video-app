<?php /* Smarty version 2.6.20, created on 2017-03-14 17:32:48
         compiled from user-auth-login-form.tpl */ ?>
<form class="form-vertical" name="login_form" id="login-form" method="post" action="<?php echo @_URL; ?>
/login.php">
  <div class="form-group">
    <label for="username"><?php echo $this->_tpl_vars['lang']['your_username_or_email']; ?>
</label>
    <input type="text" class="form-control" id="hocusfocus" name="username" value="<?php echo $this->_tpl_vars['inputs']['username']; ?>
">
  </div>
  <div class="form-group">
    <label class="control-label" for="pwd"><?php echo $this->_tpl_vars['lang']['password']; ?>
</label>
    <input type="password" class="form-control" id="pass" name="pass" maxlength="32" autocomplete="off">
  </div>
    <button type="submit" name="Login" value="<?php echo $this->_tpl_vars['lang']['login']; ?>
" class="btn btn-blue" data-loading-text="<?php echo $this->_tpl_vars['lang']['login']; ?>
"><?php echo $this->_tpl_vars['lang']['login']; ?>
</button>
    <span class="signup"><small><a href="<?php echo @_URL; ?>
/login.<?php echo @_FEXT; ?>
?do=forgot_pass"><?php echo $this->_tpl_vars['lang']['forgot_pass']; ?>
</a></small></span>
</form>