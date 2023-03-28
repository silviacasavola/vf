// SCROLL TO THE TO
$( document ).load(function() {
  $(window).scrollTop(0);
})


// HEADER

$("main").scroll(function () {

  if ($(window).width() >= 575.8) {
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

$("header").click(function() {closemenu()})
$("main").click(function() {closemenu()})
$("main").scroll(function() {closemenu()})

function closemenu() {
  $("header").addClass("menu-closed");
}


// SAFE AREA

$(document).ready(function() {safearea()})
$( window ).resize(function() {safearea()})

function safearea() {

    if ($(window).width() <= 575.8 && $("body").scrollTop() <= 10 ) {

hamburgerPos = $("#hamburger-icon").position();
let safeArea = hamburgerPos.top;
// document.documentElement.style.setProperty('--safe-area', safeArea);
$("#sec1-link").css("top", safeArea)
} else {
  $("#sec1-link").css("top", "unset")
}
}




// FAIL: SAFE AREA
// let safeAreaInsets;

// if (window.visualViewport && window.visualViewport.safeAreaInsets) {
// ({ safeAreaInsets } = window.visualViewport);
//   document.documentElement.style.setProperty('--safe-area-inset-top', `${safeAreaInsets.top}px`);
//   document.documentElement.style.setProperty('--safe-area-inset-bottom', `${safeAreaInsets.bottom}px`);
// $("#scrittone").html({ safeAreaInsets })
// }

// let altra = getComputedStyle(document.documentElement).getPropertyValue("--sab");
// $("#scrittone2").html(altra)

// let hamburgerPos = $("#hamburger-icon").position();
// let margin = $("#hamburger-icon").css("margin");
// let safeArea = $(window).height() - hamburgerPos.top - $("#hamburger-icon").height() - margin*2;
// document.documentElement.style.setProperty('--safe-area-bottom', safeArea);
// $("#scrittone").html(safeArea)
// $("#sec1-link").css("bottom", safeArea)
