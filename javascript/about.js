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
