$(function (){
	$('.thumbnails a').on('click', function(e) {
		e.preventDefault();
		var src = $(this).data('full');
		var decp = $(this).data('desc');
		$('.overlay').removeClass('hidden');
		$('.modalContent img').attr('src',src);
		$('.modalContent p').text(decp);
		$('.current').removeClass('current');
		$(this).addClass('current');
	});

	$('a.next').on('click', function (e){
		e.preventDefault();
		var $current = $('.current');
		if($current.is(":last-child")) {
			$('.thumbnails a:first-child').click();
		}
		else {
			$current.next().trigger('click');
		}
	
	});

	$('a.prev').on('click', function(e){
		e.preventDefault();
		var $current = $('.current');
		if($current.is(":first-child")) {
			$('.thumbnails a:last-child').click();
		} else {
			$current.prev().trigger('click');
		}
	});
	

	$('a.close').on('click', function() {
		$('.overlay').addClass('hidden');
	});

});