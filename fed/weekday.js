console.log ("hallo");

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toonMenu);

function toonMenu(){
    var deNav = document.querySelector("nav");
    deNav.classList.toggle("menuOpen");
}