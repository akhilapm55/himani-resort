import { useCounter } from '../hooks/useCounter.js';

export default function Counter({ label, value, suffix = '', desc, delay = '0s' }) {
  const [ref, display] = useCounter(value);

  return (
    <div className="reveal text-center" style={{ transitionDelay: delay }}>
      <span className="block text-[13px] font-medium tracking-[2px] uppercase text-muted mb-3.5">
        {label}
      </span>
      <span className="block font-heading text-5xl font-bold text-primary leading-none mb-2.5">
        <span ref={ref}>{display}</span>
        {suffix && <span className="text-accent">{suffix}</span>}
      </span>
      {desc && <p className="text-sm text-body m-0">{desc}</p>}
    </div>
  );
}
