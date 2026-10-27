
import { useState } from 'react';
import PageBanner from '../components/PageBanner.jsx';
import Subtitle from '../components/Subtitle.jsx';
import { Accordion } from '../components/Accordion.jsx';
import { brand, faqItems } from '../data/content.js';

const INPUT_CLS =
  'w-full px-[18px] py-[14px] border border-line rounded text-sm text-primary bg-white transition-colors duration-[400ms] focus:border-accent font-body';

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

  // Handle the enquiry form and open WhatsApp.
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

    const url = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        bgImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* CONTACT INFO + FORM */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="reveal-left lg:pr-5">
              <Subtitle>Get In Touch</Subtitle>

              <h2>Plan your stay with us.</h2>

              <p>
                The fastest way to book is on WhatsApp — message us your dates
                and group size and we'll confirm availability the same day.
                You can also call us or send the enquiry form across.
              </p>

              {/* WhatsApp button */}
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 mt-6 px-7 py-3.5 rounded-full bg-accent text-white text-[14px] font-semibold transition-all duration-300 hover:bg-accent-warm hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp text-[18px]" />
                Book on WhatsApp
              </a>

              <div className="mt-10 space-y-7">
                <InfoItem icon="map-marker-alt" title="Address">
                  {brand.fullAddress}
                </InfoItem>

                <InfoItem icon="phone-alt" title="Phone / WhatsApp">
                  <a
                    href={`tel:${brand.phoneRaw}`}
                    className="hover:text-accent transition-colors"
                  >
                    {brand.phone}
                  </a>
                </InfoItem>

                <InfoItem icon="clock" title="Reception">
                  24/7 · Check-in 2:00 PM · Check-out 12:00 PM
                </InfoItem>
              </div>

              <div className="flex gap-3.5 mt-10">
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-[42px] h-[42px] rounded-full bg-offwhite text-accent flex items-center justify-center text-sm transition-all duration-[400ms] hover:bg-accent hover:text-white hover:-translate-y-1"
                >
                  <i className="fab fa-whatsapp" />
                </a>

                {/* Add your actual social media links here */}
                {['instagram', 'facebook-f'].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    aria-label={icon}
                    className="w-[42px] h-[42px] rounded-full bg-offwhite text-accent flex items-center justify-center text-sm transition-all duration-[400ms] hover:bg-accent hover:text-white hover:-translate-y-1"
                  >
                    <i className={`fab fa-${icon}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* ENQUIRY FORM */}
            <form
              onSubmit={handleSubmit}
              className="reveal-right bg-white p-10 rounded-lg shadow-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FieldLabel label="Name">
                  <input
                    name="guestName"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    className={INPUT_CLS}
                  />
                </FieldLabel>

                <FieldLabel label="Phone">
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

              {/* CHECK-IN AND CHECK-OUT CALENDARS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FieldLabel label="Check-in Date">
                  <input
                    name="guestCheckIn"
                    type="date"
                    min={todayString}
                    value={checkIn}
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      setCheckIn(selectedDate);

                      // Clear checkout if it is no longer after check-in.
                      if (checkOut && checkOut <= selectedDate) {
                        setCheckOut('');
                      }
                    }}
                    required
                    className={INPUT_CLS}
                  />
                </FieldLabel>

                <FieldLabel label="Check-out Date">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FieldLabel label="No. of Guests">
                  <input
                    name="guestCount"
                    type="text"
                    placeholder="e.g. 2 adults, 1 child"
                    required
                    className={INPUT_CLS}
                  />
                </FieldLabel>
              </div>

              <FieldLabel label="Message">
                <textarea
                  name="guestMessage"
                  placeholder="Room preference or anything else we should know..."
                  className={`${INPUT_CLS} min-h-[150px] resize-y`}
                />
              </FieldLabel>

              <button
                type="submit"
                className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp text-[16px]" />
                Send via WhatsApp
              </button>

              <p className="text-[12px] text-muted text-center mt-3 m-0">
                Opens WhatsApp with your details pre-filled — just hit send.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MAP — Himani Heritage Resorts, Bhagamandala */}
      <section className="w-full h-[450px] overflow-hidden">
        <iframe
          title="Himani Heritage Resorts — Bhagamandala, Coorg"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d974.2437859144859!2d75.5257151473841!3d12.384596240291197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDIzJzA2LjMiTiA3NcKwMzEnMzIuMCJF!5e0!3m2!1sen!2sin!4v1781363350559!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 bg-cream"
        />
      </section>

      {/* FAQ */}
      <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>FAQ</Subtitle>
            <h2>Frequently asked questions</h2>
            <p>
              Quick answers to the things our guests ask most often before
              they arrive.
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
    <div className="flex gap-5 items-start">
      <div className="w-[50px] h-[50px] rounded-full bg-offwhite text-accent flex items-center justify-center text-lg flex-shrink-0">
        <i className={`fas fa-${icon}`} />
      </div>

      <div>
        <h4 className="text-base mb-1">{title}</h4>
        <p className="text-sm text-body m-0">{children}</p>
      </div>
    </div>
  );
}

function FieldLabel({ label, children }) {
  return (
    <div className="mb-5">
      <label className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-muted mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
