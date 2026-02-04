document.addEventListener("DOMContentLoaded", () => {
  const btnUbicacion = document.getElementById("btnUbicacion");

  if (!btnUbicacion) return;

  btnUbicacion.addEventListener("click", () => {
    window.open(invitationData.ubicacion.url, "_blank");
  });
});
