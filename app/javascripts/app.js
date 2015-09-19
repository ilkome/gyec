"use strict";

$(function() {

	// Custom Scrollbar
	// ===============================================
	var initCustomScrollbar = (function() {
		var scrollContener = $(".js-scrollbar"),
			ScrollHeight;

		function getScrollHeight() {
			var height;
			if ($(window).height() < 650) {
				height = 350;
			} else {
				height = $(window).height() - 300
			}
			return height 
		}

		scrollContener.mCustomScrollbar({
			setHeight: getScrollHeight,
			advanced: {
				updateOnContentResize: true
			}
		});

		$(window).on('resize', function() {
			scrollContener.height(getScrollHeight);
		});
	})();


	// Easytabs plugin
	// ===============================================
	var easyTabs = $(".js-tabs").easytabs({
		panelActiveClass: "is-active",
		tabActiveClass: "is-active",
		tabs: "> div > ul > li",
		updateHash: false
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

	// Show left menu on load. Hide on scroll
	// ===============================================
	var leftShowHide = function() {
		var $left = $(".j-left");
		
		if ($(window).scrollTop() >= 300) {
			$left.removeClass("is-visible");
		} else {
			$left.addClass("is-visible");
		}
	}
	leftShowHide();


	// Scroll event
	// ===============================================
	 $(window).on('scroll', function() {
		leftMenuSpy();
		leftShowHide();
	});
});