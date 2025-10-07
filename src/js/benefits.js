import Swiper from 'swiper';
import 'swiper/css/bundle';

const benefitsDots = document.querySelectorAll('.benefits-dot');

let benefitsSwiper;

benefitsSwiper = new Swiper('.benefits-swiper-container', {
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
        .querySelector('.benefits-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateBenefitsDots(this.realIndex);
    },
  },
});

function updateBenefitsDots(index) {
  benefitsDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

benefitsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    benefitsSwiper.slideTo(index);
  });
});
