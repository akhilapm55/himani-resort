export default function RoomCard({
  image,
  name,
  price,
  description,
  guests,
  beds,
  viewIcon = 'fas fa-vector-square',
  viewLabel,
  delay = '0s',
}) {
  return (
    <article
      className="reveal group bg-white rounded-lg overflow-hidden shadow-card transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-card-hover"
      style={{ transitionDelay: delay }}
    >
      <div className="image-wipe relative h-[280px]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
        />
        <span className="absolute top-5 right-5 bg-white px-4 py-2 rounded text-sm font-semibold text-primary shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
          ₹{price.toLocaleString('en-IN')} <span className="text-accent">/night</span>
        </span>
      </div>
      <div className="p-[30px]">
        <h3 className="text-[1.4rem] mb-3 transition-colors duration-[400ms] group-hover:text-accent">{name}</h3>
        <p className="text-sm mb-5">{description}</p>
        <div className="flex flex-wrap gap-[22px] pt-5 border-t border-line-light text-[13px] text-body">
          <span><i className="fas fa-user-friends text-accent mr-1.5" />{guests} Guests</span>
          <span><i className="fas fa-bed text-accent mr-1.5" />{beds}</span>
          {viewLabel && (
            <span><i className={`${viewIcon} text-accent mr-1.5`} />{viewLabel}</span>
          )}
        </div>
      </div>
    </article>
  );
}
