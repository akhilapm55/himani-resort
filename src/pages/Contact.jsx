import { useState } from 'react';
import Subtitle from '../components/Subtitle.jsx';
import { Accordion } from '../components/Accordion.jsx';
import { faqItems } from '../data/content.js';

const CONTACT = {
  address: 'Bhagamandala–Talacauvery Road, Madikeri, Coorg, Karnataka',
  phone: '+91 90695 55522',
  phoneRaw: '+919069555522',
  whatsappNumber: '919069555522',
  whatsapp: 'https://wa.me/919069555522',
  instagram: 'https://www.instagram.com/coorg_homestay_resorts_kaveri/',
  facebook: 'https://www.facebook.com/p/Himani-Heritage-61550052099414/',
};

const INPUT_CLS =
  'w-full px-1 py-[14px] border-0 border-b border-line rounded-none text-sm text-primary bg-transparent transition-colors duration-300 placeholder:text-muted/80 focus:border-accent focus:outline-none focus:ring-0 font-body';

export default function Contact() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Today's date in local time, formatted for date inputs.
  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-');

  const handleSubmit = (e) => {
    e.preventDefault();

    const f = e.currentTarget;
    const lines = [
      "Hi Himani Heritage, I'd like to enquire about a stay.",
      '',
      `Name: ${f.elements.guestName.value || '-'}`,
      `Phone: ${f.elements.guestPhone.value || '-'}`,
      `Check-in: ${f.elements.guestCheckIn.value || '-'}`,
      `Check-out: ${f.elements.guestCheckOut.value || '-'}`,
      `Guests: ${f.elements.guestCount.value || '-'}`,
      '',
      f.elements.guestMessage.value || '',
    ];

    const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* TYPOGRAPHY-LED INTRO — no stock hero image */}
      <section className="relative overflow-hidden bg-cream">
        <div className="container-x relative z-10 pt-8 md:pt-10">
         
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-end pt-12 pb-14 md:pt-16 md:pb-20">
            <div className="max-w-[760px]">
              <p className="text-[11px] md:text-xs tracking-[3px] uppercase text-accent font-semibold mb-5">
                We’re here to help
              </p>
              <h1 className="font-heading text-[42px] leading-[1.08] md:text-[64px] lg:text-[76px] text-primary font-bold max-w-[760px]">
                Your Coorg escape
                <span className="block italic text-accent">starts with a conversation.</span>
              </h1>
            </div>

            <div className="lg:pb-2 max-w-[440px]">
              <div className="hidden lg:block w-16 h-px bg-accent mb-6" />
              <p className="text-body leading-8 text-[15px] md:text-base m-0">
                Planning a visit to Himani Heritage? Tell us a little about your
                stay. We’ll help you with availability, your travel dates, and
                any details you need before arriving.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[1.5px] text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Reception open 24/7
                </span>
                <span>Check-in 2 PM</span>
                <span>Check-out 12 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute right-[-55px] top-12 w-52 h-52 md:w-72 md:h-72 rounded-full border border-accent/15"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-15px] top-24 w-36 h-36 md:w-52 md:h-52 rounded-full border border-accent/10"
        />
      </section>

      {/* CONTACT DETAILS + ENQUIRY FORM */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            <aside className="lg:pt-4">
              <Subtitle>Get in touch</Subtitle>
              <h2 className="max-w-[440px]">
                Let’s make your stay memorable.
              </h2>
              <p className="max-w-[440px]">
                Prefer a quick conversation? Reach out directly, or send us your
                dates using the enquiry form. Your message will open in WhatsApp
                ready for you to send.
              </p>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 mt-5 px-7 py-3.5 rounded-full bg-accent text-white text-[14px] font-semibold transition-all duration-300 hover:bg-accent-warm hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp text-[18px]" />
                Chat on WhatsApp
                <i className="fas fa-arrow-up-right-from-square text-[11px]" />
              </a>

              <div className="mt-10 border-t border-line">
                <InfoItem icon="map-marker-alt" title="Find us">
                  {CONTACT.address}
                </InfoItem>
                <InfoItem icon="phone-alt" title="Call or WhatsApp">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="transition-colors hover:text-accent"
                  >
                    {CONTACT.phone}
                  </a>
                </InfoItem>
                <InfoItem icon="clock" title="Reception & timings">
                  Reception open 24/7
                  <br />
                  Check-in 2:00 PM · Check-out 12:00 PM
                </InfoItem>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[2px] text-muted">
                  Connect with us
                </span>
                <span className="h-px w-8 bg-line" />
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full border border-line text-accent flex items-center justify-center text-sm transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white"
                >
                  <i className="fab fa-whatsapp" />
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-line text-accent flex items-center justify-center text-sm transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-line text-accent flex items-center justify-center text-sm transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </aside>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 w-20 h-20 border-t border-r border-accent/40 hidden md:block"
              />
              <form
                onSubmit={handleSubmit}
                className="relative bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-[0_12px_40px_rgba(35,45,35,0.08)]"
              >
                <div className="mb-8 pb-6 border-b border-line">
                  <p className="text-[10px] uppercase tracking-[2.5px] text-accent font-semibold mb-3">
                    Stay enquiry
                  </p>
                  <h3 className="text-2xl md:text-3xl mb-2">
                    Tell us about your visit
                  </h3>
                  <p className="text-sm text-muted m-0">
                    Fill in your details and continue to WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                  <FieldLabel label="Full name" visuallyHidden>
                    <input
                      name="guestName"
                      type="text"
                      placeholder="Full name"
                      autoComplete="name"
                      required
                      className={INPUT_CLS}
                    />
                  </FieldLabel>

                  <FieldLabel label="Phone number" visuallyHidden>
                    <input
                      name="guestPhone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                      required
                      className={INPUT_CLS}
                    />
                  </FieldLabel>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                  <FieldLabel label="Check-in date">
                    <input
                      name="guestCheckIn"
                      type="date"
                      min={todayString}
                      value={checkIn}
                      onChange={(e) => {
                        const selectedDate = e.target.value;
                        setCheckIn(selectedDate);
                        if (checkOut && checkOut <= selectedDate) {
                          setCheckOut('');
                        }
                      }}
                      required
                      className={INPUT_CLS}
                    />
                  </FieldLabel>

                  <FieldLabel label="Check-out date">
                    <input
                      name="guestCheckOut"
                      type="date"
                      min={checkIn || todayString}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className={INPUT_CLS}
                    />
                  </FieldLabel>
                </div>

                <FieldLabel label="Number of guests" visuallyHidden>
                  <input
                    name="guestCount"
                    type="text"
                    placeholder="Number of guests (e.g. 2 adults, 1 child)"
                    required
                    className={INPUT_CLS}
                  />
                </FieldLabel>

                <FieldLabel label="Message (optional)" visuallyHidden>
                  <textarea
                    name="guestMessage"
                    placeholder="Your message (optional) — room preference or special requests"
                    className={`${INPUT_CLS} min-h-[130px] resize-y`}
                  />
                </FieldLabel>

                <button
                  type="submit"
                  className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp text-[16px]" />
                  Continue to WhatsApp
                  <i className="fas fa-arrow-right text-[12px] ml-1" />
                </button>

                <p className="text-[11px] text-muted text-center mt-4 mb-0 leading-5">
                  Your message will be prepared in WhatsApp. You can review it
                  before sending.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="bg-cream py-14 md:py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-14 items-center">
            <div>
              <Subtitle>Find your way</Subtitle>
              <h2>We’ll see you in Coorg.</h2>
              <p>
                Use the map to plan your route to Himani Heritage. If you need
                help with directions before you travel, get in touch with us.
              </p>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-accent hover:text-primary transition-colors"
              >
                Ask us for directions <i className="fas fa-arrow-right text-xs" />
              </a>
            </div>
            <div className="h-[320px] md:h-[420px] overflow-hidden rounded-sm border border-line bg-white">
              <iframe
                title="Himani Heritage Resorts — Bhagamandala, Coorg"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d974.2437859144859!2d75.5257151473841!3d12.384596240291197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDIzJzA2LjMiTiA3NcKwMzEnMzIuMCJF!5e0!3m2!1sen!2sin!4v1781363350559!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-12 md:mb-[60px]">
            <Subtitle>FAQ</Subtitle>
            <h2>Before you arrive</h2>
            <p>
              A few quick answers to help you plan your stay with confidence.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto">
            <Accordion items={faqItems} defaultOpenIndex={0} />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoItem({ icon, title, children }) {
  return (
    <div className="flex gap-4 items-start py-5 border-b border-line">
      <div className="w-11 h-11 rounded-full bg-cream text-accent flex items-center justify-center text-base flex-shrink-0">
        <i className={`fas fa-${icon}`} />
      </div>
      <div className="pt-0.5">
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-sm text-body leading-6 m-0">{children}</p>
      </div>
    </div>
  );
}

function FieldLabel({ label, children, visuallyHidden = false }) {
  return (
    <div className="mb-5">
      <label className={`${visuallyHidden ? 'sr-only' : 'block text-[10px] font-semibold tracking-[1.5px] uppercase text-muted mb-2'}`}>
        {label}
      </label>
      {children}
    </div>
  );
}
