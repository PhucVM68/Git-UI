/*============= Auto Slideshow ======================*/

(function() {

    function Slideshow(element) {
        this.el = document.querySelector(element);
        this.init();
    }

    Slideshow.prototype = {
        init: function() {
            this.wrapper = this.el.querySelector(".slider-wrapper");
            this.slides = this.el.querySelectorAll(".slide");
            this.previous = this.el.querySelector(".slider-previous");
            this.next = this.el.querySelector(".slider-next");
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;

            this.action();
            this.stopStart();
        },
        _slideTo: function(slide) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;

            for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                if (slide !== currentSlide) {
                    slide.style.opacity = 0;
                }
            }
        },
        action: function() {
            var self = this;
            self.timer = setInterval(function() {
                self.index++;
                if (self.index == self.slides.length) {
                    self.index = 0;
                }
                self._slideTo(self.index);

            }, 2000);
        },

        stopStart: function() {
            var self = this;
            self.el.addEventListener("mouseover", function() {
                clearInterval(self.timer);
                self.timer = null;

            }, false);
            self.el.addEventListener("mouseout", function() {
                self.action();

            }, false);
        }

    };

    document.addEventListener("DOMContentLoaded", function() {

        var slider = new Slideshow("#main-slider");

    });
})();

$(document).ready(function() {

    //back to top
    var btt = $('.back-to-top');

    btt.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    $(window).on('scroll', function() {
        //console.log('scroll');
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();

        if (top > height) {

            if (!btt.is(':visible')) {
                btt.show();
            }
        } else {
            btt.hide();

        }

        //menu scroll
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("main-header").className = "scroll-header";
            document.getElementById("logo").className = "img-scroll";
            document.getElementById("my-menu").className = "menu-scroll";
            document.getElementById("tsc-box-search box").className = "box-search-scroll";
            document.getElementById("btn-search").className = "vm-btn-scroll";
            document.getElementById("tsc-ip-search").className = "search-scroll";

        } else {
            document.getElementById("main-header").className = "main-header";
            document.getElementById("logo").className = "img-responsive";
            document.getElementById("my-menu").className = "main-menu";
            document.getElementById("tsc-box-search box").className = "box-search";
            document.getElementById("btn-search").className = "vm-btn-search";
            document.getElementById("tsc-ip-search").className = "vm-search";
        }
    });
    /*=========== # Show - Hide phone Footer# ============ */
    //click show
    $('#plus-contac').on('click', function(event) {
        $('#phone-img').show(1000);
    });
    $('#plus-contac').on('click', function(event) {
        $('#plus-hiden').show();
    });
    $('#plus-contac').on('click', function(event) {
        $('#plus-contac').hide();
    });

    //click hide
    $('#plus-hiden').on('click', function(event) {
        $('#plus-contac').show();
    });
    $('#plus-hiden').on('click', function(event) {
        $('#phone-img').hide(1000);
    });
    $('#plus-hiden').on('click', function(event) {
        $('#plus-hiden').hide();
    });

    /*=============== #Onclick Search ================ */
    //click show

    //hiện thanh tìm kiếm 1 - chưa có scroll
    $('#btnSearch-hide').on('click', function(event) {
        $('#BoxSearch').show();
    });
    $('#btnSearch-hide').on('click', function(event) {
        $('.box-search').show();
    });

    $('#btnSearch-hide').on('click', function(event) {
        $('#BoxSearch').show();
    });
    $('#btnSearch-hide').on('click', function(event) {
        $('#tsc-ip-search').show();
    });
    $('#btnSearch-hide').on('click', function(event) {
        $('#btn-search').show();
    });
    $('#btn-search').on('click', function(event) {
        $('#my-menu').show();
    });
    $('#btn-search').on('click', function(event) {
        $('#btnSearch-hide').show();
    });

    //click hide
    $('#btnSearch-hide').on('click', function(event) {
        $('#btnSearch-hide').hide();
    });
    $('#btnSearch-hide').on('click', function(event) {
        $('#my-menu').hide();
    });
    $('#btn-search').on('click', function(event) {
        $('#tsc-box-search').hide();
    });
    $('#btn-search').on('click', function(event) {
        $('#tsc-ip-search').hide();
    });
    $('#btn-search').on('click', function(event) {
        $('#btn-search').hide();
    });
	
	if($(window).width() <= 839){
        $('#my-menu').mmenu(); 
		console.log("thành công");
    }
    else{
       
    }
}); 