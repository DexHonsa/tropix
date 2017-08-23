$(window).scroll(function(){
		parallax();
	})
	function parallax() {

	var wScroll = $(window).scrollTop();
	console.log(wScroll);
	$('.main-bg').css('background-position','center ' + (- wScroll*.5) + 'px')

	//$('.parallax--bg').css('opacity',(1 - wScroll/1000));
	$('.main-logo').css('opacity',(1 - wScroll/400));

  $('.main-bg').css('opacity',(1 - wScroll/400));

	}
