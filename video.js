var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: '5iC5DF6dWlQ',
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
  });
}

function onStateChange(state) {
if (state.data === YT.PlayerState.ENDED) {
player.loadVideoById({
videoId: '5iC5DF6dWlQ'
});
}
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  $("#overlay").css("opacity", "0")
}
