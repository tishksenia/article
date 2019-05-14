var searchFormModule = (function() {
    var toggle_button = document.querySelector('.menu button.icon-search1.glyph');
    var search_form = document.querySelector('.header__search-form');
    var header_link = document.querySelector('.menu a.header-link');

	return {
		addEventListeners: function() {
            toggle_button.onclick = function() {
                if(header_link.style.display != "none") {
                    header_link.style.display = "none";
                    search_form.style.display = "flex";
                    toggle_button.classList.add('active');
                }
                else {
                    header_link.style.display = "inline";
                    search_form.style.display = "none";
                    toggle_button.classList.remove('active');
                }
                
            };
		},
		init: function() {
			this.addEventListeners();
		}
	};
})();

searchFormModule.init();