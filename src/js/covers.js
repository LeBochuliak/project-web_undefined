const originalList = document.querySelector('.covers-line');
for (let i = 0; i < 4; i++) {
  const copy = originalList.cloneNode(true);
  copy.classList.add('cloned-item');
  document.querySelector('.cloned-line').appendChild(copy);
}
