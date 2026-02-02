// ===============================
// Mobile Navigation Toggle
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ===============================
// Close Mobile Menu on Link Click
// ===============================
const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// ===============================
// Active Page Highlight (Auto)
// ===============================
const currentPage = window.location.pathname.split("/").pop();

navItems.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
    link.classList.add("active");
  }
});

// ===============================
// Skill Bar Animation on Load
// ===============================
window.addEventListener("load", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});

// ===============================
// Modal Popup for Profile Picture
// ===============================
const modal = document.getElementById("imageModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

if (openModalBtn && modal && closeModalBtn) {
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal if user clicks outside the image
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// ===============================
// Console Signature (Optional Flex 😎)
// ===============================
console.log(
  "%cBuilt by Siam 💜",
  "color: violet; font-size: 16px; font-weight: bold;"
);
