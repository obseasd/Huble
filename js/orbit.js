/* =============================================
   HUBLE — Orbit Animation
   Cards rotating clockwise in a circle, staying upright
   ============================================= */

export function initOrbit() {
  const orbit = document.getElementById('aboutOrbit');
  if (!orbit) return;

  const cards = orbit.querySelectorAll('.orbit-card');
  const radius = 150;
  const cardCount = cards.length;
  const speed = 0.12; // degrees per frame — 20% slower than 0.15

  let angle = 0;
  let animId;

  function positionCards() {
    const cx = orbit.offsetWidth / 2;
    const cy = orbit.offsetHeight / 2;

    cards.forEach((card, i) => {
      const cardAngle = angle + (i * 360 / cardCount);
      const rad = (cardAngle - 90) * Math.PI / 180; // -90 so first card starts at top

      const x = cx + radius * Math.cos(rad) - card.offsetWidth / 2;
      const y = cy + radius * Math.sin(rad) - card.offsetHeight / 2;

      card.style.left = x + 'px';
      card.style.top = y + 'px';
      // No rotation — cards stay upright
      card.style.transform = 'none';
    });
  }

  function animate() {
    angle += speed;
    if (angle >= 360) angle -= 360;
    positionCards();
    animId = requestAnimationFrame(animate);
  }

  orbit.style.animation = 'none';
  positionCards();
  animate();

  // Pause when out of viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!animId) animate();
      } else {
        if (animId) cancelAnimationFrame(animId);
        animId = null;
      }
    });
  }, { threshold: 0.1 });

  observer.observe(orbit);
}
