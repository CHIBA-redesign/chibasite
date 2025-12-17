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

/* --- cookie --- */
const modal = document.getElementById("modalbox");
const saveBtn = document.getElementById("saveCookies");

const cookiesAccepted = localStorage.getItem("cookiesAccepted");

if (!cookiesAccepted) {
  modal.classList.remove("hidden");
}

saveBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  modal.classList.add("hidden");
});

/* --- slide 1 --- */

document.querySelector(".slide-btn").addEventListener("click", function () {
  this.setAttribute(
    "aria-pressed",
    this.getAttribute("aria-pressed") !== "true"
  );
});

/* --- slide 2 --- */
document.querySelector(".slide-btn2").addEventListener("click", function () {
  this.setAttribute(
    "aria-pressed",
    this.getAttribute("aria-pressed") !== "true"
  );
});
