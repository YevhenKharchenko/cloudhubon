import Swiper from 'swiper';
import 'swiper/css/bundle';

const servicesDots = document.querySelectorAll('.services-dot');

let servicesSwiper;

servicesSwiper = new Swiper('.services-swiper-container', {
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
      slidesPerView: 6,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.services-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateServicesDots(this.realIndex);
    },
  },
});

function updateServicesDots(index) {
  servicesDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

servicesDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    servicesSwiper.slideTo(index);
  });
});
