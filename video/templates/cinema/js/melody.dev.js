$(document).ready(function() {
  $('#pm-addthis').scrollToFixed({ 
	  preFixed: function() { $('.addthis_floating_style').css({ 'opacity':'0.7' }); },
	  postFixed: function() { $('.addthis_floating_style').css({ 'opacity':'1.0' }); }
  });
  $("[rel=fadeparty]").click(function() {
	  //$("#wrapper").css('opacity','0.6');
	  $("#wrapper").fadeTo("fast", 0.33);
  });
});

$(document).ready(function () {
    $("#sticky").scrollToFixed();
    $("#back-top").scrollToFixed({
        bottom: 0,
        limit: 900,
        preFixed: function () {
            $(this).css("display", "none")
        },
        postFixed: function () {
            $(this).fadeIn(200)
        }
    });
    $(".btn").click(function () {
        var a = $(this);
        a.button("");
        setTimeout(function () {
            a.button("reset")
        }, 900)
    });
    $("input:file").uniform()
});
$(document).ready(function () {
    $("#back-top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false
    })
});
$(document).ready(function () {
    $("body").on("touchstart.dropdown", ".dropdown-menu", function (a) {
        a.stopPropagation()
    });
    $("a.video-thumb").hover(function () {
        $(this).addClass("video")
    }, function () {
        $(this).removeClass("video")
    })
});
$(document).ready(function () {
    $("#lights-overlay").css("height", $(document).height()).hide();
    $(".lightOn").click(function () {
        $("#lights-overlay").toggle();
        if ($("#lights-overlay").is(":hidden")) {
            $(this).html(pm_lang.lights_off).removeClass("lightOff")
        } else {
            $(this).html(pm_lang.lights_on).addClass("lightOff")
        }
        return false
    })
});
$(document).ready(function () {
    $("#register-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            username: {
                required: true,
                minlength: 2
            },
            pass: {
                required: true,
                minlength: 5
            },
            confirm_pass: {
                required: true,
                minlength: 5,
                equalTo: "#register-form #pass"
            },
            imagetext: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        messages: {
            name: {
                required: pm_lang.validate_name,
                minlength: pm_lang.validate_name_long
            },
            username: {
                required: pm_lang.validate_username,
                minlength: pm_lang.validate_username_long
            },
            pass: {
                required: pm_lang.validate_pass,
                minlength: pm_lang.validate_pass_long
            },
            confirm_pass: {
                required: pm_lang.validate_pass,
                minlength: pm_lang.validate_pass_long,
                equalTo: pm_lang.validate_confirm_pass_long
            },
            imagetext: {
                required: pm_lang.validate_captcha
            },
            email: pm_lang.validate_email,
            agree: pm_lang.validate_agree
        },
        errorClass: "error"
    })
});
$(function () {
    var a = $.cookie("list_grid");
    if (a == "g") {
        $("#pm-grid").addClass("grid")
    } else {
        $("#pm-grid").removeClass("grid")
    }
});
$(document).ready(function () {
    $("#grid").click(function () {
        $("#pm-grid").fadeOut(200, function () {
            $(this).addClass("grid").fadeIn(200);
            $.cookie("list_grid", "g")
        });
        return false
    });
    $("#list").click(function () {
        $("#pm-grid").fadeOut(200, function () {
            $(this).removeClass("grid").fadeIn(200);
            $.cookie("list_grid", null)
        });
        return false
    })
});
$('#pm-vc-playlists').click(function() { $('#pm-vc-playlists-content').slideToggle('fast', function() {}); });

$("#pm-vc-report").click(function () {
    $("#pm-vc-report-content").slideToggle("fast", function () {})
});
$("#pm-vc-share").click(function () {
    $("#pm-vc-share-content").slideToggle("fast", function () {})
});
$("#pm-vc-embed").click(function () {
    $("#pm-vc-embed-content").slideToggle("fast", function () {})
});
$("#pm-vc-description").click(function () {
    $("#pm-vc-description-content").slideToggle("fast", function () {})
});
$("#pm-vc-email").click(function () {
    $("#pm-vc-email-content").slideToggle("fast", function () {
        $("#pm-vc-embed-content").slideUp()
    })
});
$("#c_comment_txt").click(function () {
    $("#pm-comment-form").slideDown()
});
$(document).ready(function () {

    $("li.dropdown-submenu").find("ul.dropdown-menu").css('visibility','hidden');
        $('li.dropdown-submenu').hover(function(){

        $(this).find("ul:first").css('visibility','visible');
        // if ( ! $('ul', this).hasClass('dropdown-menu')) {
        //  //$('ul', this).stop().delay(700).slideDown('fast');
        //  $('ul', this).stop().doTimeout( 'hover', 350, 'slideDown', '' );
        // }

    }, function(){
        $(this).find("ul").css('visibility','hidden');

        // if ( ! $('ul', this).hasClass('dropdown-menu')) {
        //  //$('ul', this).stop().slideUp(150);
        //  $('ul', this).stop().doTimeout( 'hover', 0, 'slideUp', 200 );
        // }
    });

    // $(".pm-browse-ul-subcats ul.hidden_li").hide();
    // $(".pm-browse-ul-subcats li.topcat").hover(function () {
    //     if (!$("ul", this).hasClass("visible_li")) {
    //         $("ul", this).stop().doTimeout("hover", 300, "slideDown", "fast")
    //     }
    // }, function () {
    //     if (!$("ul", this).hasClass("visible_li")) {
    //         $("ul", this).stop().doTimeout("hover", 0, "slideUp", 100)
    //     }
    // })
});
$(".ajax-modal").click(function (b) {
    b.preventDefault();
    var a = $(b.target).attr("href");
    if (a.indexOf("#") == 0) {
        $(a).modal("open")
    } else {
        $.get(a, function (c) {
            $('<div class="modal" id="uploadForm">' + c + "</div>").modal({
                keyboard: true
            })
        })
    }
});
$(document).ready(function () {
    $("#to_modal").live("click", function () {
        var a = $(this).attr("url");
        var b = $(this).attr("data-controls-modal");
        $("#" + b).load(a)
    })
});
$("#tags_suggest").tagsInput({
    removeWithBackspace: true,
    height: "auto",
    width: "auto",
    defaultText: "",
    minChars: 3,
    maxChars: 30
});
$("#tags_upload").tagsInput({
    removeWithBackspace: true,
    height: "auto",
    width: "auto",
    defaultText: "",
    minChars: 3,
    maxChars: 30
});
$("[rel=tooltip]").tooltip();
$("#myModal").modal({
    keyboard: true,
    show: false
});
$(document).ready(function () {
    var a = document.createElement("input"),
        b = jQuery("#comment");
    if ("placeholder" in a) {
        b.attr("placeholder", jQuery(".comment-textarea label").remove().text())
    }
    jQuery("#comment-form-identity").hide();
    jQuery("#commentform .form-submit").hide();
    b.css({
        height: "120px"
    }).one("focus", function () {
        jQuery("#comment-form-identity").slideDown();
        jQuery("#commentform .form-submit").slideDown()
    })
});
$(document).ready(function () {
    $(".lang_selected").click(function () {
        var a = $(".lang_submenu");
        if (a.css("display") == "block") {
            a.css("display", "none");
            $(this).removeClass();
            $(this).addClass("lang_selected")
        } else {
            a.css("display", "block");
            $(this).removeClass();
            $(this).addClass("lang_selected_onclick")
        }
    });
    $("a[id^='lang_select_']").each(function () {
        var b = parseInt(this.name);
        var a = $("#lang_select_" + b);
        a.click(function () {
            $.post(MELODYURL2 + "/index.php", {
                select_language: 1,
                lang_id: b
            }, function () {
                window.location.reload()
            }, "")
        })
    })
});
$(document).ready(function() {
    $("#pm_sources").change(function () {
        var str = $("select option:selected").attr('value');
        $("#pm_sources_ex").text(str);
    })
    .change();
	var $el, $ps, $up, totalHeight;
	$(".text-exp .show-now").click(function() {
	  totalHeight = 0;
	  $el = $(this);
	  $p = $el.parent();
	  $up = $p.parent();
	  $ps = $up.find("p:not('.show-more')");
	  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
	  $ps.each(function() {
		totalHeight += $(this).outerHeight()
	  });
	  // Set height to prevent instant jumpdown when max height is removed
	  totalHeight += 90;
	  $up.css({"height":$up.height(), "max-height":9999, "overflow-y":"auto"}).animate({"height":totalHeight});
	  $p.fadeOut();
	  return false;
	});
});
$(function () {
    var a = document.createElement("input");
    if (("placeholder" in a) == false) {
        $("[placeholder]").focus(function () {
            var b = $(this);
            if (b.val() == b.attr("placeholder")) {
                b.val("").removeClass("placeholder");
                if (b.hasClass("password")) {
                    b.removeClass("password");
                    this.type = "password"
                }
            }
        }).blur(function () {
            var b = $(this);
            if (b.val() == "" || b.val() == b.attr("placeholder")) {
                if (this.type == "password") {
                    b.addClass("password");
                    this.type = "text"
                }
                b.addClass("placeholder").val(b.attr("placeholder"))
            }
        }).blur().parents("form").submit(function () {
            $(this).find("[placeholder]").each(function () {
                var b = $(this);
                if (b.val() == b.attr("placeholder")) {
                    b.val("")
                }
            })
        })
    }
});

function SelectAll(a) {
    document.getElementById(a).focus();
    document.getElementById(a).select()
};