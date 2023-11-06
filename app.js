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

const angleDowns = document.querySelectorAll(".tabs i");
const list = document.querySelectorAll(".list-tab");
var isArrowDown = new Array(angleDowns.length).fill(true);

if (angleDowns.length > 0 && list.length > 0) {
  for (var i = 0; i < list.length; i++) {
    list[i].classList.add("hide");
    angleDowns[i].classList.remove("fa-minus");
    angleDowns[i].classList.add("fa-plus");
  }
  list[0].classList.add("show");
  angleDowns[0].classList.remove("fa-plus");
  angleDowns[0].classList.add("fa-minus");
}

if (angleDowns) {
  angleDowns.forEach((angle, index) => {
    angle.addEventListener("click", () => {
      list.forEach((tab, tabIndex) => {
        if (tabIndex === index) {
          tab.classList.toggle("show");
        } else {
          tab.classList.remove("show");
        }
      });

      angleDowns.forEach((arrow, arrowIndex) => {
        if (arrowIndex === index) {
          arrow.classList.toggle("fa-minus");
          arrow.classList.toggle("fa-plus");
        } else {
          arrow.classList.remove("fa-minus");
          arrow.classList.add("fa-plus");
        }
      });
    });
  });
}
