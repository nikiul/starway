// Бургер

var mobileMenuBtn = document.querySelector(".control__burger");
var menuIcon = document.querySelector(".burger__icon");
// var mobileMenu = document.querySelector(".header");
// var headerMobileBtn = document.querySelector(".header__menu-closet");
// var bodyLock = document.querySelector("body");

mobileMenuBtn.addEventListener("click", function(){
    menuIcon.classList.toggle('burger__icon-active');
    // mobileMenu.classList.add('header__mobile-nav--active');
    // bodyLock.classList.add("body__lock");
})

// headerMobileBtn.addEventListener("click", function(){
//     menuIcon.classList.remove('menu-icon-active');
//     mobileMenu.classList.remove("header__mobile-nav--active");
//     bodyLock.classList.remove("body__lock");
// })