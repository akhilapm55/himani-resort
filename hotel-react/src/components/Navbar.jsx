import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { brand } from '../data/content.js';

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
        'fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-[400ms] ease-smooth',
        scrolled
          ? 'bg-[rgba(26,26,26,0.95)] backdrop-blur-xl py-3 shadow-nav'
          : 'bg-transparent py-5',
      ].join(' ')}
    >
      <div className="max-w-container mx-auto px-5 grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto] items-center gap-[30px]">
        <Link to="/" className="font-heading text-2xl md:text-[26px] font-bold text-white tracking-tight">
          {brand.namePrefix}<span className="text-accent">{brand.nameSuffix}</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex justify-center gap-9">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                [
                  'relative text-[15px] font-medium py-1.5 transition-colors',
                  'text-white/80 hover:text-white',
                  'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-accent after:transition-[width] after:duration-300',
                  isActive ? 'text-white after:w-full' : 'after:w-0 hover:after:w-full',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side: phone + WhatsApp book button (desktop only) */}
        <div className="hidden md:flex items-center gap-5">
          <a href={`tel:${brand.phoneRaw}`} className="text-white/85 text-sm font-medium hover:text-white transition-colors">
            <i className="fas fa-phone-alt text-accent mr-1.5" />
            {brand.phone}
          </a>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[13px] font-semibold transition-all duration-300 hover:bg-accent-warm hover:-translate-y-0.5"
          >
            <i className="fab fa-whatsapp text-[15px]" /> Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          className="md:hidden justify-self-end flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-[26px] h-0.5 bg-white transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-[26px] h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[26px] h-0.5 bg-white transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav
        className={[
          'md:hidden absolute top-full left-0 right-0 bg-[rgba(17,17,17,0.98)] backdrop-blur-xl overflow-hidden transition-[max-height] duration-[400ms]',
          menuOpen ? 'max-h-[600px]' : 'max-h-0',
        ].join(' ')}
      >
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              [
                'block px-[30px] py-3.5 text-[15px] border-b border-white/[0.08]',
                isActive ? 'text-white' : 'text-white/80',
              ].join(' ')
            }
          >
            {l.label}
          </NavLink>
        ))}
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-[30px] py-4 text-[15px] font-semibold text-accent-warm"
        >
          <i className="fab fa-whatsapp text-[17px]" /> Book on WhatsApp
        </a>
      </nav>
    </header>
  );
}
