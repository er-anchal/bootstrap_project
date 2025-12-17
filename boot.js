// This file is part of Typed.js
window.addEventListener("DOMContentLoaded", function () {
  function prettyLog(message) {
    console.log("[Typed Event] " + message);
  }

  // Typed.js initialization
  var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 40,
    backSpeed: 50,
    backDelay: 1400,
    startDelay: 1000,
    loop: true,
    onBegin: function (self) {
      prettyLog("onBegin " + self);
    },
    onComplete: function (self) {
      prettyLog("onComplete " + self);
    },
    preStringTyped: function (pos, self) {
      prettyLog("preStringTyped " + pos + " " + self);
    },
    onStringTyped: function (pos, self) {
      prettyLog("onStringTyped " + pos + " " + self);
    },
    onLastStringBackspaced: function (self) {
      prettyLog("onLastStringBackspaced " + self);
    },
    onTypingPaused: function (pos, self) {
      prettyLog("onTypingPaused " + pos + " " + self);
    },
    onTypingResumed: function (pos, self) {
      prettyLog("onTypingResumed " + pos + " " + self);
    },
    onReset: function (self) {
      prettyLog("onReset " + self);
    },
    onStop: function (pos, self) {
      prettyLog("onStop " + pos + " " + self);
    },
    onStart: function (pos, self) {
      prettyLog("onStart " + pos + " " + self);
    },
    onDestroy: function (self) {
      prettyLog("onDestroy " + self);
    },
  });

  // Swiper Initialization

  const swiper = new Swiper("#swiper1", {
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var int_trip_swiper = new Swiper("#swiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("navbar-colored");
    } else {
      navbar.classList.remove("navbar-colored");
      navbar.classList.add("navbar-transparent");
    }
  });
});
