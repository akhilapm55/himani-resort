import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => {
        if (window.__lenis) {
          window.__lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
      className={[
        'fixed bottom-[30px] right-[30px] w-[45px] h-[45px] bg-dark-bg text-white rounded flex items-center justify-center transition-all duration-[400ms] ease-smooth z-[999] hover:bg-accent',
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-5 pointer-events-none',
      ].join(' ')}
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
