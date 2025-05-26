document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    const angle = parseFloat(skill.dataset.angle);
    const radius = parseFloat(skill.dataset.radius);
    const radians = angle * (Math.PI / 180);

    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;

    skill.style.left = `calc(50% + ${x}px)`;
    skill.style.top = `calc(50% + ${y}px)`;
  });
});
const section = document.querySelector('.orbit-container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.skill').forEach(skill => {
        skill.classList.add('visible');
      });
    }
  });
}, {
  threshold: 0.3
});

observer.observe(section);
