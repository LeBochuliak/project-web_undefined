import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel, A11y } from 'swiper/modules';
import 'swiper/css';

const prevButton = document.querySelector('.projects-prev-btn');
const nextButton = document.querySelector('.projects-next-btn');

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel, A11y],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 40,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    forceToAxis: true,
  },
  navigation: {
    nextEl: '.projects-next-btn',
    prevEl: '.projects-prev-btn',
  },
  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  on: {
    init: function () {
      updateButtonState(this);
    },
    slideChange: function () {
      updateButtonState(this);
    },
  },
});

function updateButtonState(swiper) {
  if (swiper.isBeginning) {
    prevButton.classList.add('projects-btn-disabled');
    prevButton.disabled = true;
  } else {
    prevButton.classList.remove('projects-btn-disabled');
    prevButton.disabled = false;
  }

  if (swiper.isEnd) {
    nextButton.classList.add('projects-btn-disabled');
    nextButton.disabled = true;
  } else {
    nextButton.classList.remove('projects-btn-disabled');
    nextButton.disabled = false;
  }
}
