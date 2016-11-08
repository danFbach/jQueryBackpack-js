$(document).ready(function () {
    /*Init slick-slider*/
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        asNavFor: '.slider-for'
    });
    $('#box_1 .main_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        touchMove: true,
        adaptiveHeight: true,
        arrows: true,
        edgeFriction: 1
    });
    $('#box_2 .main_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        touchMove: true,
        adaptiveHeight: true,
        arrows: true,
        edgeFriction: 1
    });
    $('#box_4 .main_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        touchMove: true,
        adaptiveHeight: true,
        arrows: true,
        edgeFriction: 1
    });

    /*Shows activated link*/
    $("[href]").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("current_page");
        }
    });
    /*Activates Hamburger animation*/
    $('#nav_burger').click(function () {
        $(this).toggleClass('animate_menu');
    });
    /*Opens Nav menu for mobile*/
    $("#nav_burger").click(function () {
        $("button#menu_btn, nav, nav #menucontainer, .mobile#box_0 .mobile_content, .mobile#box_0 #arrow_box, #contact_david_hotlink, #menucontainer #menu_block ul#menu, #page_content").toggleClass("menu_active");
    })
});
