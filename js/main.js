// Бургер
var controlBurger = document.querySelector(".control__burger");
var mobileBurger = document.querySelector(".mobile__burger");
var menuBurger = document.querySelector(".desctop__btn")
var menuBurgerMobile = document.querySelector(".desctop__btn--mobile")
var desctopMenu = document.querySelector(".desctop-menu");


controlBurger.addEventListener("click", function(){
    desctopMenu.classList.add('desctop-menu--active');
})

mobileBurger.addEventListener("click", function(){
    desctopMenu.classList.add('desctop-menu--active');
})

menuBurger.addEventListener("click", function(){
    desctopMenu.classList.remove('desctop-menu--active');
})

menuBurgerMobile.addEventListener("click", function(){
    desctopMenu.classList.remove('desctop-menu--active');
})


// Фиксируем шапку
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    }
    else{
    $('header').removeClass("sticky");
    }
});


$(document).ready(function(){
    // Карусель
    $('.hero__carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
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
            375:{
                items:3
            }
        }
    })


    // смена картинок в меню
    $(".desctop-menu__imgs").vegas({
        autoplay:true,
        slide:0,
        cover: true,
        timer: false,
        slides: [
            { src: "img/desctop-menu/desctop-menu1.png" },
            { src: "img/desctop-menu/desctop-menu2.png" },
            { src: "img/desctop-menu/desctop-menu3.png" },
            { src: "img/desctop-menu/desctop-menu4.png" } 
        ]
    });
});







