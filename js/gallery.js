document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery");
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("galleryModalImg");
  const closeBtn = document.getElementById("galleryClose");

  if (!galleryContainer || !modal || !modalImg) return;

  // 🖼️ Renderiza la galería
  invitationData.galeria.forEach((src) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto del evento";

    item.appendChild(img);
    galleryContainer.appendChild(item);

    item.addEventListener("click", () => openGalleryModal(src));
  });

  // 🔍 Abre modal
  function openGalleryModal(src) {
    modalImg.src = src;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  // ❌ Cierra modal
  function closeGalleryModal() {
    modal.classList.remove("show");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  // Fondo cierra
  modal.addEventListener("click", closeGalleryModal);

  // Evita cerrar al tocar la imagen
  modalImg.addEventListener("click", (e) => e.stopPropagation());

  // Botón ✕
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeGalleryModal();
    });
  }

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeGalleryModal();
  });
});
