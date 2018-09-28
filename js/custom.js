/*global $, alert, console*/
// adjust header height
$(function () {
	"use strict";
	$("header").height($(window).height());
	$(window).resize(function () {
	    $("header").height($(window).height());
	});

    // links add active class
    $("nav li a").click(function () {

        $(this).parent().addClass("active").siblings().removeClass("active");
	});
	
	// trigger bx slider
	$(".slider").bxSlider({
		pager: false
	});

	
 // smooth scrool to Div 
	$("nav li a").click(function () {
	    $("html, body").animate({
		    scrollTop: $('#' + $(this).data('value')).offset().top
	    }, 1300);
	});
	

	
	// trigger mixitup
	$("#nice").mixItUp();
	
	// add class to button for mixitup
	$(".filter").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
			
	});
	

	    // Our Auto Slider Code
    
		(function autoSlider() {
        
			$('.clients-reviews .active').each(function () {
			   
				if (!$(this).is(':last-child')) {
					
					$(this).delay(3000).fadeOut(1000, function () {
					   
						$(this).removeClass('active').next().addClass('active').fadeIn();
						
						autoSlider();
						
					});
					
				} else {
					
					$(this).delay(3000).fadeOut(1000, function () {
						
						$(this).removeClass('active');
						
						$('.clients-reviews div').eq(0).addClass('active').fadeIn();
						
						autoSlider();
						
					});
					
				}
				
			});
			
		}());

	

});

$(document).ready(function(){

$("nav a.hidden").on("click", function(){

	$("nav ul").toggleClass('show');
});

});
	


