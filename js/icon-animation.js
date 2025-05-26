document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.skills');
  if (!section) return;

  const skills = document.querySelectorAll('.skill');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          skills.forEach(skill => {
            const dx = parseInt(skill.dataset.x);
            const dy = parseInt(skill.dataset.y);
            skill.classList.add("visible");
            skill.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
          });
        }, 600);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(section);
});
