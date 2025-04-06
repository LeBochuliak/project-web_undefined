import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
    const refs = {
      form: document.querySelector('.work-together-form'),
      emailInput: document.querySelector('#email'),
      textInput: document.querySelector('#text'),
      submitButton: document.querySelector('.work-together-send-contact-btn'),
      modalBackdrop: document.querySelector('.work-together-backdrop'),
      modalBtn: document.querySelector('.work-together-modal-btn'),
      footerModal: document.querySelector('.work-together-modal'),
    };
  
    const emailMessage = document.createElement('p');
    emailMessage.classList.add('email-message');
    refs.emailInput.insertAdjacentElement('afterend', emailMessage);
  
    function validateEmail() {
      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (emailPattern.test(refs.emailInput.value)) {
        refs.emailInput.classList.add('valid');
        refs.emailInput.classList.remove('invalid');
        emailMessage.textContent = 'Success!';
        emailMessage.style.color = '#3cbc81';
      } else {
        refs.emailInput.classList.add('invalid');
        refs.emailInput.classList.remove('valid');
        emailMessage.textContent = 'Invalid email, try again';
        emailMessage.style.color = '#e74a3b';
      }
    }
  
    function truncateComment() {
      const maxLength = 50;
      const ellipsis = '...';
  
      if (refs.textInput.value.length > maxLength) {
        refs.textInput.value =
          refs.textInput.value.substring(0, maxLength - ellipsis.length) +
          ellipsis;
      }
    }
  
    function openModal() {
      refs.modalBackdrop.classList.add('is-open');
      refs.footerModal.classList.add('is-open');
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', onEscPress);
    }
  
    function closeModal() {
      refs.modalBackdrop.classList.remove('is-open');
      refs.footerModal.classList.remove('is-open');
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', onEscPress);
    }
  
    function onEscPress(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }
  
    refs.emailInput.addEventListener('input', validateEmail);
    refs.textInput.addEventListener('input', truncateComment);
  
    refs.form.addEventListener('submit', async function (e) {
      e.preventDefault();
  
      if (!refs.emailInput.classList.contains('valid')) {
        iziToast.error({
          title: 'Error',
          message: 'Please enter a valid email.',
        });
        return;
      }
  
      const formObject = {
        email: refs.emailInput.value,
        comment: refs.textInput.value,
      };
  
      const endpoint = 'https://portfolio-js.b.goit.study/api/requests';
  
      try {
        const response = await axios.post(endpoint, formObject, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 201) {
          openModal();
          refs.form.reset();
          refs.emailInput.classList.remove('valid', 'invalid');
          emailMessage.textContent = '';
  
          iziToast.success({
            title: 'Success',
            message: 'Your request has been submitted successfully!',
          });
        } else {
          iziToast.error({
            title: 'Error',
            message: 'There was an error submitting your request.',
          });
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          'Network error. Please try again later.';
        iziToast.error({
          title: 'Error',
          message: errorMessage,
        });
        console.error(error);
      }
    });
  

    refs.modalBtn.addEventListener('click', closeModal);
  
    refs.modalBackdrop.addEventListener('click', function (event) {
      if (event.target === refs.modalBackdrop) {
        closeModal();
      }
    });
  });