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

        {/* Right side: phone + social (desktop only) */}
        <div className="hidden md:flex items-center gap-6">
          {/* TODO: replace placeholder phone with real reservations number */}
          <span className="text-white/85 text-sm font-medium">
            <i className="fas fa-phone-alt text-accent mr-1.5" />
            Reservations: {brand.phone}
          </span>
          <div className="flex gap-[14px]">
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-accent transition-colors text-sm"><i className="fab fa-facebook-f" /></a>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-accent transition-colors text-sm"><i className="fab fa-instagram" /></a>
            <a href="#" aria-label="WhatsApp" className="text-white/70 hover:text-accent transition-colors text-sm"><i className="fab fa-whatsapp" /></a>
          </div>
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
      </nav>
    </header>
  );
}
