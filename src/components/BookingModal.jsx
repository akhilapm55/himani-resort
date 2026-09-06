import { useEffect, useState } from 'react';
import { useBookingModal } from '../context/BookingModalContext.jsx';
import { brand, rooms, packageInfo } from '../data/content.js';

const INPUT_CLS =
  'w-full px-4 py-3 border border-line rounded text-sm text-primary bg-white transition-colors duration-300 focus:border-accent focus:outline-none font-body';

const EMPTY = {
  name: '',
  phone: '',
  room: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  extraBed: false,
  notes: '',
};

// Format a yyyy-mm-dd value to a friendly "14 Jun 2026".
function fmtDate(v) {
  if (!v) return '';
  const d = new Date(`${v}T00:00:00`);
  if (Number.isNaN(d.getTime())) return v;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Whole nights between two yyyy-mm-dd dates (0 if invalid/negative).
function nightsBetween(a, b) {
  if (!a || !b) return 0;
  const d1 = new Date(`${a}T00:00:00`);
  const d2 = new Date(`${b}T00:00:00`);
  const diff = Math.round((d2 - d1) / 86400000);
  return diff > 0 ? diff : 0;
}

export default function BookingModal() {
  const { isOpen, room, close } = useBookingModal();
  const [form, setForm] = useState(EMPTY);

  // When the modal opens, reset the form and apply any pre-selected room.
  useEffect(() => {
    if (isOpen) setForm({ ...EMPTY, room: room || '' });
  }, [isOpen, room]);

  if (!isOpen) return null;

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const nights = nightsBetween(form.checkIn, form.checkOut);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      "Hi Himani Heritage, I'd like to book a stay. Here are my details:",
      '',
      `Name: ${form.name || '-'}`,
      `Contact: ${form.phone || '-'}`,
      `Room: ${form.room || 'Not sure yet'}`,
      `Check-in: ${fmtDate(form.checkIn) || '-'}`,
      `Check-out: ${fmtDate(form.checkOut) || '-'}`,
      ...(nights ? [`Nights: ${nights}`] : []),
      `Guests: ${form.guests || '-'}`,
      `Extra bed: ${form.extraBed ? `Yes (+₹${packageInfo.extraBed.toLocaleString('en-IN')}/night)` : 'No'}`,
      ...(form.notes.trim() ? ['', `Notes: ${form.notes.trim()}`] : []),
    ];
    const url = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
    close();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center bg-black/70 p-4 md:p-6 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="relative w-full max-w-[560px] my-auto bg-white rounded-lg shadow-form">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 md:px-8 pt-6 md:pt-7 pb-4 border-b border-line-light">
          <div>
            <span className="block text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-1">
              Reservation
            </span>
            <h3 className="font-heading text-[1.35rem] md:text-[1.6rem] font-bold text-primary m-0">
              Request to book
            </h3>
          </div>
          <button
            onClick={close}
            aria-label="Close booking form"
            className="flex-shrink-0 w-9 h-9 rounded-full bg-offwhite text-primary flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-white"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 md:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full name" required>
              <input
                type="text" required placeholder="Your name"
                value={form.name} onChange={set('name')} className={INPUT_CLS}
              />
            </Field>
            <Field label="Contact number" required>
              <input
                type="tel" required placeholder="+91 00000 00000"
                value={form.phone} onChange={set('phone')} className={INPUT_CLS}
              />
            </Field>
          </div>

          <Field label="Room / stay">
            <select value={form.room} onChange={set('room')} className={INPUT_CLS}>
              <option value="">Not sure yet — please advise</option>
              {rooms.map((r) => (
                <option key={r.id} value={r.name}>{r.name}</option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Check-in" required>
              <input
                type="date" required
                value={form.checkIn} onChange={set('checkIn')} className={INPUT_CLS}
              />
            </Field>
            <Field label="Check-out" required>
              <input
                type="date" required min={form.checkIn || undefined}
                value={form.checkOut} onChange={set('checkOut')} className={INPUT_CLS}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <Field label="Guests">
              <input
                type="number" min="1" max="12"
                value={form.guests} onChange={set('guests')} className={INPUT_CLS}
              />
            </Field>
            <label className="flex items-center gap-3 px-4 py-3 border border-line rounded cursor-pointer transition-colors hover:border-accent mb-4">
              <input
                type="checkbox" checked={form.extraBed} onChange={set('extraBed')}
                className="w-4 h-4 accent-accent flex-shrink-0"
              />
              <span className="text-[13px] text-body leading-tight">
                Add extra bed
                <span className="block text-[11px] text-muted">
                  +₹{packageInfo.extraBed.toLocaleString('en-IN')}/night
                </span>
              </span>
            </label>
          </div>

          <Field label="Notes (optional)">
            <textarea
              placeholder="Anything else we should know…"
              value={form.notes} onChange={set('notes')}
              className={`${INPUT_CLS} min-h-[80px] resize-y`}
            />
          </Field>

          {nights > 0 && (
            <p className="text-[12px] text-body -mt-1 mb-4">
              <i className="fas fa-moon text-accent mr-1.5" />
              {nights} {nights === 1 ? 'night' : 'nights'} selected
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full inline-flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp text-[16px]" /> Send booking request
          </button>
          <p className="text-[12px] text-muted text-center mt-3 m-0">
            Opens WhatsApp with your details pre-filled — just hit send to confirm.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="mb-4">
      <label className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-muted mb-1.5">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      {children}
    </div>
  );
}
