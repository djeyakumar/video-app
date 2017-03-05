/*!
 * MOBILE MELODY v2.6
 * Developed by: PHPSUGAR (www.phpsugar.com) / support@phpsugar.com
 * Copyright: (c) 2004-2013 PhpSugar.com. All rights reserved.
 */
var state = 'hidden';
function showhide(layer_ref) {
	if (state == 'visible') {
	state = 'hidden';
	}
	else {
	state = 'visible';
	}
	if (document.all) { //IS IE 4 or 5 (or 6 beta)
	eval( "document.all." + layer_ref + ".style.visibility = state");
	}
	if (document.layers) { //IS NETSCAPE 4 or below
	document.layers[layer_ref].visibility = state;
	}
	if (document.getElementById && !document.all) {
	maxwell_smart = document.getElementById(layer_ref);
	maxwell_smart.style.visibility = state;
	}
}
if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)) {
   var addToHomeConfig = {
	  animationIn:'bubble',      // Animation In
	  animationOut:'drop',      // Animation Out
	  lifespan:40000,            // The popup lives X seconds
	  expire: 10,               // The popup is shown only once every 20 minutes
	  startDelay: 500,
	returningVisitor: true,
	  touchIcon:true,
	  message:'<strong>Hey!</strong> Bookmark our site to your <strong>%device</strong> homescreen! Access it anytime, anywhere. Press `%icon`.'
   };

	document.write('<link rel="stylesheet" href="'+JS_MOBI_URL+'/js/add2home.css">');
	document.write('<script type="application\/javascript" src="'+JS_MOBI_URL+'/js/add2home.js"><\/script>');
}