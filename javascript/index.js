const carouselInner = document.querySelector(".carousel-inner");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

nextButton.addEventListener("click", function () {
  const firstImage = carouselInner.querySelector("img");
  carouselInner.scrollBy({ left: firstImage.offsetWidth, behavior: "smooth" });
});

previousButton.addEventListener("click", function () {
  const firstImage = carouselInner.querySelector("img");
  carouselInner.scrollBy({ left: -firstImage.offsetWidth, behavior: "smooth" });
});
