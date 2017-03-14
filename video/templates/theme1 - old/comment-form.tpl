<div name="mycommentspan" id="mycommentspan"></div>
{if $logged_in == '1'}
<div class="row-fluid" id="pm-post-form">
    <div class="col-xs-2">
    	<span class="pm-avatar"><img src="{$s_avatar_url}" height="40" width="40" alt="" class="img-polaroid"></span>
    </div>
    <div class="col-xs-22">
      <form action="" name="form-user-comment" method="post" id="myform" class="form-inline">
        <textarea name="comment_txt" id="c_comment_txt" rows="2" class="col-xs-24 form-control" placeholder="{$lang.your_comment}"></textarea>
        <input type="hidden" id="c_vid" name="vid" value="{$uniq_id}" class="form-control">
        <input type="hidden" id="c_user_id" name="user_id" value="{$user_id}">
        <p></p>
        <button type="submit" id="c_submit" name="Submit" class="btn btn-small" data-loading-text="{$lang.submit_comment}">{$lang.submit_comment}</button>
      </form>
    </div>
</div>
{elseif $logged_in == 0 && $guests_can_comment == 1}
<div class="row-fluid" id="pm-post-form">
    <div class="col-xs-2">
    	<span class="pm-avatar"><img src="{$smarty.const._URL}/templates/{$template_dir}/img/pm-avatar.png" width="40" height="40" alt="" border="0" class="img-polaroid"></span>
    </div>
    <div class="col-xs-22">
      <form action="" name="form-user-comment" method="post" id="myform" class="form-inline">
        <textarea name="comment_txt" id="c_comment_txt" rows="2" class="col-xs-24" placeholder="{$lang.your_comment}"></textarea>
        <br/>
        <div id="pm-comment-form" class="form-group">
            <input type="text" id="c_username" name="username" value="{$guestname}" class="col-xs-8 inp-small form-control" placeholder="{$lang.your_name}">
            <input type="text" id="captcha" name="captcha" class="col-xs-6 inp-small form-control" placeholder="{$lang.confirm_code}">
        </div>
        
        <button class="btn btn-small btn-link" onclick="document.getElementById('captcha-image').src = '{$smarty.const._URL}/include/securimage_show.php?sid=' + Math.random(); return false"><i class="icon-refresh"></i></button>
        <img src="{$smarty.const._URL}/include/securimage_show.php?sid={echo_securimage_sid}" id="captcha-image" align="absmiddle" alt="">
        <input type="hidden" id="c_vid" name="vid" value="{$uniq_id}">
        <input type="hidden" id="c_user_id" name="user_id" value="0">
        </div>
        <p></p>
        <button type="submit" id="c_submit" name="Submit" class="btn btn-small" data-loading-text="{$lang.submit_comment}">{$lang.submit_comment}</button>
      </form>
    </div>
</div>
{/if}