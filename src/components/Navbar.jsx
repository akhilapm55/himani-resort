import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { brand } from '../data/content.js';
import { useBookingModal } from '../context/BookingModalContext.jsx';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { open } = useBookingModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        'fixed left-0 right-0 z-[1000] transition-all duration-[400ms] ease-smooth',
        scrolled ? 'top-3 md:top-5 px-3 md:px-6' : 'top-0 px-0 py-5',
      ].join(' ')}
    >
      {/* The "pill" — full-width transparent on top, floating cream pill once scrolled */}
      <div
        className={[
          'mx-auto max-w-container transition-all duration-[400ms] ease-smooth',
          scrolled
            ? 'bg-offwhite rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] py-2.5 pl-5 pr-2.5 md:pl-7 md:pr-3'
            : 'px-5',
        ].join(' ')}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6">
          {/* Logo */}
          <Link
            to="/"
            className={[
              'font-heading text-xl md:text-[24px] font-bold tracking-tight transition-colors duration-300',
              scrolled ? 'text-primary' : 'text-white',
            ].join(' ')}
          >
            {brand.namePrefix}
            <span className="text-accent">{brand.nameSuffix}</span>
          </Link>

          {/* Centre nav (desktop) */}
          <nav className="hidden md:flex justify-center gap-7">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative text-[14px] font-medium py-1.5 transition-colors',
                    scrolled
                      ? `${isActive ? 'text-accent' : 'text-primary hover:text-accent'}`
                      : `${isActive ? 'text-white' : 'text-white/85 hover:text-white'}`,
                    'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-px after:transition-[width] after:duration-300',
                    scrolled ? 'after:bg-accent' : 'after:bg-white',
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side: phone + WhatsApp CTA (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${brand.phoneRaw}`}
              className={[
                'text-[13px] font-medium underline underline-offset-[6px] decoration-1 transition-colors whitespace-nowrap',
                scrolled
                  ? 'text-primary/80 hover:text-primary decoration-primary/40'
                  : 'text-white/85 hover:text-white decoration-white/40',
              ].join(' ')}
            >
              {brand.phone}
            </a>
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[13px] font-semibold transition-all duration-300 hover:bg-accent-dark hover:-translate-y-0.5 whitespace-nowrap"
            >
              <i className="fas fa-calendar-check text-[15px]" /> Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Menu"
            className="md:hidden justify-self-end flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={[
              'block w-[24px] h-0.5 transition-all duration-300',
              scrolled ? 'bg-primary' : 'bg-white',
              menuOpen ? 'translate-y-[7px] rotate-45' : '',
            ].join(' ')} />
            <span className={[
              'block w-[24px] h-0.5 transition-all duration-300',
              scrolled ? 'bg-primary' : 'bg-white',
              menuOpen ? 'opacity-0' : '',
            ].join(' ')} />
            <span className={[
              'block w-[24px] h-0.5 transition-all duration-300',
              scrolled ? 'bg-primary' : 'bg-white',
              menuOpen ? '-translate-y-[7px] -rotate-45' : '',
            ].join(' ')} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown — also pill-styled to match */}
      <nav
        className={[
          'md:hidden mx-3 transition-[max-height,opacity,margin] duration-[400ms] overflow-hidden',
          menuOpen ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0',
        ].join(' ')}
      >
        <div
          className={[
            'rounded-3xl px-2 py-3',
            scrolled
              ? 'bg-offwhite shadow-[0_10px_30px_rgba(0,0,0,0.12)]'
              : 'bg-[rgba(17,17,17,0.96)] backdrop-blur-xl',
          ].join(' ')}
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                [
                  'block px-5 py-3 text-[15px] rounded-full transition-colors',
                  scrolled
                    ? isActive
                      ? 'text-accent bg-white/60'
                      : 'text-primary hover:bg-white/60'
                    : isActive
                      ? 'text-white bg-white/10'
                      : 'text-white/85 hover:bg-white/10',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={`tel:${brand.phoneRaw}`}
            className={[
              'block px-5 py-3 text-[14px] font-medium',
              scrolled ? 'text-primary/80' : 'text-white/80',
            ].join(' ')}
          >
            <i className="fas fa-phone-alt text-accent mr-2" />
            {brand.phone}
          </a>
          <button
            type="button"
            onClick={() => open()}
            className="flex w-[calc(100%-1rem)] items-center justify-center gap-2 mx-2 mt-2 px-5 py-3 rounded-full bg-accent text-white text-[14px] font-semibold"
          >
            <i className="fas fa-calendar-check text-[17px]" /> Book Now
          </button>
        </div>
      </nav>
    </header>
  );
}
