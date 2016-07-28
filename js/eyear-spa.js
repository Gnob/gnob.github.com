$(document).ready(function() {
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
            
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000, 'easeInOutExpo');
            
			event.preventDefault();
		});
	});
    
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});

	// remove the focused state after click,
	// otherwise bootstrap will still highlight the link
	$("a").mouseup(function(){
		$(this).blur();
	})
    
	$('.card-wrapper').flowtype({
		minimum: 100,
		maximum: 960,
		minFont: 6,
		maxFont: 40,
		fontRatio: 19
	});

	$('.product-detail-text-wrapper').flowtype({
		minimum: 100,
		maximum: 960,
		minFont: 8,
		maxFont: 35,
		fontRatio: 33
	});

	$('.purpose-text-wrapper').flowtype({
		minimum: 100,
		maximum: 960,
		minFont: 8,
		maxFont: 35,
		fontRatio: 40
	});
	
	$('.intro-text-wrapper').flowtype({
		minimum: 100,
		maximum: 960,
		minFont: 8,
		maxFont: 40,
		fontRatio: 60
	});    
	
	$('.board-wrapper').flowtype({
		minimum: 100,
		maximum: 960,
		minFont: 6,
		maxFont: 40,
		fontRatio: 13
	});
    
    $('.card').height({
        widthRatio: 0.87,
        bodyMaxWidth: 767
    });
});
