let vid = [];
let mob = [];


vid[1] = {
  playerid : "player1",
  videoid :  "7q8h8DNwawc"
}

vid[2] = {
  playerid : "player2",
  videoid : "7rslTlJ6FE4"
}

mob[1] = {
  playerid : "player1",
  videoid :  "Kgav6jD_dn4"
}

mob[2] = {
  playerid : "player2",
  videoid : "_H4-gDj-aSc"
}


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var i;

let playerid;
let videoid;


function onYouTubeIframeAPIReady() {loadit()}

function loadit() {


for (i = 1; i<=2; i++) {

if ($(window).width() >= 767.8) {
playerid = vid[i].playerid;
videoid = vid[i].videoid;
} else {
playerid = mob[i].playerid;
videoid = mob[i].videoid;
}

  player = new YT.Player(playerid, {
    height: '315',
    width: '560',
    videoId: videoid,
    playerVars: {
    'suggestedQuality': 'hd1080',
    'autoplay': 1,
    'controls': 0,
    'mute' : 1,
    'showinfo' : 0,
    'playlist': videoid,
    'loop': 1,
    'modestbranding' : 1,
    'fs' : 1,
    'cc_load_policy' : 0,
    'iv_load_policy' : 3,
    'autohide' : 0},

    events: {
      'onReady': onPlayerReady,
      'onStateChange': onStateChange
    }
  })


}
}

function onStateChange(state) {
if (state.data === YT.PlayerState.ENDED) {player.playVideo()}
}

function onPlayerReady(event) {
  event.target.playVideo();
  $(".overlay").css("opacity", "0")
}
