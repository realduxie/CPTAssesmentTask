// TableFinder App JavaScript

// Current page state
let currentPage = "home";

// Initialize app when DOM loads
document.addEventListener("DOMContentLoaded", function () {
  // Set initial active navigation
  updateNavigation();

  // Show initial page
  showPage("home");

  // Initialize any interactive elements
  initializeInteractivity();
});

// Navigation functionality
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page-content");
  pages.forEach((page) => page.classList.add("hidden"));

  // Show selected page
  const selectedPage = document.getElementById(pageId + "-page");
  if (selectedPage) {
    selectedPage.classList.remove("hidden");
  }

  // Update current page state
  currentPage = pageId;

  // Update navigation active state
  updateNavigation();
}

function updateNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => {
    const pageId = btn.getAttribute("data-page");
    if (pageId === currentPage) {
      btn.classList.add("active");
      btn.classList.remove(
        "text-gray-700",
        "hover:text-[#FF6B6B]",
        "hover:bg-gray-100"
      );
    } else {
      btn.classList.remove("active");
      btn.classList.add("text-gray-700");
    }
  });
}

// Image fallback functionality (replaces ImageWithFallback component)
function handleImageError(img) {
  const fallbackDiv = document.createElement("div");
  fallbackDiv.className = "image-fallback " + (img.className || "");
  fallbackDiv.style.cssText = img.style.cssText;

  // Create error SVG
  const errorSvg = document.createElement("img");
  errorSvg.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
  errorSvg.alt = "Error loading image";
  errorSvg.setAttribute("data-original-url", img.src);

  fallbackDiv.appendChild(errorSvg);
  img.parentNode.replaceChild(fallbackDiv, img);
}

// Add error handling to all images
function setupImageFallbacks() {
  const images = document.querySelectorAll('img[data-fallback="true"]');
  images.forEach((img) => {
    img.addEventListener("error", () => handleImageError(img));
  });
}

// Initialize interactive elements
function initializeInteractivity() {
  setupImageFallbacks();

  // Login page toggle functionality
  setupLoginToggle();

  // Booking page steps
  setupBookingSteps();

  // Search functionality
  setupSearch();
}

// Login page functionality
function setupLoginToggle() {
  const signInBtn = document.getElementById("signin-btn");
  const signUpBtn = document.getElementById("signup-btn");
  const passwordToggle = document.getElementById("password-toggle");

  if (signInBtn && signUpBtn) {
    signInBtn.addEventListener("click", () => toggleLoginMode(false));
    signUpBtn.addEventListener("click", () => toggleLoginMode(true));
  }

  if (passwordToggle) {
    passwordToggle.addEventListener("click", togglePassword);
  }
}

function toggleLoginMode(isSignUp) {
  const signInBtn = document.getElementById("signin-btn");
  const signUpBtn = document.getElementById("signup-btn");
  const signUpFields = document.getElementById("signup-fields");
  const submitBtn = document.getElementById("submit-btn");

  if (isSignUp) {
    signUpBtn.classList.add("active");
    signInBtn.classList.remove("active");
    if (signUpFields) signUpFields.classList.remove("hidden");
    if (submitBtn) submitBtn.textContent = "CREATE ACCOUNT";
  } else {
    signInBtn.classList.add("active");
    signUpBtn.classList.remove("active");
    if (signUpFields) signUpFields.classList.add("hidden");
    if (submitBtn) submitBtn.textContent = "SIGN IN";
  }
}

function togglePassword() {
  const passwordInput = document.getElementById("password-input");
  const eyeIcon = document.getElementById("eye-icon");
  const eyeOffIcon = document.getElementById("eye-off-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.add("hidden");
    eyeOffIcon.classList.remove("hidden");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("hidden");
    eyeOffIcon.classList.add("hidden");
  }
}

// Booking page functionality
function setupBookingSteps() {
  // Implementation for booking steps if needed
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  // Implement search functionality as needed
  console.log("Searching for:", query);
}

// Utility functions
function formatRating(rating) {
  return "★".repeat(Math.floor(rating)) + (rating % 1 ? "☆" : "");
}

// Export functions for global access
window.showPage = showPage;
window.handleImageError = handleImageError;
window.toggleLoginMode = toggleLoginMode;
window.togglePassword = togglePassword;
