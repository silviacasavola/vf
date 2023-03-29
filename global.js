// SCROLL TO THE TO
$( document ).load(function() {
  $(window).scrollTop(0);
})


// HEADER

$("main").scroll(function () {

  if ($(window).width() >= 766.9) {
if ($("main").scrollTop() == 0) {
  $("header").css("background-color", "rgba(191, 46, 46, 0)")

} else if ($("main").scrollTop() > 0) {
  $("header").css("background-color", "rgba(191, 46, 46, 1)")
}
}
})


// MOBILE MENU
$("#hamburger-icon").click(function () {
  $("header").removeClass("menu-closed");
})

$("header").click(function() {closemenu()})
$("main").click(function() {closemenu()})
$("main").scroll(function() {closemenu()})

function closemenu() {
  $("header").addClass("menu-closed");
}
