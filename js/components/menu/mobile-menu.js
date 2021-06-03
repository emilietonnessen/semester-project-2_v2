const menuIcon = document.querySelector('.nav__menu-icon');
const menu = document.querySelector(".nav__menu");

menuIcon.addEventListener("click", toggleMobileMenu);

export default function toggleMobileMenu() {
	menuIcon.classList.toggle("open")
	menu.classList.toggle("open-menu")
}