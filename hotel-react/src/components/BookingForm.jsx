export default function BookingForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        absolute z-[5] bg-white rounded-lg shadow-form flex
        opacity-0 animate-fade-in-up [animation-delay:1s]

        bottom-5 left-5 right-5 flex-col gap-3 p-5

        md:bottom-[50px] md:left-1/2 md:right-auto md:-translate-x-1/2
        md:flex-row md:items-end md:gap-[18px] md:p-[22px_28px]
        md:w-auto md:max-w-none
      "
    >
      <Field label="Check In">
        <input type="date" className="w-full px-4 py-3 border border-line rounded text-sm text-primary transition-colors focus:border-accent" />
      </Field>
      <Field label="Check Out">
        <input type="date" className="w-full px-4 py-3 border border-line rounded text-sm text-primary transition-colors focus:border-accent" />
      </Field>
      <Field label="Adults">
        <select className="w-full px-4 py-3 border border-line rounded text-sm text-primary transition-colors focus:border-accent">
          <option>1 Adult</option>
          <option>2 Adults</option>
          <option>3 Adults</option>
          <option>4 Adults</option>
        </select>
      </Field>
      <Field label="Children">
        <select className="w-full px-4 py-3 border border-line rounded text-sm text-primary transition-colors focus:border-accent">
          <option>0 Children</option>
          <option>1 Child</option>
          <option>2 Children</option>
        </select>
      </Field>
      <button type="submit" className="btn btn-primary self-stretch md:self-end whitespace-nowrap">
        Book Now
      </button>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col md:min-w-[160px]">
      <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-muted mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
