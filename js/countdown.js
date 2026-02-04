document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date(invitationData.evento.fechaISO);

  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    minutes: document.getElementById("cd-minutes"),
    seconds: document.getElementById("cd-seconds"),
    container: document.getElementById("countdown")
  };

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    // 🎉 Cuando llega el día
    if (diff <= 0) {
      els.container.innerHTML = `
        <div class="today">
          🎂 ¡HOY ES EL DÍA! 🎉
        </div>
      `;
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    updateValue(els.days, d);
    updateValue(els.hours, h);
    updateValue(els.minutes, m);
    updateValue(els.seconds, s);
  }

  function updateValue(el, value) {
    if (!el) return;

    const newValue = String(value).padStart(2, "0");

    if (el.textContent !== newValue) {
      el.textContent = newValue;

      // 🎈 POP animation
      el.classList.remove("pop");
      void el.offsetWidth; // reinicia animación
      el.classList.add("pop");
    }
  }

  // inicia
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
