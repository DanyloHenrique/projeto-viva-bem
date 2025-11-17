// ======================TOGGLE NAVIGATION CONTENT========================================

const MaxWidthMobile = 760;

const navDesktop = document.getElementById("desktop");
const navMobile = document.getElementById("mobile");

function handleResize() {
  if (window.innerWidth >= MaxWidthMobile) {
    navDesktop.style.display = "flex";
    navMobile.style.display = "none";
  } else {
    navMobile.style.display = "flex";
    navDesktop.style.display = "none";
  }
}
window.addEventListener("resize", handleResize);
handleResize();
