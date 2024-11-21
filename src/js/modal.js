document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelector('.menu-mob-btn');
  const closeModalBtn = document.querySelector('.close_menu_btn');
  const modal = document.querySelector('[data-modal]');
  const menuLinks = modal?.querySelectorAll('.mob-menu-anchor');

  if (openModalBtn && closeModalBtn && modal) {
    // Відкрити/закрити меню
    openModalBtn.addEventListener('click', () => {
      modal.classList.remove('is-hidden');
      document.documentElement.classList.add('is-modal-open');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('is-hidden');
      document.documentElement.classList.remove('is-modal-open');
    });

    // Закривати меню при натисканні на посилання
    if (menuLinks) {
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          modal.classList.add('is-hidden');
          document.documentElement.classList.remove('is-modal-open');
        });
      });
    }
  }
});

