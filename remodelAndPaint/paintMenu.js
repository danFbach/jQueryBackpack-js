$("document").ready(function () {
    $("#menuButton").click(function () {
        $("#menutop, #menubottom").toggle();
        $("#menuButton").toggleClass("js-MenuActive");
    });
});
