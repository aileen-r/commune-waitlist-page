const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("mobile-menu");
const firstMenuItem = document.getElementById("first-menu-item");

const openMenu = () => {
  menu.classList.add("active");
  firstMenuItem.focus();
};

const closeMenu = () => {
  menu.classList.remove("active");
  menuOpen.focus();
};

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
