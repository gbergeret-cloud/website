const swiperInit = () => {
  const swiper = new Swiper(".swiper", {
    grabCursor: true,
    slidesPerView: 1, //default value
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    loop: true,
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    breakpoints: {
      // when window width is >= 320px
      425: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5, //this value should be maximum half of the number of element in the list
      },
    },
  });
};
