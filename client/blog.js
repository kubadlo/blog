(function () {
  const menuElements = {
    container: document.querySelector('#navbar-mobile-container'),
    openBtn: document.querySelector('#navbar-open-btn'),
    closeBtn: document.querySelector('#navbar-close-btn')
  };

  if (menuElements.container && menuElements.openBtn && menuElements.closeBtn) {
    menuElements.openBtn.addEventListener('click', function () {
      menuElements.container.classList.remove('navbar-hidden');
      menuElements.container.classList.add('navbar-visible');
    });

    menuElements.closeBtn.addEventListener('click', () => {
      menuElements.container.classList.remove('navbar-visible');
      menuElements.container.classList.add('navbar-hidden');
    });
  }

  console.info(
    'Hi! 👋\nIf you are even more curious, you can find the source code of this site here: https://github.com/keysh/blog'
  );
})();
