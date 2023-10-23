const mobileNavBarInit = () => {
  const findBarIcon = document.querySelector("#navbar-bar-icon");
  const findXIcon = document.querySelector("#navbar-x-icon");
  const navBarLinks = document.querySelectorAll("nav .menu-element a");

  const toggleOpen = () => {
    nav.classList.toggle("open");
  };

  findBarIcon.addEventListener("click", toggleOpen);
  findXIcon.addEventListener("click", toggleOpen);
  navBarLinks.forEach((element) => {
    element.addEventListener("click", toggleOpen);
  });
};
