$("document").ready(function() {

/* Get some heights*/

  var windowHeight = $(window).outerHeight();
  var navHeight = $("#titlebar").outerHeight();
  var menuHeight = $("#menu").outerHeight();
  var seriesHeight = $(".series, .title").outerHeight();

  var show = $("section.show");

  var bio = $("section.bio");

  $("#content").css("padding-top", navHeight).css("padding-bottom", menuHeight);

  $(".banner").css("height", windowHeight);

  var header = $("#titlebar");

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= seriesHeight) {
          header.removeClass('site-header').addClass("page-header");
      } else {
          header.removeClass("page-header").addClass('site-header');
      }
  });


/*  show.click(function() {
    $(this).children().children("section.bio").addClass("open");
  });

  bio.click(function() {
    $(this).removeClass("open");
  });

*/

});