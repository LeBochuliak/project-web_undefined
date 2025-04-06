document.addEventListener('DOMContentLoaded', () => {
  const originalLists = document.querySelectorAll('.covers-line');
  originalLists.forEach(list => {
    let copy = list.cloneNode(true);
    copy.classList.add('cloned-line');
    const items = copy.querySelectorAll('li');
    copy.prepend(items[items.length - 1].cloneNode(true));
    copy.prepend(items[items.length - 2].cloneNode(true));
    document.querySelector('.cloned-lines').appendChild(copy);
  });

  const coversSection = document.querySelector('.covers-section');
  const coversContent = document.querySelector('.covers-content');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          coversContent.style.animationPlayState = 'running';
        } else {
          coversContent.style.animationPlayState = 'paused';
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  if (coversSection) {
    observer.observe(coversSection);
  }
});
