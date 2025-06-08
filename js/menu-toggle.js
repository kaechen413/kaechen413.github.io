document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuIcon = document.querySelector('.menu-btn i');
  const menu = document.querySelector('.navbar-container .menu');
  const menuLinks = document.querySelectorAll('.navbar-container .menu li a');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
        // Toggle icon
    if (menuBtn.classList.contains('active')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Only close menu if it's open (mobile)
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      }
    });
  });
});