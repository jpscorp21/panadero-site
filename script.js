const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const favorites = document.querySelectorAll("[data-product]");
const favoriteCopy = document.querySelector("[data-favorite-copy]");

const favoriteMessages = {
  "Pan fresco": "Pan fresco para llevar calentito antes de que se enfríe.",
  Coquito: "Coquito dorado para una merienda que desaparece rápido.",
  Galleta: "Galleta casera para acompañar café, cocido o ese antojo de la tarde."
};

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

favorites.forEach((button) => {
  button.addEventListener("click", () => {
    favorites.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    favoriteCopy.textContent = favoriteMessages[button.dataset.product];
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
