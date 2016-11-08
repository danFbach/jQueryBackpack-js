$(document).ready(function(){
  $(".navBurger").click(function(){
    $(this).removeClass('js-preload');
    $(".navBurger span").toggleClass("js-active");
    $("#topHeaderNav").slideToggle(500);
  });
  $('.mailingListJoin').click(function(){
    $('.mailingListJoin').toggleClass('js-openEMail');
  })
  $('#emailMailingSubmit').click(function(){
    $('.mailingListJoin').removeClass('js-openEMail')
  });
  $('.searchIcon').click(function(){
    $(this).removeClass('js-preload');
    $('.searchIcon span').toggleClass('js-active');
    $('input#search, .productSearch, .bottomHeader, #closeSearch, #bottomHeaderNav, .productSearch input.box2').toggleClass('js-openSearch');
    $('.productSearch.js-openSearch input.box').focus();
  });
  if($('#bgWrap .wrap').width() <= 640){
    $(".CheckoutProcess input#gc_codeSubmitBtn").attr("value", "APPLY"); 
    $(".CheckoutProcess input#gc_COzipsubmit").attr("value", "CALCULATE");
    $('a.gc_GuestCheckout').text('CHECK OUT AS GUEST');    
  }
  $('a.cta').click(function(e){
    e.preventDefault()
    if($(window).width() < 639 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)){
        location.href = "tel:4147614660";
    }else{
      location.href="/warehouseContact";
    }
  });
});
