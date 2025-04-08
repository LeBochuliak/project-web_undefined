import header1x from '../img/header/header_logo@1x.png';
import header2x from '../img/header/header_logo@2x.png';

const images = {
  header: {
    srcset: header2x,
    src: header1x,
  },
};

export default images;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.header-image').forEach(img => {
    img.srcset = images.header.srcset;
    img.src = images.header.src;
  });

  const burgerButton = document.querySelector('.header-burger-button');
  const closeButton = document.querySelector(
    '.header-mobile-menu-close-button'
  );
  const menuBackground = document.querySelector(
    '.header-mobile-menu-background'
  );
  const menuLinks = document.querySelectorAll('.header-mobile-menu-link');
  const orderButton = document.querySelector(
    '.header-mobile-menu-order-button'
  );
  const headerButton = document.querySelector('.header-navbar-button');

  const desktopMenuButton = document.querySelector('.header-title-menu');
  const menuCenterList = document.querySelector('.header-desk-menu-list');
  const menuDeskLinks = document.querySelectorAll('.header-desk-menu-link');

  function openMobileMenu() {
    menuBackground.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    menuBackground.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (burgerButton) burgerButton.addEventListener('click', openMobileMenu);
  if (closeButton) closeButton.addEventListener('click', closeMobileMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetSection = document.getElementById(
        link.getAttribute('href').substring(1)
      );
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      closeMobileMenu();
    });
  });

  if (menuBackground) {
    menuBackground.addEventListener('click', event => {
      if (!event.target.closest('.header-mobile-menu-wrapper')) {
        closeMobileMenu();
      }
    });
  }

  function openDesktopMenu() {
    menuCenterList.classList.add('is-open');
  }

  function closeDesktopMenu() {
    menuCenterList.classList.remove('is-open');
  }

  if (desktopMenuButton) {
    desktopMenuButton.addEventListener('click', () => {
      menuCenterList.classList.toggle('is-open');
    });
  }

  menuDeskLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetSection = document.getElementById(
        link.getAttribute('href').substring(1)
      );
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      closeDesktopMenu();
    });
  });

  document.addEventListener('click', event => {
    if (
      !event.target.closest('.header-desk-menu-list') &&
      !event.target.closest('.header-title-menu')
    ) {
      closeDesktopMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMobileMenu();
      closeDesktopMenu();
    }
  });

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (orderButton) {
    orderButton.addEventListener('click', event => {
      event.preventDefault();
      scrollToSection('work-together');
      closeMobileMenu();
    });
  }

  if (headerButton) {
    headerButton.addEventListener('click', event => {
      event.preventDefault();
      scrollToSection('work-together');
    });
  }
});
