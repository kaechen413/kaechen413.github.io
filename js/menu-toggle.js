window.addEventListener('DOMContentLoaded', () => {
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar-container .menu');
const menuIcon = document.querySelector('.menu-btn i');

menuBtn.addEventListener('click', function() {
  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
});
});
