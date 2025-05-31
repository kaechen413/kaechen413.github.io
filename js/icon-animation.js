document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');
  const orbitContainer = document.querySelector('.orbit-container'); 

  const orbits = {
    1: [0.25, 0.1],
    2: [0.5, 0.2],
    3: [0.75, 0.3],
    4: [1, 0.4],
    5: [1.25, 0.5],
  };

  const skillData = Array.from(skills).map(skill => ({
    el: skill,
    baseAngle: parseFloat(skill.dataset.angle),
    orbit: parseInt(skill.dataset.orbit, 10)
  }));

  function animateOrbit(time) {
    const rect = orbitContainer.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    skillData.forEach(({ el, baseAngle, orbit }, i) => {
      const speed = 0.05; 
      const angle = baseAngle + time * speed * 0.03;
      const radians = angle * (Math.PI / 180);
      const [fracX, fracY] = orbits[orbit]
      const radiusX = w * fracX;
      const radiusY = h * fracY;

      const x = Math.cos(radians) * radiusX;
      const y = Math.sin(radians) * radiusY;

      el.style.left = `calc(50% + ${x}px)`;
      el.style.top = `calc(50% + ${y}px)`;
    });
    requestAnimationFrame(animateOrbit);
  }

  requestAnimationFrame(animateOrbit);
});
