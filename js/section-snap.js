/* =============================================
   HUBLE — Section Snap Scroll
   Snaps to each section on scroll
   ============================================= */

export function initSectionSnap() {
  const sections = Array.from(document.querySelectorAll('.hero, .section, footer')).filter(
    s => s.style.display !== 'none'
  );
  if (sections.length === 0) return;

  let isAnimating = false;
  let currentIndex = 0;
  const navHeight = 60;
  let touchStartY = 0;

  function getTargetScroll(index) {
    if (index === 0) return 0;
    return sections[index].offsetTop - navHeight;
  }

  function getClosestIndex() {
    const scrollY = window.scrollY;
    let closest = 0;
    let minDist = Infinity;

    sections.forEach((_, i) => {
      const dist = Math.abs(scrollY - getTargetScroll(i));
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    return closest;
  }

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length || isAnimating) return;
    isAnimating = true;
    currentIndex = index;
    window.scrollTo({ top: Math.max(0, getTargetScroll(index)), behavior: 'smooth' });
    setTimeout(() => { isAnimating = false; }, 800);
  }

  window.addEventListener('wheel', (e) => {
    if (isAnimating) { e.preventDefault(); return; }
    currentIndex = getClosestIndex();
    if (e.deltaY > 30) { e.preventDefault(); scrollToSection(currentIndex + 1); }
    else if (e.deltaY < -30) { e.preventDefault(); scrollToSection(currentIndex - 1); }
  }, { passive: false });

  window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchend', (e) => {
    if (isAnimating) return;
    const diff = touchStartY - e.changedTouches[0].clientY;
    currentIndex = getClosestIndex();
    if (Math.abs(diff) > 50) scrollToSection(diff > 0 ? currentIndex + 1 : currentIndex - 1);
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    if (isAnimating) return;
    currentIndex = getClosestIndex();
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); scrollToSection(currentIndex + 1); }
    else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); scrollToSection(currentIndex - 1); }
  });
}
