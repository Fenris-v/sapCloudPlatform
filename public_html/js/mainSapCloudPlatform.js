$(document).ready(function () {

    // строка блок функционал

    var secrviceDescrToggle = 0,
        lastButtonPressed = false;


    $('.services__item').each(function(index, value) {

        //console.log(index + ' ' + value);

        var thatTransport = $(this).siblings('.services__desc');

        $(this).on('click', function () {
            var thatDescr = $(this).find('.services__itemContentDescr').html();

            if (!secrviceDescrToggle) {
                thatTransport.html(thatDescr).slideDown();
                secrviceDescrToggle = 1;
            } else {

                if (lastButtonPressed === index){
                    console.log('уже нажимали!');
                    thatTransport.html('').slideUp();
                    secrviceDescrToggle = 0;
                } else {
                    thatTransport.html(thatDescr);
                }

            }


            lastButtonPressed = index;

        });
    });



    // $('.services__item').on('click', function (event) {
    //
    //     var thatDescr = $(this).find('.services__itemContentDescr').html();
    //
    //     if (!secrviceDescrToggle ){
    //         $('.services__desc').html(thatDescr).slideDown();
    //
    //         thatItemObj = $(this);
    //         secrviceDescrToggle = 1;
    //
    //         console.log (thatItemObj);
    //
    //         console.log ($(this));
    //
    //
    //
    //     } else if (secrviceDescrToggle && (thatItemObj === $(this))){
    //
    //         // console.log (typeof $(this));
    //         // console.log (typeof thatItemObj);
    //         //
    //
    //         console.log (thatItemObj);
    //
    //         console.log ($(this));
    //
    //
    //         $('.services__desc').html(thatDescr);
    //
    //         thatItemObj = $(this);
    //
    //     } else {
    //         $('.services__desc').html(thatDescr).slideUp();
    //
    //         secrviceDescrToggle = 0;
    //
    //         console.log ('11');
    //     }
    //
    // });



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
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 2,
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
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 1,
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
