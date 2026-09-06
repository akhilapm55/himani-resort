import { useScrollPosition } from '../hooks/useScrollPosition.js';
import { resortImages } from '../data/content.js';

export default function Hero() {
  const scrollY = useScrollPosition();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const parallaxOffset = !isMobile && scrollY < window.innerHeight ? scrollY * 0.15 : 0;

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] h-screen overflow-hidden flex items-center">
      {/*
        Background video.
        - `poster` is the existing hero image — shows instantly while the video loads
          (and forever, on mobile, where we set preload="none" to save bandwidth).
        - `preload="metadata"` on desktop downloads ~200KB of header instead of the full file.
        - `playsInline muted autoPlay loop` are required for autoplay on iOS/Android.
        - Two <source> tags let the browser pick webm (smaller) or fall back to mp4.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload={isMobile ? 'none' : 'auto'}
        poster={resortImages.hero}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.05)` }}
      >
        
        <source src="/Resort_video.mp4" type="video/mp4" />
      </video>

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
