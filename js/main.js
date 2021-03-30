// Бургер
var controlBurger = document.querySelector(".control__burger");
var menuIcon = document.querySelector(".burger__icon");
var mobileBurger = document.querySelector(".mobile__burger");
// var mobileIcon = document.querySelector(".mobile__burger-icon");
var mobileMenu = document.querySelector(".desctop-menu");
var bodyLock = document.querySelector("body");

controlBurger.addEventListener("click", function(){
    menuIcon.classList.toggle('burger__icon--active');
    mobileMenu.classList.toggle('desctop-menu--active');
    bodyLock.classList.toggle("body__lock");
})

mobileBurger.addEventListener("click", function(){
    menuIcon.classList.toggle('burger__icon--active');
    mobileMenu.classList.toggle('desctop-menu--active');
    bodyLock.classList.toggle("body__lock");
})

// Карусель
$('.products__tablet').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})