$(document).ready(function () {
    var has_run = false;
    has_run = run_fullpage($(window).width());
    $(window).resize(function () {
        w = $(window).width();
        if (has_run === false) {
            has_run = run_fullpage(w);
        }
    });
    function run_fullpage(w) {
        if (w > 639) {
            /*VARS TO HOLD INDEXS OF SLIDES FOR EACH SECTION. THEREFORE, ADDITIONAL SECTION WITH SLIDES = NEW VAR*/
            //var slide0Index = 1,
            //slide1Index = 1,
            //slide2Index = 1,
            //sliding = false
            $('#fullpage').fullpage({
                navigation: true,
                navigationPosition: 'left',
                slidesNavigation: true
                /*IF YOU WOULD LIKE AUTO HORIZONTAL SCROLL DISABLE, EVERYTHING PAST HERE, ASSIDE FROM CLOSING }); MUST BE REMOVED OR COMMENTED OUT*/
                //onLeave: function (index, nextIndex, direction) {
                //    /*FIRST SECTION WITH SLIDES*/
                //    if (index == /*INDEX # OF SECTION WITH SLIDES*/ 2 && !sliding) {
                //        if (direction == 'down' && slide0Index < /*# OF SLIDES*/ 5) {
                //            sliding = true;
                //            $.fn.fullpage.moveSlideRight();
                //            slide0Index++;
                //            return false;

                //        } else if (direction == 'up' && slide0Index > /*ALWAYS 1*/ 1) {

                //            sliding = true;
                //            $.fn.fullpage.moveSlideLeft();
                //            slide0Index--;
                //            return false;
                //            /*IF SLIDE YOU HAVE REACHED THE FIRST OR LAST SLIDE, YOU NOW SCROLL VERTICALLY*/
                //        } else {
                //            sliding = false;
                //        }
                //        /*NEXT SECTION*/
                //    } else if (index == 3 && !sliding) {
                //        if (direction == 'down' && slide1Index < 2) {
                //            sliding = true;
                //            $.fn.fullpage.moveSlideRight();
                //            slide1Index++;
                //            return false;
                //        } else if (direction == 'up' && slide1Index > 1) {
                //            sliding = true;
                //            $.fn.fullpage.moveSlideLeft();
                //            slide1Index--;
                //            return false;
                //        } else {
                //            sliding = false;
                //        }
                //        /*NEXT SECTION*/
                //    } else if (index == 5 && !sliding) {
                //        if (direction == 'down' && slide2Index < 2) {
                //            sliding = true;
                //            $.fn.fullpage.moveSlideRight();
                //            slide2Index++;
                //            return false;
                //        } else if (direction == 'up' && slide2Index > 1) {
                //            sliding = true;
                //            $.fn.fullpage.moveSlideLeft();
                //            slide2Index--;
                //            return false;
                //        } else {
                //            sliding = false;
                //        }
                //    } else if (sliding) {
                //        return false;
                //    }
                //},
                //afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
                //    sliding = false;
                //}
            });
            return true;
        }
    }
});
