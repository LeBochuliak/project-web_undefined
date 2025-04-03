// Бібліотеки
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

import Swiper from 'swiper';
import 'swiper/css';
// !Бібліотеки 


const container = document.querySelector('.accordion-container');
const accordion = new Accordion(container, {
    showMultiple: true,
    onOpen: (currEl) => console.log('Open!', currEl)
});
 
const buttons = accContainer.querySelectorAll('.close-accordion-btn');
[...buttons].map((button, idx) => {
    button.addEventListener('click', () => accordion.close(idx));
});