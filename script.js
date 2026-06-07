const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const favorites = document.querySelectorAll("[data-product]");
const favoriteCopy = document.querySelector("[data-favorite-copy]");

const favoriteMessages = {
  "Pan fresco": "Pan fresco seleccionado para llevar calentito.",
  Coquito: "Coquito seleccionado para compartir en la merienda.",
  Galleta: "Galleta seleccionada para acompañar café o cocido."
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
