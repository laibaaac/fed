// hamburger menu 
const deMenuButton = document.querySelector("header > button");
const deNav = document.querySelector("header > nav:nth-of-type(2)");
const deSluitButton = document.querySelector("header nav:nth-of-type(2) button");

function closeMenu() {
	deNav.classList.remove('open')
	console.log('heyyy')
}

function openMenu() {
	deNav.classList.add('open')
	console.log('heyyy2')

}

deMenuButton.addEventListener("click", openMenu);
deSluitButton.addEventListener("click", closeMenu);


// footer menu

const footerButtons = document.querySelectorAll(".menu-button");

footerButtons.forEach(footerButton => {
	footerButton.addEventListener("click", toggleMenu);
});

function toggleMenu(event) {
	console.log(event.target);
	const deButton = event.target;
	const hetMenu = deButton.nextElementSibling;

	// menu moet dicht
	if ( hetMenu.classList.contains("open") ) {
		hetMenu.classList.remove("open");

		const childMenus =  hetMenu.querySelectorAll("ul.open");

		childMenus.forEach(childMenu => {
			childMenu.classList.remove("open");
		})
	}
	// menu moet open
	else {
		hetMenu.classList.add("open");
	}
}







