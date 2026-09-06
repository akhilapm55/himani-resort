import { Link } from 'react-router-dom';
import { brand } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white/70 pt-20 pb-[30px]">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-[50px] mb-[60px] text-center md:text-left">
          <div>
            <Link to="/" className="font-heading text-[26px] font-bold text-white tracking-tight inline-block mb-[22px]">
              {brand.namePrefix}<span className="text-accent">{brand.nameSuffix}</span>
            </Link>
            <p className="text-sm text-white/60 leading-[1.8] mb-[26px]">{brand.shortDesc}</p>
            <div className="flex gap-3 justify-center md:justify-start">
              {[
                // TODO: add real Facebook / Instagram handles
                { icon: 'whatsapp', label: 'WhatsApp', href: brand.whatsapp },
                { icon: 'instagram', label: 'Instagram', href: '#' },
                { icon: 'facebook-f', label: 'Facebook', href: '#' },
              ].map(({ icon, label, href }) => (
                <a
                  key={icon}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 text-sm transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white"
                >
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Main Menu" links={[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/rooms', label: 'Rooms' },
            { to: '/contact', label: 'Contact' },
          ]} />

          <FooterColumn title="Stay With Us" links={[
            { to: '/rooms', label: 'Deluxe Queen Room' },
            { to: '/rooms', label: 'Deluxe Double Cottage' },
            { to: '/rooms', label: 'Grand Family Villa' },
            { to: '/rooms', label: 'Rooms & Packages' },
          ]} />

          <div>
            <h4 className="text-white text-lg mb-[26px]">Contact</h4>
            <ul className="space-y-[18px]">
              <ContactLine icon="phone-alt">
                <a href={`tel:${brand.phoneRaw}`} className="hover:text-accent transition-colors">{brand.phone}</a>
              </ContactLine>
              <ContactLine icon="whatsapp" brand>
                <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Book on WhatsApp</a>
              </ContactLine>
              <ContactLine icon="map-marker-alt">
                {brand.addressLine},<br />{brand.addressLine2}
              </ContactLine>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-[26px] flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-white/50">
          <span>&copy; {new Date().getFullYear()} {brand.legalName}. All rights reserved.</span>
          <div className="flex gap-[18px]">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-white text-lg mb-[26px]">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="inline-block text-sm text-white/60 hover:text-accent hover:pl-[5px] transition-all duration-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactLine({ icon, brand: isBrand, children }) {
  return (
    <li className="flex flex-col sm:flex-row gap-2 sm:gap-[14px] text-sm text-white/60 leading-[1.6] items-center md:items-start justify-center md:justify-start">
      <i className={`${isBrand ? 'fab' : 'fas'} fa-${icon} text-accent text-[15px] mt-1 flex-shrink-0`} />
      <span>{children}</span>
    </li>
  );
}
