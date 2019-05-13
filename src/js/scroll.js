var scrollBehaviorModule = (function() {
	var article = document.querySelector('.article-head + .article');
	var article_top_border = article.getBoundingClientRect().top;
	var scroll_content = document.querySelector('.scroll-content');
	var top_content = document.querySelector('.top-page-content');
	return {
		addEventListeners: function() {
			window.addEventListener('scroll', function() {
				if(window.pageYOffset > article_top_border) {
					top_content.style.display = "none";
					scroll_content.style.display = "flex";
				}
				if(window.pageYOffset <= article_top_border) {
					top_content.style.display = "flex";
					scroll_content.style.display = "none";
				}
			});
		},
		init: function() {
			this.addEventListeners();
		}
	};
})();

scrollBehaviorModule.init();