// Fade animation
window.onload = () => {
  document.querySelector(".fade-in").style.opacity = 1;
};

// ScrollReveal animations
ScrollReveal().reveal(".section-title", { delay: 200, distance: "40px" });
ScrollReveal().reveal(".project-card, .section-text", {
  delay: 300,
  distance: "60px"
});

// EmailJS init
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
    () => {
      document.getElementById("msgStatus").innerHTML = "✅ Message sent!";
      this.reset();
    },
    () => {
      document.getElementById("msgStatus").innerHTML = "❌ Error!";
    }
  );
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Hamburger menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
