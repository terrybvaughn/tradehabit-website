// Minimal vanilla-JS modal controller

// Debugging
// console.log('✅ waitlist-modal.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const modal     = document.getElementById('waitlist-modal');
  const overlay   = modal.querySelector('.modal-overlay');

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

  /* 2. CLOSE on overlay click */
  overlay.addEventListener('click', e => {
    const dialog = modal.querySelector('.modal-dialog');
    if (!dialog.contains(e.target)) {
      closeModal();
    }
  });

  /* 3. CLOSE on Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
