// SCROLL TO THE TOP
window.onbeforeunload = function () {
        window.scrollTo(0,0);
};

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
$(window).scroll(function() {closemenu()})

function closemenu() {
  $("header").addClass("menu-closed");
}


// LANGUAGE

// Check if a language preference has already been set
var lang = getCookie("lang");

if (lang && lang === "eng") {
  $('[lang="it"]').hide();
  $('[lang="eng"]').show();
  $("#itaselector").css("text-decoration", "none");
  $("#engselector").css("text-decoration", "underline");
} else {
  // Set default to Italian
  $('[lang="eng"]').hide();
  $('[lang="it"]').show();
  $("#itaselector").css("text-decoration", "underline");
  $("#engselector").css("text-decoration", "none");

  // Update the language cookie to Italian as the default
  setCookie("lang", "it", 365);
}

// Update the language selection when the user clicks a button
$("#itaselector").click(function () {
  $('[lang="eng"]').hide();
  $('[lang="it"]').show();
  $("#itaselector").css("text-decoration", "underline");
  $("#engselector").css("text-decoration", "none");
  setCookie("lang", "it", 365);
});

$("#engselector").click(function () {
  $('[lang="it"]').hide();
  $('[lang="eng"]').show();
  $("#itaselector").css("text-decoration", "none");
  $("#engselector").css("text-decoration", "underline");
  setCookie("lang", "eng", 365);
});

// Function to set a cookie

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  var cookieString = name + "=" + value + expires + "; path=/; SameSite=Lax; Secure";
  document.cookie = cookieString;
}

// Function to get the value of a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
