
"use strict";
const body = document.querySelector("body");
const btnScroll = document.querySelectorAll(".btn_scroll");
const linkMenu = document.querySelector(".burger_menu");
const ul = document.querySelector("#nav_ul");

linkMenu.addEventListener("click", (e) => {
  e.preventDefault();
  ul.classList.toggle("menu_active");
  linkMenu.classList.toggle("active");
  for (let i = 0; i < ul.classList.length; i++) {
    if (ul.classList[i] === "menu_active") {
      const menuList = document.querySelectorAll(".menu_active .list_link");
      menuList.forEach((link) => {
        link.addEventListener("click", (e) => {
          linkMenu.classList.remove("active");
          ul.classList.remove("menu_active");
        });
      });
    }
  }
});

for (let anchor of btnScroll) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if(anchor.getAttribute("href") != '#') {
      const blockID = anchor.getAttribute("href");
      document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }
  });
}

let mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
