import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { resortImages } from '../data/content.js';

// Heading words, each marked bold or thin.
const HEADING_WORDS = [
  { text: 'Heritage', bold: true },
  { text: 'hospitality', bold: false },
  { text: 'in', bold: false },
  { text: 'the', bold: false },
  { text: 'misty', bold: true },
  { text: 'hills', bold: true },
  { text: 'of', bold: false },
  { text: 'Coorg.', bold: true },
];

// Feature pills floated over the image (inspired by reference design).
const FEATURE_PILLS = [
  { icon: 'fa-house', label: '9 houses' },
  { icon: 'fa-person-swimming', label: 'Swimming pool' },
  { icon: 'fa-mug-hot', label: 'Breakfast included' },
  { icon: 'fa-star', label: 'Stargazing skies' },
];

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Reveal the image wipe when the section scrolls into view.
  // Includes a timeout fallback so it never stays hidden if the observer misses.
  useEffect(() => {
    if (!sectionRef.current || !('IntersectionObserver' in window)) {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(sectionRef.current);
    const fallback = setTimeout(() => setRevealed(true), 800);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden pt-8 pb-16 md:pt-12 md:pb-12 font-poppins"
    >
      <div className="container-x">
        {/* Top: subtitle + heading, with WELCOME backdrop sitting behind */}
        <div className="relative mb-10 md:mb-16">
          {/* Faded WELCOME backdrop — behind the heading, scales with the viewport */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-0 -top-1 md:-top-3 z-0 font-poppins font-extrabold leading-[0.8] tracking-[-2px] md:tracking-[-5px] whitespace-nowrap
                       text-[clamp(3rem,15vw,9rem)]"
            style={{ color: 'rgba(62, 90, 53, 0.06)' }}
          >
            WELCOME
          </span>

          <div className="relative z-[2]">
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] md:text-[13px] font-light tracking-[2px] md:tracking-[3px] uppercase text-accent mb-5 md:mb-7
                             before:content-[''] before:inline-block before:w-8 md:before:w-10 before:h-px before:bg-accent">
              Welcome to <strong className="font-semibold">Himani Heritage</strong>
            </span>

            <h2 className="font-poppins leading-[1.2] md:leading-[1.1] tracking-[-0.5px] md:tracking-[-1.5px] text-primary text-[clamp(1.75rem,6vw,3.5rem)] max-w-[1100px] m-0">
              {HEADING_WORDS.map((w, i) => (
                <span key={i} className={w.bold ? 'font-extrabold' : 'font-light'}>
                  {w.text}
                  {i < HEADING_WORDS.length - 1 ? ' ' : ''}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* Bottom: text on left, single image with feature pills on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <p className="max-w-[540px] text-[15px] leading-[1.85] text-body font-light m-0 mb-8">
              Set in <strong className="font-semibold text-primary">Bhagamandala</strong>, near the sacred <strong className="font-semibold text-primary">Triveni Sangama</strong>, our <strong className="font-semibold text-primary">nine-house mountain retreat</strong> trades city noise for mist-covered peaks, an open-air pool, and some of the clearest night skies in Coorg.
            </p>
            <div className="flex gap-4 flex-wrap items-center">
              <Link
                to="/about"
                className="inline-block px-7 py-3.5 text-[13px] font-semibold tracking-[1.5px] uppercase rounded bg-primary text-white border-2 border-primary transition-all duration-[400ms] ease-smooth hover:bg-accent hover:border-accent hover:-translate-y-0.5"
              >
                Our Story
              </Link>
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[2px] uppercase text-primary py-3.5 hover:text-accent transition-colors"
              >
                See Our Rooms
                <i className="fas fa-arrow-right transition-transform duration-[400ms] group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Image + floating feature pills */}
          <div
            className={`welcome-image relative h-[300px] sm:h-[380px] md:h-[500px] lg:h-[560px] ${
              revealed ? 'is-revealed' : ''
            }`}
          >
            <img
              src={resortImages.welcome}
              alt="Himani Heritage Resorts in Bhagamandala, Coorg"
              loading="lazy"
            />

            {/* Feature pills overlaid at the bottom of the image */}
            <div className="absolute bottom-3 md:bottom-7 left-3 md:left-7 right-3 md:right-7 grid grid-cols-2 gap-2 md:gap-3">
              {FEATURE_PILLS.map((pill) => (
                <div
                  key={pill.label}
                  className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 md:px-5 md:py-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center gap-2 md:gap-2.5 min-w-0"
                >
                  <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-offwhite text-accent flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${pill.icon} text-[10px] md:text-[11px]`} />
                  </span>
                  <span className="text-[11px] md:text-[13px] font-semibold text-primary truncate">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
