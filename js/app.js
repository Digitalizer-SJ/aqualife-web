// Var  ------------------------------------------------------

const btnMenu = document.querySelector('.btn-menu');
const btnMenuX = document.querySelector('.btn-menu i');
const menu = document.querySelector('.list-container');
const menuContent = document.querySelector('.menu');
let on_off = true;

// Responsiv Menu  -------------------------------------------

// function() {}  =  () => {}

btnMenu.addEventListener('click', () => {
    btnMenuX.classList.toggle('fa-times');

    if (on_off) {
        menu.style.left = "0";
        menu.style.transition = "300ms";
        on_off = false;
    } else {
        on_off = false;
        menu.style.left = "-100%";
        menu.style.transition = "300ms";
        on_off = true;
    }
});

// Class Active Menu  ---------------------------------------

let enlaces = document.querySelectorAll('.list li a');

enlaces.forEach((e) => {

    e.addEventListener('click', (event) => {

        enlaces.forEach((link) => {
            link.classList.remove('active');
        });

        event.target.classList.add('active');
    });
});

// Scroll Efects  ----------------------------------------------

let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        menuContent.style.top = "0px";
        menuContent.style.transition = "0.5s";
    } else {
        menuContent.style.top = "-100px";
        menuContent.style.transition = "0.5s";
    }

    prevScrollPos = currentScrollPos;

    // Box Shadow  ------------------------------

    let up = window.pageYOffset;

    if (up >= 650) {
        menuContent.classList.add('box-shadow');
    } else {
        menuContent.classList.remove('box-shadow');
    }
}

// Go Top --------------------------------------------------------

let goTop = document.querySelector('.go-top');

goTop.addEventListener('click', () => {
    document.body.scrollTop = "0";
    document.documentElement.scrollTop = "0";
});