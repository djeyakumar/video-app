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