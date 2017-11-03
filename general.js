function onFullScreen() {
  var vid = document.getElementById("videoContainer");
  var doc = document;
  var videoPlayer = document.getElementById("videoPlayer");

  if (vid.classList.contains("isFullScreen")) {
    if (doc.exitFullscreen) doc.exitFullscreen();
    else if (doc.mozCancelFullScreen) doc.mozCancelFullScreen();
    else if (doc.webkitCancelFullScreen) doc.webkitCancelFullScreen();
    else if (doc.msExitFullscreen) doc.msExitFullscreen();
    videoPlayer.setAttribute('playsinline', '');
  }
  else {
      videoPlayer.pause();
      videoPlayer.removeAttribute('playsinline');
      videoPlayer.play();
    if (vid.requestFullscreen) vid.requestFullscreen();
    else if (vid.mozRequestFullScreen) vid.mozRequestFullScreen();
    else if (vid.webkitRequestFullScreen) vid.webkitRequestFullScreen();
    else if (vid.msRequestFullscreen) vid.msRequestFullscreen();
  }

  vid.classList.toggle("isFullScreen");
}

function onPlay() {
  document.getElementById("button-4-play").remove();
  document.getElementById("videoPlayer").play();
}
