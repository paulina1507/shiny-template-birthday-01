document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("music");
  const gate = document.getElementById("audioGate");
  const toggleBtn = document.getElementById("audioToggle");

  if (!music || !gate || !toggleBtn || !invitationData?.musica) return;

  // Configuración del audio
  music.src = invitationData.musica;
  music.loop = true;
  music.volume = 0.5;
  music.preload = "auto";
  music.muted = true;

  const setButtonState = (isPlaying) => {
    toggleBtn.setAttribute("aria-pressed", String(isPlaying));
    toggleBtn.setAttribute(
      "aria-label",
      isPlaying ? "Pausar música" : "Reproducir música"
    );
    toggleBtn.classList.toggle("is-playing", isPlaying);
  };

  // Estado inicial
  setButtonState(false);

  // 🎶 Gate inicial
  gate.addEventListener("click", async () => {
    try {
      music.muted = false;
      await music.play();
      setButtonState(true);
    } catch (e) {
      setButtonState(false);
    }
    gate.remove();
  });

  // ▶️⏸️ Botón flotante
  toggleBtn.addEventListener("click", async () => {
    if (music.paused) {
      try {
        music.muted = false;
        await music.play();
        setButtonState(true);
      } catch (e) {
        setButtonState(false);
      }
    } else {
      music.pause();
      setButtonState(false);
    }
  });
});
