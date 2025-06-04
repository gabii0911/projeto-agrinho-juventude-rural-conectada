// Carrossel simples
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Modal
const cards = document.querySelectorAll('.card-info');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-button');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    openModal(modal, card);
  });

  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});

function openModal(modal, trigger) {
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  // Save the element that opened the modal for focus return
  modal.trigger = trigger;
  // Move focus inside modal
  modal.querySelector('.close-button').focus();
}

function closeModal(modal) {
  modal.setAttribute('aria-hidden', 'true');
  modal.style.display = 'none';
  // Return focus to the trigger element
  if (modal.trigger) modal.trigger.focus();
}

// Form (simples feedback)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = "Obrigado por entrar em contato! Vamos responder em breve.";
  form.reset();
});
