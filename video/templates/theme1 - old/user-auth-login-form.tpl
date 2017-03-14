<form class="form-vertical" name="login_form" id="login-form" method="post" action="{$smarty.const._URL}/login.php">
  <div class="form-group">
    <label for="username">{$lang.your_username_or_email}</label>
    <input type="text" class="form-control" id="hocusfocus" name="username" value="{$inputs.username}">
  </div>
  <div class="form-group">
    <label class="control-label" for="pwd">{$lang.password}</label>
    <input type="password" class="form-control" id="pass" name="pass" maxlength="32" autocomplete="off">
  </div>
    <button type="submit" name="Login" value="{$lang.login}" class="btn btn-blue" data-loading-text="{$lang.login}">{$lang.login}</button>
    <span class="signup"><small><a href="{$smarty.const._URL}/login.{$smarty.const._FEXT}?do=forgot_pass">{$lang.forgot_pass}</a></small></span>
</form>