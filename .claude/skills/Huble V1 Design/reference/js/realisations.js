/* =============================================
   HUBLE — Réalisations Page
   Filtering + mobile tap interaction
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  initMobileTap();
  initNavScroll();
});

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards with animation
      cards.forEach(card => {
        const category = card.dataset.category;
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

function initMobileTap() {
  if (window.matchMedia('(hover: none)').matches) {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        const wasTapped = card.classList.contains('tapped');

        // Remove tapped from all
        cards.forEach(c => c.classList.remove('tapped'));

        // Toggle current
        if (!wasTapped) {
          card.classList.add('tapped');
        }
      });
    });
  }
}

function initNavScroll() {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav?.classList.add('nav-scrolled');
    } else {
      nav?.classList.remove('nav-scrolled');
    }
  }, { passive: true });
}

// Fade in animation for filtered cards
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
