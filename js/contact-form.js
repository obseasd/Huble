/* =============================================
   HUBLE — Contact Form
   Floating labels, chips, validation, Formspree
   ============================================= */

export function initContactForm() {
  initFloatingFields();
  initFormValidation();
}

function initFloatingFields() {
  const fields = document.querySelectorAll('.field[data-field]');
  fields.forEach(field => {
    const input = field.querySelector('input, textarea');
    if (!input) return;

    const updateState = () => {
      const hasValue = input.value.trim().length > 0;
      field.classList.toggle('has-value', hasValue);
    };

    input.addEventListener('focus', () => field.classList.add('focus'));
    input.addEventListener('blur', () => {
      field.classList.remove('focus');
      updateState();
    });
    input.addEventListener('input', updateState);

    updateState();
  });

  // Message char counter
  const message = document.getElementById('contact-message');
  const count = document.getElementById('msg-count');
  const hint = document.getElementById('message-hint');
  if (message && count && hint) {
    message.addEventListener('input', () => {
      const len = message.value.length;
      count.textContent = len;
      hint.classList.toggle('ok', len >= 10 && len <= 400);
      hint.classList.toggle('err', len > 400);
    });
  }
}

function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: form.querySelector('#contact-name'),
    email: form.querySelector('#contact-email'),
    message: form.querySelector('#contact-message')
  };

  const submitBtn = form.querySelector('button[type="submit"]');

  ['name', 'email', 'message'].forEach(key => {
    const input = fields[key];
    if (!input) return;
    const field = input.closest('.field');
    input.addEventListener('blur', () => validateField(input, field));
    input.addEventListener('input', () => {
      if (field?.classList.contains('error')) validateField(input, field);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;
    Object.values(fields).forEach(input => {
      const field = input?.closest('.field');
      if (!validateField(input, field)) isValid = false;
    });

    if (!isValid) return;

    const originalClass = submitBtn.className;
    const originalHTML = submitBtn.innerHTML;

    submitBtn.className = 'btn-loading';
    submitBtn.textContent = 'Envoi en cours…';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        submitBtn.className = 'btn-success';
        submitBtn.textContent = 'Message envoyé';
      } else {
        throw new Error('fail');
      }
    } catch {
      submitBtn.className = originalClass;
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
      let errorEl = form.querySelector('.form-error');
      if (!errorEl) {
        errorEl = document.createElement('p');
        errorEl.className = 'form-error';
        errorEl.style.cssText = 'color: #E74C3C; font-size: 0.82rem; text-align: right; margin-top: 0.5rem;';
        form.querySelector('.form-foot')?.appendChild(errorEl);
      }
      errorEl.textContent = 'Une erreur est survenue. Réessayez ou contactez-nous par email.';
    }
  });
}

function validateField(input, field) {
  if (!input || !field) return true;

  const value = input.value.trim();
  let isValid = true;

  if (input.required && !value) {
    isValid = false;
  } else if (input.type === 'email' && value) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) isValid = false;
  } else if (input.id === 'contact-message' && value && value.length < 10) {
    isValid = false;
  }

  field.classList.toggle('error', !isValid);
  field.classList.toggle('valid', isValid && value.length > 0);
  return isValid;
}
