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

function langEng() {
  $('[lang="ita"]').hide();
  $('[lang="eng"]').show();
  $("#itaselector").css("text-decoration", "none");
  $("#engselector").css("text-decoration", "underline");
}

function langIta() {
  $('[lang="eng"]').hide();
  $('[lang="ita"]').show();
  $("#engselector").css("text-decoration", "none");
  $("#itaselector").css("text-decoration", "underline");
}

function updateLang() {
  if (lang && lang === "eng") {
    langEng();
  } else {
    langIta();
  }
}

$(document).ready(updateLang);

// Update the language selection when the user clicks a button
$("#itaselector").click(function() {
  setCookie("lang", "ita", 365);
  updateLang();
});

$("#engselector").click(function() {
  setCookie("lang", "eng", 365);
  updateLang();
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
