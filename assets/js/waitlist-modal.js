// Minimal vanilla-JS modal controller

// Debugging
// console.log('✅ waitlist-modal.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const modal     = document.getElementById('waitlist-modal');
  const overlay   = modal.querySelector('.modal-overlay');
  const closeBtn  = modal.querySelector('.modal-close');

  /* helper functions */
  const openModal  = () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';  // lock scroll
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';        // restore scroll
  };

  /* 1. OPEN on button click */
  document.querySelectorAll('.waitlist-trigger')
    .forEach(btn => btn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    }));

  /* 2. CLOSE on overlay click or “×” button */
  [overlay, closeBtn].forEach(el =>
    el.addEventListener('click', closeModal));

  /* 3. CLOSE on Esc key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
