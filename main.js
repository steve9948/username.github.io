/* ============================================================
   Stephen Gichimu Portfolio — JavaScript
   ============================================================ */

/**
 * Intersection Observer for scroll-triggered animations.
 * Adds the 'visible' class to elements when they enter the viewport,
 * triggering CSS fade-in and slide-up transitions.
 */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

// Observe all fade-in elements and timeline items
document.querySelectorAll('.fade-in, .timeline-item').forEach(el => {
  observer.observe(el);
});

/**
 * Stagger timeline items so they animate in sequence
 * rather than all at once.
 */
document.querySelectorAll('.timeline-item').forEach((item, i) => {
  item.style.transitionDelay = (i * 0.15) + 's';
});

/**
 * Add fade-in animation to service cards with a staggered delay,
 * so the grid reveals card by card.
 */
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.classList.add('fade-in');
  card.style.transitionDelay = (i * 0.08) + 's';
  observer.observe(card);
});

/**
 * Stagger Beyond the Screen and Open To items
 * for a smooth cascading reveal.
 */
document.querySelectorAll('.beyond-item, .open-to-item').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = (i * 0.1) + 's';
  observer.observe(el);
});
