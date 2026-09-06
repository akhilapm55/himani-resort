import { Link } from 'react-router-dom';

export default function PageBanner({ title, breadcrumb = [], bgImage }) {
  return (
    <section
      className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75" />
      <div className="relative z-[2] pt-20 px-5">
        <h1 className="text-white mb-3.5">{title}</h1>
        <div className="text-[13px] uppercase tracking-[2px] text-white/85">
          {breadcrumb.map((c, i) => (
            <span key={i}>
              {c.to ? (
                <Link to={c.to} className="text-white/70 hover:text-accent transition-colors">{c.label}</Link>
              ) : (
                <span>{c.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="mx-2 text-accent">/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
