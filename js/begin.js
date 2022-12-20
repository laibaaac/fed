const deMenuButton = document.querySelector("header > button");
const deNav = document.querySelector("header > nav:nth-of-type(2)");
const deSluitButton = document.querySelector("header nav:nth-of-type(2) button");


deMenuButton.addEventListener("click", openMenu);
deSluitButton.addEventListener("click", closeMenu);

function closeMenu() {
	deNav.classList.remove('open')
}

function openMenu() {
	deNav.classList.add('open')
}

