// SAFE AREA

function safearea() {

  // SAFE AREA
  let safeAreaInsets;

// if (window.visualViewport && window.visualViewport.safeAreaInsets) {
  ({ safeAreaInsets } = window.visualViewport);
//   document.documentElement.style.setProperty('--safe-area-inset-top', `${safeAreaInsets.top}px`);
//   document.documentElement.style.setProperty('--safe-area-inset-bottom', `${safeAreaInsets.bottom}px`);
  $("#scrittone").html({ safeAreaInsets })
// }

let altra = getComputedStyle(document.documentElement).getPropertyValue("--sab");
$("#scrittone2").html(altra)

// let safeAreaInsets = $("#hamburger-icon").position();
//
// $("#scrittone").html(safeAreaInsets.top)
// $("#sec1-link").css("top", safeAreaInsets.top)
}

// HEADER

$("main").scroll(function () {

  if ($(window).width() >= 600) {
if ($("main").scrollTop() == 0) {
  $("header").css("background-color", "rgba(191, 46, 46, 0)")

} else if ($("main").scrollTop() > 0) {
  $("header").css("background-color", "rgba(191, 46, 46, 1)")
}
}

safearea()
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

$(document).ready(safearea())
