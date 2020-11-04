import './blog.css';

document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('#menu-open-btn');
  const closeMenuBtn = document.querySelector('#menu-close-btn');
  const menuContainer = document.querySelector('#menu-container');

  openMenuBtn?.addEventListener('click', () => {
    menuContainer?.classList.remove('hidden');
    menuContainer?.classList.add('absolute');
  });

  closeMenuBtn?.addEventListener('click', () => {
    menuContainer?.classList.remove('absolute');
    menuContainer?.classList.add('hidden');
  });
});
