import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import Subtitle from '../components/Subtitle.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import TeamCard from '../components/TeamCard.jsx';
import Counter from '../components/Counter.jsx';
import ParallaxCTA from '../components/ParallaxCTA.jsx';
import { features, teamMembers, resortImages } from '../data/content.js';

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
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Coorg misty hills"
                loading="lazy"
                className="w-[85%] h-[450px] object-cover rounded-lg shadow-card-hover"
              />
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="Heritage interior"
                loading="lazy"
                className="absolute -bottom-10 right-0 w-[55%] h-[280px] object-cover rounded-lg border-[6px] border-white shadow-card-hover"
              />
            </div>
            <div className="reveal-right py-5">
              <Subtitle>Our Story</Subtitle>
              <h2>A small heritage retreat, run with care.</h2>
              {/* TODO: confirm exact founding year */}
              <p>Formerly known as Camp Nishani Holidays, Himani Heritage Resorts has welcomed travellers to the spice-scented hills of Coorg for more than a decade.</p>
              <p>Reimagined as a heritage retreat, we blend the warmth of a small family-run inn with the comforts of a thoughtfully curated boutique stay. Eight rooms, attentive service, and a strong commitment to slow, local hospitality.</p>
              <p>From your morning cup of plantation-grown coffee to the bonfire that closes each day, every detail is shaped by the rhythms of Bhagamandala and the people who call it home.</p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/rooms" className="btn btn-primary">View Rooms</Link>
                <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY STAY WITH US */}
      <section className="section-pad bg-offwhite">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Why Stay With Us</Subtitle>
            <h2>A different kind of hill retreat</h2>
            <p>Three things make a stay at Himani Heritage feel particularly its own.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="reveal text-center max-w-[700px] mx-auto mb-[60px]">
            <Subtitle>Our Team</Subtitle>
            <h2>The people behind your stay</h2>
            <p>Small, dedicated, and proudly local — meet a few of the people who make Himani Heritage feel like home.</p>
          </div>
          {/* TODO: replace placeholder team photos & names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {teamMembers.map((m, i) => (
              <TeamCard key={i} {...m} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-offwhite">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]">
            <Counter label="Rooms" value={8} desc="Boutique by design" delay="0s" />
            <Counter label="Guest Rating" value={88} suffix="/100" desc="Across booking sites" delay="0.1s" />
            <Counter label="To Triveni Sangama" value={100} suffix="m" desc="A short walk" delay="0.2s" />
            <Counter label="To Madikeri" value={35} suffix="km" desc="Hill-town heritage" delay="0.3s" />
            <Counter label="Reception" value={24} suffix="/7" desc="Always available" delay="0.4s" />
          </div>
        </div>
      </section>

      <ParallaxCTA
        bgImage="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80"
        subtitle="Reserve your stay"
        title="Come slow down in the hills."
        description="Eight rooms, a quiet garden, and the gentle hum of Bhagamandala just outside. Reserve your dates and we'll take care of the rest."
        buttonLabel="Book Your Room"
        buttonTo="/contact"
      />
    </>
  );
}
