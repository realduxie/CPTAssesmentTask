document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector(".booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const guests = document.getElementById("guests").value;

      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        e.preventDefault();
        alert("Please select a future date for your booking.");
        return false;
      }

      if (guests < 1 || guests > 20) {
        e.preventDefault();
        alert("Number of guests must be between 1 and 20.");
        return false;
      }

      return confirm("Are you sure you want to submit this booking?");
    });

    const dateInput = document.getElementById("date");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.setAttribute("min", today);
    }
  }

  const alerts = document.querySelectorAll(".alert");
  alerts.forEach(function (alert) {
    setTimeout(function () {
      alert.style.opacity = "0";
      alert.style.transition = "opacity 0.5s";
      setTimeout(function () {
        alert.remove();
      }, 500);
    }, 5000);
  });

  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentLocation) {
      link.style.color = "#3498db";
    }
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/static/js/sw.js") 
      .then(res => console.log("Service Worker registered!", res))
      .catch(err => console.log("Service Worker registration failed:", err));
  });
}