import { useRef } from 'react';

export default function AmenityCard({ icon, title, delay = '0s' }) {
  const ref = useRef(null);

  const applyTransform = (rx, ry, lift) => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(${lift}px)`;
  };

  const handleMouseEnter = () => applyTransform(0, 0, -6);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    applyTransform(y * -6, x * 7, -6);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transitionDelay: delay,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className="reveal group relative text-center bg-accent text-white rounded-lg overflow-hidden p-[28px_22px] transition-[transform,box-shadow] duration-300 ease-smooth hover:shadow-[0_25px_50px_rgba(62,90,53,0.35)]"
    >
      {/* Terracotta bottom line slides in on hover for warm contrast */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent-warm origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="w-[58px] h-[58px] rounded-full bg-white/15 text-white flex items-center justify-center mx-auto mb-4 text-[22px] transition-colors duration-300 group-hover:bg-white group-hover:text-accent">
        <i className={icon} />
      </div>

      <h3
        className="text-[1.05rem] leading-snug mb-0 text-white font-semibold"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
