// Бібліотеки
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// !Бібліотеки
//  Swiper.use([Navigation]);

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

    //     const swiper = new Swiper('.swiper', {
    //         slidesPerGroup: 1,   
    //         spaceBetween: 0,
    //         centeredSlides: false,   
    //         // uniqueNavElements: true,
    //         speed: 400,
    //   direction: 'horizontal',
    //   loop: true,
    //         loopAddBlankSlides: true,	
    //     slideToClickedSlide: false,  
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //   },
    //   breakpoints: {
    //         320: {
    //         slidesPerGroup:  1,
    //       slidesPerView: 2,
    //     },
    //         768: {
    //             slidesPerGroup:  1,
    //       slidesPerView: 3,
    //     },
    //         1440: {
    //             slidesPerGroup:  1,
    //       slidesPerView: 3,
    //     }
    //     },
    
    // });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        loopAdditionalSlides: 2,
        slidesPerGroup:  1,
        modules: [Navigation],
            //         spaceBetween: 0,

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



});

