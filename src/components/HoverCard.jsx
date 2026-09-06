/**
 * HoverCard — image-first tile.
 *
 * Default state: the dedicated image is visible with title + subtitle
 * floating over a subtle bottom gradient that keeps the text legible.
 *
 * Hover state: the gradient deepens, the subtitle highlights in terracotta,
 * the title nudges right, and the image zooms slightly.
 */
export default function HoverCard({
  title,
  subtitle,
  image,
  to = '#',
  height = 'h-[120px] md:h-[140px]',
}) {
  return (
    <a
      href={to}
      className={`group relative block ${height} rounded-lg overflow-hidden no-underline cursor-pointer`}
    >
      {/* Image — always visible, slight zoom on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Default subtle bottom gradient — keeps text readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none"
      />

      {/* Hover gradient — deepens the darkness so the highlighted text pops */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 opacity-0 transition-opacity duration-[500ms] ease-out group-hover:opacity-100 pointer-events-none"
      />

      <div className="relative z-[2] h-full flex items-center justify-between px-6 md:px-8">
        <div>
          <span className="block font-poppins text-[11px] font-light tracking-[2.5px] uppercase text-white/80 mb-1 transition-colors duration-300 group-hover:text-accent-warm">
            {subtitle}
          </span>
          <h3 className="font-poppins text-[1.25rem] md:text-[1.5rem] font-bold text-white m-0 leading-tight transition-transform duration-300 group-hover:translate-x-1">
            {title}
          </h3>
        </div>
        <i className="fas fa-arrow-right text-white/80 group-hover:text-white transition-all duration-300 group-hover:translate-x-1.5" />
      </div>
    </a>
  );
}
