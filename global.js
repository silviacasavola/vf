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


// SAFE AREA
// Get the safe area insets for the current viewport
// const { safeAreaInsets } = window.visualViewport;

// Set the safe area insets as CSS variables
document.documentElement.style.setProperty('--safe-area-inset-top', `${safeAreaInsets.top}px`);
// document.documentElement.style.setProperty('--safe-area-inset-right', `${safeAreaInsets.right}px`);
document.documentElement.style.setProperty('--safe-area-inset-bottom', `${safeAreaInsets.bottom}px`);
// document.documentElement.style.setProperty('--safe-area-inset-left', `${safeAreaInsets.left}px`);

// In this example, we're using the setProperty() method to set CSS variables on the document.documentElement element. We're using the safe area insets retrieved from the visualViewport object to set the values of these variables.
// Once you've set these variables, you can use them in your CSS as you would any other variable, like this:
// .my-element {
//   position: absolute;
//   bottom: var(--safe-area-inset-bottom);
}
