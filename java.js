const playBtn = document.getElementById("playBtn");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸️";
  } else {
    audio.pause();
    playBtn.innerText = "▶️";
  }
}