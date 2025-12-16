// slide-menu java script
(function () {
  // Tager headers højde i beregning - så den kommer under header
  const header = document.querySelector(".menu");
  if (header) {
    document.documentElement.style.setProperty(
      "--menu-height",
      header.offsetHeight + "px"
    );
  }
  // finder elementer der skal styres
  const slideNav = document.getElementById("site-slide-nav");
  const btn = document.querySelector(".burgermenu-knap");
  const bg = document.querySelector(".slide-nav .overlay-bg");

  // Defensive checks: hvis noget ikke findes, virker det alligevel
  if (!slideNav) {
    console.error("menu.js fejl: #site-slide-nav blev ikke fundet");
    return;
  }

  if (!btn) {
    console.error("menu.js fejl: .burgermenu-knap blev ikke fundet");
    return;
  }

  // Åbner menu
  function openNav() {
    slideNav.classList.add("active");
    slideNav.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // stopper scroll på baggrund mens menuen er åben
  }

  // Lukker menu
  function closeNav() {
    slideNav.classList.remove("active");
    slideNav.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = ""; // giver scroll tilbage når menu er lukket
  }

  // Gør så burgermenu knap kan åbn/lukke menu
  function toggleNav() {
    if (slideNav.classList.contains("active")) closeNav();
    else openNav();
  }

  btn.addEventListener("click", toggleNav);

  // Luk menu når klikkes på bagrund / overlay
  if (bg) bg.addEventListener("click", closeNav);

  // Menu lukker når et menu-link klikkes på
  slideNav.querySelectorAll(".slidemenu-content a").forEach((a) => {
    a.addEventListener("click", () => closeNav());
  });

  // Menu lukker når trykkes på ESC knap
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && slideNav.classList.contains("active")) {
      closeNav();
    }
  });
})();
