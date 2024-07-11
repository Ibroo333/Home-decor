const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});








const scrollrevealoption = {
    distance:'60px',
    origin:'top',
    duration:800,
}

//hedaer container
ScrollReveal().reveal('.header_container h1',{
    ...scrollrevealoption
   
}) 

ScrollReveal().reveal('.header_container p',{
    ...scrollrevealoption,
    delay:550

   
}) 
ScrollReveal().reveal('.header_container form',{
    ...scrollrevealoption,
    delay:850
   
}) 

ScrollReveal().reveal('.header_container a',{
    ...scrollrevealoption,
    delay:1050
   
}) 


const swiper = new Swiper(".swiper", {
    loop:true,
    pagination:{
        el:".swiper-pagination"
    },
})

