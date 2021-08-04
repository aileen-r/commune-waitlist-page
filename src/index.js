import AOS from "aos";
import "aos/dist/aos.css";

const body = document.querySelector("body");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const firstMenuItem = document.getElementById("first-menu-item");

const openMenu = () => {
  body.classList.add("disable-scroll");
  menu.classList.add("active");
  firstMenuItem.focus();
};

const closeMenu = () => {
  body.classList.remove("disable-scroll");
  menu.classList.remove("active");
  menuToggle.focus();
};

const toggleMenu = () => {
  if (menu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
};

AOS.init({
  duration: 500,
});
menuToggle.addEventListener("click", toggleMenu);
