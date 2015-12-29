"use strict";

$(function() {

	// Custom Scrollbars
	// ===============================================
	(function() {
	
		// Scrollbar for elements
		$(".js-scrollbar").mCustomScrollbar();

		
		// Scrollbar for requir
		var scrollbarRequir = $(".js-scrollbar-requir");
		scrollbarRequir.mCustomScrollbar({
			setHeight: setHeightSBarRequir,
			advanced: {
				updateOnContentResize: true
			}
		});


		$(window).on('resize', function() {
			scrollbarRequir.height(setHeightSBarRequir);
		});


		// Set height to scrollbar requir box 
		function setHeightSBarRequir() {
			var windowsHeight = $(window).height(),
				$box = $(".js-requir"),
				boxHeight = $box.height(),
				scrollbarHeight = scrollbarRequir.height(),
				boxPaddingHeight = boxHeight - scrollbarHeight,
				minHeight = 650,
				boxElementsHeight = 0,
				boxFullHeight;
				
				scrollbarRequir.find(".js-requir-el").each(function() {
					boxElementsHeight = boxElementsHeight + $(this).outerHeight(true);
				});
				boxFullHeight = boxElementsHeight + boxPaddingHeight;

			if ( windowsHeight < minHeight ) {
				return 300;
			}

			if ( windowsHeight > minHeight ) {
				if ( windowsHeight < boxFullHeight ) {
					return windowsHeight - boxPaddingHeight;
				} else {
					return boxElementsHeight;
				}
			}

		}
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
			
			if ( $(window).scrollTop() >= $this.offset().top - $(window).height() / 2 ) {
				$menuEl.removeClass("is-active");
				$menu.find('a[href=#'+ blockId +']').parent().addClass('is-active');
			}
		});
	};


	// Show left menu on load. Hide on scroll
	// ===============================================
	var leftShowHide = function() {
		var $left = $(".j-left");
		
		if ( $(window).scrollTop() >= 300 ) {
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