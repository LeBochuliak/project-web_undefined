import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: true,
    openOnInit: [],
  });

  const accordions = document.querySelectorAll('.ac');

  accordions.forEach(item => {
    const trigger = item.querySelector('.close-accordion-btn');
    const icon = trigger?.querySelector('.arrow-top');

    if (trigger && icon) {
      trigger.addEventListener('click', () => {
        setTimeout(() => {
          if (item.classList.contains('is-active')) {
            icon.style.transform = 'rotate(0deg)';
          } else {
            icon.style.transform = 'rotate(180deg)';
          }
        }, 300);
      });
    }
  });
});
