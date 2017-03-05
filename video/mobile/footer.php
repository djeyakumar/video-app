<script type="text/javascript">
$(document).ready(function(){
	$("#lang-selector").click(function(e){
		e.preventDefault();
		$(".lang_submenu").slideToggle( 200, function() {});
		$(".lang_submenu").css("display", "table");
	})
	$("a[id^='lang_select_']").each(function() {
	  var id = parseInt( this.name );
	  var lang = $('#lang_select_' + id);

	  lang.click(function() {
		 $.post( JS_MOBI_URL+"/index.php", { select_language: 1, lang_id: id }, function() { window.location.reload(); }, '');
		});
	 });
});
</script>
<?php  if($page_type == 'upload') { ?>
<script src="<?php echo _URL; ?>/templates/default/js/jquery.maskedinput-1.3.min.js" type="text/javascript"></script>
<!-- <script src="<?php echo _URL_MOBI; ?>/js/upload.js" type="text/javascript"></script> -->
<?php } ?>
<script type="text/javascript" src="<?php echo _URL; ?>/templates/default/js/jquery.cookee.js"></script>

<?php if($page_type == 'video') : ?>
<script type="text/javascript" src="<?php echo _URL; ?>/js/jquery.timer.min.js"></script>
<script type="text/javascript">

function timer_pad(number, length) {
	var str = '' + number;
	while (str.length < length) {str = '0' + str;}
	return str;
}

setTimeout( function(){ 
	$('#Playerholder.videoWrapper').css('background-image', 'none');
}, 5000 );

var preroll_timer;
var preroll_player_called = false;
var skippable = <?php if($preroll_ad_data['skip'] != 1) { echo '0'; } else { echo '1'; }?>; 
var skippable_timer_current = <?php if($preroll_ad_data['skip_delay_seconds'] != 1 && !empty($preroll_ad_data['skip_delay_seconds'])) { echo $preroll_ad_data['skip_delay_seconds']; } else { echo '0'; } ?> * 1000; 
var preroll_disable_stats =	<?php if($preroll_ad_data['disable_stats'] == 1) : ?>1<?php else: ?>0<?php endif; ?>;
	
$(document).ready(function(){
	if (skippable == 1) {
		$('#preroll_skip_btn').hide();
	}
	
	var preroll_timer_current = <?php if(!empty($preroll_ad_data['duration'])) { echo $preroll_ad_data['duration']; } else { echo '0'; } ?> * 1000;
	
	preroll_timer = $.timer(function(){
	
		var seconds = parseInt(preroll_timer_current / 1000);
		var hours = parseInt(seconds / 3600);
		var minutes = parseInt((seconds / 60) % 60);
		var seconds = parseInt(seconds % 60);
		
		var output = "00";
		if (hours > 0) {
			output = timer_pad(hours, 2) +":"+ timer_pad(minutes, 2) +":"+ timer_pad(seconds, 2);
		} else if (minutes > 0) { 
			output = timer_pad(minutes, 2) +":"+ timer_pad(seconds, 2);
		} else {
			output = timer_pad(seconds, 1);
		}
		
		$('.preroll_timeleft').html(output);
		
		if (preroll_timer_current == 0 && preroll_player_called == false) {

			$.ajax({
		        type: "GET",
		        url: "<?php echo _URL;?>/ajax.php",
				dataType: "html",
		        data: {
					"case": "video",
					"do": "getplayer",
					"vid": "<?php echo $preroll_ad_player_uniq_id?>",
					"aid": "<?php echo $preroll_ad_data['id']?>",
					"player": "<?php echo $preroll_ad_player_page?>",
					"playlist": "<?php echo $playlist['list_uniq_id']?>"
		        },
		        dataType: "html",
		        success: function(data){
					$('#preroll_placeholder').replaceWith(data);
		        }
			});
			
			preroll_player_called = true;
			preroll_timer.stop();
		} else {
			preroll_timer_current -= 1000;
			if(preroll_timer_current < 0) {
				preroll_timer_current = 0;
			}
		}
	}, 1000, true);
	
	if (skippable == 1) {
		
		skippable_timer = $.timer(function(){
	
			var seconds = parseInt(skippable_timer_current / 1000);
			var hours = parseInt(seconds / 3600);
			var minutes = parseInt((seconds / 60) % 60);
			var seconds = parseInt(seconds % 60);
			
			var output = "00";
			if (hours > 0) {
				output = timer_pad(hours, 2) +":"+ timer_pad(minutes, 2) +":"+ timer_pad(seconds, 2);
			} else if (minutes > 0) { 
				output = timer_pad(minutes, 2) +":"+ timer_pad(seconds, 2);
			} else {
				output = timer_pad(seconds, 1);
			}
			
			$('.preroll_skip_timeleft').html(output);
			
			if (skippable_timer_current == 0 && preroll_player_called == false) {
				$('#preroll_skip_btn').show();
				$('.preroll_skip_countdown').hide();
				skippable_timer.stop();
			} else {
				skippable_timer_current -= 1000;
				if(skippable_timer_current < 0) {
					skippable_timer_current = 0;
				}
			}
		}, 1000, true);
		
		$('#preroll_skip_btn').click(function(){
			preroll_timer_current = 0;
			skippable_timer_current = 0;

			if (preroll_disable_stats == 0) {
				$.ajax({
			        type: "GET",
			        url: "<?php echo _URL;?>/ajax.php",
					dataType: "html",
			        data: {
						"case": "stats",
						"do": "skip",
						"aid": "<?php echo $preroll_ad_data['id']?>",
						"at": "<?php echo _AD_TYPE_PREROLL?>",
			        },
			        dataType: "html",
			        success: function(data){}
				});
			}
			return false;
		});
	}
});
</script>
<?php endif; ?>
<script type="text/javascript" src="<?php echo _URL_MOBI; ?>/js/jquery.idTabs.min.js"></script>
<script type="text/javascript" src="<?php echo _URL_MOBI; ?>/js/swipe.min.js"></script>
<script type="text/javascript" src="<?php echo _URL_MOBI; ?>/js/mobilemelody.jq.js"></script>
<?php if(_SHOW_BOOKMARK_TTIP == 1) { ?>
<script type="text/javascript" src="<?php echo _URL_MOBI; ?>/js/mobilemelody.js"></script>
<?php } ?>
<?php if($_page == 'index') : ?>
<script type="text/javascript">
// slider
var slider = new Swipe(document.getElementById('slider'), {
  speed: 200,
  auto: 3000,
  callback: function(e, pos) {
	
	var i = bullets.length;
	while (i--) {
	  bullets[i].className = ' ';
	}
	bullets[pos].className = 'on';
  }
}),
bullets = document.getElementById('position').getElementsByTagName('em'),

// tabs
tabs = new Swipe(document.getElementById('tabs'), {
  callback: function(event,index,elem) {
	setTab(selectors[index]);
  }
}),
selectors = document.getElementById('tabSelector').children;

for (var i = 0; i < selectors.length; i++) {
  var elem = selectors[i];
  elem.setAttribute('data-tab', i);
  elem.onclick = function(e) {
	e.preventDefault();
	setTab(this);
	tabs.slide(parseInt(this.getAttribute('data-tab'),10),300);
  }
}
</script>
<?php endif; ?>

<script type="text/javascript">
$(document).ready(function(){
	
	// related videos & comments tabs
	var related_selected_tab = 'related';
	if ($.cookie('mm_related_view') == 'related' || $.cookie('mm_related_view') == 'comments') {
		related_selected_tab = $.cookie('mm_related_view');
	}
	$('#related-content-nav-links').idTabs(related_selected_tab);
	
	$('#nav-link-related').click(function(){
		$.cookie('mm_related_view', 'related', { expires: 180, path: '/' });
	});
	$('#nav-link-comments').click(function(){
		$.cookie('mm_related_view', 'comments', { expires: 180, path: '/' });
	});
	
	// comments tabs
	$('#comments-nav-links').idTabs('comments-<?php echo ( ! $_comment_primary) ? 'native' : $_comment_primary; ?>');
	
	$('#nav-link-comments-native').click(function(){
		$.cookie('pm_comment_view', 'native', { expires: 180, path: '/' });
	});
	$('#nav-link-comments-facebook').click(function(){
		$.cookie('pm_comment_view', 'facebook', { expires: 180, path: '/' });
	});
	$('#nav-link-comments-disqus').click(function(){
		$.cookie('pm_comment_view', 'disqus', { expires: 180, path: '/' });
	});
});
</script>

<?php echo show_mm_ad("mobile_footer"); // footer ad ?>

<div id="rainbow"></div>

<?php if (count($langs) > 0) : ?>
<div id="lang_selector">
	<div class="btn-group dropup lang-selector" id="lang-selector">
	<a class="btn btn-link dropdown-toggle" data-toggle="dropdown" href="#"><img src="<?php echo $langs[$lang_id]['ico']; ?>" width="16" height="10" alt="<?php echo $langs[$lang_id]['title']; ?>" title="<?php echo $langs[$lang_id]['title']; ?>" align="texttop"> <?php echo $langs[$lang_id]['title']; ?> <span class="caret"></span></a>

	<ul class="dropdown-menu lang_submenu">
	<?php
	foreach ($langs as $k => $v) {
	?>
		<li><a href="#" title="<?php echo $v['title']; ?>" name="<?php echo $k; ?>" id="lang_select_<?php echo $k; ?>"><?php echo $v['title']; ?></a></li>
	<?php
	}
	?>
	</ul>
	</div>
</div>
<?php endif; ?>
<div id="footer">
	<?php
	
	if (is_array($footer_page_links))
	{
		$links_to_pages_str = '';
		
		foreach ($footer_page_links as $k => $page)
		{
			$links_to_pages_str .= '<a href="'. $page['page_url'] .'" title="'. $page['title_escaped'] .'">'. $page['title'] .'</a> | ';
		}
		$links_to_pages_str = substr($links_to_pages_str, 0, -3);
		echo $links_to_pages_str;	
	}
	
	if(_POWEREDBY == 1)
		echo "<div align='center'>".$lang['powered_by']."</div>";
		
		echo "<div class='allrights'>&copy; "._SITENAME." ".$lang['rights_reserved']."</div>";
	
	if(_ENABLE_TRACKER == 1)
		echo _HTMLCOUNTER;	
	?>
	<br />
	<a href="<?php echo get_switch_ui_url();?>" rel="nofollow"><?php echo $lang['switch_to_desktop_ui'];?></a>
</div>
</div>
</div><!--/cd-main-content-->

<?php if(_EU_WARNING == 1) : ?>
<script type="text/javascript"> 
window.cookieconsent_options = {"message":"<?php echo $lang['eu_cookie_warn_message'];?>","dismiss":"<?php echo $lang['i_agree'];?>","learnMore":"<?php echo $lang['more_info'];?>","link":null,"theme":"cookieconsent-bottom"};
</script>
<script type="text/javascript" src="<?php echo _URL;?>/js/cookieconsent.min.js"></script>
<?php endif; ?>
<?php if($page_type == 'video') : ?>
<div id="pm-social-share"></div>
<script type="text/javascript">
$(document).ready(function(){
	$("#pm-social-share").jsSocials({
		showLabel: false,
		showCount: false,
		shares: ["facebook", "twitter", "email",  "pinterest", "whatsapp"] 
	});
	$("#footer").addClass('jsSocial-loaded');
});
</script>
<?php endif; ?>
</body>
</html>