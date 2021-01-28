$(function(){
	$('.header__slider').slick({
  speed: 700,
  fade: true,
  slidesToShow: 1,
  infinite: false,
  nextArrow:'<button type="button" class="slick-next">след</button>',
  prevArrow:'<button type="button" class="slick-prev">пред</button>'

});


$('.header__btn-menu').on('click', function(){
		$('.nav-left').slideToggle();
	});

$('.close-menu').on('click', function(){
		$('.nav-left').slideToggle();
	});

});

