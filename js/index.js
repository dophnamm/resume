// show menu nav
const showMenuNav = (toggleId, navMenuId) => {
	const toggle = document.getElementById(toggleId);
	const navMenu = document.getElementById(navMenuId);

	if (toggle && navMenu) {
		toggle.addEventListener("click", () => {
			navMenu.classList.toggle("show-menu");
		});
	}
};
showMenuNav("nav__toggle", "nav__menu");

// click nav link remove show-menu
const navLink = document.querySelectorAll(".nav__link");

const linkActions = () => {
	const navMenu = document.getElementById("nav__menu");
	navMenu.classList.remove("show-menu");
};
navLink.forEach((e) => e.addEventListener("click", linkActions));

// scroll sections active link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector("nav__menu a[href*= " + sectionId + "]").classList.add("active-link");
		} else {
			document.querySelector("nav__menu a[href*= " + sectionId + "]").classList.remove("active-link");
		}
	});
};
window.addEventListener("scroll", scrollActive);

//change theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const currentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const currentIcon = () => (document.body.classList.contains(iconTheme) ? "bx-moon" : "bx-sun");

themeButton.addEventListener("click", () => {
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
});
