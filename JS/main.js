// Selecting DOM elements
let scrolledNavBar = document.querySelector(".navbar");
let span = document.querySelector(".up");
let header = document.querySelector(".header");
let about = document.querySelector(".about");
let services = document.querySelector(".services");
let statics = document.querySelector(".statics");
let portfolio = document.querySelector(".portfolio");
let blog = document.querySelector(".blog");
let contact = document.querySelector(".contact");
let progress = document.querySelectorAll(".progress-bar");
let nums = document.querySelectorAll(".num");
let started = false;

let navItems = document.querySelectorAll(
  ".navbar-nav .nav-item:not(.dropdown)"
);

let sections = [header, about, services, portfolio, blog, contact];

// Function to set the active link based on scroll position
function setActiveLink() {
  let scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach((section, index) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navItems.forEach((item) => item.classList.remove("active"));
      navItems[index].classList.add("active");
    }
  });
}

setActiveLink();

// Smoothly scroll to the target section, accounting for a fixed offset
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const offset = 90;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// Typing effect
var typed = new Typed(".auto-type", {
  strings: ["Programmer", "Designer", "YouTuber", "Freelancer"],
  typeSpeed: 65,
  backSpeed: 65,
  loop: true,
});

document.addEventListener("scroll", function () {
  // Navbar scroll effect
  if (window.scrollY >= 56) {
    scrolledNavBar.classList.add("navbar-scrolled");
    span.classList.add("show");
  } else {
    scrolledNavBar.classList.remove("navbar-scrolled");
    span.classList.remove("show");
  }

  // Progress animation
  if (window.scrollY >= header.offsetTop + 400) {
    progress.forEach((x) => {
      x.style.width = x.dataset.width;
    });
  }

  // Counter animation
  if (window.scrollY >= statics.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  setActiveLink();
});

// Function to start counting
function startCount(el) {
  let goal = el.dataset.goal;
  let duration = 350;
  let increment = goal / duration;
  let count = 0;

  let updateCount = setInterval(() => {
    count += increment;
    if (count >= goal) {
      el.textContent = goal;
      clearInterval(updateCount);
    } else {
      el.textContent = Math.floor(count);
    }
  }, 1);
}

// Scroll-to-top button
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    dotsEach: true,
  });
});
