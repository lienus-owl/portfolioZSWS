//защита от спама
$('div.for-name').hide();
$(document).ready(function() {
	$('.foto-slider').owlCarousel({
		nav:true, //Отключил навигацию
		mouseDrag:false,
		touchDrag:true,
		navText: false,
		dots: false,
		pagination:true,
		autoplay:false, //Автозапуск слайдера
		smartSpeed:300, //Время движения слайда
		autoplayTimeout:4000, //Время смены слайда
		margin:10,
	    loop:true,
	    autoWidth:true,
	    items:5
		
	});
});
// TODO: Add any custom classes with 'position: fixed' to the selector below
var fixedCls = '.navbar-fixed-top,.navbar-fixed-bottom, .calc-fixed';
var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
$.fn.modal.Constructor.prototype.setScrollbar = function () {
	oldSSB.apply(this);
	if (this.bodyIsOverflowing && this.scrollbarWidth)
		$(fixedCls).css('padding-right', this.scrollbarWidth);
}

var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
$.fn.modal.Constructor.prototype.resetScrollbar = function () {
	oldRSB.apply(this);
	$(fixedCls).css('padding-right', '');
}
$(function() {
   $('.nav a').click(function(event) {
	event.preventDefault();
	var href=$(this).attr('href');
	var target=$(href);
	var top=target.offset().top;
	$('html,body').animate({
	  scrollTop: top -0
	}, 1000);
});
});
