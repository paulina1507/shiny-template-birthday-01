// Aseguramos que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // PORTADA
  const nombreEl = document.getElementById("nombre");
  const edadEl = document.getElementById("edad");

  if (nombreEl) nombreEl.textContent = invitationData.nombre;
  if (edadEl) edadEl.textContent = invitationData.edad;

  // MENSAJE FINAL (PÁGINA 3)
  const nombreFinalEl = document.getElementById("nombreFinal");
  const fechaFinalEl = document.getElementById("fechaFinal");
  const horaFinalEl = document.getElementById("horaFinal");

  if (nombreFinalEl)
    nombreFinalEl.textContent = invitationData.nombre;

  if (fechaFinalEl)
    fechaFinalEl.textContent = invitationData.evento.fechaTexto;

  if (horaFinalEl)
    horaFinalEl.textContent = invitationData.evento.horaTexto;
});
