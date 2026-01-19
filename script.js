let menuIcon = document.querySelector(".menu-icon");
let burgerbar = document.querySelector(".burgermenu");
let container = document.querySelector(".container")

menuIcon.onclick = function(){
    sidebar.classlist.toggle("small-burgermenu");
    container.classList.toggle("large-container");
}

