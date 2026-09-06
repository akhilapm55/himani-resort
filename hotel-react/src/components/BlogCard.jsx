export default function BlogCard({ image, tag, date, title, excerpt, delay = '0s' }) {
  return (
    <article
      className="reveal group bg-white rounded-lg overflow-hidden shadow-card transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-card-hover"
      style={{ transitionDelay: delay }}
    >
      <div className="image-wipe h-[220px]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
        />
      </div>
      <div className="p-[30px]">
        <div className="flex gap-3.5 items-center mb-4">
          <span className="bg-offwhite text-accent text-[11px] font-semibold tracking-[1.5px] uppercase px-3 py-1 rounded">
            {tag}
          </span>
          <span className="text-[13px] text-muted">{date}</span>
        </div>
        <h3 className="text-xl mb-3.5 transition-colors duration-[400ms] group-hover:text-accent">{title}</h3>
        <p className="text-sm mb-[18px]">{excerpt}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[1.5px] uppercase text-primary group-hover:text-accent transition-colors"
        >
          Read More
          <i className="fas fa-arrow-right transition-transform duration-[400ms] group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
