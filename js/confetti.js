document.addEventListener("DOMContentLoaded", () => {
  const layer = document.getElementById("confettiLayer");
  if (!layer) return;

  const colors = ["#ff6f91", "#ffc75f", "#845ec2", "#4ffbdf", "#ff9671"];

  // Crear confeti
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 1.5 + "s";
    confetti.style.animationDelay = Math.random() * 0.5 + "s";

    layer.appendChild(confetti);
  }

  // Quitar confeti y activar animaciones suaves
  setTimeout(() => {
    layer.remove();
    document.body.classList.add("ambient-animations");
  }, 3000);
});
