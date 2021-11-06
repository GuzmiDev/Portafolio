const navBar = document.querySelector(".nav");
const main = document.querySelector("main");
const backMobile = document.querySelector(".back-mobile");
const aboutMeBtn = document.querySelector("#aboutMeBtn");
const workBtn = document.querySelector("#workBtn");
const navDesktopBtn = document.querySelector(".nav-desktop__trigger");
const aboutMeSection = document.querySelector(".about");
const workSection = document.querySelector(".work");
const homeSection = document.querySelector(".home");

const listNavDesktopItem = document.querySelectorAll(".nav-desktop__item");
const homeDesktopBtn = document.querySelector("#homeDesktopBtn");
const aboutDesktopBtn = document.querySelector("#aboutDesktopBtn");
const workDesktopBtn = document.querySelector("#workDesktopBtn");
const contactDesktopBtn = document.querySelector("contactDesktopBtn");
const blogDesktopBtn = document.querySelector("#blogDesktopBtn");

const aboutMeHomeBtn = document.querySelector(".about__mybutton");

backMobile.addEventListener("click", () => {
  main.classList.toggle("open");
  backMobile.classList.toggle("mostrar");
});

aboutMeBtn.addEventListener("click", () => {
  main.classList.toggle("open");
  backMobile.classList.toggle("mostrar");
  showSpecificSection(aboutMeSection);
});

workBtn.addEventListener("click", () => {
  main.classList.toggle("open");
  backMobile.classList.toggle("mostrar");
  showSpecificSection(workSection);
});

navDesktopBtn.addEventListener("click", () => {
  navDesktopBtn.classList.toggle("nav-desktop__screw");
  listNavDesktopItem.forEach((navItem) => {
    navItem.classList.toggle("nav-desktop__item-show");
  });
});

aboutDesktopBtn.addEventListener("click", () => {
  yellowzer(aboutDesktopBtn);
  showSpecificSection(aboutMeSection);
});

homeDesktopBtn.addEventListener("click", () => {
  yellowzer(homeDesktopBtn);
  showSpecificSection(homeSection);
});

workDesktopBtn.addEventListener("click", () => {
  yellowzer(workDesktopBtn);
  showSpecificSection(workSection);
});

aboutMeHomeBtn.addEventListener("click", () => {
  showSpecificSection(aboutMeSection, false);
});

const showSpecificSection = (sectionToShow, toggleMenu = true) => {
  const listSection = [aboutMeSection, workSection, homeSection];

  if (toggleMenu) {
    navDesktopBtn.classList.toggle("nav-desktop__screw");
    listNavDesktopItem.forEach((navItem) => {
      navItem.classList.toggle("nav-desktop__item-show");
    });
  }

  listSection.forEach((section) => {
    if (section != sectionToShow) {
      section.classList.remove("active");
    } else {
      section.classList.add("active");
    }
  });
};

const yellowzer = (tagToYellow) => {
  const listDesktopBtn = [homeDesktopBtn, workDesktopBtn, aboutDesktopBtn];

  listDesktopBtn.forEach((item) => {
    if (item != tagToYellow) {
      item.classList.remove("yellow");
    } else {
      item.classList.add("yellow");
    }
  });
};
