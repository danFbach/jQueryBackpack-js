$(document).ready(function() {
    var mobile = false;
    var w = $(window).width();
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        var mobile = true;
    }
    if (w > 739) {
        if (!mobile) {
            $('#fullpage').fullpage({
                navigation: true,
                navigationTooltips: ['Home', 'Marketing Program', 'Meet David', 'Mentor Program', 'Dynamic Speaker', 'Bestselling Author'],
                navigationPosition: 'left',
                continuousHorizontal: false,
                slidesNavigation: true,
                afterLoad: function() {
                    $.fn.fullpage.reBuild();
                },
                afterRender: function() {
                    $.fn.fullpage.reBuild();
                }
            });
            $('#home_section1 .fp-slidesNav ul li a').click(function(){
              $('#home_section1 .section_content #arrow_box').hide();
            });
            $('#home_section2 .fp-slidesNav ul li a').click(function(){
              $('#home_section2 .section_content #arrow_box').hide();
            });
            $('#home_section4 .fp-slidesNav ul li a').click(function(){
              $('#home_section4 .section_content #arrow_box').hide();
            });
            $('#home_section1 .fp-slidesNav ul li:last-child a').click(function(){
              $('#home_section1 .section_content #arrow_box').show();
            });
            $('#home_section2 .fp-slidesNav ul li:last-child a').click(function(){
              $('#home_section2 .section_content #arrow_box').show();
            });
            $('#home_section4 .fp-slidesNav ul li:last-child a').click(function(){
              $('#home_section4 .section_content #arrow_box').show();
            });
            $('#Home #fullpage #arrow_box').click(function(){
              $.fn.fullpage.moveSectionDown();
            });
        }
    }

    if (w > 739 || !mobile) {
        $.fn.fullpage.setAutoScrolling(true);
        $.fn.fullpage.reBuild();

    } else {
        $.fn.fullpage.setAutoScrolling(false);
    }
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 739 || !mobile) {
            $.fn.fullpage.setAutoScrolling(true);
            $.fn.fullpage.reBuild();
        } else {
            $.fn.fullpage.setAutoScrolling(false);
        }
    });
});