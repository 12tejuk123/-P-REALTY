/* =========================================
   COMPLETE PREMIUM JS
   REPLACE OLD script.js
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll",()=>{

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* FADE IN ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

});

sections.forEach(section=>{

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";

});