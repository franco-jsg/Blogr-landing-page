//Show menu with hamburguer click

const hamburger = document.querySelector(".hamb");

const hamburguerImage = document.querySelector(".hamb--img");

const nav = document.querySelector(".nav");

let showMenu = false;

const toggleNav = () => {
  nav.classList.toggle("open");

  if (!showMenu) {
    hamburguerImage.src = "./assets/icon-close.svg";
  } else {
    hamburguerImage.src = "./assets/icon-hamburger.svg";
  }

  showMenu = !showMenu;
};

hamburger.addEventListener("click", toggleNav);

// Deploy of item in menu

const navItemConnect = document.querySelector("#connect--item");

const connectItem = document.querySelector(".connect--list");

const toggleList = () => {
  connectItem.classList.toggle("connect--open");
};

navItemConnect.addEventListener("click", toggleList);

// Arrow

const connectArrow = document.querySelector("div.connect > .arrow");

const toggleArrow = () => {
  connectArrow.classList.toggle("arrow--up");
};

navItemConnect.addEventListener("click", toggleArrow);

console.log(connectArrow);

// Animations with GSAP

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".title--section", { duration: 1.2, y: -50, opacity: 0 });

gsap.from(".title--section", {
  scrollTrigger: {
    trigger: ".title--section",
    start: "-300px center",
    end: "350px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1.2,
  y: -50,
  opacity: 0,
});

// First section

gsap.from(".background--first", {
  scrollTrigger: {
    trigger: ".background--first",
    start: "-300px center",
    end: "350px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1.2,
  opacity: 0,
  scale: 0.8,
});

gsap.from(".info--first--1", {
  scrollTrigger: {
    trigger: ".info--first--1",
    start: "-300px center",
    end: "450px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1.2,
  y: 25,
  opacity: 0,
});

gsap.from(".info--first--2", {
  scrollTrigger: {
    trigger: ".info--first--2",
    start: "-300px center",
    end: "350px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1.2,
  y: 25,
  opacity: 0,
});

// Second section

gsap.from(".phone", {
  scrollTrigger: {
    trigger: ".phone",
    start: "-300px center",
    end: "550px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1.5,
  y: -100,
  ease: "bounce",
  opacity: 0.9,
});

gsap.from(".second--info", {
  scrollTrigger: {
    trigger: ".second--info",
    start: "-300px center",
    end: "350px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1,
  y: -25,
  opacity: 0,
});

// Last section

gsap.from(".background--last", {
  scrollTrigger: {
    trigger: ".background--last",
    start: "-300px center",
    end: "350px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1.2,
  opacity: 0,
  scale: 0.8,
});

gsap.from(".info--last--1", {
  scrollTrigger: {
    trigger: ".info--last--1",
    start: "-300px center",
    end: "450px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1.2,
  y: 25,
  opacity: 0,
});

gsap.from(".info--last--2", {
  scrollTrigger: {
    trigger: ".info--last--2",
    start: "-300px center",
    end: "350px 100px",
    markers: false,
    toggleActions: "restart pause restart pause",
  },
  duration: 1.2,
  y: 25,
  opacity: 0,
});

//Hamburguer animation

const tl = gsap.timeline();

tl.to(".hamb", { duration: 0.5, rotate: 180 });

tl.reverse();

hamburger.addEventListener("click", function () {
  tl.reversed(!tl.reversed());
});
