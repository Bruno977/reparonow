// Padding Body

const header = document.querySelector("header");
const logoHeader = header.querySelector("[data-logo] img");
const heightHeader = header.offsetHeight;

function handleScrollWindow() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > heightHeader) {
    header.setAttribute("style", "padding: 10px;");
    header.classList.add("bg-body-default");
    header.classList.remove("bg-transparent");
    logoHeader.setAttribute("style", "max-height: 70px;");
  } else {
    header.removeAttribute("style");
    header.classList.remove("bg-body-default");
    header.setAttribute("style", "bg-transparent");

    logoHeader.removeAttribute("style");
  }
}

window.addEventListener("scroll", handleScrollWindow);

// Menu Side
const menuSide = document.querySelector("[data-menu-side]");
const btnOpenSide = document.querySelector("[data-open-side]");
const btnsCloseSide = document.querySelectorAll("[data-close-side]");
const overlay = document.querySelector("[data-overlay]");

if (menuSide && btnOpenSide && btnsCloseSide && overlay) {
  function handleOpenMenu() {
    menuSide.classList.add("active");
    overlay.setAttribute("style", "opacity:1; pointer-events: initial;");
  }

  function handleCloseMenu() {
    menuSide.classList.remove("active");
    overlay.setAttribute("style", "opacity:0; pointer-events: none;");
  }

  btnOpenSide.addEventListener("click", handleOpenMenu);
  btnsCloseSide.forEach((btn) => {
    btn.addEventListener("click", handleCloseMenu);
  });
}
// Smooth Scroll

const menuItems = document.querySelectorAll('[data-nav] a[href^="#"]');

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  handleCloseMenu();
  const to = getScrollTopByHref(event.currentTarget) - 80;

  scrollToPosition(to);
}

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }

    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
