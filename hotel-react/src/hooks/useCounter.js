import { useEffect, useRef, useState } from 'react';

function formatThousands(n) {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'k';
  return n;
}

export function useCounter(target = 0, { duration = 1800 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    if (!('IntersectionObserver' in window)) {
      setValue(target);
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            obs.unobserve(entry.target);
            const stepTime = 30;
            const steps = Math.max(1, Math.floor(duration / stepTime));
            const increment = target / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setValue(Math.floor(current));
            }, stepTime);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const display = target >= 1000 ? formatThousands(value) : value;
  return [ref, display];
}
