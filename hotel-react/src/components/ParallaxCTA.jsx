export default function ParallaxCTA({ bgImage, subtitle, title, description, buttonLabel, buttonTo = '#', buttonVariant = 'btn-accent' }) {
  return (
    <section
      className="relative h-[400px] md:h-[500px] bg-cover bg-center parallax-bg flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="reveal relative z-[2] text-center text-white max-w-[700px] px-5">
        {subtitle && <span className="subtitle text-accent">{subtitle}</span>}
        <h2 className="text-white mb-5">{title}</h2>
        {description && <p className="text-white/80 mb-[30px] text-[17px]">{description}</p>}
        {buttonLabel && (
          <a href={buttonTo} className={`btn ${buttonVariant}`}>{buttonLabel}</a>
        )}
      </div>
    </section>
  );
}
