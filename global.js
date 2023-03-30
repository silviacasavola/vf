// SCROLL TO THE TO
$( document ).load(function() {
  $(window).scrollTop(0);
})


// HEADER

$("main").scroll(function () {

  if ($(window).width() >= 767.8) {
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


// LANGUAGE
$('[lang="eng"]').hide();

$("#itaselector").click(function () {

$("#itaselector").css("text-decoration", "underline");
$("#engselector").css("text-decoration", "none");

$('[lang="eng"]').hide();
$('[lang="it"]').show();
});

$("#engselector").click(function () {

$("#engselector").css("text-decoration", "underline");
$("#itaselector").css("text-decoration", "none");

$('[lang="it"]').hide();
$('[lang="eng"]').show();
})
