const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.body;

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("translate-x-full", !menuOpen);
  body.classList.toggle("overflow-hidden", menuOpen);

  // Toggle icon
  if (menuOpen) {
    menuIcon.innerHTML = `
        <path d="M6 6L18 18" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M18 6L6 18" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
      `;
  } else {
    menuIcon.innerHTML = `
        <path d="M4.5 8H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M4.5 12H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M4.5 16H19.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"/>
      `;
  }
});
