var navigationModule = (function() {
	var nav_button = document.querySelector('.menu .icon-menu');
	var nav_container = document.querySelector('.nav-container');
	var submenus = document.querySelectorAll('.submenu');
	var links = document.querySelectorAll('.item-with-submenu > a');

	return {
		addEventListeners: function() {
			nav_button.addEventListener('click', function(event) {
				nav_container.style.visibility = 'visible';
			});
			nav_container.addEventListener('mouseleave', function(event){
				if(event.toElement.className != "") {
					setTimeout(function() {
						nav_container.style.visibility = 'hidden';
						//making sure that every .submenu is gone when menu is hidden
						for(var i = 0; i < submenus.length; i++) { 
							if(submenus[i].style.visibility == 'visible') {
								submenus[i].style.visibility = 'hidden';
							}
						}	
					});
				}
			});

			for(var i = 0; i < links.length; i++) {
				(function(i) {
					links[i].addEventListener('mouseenter', function(event) {
						submenus[i].style.visibility = 'visible';
						if(i > 0) {
							submenus[i - 1].style.visibility = 'hidden';
							submenus[i + 1].style.visibility = 'hidden';
						}
					});
					links[i].addEventListener('mouseleave', function(event) {
						if(event.relatedTarget.className != 'nav-container' && event.toElement.className != 'submenu') {
							submenus[i].style.visibility = 'hidden';
						}
					});
				})(i);
			}
		},
		init: function() {
			this.addEventListeners();
		}
	};
})();

navigationModule.init();