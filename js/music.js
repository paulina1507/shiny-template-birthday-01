document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("music");
  const gate = document.getElementById("audioGate");

  if (!music || !gate || !invitationData?.musica) return;

  music.src = invitationData.musica;
  music.loop = true;
  music.volume = 0.5;
  music.preload = "auto";
  music.muted = true;

  gate.addEventListener("click", () => {
    music.muted = false;
    music.play().catch(() => {});
    gate.remove(); // quita la pantalla
  });
});
