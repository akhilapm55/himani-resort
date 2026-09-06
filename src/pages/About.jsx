import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Subtitle from '../components/Subtitle.jsx';
import ParallaxCTA from '../components/ParallaxCTA.jsx';
import {
  resortImages,
  nearbyAttractions,
  whatWeDoStats,
  aboutAmenities,
} from '../data/content.js';

/* ── Amenity SVG icons ── */
const IconBed = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 9V6a2 2 0 012-2h16a2 2 0 012 2v3M2 9h20M2 9v9m20-9v9M2 18h20M7 13h2m6 0h2" />
  </svg>
);
const IconShower = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12V7a4 4 0 018 0M9 16l-.5 2M12 16v2m3-2l.5 2" />
  </svg>
);
// const IconShower = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12V7a4 4 0 018 0M9 16l-.5 2M12 16v2m3-2l.5 2" />
//   </svg>
// );


const IconCampfire = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    {/* Flame */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4c1 2-1 3-1 5a3 3 0 006 0c0-2-1-4-3-5 0 1-.5 2-2 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10c-2 1-3 3-3 5a3 3 0 006 0c0-2-1-4-3-5z"
    />

    {/* Logs */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 19l10-4"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 19L7 15"
    />
  </svg>
);

const IconCar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3v-5l2-5h14l2 5v5h-2M5 17a2 2 0 004 0M15 17a2 2 0 004 0M5 12h14" />
  </svg>
);
const IconFood = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 0a4 4 0 000 8m0-8a4 4 0 010 8m0 0v6M6 3c0 4 2 6 2 9H4M18 3c0 4-2 6-2 9h4" />
  </svg>
);
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" strokeLinecap="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
  </svg>
);
const IconLeaf = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 4C12 4 5 10 5 18c4 0 8-1 11-4 1-1 2-3 2-5V4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 18c2-4 5-7 9-9" />
  </svg>
);

/* ── Icon registry: maps `iconKey` from content.js → the SVG component above.
   Edit content.js to change amenity text/colors/order; edit this file to
   add a new icon. ── */
const AMENITY_ICONS = {
  bed: IconBed,
  shower: IconShower,
  campfire: IconCampfire,
  car: IconCar,
  food: IconFood,
  clock: IconClock,
  leaf: IconLeaf,
};

function WhatWeDo() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: two images side-by-side, tall right overlaps small left ── */}
          <div className="reveal-left relative flex items-end gap-4 min-h-[480px]">
            {/* Small image — bottom-left, shorter */}
            <div className="w-[44%] self-end">
              <img
                src="./images/about/room.webp"
                alt="Heritage bedroom"
                loading="lazy"
                className="w-full h-[300px] object-cover"
              />
            </div>
            {/* Tall image — right side, taller, overlaps upward */}
            <div className="w-[56%]">
              <img
                src="./images/about/bedroom.webp"                
                alt="Resort interior"
                loading="lazy"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>

          {/* ── RIGHT: text + progress bars ── */}
          <div className="reveal-right py-5">
            <Subtitle>What We Do</Subtitle>
            <h2>Discover the heart of Himani Heritage.</h2>
            <p className="mb-10">
              Our small, dedicated team is committed to delivering warm, unhurried hospitality rooted in the rhythms of Coorg. From the moment you arrive, every detail — the coffee, the quiet, the care — is shaped around your comfort.
            </p>

            {/* Progress bars — thick flat, label above, no track, no percentage */}
            <div className="space-y-7">
              {whatWeDoStats.map((bar, i) => (
                <div key={i}>
                  <p className="text-sm font-medium mb-2">{bar.label}</p>
                  <div className="w-full h-[6px] bg-stone-200 overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        background: bar.color,
                        width: animated ? `${bar.value}%` : '0%',
                        transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${i * 0.25}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/rooms" className="btn btn-primary">Learn More</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const nearestPlacesStyles = `
  .np-card { cursor: default; position: relative; }

  .np-photo { position: relative; height: 210px; overflow: hidden; }
  .np-photo img { width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94); }
  .np-card:hover .np-photo img { transform: scale(1.09); }

  .np-photo::after { content: ''; position: absolute; inset: 0;
    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
    transform: translateX(-100%); transition: transform 0.6s ease; }
  .np-card:hover .np-photo::after { transform: translateX(100%); }

  // .np-badge { position: absolute; top: 10px; right: 10px; width: 26px; height: 26px;
  //   border-radius: 50%; background: rgba(0,0,0,0.42); color: #fff;
  //   font-size: 11px; font-weight: 600; display: flex; align-items: center; justify-content: center;
  //   transition: transform 0.3s ease, background 0.3s ease; }

  .np-banner { position: absolute; bottom: 0; left: 0; right: 0;
    padding: 5px 10px; font-size: 10px; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase; color: #fff;
    transition: letter-spacing 0.3s ease; }
  .np-card:hover .np-banner { letter-spacing: 0.16em; }

  .np-body { padding-top: 11px; border-top-width: 2.5px; border-top-style: solid;
    transition: padding-left 0.3s ease; }
  .np-card:hover .np-body { padding-left: 4px; }

  .np-body h4 { font-size: 16px; font-weight: 600; line-height: 1.3; margin-bottom: 5px; }
  .np-body p  { font-size: 14px; line-height: 1.55; opacity: 0.6; }

  .np-arrow { display: inline-flex; align-items: center; margin-top: 7px;
    opacity: 0; transform: translateX(-6px);
    transition: opacity 0.3s ease, transform 0.3s ease; }
  .np-card:hover .np-arrow { opacity: 1; transform: translateX(0); }
`;

function NearestPlaces() {
  return (
    <section className="section-pad bg-offwhite">
      <style>{nearestPlacesStyles}</style>
      <div className="container-x">

        {/* Heading */}
        <div className="reveal text-center max-w-[720px] mx-auto mb-[64px]">
          <Subtitle>Explore Around Us</Subtitle>
          <h2>Wonders at Every Turn</h2>
          <p>
            Himani Heritage sits at the heart of Coorg's most celebrated landscape. Step beyond our gates and discover waterfalls, temples, wildlife, and hill-top panoramas — all within a short drive.
          </p>
        </div>

        {/* Two route groups */}
        <div className="space-y-16">
          {nearbyAttractions.map((route, ri) => (
            <div key={ri} className="reveal" style={{ animationDelay: `${ri * 0.1}s` }}>

              {/* Route header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="h-[2px] w-8" style={{ background: route.color }} />
                  <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: route.color }}>
                    {route.route}
                  </span>
                  <span className="text-xs font-semibold tracking-widest opacity-40">·</span>
                  <span className="text-xs font-semibold tracking-wide" style={{ color: route.color }}>
                    {route.distance}
                  </span>
                  <div className="h-[2px] w-8" style={{ background: route.color }} />
                </div>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              {/* Magazine editorial grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {route.spots.map((spot, si) => (
                  <div
                    key={si}
                    className="np-card reveal"
                    style={{ animationDelay: `${ri * 0.1 + si * 0.07}s` }}
                  >
                    {/* Photo */}
                    <div
                      className="np-photo"
                      style={{ background: route.bg }}
                    >
                      <img
                        src={spot.img}
                        alt={spot.name}
                        loading="lazy"
                        onError={e => { e.currentTarget.style.display = 'none'; }}
                      />
                      {/* Number badge */}
                      {/* <div
                        className="np-badge"
                        style={{ '--hover-bg': route.color }}
                        onMouseEnter={e => { e.currentTarget.style.background = route.color; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.42)'; }}
                      >
                        {si + 1}
                      </div> */}
                      {/* Location banner */}
                      <div className="np-banner" style={{ background: route.color }}>
                        {route.route} · {route.distance}
                      </div>
                    </div>

                    {/* Text body */}
                    <div className="np-body " style={{ borderColor: route.color,color: 'black',fontSize: '18px' }}>
                      <h4>{spot.name}</h4>
                      <p>{spot.desc}</p>
                      {/* Arrow reveal */}
                      <span className="np-arrow" style={{ color: route.color }}>
                        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="reveal text-center text-sm opacity-40 mt-14">
          Distances are approximate from Himani Heritage Resorts, Bhagamandala.
        </p>

      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        bgImage={resortImages.aboutBanner}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      {/* OUR STORY */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="reveal-left relative min-h-[500px]">
              <img
                src="/images/about/galleryimg1.jpeg"
                alt="Coorg misty hills"
                loading="lazy"
                className="w-[85%] h-[450px] object-cover rounded-lg shadow-card-hover"
              />
              <img
                src="/images/about/galleryimg6.jpeg"
                alt="Heritage interior"
                loading="lazy"
                className="absolute -bottom-10 right-0 w-[55%] h-[280px] object-cover rounded-lg border-[6px] border-white shadow-card-hover"
              />
            </div>
            <div className="reveal-right py-5">
              <Subtitle>Our Story</Subtitle>
              {/* <h2>A small heritage retreat, run with care.</h2> */}
              <h2>A heritage retreat in the heart of Coorg.</h2>
              {/* TODO: confirm exact founding year */}
              {/* <p>Formerly known as Camp Nishani Holidays, Himani Heritage Resorts has welcomed travellers to the spice-scented hills of Coorg for more than a decade.</p>
              <p>Reimagined as a heritage retreat, we blend the warmth of a small family-run inn with the comforts of a thoughtfully curated boutique stay. Eight rooms, attentive service, and a strong commitment to slow, local hospitality.</p>
              <p>From your morning cup of plantation-grown coffee to the bonfire that closes each day, every detail is shaped by the rhythms of Bhagamandala and the people who call it home.</p> */}
               <p>Located in Madikeri, Bhagamandala, within 34 km of Raja Seat and 35 km of Madikeri Fort, Himani Heritage Resorts — formerly Camp Nishani Holidays — offers a peaceful garden retreat for travellers seeking the soul of Coorg.</p>
              <p>Free private parking is available for guests who drive. The accommodation features attentive room service and a 24-hour front desk, ensuring a comfortable and seamless stay throughout your visit.</p>
              <p>Each room is appointed with a desk, flat-screen TV, wardrobe, and a private bathroom with shower and free toiletries — many overlooking the surrounding mountain landscape. Abbi Falls is just 41 km away, and Kannur International Airport lies 106 km from the resort.</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/rooms" className="btn btn-primary">View Rooms</Link>
                <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Amenities</Subtitle>
            <h2>Everything you need, nothing you don't</h2>
            <p>Simple comforts thoughtfully arranged for a restful stay in the hills.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {aboutAmenities.map((item, i) => {
              const Icon = AMENITY_ICONS[item.iconKey];
              return (
              <div
                key={i}
                className="reveal group relative bg-white rounded-xl p-8 border border-transparent hover:-translate-y-1 hover:border-stone-200 hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* colour wash on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 rounded-xl"
                  style={{ background: item.iconColor }}
                />
                {/* icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 relative z-10"
                  style={{ background: item.color, color: item.iconColor }}
                >
                  <Icon />
                </div>
                {/* tag */}
                <span
                  className="inline-block text-[11px] font-semibold px-2 py-[2px] rounded-full mb-3 relative z-10"
                  style={{ background: item.tagBg, color: item.tagText }}
                >
                  {item.tag}
                </span>
                <h4 className="text-base font-semibold mb-2 relative z-10">{item.title}</h4>
                <p className="text-sm leading-relaxed opacity-70 relative z-10">{item.desc}</p>
                {/* arrow */}
                <svg className="absolute top-6 right-6 w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-40 group-hover:translate-x-0 transition-all duration-300 z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Gallery</Subtitle>
            <h2>A glimpse of Himani Heritage</h2>
            <p>From the misty hills of Coorg to the warmth within our walls.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" style={{ gridAutoRows: '220px' }}>
            {[
              { src: '/images/about/dubareelephant.webp', alt: 'Resort garden', span: 'col-span-2 row-span-2' },
              { src: '/images/about/jeepsafari.jpg', alt: 'Guest room' },
              { src: '/images/about/nisargadhama.jpg', alt: 'Coorg hills' },
              { src: '/images/about/rajaseat.webp', alt: 'rajaseat' },
              { src: '/images/about/waterfalls.jpg', alt: 'waterfalls' },
              { src: '/images/about/goldentemple.jpg', alt: 'Heritage interior' },
              { src: '/images/about/galleryimg1.jpeg', alt: 'Resort garden', span: 'col-span-2 row-span-2' },
              { src: '/images/about/galleryimg2.jpeg', alt: 'Guest room' },
              { src: '/images/about/galleryimg3.jpeg', alt: 'Coorg hills' },
              { src: '/images/about/galleryimg4.jpeg', alt: 'Relaxing stay' },
              { src: '/images/about/galleryimg5.jpeg', alt: 'Pool view' },
              { src: '/images/about/galleryimg6.jpeg', alt: 'Heritage interior' },
              { src: '/images/about/galleryimg7.jpeg', alt: 'Heritage interior' },
              { src: '/images/about/galleryimg8.jpeg', alt: 'Heritage interior' },
              // { src: '/images/about/galleryimg9.jpeg', alt: 'Heritage interior' },
              // { src: '/images/about/galleryimg10.jpeg', alt: 'Heritage interior' },



            ].map((img, i) => (
              <div
                key={i}
                className={`reveal overflow-hidden rounded-lg ${img.span ?? ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <WhatWeDo />


      {/* OUR TEAM */}
      {/* <section className="section-pad bg-white">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Our Team</Subtitle>
            <h2>The people behind your stay</h2>
            <p>Small, dedicated, and proudly local — meet a few of the people who make Himani Heritage feel like home.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {teamMembers.map((m, i) => (
              <TeamCard key={i} {...m} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </section> */}

      {/* STATS */}
      {/* <section className="py-20 bg-offwhite">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
            <Counter label="Rooms" value={8} desc="Boutique by design" delay="0s" />
            <Counter label="Guest Rating" value={88} suffix="/100" desc="Across booking sites" delay="0.1s" />
            <Counter label="To Triveni Sangama" value={100} suffix="m" desc="A short walk" delay="0.2s" />
            <Counter label="To Madikeri" value={35} suffix="km" desc="Hill-town heritage" delay="0.3s" />
            <Counter label="Reception" value={24} suffix="/7" desc="Always available" delay="0.4s" />
          </div>
        </div>
      </section> */}

      {/* NEAREST PLACES */}
      <NearestPlaces />

  
      <ParallaxCTA
        bgImage="./images/about/about_cta.webp"
        subtitle="Reserve your stay"
        title="Come switch off in the mountains."
        description="Nine private houses, a quiet pool, and some of the clearest skies in Coorg. Tell us your dates and we'll take care of the rest."
        buttonLabel="Plan Your Stay"
        buttonTo="/contact"
      />
    </>
  );
}


