const deMenuButton = document.querySelector("header > button");
const deNav = document.querySelector("header > nav");
const deSluitButton = document.querySelector("header nav button");
const nieuwenav=document.querySelector("")


deMenuButton.addEventListener("click", toggleMenu);
deSluitButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	deNav.classList.remove('open')
    nieuwenav.classList.add('open')
}

