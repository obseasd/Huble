/* =============================================
   HUBLE — Contact Form
   Custom select, validation, Formspree
   ============================================= */

export function initContactForm() {
  initCustomSelect();
  initFormValidation();
}

function initCustomSelect() {
  const select = document.getElementById('customSelect');
  const hidden = document.getElementById('contact-service');
  if (!select || !hidden) return;

  const trigger = select.querySelector('.custom-select-trigger');
  const valueSpan = select.querySelector('.custom-select-value');
  const options = select.querySelectorAll('.custom-select-option');

  valueSpan.classList.add('placeholder');

  // Toggle
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    select.classList.toggle('open');
    trigger.setAttribute('aria-expanded', select.classList.contains('open'));
  });

  // Keyboard
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      select.classList.toggle('open');
    } else if (e.key === 'Escape') {
      select.classList.remove('open');
    }
  });

  // Select option
  options.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const value = option.dataset.value;
      const text = option.textContent.trim();

      hidden.value = value;
      valueSpan.textContent = text;
      valueSpan.classList.remove('placeholder');

      options.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');

      select.classList.remove('open', 'error');
      trigger.setAttribute('aria-expanded', 'false');

      // Clear error if present
      const errorMsg = select.closest('.form-group')?.querySelector('.error-msg');
      if (errorMsg) errorMsg.style.display = 'none';
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    select.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  });
}

function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: form.querySelector('#contact-name'),
    email: form.querySelector('#contact-email'),
    service: form.querySelector('#contact-service'),
    message: form.querySelector('#contact-message')
  };

  const submitBtn = form.querySelector('button[type="submit"]');

  // Blur validation for text inputs
  ['name', 'email', 'message'].forEach(key => {
    const field = fields[key];
    if (!field) return;
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;
    Object.values(fields).forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) return;

    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading-spinner"></span>Envoi en cours...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.innerHTML = `
          <div class="success-msg">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5AB87E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem; display: block;">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <p>Merci pour votre message !</p>
            <p>On revient vers vous très vite.</p>
          </div>
        `;
      } else {
        throw new Error('fail');
      }
    } catch {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      let errorEl = form.querySelector('.form-error');
      if (!errorEl) {
        errorEl = document.createElement('p');
        errorEl.className = 'form-error';
        errorEl.style.cssText = 'color: #E74C3C; font-size: 0.9rem; text-align: center; margin-top: 1rem;';
        submitBtn.parentNode.appendChild(errorEl);
      }
      errorEl.textContent = 'Une erreur est survenue. Réessayez ou contactez-nous par email.';
    }
  });
}

function validateField(field) {
  if (!field) return true;

  const value = field.value.trim();
  let isValid = true;
  let message = '';

  // Hidden select field
  if (field.id === 'contact-service') {
    if (!value) {
      isValid = false;
      message = 'Veuillez sélectionner un service.';
      document.getElementById('customSelect')?.classList.add('error');
    } else {
      document.getElementById('customSelect')?.classList.remove('error');
    }
    const errorMsg = field.closest('.form-group')?.querySelector('.error-msg');
    if (errorMsg) {
      errorMsg.textContent = message;
      errorMsg.style.display = isValid ? 'none' : 'block';
    }
    return isValid;
  }

  if (field.required && !value) {
    isValid = false;
    message = 'Ce champ est requis.';
  } else if (field.type === 'email' && value) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      isValid = false;
      message = 'Veuillez entrer une adresse email valide.';
    }
  } else if (field.id === 'contact-message' && value && value.length < 10) {
    isValid = false;
    message = 'Votre message doit contenir au moins 10 caractères.';
  }

  const errorMsg = field.parentElement?.querySelector('.error-msg');
  if (isValid) {
    field.classList.remove('error');
    if (errorMsg) errorMsg.style.display = 'none';
  } else {
    field.classList.add('error');
    if (errorMsg) {
      errorMsg.textContent = message;
      errorMsg.style.display = 'block';
    }
  }
  return isValid;
}
