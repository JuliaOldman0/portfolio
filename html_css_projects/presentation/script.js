let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

document.getElementById("next").addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

function goToSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Initialize the first slide as active
slides[currentSlide].classList.add("active");
