"use strict";

$(function() {

	// Easytabs plugin
	// ===============================================
	var easyTabs = $(".js-tabs").easytabs({
		panelActiveClass: "is-active",
		tabActiveClass: "is-active",
		tabs: "> div > ul > li"
	});


	// Left menu scroll to block
	// ===============================================
	var leftMenuScroll = (function() {
		var $menuLink = $(".j-leftMenu").find("a"),
			$menuEl = $menuLink.parent();

		$menuLink.on("click", function(e) {
 			e.preventDefault();
			
			var $this = $(this),
				$thisEl = $this.parent(),
				href = $this.attr("href"),
				blockId = $(href).offset().top;

			$menuEl.removeClass("is-active");
			$thisEl.addClass("is-active");

			$("html, body").stop().animate({
				scrollTop: blockId
			}, 300);
		});
	})();


	// Spy left menu
	// ===============================================
	var leftMenuSpy = function() {
		var $watchBlock = $('.js-menu-watch');

		$watchBlock.each(function() {
			var $this = $(this),
				blockId = $this.attr('id'),
				$menu = $(".j-leftMenu"),
				$menuEl = $menu.find("li"),
				$menuLink = $menuEl.find("a");
			
			if ($(window).scrollTop() >= $this.offset().top - $(window).height() / 2) {
				$menuEl.removeClass("is-active");
				$menu.find('a[href=#'+ blockId +']').parent().addClass('is-active');
			}
		});
	};

	 $(window).on('scroll', function() {
		leftMenuSpy();
	});
});