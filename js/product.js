const addToCartBTN = document.querySelector("section:nth-of-type(2) form input[type='button']:nth-of-type(1)");
addToCartBTN.addEventListener("click", addToCart);


const addToCartAudio = document.querySelector("audio");


function addToCart(){
	addToCartBTN.classList.add("busy");

	addToCartBTN.addEventListener("animationend", iamReady);

	addToCartAudio.play();

	console.log("busy");
}

function iamReady(){
	addToCartBTN.classList.remove("busy");
}
/* bron: https://codepen.io/shooft/pen/mdBOZLz (sanne code) */

function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let linkButtons = carrousel.querySelectorAll(":scope > a");
  

	// de links/rechts link-buttons initialiseren en activeren
  function iniLinkButtons() {    
    for(linkButton of linkButtons) {
			// beide link-buttins naar kliks laten luisteren
      linkButton.addEventListener("click", function(e){
        // als er geklikt wordt
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// bepalen of er op 'previous' of 'next' geklikt is
				let direction = this.getAttribute("href");
				// naar het element gaan
				goToElement(direction);
      });
    }
	}
  
  
 
	/* START POSITIE */
	// het eerste element actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
 
	/* ALGEMENE FUNCTIES */
  // naar volgende/vorige element //
  function goToElement(direction) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
			// checken of nieuwe element bestaat - anders naar laatste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			// het nieuwe element is het volgende broertje/zusje
			newElement = currentElement.nextElementSibling;
			// checken of nieuwe element bestaat - anders naar eerste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}

		// naar het nieuwe element scrollen
		scrollToElement(newElement);
  }
  
  

  // scroll to new element //
  function scrollToElement(newElement) {
    // carousel container opzoeken
    let carouselElementsContainer = newElement.closest("ul");

		// de linker offset van het nieuwe element bepalen 
		let newElementOffset = newElement.offsetLeft;
		
		// de carousel naar de berekende positie scrollen
		carouselElementsContainer.scrollTo({
			left: newElementOffset
		});
    
    // nieuwe element current element maken
    updateCurrentElement(newElement);
  }
  
  

	// update current element //
	function updateCurrentElement(newElement) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// de class current toevoegen
		newElement.classList.add("current");
	}
  
  
  // de linkbuttons activeren
  iniLinkButtons();	
  // de carrousel bij het begin starten
  iniStartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCaroCarrousel("justButtons");
  //je kunt hier ook meerdere carrousellen activeren
})();

const heartButtons = document.querySelectorAll(".like");

heartButtons.addEventListener("click", faves);

function faves(event) {
	const clickedHeart= event.target;
	const theFish = clickedHeart.classList.toggle("liked");
	console.log(event.target);

}



footerButtons.forEach(footerButton => {
	footerButton.addEventListener("click", toggleMenu);
});

function toggleMenu(event) {
	console.log(event.target);
	const deButton = event.target;
	const hetMenu = deButton.nextElementSibling;
}


