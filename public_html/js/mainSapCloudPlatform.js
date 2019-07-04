$('#hamburger').on('click', function(event) {
    $('#mobileMenu').toggle().animate({'right': '0'}, 700);
    $('#mobileMenu').toggleClass('menuScrolled');
    $(this).toggleClass('mobileMenu_activated');
    $('body').toggleClass('bodyNoScrolled');
});

$('#mobileMenu a.has_child').on('click', function(e) {
    e.preventDefault();
    $(this).next( ".topNav_2levelList_m").slideToggle( "slow", function() {
        // Animation complete.
    });
});

$(document).ready(function () {

    $("#slider__container").owlCarousel(
        {
            dots: false,
            loop: true,
            margin: 10,
            navText : ["",""],
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                600: {
                    items: 2,
                    nav: false,
                },
                1000: {
                    items: 3,
                    nav: false,
                }
            }
        }
    );

    $("#time__slider__container").owlCarousel(
        {
            dots: false,
            loop: true,
            margin: 10,
            navText : ["",""],
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                600: {
                    items: 3,
                    nav: false,
                },
                1000: {
                    items: 3,
                    nav: true,
                }
            }
        }
    );

    $("#thanks__slider__container").owlCarousel(
        {
            dots: false,
            loop: true,
            margin: 10,
            navText : ["",""],
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                600: {
                    items: 2,
                    nav: true,
                },
                1000: {
                    items: 2,
                    nav: true,
                }
            }
        }
    );
});
