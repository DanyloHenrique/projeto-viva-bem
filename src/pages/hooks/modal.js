// ======================SHOW AND HIDDEN MODAL========================================
const iconMenu = document.getElementById("icon-menu");
const modal = document.getElementById("modal");
const iconClose = document.getElementById("icon-close");
const linksModal = document.querySelectorAll("#modal div a");

iconMenu.addEventListener("click", showModal);
iconClose.addEventListener("click", hiddenModal);

linksModal.forEach((link) => {
  link.addEventListener("click", hiddenModal);
});

function showModal() {
  modal.classList.add("show");
}

function hiddenModal() {
  modal.classList.remove("show");
}
