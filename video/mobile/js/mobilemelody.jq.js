/*!
 * MOBILE MELODY
 * Developed by: PHPSUGAR (www.phpsugar.com) / support@phpsugar.com
 * Copyright: (c) 2004-2015 PhpSugar.com. All rights reserved.
 */
addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
function hideURLbar(){
window.scrollTo(0,1);
}

$(document).ready(function(){
	$('#pm-comment-form').hide();
	$('#c_comment_txt').click(function() { $('#pm-comment-form').slideDown(); });
	
	$("#c_submit").live("click",function(){
		
		$("#mycommentspan").html('').hide();
		
		var b = $("#c_user_id").val();
        var e = $("#c_vid").val();
        var d = $("#c_comment_txt").val();
        var f = $("#c_username").val();
        var c = $("#captcha").val();
		
		$.post( JS_MOBI_URL+"/comment.php", { username: f, captcha: c, vid: e, user_id: b, comment_txt: d },
				function(data){
					if(data.cond == true)
					{
						$("#myform").slideUp("normal", function() {  
							$("#mycommentspan").html(data.msg).show();
							
							//	preview comment
							if(data.preview == true)
							{
								$("#be_the_first").hide();
								$("#preview_comment").html(data.html).fadeIn(700);
							}
						});
						
					}
					else if(data.cond == false)
					{
						$("#c_submit").show();
						$("#mycommentspan").html("<ul class=\"alerts-warning\"><li>"+ data.msg + "</li></ul>").show();
					}
					
				},"json"
			 );
      return false;

	});	
	/* CLICKABLE AREAS */	
	$('#featured li').click(function(){ 
		location.href = $(this).find("a").attr("href");
	});
	$('#video_listing li').click(function(){ 
		location.href = $(this).find("a").attr("href");
	});
	$('#subcategory_listing li').click(function(){ 
		location.href = $(this).find("a").attr("href");
	});
	$('.maximizer').click(function(){
		$(this).parents("li").children('#subcategory_listing').slideToggle('fast');
		return false; //ensures no anchor jump
	});
	$('#slider li').click(function(){ 
		location.href = $(this).find("a").attr("href");
	});
	
	/*SHOW MORE VIDEOS*/
	$('.more').live("click",function() {
	var ID = $(this).attr("id");
	var CASE = $(".case").attr("id");
	var EXTRADATA = $(".extra_data").attr("id");
	if(ID) {
		$("#more"+ID).find("#loader").css('display', 'block');
		$.ajax({
		type: "POST",
		url: JS_MOBI_URL+"/ajax.php",
		data: "lastpos=" + ID +"&case=" + CASE + "&extradata=" + EXTRADATA,
		cache: false,
		success: function(html){
		$("#video_listing").append(html);
		$("#art_listing").append(html);
		$("#more"+ID).remove(); // removing old more button
		}
	});
	} else {
	$(".morebox").html('');// no results
	}
	return false;
	});
    if ($('#register-form').length) {
        if ( ! $('input[name="website"]').is(":visible")) {
            $('input[name="website"]').val(Math.floor(Date.now() / 1000));
        }
    }
	});
	
	$(function() {
	$('.morec').live("click",function() {
	var ID = $(this).attr("id");
	var CASE = $('.morecbox').children(".case").attr("id");
	var EXTRADATA = $('.morecbox').children(".extra_data").attr("id");
	if(ID) {
		$("#morec"+ID).find("#loader").css('display', 'block');
		$.ajax({
		type: "POST",
		url: JS_MOBI_URL+"/ajax.php",
		data: "lastpos=" + ID +"&case=" + CASE + "&extradata=" + EXTRADATA,
		cache: false,
		success: function(html){
		$("#video_comments").append(html);
		$("#morec"+ID).remove(); // removing old more button
		}
	});
	} else {
	$(".morecbox").html('');// no results
	}
	return false;
	});	


	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.item-has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});

});