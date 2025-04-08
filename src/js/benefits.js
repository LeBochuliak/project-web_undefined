document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.benefits-btn');
  if (button) {
    button.addEventListener('click', event => {
      event.preventDefault();
      const targetId = button.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  }

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
