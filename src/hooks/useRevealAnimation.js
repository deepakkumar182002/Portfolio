import { useEffect } from 'react';

/**
 * Replicates the original main.js reveal-on-scroll + staggered-card behavior.
 * Call this once inside every page component (after its JSX has mounted).
 */
export default function useRevealAnimation() {
  useEffect(() => {
    // Staggered groups: tag each child with .reveal + an incremental transition delay
    document.querySelectorAll('[data-stagger]').forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        child.style.transitionDelay = `${i * 80}ms`;
        child.classList.add('reveal');
      });
    });

    const revealEls = document.querySelectorAll('.reveal:not(.visible)');
    if (!revealEls.length) return undefined;

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
