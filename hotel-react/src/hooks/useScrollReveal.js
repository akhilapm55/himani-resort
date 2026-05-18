import { useEffect } from 'react';

export function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .image-wipe'
    );
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((el) => {
        el.classList.add(el.classList.contains('image-wipe') ? 'is-revealed' : 'visible');
      });
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add(
              target.classList.contains('image-wipe') ? 'is-revealed' : 'visible'
            );
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
