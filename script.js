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
