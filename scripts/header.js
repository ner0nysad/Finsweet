const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
iconMenu.addEventListener("click", function () {
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});
