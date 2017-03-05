{include file='header.tpl' p="article"} 
<div id="wrapper">
{if $show_addthis_widget == '1'}
{include file='widget-socialite.tpl'}
{/if}
    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span12 extra-space">
		<div id="primary" class="pm-single">
            <h1 class="entry-title">{$page.title}</h1>
			{$page.content}
		</div><!-- #primary -->
        </div><!-- #content -->
      </div><!-- .row-fluid -->
    </div><!-- .container-fluid -->
{include file='footer.tpl'}