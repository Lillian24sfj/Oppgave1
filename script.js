const images = document.querySelectorAll(".bilder img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImg.src = image.src;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("visible");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("visible");
  lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("visible");
    lightbox.classList.add("hidden");
  }
});

const bilder = ["havaneser1.jpg", "havaneser2.jpg", "havaneser3.jpg"];

let indeks = 0;

const karusellBilde = document.getElementById("karusell-bilde");
const forrigeKnapp = document.getElementById("forrige");
const nesteKnapp = document.getElementById("neste");

forrigeKnapp.addEventListener("click", () => {
  indeks = (indeks - 1 + bilder.length) % bilder.length;
  karusellBilde.src = bilder[indeks];
});

nesteKnapp.addEventListener("click", () => {
  indeks = (indeks + 1) % bilder.length;
  karusellBilde.src = bilder[indeks];
});
