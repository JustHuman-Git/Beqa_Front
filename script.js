let menuIcon = document.querySelector(".menu-icon");
let burgerbar = document.querySelector(".burgermenu");

menuIcon.onclick = function(){
    sidebar.classlist.toggle("small-burgermenu");
}

