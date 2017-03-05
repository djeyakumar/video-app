 {include file="header.tpl" no_index="1" p="upload" tpl_name="upload"}
<div id="wrapper">
  <div class="pm-page-bar">
      <div class="container-fluid">
        <div class="row-fluid">
          <div class="span6">
          	<h1>{$lang.upload_video}</h1>
          </div>
          <div class="span6">
            <nav id="second-nav" class="tabbable" role="navigation">
                <ul class="nav nav-tabs pull-right">
                <li><a href="{$smarty.const._URL}/edit_profile.{$smarty.const._FEXT}">{$lang.edit_profile}</a></li>

                <li><a href="{$smarty.const._URL}/playlists.{$smarty.const._FEXT}">{$lang.my_playlists}</a></li>
                {if $smarty.const._ALLOW_USER_SUGGESTVIDEO == '1'}
                <li><a href="{$smarty.const._URL}/suggest.{$smarty.const._FEXT}">{$lang.suggest}</a></li>
                {/if}
                {if $smarty.const._ALLOW_USER_UPLOADVIDEO == '1'}
                <li class="active"><a href="{$smarty.const._URL}/upload.{$smarty.const._FEXT}">{$lang.upload_video}</a></li>
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
			<div class="alert alert-success">
			{$lang.suggest_msg4}
			<br />
			<a href="upload.{$smarty.const._FEXT}">{$lang.add_another_one}</a> or <a href="index.{$smarty.const._FEXT}">{$lang.return_home}</a>
			</div>
		{elseif $success == 2}
			<div class="alert alert-success">
			{$lang.upload_errmsg11} 
			<a href="index.{$smarty.const._FEXT}">{$lang.return_home}</a>
			</div>
		{elseif $success == 'custom'}
			<div class="alert alert-success">
			{$success_custom_message} 
			<a href="index.{$smarty.const._FEXT}">{$lang.return_home}</a>
			</div>
		{else}
			{if count($errors) > 0}
			<div class="alert alert-danger">
			<button type="button" class="close" data-dismiss="alert">&times;</button>
			<ul class="subtle-list">
			{foreach from=$errors item=v}
				<li>{$v}</li>
			{/foreach}
			</ul>
			</div>
			{/if}
			
			<div class="hide" id="manage-video-ajax-message"></div>
			<div class="form-horizontal">
			<div class="pm-upload-file-select" id="upload-video-dropzone">
				<i class="fa fa-cloud-upload"></i>
				<p>{$lang.drop_files|default:"Drop file here"}</p>
				<div class="clearfix"></div>
				<span class="btn-upload fileinput-button">
					<span class="btn-upload-value">{$lang.upload_video1}</span>
					<input type="file" name="video" id="upload-video-file-btn" />
				</span>
			</div>
			<div class="clearfix"></div>

			<fieldset>
			<form name="upload-video-form" id="upload-video-form" class="upload-form-only" enctype="multipart/form-data" method="post" action="{$form_action}">
				<div class="control-group">
					<label class="control-label">{$lang.swfupload_file}</label>
					<div class="controls">
						<div>
							<ol id="upload-video-selected-files-container"></ol>
						</div>
					</div>
				</div>
				<div class="control-group">
				  <label class="control-label" for="capture">{$lang.upload_video2}</label>
				  <div class="controls">
					<span class="btn-upload btn-upload-video">
						<span class="btn-upload-value">{$lang.swfupload_btn_select}</span>
						<input type="file" name="capture" class="capture" value="" size="40" />
					</span>
				  </div>
				</div>
				<div  id="upload-video-extra">
					<div class="control-group">
					  <label class="control-label" for="video_title">{$lang.video}</label>
					  <div class="controls">
					  <input name="video_title" type="text" value="{$smarty.post.video_title}" class="input-large">
					  </div>
					</div>
					<div class="control-group">
					  <label class="control-label" for="duration">{$lang._duration}</label>
					  <div class="controls">
					  <input name="duration" id="duration" type="text" value="{$smarty.post.duration}" class="input-mini" style="text-align: center;">
					  <span class="help-inline"><a href="#" rel="tooltip" title="{$lang.duration_format}"><i class="icon-info-sign"></i></a></span>
					  </div>
					</div>
					<div class="control-group">
					  <label class="control-label" for="category">{$lang.category}</label>
					  <div class="controls">
						{$categories_dropdown}
					  </div>
					</div>
					<div class="control-group">
					  <label class="control-label" for="description">{$lang.description}</label>
					  <div class="controls">
						<textarea name="description" class="span5" rows="3">{if $smarty.post.description}{$smarty.post.description}{/if}</textarea>
					  </div>
					</div>
					<div class="control-group">
					  <label class="control-label" for="tags">{$lang.tags}</label>
					  <div class="controls">
						<div class="tagsinput">
						  <input id="tags_upload" name="tags" type="text" class="tags" value="{$smarty.post.tags}"> <span class="help-inline"><a href="#" rel="tooltip" title="{$lang.suggest_ex}"><i class="icon-info-sign"></i></a></span>
						</div>
					  </div>
					</div>
					{if isset($mm_upload_fields_inject)}{$mm_upload_fields_inject}{/if}
					<div class="">
					  <div class="controls">
						<button name="Submit" type="submit" id="upload-video-submit-btn" value="{$lang.submit_upload}" class="btn btn-success" data-loading-text="{$lang.submit_send}">{$lang.submit_upload}</button>
						<span id="uploading_gif">
						</span>
					  </div>
					</div>
				</div><!-- #upload-video-extra -->
				
			</fieldset>
			
			<input type="hidden" name="form_id" value="{$form_id}" />
			<input type="hidden" name="_pmnonce_t" id="upload-video-form-nonce" value="{$form_csrfguard_token}" />
			<input type="hidden" name="temp_id" id="temp_id" value="" />
			<input type="hidden" name="p" value="upload" />
			<input type="hidden" name="do" value="upload-media-file" />
			<input type="hidden" name="MAX_FILE_SIZE" value="{$max_file_size}">
			</form>
			</div>
		{/if}
		</div><!-- #primary -->
		</div><!-- .span12 -->
	</div><!-- .row-fluid --> 
  </div>
  <!-- .container-fluid -->
{include file="footer.tpl" tpl_name="upload"}