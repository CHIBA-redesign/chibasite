// Finder alle elementerne
const form = document.querySelector("#webform");
const modal = document.querySelector("#summary-popop");
const summary = document.querySelector("#summary-output");
const closeModalBtn = document.querySelector(".close-summary");

const inputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  phone: document.querySelector("#phone"),
  eventType: document.querySelector("#event-type"),
  people: document.querySelector("#people"),
  date: document.querySelector("#date"),
};
const ageConfirm = document.querySelector("#age-confirm");
const contactConfirm = document.querySelector("#contact-confirm");

// Når klikker på indsend/SUBMIT kører handleSubmit
form.addEventListener("submit", handleSubmit);

// Når man klikker på krydset, lukkes popup'en
closeModalBtn.addEventListener("click", closeModal);

// Hvis man klikker udenfor popup-indholdet, lukkes popup'en
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// --- Når man klikker på INDSEND knappem

function handleSubmit(e) {
  // siden genindlæses ikke hvis fejl
  e.preventDefault();

  // Fjerner fejlmarkeringer når submit rigtigt
  resetErrors();

  // Tjekker om formularen er rigtigt udfyld
  const valid = validateForm();

  // Hvis der er fejl, stopper funktionen her
  if (!valid) return;

  // Viser opsamlingen i popup'en
  showSummary();

  // Åbner popup'en
  openModal();

  // Nulstiller formularen efter korrekt indsendelse
  form.reset();
}

// --- Dette fjerne fejlmarkeringer

function resetErrors() {
  // Fjerner error fra felterne
  Object.values(inputs).forEach((el) => el.classList.remove("error"));

  // Fjerner error fra checkboxse
  document
    .querySelectorAll("#webform .checkboxes label")
    .forEach((label) => label.classList.remove("error"));
}

// --- Validere formularen
function validateForm() {
  // tænker at formular er rigtig til at starte med
  let valid = true;

  // -------- Navn --------
  if (inputs.name.value.trim() === "") {
    markError(inputs.name);
    valid = false;
  }

  // -------- Email --------
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(inputs.email.value.trim())) {
    markError(inputs.email);
    valid = false;
  }

  // -------- Telefon (8 cifre) --------
  const phonePattern = /^\d{8}$/;
  if (!phonePattern.test(inputs.phone.value.trim())) {
    markError(inputs.phone);
    valid = false;
  }

  // -------- Event-type tekst --------
  if (inputs.eventType.value.trim() === "") {
    markError(inputs.eventType);
    valid = false;
  }

  // -------- Antal personer --------
  if (inputs.people.value === "" || inputs.people.value <= 0) {
    markError(inputs.people);
    valid = false;
  }

  // -------- Dato --------
  if (inputs.date.value === "") {
    markError(inputs.date);
    valid = false;
  }

  // -------- Confirm-checkboxes --------
  if (!ageConfirm.checked) {
    ageConfirm.closest("label").classList.add("error");
    valid = false;
  }

  if (!contactConfirm.checked) {
    contactConfirm.closest("label").classList.add("error");
    valid = false;
  }

  // Returnerer om formular er gyldig eller ej
  return valid;
}
// --- Markere fejl/error

// Tilføjer rød kant
function markError(el) {
  el.classList.add("error");
}
// --- Opsamling / summary

function showSummary() {
  // Indsætter tingene i  summary popop
  summary.innerHTML = `
    <p><strong>Name:</strong> ${inputs.name.value}</p>
    <p><strong>Email:</strong> ${inputs.email.value}</p>
    <p><strong>Phone:</strong> ${inputs.phone.value}</p>
    <p><strong>Type of event:</strong><br>${inputs.eventType.value}</p>
    <p><strong>Number of people:</strong> ${inputs.people.value}</p>
    <p><strong>Date:</strong> ${inputs.date.value}</p>
  `;
}
// Åbner popop og stopper scroll i bagrunden
function openModal() {
  modal.classList.remove("hidden");
  document.body.classList.add("summary-open");
}

// Lukker popop og gør man kan scroll igen
function closeModal() {
  modal.classList.add("hidden");
  document.body.classList.remove("summary-open");
}
