document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    const iconToggle = item.querySelector(".icon-toggle");
    const isOpen = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach((ans) => {
      ans.style.display = "none";
    });

    document.querySelectorAll(".icon-toggle").forEach((icon) => {
      icon.classList.remove("active");
    });

    if (!isOpen) {
      answer.style.display = "block";
      iconToggle.classList.add("active");
    } else {
      answer.style.display = "none";
      iconToggle.classList.remove("active");
    }
  });
});

const burgerIcon = document.getElementById("burger-icon");
const navigationMenu = document.querySelector(".navigation-menu");

document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.getElementById("burger-icon");
  const navigationMenu = document.querySelector(".navigation-menu");

  if (burgerIcon && navigationMenu) {
    burgerIcon.addEventListener("click", () => {
      navigationMenu.classList.toggle("open");
    });
  } else {
    console.error("Element not found: burgerIcon or navigationMenu is null");
  }
});

var swiper = new Swiper(".swiper", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 800,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
