// Бібліотеки
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
//  !Бібліотеки
document.addEventListener("DOMContentLoaded", () => {
// Акордеон
    const accEls = document.querySelectorAll(".accordion-el");
    [...accEls].forEach((accEl) => {
        if (accEl.classList.contains("is-active")) {
            const icon = accEl.querySelector(".arrow-top");
            if (icon) {
                icon.style.transform = "rotate(0deg)";
            }
        }
    });

    const accordion = new Accordion(".description-list", {
        openOnInit: [0],
        duration: 400,
        showMultiple: false,

        onOpen: (currElement) => {
            const icon = currElement.querySelector(".arrow-top");
            if (icon) icon.style.transform = "rotate(0deg)";
        },
        onClose: (currElement) => {
            const icon = currElement.querySelector(".arrow-top");
            if (icon) icon.style.transform = "rotate(180deg)";
        },
    });
// !Акордеон

// Свайпер
    const swiper = new Swiper('.a-m-swiper', {
        direction: 'horizontal',
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerGroup:  1,
        modules: [Navigation],

        slidesPerView: 2,
          navigation: {
            nextEl: '.swiper-button-next',
            
        },
           breakpoints: {
               375: {
            slidesPerGroup:  1,
          slidesPerView: 2,
        },
            768: {
                slidesPerGroup:  1,
          slidesPerView: 3,
        },
            1440: {
                slidesPerGroup:  1,
          slidesPerView: 6,
        }
        },
    });
// !Свайпер

});

