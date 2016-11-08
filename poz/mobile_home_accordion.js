$(document).ready(function () {
    $("#box_1 h2, #box_1 h4, #box_1 .image_box").click(function () {
        $("#box_1").toggleClass("open");
        $("#box_1 .main_content").toggleClass("show_content");
        $('#Home #mobile_container #box_1 h4.collapse, #Home #mobile_container #box_1 h4.expand').toggle();
    });
    $("#box_2 h2, #box_2 h4, #box_2 .image_box").click(function () {
        $("#box_2").toggleClass("open");
        $("#box_2 .main_content").toggleClass("show_content");
        $('#Home #mobile_container #box_2 h4.collapse, #Home #mobile_container #box_2 h4.expand').toggle();
    });
    $("#box_3 h2, #box_3 h4, #box_3 .image_box").click(function () {
        $("#box_3").toggleClass("open");
        $("#box_3 .main_content").toggleClass("show_content");
        $('#Home #mobile_container #box_3 h4.collapse, #Home #mobile_container #box_3 h4.expand').toggle();
    });
    $("#box_4 h2, #box_4 h4, #box_4 .image_box").click(function () {
        $("#box_4").toggleClass("open");
        $("#box_4 .main_content").toggleClass("show_content");
        $('#box_4 video#homepageVideo').get(0).pause();
        $('#Home #mobile_container #box_4 h4.collapse, #Home #mobile_container #box_4 h4.expand').toggle();
    });
    $("#box_5 h2, #box_5 h4, #box_5 .image_box").click(function () {
        $("#box_5").toggleClass("open");
        $("#box_5 .main_content").toggleClass("show_content");
        $('#Home #mobile_container #box_5 h4.collapse, #Home #mobile_container #box_5 h4.expand').toggle();
    });
});
