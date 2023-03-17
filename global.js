// HEADER

$("main").scroll(function () {

  if ($(window).width() >= 600) {
if ($("main").scrollTop() == 0) {
  // $("#hidden-header").css("top", "-3.7vw");
  $("header").css("background-color", "rgba(191, 46, 46, 0)")

} else
  if ($("main").scrollTop() > 0) {
  // $("#hidden-header").css("top", "0");
  $("header").css("background-color", "rgba(191, 46, 46, 1)")
}
}

})

// MOBILE MENU
$("#hamburger-icon").click(function () {
  $("header").removeClass("menu-closed");
})

$("header").click(function () {
  $("header").addClass("menu-closed");
})

$("main").scroll(function () {
  $("header").addClass("menu-closed");
})
