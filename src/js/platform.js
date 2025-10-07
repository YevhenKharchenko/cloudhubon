import Swiper from 'swiper';
import 'swiper/css/bundle';

const platformDots = document.querySelectorAll('.platform-dot');

let platformSwiper;

platformSwiper = new Swiper('.platform-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.platform-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updatePlatformDots(this.realIndex);
    },
  },
});

function updatePlatformDots(index) {
  platformDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

platformDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    platformSwiper.slideTo(index);
  });
});
