export default function TeamCard({ image, name, role, delay = '0s' }) {
  return (
    <div className="reveal group text-center" style={{ transitionDelay: delay }}>
      <div className="image-wipe relative aspect-square rounded-lg mb-5">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-3.5 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100">
          {['facebook-f', 'twitter', 'linkedin-in'].map((icon, i) => (
            <a
              key={icon}
              href="#"
              aria-label={icon}
              className="w-[38px] h-[38px] rounded-full bg-white text-primary flex items-center justify-center text-sm translate-y-2.5 opacity-0 transition-all duration-[400ms] group-hover:translate-y-0 group-hover:opacity-100 hover:bg-accent hover:text-white"
              style={{ transitionDelay: `${0.05 + i * 0.1}s` }}
            >
              <i className={`fab fa-${icon}`} />
            </a>
          ))}
        </div>
      </div>
      <h3 className="text-[1.2rem] mb-1">{name}</h3>
      <span className="text-[13px] tracking-[2px] uppercase text-accent">{role}</span>
    </div>
  );
}
