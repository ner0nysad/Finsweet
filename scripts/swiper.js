const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".review__swiper__button-next",
    prevEl: ".review__swiper__button-prev",
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  speed: 1000,
});
