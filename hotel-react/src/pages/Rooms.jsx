import PageBanner from '../components/PageBanner.jsx';
import Subtitle from '../components/Subtitle.jsx';
import RoomCard from '../components/RoomCard.jsx';
import AmenityCard from '../components/AmenityCard.jsx';
import { brand, rooms, roomAmenities, packageInfo } from '../data/content.js';

export default function Rooms() {
  return (
    <>
      <PageBanner
        title="Rooms & Packages"
        bgImage="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Rooms & Packages' }]}
      />

      {/* INTRO */}
      <section className="bg-white pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container-x">
          <div className="reveal text-center max-w-[720px] mx-auto">
            <Subtitle>Stay With Us</Subtitle>
            <h2>Nine private houses, three ways to stay</h2>
            <p>
              Every house sits on the ground floor with its own sit-out and mountain views. Choose a cosy one-bedroom, a roomy two-bedroom cottage, or our three-bedroom family villa — breakfast is included with every package.
            </p>
          </div>
        </div>
      </section>

      {/* ROOMS GRID */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {rooms.map((r, i) => (
              <RoomCard key={r.id} {...r} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE / PRICING SUMMARY */}
      <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[50px]">
            <Subtitle>Tariff</Subtitle>
            <h2>Packages &amp; pricing</h2>
            <p>Per-night rates, breakfast included. Extra beds available on request.</p>
          </div>

          <div className="reveal max-w-[760px] mx-auto bg-white rounded-lg shadow-card overflow-hidden">
            {rooms.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between gap-4 px-6 md:px-8 py-5 border-b border-line-light last:border-0"
              >
                <div>
                  <h3 className="text-[1.05rem] md:text-[1.2rem] font-semibold text-primary m-0">
                    {r.name}
                  </h3>
                  <span className="text-[13px] text-body">
                    {r.layout} · up to {r.guests} guests · {r.count} {r.count > 1 ? 'houses' : 'house'}
                  </span>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-heading text-[1.2rem] md:text-[1.5rem] font-bold text-primary whitespace-nowrap">
                    ₹{r.price.toLocaleString('en-IN')}
                  </span>
                  <span className="block text-[12px] text-muted">/night</span>
                </div>
              </div>
            ))}

            {/* Extras */}
            <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-5 bg-offwhite/60">
              <div>
                <h3 className="text-[1.05rem] font-semibold text-primary m-0">Extra Bed</h3>
                <span className="text-[13px] text-body">Add to any house</span>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="font-heading text-[1.2rem] font-bold text-primary whitespace-nowrap">
                  ₹{packageInfo.extraBed.toLocaleString('en-IN')}
                </span>
                <span className="block text-[12px] text-muted">/night</span>
              </div>
            </div>
          </div>

          <p className="reveal text-center text-[13px] text-muted mt-5 max-w-[600px] mx-auto">
            <i className="fas fa-mug-hot text-accent mr-1.5" />
            {packageInfo.breakfast}
          </p>

          <div className="reveal text-center mt-9">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-white text-[14px] font-semibold transition-all duration-300 hover:bg-accent-warm hover:-translate-y-0.5"
            >
              <i className="fab fa-whatsapp text-[18px]" /> Check availability on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* IN-ROOM AMENITIES */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>In Every House</Subtitle>
            <h2>Comforts as standard</h2>
            <p>Each house comes outfitted with the comforts of a good mountain retreat — and the small touches that make it home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {roomAmenities.map((a, i) => (
              <AmenityCard key={i} icon={a.icon} title={a.title} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="reveal bg-accent py-20 px-5 text-center text-white">
        <div className="container-x">
          <h2 className="text-white mb-6">Ready to come up to the mountains?</h2>
          <p className="text-white/85 text-[17px] mb-[30px] max-w-[600px] mx-auto">
            Message us on WhatsApp with your dates and group size — we'll confirm availability the same day.
          </p>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-primary text-[14px] font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <i className="fab fa-whatsapp text-[18px]" /> Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
