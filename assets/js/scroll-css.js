// The debounce function receives our function as a parameter
const debounce = (fn) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params);
    });
  };
};

const nav = document.querySelector("nav");
const smallLogoListItem = document.querySelector(
  "nav ul li:not(.menu-element)"
);
const logo = document.querySelector("#index-page .logo");

const menuElementsLeft = document.querySelectorAll("nav li.menu-element.left");
const menuElementsRight = document.querySelectorAll(
  "nav li.menu-element.right"
);

const logoheight = 90; //px
const navlogoheight = 32; //px
const navbarHeight = 52; //px not counting the bottom padding height - padding-bottom
const smallLogoWidth = 20; //px
const gap = 100; // px
const displacementMax = (smallLogoWidth + gap) / 2; //px

const logoBottomPointLimit = navbarHeight + logoheight;

const heightCoef = logoheight / (logoheight - navlogoheight);

const displacementCoef = logoheight / displacementMax;

const setLogoInNavBar = () => {
  //when the logo is in the navbar
  nav.style.background = "white";
  nav.style.boxShadow = "0px 4px 20px 0px rgba(0, 0, 0, 0.05)";
  nav.style.transition = "box-shadow 0.3s linear 0s";
  smallLogoListItem.style.display = "list-item";
  menuElementsLeft.forEach((element) => {
    element.style.transform = `translateX(0px)`;
  });
  menuElementsRight.forEach((element) => {
    element.style.transform = `translateX(0px)`;
  });
};

const calculateNewIconAndMenuPosition = () => {
  if (window.matchMedia("only screen and (max-width: 768px)").matches) {
    nav.style.background = "white";
    nav.style.boxShadow = "0px 4px 20px 0px rgba(0, 0, 0, 0.05)";
    nav.style.transition = "box-shadow 0.3s linear 0s";
    smallLogoListItem.style.display = "none";
    logo.style.height = "";
    return;
  }
  if (!logo) {
    setLogoInNavBar();
    return;
  }
  const bottomPosition = logo.getBoundingClientRect().bottom;

  if (bottomPosition <= logoBottomPointLimit) {
    //calculate and refresh the values while transitionning
    const height =
      logoheight - (logoBottomPointLimit - bottomPosition) / heightCoef;

    logo.style.height = `${height}px`;

    const displacement =
      (logoBottomPointLimit - bottomPosition) / displacementCoef;

    menuElementsLeft.forEach((element) => {
      element.style.transform = `translateX(-${displacement}px)`;
    });
    menuElementsRight.forEach((element) => {
      element.style.transform = `translateX(${displacement}px)`;
    });
  } else {
    //reset to initial state when scroll up
    logo.style.height = "";
  }

  if (bottomPosition <= navbarHeight) {
    setLogoInNavBar();
  } else {
    //when logo is in the landing page or in transitions
    nav.style.background = "transparent";
    nav.style.boxShadow = "";
    smallLogoListItem.style.display = "none";
  }
};

window.addEventListener("scroll", debounce(calculateNewIconAndMenuPosition), {
  passive: true,
});

calculateNewIconAndMenuPosition();
