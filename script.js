// 🌊 Smooth scroll (only if you still use the hero button)
function scrollToSection() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}


// ✨ Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


// 🎯 Subtle image hover zoom (cleaner version)
document.querySelectorAll(".frame img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

//note carousel
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".note-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
    current = index;
  }

  document.querySelector(".arrow.left").onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  document.querySelector(".arrow.right").onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };
});