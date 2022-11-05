$(function () {
  'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.hk-offcanvas').toggleClass('open')
  })
})



        $(document).ready(function() {
            $('li').click(function() {
                $('li.navbar-item.sec_active').removeClass("sec_active");
                $(this).addClass("sec_active");
            });
        });
   
   
   // BEGIN: 04 Wow
    var wow = function() {
        if($('.wow').length){
            wow = new WOW( {
                mobile: true  // Turn on/off WOW.js on mobile devices.
            }).init();
        }
    };
	
	
	
	new WOW().init();
    // END: Wow Js
	

			$(document).ready(function() {
				var progressPath = document.querySelector('.progress-wrap path');
				var pathLength = progressPath.getTotalLength();

				progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
				progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
				progressPath.style.strokeDashoffset = pathLength;
				progressPath.getBoundingClientRect();
				progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

				var updateProgress = function() {
					var scroll = $(window).scrollTop();
					var height = $(document).height() - $(window).height();
					var progress = pathLength - (scroll * pathLength / height);
					progressPath.style.strokeDashoffset = progress;
				}

				updateProgress();
				$(window).scroll(updateProgress);

				var offset = 50;
				var duration = 550;

				jQuery(window).on('scroll', function() {
					if(jQuery(this).scrollTop() > offset) {
						jQuery('.progress-wrap').addClass('active-progress');
					} else {
						jQuery('.progress-wrap').removeClass('active-progress');
					}
				});

				jQuery('.progress-wrap').on('click', function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
			});
		
		
		
				   
$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();
  $('.slider-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay:true,
	autoplay: 2500,
        smartSpeed: 1500,
		touchDrag: true,
		mouseDrag: true,
		
		autoplayHoverPause: true,
		
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
})
});

$("#product").select2( {
	placeholder: "Select product",
	allowClear: true
	} );