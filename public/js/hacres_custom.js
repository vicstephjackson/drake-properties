( function (window, document, $) {
    "use strict";

    function hacres_fix_height() {
        $(".image-caption").css({
            'height': ( $(".home-banner").height() + 'px' )
        });
    }

    var $window = $(window),
        sticky_navigation_offset_top = $('#sticky_navigation').offset().top,
        hacres_sticky_navigation = function () {
            var scroll_top = $(window).scrollTop();

            if ( scroll_top > sticky_navigation_offset_top ) {
                $('#sticky_navigation').css({
                    'position': 'fixed',
                    'top': 0,
                    'left': 0
                });
            } else {
                $('#sticky_navigation').css({
                    'position': 'relative'
                });
            }
        };

    hacres_sticky_navigation();

    $window.scroll(function () {
        hacres_sticky_navigation();
    });

    $window.on('resize', function () {
        hacres_fix_height();
    });

    $window.on('load', function () {
        hacres_fix_height();
        $('body').addClass('loaded');

        //Preloader
        var $preloader = $('#page-preloader');
        $preloader.fadeOut();
        var $spinner = $preloader.find('.gps_ring');
        var $spinner2 = $preloader.find('.gps_ring2');
        $spinner.fadeOut();
        $spinner2.fadeOut();

        //animation and wow js
        var wow = new WOW({
            offset: 0,
            mobile: false
        });
        wow.init();

        //Home Page Section-1 carousel // Testimonials carousal
        if ( $('.testimonial-carousel').length > 0 ) {
            $('.testimonial-carousel').owlCarousel({
                margin: 30,
                responsiveClass: true,
                navigation: true,
                navigationText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                items: 1,
                autoPlay: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    900: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: false
                    }
                }
            })

        }
        //Home Page Clients Logo carousal
        if ( $('.clients-logo-carousel').length > 0 ) {
            $('.clients-logo-carousel').owlCarousel({
                margin: 29,
                responsiveClass: true,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                items: 1,
                autoPlay: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                    },
                    570: {
                        items: 2,
                        nav: true,
                    },
                    576: {
                        items: 2,
                        nav: true,
                        margin: 28
                    },
                    900: {
                        items: 5,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: false
                    }
                }
            })

        }
        //Home Page Rent/Sales carousal
        if ( $('.rent-carousel,.sale-carousel').length > 0 ) {
            $('.rent-carousel,.sale-carousel').owlCarousel({
                margin: 30,
                responsiveClass: true,
                navigation: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                items: 1,
                autoPlay: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    576: {
                        items: 2,
                        nav: true
                    },
                    768: {
                        items: 2,
                        nav: true
                    },
                    900: {
                        items: 3,
                        nav: true
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: false
                    }
                }
            })
        }
        //Double scroll carousel
        if ( $('.double-rent-carousel').length > 0 ) {
            $('.double-rent-carousel').owlCarousel({
                margin: 20,
                responsiveClass: true,
                navigation: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                items: 2,
                autoPlay: true,
                rows: true,
                rowsCount: 2,
                owl2row: true,
                owl2rowTarget: 'item',
                owl2rowContainer: '',
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    575: {
                        items: 1,
                        nav: true
                    },
                    576: {
                        items: 1,
                        nav: true
                    },
                    768: {
                        items: 1,
                        nav: true
                    },
                    900: {
                        items: 2,
                        nav: false
                    },
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 2,
                        nav: true,
                        loop: false
                    }
                }
            })
        }

        $('.grid').isotope({
            layoutMode: 'fitRows',
            itemSelector: '.grid-item',
            percentPosition: true
        });

        $('.datepicker').datepicker({
            format: 'mm/dd/yyyy'
        }).on('changeDate', function (e) {
            $('.appoinment-form-fields').formValidation('revalidateField', 'dateTo');
        });


        $('.portfolio-grid').each(function () {
            var $container = $(this);
            $container.imagesLoaded(function () {
                $container.isotope({
                    layoutMode: 'packery',
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    packery: {
                        gutter: 0
                    }
                });
            });
        });
        $('.mas-portfolio').isotope({
            layoutMode: 'masonry',
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 0
            }
        });

    });
} )(window, document, jQuery);