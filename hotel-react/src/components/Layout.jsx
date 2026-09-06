import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackToTop from './BackToTop.jsx';
import VideoModal from './VideoModal.jsx';
import { VideoModalProvider } from '../context/VideoModalContext.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function Layout() {
  const location = useLocation();
  const lenisRef = useRef(null);

  // Re-scan reveal elements when route changes
  useScrollReveal([location.pathname]);

  // Initialize Lenis smooth scroll once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;
    // Expose on window so other components (BackToTop, anchor links) can use it
    window.__lenis = lenis;

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, []);

  // Scroll to top on route change (via Lenis so it doesn't fight the smooth scroll)
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  return (
    <VideoModalProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <VideoModal />
    </VideoModalProvider>
  );
}
