import { useEffect, useState } from 'react';

export default function TestimonialSlider({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="max-w-[800px] mx-auto text-center relative min-h-[280px]">
      <i className="fas fa-quote-left block text-center text-[42px] text-accent opacity-35 mb-7" aria-hidden="true" />
      <div className="relative">
        {slides.map((s, i) => (
          <div
            key={i}
            className={[
              'transition-opacity duration-[600ms]',
              i === current ? 'opacity-100 relative' : 'opacity-0 pointer-events-none absolute inset-0',
            ].join(' ')}
          >
            <img
              src={s.avatar}
              alt={s.author}
              className="w-20 h-20 rounded-full mx-auto mb-6 border-[3px] border-accent p-[3px] object-cover"
            />
            <p className="font-heading italic text-xl font-semibold text-primary mb-6 leading-[1.5]">
              "{s.quote}"
            </p>
            <div className="font-heading font-bold text-primary mb-1">{s.author}</div>
            <div className="text-[13px] text-muted tracking-[1.5px] uppercase">{s.location}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={[
              'h-2.5 rounded-full transition-all duration-[400ms] ease-smooth border-0 cursor-pointer',
              i === current ? 'w-[30px] bg-accent' : 'w-2.5 bg-line',
            ].join(' ')}
          />
        ))}
      </div>
    </div>
  );
}
