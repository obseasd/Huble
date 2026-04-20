/* =============================================
   HUBLE — Main Entry Point
   ============================================= */

import { initNav } from './nav.js';
import { initScrollAnimations } from './scroll-animations.js';
import { initContactForm } from './contact-form.js';
import { initScrollbar } from './scrollbar.js';
import { initSectionSnap } from './section-snap.js';
import { initOrbit } from './orbit.js';

// Feature flags
const FEATURES = {
  portfolio: false // Set to true to activate portfolio section
};

document.addEventListener('DOMContentLoaded', () => {
  // Handle feature flags
  if (FEATURES.portfolio) {
    const portfolioSection = document.getElementById('portfolio');
    const portfolioNavLinks = document.querySelectorAll('[data-nav="portfolio"]');
    if (portfolioSection) portfolioSection.style.display = '';
    portfolioNavLinks.forEach(link => link.style.display = '');
  }

  // Init modules
  initNav();
  initContactForm();
  initScrollbar();

  // Wait for fonts & layout to settle before animations
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initScrollAnimations();
      initSectionSnap();
      initOrbit();
    });
  });
});
