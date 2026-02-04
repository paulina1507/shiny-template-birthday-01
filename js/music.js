const music = document.getElementById("music");
music.src = invitationData.musica;

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });
