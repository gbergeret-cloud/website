window.onload = () => {
  swiperInit();
  mobileNavBarInit();

  let script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  document.body.append(script);
};
