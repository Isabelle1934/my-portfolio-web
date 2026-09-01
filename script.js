const root = document.body;

window.addEventListener('pointermove', (event) => {
  root.style.setProperty('--cursor-x', `${event.clientX}px`);
  root.style.setProperty('--cursor-y', `${event.clientY}px`);
});

const phrases = [
  'Turning ideas into innovation.',
  'Creating solutions to real-world problems.',
  'Technology that makes an impact.',
  'Code, data, and intelligence.',
  'Building the future with AI.'
];

const roleText = document.querySelector('.role-text');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    charIndex += 1;
    roleText.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    charIndex -= 1;
    roleText.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? 45 : 90;
  setTimeout(typeLoop, speed);
}

typeLoop();
