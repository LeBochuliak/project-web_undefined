import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion(['.accordion-container-faq'], {
  duration: 100,
  showMultiple: false,
  onOpen: currElement => {
    const icon = currElement.querySelector('.arrow-top-faq');
    if (icon) icon.style.transform = 'rotate(0deg)';
  },
  onClose: currElement => {
    const icon = currElement.querySelector('.arrow-top-faq');
    if (icon) icon.style.transform = 'rotate(180deg)';
  },
});
