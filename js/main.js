const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu__item");

menuBtn.onclick = () => {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
  navMenu.classList.toggle("open");
  navItems.forEach((item) => item.classList.toggle("open"));
};
