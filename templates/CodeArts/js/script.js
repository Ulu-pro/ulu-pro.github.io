$(window).ready(function() {
    'use strict';

    /*--------------------------
     Preloader
    ---------------------------- */
    setTimeout(function() {
        $('.page-loader').addClass('loaded');
    }, 1000);

    /*--------------------------
     Counter Block
    ---------------------------- */
    var counterblock = 0;
    $(window).scroll(function() {
        if ($('#counter').length == 0) return;
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (counterblock == 0 && $(window).scrollTop() > oTop) {
            $('.counter__number').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
            counterblock = 1;
        }

    });

    /*--------------------------
     Fixed Header
    ---------------------------- */
    var nav = $(".header__top");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
    });

    /*--------------------------
     Input Add Classes
    ---------------------------- */
    $(".input-bg input").focus(function() {
        $(this).parent().addClass('focus');

    }).blur(function() {
        $(this).parent().removeClass('focus');
    });

    $(".input-bg input").change(function() {
        if ($(this).val().trim().length) {
            $(this).parent().addClass('length');
        } else {
            $(this).parent().removeClass('length');
        }
    });

    $("textarea, input").change(function() {
        if ($(this).val().trim().length) {
            $(this).addClass('length');
        } else {
            $(this).removeClass('length');
        }
    });

    /*--------------------------
     Burger Click Function
    ---------------------------- */
    $(".burger").click(function() {
        $(this).toggleClass("active");
        $('nav').toggleClass("active");
        $('body').toggleClass("over_hide");
    });

    /*--------------------------
     HomePage Slider Top
    ---------------------------- */
    $('.slider__top-header').slick({
        infinite: true,
        swipeToSlide: true,
        dots: true,
        prevArrow: $('.slider__top .prev-button'),
        nextArrow: $('.slider__top .next-button'),
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1
    });

    /*--------------------------
     Portfolio HomePage Items Carousel
    ---------------------------- */
    $('.port__slider').slick({
        infinite: true,
        swipeToSlide: true,
        dots: true,
        prevArrow: $('.portfolio .prev-button'),
        nextArrow: $('.portfolio .next-button'),
        centerMode: true,
        centerPadding: '255px',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 1200,
                settings: {
                    centerMode: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 870,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.port__cont__slider').slick({
        infinite: true,
        swipeToSlide: true,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                centerMode: false,
                slidesToShow: 2
            }
        },
            {
                breakpoint: 575,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    /*--------------------------
     Blog HomePage Items Carousel
    ---------------------------- */
    $('.bloghome__slider').slick({
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 4,
        prevArrow: $('.bloghome .prev-button'),
        nextArrow: $('.bloghome .next-button'),
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*--------------------------
     User Reviews HomePage Items Carousel
    ---------------------------- */
    $('.reviewshome__slider').slick({
        infinite: true,
        slidesToShow: 2,
        swipeToSlide: true,
        prevArrow: $('.reviewshome .prev-button'),
        nextArrow: $('.reviewshome .next-button'),
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 870,
            settings: {
                slidesToShow: 1
            }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*--------------------------
     Clients HomePage Items Carousel
    ---------------------------- */
    $('.clients__slider').slick({
        infinite: true,
        slidesToShow: 6,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 5
            }
        },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    /*--------------------------
     Project Carousel
    ---------------------------- */
    $('.project-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.project-nav'
    });
    // Project Nav
    $('.project-nav').slick({
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1,
        asNavFor: '.project-slider',
        arrows: false,
        dots: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    /*--------------------------
     Tabs
    ---------------------------- */
    $('.tab-link').click(function() {
        var tabID = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('#tab-' + tabID).addClass('active').css('transform', 'translateX(0px)').siblings().removeClass('active').css('transform', 'translateX(50px)');
    });

    /*--------------------------
     Filter Portfolio Page
    ---------------------------- */
    $('.grid-portfolio').isotope({
        itemSelector: '.portfolio-item',
    });

    $('.filter-button').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid-portfolio').isotope({
            filter: filterValue
        });
        $('.filter-button li').removeClass('active');
        $(this).addClass('active');
    });


    /*--------------------------
     DropMenu
    ---------------------------- */
    $(".sub").on('click', function() {
        var $item = $(this);
        $item.toggleClass('open').find(".submenu").slideToggle('fast');
        $item.siblings().removeClass('open').find(".submenu").slideUp('fast');
    });

    const scrollbarWidth = window.innerWidth - document.body.offsetWidth
    $('[data-fancybox]').fancybox({
        afterLoad: function() {
            $(".header__top.scrolled").css('right', (scrollbarWidth / 2));
        },
        afterClose: function() {
            $(".header__top.scrolled").css('right', '0');
        }
    });


    /*--------------------------
     Team Info Load In Modal
    ---------------------------- */
    $('.team-c').on("click", function() {
        var teamname = $(this).data("name");
        var teamspecialty = $(this).data("specialty");
        var teamimg = $(this).data("img");
        var teamtext = $(this).data("text");
        var designing = $(this).data("designing");
        var managment = $(this).data("managment");
        var marketing = $(this).data("marketing");
        var development = $(this).data("development");
        $('.modal-team-img').html(`<img src="${teamimg}" alt="${teamname}">`);
        $('.modal-team-name').html(teamname);
        $('.modal-team-specialty').html(teamspecialty);
        $('.modal-team-text').html(teamtext);
        $('.modal-team-progressbar .label.t1').html(`${designing}%`);
        $('.modal-team-progressbar .progress-bar.t1').css("width", designing + '%');
        $('.modal-team-progressbar .label.t2').html(`${managment}%`);
        $('.modal-team-progressbar .progress-bar.t2').css("width", managment + '%');
        $('.modal-team-progressbar .label.t3').html(`${marketing}%`);
        $('.modal-team-progressbar .progress-bar.t3').css("width", marketing + '%');
        $('.modal-team-progressbar .label.t4').html(`${development}%`);
        $('.modal-team-progressbar .progress-bar.t4').css("width", development + '%');
    })

    /*--------------------------
     Home & 404 Pages particlesJS FlyDots
    ---------------------------- */
    if ($('#js-particles').length !== 0) {

        particlesJS(
            'js-particles', {
                'particles': {
                    'number': {
                        'value': 10
                    },
                    'color': {
                        'value': ['#94cf14', '#5d1eb2', '#ff7300']
                    },
                    'shape': {
                        'type': 'circle'
                    },
                    'opacity': {
                        'value': 1,
                        'random': false,
                        'anim': {
                            'enable': false
                        }
                    },
                    'size': {
                        'value': 3,
                        'random': true,
                        'anim': {
                            'enable': false,
                        }
                    },
                    'line_linked': {
                        'enable': false
                    },
                    'move': {
                        'enable': true,
                        'speed': 2,
                        'direction': 'none',
                        'random': true,
                        'straight': false,
                        'out_mode': 'out'
                    }
                },
                'interactivity': {
                    'detect_on': 'canvas',
                    'events': {
                        'onhover': {
                            'enable': false
                        },
                        'onclick': {
                            'enable': false
                        },
                        'resize': true
                    }
                },
                'retina_detect': true
            });
    }

    /* Email Full Validate Method */
    $.validator.addMethod("emailfull", function(value, element) {
        return this.optional(element) || /^([\w\.\-\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/i.test(value);
    });

    /* Send form */
    if ($('.ajax-form').length) {
        $('.ajax-form').each(function() {
            $(this).validate({
                rules: {
                    email: {
                        emailfull: true
                    },
                    terms: "required",
                },
                errorLabelContainer: ".form-errors",
                errorElement: "li",
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "resources/mail.php",
                        data: $(form).serialize(),

                        success: function() {
                            $('.btn-submit input').val('Sending..');
                            $('.btn-submit').removeClass('btn-active').addClass('sending btn');
                            setTimeout(function() {
                                $('.btn-submit').removeClass('sending btn').addClass('btn-active success');
                                $('.btn-submit input').val('Message send');
                                setTimeout(function() {
                                    $('.btn-submit').removeClass('success');
                                    $('.btn-submit input').val('Send feedback');
                                    $(".ajax-form").get(0).reset();
                                    $(".ajax-form input, .ajax-form textarea").removeClass('length', 'valid');
                                }, 3000);
                            }, 3000);
                        },

                        error: function() {
                            $('.btn-submit input').val('Sending..');
                            $('.btn-submit').removeClass('btn-active').addClass('sending btn');
                            setTimeout(function() {
                                $('.btn-submit').removeClass('sending btn').addClass('btn-active error');
                                $('.btn-submit input').val('Something wrong');
                                setTimeout(function() {
                                    $('.btn-submit').removeClass('error');
                                    $('.btn-submit input').val('Send feedback');
                                }, 3000);
                            }, 3000);
                        }
                    });
                }
            });
        });
    }

    /* Google Map Style/Function */
    function createMap() {
        var opts = {
            center: {
                lat: 40.7452422,
                lng: -73.9909956,
            },
            zoom: 12,
            styles: [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 40
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }],
            maxZoom: 20,
            minZoom: 0,
            mapTypeId: 'roadmap',
        };

        opts.clickableIcons = true;
        opts.disableDoubleClickZoom = false;
        opts.draggable = true;
        opts.keyboardShortcuts = true;
        opts.scrollwheel = true;

        var setControlOptions = function(key, enabled, position, style, mapTypeIds) {
            opts[key + 'Control'] = enabled;
            opts[key + 'ControlOptions'] = {
                position: google.maps.ControlPosition[position],
                style: google.maps.MapTypeControlStyle[style],
                mapTypeIds: mapTypeIds
            };
        };

        setControlOptions('fullscreen', false, 'DEFAULT', '', null);
        setControlOptions('mapType', false, 'DEFAULT', 'DEFAULT', ["roadmap", "satellite", "terrain"]);
        setControlOptions('rotate', false, 'DEFAULT', '', null);
        setControlOptions('scale', false, '', '', null);
        setControlOptions('streetView', false, 'DEFAULT', '', null);
        setControlOptions('zoom', false, 'DEFAULT', '', null);
        var map = new google.maps.Map(document.getElementById('map'), opts);

        (function() {
            var markerOptions = {
                map: map,
                position: {
                    lat: 40.7452422,
                    lng: -73.9909956,
                }
            };

            markerOptions.icon = {
                path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
                scale: 1.6363636363636363636363636364,
                anchor: new google.maps.Point(11, 22),
                fillOpacity: 1,
                fillColor: '#94cf14',
                strokeOpacity: 0
            };

            var marker = new google.maps.Marker(markerOptions);

            var infowindow = new google.maps.InfoWindow({
                marker: marker,
                content: '<div class="qm-info" style="text-align:center;font-size: 14px;">2005 Stokes Isle Apt. 896, <br>Shop Plaza 10010, USA</div><div id="gm-close-btn"><svg class="icon-svg icon-svg-close"><use xlink:href="img/symbol/sprite.svg#close"></use></svg></div>'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
            google.maps.event.addListener(infowindow, 'domready', function() {

                var closeBtn = $('#gm-close-btn').get();

                google.maps.event.addDomListener(closeBtn[0], 'click', function() {
                    infowindow.close();
                });
            });
        })();
    }
    if ($('#map').length == 0) return;
    google.maps.event.addDomListener(window, 'load', createMap);
});
jQuery(document).ready(function($) {

    $('#color-switcher .bottom').click(function () {
        $('#color-switcher').toggleClass('active');
    });

    setTimeout(function () {
        $('#color-switcher').removeClass('active');
    }, 2000);

//Color Option
    $("#color-switcher .default" ).click(function(){
        $(".page-loader").removeClass("loaded").addClass("loaded2");
        setTimeout(function() {
            $("#color-change").attr("href", "css/default.css" );
            $('.page-loader').addClass('loaded').removeClass('loaded2');
        }, 1200);
        return false;
    });
    $("#color-switcher .pink" ).click(function(){
        $(".page-loader").removeClass("loaded").addClass("loaded2");
        setTimeout(function() {
            $("#color-change").attr("href", "css/pink.css" );
            $('.page-loader').addClass('loaded').removeClass('loaded2');
        }, 1200);
        return false;
    });
    $("#color-switcher .blue" ).click(function(){
        $(".page-loader").removeClass("loaded").addClass("loaded2");
        setTimeout(function() {
            $("#color-change").attr("href", "css/blue.css" );
            $('.page-loader').addClass('loaded').removeClass('loaded2');
        }, 1200);
        return false;
    });
    $("#color-switcher .orange" ).click(function(){
        $(".page-loader").removeClass("loaded").addClass("loaded2");
        setTimeout(function() {
            $("#color-change").attr("href", "css/orange.css" );
            $('.page-loader').addClass('loaded').removeClass('loaded2');
        }, 1200);
        return false;
    });
    $("#color-switcher .purple" ).click(function(){
        $(".page-loader").removeClass("loaded").addClass("loaded2");
        setTimeout(function() {
            $("#color-change").attr("href", "css/purple.css" );
            $('.page-loader').addClass('loaded').removeClass('loaded2');
        }, 1200);
        return false;
    });
    $("#color-switcher .red" ).click(function(){
        $(".page-loader").removeClass("loaded").addClass("loaded2");
        setTimeout(function() {
            $("#color-change").attr("href", "css/red.css" );
            $('.page-loader').addClass('loaded').removeClass('loaded2');
        }, 1200);
        return false;
    });

})