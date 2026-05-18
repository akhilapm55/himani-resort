import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { resortImages } from '../data/content.js';

// Heading is split into words, each marked bold or thin.
// Important words (Heritage, misty hills, Coorg) carry weight; the rest stay thin.
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
  { icon: 'fa-bed', label: '8 rooms' },
  { icon: 'fa-swimming-pool', label: 'Pool & garden' },
  { icon: 'fa-coffee', label: 'Coorgi breakfast' },
  { icon: 'fa-leaf', label: 'Plantation walks' },
];

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

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
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Build char spans with per-word boldness preserved
  const headingChars = useMemo(() => {
    let charIndex = 0;
    return HEADING_WORDS.map(({ text, bold }, wi) => {
      const chars = text.split('').map((ch) => {
        const delay = `${charIndex * 0.025}s`;
        charIndex += 1;
        return { ch, delay };
      });
      return { chars, bold, key: `${wi}-${text}` };
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden pb-10 md:pb-12 font-poppins"
    >
      {/* Faded WELCOME backdrop */}
      <span
        aria-hidden="true"
        className="absolute top-20 md:top-[130px] left-1/2 -translate-x-1/2 w-full max-w-container px-5 text-left whitespace-nowrap select-none pointer-events-none z-[1] font-poppins font-extrabold leading-[0.9] tracking-[-2px] md:tracking-[-4px]
                   text-[clamp(3.5rem,8vw,9rem)]"
        style={{ color: 'rgba(62, 90, 53, 0.07)' }}
      >
        WELCOME
      </span>

      <div className="container-x relative z-[2]">
        {/* Top: subtitle + heading */}
        <div className="pt-5 md:pt-10 mb-10 md:mb-16">
          <span className="inline-flex items-center gap-3.5 text-[13px] font-light tracking-[3px] uppercase text-accent mb-7
                           before:content-[''] before:inline-block before:w-10 before:h-px before:bg-accent">
            Welcome to <strong className="font-semibold ml-1">Himani Heritage</strong>
          </span>

          <h2
            className={`welcome-heading font-poppins leading-[1.1] tracking-[-1.5px] text-primary text-[clamp(1.2rem,4vw,3.5rem)] max-w-[1100px] m-0 ${
              revealed ? 'is-revealed' : ''
            }`}
          >
            {headingChars.map(({ chars, bold, key }) => (
              <span
                key={key}
                className={`welcome-word ${bold ? 'font-extrabold' : 'font-light'}`}
              >
                {chars.map(({ ch, delay }, ci) => (
                  <span
                    key={ci}
                    className="welcome-char"
                    style={{ transitionDelay: delay }}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            ))}
          </h2>
        </div>

        {/* Bottom: text on left, single image with feature pills on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <p className="max-w-[540px] text-[15px] leading-[1.85] text-body font-light m-0 mb-8">
              Set in <strong className="font-semibold text-primary">Bhagamandala</strong> — moments from the sacred <strong className="font-semibold text-primary">Triveni Sangama</strong> — our eight-room <strong className="font-semibold text-primary">heritage retreat</strong> blends warm Coorgi hospitality with the timeless calm of the Western Ghats. Wake to mist over coffee plantations and end your day around the bonfire.
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
            className={`welcome-image relative h-[440px] md:h-[500px] lg:h-[560px] ${
              revealed ? 'is-revealed' : ''
            }`}
          >
            <img
              src={resortImages.welcome}
              alt="Himani Heritage Resorts in Bhagamandala, Coorg"
              loading="lazy"
            />

            {/* Feature pills overlaid at the bottom of the image */}
            <div className="absolute bottom-5 md:bottom-7 left-5 md:left-7 right-5 md:right-7 grid grid-cols-2 gap-2.5 md:gap-3">
              {FEATURE_PILLS.map((pill) => (
                <div
                  key={pill.label}
                  className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2.5 md:px-5 md:py-3 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center gap-2.5"
                >
                  <span className="w-7 h-7 rounded-full bg-offwhite text-accent flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${pill.icon} text-[11px]`} />
                  </span>
                  <span className="text-[12px] md:text-[13px] font-semibold text-primary truncate">
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
