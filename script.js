let nav_open = function() {
    let getSidebar = document.querySelector(".side");
    let getSidebarUl = document.querySelector(".side ul");
    let getSidebarTitle = document.querySelector(".side span");
    let getSidebarLinks = document.querySelectorAll(".side a");

    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "192px";
    getSidebarTitle.style.opacity = "1";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "1";
    }
}

let nav_close = function() {
    let getSidebar = document.querySelector(".side");
    let getSidebarUl = document.querySelector(".side ul");
    let getSidebarTitle = document.querySelector(".side span");
    let getSidebarLinks = document.querySelectorAll(".side a");
    
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";
}

const changeBackground0 = function() {
    const changeColor = document.getElementById("kleur0");
    changeColor.addEventListener("click", function onClick(event) {
        document.body.style.backgroundColor = 'rgb(236, 236, 236)';
        let text = "Achtergrondkleur: 'Standaard'";
        document.getElementById("text").innerHTML = text;
        nav_close();
    });
};

changeBackground0();

const changeBackground1 = function() {
    const changeColor = document.getElementById("kleur1");
    changeColor.addEventListener("click", function onClick(event) {
        document.body.style.backgroundColor = '#4B3E76ff';
        let text = "Achtergrondkleur: <mark>[Druifblauw]</mark>";
        document.getElementById("text").innerHTML = text;
        nav_close();
    });
};

changeBackground1();

const changeBackground2 = function() {
    const changeColor = document.getElementById("kleur2");
    changeColor.addEventListener("click", function onClick(event) {
        document.body.style.backgroundColor = '#6D4812ff';
        let text = "Achtergrondkleur: <mark>[Donkerbruin]</mark>";
        document.getElementById("text").innerHTML = text;
        nav_close();
    });
};

changeBackground2();

const changeBackground3 = function() {
    const changeColor = document.getElementById("kleur3");
    changeColor.addEventListener("click", function onClick(event) {
        document.body.style.backgroundColor = '#895814ff';
        let text = "Achtergrondkleur: <mark>[Lichtbruin]</mark>";
        document.getElementById("text").innerHTML = text;
        nav_close();
    });
};

changeBackground3();

const changeBackground4 = function() {
    const changeColor = document.getElementById("kleur4");
    changeColor.addEventListener("click", function onClick(event) {
        document.body.style.backgroundColor = '#C46514ff';
        let text = "Achtergrondkleur: <mark>[Zacht oranje]</mark>";
        document.getElementById("text").innerHTML = text;
        nav_close();
    });
};

changeBackground4();

const changeBackground5 = function() {
    const changeColor = document.getElementById("kleur5");
    changeColor.addEventListener("click", function onClick(event) {
        document.body.style.backgroundColor = '#F39409ff';
        let text = "Achtergrondkleur: <mark>[Fel oranje]</mark>";
        document.getElementById("text").innerHTML = text;
        nav_close();
    });
};

changeBackground5();

const backKey = document.querySelector(".background-standaard");

window.addEventListener("keydown", changeBackKey);

function changeBackKey(e) {
    if (e.keyCode == 49) {
        document.body.style.backgroundColor = 'rgb(236, 236, 236)';
    }
    else if (e.keyCode == 50) {
        document.body.style.backgroundColor = '#4B3E76ff';
    } 
    else if (e.keyCode == 51) {
        document.body.style.backgroundColor = '#6D4812ff';
    } 
    else if (e.keyCode == 52) {
        document.body.style.backgroundColor = '#895814ff';
    } 
    else if (e.keyCode == 53) {
        document.body.style.backgroundColor = '#C46514ff';
    } 
    else if (e.keyCode == 54) {
        document.body.style.backgroundColor = '#F39409ff';
    } 
}