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

// Select all accordion buttons by class
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const content = parent.querySelector(".accourdion-content");
    const svg = btn.querySelector("svg");
    const isActive = parent.classList.contains("bg-accent");

    // Toggle clicked accordion only (boshqalar ta'sir qilmaydi)
    if (isActive) {
      // Close it
      content.classList.add("hidden");
      parent.classList.remove("bg-accent");
      parent.classList.add("bg-transparent");
      btn.classList.remove("!pb-0");
    } else {
      // Open it
      content.classList.remove("hidden");
      parent.classList.add("bg-accent");
      parent.classList.remove("bg-transparent");
      btn.classList.add("!pb-0");
    }

    // Change icon
    svg.innerHTML = isActive
      ? `
        <path d="M30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30V32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32V30C23.732 30 30 23.732 30 16Z" fill="#4EB8E7"/>
        <path d="M15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V11Z" fill="#4EB8E7"/>
        <path d="M21 15C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17L11 17C10.4477 17 10 16.5523 10 16C10 15.4477 10.4477 15 11 15L21 15Z" fill="#4EB8E7"/>
      `
      : `
        <path d="M30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30V32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32V30C23.732 30 30 23.732 30 16Z" fill="#4EB8E7"/>
        <path d="M21 15C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17L11 17C10.4477 17 10 16.5523 10 16C10 15.4477 10.4477 15 11 15L21 15Z" fill="#4EB8E7"/>
      `;
  });
});
