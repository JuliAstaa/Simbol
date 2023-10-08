const hamburgerToggle = document.getElementById("hamburger-toggle");
const sideBar = document.getElementById("side-bar");
const menu = document.querySelector(".menu");

hamburgerToggle.addEventListener("click", () => {
  sideBar.classList.toggle("side-bar-active");
  hamburgerToggle.classList.toggle("hamburger-active");
});
