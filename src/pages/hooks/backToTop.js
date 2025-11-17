// ======================BUTTON BACK TO TOP========================================
const backToTop = document.getElementById("backToTop");
function handleScroll() {
  if (window.scrollY > window.innerHeight * 0.7) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}
window.addEventListener("scroll", handleScroll);
handleScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
