document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.navbar-container .menu');
  const menuLinks = document.querySelectorAll('.navbar-container .menu li a');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Only close menu if it's open (mobile)
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
      }
    });
  });
});