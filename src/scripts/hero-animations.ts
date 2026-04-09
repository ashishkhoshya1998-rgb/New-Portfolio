import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Ensure ticker runs even when tab is hidden (e.g. preview contexts)
gsap.ticker.lagSmoothing(0);
if (document.hidden) {
  // Force-start the ticker when the page is in a hidden/preview context
  const interval = setInterval(() => gsap.ticker.tick(), 16);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) clearInterval(interval);
  }, { once: true });
}

function initHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const loaderShown = !sessionStorage.getItem('ak-loaded');
  const delay = loaderShown ? 2.8 : 0.3;

  const tl = gsap.timeline({ delay });

  tl.fromTo(hero.querySelector('.hero__greeting'),
      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0)
    .fromTo(hero.querySelector('.hero__line1'),
      { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2)
    .fromTo(hero.querySelector('.hero__line2'),
      { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.35)
    .fromTo(hero.querySelector('.hero__bg-img--dark'),
      { opacity: 0 }, { opacity: 0.4, duration: 1.2, ease: 'power2.out' }, 0.4)
    .fromTo(hero.querySelector('.hero__bg-img--light'),
      { opacity: 0 }, { opacity: 0.35, duration: 1.2, ease: 'power2.out' }, 0.4)
    .fromTo(hero.querySelector('.hero__scroll'),
      { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.9);
}

// Run on initial load
initHero();

// Re-run after Astro view transitions
document.addEventListener('astro:after-swap', initHero);
