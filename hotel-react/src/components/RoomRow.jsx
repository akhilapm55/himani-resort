import { Link } from 'react-router-dom';

/**
 * RoomRow — responsive room band.
 *
 * Desktop (md+): full-width row. Background image and dark overlay fade in
 * on hover. Description shows by default; on hover it fades out and the
 * guests/beds/view meta fades in next to the price.
 *
 * Mobile (<md): a thumbnail on the left makes it obvious this is a room
 * card with a photo. Right side shows name, compact meta, price, and a
 * right-arrow chevron so it reads as tappable.
 */
export default function RoomRow({
  image,
  name,
  description,
  price,
  guests,
  beds,
  viewIcon = 'fas fa-vector-square',
  viewLabel,
  to = '/rooms',
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden border-b border-line-light text-inherit no-underline"
    >
      {/* Desktop-only: full-bleed image fades in on hover */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-0 bg-cover bg-center scale-[1.05] opacity-0 transition-opacity duration-[700ms] ease-smooth group-hover:opacity-100"
        style={{ backgroundImage: `url('${image}')` }}
      />
      {/* Desktop-only: dark overlay on hover */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-0 bg-dark-bg/60 opacity-0 transition-opacity duration-[700ms] ease-smooth group-hover:opacity-100"
      />

      <div className="relative z-[2] max-w-container mx-auto px-5 py-4 md:py-14 flex md:grid md:grid-cols-[1fr_auto] gap-4 md:gap-10 items-center min-h-[120px] md:min-h-[200px]">
        {/* Mobile thumbnail */}
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="md:hidden w-[96px] h-[96px] rounded-lg object-cover flex-shrink-0 shadow-card"
        />

        {/* Text block */}
        <div className="flex-1 min-w-0 md:flex-initial">
          <h3 className="font-heading text-[1.05rem] md:text-[clamp(1.6rem,3vw,2.4rem)] font-semibold md:font-bold mb-1 md:mb-2.5 text-primary md:group-hover:text-white/90 transition-colors duration-500 truncate md:whitespace-normal">
            {name}
          </h3>

          {/* Description: desktop only */}
          <p className="hidden md:block max-w-[600px] m-0 text-body transition-opacity duration-[400ms] group-hover:opacity-0">
            {description}
          </p>

          {/* Mobile: compact meta + price + chevron */}
          <div className="md:hidden flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[12px] text-body whitespace-nowrap min-w-0">
              <span className="flex items-center"><i className="fas fa-user-friends mr-1 text-accent" />{guests}</span>
              <span className="text-line">·</span>
              <span className="flex items-center"><i className="fas fa-bed mr-1 text-accent" />{beds}</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="font-heading text-[15px] font-bold text-primary whitespace-nowrap">
                ₹{price.toLocaleString('en-IN')}
              </span>
              <i className="fas fa-arrow-right text-accent text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Desktop right column */}
        <div className="hidden md:flex items-center justify-end gap-8">
          <div className="flex gap-[22px] text-[13px] text-white/95 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 group-hover:delay-150 whitespace-nowrap">
            <span><i className="fas fa-user-friends mr-1.5" />{guests} Guests</span>
            <span><i className="fas fa-bed mr-1.5" />{beds}</span>
            {viewLabel && <span><i className={`${viewIcon} mr-1.5`} />{viewLabel}</span>}
          </div>
          <div className="font-heading text-2xl font-bold text-primary group-hover:text-white/90 whitespace-nowrap transition-colors duration-500">
            ₹{price.toLocaleString('en-IN')}{' '}
            <span className="text-sm font-normal text-muted group-hover:text-white/65 transition-colors duration-500">
              /night
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
