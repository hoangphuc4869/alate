var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".FeedbackSwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination-feed",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-feed",
    prevEl: ".swiper-button-prev-feed",
  },
});

var swiper = new Swiper(".ProjectSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
