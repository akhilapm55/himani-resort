// import { packageInfo } from '../data/content.js';
import { useBookingModal } from '../context/BookingModalContext.jsx';

export default function RoomCard({
  image,
  name,
  layout,
  price,
  description,
  guests,
  beds,
  size,
  viewIcon = 'fas fa-mountain',
  viewLabel,
  extraBed,
  charges,
  features = [],
  delay = '0s',
}) {
  const { open } = useBookingModal();
  return (
    <article
      className="reveal group bg-white rounded-3xl overflow-hidden shadow-card transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-card-hover flex flex-col"
      style={{ transitionDelay: delay }}
    >
      <div className="image-wipe relative h-[260px]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
        />
        {/* {layout && (
          <span className="absolute top-5 left-5 bg-accent text-white px-3 py-1.5 rounded text-[11px] font-semibold tracking-wide uppercase">
            {layout}
          </span>
        )} */}
        <span className="absolute top-5 right-5 bg-white px-4 py-2 rounded text-sm font-semibold text-primary shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
          ₹{price.toLocaleString('en-IN')} <span className="text-accent">/night</span>
        </span>
      </div>

      <div className="p-[30px] flex flex-col flex-1">
        <h3 className="text-[1.4rem] mb-3 transition-colors duration-[400ms] group-hover:text-accent">{name}</h3>
        <p className="text-sm mb-5">{description}</p>

        <div className="flex flex-wrap gap-[18px] pb-3 mb-3 text-[13px] text-body">
          <span><i className="fas fa-user-friends text-accent mr-1.5" />{guests} Guests</span>
          <span><i className="fas fa-bed text-accent mr-1.5" />{beds}</span>
          {size && <span><i className="fas fa-vector-square text-accent mr-1.5" />{size} m²</span>}
          {viewLabel && <span><i className={`${viewIcon} text-accent mr-1.5`} />{viewLabel}</span>}
          <span>
            <i className="fas fa-coffee text-accent mr-1.5" />
            Breakfast included
          </span>
        </div>

        {/* <p className="pb-5 mb-5 border-b border-line-light text-[12px] text-muted">
          <i className="fas fa-plus-circle text-accent mr-1.5" />
          +1 is an extra bed, charged at ₹{packageInfo.extraBed.toLocaleString('en-IN')}/night.
          {extraBed} is extra bed, charged at ₹{charges}/night.
        </p> */}

        {extraBed && charges && (
          <p className="pb-5 mb-5 border-b border-line-light text-[12px] text-muted">
            <i className="fas fa-plus-circle text-accent mr-1.5" />
            {extraBed} extra bed{extraBed > 1 ? 's' : ''}, charged at ₹{charges.toLocaleString('en-IN')}/night.
          </p>
        )}

        {features.length > 0 && (
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 text-[13px] text-body">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <i className="fas fa-check text-accent text-[11px] mt-1 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}
        
        <button
          type="button"
          onClick={() => open(name)}
          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded bg-primary text-white text-[13px] font-semibold tracking-[1px] uppercase transition-all duration-300 hover:bg-accent"
        >
          <i className="fas fa-calendar-check text-[15px]" /> Book this stay
        </button>
      </div>
    </article>
  );
}
