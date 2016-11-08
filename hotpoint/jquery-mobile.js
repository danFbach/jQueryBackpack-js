/*nav burger class toggle for animation*/

$(document).ready(function () {
    $('#nav_burger').click(function () {
        $("#mainNavigation").toggleClass('animateMenu');
        $(this).toggleClass('animateMenu');
    });
    $('#hvacLI a').click(function () {
        $('#mainNavigation #hvacLI > ul').slideToggle();
    });

    $('#resourcesLI a#resourceLink').click(function () {
        $('#mainNavigation #resourcesLI > ul').slideToggle();
    });
    $('#servicesLI a').click(function () {
        $('#mainNavigation #servicesLI > ul').slideToggle();
    });
    $("[href]").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("currentPage");
        }
    });
});
