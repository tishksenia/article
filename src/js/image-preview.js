var imagePreviewModule = (function() {
    var buttons = document.querySelectorAll('.image-content button.icon-enlarge2');
    var images = document.querySelectorAll('.image-content img');
    var content_divs = document.querySelectorAll('.widest-content-piece, .wide-content-piece');
    var container = document.querySelector('.container');
    var article_container = document.querySelector('.article-container');
    console.log(container);

	return {
		addEventListeners: function() {                
            for(var i = 0; i < images.length; i++) {

                
                (function(i) {
                    //enlarge icon will appear on "mouseenter" and disappear on "mouseleave"
                    images[i].addEventListener('mouseenter', function(event) {
						buttons[i].style.opacity = '1';
                    });
                    images[i].addEventListener('mouseleave', function(event) {
                        if(!(event.relatedTarget.tagName == 'BUTTON'))
                            buttons[i].style.opacity = '0';
                    });
                    //new div will be created and inserted if image(or button) were clicked
					images[i].addEventListener('click', function(event) {
                        event.preventDefault();
                        this.copyUp(i);
                    }.bind(imagePreviewModule));
                    buttons[i].addEventListener('click', function(event) {
                        event.preventDefault();
                        this.copyUp(i);
                    }.bind(imagePreviewModule));
                })(i);
            }
            //if div was created (i.e. it is on top of the page), destroy it on scroll
            window.addEventListener('scroll', function() {
                if(this.new_content_div) {
                    this.removeContainer();   
                }
            }.bind(imagePreviewModule));
        },
        removeContainer: function() {
            this.new_content_div.style.opacity = '0';
            setTimeout(function() {
                this.new_content_div.remove();
            }.bind(imagePreviewModule), 400);
        },
        copyUp: function(i) {
            var copy = content_divs[i].cloneNode(true);
            copy.className += ' enlarged';
            container.insertBefore(copy, article_container);

            //save .wide/widest-content-piece.enlarged (that was created and inserted) inside the module
            this.new_content_div = document.querySelector('.widest-content-piece.enlarged, .wide-content-piece.enlarged');
            
            //if something other than image was clicked, destroy div
            this.new_content_div.addEventListener('click', function(event) {
                event.preventDefault();
                if(event.target.tagName != 'IMG') {
                    this.removeContainer();                        
                }
            }.bind(imagePreviewModule));

            setTimeout(function() {
                this.new_content_div.style.opacity = '1';
            }.bind(imagePreviewModule), 400);
        },
		init: function() {
			this.addEventListeners();
		}
	};
})();

imagePreviewModule.init();