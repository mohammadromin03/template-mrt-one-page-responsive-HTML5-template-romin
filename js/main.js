$("document").ready(function(){
	
	 $("ul#mynav").onePageNav();	
		jQuery(function($) {
			$('ul#mynav a').bind('click', function(event) {
				var $anchor = $(this);
				$('html').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 80
				}, 1000);
				event.preventDefault();
			});
		});    
		var web  = $(".weblift");
			$(window).scroll(function(){		
				if($(this).scrollTop() > 100){
					web.addClass("lift");
				}else{
					web.removeClass("lift");
				}		
			});
		web.click(function(){
			$("html, body").animate({scrollTop:0}, 'slow')
		});
		
});	