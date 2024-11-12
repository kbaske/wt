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

// Perform word search
function basicSearch() {
  const searchInput = document.forms.basicForm.searchterms.value.trim();
  if (searchInput) {
    window.open(
      `https://incubator.wikimedia.org/wiki/Wt/sat/${encodeURIComponent(
        searchInput
      )}`,
      "_blank"
    );
  } else {
    alert("ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱢᱤᱫᱴᱟᱹᱝ ᱟᱹᱲᱟᱹ ᱚᱞ ᱢᱮ ᱥᱮᱸᱫᱽᱨᱟ ᱞᱟᱹᱜᱤᱫ ᱾");
  }
  return false;
}
