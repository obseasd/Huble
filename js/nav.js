/* =============================================
   HUBLE — Navigation
   Mobile toggle, smooth scroll, active states
   ============================================= */

export function initNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  const mobileLinks = mobileNav?.querySelectorAll('.nav-link');
  const nav = document.querySelector('.nav');

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isActive);
  });

  // Close mobile nav on link click
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const navHeight = nav?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Nav scroll behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 80) {
      nav?.classList.add('nav-scrolled');
    } else {
      nav?.classList.remove('nav-scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Active section tracking
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
}
