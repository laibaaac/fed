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







// const footerButton = document.querySelector("footer nav ul:first-of-type li:first-of-type button");

// var footerMenu1 = document.querySelector("footer nav ul:first-of-type li:first-of-type ul");
// const footerCloseButton= document.querySelector("footer li>ul:nth-of-type(1), footer ul>ul:nth-of-type(2)");


// var subMenuButton1= document.querySelector("footer nav ul li ul li:first-of-type button");
// var subMenuButton2 = document.querySelector("footer nav ul li ul li:nth-of-type(2) button");
// var subMenuButton3 = document.querySelector("footer nav ul li ul li:nth-of-type(3) button");

// var subMenu1 = document.querySelector("footer nav ul ul ul  li li ");




// footerButton.addEventListener("click", openButton);

// subMenuButton1.addEventListener("click", opentje);



// function openButton() {
// 	footerMenu1.classList.toggle('showUl')
// 	console.log('heyyy3')
// }

// function opentje() {
// 	subMenu1.classList.toggle('showUl')
// 	console.log("werkt het");
// }