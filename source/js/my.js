$(document).ready(function () {

    var menu = $('.my-navbar-top');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.my-navbar-top').removeClass('navbar-static-top');
            $('.my-navbar-top').addClass('navbar-fixed-top');
        } else {
            $('.my-navbar-top').removeClass('navbar-fixed-top');
            $('.my-navbar-top').addClass('navbar-static-top');
        }


    }

    document.onscroll = scroll;

});