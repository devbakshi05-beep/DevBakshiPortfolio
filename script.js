/*==========================
 LOADER
==========================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});

/*==========================
 TYPING ANIMATION
==========================*/

new Typed("#typing", {

    strings: [

        "Full Stack Web Developer",

        "ASP.NET Core Developer",

        "Angular Developer",

        "REST API Developer"

    ],

    typeSpeed: 60,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});

/*==========================
 SCROLL PROGRESS BAR
==========================*/

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

/*==========================
 BACK TO TOP BUTTON
==========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================
 NAVBAR SCROLL EFFECT
==========================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.padding = "14px 35px";

        navbar.style.background =
            "rgba(15,23,42,.95)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.35)";

    }

    else {

        navbar.style.padding = "18px 35px";

        navbar.style.background =
            "rgba(17,24,39,.65)";

        navbar.style.boxShadow = "none";

    }

});

/*==========================
 MOBILE MENU
==========================*/

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    hamburger.classList.toggle("open");

});

/*==========================
 CLOSE MENU AFTER CLICK
==========================*/

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        hamburger.classList.remove("open");

    });

});

/*==========================
 SCROLL REVEAL
==========================*/

ScrollReveal({

    distance: "70px",

    duration: 1200,

    delay: 150,

    reset: false

});

ScrollReveal().reveal(

    ".hero-left",

    { origin: "left" }

);

ScrollReveal().reveal(

    ".hero-right",

    { origin: "right" }

);

ScrollReveal().reveal(

    ".project-card",

    {

        interval: 200,

        origin: "bottom"

    }

);

ScrollReveal().reveal(

    ".about-left",

    {

        origin: "left"

    }

);

ScrollReveal().reveal(

    ".about-right",

    {

        origin: "right"

    }

);

ScrollReveal().reveal(

    ".skill-card",

    {

        interval: 120

    }

);

ScrollReveal().reveal(

    ".timeline-item",

    {

        interval: 200

    }

);

ScrollReveal().reveal(

    ".contact-card",

    {

        interval: 150

    }

);

/*==========================
 ACTIVE NAV LINK
==========================*/

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (

            link.getAttribute("href") ===
            "#" + current

        ) {

            link.classList.add("active-link");

        }

    });

});
const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0) rotateY(0)";

});

});
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});