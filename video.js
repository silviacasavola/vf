let vid = [];

vid[0] = {
  playerid : "player1",
  videoid :  "5iC5DF6dWlQ"
}

vid[1] = {
  playerid : "player2",
  videoid : "27FswS3KESk"
}

vid[2] = {
  playerid : "player3",
  videoid : "20jXbEhHjA4"
}

vid[3] = {
  playerid : "player4",
  videoid : "5iC5DF6dWlQ"
}

vid[4] = {
  playerid : "player5",
  videoid : "27FswS3KESk"
}

vid[5] = {
  playerid : "player6",
  videoid : "20jXbEhHjA4"
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
for (i = 0; i<=5; i++) {
playerid = vid[i].playerid;
videoid = vid[i].videoid;

  player = new YT.Player(playerid, {
    height: '360',
    width: '640',
    videoId: videoid,
    playerVars: {
    'autoplay': 1,
    'controls': 0,
    'mute' : 1,
    'showinfo' : 0,
    'loop' : 1,
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
if (state.data === YT.PlayerState.ENDED) {loadit()}
}

function onPlayerReady(event) {
  event.target.playVideo();
  $(".overlay").css("opacity", "0")
}
