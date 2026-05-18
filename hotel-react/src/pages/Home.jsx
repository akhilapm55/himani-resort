import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import WelcomeSection from '../components/WelcomeSection.jsx';
import Subtitle from '../components/Subtitle.jsx';
import AmenityCard from '../components/AmenityCard.jsx';
// import RoomCard from '../components/RoomCard.jsx';
import RoomRow from '../components/RoomRow.jsx';
// import BlogCard from '../components/BlogCard.jsx';
import Counter from '../components/Counter.jsx';
import HoverCard from '../components/HoverCard.jsx';
import TestimonialSlider from '../components/TestimonialSlider.jsx';
import { useVideoModal } from '../context/VideoModalContext.jsx';
import {
  rooms,
  testimonials,
  blogPosts,
  homeAmenities,
} from '../data/content.js';

export default function Home() {
  const { open } = useVideoModal();

  return (
    <>
      <Hero />

      <WelcomeSection />

      {/* HERITAGE BANNER */}
      {/* <section className="reveal text-center bg-offwhite py-[100px] px-5">
        <span className="block font-heading italic text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-primary mb-2.5">
          Hosting in the misty hills of
        </span>
        <span className="block font-heading italic text-[clamp(60px,8vw,96px)] font-bold text-accent leading-none">
          Coorg
        </span>
      </section> */}

      {/* AMENITIES */}
      <section className="bg-white pt-12 pb-[60px] md:pt-16 md:pb-20 lg:pt-20 lg:pb-[120px]">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Resort Amenities</Subtitle>
            <h2>Small details, generous comfort</h2>
            <p>Eight rooms, attentive service, and the quiet luxuries that make a hill retreat feel like home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {homeAmenities.map((a, i) => (
              <AmenityCard key={i} icon={a.icon} title={a.title} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS SHOWCASE */}
      {/* <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="reveal flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-[60px]">
            <div>
              <Subtitle>Stay With Us</Subtitle>
              <h2 className="mb-0">Our Rooms</h2>
            </div>
            <Link
              to="/rooms"
              className="text-[13px] font-semibold tracking-[2px] uppercase text-primary pb-1 border-b border-accent transition-colors hover:text-accent"
            >
              See All Rooms <i className="fas fa-arrow-right" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {rooms.slice(0, 4).map((r, i) => (
              <RoomCard key={r.id} {...r} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ROOMS INTRO BANNER (terracotta callout, bold heading + MORE) */}
      <section className="relative overflow-hidden bg-accent text-white py-20 md:py-[100px]">
        {/* subtle decorative leaf motifs */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-8 w-[220px] h-[220px] opacity-[0.12] -rotate-[25deg] bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='white'><path d='M50 5 C30 30 20 55 50 95 C80 55 70 30 50 5 Z'/></svg>\")",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-12 w-[280px] h-[280px] opacity-[0.12] rotate-[140deg] bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='white'><path d='M50 5 C30 30 20 55 50 95 C80 55 70 30 50 5 Z'/></svg>\")",
          }}
        />

        <div className="container-x relative z-[2]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-[60px] items-center">
            <div className="reveal-left">
              <h2 className="font-heading font-extrabold leading-[1.05] text-white m-0 mb-7 text-[clamp(2.4rem,6vw,5rem)] tracking-[-1.5px]">
                Comfortable beds,<br />restful nights.{' '}
                <span className="text-white/30 whitespace-nowrap">8 rooms</span>
              </h2>
              <p className="max-w-[820px] text-base leading-[1.8] text-white/90 m-0">
                Our rooms are designed for unhurried mornings and easy nights — large beds dressed in fresh linens, generous bathrooms, and a window opening to the garden or the hills of Coorg.
              </p>
            </div>
            <Link
              to="/rooms"
              className="reveal-right flex-shrink-0 flex items-center justify-center w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-full bg-offwhite text-accent text-[13px] font-bold tracking-[3px] uppercase no-underline shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-[400ms] hover:scale-[1.08] hover:shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
            >
              More
            </Link>
          </div>
        </div>
      </section>

      {/* BROWSE ALL ROOMS (band list, image fades in on hover) */}
      <section className="bg-white">
        <div className="container-x pt-20 pb-10 md:pt-[120px] md:pb-12">
          <div className="reveal text-center max-w-[700px] mx-auto">
            <Subtitle>Every Room</Subtitle>
            <h2>Browse all our stays</h2>
            <p>Hover over any room to glimpse the view from your window.</p>
          </div>
        </div>
        <div className="reveal border-t border-line-light">
          {rooms.map((r) => (
            <RoomRow key={r.id} {...r} />
          ))}
        </div>
      </section>

      {/* AMENITIES CALLOUT (We love to be hospitable) */}
      <section className="bg-offwhite py-20 md:py-[120px]">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-start">
            <div className="reveal-left">
              <span className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[3px] uppercase text-accent mb-7">
                <span className="w-[7px] h-[7px] rounded-full bg-accent" />
                What We Offer
              </span>
              <h2 className="font-heading font-extrabold leading-[1.05] tracking-[-1.5px] text-accent text-[clamp(2.4rem,5vw,4.25rem)] m-0 mb-10">
                We love to be hospitable.
              </h2>
              <p className="max-w-[460px] text-base leading-[1.85] text-body m-0 mb-11">
                From plantation walks at sunrise to airport transfers and quiet evenings by the bonfire — we look after every detail of your stay so you can simply relax into the rhythm of Coorg.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-accent text-white text-[13px] font-bold tracking-[3px] uppercase no-underline shadow-[0_12px_30px_rgba(62,90,53,0.25)] transition-all duration-[400ms] hover:scale-[1.08] hover:shadow-[0_18px_45px_rgba(62,90,53,0.35)]"
              >
                More
              </Link>
            </div>

            <div className="reveal-right grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-x-10 lg:gap-y-[50px]">
              <AmenityCallout icon="fas fa-leaf" title="Plantation Walks">
                Guided morning walks through working coffee, cardamom, and pepper estates surrounding the resort.
              </AmenityCallout>
              <AmenityCallout icon="fas fa-utensils" title="Coorgi Cuisine">
                Hearty home-style cooking — Pandi curry, akki roti, and fresh local produce — served all day in our dining room.
              </AmenityCallout>
              <AmenityCallout icon="fas fa-wifi" title="Wi-Fi & Quiet Corners">
                High-speed internet throughout the resort and quiet reading corners by the garden — for those who like to mix work with rest.
              </AmenityCallout>
              <AmenityCallout icon="fas fa-plane" title="Airport Transfer">
                Private cab arrangements from Kannur International Airport (106&nbsp;km) — let our front desk know in advance.
              </AmenityCallout>
            </div>
          </div>
        </div>
      </section>

      {/* WELLNESS / EXPERIENCES — Poppins + 3 hover-image cards */}
      <section className="section-pad bg-white font-poppins">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="reveal-left py-5">
              <span className="inline-flex items-center gap-3.5 text-[13px] font-light tracking-[3px] uppercase text-accent mb-7
                               before:content-[''] before:inline-block before:w-10 before:h-px before:bg-accent">
                Experiences
              </span>

              <h2 className="font-poppins font-light leading-[1.1] tracking-[-1.5px] text-primary text-[clamp(2rem,4.5vw,4rem)] m-0 mb-7">
                <span className="font-extrabold">Slow days</span>, simple{' '}
                <span className="font-extrabold">pleasures</span>.
              </h2>

              <p className="max-w-[520px] text-[15px] leading-[1.85] text-body font-light m-0">
                From <strong className="font-semibold text-primary">sunrise yoga</strong> to a fresh-roasted cup of <strong className="font-semibold text-primary">estate coffee</strong>, the day at Himani Heritage is shaped around the rhythms of the <strong className="font-semibold text-primary">hills</strong>. Wander the plantations at dawn, take a slow dip in the pool, and end the evening around the bonfire.
              </p>
            </div>

            {/* Right column: three stacked cards, each reveals its dedicated image on hover */}
            <div className="reveal-right space-y-3">
              <HoverCard
                title="Yoga & Wellness"
                subtitle="Calm interiors"
                image="/images/ambiance.webp"
              />
              <HoverCard
                title="Swimming Pool"
                subtitle="Open-air sunshine"
                // TODO: replace with a real on-property pool photo
                image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80"
              />
              <HoverCard
                title="Plantation Walks"
                subtitle="Coffee & cardamom estates"
                // TODO: replace with a real plantation/garden photo
                image="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=1000&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOD & DRINK */}
      <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="reveal-left py-5">
              <Subtitle>Food &amp; Drink</Subtitle>
              <h2>Coorgi flavours, served fresh from the kitchen</h2>
              <p>Hearty Pandi curry, akki roti hot off the tava, kadambuttu, and pots of estate-roasted coffee — our kitchen serves home-style Coorg cuisine alongside familiar comfort food for younger guests and travellers.</p>
              <div className="flex gap-4 flex-wrap items-center mt-2">
                <Link to="/contact" className="btn btn-primary">Plan Your Meal</Link>
                <button
                  onClick={() => open('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1')}
                  className="inline-flex items-center gap-3.5 text-primary text-[13px] font-semibold tracking-[1.5px] uppercase bg-transparent border-0 p-0 cursor-pointer"
                >
                  <span className="relative w-[50px] h-[50px] rounded-full bg-accent text-white flex items-center justify-center text-sm">
                    <i className="fas fa-play" />
                    <span className="absolute inset-0 rounded-full border-2 border-accent animate-pulse-ring" />
                    <span className="absolute inset-0 rounded-full border-2 border-accent animate-pulse-ring-delayed" />
                  </span>
                  <span>A Taste of Coorg</span>
                </button>
              </div>
            </div>
            <div className="reveal-right rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Coorgi cuisine and dining"
                loading="lazy"
                className="w-full h-[350px] md:h-[500px] object-cover rounded-lg transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COUNTERS / FACTS */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
            <Counter label="Rooms" value={8} desc="Intimate & boutique" delay="0s" />
            <Counter label="Guest Rating" value={88} suffix="/100" desc="Across booking sites" delay="0.1s" />
            <Counter label="Reception" value={24} suffix="/7" desc="Always at your service" delay="0.2s" />
            <Counter label="To Triveni Sangama" value={100} suffix="m" desc="Sacred confluence" delay="0.3s" />
            <Counter label="To Abbi Falls" value={41} suffix="km" desc="A scenic day trip" delay="0.4s" />
          </div>
        </div>
      </section>

      {/* PARALLAX CTA — rounded inset card with real parallax bg + side-by-side buttons */}
      <section className="py-12 md:py-20">
        <div className="container-x">
          <div
            className="relative h-[380px] md:h-[420px] rounded-[20px] overflow-hidden bg-cover bg-center bg-scroll md:bg-fixed"
            style={{ backgroundImage: "url('/images/hero.webp')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
            <div className="relative z-[2] h-full flex items-center font-poppins px-7 md:px-12 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-7 md:gap-10 items-center w-full">
                <div className="max-w-[520px]">
                  <h2 className="font-poppins font-bold leading-[1.05] tracking-[-1px] text-white text-[clamp(1.9rem,3.6vw,3rem)] m-0 mb-4">
                    Experience Coorg in a new way.{' '}
                    <span className="text-accent-warm">Visit us.</span>
                  </h2>
                  <p className="text-[14px] leading-[1.65] text-white/85 font-light max-w-[400px] m-0">
                    Slow mornings, coffee straight off the estate, and a sky full of stars.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap md:flex-nowrap">
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 text-[13px] font-semibold rounded-full bg-white text-primary border-2 border-white transition-all duration-[400ms] ease-smooth hover:bg-transparent hover:text-white hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    Reserve now
                  </Link>
                  <Link
                    to="/rooms"
                    className="inline-block px-6 py-3 text-[13px] font-semibold rounded-full bg-transparent text-white border-2 border-white/80 transition-all duration-[400ms] ease-smooth hover:bg-white hover:text-primary hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    Browse all rooms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative section-pad bg-white overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute top-20 md:top-[100px] left-1/2 -translate-x-1/2 w-full max-w-container px-5 text-center whitespace-nowrap select-none pointer-events-none z-0 font-heading font-black leading-[0.9] tracking-[-2px] md:tracking-[-4px]
                     text-[clamp(4rem,9vw,10rem)]"
          style={{ color: 'rgba(62, 90, 53, 0.06)' }}
        >
          PEACEFUL
        </span>
        <div className="container-x relative z-[2]">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Guest Reviews</Subtitle>
            <h2>What our guests say</h2>
          </div>
          <TestimonialSlider slides={testimonials} />
        </div>
      </section>

      {/* INSTAGRAM-STYLE GALLERY */}
      <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Follow Us</Subtitle>
            <h2>On social media</h2>
            <p>Glimpses of life at Himani Heritage — the mist, the mornings, the meals.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <GalleryCard
              image="/images/ambiance.webp"
              tag="Quiet Interiors"
              likes="1.2k"
            />
            <GalleryCard
              image="/images/welcome.webp"
              tag="Coorg Views"
              likes="956"
            />
            <GalleryCard
              image="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80"
              tag="Plantations"
              likes="2.3k"
            />
            <GalleryCard
              image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
              tag="Misty Mornings"
              likes="1.8k"
            />
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[2px] uppercase text-primary py-3 hover:text-accent transition-colors group"
            >
              <i className="fab fa-instagram text-[20px]" />
              Follow us here
              <i className="fas fa-arrow-right transition-transform duration-[400ms] group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </section>

      {/* EXPLORE COORG (was Blog) */}
      {/* <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Explore Coorg</Subtitle>
            <h2>Just beyond the gate</h2>
            <p>Sacred rivers, misty viewpoints, and waterfalls — all within easy reach of the resort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} {...post} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </section> */}

    </>
  );
}

function AmenityCallout({ icon, title, children }) {
  return (
    <div>
      <i className={`${icon} text-[34px] text-accent mb-[18px] inline-block`} aria-hidden="true" />
      <h3 className="font-heading text-[1.25rem] font-bold text-accent m-0 mb-2.5">{title}</h3>
      <p className="text-sm leading-[1.75] text-body m-0">{children}</p>
    </div>
  );
}

function GalleryCard({ image, tag, likes }) {
  return (
    <a
      href="#"
      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer block"
    >
      <img
        src={image}
        alt={tag}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
      />
      {/* Subtle gradient at top + bottom so badges stay readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/40 pointer-events-none" />

      {/* Brand tag at top-left */}
      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full pl-1 pr-3 py-1 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
        <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center">
          <i className="fas fa-leaf text-[10px]" />
        </span>
        <span className="text-[11px] font-semibold text-primary tracking-wide">{tag}</span>
      </div>

      {/* Heart + likes at bottom-left */}
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
        <i className="fas fa-heart text-accent-warm text-[14px]" />
        <span className="text-[12px] font-medium">{likes} likes</span>
      </div>
    </a>
  );
}
