let menuIcon = document.querySelector(".menu-icon");
let burgerbar = document.querySelector(".burgermenu");
let container = document.querySelector(".container")

menuIcon.onclick = function(){
    burgerbar.classList.toggle("small-burgermenu");
    container.classList.toggle("large-container");
}

