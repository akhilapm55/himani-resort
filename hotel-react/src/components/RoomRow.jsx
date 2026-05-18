import { Link } from 'react-router-dom';

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
      {/* background image fades in on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-0 transition-opacity duration-[700ms] ease-smooth group-hover:opacity-100"
        style={{ backgroundImage: `url('${image}')` }}
      />
      {/* dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dark-bg/60 opacity-0 transition-opacity duration-[700ms] ease-smooth group-hover:opacity-100"
      />

      {/* content */}
      <div className="relative z-[2] max-w-container mx-auto px-5 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 md:gap-10 items-center min-h-[200px]">
        <div>
          <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] mb-2.5 text-primary group-hover:text-white/90 transition-colors duration-500">
            {name}
          </h3>
          <p className="max-w-[600px] m-0 text-body transition-opacity duration-[400ms] group-hover:opacity-0">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:justify-end gap-6 md:gap-8">
          <div className="hidden md:flex gap-[22px] text-[13px] text-white/95 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 group-hover:delay-150 whitespace-nowrap">
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
