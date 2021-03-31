// Бургер
var controlBurger = document.querySelector(".control__burger");
var menuIcon = document.querySelector(".burger__icon");
var mobileBurger = document.querySelector(".mobile__burger");
// var mobileIcon = document.querySelector(".mobile__burger-icon");
var mobileMenu = document.querySelector(".desctop-menu");
// var bodyLock = document.querySelector("body");

controlBurger.addEventListener("click", function(){
    menuIcon.classList.toggle('burger__icon--active');
    mobileMenu.classList.toggle('desctop-menu--active');
    // bodyLock.classList.toggle("body__lock");
})

mobileBurger.addEventListener("click", function(){
    menuIcon.classList.toggle('burger__icon--active');
    mobileMenu.classList.toggle('desctop-menu--active');
    // bodyLock.classList.toggle("body__lock");
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

// Карусель
// $('.desctop-menu__imgs').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     dots:false,
//     responsive:{
//         0:{
//             items:1
//         }
//     }
// })


// $('.products__tablet').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     dots: false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         }
//     }
// })

$(document).ready(function(){

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

});