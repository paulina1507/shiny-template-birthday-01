document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown");

  const targetDate = new Date(invitationData.evento.fechaISO).getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "¡Hoy es el gran día! 🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    countdownEl.textContent = `${days} días ${hours} hrs`;
  }, 1000);
});
