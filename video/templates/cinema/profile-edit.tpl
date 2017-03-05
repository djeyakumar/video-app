{include file='header.tpl' p="general"} 
<div id="wrapper">
  <div class="pm-page-bar">
      <div class="container-fluid">
        <div class="row-fluid">
          <div class="span6">
          	<h1>{$lang.edit_profile}</h1>
          </div>
          <div class="span6">
            <nav id="second-nav" class="tabbable" role="navigation">
                <ul class="nav nav-tabs pull-right">
                <li class="active"><a href="{$smarty.const._URL}/edit_profile.{$smarty.const._FEXT}">{$lang.edit_profile}</a></li>

                <li><a href="{$smarty.const._URL}/playlists.{$smarty.const._FEXT}">{$lang.my_playlists}</a></li>
                {if $smarty.const._ALLOW_USER_SUGGESTVIDEO == '1'}
                <li><a href="{$smarty.const._URL}/suggest.{$smarty.const._FEXT}">{$lang.suggest}</a></li>
                {/if}
                {if $smarty.const._ALLOW_USER_UPLOADVIDEO == '1'}
                <li><a href="{$smarty.const._URL}/upload.{$smarty.const._FEXT}">{$lang.upload_video}</a></li>
                {/if}
                <li><a href="{$smarty.const._URL}/memberlist.{$smarty.const._FEXT}">{$lang.members_list}</a></li>
				{if isset($mm_profilemenu_insert)}{$mm_profilemenu_insert}{/if}
                </ul>
            </nav><!-- #site-navigation -->
          </div>
          </div><!-- .row-fluid -->
      </div><!-- .container-fluid -->
  </div><!-- .pm-page-bar -->
  
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12 extra-space">
		<div id="primary">
		{if $success == 1}
		<div class="alert alert-success">{$lang.ep_msg1}</div>
            {if $changed_pass == 1}
            <div class="alert alert-success">{$lang.ep_msg2}</div>
            <meta http-equiv="refresh" content="5;URL={$smarty.const._URL}">
            {/if}
		{include file='profile-edit-form.tpl'}
        {else}
		 	{if $errors.failure != ''}
		 		{$errors.failure}
			{/if}
        
        {if $nr_errors > 0}
        <div class="alert alert-danger">
            <ul class="subtle-list">
            {foreach from=$errors item=error}
                <li>{$error}</li>
            {/foreach}
            </ul>
        </div>
        {/if} 
        {include file='profile-edit-form.tpl'}
		{/if}

		</div><!-- #primary -->
    </div><!-- #content -->
  </div><!-- .row-fluid -->
</div><!-- .container-fluid -->     
        
{include file='footer.tpl'} 