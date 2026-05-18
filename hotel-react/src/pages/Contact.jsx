import PageBanner from '../components/PageBanner.jsx';
import Subtitle from '../components/Subtitle.jsx';
import { Accordion } from '../components/Accordion.jsx';
import { brand, faqItems } from '../data/content.js';

const INPUT_CLS =
  'w-full px-[18px] py-[14px] border border-line rounded text-sm text-primary bg-white transition-colors duration-[400ms] focus:border-accent font-body';

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        bgImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      {/* CONTACT INFO + FORM */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div className="reveal-left lg:pr-5">
              <Subtitle>Get In Touch</Subtitle>
              <h2>Plan your stay with us.</h2>
              <p>Send us a message with your dates and we'll be in touch the same day with availability, rates, and directions to the resort. We're happy to help arrange airport pickup or local tours as well.</p>

              {/* TODO: replace placeholder contact details */}
              <div className="mt-10 space-y-7">
                <InfoItem icon="map-marker-alt" title="Address">{brand.fullAddress}</InfoItem>
                <InfoItem icon="phone-alt" title="Phone">Reservations: {brand.phone}</InfoItem>
                <InfoItem icon="envelope" title="Email">{brand.email}</InfoItem>
                <InfoItem icon="clock" title="Reception">24/7 — check-in 2:00 PM, check-out 12:00 PM</InfoItem>
              </div>

              <div className="flex gap-3.5 mt-10">
                {['facebook-f', 'instagram', 'whatsapp', 'youtube'].map((icon) => (
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

            <form
              onSubmit={(e) => e.preventDefault()}
              className="reveal-right bg-white p-10 rounded-lg shadow-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FieldLabel label="Name">
                  <input type="text" placeholder="Your full name" required className={INPUT_CLS} />
                </FieldLabel>
                <FieldLabel label="Email">
                  <input type="email" placeholder="you@email.com" required className={INPUT_CLS} />
                </FieldLabel>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FieldLabel label="Phone">
                  <input type="tel" placeholder="+91 00000 00000" className={INPUT_CLS} />
                </FieldLabel>
                <FieldLabel label="Dates of Stay">
                  <input type="text" placeholder="e.g. 14 – 17 June" className={INPUT_CLS} />
                </FieldLabel>
              </div>
              <FieldLabel label="Message">
                <textarea
                  placeholder="Number of guests, room preference, anything else we should know..."
                  className={`${INPUT_CLS} min-h-[150px] resize-y`}
                />
              </FieldLabel>
              <button type="submit" className="btn btn-primary w-full">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP — Bhagamandala, Coorg */}
      <section className="w-full h-[450px] overflow-hidden">
        <iframe
          title="Himani Heritage Resorts — Bhagamandala, Coorg"
          src="https://www.openstreetmap.org/export/embed.html?bbox=75.55%2C12.37%2C75.66%2C12.45&amp;layer=mapnik&amp;marker=12.41%2C75.6"
          loading="lazy"
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
            <p>Quick answers to the things our guests ask most often before they arrive.</p>
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
