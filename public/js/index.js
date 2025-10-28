const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.body;

let isMenuOpen = false;

// Toggle menu state
menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle("translate-x-full", !isMenuOpen);
  body.classList.toggle("overflow-hidden", isMenuOpen);
  updateMenuIcon(isMenuOpen);
});

// Close menu when clicking a link or button inside
mobileMenu.addEventListener("click", (e) => {
  const target = e.target.closest("a, button");
  if (!target || !isMenuOpen) return;

  isMenuOpen = false;
  mobileMenu.classList.add("translate-x-full");
  body.classList.remove("overflow-hidden");
  updateMenuIcon(false);
});

// Update menu icon
function updateMenuIcon(open) {
  menuIcon.innerHTML = open
    ? `
      <path d="M6 6L18 18" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M18 6L6 18" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
    `
    : `
      <path d="M4.5 8H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M4.5 12H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M4.5 16H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
    `;
}
