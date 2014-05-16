$("document").ready(function() {

  var navHeight = $("#navbar").outerHeight();

  var menuHeight = $("#menu").outerHeight();

  var show = $("section.show");

  var bio = $("section.bio");

  $("#content").css("padding-top", navHeight).css("padding-bottom", menuHeight);

/*  show.click(function() {
    $(this).children().children("section.bio").addClass("open");
  });

  bio.click(function() {
    $(this).removeClass("open");
  });

*/

});