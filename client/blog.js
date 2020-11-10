import './blog.css';

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('#menu-container');
  const menuOpenBtn = document.querySelector('#menu-open-btn');
  const menuCloseBtn = document.querySelector('#menu-close-btn');

  menuOpenBtn?.addEventListener('click', () => {
    menuContainer?.classList.remove('hidden');
    menuContainer?.classList.add('absolute');
  });

  menuCloseBtn?.addEventListener('click', () => {
    menuContainer?.classList.remove('absolute');
    menuContainer?.classList.add('hidden');
  });

  const previewContainer = document.querySelector('#preview-container');
  const previewBackdrop = document.querySelector('#preview-backdrop');
  const previewCloseBtn = document.querySelector('#preview-close');
  const previewElement = document.querySelector('#preview-image');

  [...document.querySelectorAll('img')]
    .filter((image) => image.getAttribute('src') !== null)
    .forEach((image) => image.addEventListener('click', () => {
      previewElement?.setAttribute('src', image.getAttribute('src'));
      previewElement?.setAttribute('alt', image.getAttribute('alt'));

      previewContainer?.classList.remove('hidden');
      previewContainer?.classList.add('fixed');
    }));

  previewBackdrop?.addEventListener('click', () => {
    previewContainer?.classList.remove('fixed');
    previewContainer?.classList.add('hidden');
  });

  previewCloseBtn?.addEventListener('click', () => {
    previewContainer?.classList.remove('fixed');
    previewContainer?.classList.add('hidden');
  });

  console.info('Hi! 👋\nIf you are even more curious, you can find the source code of this site here: https://github.com/keysh/blog');
});
