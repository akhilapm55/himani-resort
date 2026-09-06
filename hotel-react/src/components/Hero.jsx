import { useScrollPosition } from '../hooks/useScrollPosition.js';
import { resortImages } from '../data/content.js';

export default function Hero() {
  const scrollY = useScrollPosition();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const parallaxOffset = !isMobile && scrollY < window.innerHeight ? scrollY * 0.15 : 0;

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] h-screen overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom will-change-transform"
        style={{
          backgroundImage: `url('${resortImages.hero}')`,
          transform: `translateY(${parallaxOffset}px) scale(1.05)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-black/65" />

      <div className="font-poppins font-thin relative z-[2] max-w-[650px] px-5 md:pl-[60px] text-white">
        <span className="subtitle font-poppins font-thin text-white opacity-0 animate-fade-in-up [animation-delay:0.3s]">
          Welcome to Coorg's hidden retreat
        </span>
        <h1 className="text-white font-poppins font-thin mb-6 opacity-0 animate-fade-in-up [animation-delay:0.5s]">
          Wake to misty hills &mdash; at the edge of{' '}
          <span className=" font-poppins font-extrabold">Bhagamandala.</span>
        </h1>
        {/* <p className="text-[17px] text-white/85 max-w-[540px] opacity-0 animate-fade-in-up [animation-delay:0.7s]">
          Tucked between coffee plantations and the Western Ghats, our heritage retreat invites you to slow down and breathe in the spice-scented air of Coorg.
        </p> */}
      </div>
    </section>
  );
}
