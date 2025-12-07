// SIMPLE JAVASCRIPT FOR MY TRAVEL PROJECT

// Smooth scroll for internal links
document.addEventListener("click", function (event) {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const target = document.querySelector(link.getAttribute("href"));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
});

// Back to top button
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.style.position = "fixed";
backToTop.style.right = "15px";
backToTop.style.bottom = "15px";
backToTop.style.padding = "10px 14px";
backToTop.style.borderRadius = "8px";
backToTop.style.border = "none";
backToTop.style.fontSize = "18px";
backToTop.style.background = "#0b76d1";
backToTop.style.color = "white";
backToTop.style.display = "none";
backToTop.style.cursor = "pointer";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backToTop.style.display = "block";
  else backToTop.style.display = "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form simple validation
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (event) {
    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      event.preventDefault();
      alert("Please fill all fields before submitting.");
      return;
    }

    if (!email.value.includes("@")) {
      event.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}