import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Subtitle from '../components/Subtitle.jsx';
import RoomCard from '../components/RoomCard.jsx';
import AmenityCard from '../components/AmenityCard.jsx';
import { rooms, roomAmenities } from '../data/content.js';

const FILTERS = [
  { key: 'all', label: 'All Rooms' },
  { key: 'queen', label: 'Deluxe Queen' },
  { key: 'double', label: 'Deluxe Double' },
  { key: 'triple', label: 'Deluxe Triple' },
];

export default function Rooms() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? rooms : rooms.filter((r) => r.category === filter);

  return (
    <>
      <PageBanner
        title="Our Rooms"
        bgImage="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Rooms' }]}
      />

      {/* FILTER BAR */}
      <div className="bg-white border-b border-line py-6 sticky top-16 md:top-20 z-[100]">
        <div className="container-x">
          <div className="flex justify-center gap-5 md:gap-[30px] flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={[
                  'relative bg-transparent border-0 text-sm font-semibold tracking-[1.5px] uppercase py-1.5 cursor-pointer transition-colors',
                  'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent after:origin-center after:transition-transform after:duration-300',
                  filter === f.key
                    ? 'text-primary after:scale-x-100'
                    : 'text-body hover:text-primary after:scale-x-0',
                ].join(' ')}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ROOMS GRID */}
      <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {visible.map((r, i) => (
              <RoomCard key={r.id} {...r} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
          {visible.length === 0 && (
            <p className="text-center text-body py-12">No rooms match this filter.</p>
          )}
        </div>
      </section>

      {/* AMENITIES OVERVIEW */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>In Every Room</Subtitle>
            <h2>Every room includes</h2>
            <p>Each of our rooms comes outfitted with the comforts of a good hill retreat — and the small touches that make it home.</p>
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
          <h2 className="text-white mb-6">Ready to come up to the hills?</h2>
          <p className="text-white/85 text-[17px] mb-[30px]">
            Send us a quick note with your dates and we'll get back to you the same day to confirm availability.
          </p>
          <Link to="/contact" className="btn btn-white">Enquire Now</Link>
        </div>
      </section>
    </>
  );
}
