/* =========================================================
   HOTELHUB - SHARED JAVASCRIPT
   Handles: navbar scroll, mobile menu, scroll reveal,
   counters, accordion, testimonial slider, video modal,
   parallax, back-to-top, room filter
   ========================================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- LENIS SMOOTH SCROLL ---------- */
  if (typeof window.Lenis !== 'undefined' && !prefersReducedMotion) {
    const lenis = new window.Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    window.__lenis = lenis;
    function lenisRaf(time) {
      lenis.raf(time);
      requestAnimationFrame(lenisRaf);
    }
    requestAnimationFrame(lenisRaf);
  }

  /* ---------- HERO PAGE-LOAD WIPE ---------- */
  const heroWipe = document.querySelector('.hero-wipe');
  if (heroWipe) {
    // Tiny delay so the curtain sits briefly before sliding off
    setTimeout(() => heroWipe.classList.add('is-revealed'), 250);
  }

  /* ---------- 3D MOUSE-TILT ON AMENITY CARDS ---------- */
  document.querySelectorAll('.amenity-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'perspective(900px) translateY(-8px)';
    });
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -7}deg) rotateY(${x * 8}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---------- NAVBAR SCROLL ---------- */
  const navbar = document.querySelector('.navbar');
  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  /* ---------- MOBILE MENU ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.querySelector('.back-to-top');
  function handleBackToTopVisibility() {
    if (!backToTop) return;
    if (window.scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      if (window.__lenis) {
        window.__lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
  handleBackToTopVisibility();

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- CHARACTER REVEAL (split heading into char spans) ---------- */
  function splitForCharReveal(el) {
    if (el.dataset.charSplit === 'done') return;
    const text = el.textContent.trim();
    el.textContent = '';
    let charIndex = 0;
    text.split(' ').forEach((word, wordIdx) => {
      if (wordIdx > 0) {
        el.appendChild(document.createTextNode(' '));
      }
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      word.split('').forEach((ch) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.textContent = ch;
        charSpan.style.transitionDelay = `${charIndex * 0.025}s`;
        charIndex += 1;
        wordSpan.appendChild(charSpan);
      });
      el.appendChild(wordSpan);
    });
    el.dataset.charSplit = 'done';
  }

  const charRevealEls = document.querySelectorAll('[data-char-reveal]');
  charRevealEls.forEach(splitForCharReveal);

  if ('IntersectionObserver' in window && charRevealEls.length) {
    const charObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -80px 0px' }
    );
    charRevealEls.forEach((el) => charObserver.observe(el));
  } else {
    charRevealEls.forEach((el) => el.classList.add('revealed'));
  }

  /* ---------- IMAGE WIPE REVEAL ---------- */
  const wipeEls = document.querySelectorAll('[data-image-wipe], .image-wipe');
  if ('IntersectionObserver' in window && wipeEls.length) {
    const wipeObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    wipeEls.forEach((el) => wipeObserver.observe(el));
  } else {
    wipeEls.forEach((el) => el.classList.add('is-revealed'));
  }

  /* ---------- COUNTER ANIMATION ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
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
      const display = target >= 1000 ? formatThousands(Math.floor(current)) : Math.floor(current);
      el.textContent = display + suffix;
    }, stepTime);
  }

  function formatThousands(n) {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'k';
    return n;
  }

  if ('IntersectionObserver' in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObserver.observe(c));
  } else {
    counters.forEach((c) => animateCounter(c));
  }

  /* ---------- ACCORDION ---------- */
  document.querySelectorAll('.accordion').forEach((accordion) => {
    const items = accordion.querySelectorAll('.accordion-item');
    items.forEach((item) => {
      const header = item.querySelector('.accordion-header');
      const body = item.querySelector('.accordion-body');
      if (!header || !body) return;

      if (item.classList.contains('active')) {
        body.style.maxHeight = body.scrollHeight + 'px';
      }

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach((it) => {
          it.classList.remove('active');
          const b = it.querySelector('.accordion-body');
          if (b) b.style.maxHeight = '0px';
        });
        if (!isActive) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  });

  /* ---------- TESTIMONIAL SLIDER ---------- */
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    const slides = slider.querySelectorAll('.testimonial-slide');
    const dots = slider.querySelectorAll('.testimonial-dot');
    let current = 0;
    let auto;

    function showSlide(index) {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      current = index;
    }

    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }

    function startAuto() {
      stopAuto();
      auto = setInterval(nextSlide, 5000);
    }

    function stopAuto() {
      if (auto) clearInterval(auto);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
        startAuto();
      });
    });

    if (slides.length) {
      showSlide(0);
      startAuto();
    }
  }

  /* ---------- VIDEO MODAL ---------- */
  const videoTriggers = document.querySelectorAll('[data-video]');
  const videoModal = document.querySelector('.video-modal');
  const videoIframe = videoModal ? videoModal.querySelector('iframe') : null;
  const videoClose = videoModal ? videoModal.querySelector('.video-close') : null;

  function openVideo(src) {
    if (!videoModal || !videoIframe) return;
    videoIframe.src = src;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    if (!videoModal || !videoIframe) return;
    videoIframe.src = '';
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  videoTriggers.forEach((t) => {
    t.addEventListener('click', () => {
      const src = t.getAttribute('data-video');
      openVideo(src);
    });
  });

  if (videoClose) videoClose.addEventListener('click', closeVideo);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideo();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) closeVideo();
  });

  /* ---------- PARALLAX (hero background) ---------- */
  const heroBg = document.querySelector('.hero-bg');
  const isMobile = () => window.innerWidth <= 768;

  function handleParallax() {
    if (!heroBg || isMobile()) return;
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrolled * 0.15}px) scale(1.05)`;
    }
  }

  let parallaxTicking = false;
  window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
      requestAnimationFrame(() => {
        handleParallax();
        parallaxTicking = false;
      });
      parallaxTicking = true;
    }
  }, { passive: true });

  /* ---------- ROOM FILTER ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const roomCards = document.querySelectorAll('.rooms-grid .room-card');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      roomCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ---------- SMOOTH ANCHOR SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length <= 1) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        if (window.__lenis) {
          window.__lenis.scrollTo(target, { offset: -80 });
        } else {
          const offset = 80;
          const targetPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- CURRENT YEAR ---------- */
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
