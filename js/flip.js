const pages = document.querySelectorAll(".page");
let current = 0;

// AVANZAR ➜
document.querySelectorAll(".next-page").forEach(btn => {
  btn.addEventListener("click", () => {
    if (current < pages.length - 1) {
      pages[current].classList.remove("active");
      pages[current].classList.add("exit-left");

      current++;

      pages[current].classList.add("active");
    }
  });
});

// REGRESAR ⬅️
document.querySelectorAll(".prev-page").forEach(btn => {
  btn.addEventListener("click", () => {
    if (current > 0) {
      pages[current].classList.remove("active");

      current--;

      pages[current].classList.remove("exit-left");
      pages[current].classList.add("active");
    }
  });
});
