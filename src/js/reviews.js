import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import closeIcon from '../img/reviews/closeIcon.png';
import errorIcon from '../img/reviews/errorIcon.png';

const refs = {
  reviewsSectionBox: document.querySelector('.swiper'),
  reviewsListBox: document.querySelector('.reviews-list'),
};

async function getReviews() {
  const apiUrl = 'https://portfolio-js.b.goit.study/api/reviews';
  const params = {};
  try {
    const data = await axios.get(apiUrl, params).then(res => {
      const markup = markupRender(res.data);
      return (refs.reviewsListBox.innerHTML = markup);
    });
    return data;
  } catch (error) {
    messageError(error);
    refs.reviewsSectionBox.innerHTML =
      '<p class="reviews-not-found">Not Found</p>';
  }
}
const iziOpt = {
  messageColor: '#FAFAFB',
  messageSize: '16px',
  backgroundColor: '#EF4040',
  iconUrl: errorIcon,
  close: false,
  buttons: [
    [
      `<button><img src = "${closeIcon}"/></button>`,
      function (instance, toast) {
        instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
      },
      true,
    ],
  ],
  transitionIn: 'bounceInLeft',
  position: 'topRight',
  displayMode: 'replace',
  closeOnClick: true,
};

function messageError(error) {
  const options = {
    rootMargin: '0px',
    threshold: 1,
  };
  const observer = new IntersectionObserver(arr => {
    const info = arr[0];
    if (info.isIntersecting) {
      iziToast.show({
        ...iziOpt,
        message: `Sorry! ${error}`,
      });
    }
  }, options);
  observer.observe(refs.reviewsSectionBox);
}
function markupRender(data) {
  const markup = data
    .map(
      ({
        author,
        avatar_url,
        review,
        _id,
      }) => `<li class="review-item swiper-slide">
          <img
            width="48px"
            height="48px"
            src="${avatar_url}"
            srcset="${avatar_url}"
            alt="Reviewer photo"
            class="review-photo"
          />
          <div class="review-info">
            <h3 class="review-author">${author}</h3>
            <p class="review-text">${review}</p>
          </div>
        </li>`
    )
    .join(' ');
  return markup;
}

getReviews();

function initSwiper() {
  new Swiper('.swiper', {
    speed: 1000,
    spaceBetween: 16,
    autoHeight: true,
    centeredSlidesBounds: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        autoHeight: false,
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        autoHeight: false,
      },
    },

    direction: 'horizontal',
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: { enabled: true },
    mousewheel: { enabled: true },
  });
}

initSwiper();
