//menu open close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");

};
//swiper
var swiper = new Swiper(".services-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 50000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//header
let header = document.querySelector("header");

window.addEventListener("scroll",() => {
    header.classList.toggle("shadow", window.scrollY > 0);
})




