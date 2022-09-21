"use strict";
import "./style.css";
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";

const toggleIcon = document.querySelector("#icon-hamburger");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  //if the menu is visible we need to make it not visible and keeping accibilities
  if (primaryNavigation.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", false);
    toggleIcon.setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    navToggle.setAttribute("aria-expanded", true);
    toggleIcon.setAttribute("src", "./images/icon-close.svg");
  }

  primaryNavigation.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// SLIDER
const splide = new Splide(".splide", {
  perPage: 2,
  gap: "2rem",
  type: "loop",
  drag: "free",
  padding: "12rem",
  arrows: false,
  breakpoints: {
    1200: {
      perPage: 1,
    },
    760: {
      padding: "3rem",
      gap: ".5rem",
    },
  },
});

splide.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  data.list.classList.add("custom_pagination");
});

splide.mount();
