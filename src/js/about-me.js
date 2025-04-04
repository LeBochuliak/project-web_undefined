// Бібліотеки
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// !Бібліотеки

                // Акордеон
document.addEventListener("DOMContentLoaded", () => {
    const accEls = document.querySelectorAll(".accordion-el");
    [...accEls].forEach((accEl) => {
        if (accEl.classList.contains("is-active")) {
            const icon = accEl.querySelector(".arrow-top");
            if (icon) {
                icon.style.transform = "rotate(0deg)";
            }
        }
    });
})

const accordion = new Accordion(".accordion-container", {
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
                // ! Акордеон

                // Свайпер
const swiper = new Swiper('.swiper', {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        // when window width is >= 640px
        1440: {
            slidesPerView: 6,
            spaceBetween: 0
        }
    },
    speed: 400,
        // spaceBetween: 100,
     direction: 'horizontal',
    loop: true,
        // pagination: {
        // el: '.swiper-pagination',
        // },
     navigation: {
        nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
        },
});
console.log(swiper.params);

                // ! Свайпер