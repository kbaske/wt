const menuToggle = document.getElementById("menu-toggle"); // Hamburger icon
const mobileMenu = document.getElementById("mobile-menu"); // Mobile menu
const closeMenu = document.getElementById("close-menu"); // Close button
const overlay = document.getElementById("overlay"); // Overlay

// Open Menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

// Close Menu (using close button)
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Close Menu (on clicking outside)
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

function toggleDropdown(event) {
  event.preventDefault(); // Prevent link navigation
  const parentDropdown = event.target.parentElement;
  parentDropdown.classList.toggle("open");
}
