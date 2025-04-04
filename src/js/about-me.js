// Бібліотеки
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

import Swiper from 'swiper';
import 'swiper/css';
// !Бібліотеки
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
