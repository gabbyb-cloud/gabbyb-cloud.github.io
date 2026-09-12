const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const header = document.querySelector('.site-header');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

/* Sticky navigation polish */
function updateHeader() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

/* First-session portfolio intro */
const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const params = new URLSearchParams(window.location.search);
const forceIntro = params.get('intro') === '1';

if (!reduceMotion) {
  const alreadyPlayed = sessionStorage.getItem('portfolio-intro-played');

  if (!alreadyPlayed || forceIntro) {
    document.body.classList.add('intro-animate');

    if (!forceIntro) {
      sessionStorage.setItem('portfolio-intro-played', 'true');
    }

    window.setTimeout(() => {
      document.body.classList.remove('intro-animate');
    }, 2100);
  }
}

/* Subtle scroll reveals */
if (!reduceMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll(
    '#projects .project-card, #skills .skill-group, .lower-grid > .section'
  );

  revealTargets.forEach((element) => {
    element.classList.add('reveal-item');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
}


/* Project pointer glow */
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();

    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });

  card.addEventListener('pointerleave', () => {
    card.style.removeProperty('--mx');
    card.style.removeProperty('--my');
  });
});
