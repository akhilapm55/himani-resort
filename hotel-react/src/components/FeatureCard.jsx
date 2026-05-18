export default function FeatureCard({ icon, title, description, delay = '0s' }) {
  return (
    <div
      className="reveal group relative bg-white border border-line rounded-lg p-[50px_35px] text-center overflow-hidden transition-all duration-[400ms] ease-smooth hover:-translate-y-2 hover:shadow-card-hover hover:border-transparent"
      style={{ transitionDelay: delay }}
    >
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
      <div className="w-20 h-20 rounded-full bg-offwhite text-accent flex items-center justify-center mx-auto mb-[26px] text-[30px] transition-all duration-[400ms] group-hover:bg-accent group-hover:text-white">
        <i className={icon} />
      </div>
      <h3 className="text-[1.3rem] mb-3.5">{title}</h3>
      <p className="text-sm m-0">{description}</p>
    </div>
  );
}
