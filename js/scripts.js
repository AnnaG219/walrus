$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#initially-showing").slideUp();
    $("#initially-hidden").slideDown();
  });
  $(".clickable3").click(function() {
    $("#polar-showing").slideUp();
    $("#polar-hidden").slideDown();
  });
  $(".clickable2").click(function() {
    $("#initially-showing").slideDown();
    $("#initially-hidden").slideUp();
  });
  $(".clickable4").click(function() {
    $("#polar-showing").slideDown();
    $("#polar-hidden").slideUp();
  });
});
