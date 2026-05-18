import { useEffect, useRef, useState } from 'react';

export function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  return (
    <div className="mt-[30px]">
      {items.map((it, i) => (
        <AccordionItem
          key={i}
          title={it.title}
          isOpen={i === openIndex}
          onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
          delay={it.delay}
        >
          {it.content}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, isOpen, onToggle, children, delay }) {
  const bodyRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && bodyRef.current) {
      setMaxHeight(bodyRef.current.scrollHeight + 'px');
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div
      className={[
        'border rounded-md mb-3.5 overflow-hidden transition-all duration-[400ms]',
        isOpen ? 'border-accent shadow-accent' : 'border-line',
      ].join(' ')}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-5 font-heading text-lg font-semibold text-primary text-left"
      >
        <span>{title}</span>
        <i className={`fas fa-chevron-down text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        ref={bodyRef}
        className="accordion-body"
        style={{ maxHeight }}
      >
        <div className="px-6 pb-6 text-[15px] text-body">{children}</div>
      </div>
    </div>
  );
}
