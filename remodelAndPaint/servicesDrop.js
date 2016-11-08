$("document").ready(function () {
    var w = $(window).width();
    if (w <= 639) { 
        $("#servicesBtnMobile, #menutop #services").click(function () {
            $("#secondaryNav").toggle();
            $("#references2, #servicesBtnMobile, #Heading, #textBody, #Home #textBody, #content").toggleClass("js-ServiceActive");
        });
    }
});
