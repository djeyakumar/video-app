{include file='header.tpl' p="general"} 
<div id="wrapper">
  <div class="pm-page-bar">
      <div class="container-fluid">
        <div class="row-fluid">
          <div class="span4">

          </div>
          <div class="span8">
            <nav id="second-nav" class="tabbable" role="navigation">
                <ul class="nav nav-tabs pull-right">
        {if $allow_registration == '1'}
		<li{if $display_form == 'register'} class="active"{/if}><a href="#pm-register" data-toggle="tab">{$lang.create_account}</a></li>
		{/if}
                    <li{if $display_form == 'login'} class="active"{/if}><a href="#pm-login" data-toggle="tab">{$lang.login}</a></li>
                    <li{if $display_form == 'forgot_pass'} class="active"{/if}><a href="#pm-reset" data-toggle="tab">{$lang.forgot_pass}</a></li>
                </ul>
            </nav><!-- #site-navigation -->
          </div>
          </div><!-- .row-fluid -->
      </div><!-- .container-fluid -->
  </div><!-- .pm-page-bar -->
  

  <div class="container-fluid">
    <div class="row-fluid">
    <div class="span12 extra-space">

    <div id="primary" style="margin-top: 0;">
        <div class="tab-content">
          	<div class="tab-pane{if $display_form == 'register' || $display_form == 'twitter'} active{/if}" id="pm-register">
		    {if $display_form == 'register'}
				{if $success}
	                <h2>{$lang.register_msg1}</h2>
					<hr />
	                <div class="alert alert-info">
	                    {$lang.register_msg2} {$inputs.email}. <br />{$msg}<br />
	                </div>
	            {else}
					<h1>{$lang.create_account}</h1>
            		<p class="lean"></p>
            		<hr />
					{if count($errors) > 0}
				        <div class="alert">
				        <button type="button" class="close" data-dismiss="alert">&times;</button>
				        <ul class="subtle-list">
				            {foreach from=$errors item=v}
				            	<li>{$v}</li>
				            {/foreach}
				        </ul>
				        </div>
					{/if}
	            	{include file='user-register-form.tpl'}
	            {/if}
			{elseif $display_form == 'twitter'}
				{include file='user-twitter-form.tpl'}
			{else}
				<h1>{$lang.create_account}</h1>
            	<p class="lean"></p>
            	<hr />
				{include file='user-register-form.tpl'}
			{/if}
            </div>

            <div class="tab-pane{if $display_form == 'login'} active{/if}" id="pm-login">
            <h1>{$lang.login}</h1>
            <hr />
			{if $display_form == 'login'}
				{if $success}
					
				{else}
					{if count($errors) > 0}
				        <div class="alert">
				        <button type="button" class="close" data-dismiss="alert">&times;</button>
				        <ul class="subtle-list">
				            {foreach from=$errors item=v}
				            	<li>{$v}</li>
				            {/foreach}
				        </ul>
				        </div>
					{/if}
					{include file='user-auth-login-form.tpl'}
				{/if}
			{else}
            	{include file='user-auth-login-form.tpl'}
			{/if} 
            </div>
           
            <div class="tab-pane{if $display_form == 'forgot_pass'} active{/if}" id="pm-reset">
            <h1>{$lang.forgot_pass}</h1>
            <hr />
			{if $display_form == 'forgot_pass'}
				{if $success}
					<div class="alert alert-info">
						{$lang.fp_msg}
					</div>
				{else}
					{if count($errors) > 0}
	            	<div class="alert">
	            		<button type="button" class="close" data-dismiss="alert">&times;</button>
					    <ul class="subtle-list">
					    {foreach from=$errors item=v}
					      <li>{$v}</li>
						{/foreach}
						</ul>
	            	</div>
					{/if}
					{include file='user-auth-forgot-pass-form.tpl'}
	 			{/if}
			{else}
				{include file='user-auth-forgot-pass-form.tpl'}
			{/if}
			</div>

            <div class="tab-pane{if $display_form == 'activate_acc'} active{/if}" id="pm-reset">
            <h1>{$lang.activate_account}</h1>
            <hr />
			{if $display_form == 'activate_acc'}
				{if $success}
					<div class="alert alert-success">
						{$lang.activate_account_msg1}
					</div>
				{else}
					{if count($errors) > 0}
	            	<div class="alert">
	            		<button type="button" class="close" data-dismiss="alert">&times;</button>
					    <ul class="subtle-list">
					    {foreach from=$errors item=v}
					      <li>{$v}</li>
						{/foreach}
						</ul>
	            	</div>
					{/if}
	 			{/if}
			{/if}
			</div>
            
            <div class="tab-pane{if $display_form == 'pwdreset'} active{/if}" id="pm-reset">
            <h1>{$lang.activate_pass}</h1>
            <hr />
			{if $display_form == 'pwdreset'}
				{if $success}
					<div class="alert alert-success">
						{$lang.activate_pass_msg1}
					</div>
				{else}
					{if count($errors) > 0}
	            	<div class="alert">
	            		<button type="button" class="close" data-dismiss="alert">&times;</button>
					    <ul class="subtle-list">
					    {foreach from=$errors item=v}
					      <li>{$v}</li>
						{/foreach}
						</ul>
	            	</div>
					{/if}
	 			{/if}
			{/if}
			</div>
            
		</div><!-- .tab-content -->
	</div><!-- #primary -->
    </div><!-- #content --> 
    </div><!-- .row-fluid --> 
  </div><!-- .container-fluid -->

<div class="modal hide" id="terms">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">&times;</button>
    <h3>{$lang.toa}</h3>
  </div>
  <div class="modal-body">
	{include file='terms.tpl'} 
  </div>
  <div class="modal-footer">
    <a href="#" class="btn btn-success" data-dismiss="modal">{$lang.close}</a>
  </div>
</div>
{include file='footer.tpl' p='auth'} 