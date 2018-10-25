//2018-06-23 16:25:46 Phucvm
//menu mobile -
(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function() {
                var mediasize = 1000;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function($) {
    $(document).ready(function() {
        $("#cssmenu").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);

//show hide menu vanilla 
//https://gomakethings.com/how-to-show-and-hide-elements-with-vanilla-javascript/
//2018-06-23 16:25:46 Phucvm

var show = function(elem) {
    elem.style.display = 'block';
};
var hide = function(elem) {
    elem.style.display = 'none';
};
//class toggle
var toggle = function(elem) {
    // If the element is visible, hide it
    if (window.getComputedStyle(elem).display === 'block') {
        hide(elem);
        return;
    }
    // Otherwise, show it
    show(elem);
};
// Listen for click events
document.addEventListener('click', function(event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;
    // Prevent default link behavior
    event.preventDefault();
    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;
    // Toggle the content
    toggle(content);
}, false);

//scroll header
$(document).ready(function(){
	$(window).on('scroll', function() {
        console.log('scroll đã xảy ra');
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();

     

        //menu scroll
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("main-header").className = "scroll-header";  
            document.getElementById("logo").className = "img-scroll";
            document.getElementById("hidden-menu").className = "menu-scroll";
			document.getElementById("btn-search").className = "vm-btn-scroll";  
			
			
            document.getElementById("tsc-timkiem").className = "box-search-scroll";
            // document.getElementById("btn-search").className = "vm-btn-scroll";
            // document.getElementById("tsc-ip-search").className = "search-scroll";
			

        } else {
            document.getElementById("main-header").className = "main-header";
            document.getElementById("logo").className = "img-responsive";
            document.getElementById("hidden-menu").className = "main-menu qq";
			document.getElementById("btn-search").className = "search-menu";
           document.getElementById("tsc-timkiem").className = "search-scroll_";
            document.getElementById("btn-search-rm").className = "remove-btn_";
			// document.getElementById("tsc-mySearch").className = "tsc-mySearch";
			
            // document.getElementById("tsc-ip-search").className = "vm-search";
        }
    });
	 $('#btn-search').on('click', function(event) {
        $('#tsc-timkiem').show();
		$('#btnSearch-hide-rm').show();
		$('#hidden-menu').hide();
		$('#btn-search').hide();
		$('.remove-x').css("display", "block");
		$('remove-btn_').css("display", "block");
		
		
    });
	 $('#btn-search-rm').on('click', function(event) {
        $('#btn-search').show();
		$('#hidden-menu').show();
	    $('#btn-search-rm').hide();
	    $('#tsc-timkiem').hide();
	   console.log(2)
    });
})