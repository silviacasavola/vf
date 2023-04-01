let vid = ["5iC5DF6dWlQ", "27FswS3KESk", "-YBP-D6vQIA"]


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var i;

function onYouTubeIframeAPIReady() {

  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: vid[0],
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

function onStateChange(state) {
if (state.data === YT.PlayerState.ENDED) {
for (i = 0; i<=2; i++) {
player.loadVideoById({
videoId: vid[i]
});
}
}
}

function onPlayerReady(event) {
  event.target.playVideo();
  $(".overlay").css("opacity", "0")
}
