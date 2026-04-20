/* =============================================
   HUBLE — GSAP Scroll Animations
   ============================================= */

export function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero load animation
  const heroTl = gsap.timeline({ delay: 0.3 });

  // Hero content entrance
  heroTl.from('.hero-eyebrow', {
    opacity: 0, y: 20, duration: 0.6, ease: 'power2.out'
  });

  heroTl.from('.hero-title', {
    opacity: 0, y: 40, duration: 0.9, ease: 'power3.out'
  }, '-=0.3');

  heroTl.from('.hero-subtitle', {
    opacity: 0, y: 25, duration: 0.7, ease: 'power2.out'
  }, '-=0.5');

  heroTl.from('.hero-ctas', {
    opacity: 0, y: 20, duration: 0.6, ease: 'power2.out'
  }, '-=0.4');

  // Decorative elements fade in
  heroTl.from('.hero-chip-card, .hero-avatar-card, .hero-disc-mint, .hero-mini-tag, .hero-ring', {
    opacity: 0, scale: 0.7, duration: 0.8, stagger: 0.08, ease: 'back.out(1.3)'
  }, '-=0.6');

  // Helper: safe scroll animation that always resolves to final state
  function animateIn(targets, triggerEl, vars) {
    const tween = gsap.from(targets, {
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 90%',
        toggleActions: 'play none none none',
        onEnter: () => {
          // Force final state after animation completes
          setTimeout(() => {
            gsap.set(targets, { clearProps: 'all' });
          }, (vars.duration || 0.6) * 1000 + (vars.stagger || 0) * 1000 * document.querySelectorAll(targets).length + 200);
        }
      },
      ...vars
    });
    return tween;
  }

  // Section labels
  gsap.utils.toArray('.section-label').forEach(label => {
    gsap.from(label, {
      scrollTrigger: { trigger: label, start: 'top 92%', toggleActions: 'play none none none' },
      opacity: 0, x: -20, duration: 0.5, ease: 'power2.out'
    });
  });

  // Section titles
  gsap.utils.toArray('.section-header .section-title, .about-text .section-title').forEach(title => {
    gsap.from(title, {
      scrollTrigger: { trigger: title, start: 'top 92%', toggleActions: 'play none none none' },
      opacity: 0, y: 30, duration: 0.7, ease: 'power2.out'
    });
  });

  // Section subtitles
  gsap.utils.toArray('.section-subtitle').forEach(sub => {
    gsap.from(sub, {
      scrollTrigger: { trigger: sub, start: 'top 92%', toggleActions: 'play none none none' },
      opacity: 0, y: 20, duration: 0.6, delay: 0.15, ease: 'power2.out'
    });
  });

  // Service cards (svc)
  const serviceCards = document.querySelectorAll('.services .svc');
  if (serviceCards.length) {
    gsap.from(serviceCards, {
      scrollTrigger: { trigger: '.services-grid', start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 0, y: 50, duration: 0.7, stagger: 0.15, ease: 'power2.out',
      onComplete: () => gsap.set(serviceCards, { clearProps: 'all' })
    });

    // Cursor-tracking spotlight
    serviceCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--y', (e.clientY - rect.top) + 'px');
      });
    });
  }

  // Process steps (orb-style)
  const processSteps = document.querySelectorAll('.process .step');
  if (processSteps.length) {
    gsap.from(processSteps, {
      scrollTrigger: { trigger: '.process-steps', start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 0, y: 40, duration: 0.6, stagger: 0.12, ease: 'power2.out',
      onComplete: () => gsap.set(processSteps, { clearProps: 'all' })
    });
  }

  // About text
  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
    gsap.from(aboutText, {
      scrollTrigger: { trigger: '.about-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, x: -60, duration: 0.9, ease: 'power2.out',
      onComplete: () => gsap.set(aboutText, { clearProps: 'all' })
    });
  }

  // About glass cards
  const aboutCards = document.querySelectorAll('.about-glass-card');
  if (aboutCards.length) {
    gsap.from(aboutCards, {
      scrollTrigger: { trigger: '.about-visual', start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 0, scale: 0.6, duration: 0.7, stagger: 0.15, ease: 'back.out(1.5)',
      onComplete: () => gsap.set(aboutCards, { clearProps: 'all' })
    });
  }

  // About values
  const valueItems = document.querySelectorAll('.value-item');
  if (valueItems.length) {
    gsap.from(valueItems, {
      scrollTrigger: { trigger: '.about-values', start: 'top 92%', toggleActions: 'play none none none' },
      opacity: 0, y: 25, duration: 0.5, stagger: 0.15, ease: 'power2.out',
      onComplete: () => gsap.set(valueItems, { clearProps: 'all' })
    });
  }

  // FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length) {
    gsap.from(faqItems, {
      scrollTrigger: { trigger: '.faq-list', start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 0, y: 20, duration: 0.4, stagger: 0.08, ease: 'power2.out',
      onComplete: () => gsap.set(faqItems, { clearProps: 'all' })
    });
  }

  // Contact
  const contactInfo = document.querySelector('.contact-info');
  if (contactInfo) {
    gsap.from(contactInfo, {
      scrollTrigger: { trigger: '.contact-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, x: -50, duration: 0.8, ease: 'power2.out',
      onComplete: () => gsap.set(contactInfo, { clearProps: 'all' })
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    gsap.from(contactForm, {
      scrollTrigger: { trigger: '.contact-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 0, x: 50, duration: 0.8, ease: 'power2.out',
      onComplete: () => gsap.set(contactForm, { clearProps: 'all' })
    });
  }

  // FAQ accordion
  initFaqAccordion();
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
          gsap.to(other.querySelector('.faq-answer'), {
            height: 0, duration: 0.3, ease: 'power2.inOut'
          });
          other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        gsap.to(answer, { height: 0, duration: 0.3, ease: 'power2.inOut' });
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        gsap.set(answer, { height: 'auto' });
        const h = answer.offsetHeight;
        gsap.fromTo(answer, { height: 0 }, { height: h, duration: 0.4, ease: 'power2.out' });
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

