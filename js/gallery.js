const gallery = document.getElementById("gallery");

invitationData.galeria.forEach(img => {
  const image = document.createElement("img");
  image.src = img;
  image.alt = "Foto del evento";
  gallery.appendChild(image);
});
