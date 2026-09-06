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
              <h2>Escape the pollution. Embrace pure nature.</h2>
              <p>Formerly known as Camp Nishani Holidays, Himani Heritage Resorts is a tranquil mountain sanctuary tucked away in the serene Bhagamandala region of Madikeri, Coorg.</p>
              <p>Surrounded by pristine landscapes, lush greenery, and rolling hills, the resort is a getaway for nature lovers, stargazers, and families seeking peace and complete privacy. Nine private ground-floor houses are spread across the property, each opening to mist-covered mountain views.</p>
              <p>Far from city light pollution, our night skies stay exceptionally clear. With an open-air swimming pool, garden walking paths, and on-site dining, there's every reason to switch off and stay a while.</p>
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
            <h2>A different kind of mountain retreat</h2>
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
            <Counter label="Private Houses" value={9} desc="Across the grounds" delay="0s" />
            <Counter label="Room Types" value={3} desc="1, 2 & 3 bedroom" delay="0.1s" />
            <Counter label="Swimming Pool" value={1} desc="Open-air, natural" delay="0.2s" />
            <Counter label="To Madikeri" value={24} suffix="km" desc="Town centre" delay="0.3s" />
            <Counter label="Reception" value={24} suffix="/7" desc="Always available" delay="0.4s" />
          </div>
        </div>
      </section>

      <ParallaxCTA
        bgImage="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80"
        subtitle="Reserve your stay"
        title="Come switch off in the mountains."
        description="Nine private houses, a quiet pool, and the clearest skies in Coorg. Tell us your dates and we'll take care of the rest."
        buttonLabel="Plan Your Stay"
        buttonTo="/contact"
      />
    </>
  );
}
