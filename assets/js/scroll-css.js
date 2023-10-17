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
const smallLogo = document.querySelector("nav .logo");
const logo = document.querySelector("#index-page .logo");

const logoheight = 90; //px
const navlogoheight = 32; //px
const navbarHeight = 72; //px

const logoBottomPointLimit = navbarHeight + logoheight;

const sizeCoef = logoheight / (logoheight - navlogoheight);

const updateTransform = () => {
  const boundingRect = logo.getBoundingClientRect();
  const bottomPosition = boundingRect.bottom;

  if (bottomPosition <= logoBottomPointLimit) {
    const size =
      bottomPosition < navbarHeight
        ? navlogoheight
        : logoheight - (logoBottomPointLimit - bottomPosition) / sizeCoef;

    logo.style.height = `${size}px`;
  } else {
    logo.style.height = `${logoheight}px`;
  }

  if (bottomPosition <= navbarHeight) {
    nav.style.background = "white";
    smallLogo.style.visibility = "visible";
    logo.style.height = `0px`;
    logo.style.minHeight = "0px";
  } else {
    nav.style.background = "transparent";
    smallLogo.style.visibility = "hidden";
  }
};

window.addEventListener("scroll", debounce(updateTransform), { passive: true });
