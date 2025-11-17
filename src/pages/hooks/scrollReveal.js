document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal({ reset: true });

  ScrollReveal().reveal(".section-cards");
  ScrollReveal().reveal(".section-prevention");
  ScrollReveal().reveal(".section-alerts");
  ScrollReveal().reveal("#modal");

  ScrollReveal().reveal(".card", {
    origin: "top",
    distance: "50px",
    duration: 1000,
  });
});
