"use strict";

$(function() {
	$(".js-tabs").easytabs({
		panelActiveClass: "is-active",
		tabActiveClass: "is-active",
		tabs: "> div > ul > li"
	});


	$(".l-menu").find("a").on("click", function(e) {
		e.preventDefault();
		$(".l-menu").find("li").removeClass("is-active");
		$(this).parent().addClass("is-active");
		
		var href = $(this).attr("href"),
			id = $(href).offset().top

		$("html, body").stop().animate({
			scrollTop: id
		}, 300);
	});


	 $(window).on('scroll', function() {
		$('.js-menu-watch').each(function() {
			if($(window).scrollTop() >= $(this).offset().top - $(window).height() / 2) {
				var id = $(this).attr('id');
				$(".l-menu").find("li").removeClass("is-active");
				$(".l-menu").find('a[href=#'+ id +']').parent().addClass('is-active');
			}
		});
	});
});