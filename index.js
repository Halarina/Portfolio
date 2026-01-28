// --- words ---
const words = document.querySelectorAll(".word");

// Задаємо затримку (по 2 секунди між словами)
words.forEach((word, index) => {
  word.style.animationDelay = `${index * 1}s`;
});

// --- Form ---
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  successMessage.style.display = "block";
  form.reset();
});

