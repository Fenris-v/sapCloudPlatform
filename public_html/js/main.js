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
            loop: true,
            margin: 10,
            navText : ["",""],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 1,
                    nav: false,
                },
                1000: {
                    items: 1,
                    nav: true,
                }
            }
        }
    );
});