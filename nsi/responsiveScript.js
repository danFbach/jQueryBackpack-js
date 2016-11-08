$(document).ready(function () {

  $.fn.classes = function() {
      return this.prop('className');
  }

  /*  ============================= trigger for clientList items  ============================= */

  $('ul#clientList li').click(function(){
    if($(this).hasClass('js-clientCatActive')){
      $(this).toggleClass('js-clientCatActive');
    }
    else{
      $('ul#clientList li').removeClass('js-clientCatActive');
      $(this).toggleClass('js-clientCatActive');      
    }
  });

  /*  ============================= trigger for mobile/tablet dropdown menu  =============================  */

    $('li.services > ul').hide();
    $('#navBurger').click(function () {
        $('#navBurger, #nav').toggleClass('animateMenu');
    });
    if($(window).width() < 1000){
      $('li.services a').click(function () {
          $('li.services > ul.mobileDropdown').slideToggle();
          $('#nav ul').toggleClass('servicesActive');
      });
    }

    /* ============================= initialize slick-slider carousel for homepage background ============================= */

    $('.Home .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 7500,
        asNavFor: '.slider-nav'
    });
    $('.Home .slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7500,
        focusOnSelect: true,
        fade: true,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        asNavFor: '.slider-for'
    });

        /* ============================= contact link swap, tel for mobile, form for everything else ============================= */

    $('a#topContactLink, a.freeQuotes, #footerCallToAction a').click(function(e){
      e.preventDefault()
      if($(window).width() < 639 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)){
          location.href = "tel:4147614660";
      }else{
        location.href="/electricalContractorMilwaukee/contactLicensedElectrician";
      }
    });

    /* ============================= script for sticky side div ============================= *//*Run on Pageloage*/

    if($('body').classes() !== 'contactLicensedElectrician'){
      stickyFingers();
    }
    function stickyFingers(){

      var headerHeight = $('#mobileRotatingImage').outerHeight(true),
          bodyHeight = $('#largerContainer').outerHeight(true),
          lowerLimit = headerHeight + bodyHeight,
          bodyClasses = $('body').classes(),
          currentDiv = $('#aside'),
          bodyWidth = $(document).outerWidth(true);
      $(window).resize(function(){
          headerHeight = $('#mobileRotatingImage').outerHeight(true);
          bodyHeight = $('#largerContainer').outerHeight(true);
          lowerLimit = headerHeight + bodyHeight;
          bodyWidth = $(document).outerWidth(true);
      });
      if(bodyClasses !== 'Home'){
        currentDiv = $('#mainContentTop');
      }
      $(window).scroll(function(){
        if(bodyWidth > 999){
          if(bodyWidth > 1399){
              stickyDivision(currentDiv, headerHeight, lowerLimit - 30, '30px');
          }else{
              stickyDivision($('#aside'), headerHeight, lowerLimit, '0px');
          }
        }
      });
    };
    function stickyDivision(currentDiv, headerHeight, lowerLimit, asideTop){
      var yScrollPos = $(window).scrollTop(),
      divHeight = currentDiv.outerHeight(true);
      $(window).resize(function(){
        divHeight = currentDiv.outerHeight(true);
        currentDiv.removeAttr('style');
      });
      if(yScrollPos < headerHeight){
        currentDiv.css('position','absolute');
        currentDiv.css('top',asideTop);
        currentDiv.css('bottom', 'unset');
      }
      else{
        if(yScrollPos <= (lowerLimit - divHeight)){
          currentDiv.css('position','fixed');
          currentDiv.css('top', asideTop);
          currentDiv.css('bottom', 'unset');
        }else{
          currentDiv.css('position','absolute');
          currentDiv.css('bottom', '0px');
          currentDiv.css('top', 'unset');
          ;
        }
      }

    }
  });
