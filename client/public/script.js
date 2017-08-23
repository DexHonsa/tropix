		$(document).ready(function(){
			var is_mobile = false;

    if( $('#some-element').css('display')=='none') {
        is_mobile = true;
    }

    // now i can use is_mobile to run javascript conditionally

    if (is_mobile == true) {
        //Conditional script here
    }else{
			$(window).scroll(function(){
					parallax();
				})
				function parallax() {

				var wScroll = $(window).scrollTop();
				$('.main-bg').css('background-position','center ' + (- wScroll*.5) + 'px')

				//$('.parallax--bg').css('opacity',(1 - wScroll/1000));
				$('.main-logo').css('opacity',(1 - wScroll/400));

			  $('.main-bg').css('opacity',(1 - wScroll/400));

				}
		}
	});
