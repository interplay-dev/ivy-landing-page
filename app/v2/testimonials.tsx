"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* The three testimonials, in the order the rules read them:
   1 Chris Zhang, 2 Mark Peter Davis, 3 Kate Kelly.
   Copy is kept in sync with the Testimonial component set in Figma. */

type Quote = {
  key: string;
  quote: string;
  name: string;
  role: string;
  firm: string;
  img: string;
};

const QUOTES: Quote[] = [
  {
    key: "chris",
    quote:
      "“Ivy has become an essential part of our day-to-day work. She has become a true member of our firm and made our lives and work so much easier.”",
    name: "Chris Zhang",
    role: "Partner & CIO",
    firm: "Ascend Capital Family Office",
    img: "/img/portraits/portrait-chris.jpg",
  },
  {
    key: "mpd",
    quote:
      "“Ivy is one of our favorite employees and she’s been a massive win for the entire team. Getting a 10× return on labor cost is a no-brainer.”",
    name: "Mark Peter Davis",
    role: "Founding Partner",
    firm: "Interplay VC",
    img: "/img/portraits/portrait-mpd.jpg",
  },
  {
    key: "kate",
    quote:
      "“Since implementing Ivy, we’ve seen an immense productivity boost and happier clients. Ivy took on so many tasks we’d been putting off.”",
    name: "Kate Kelly",
    role: "CEO",
    firm: "Chelsea Capital",
    img: "/img/portraits/portrait-kate.jpg",
  },
];

const INTERVAL = 4000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);
  const region = useRef<HTMLDivElement | null>(null);

  const select = useCallback((n: number) => setIndex(n), []);

  useEffect(() => {
    if (held) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % QUOTES.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, held]);

  // Arrow keys move between testimonials once one of the lines has focus.
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (index + 1) % QUOTES.length
        : (index - 1 + QUOTES.length) % QUOTES.length;
    setIndex(next);
    const tabs = region.current?.querySelectorAll<HTMLButtonElement>(".quote__dots button");
    tabs?.[next]?.focus();
  };

  return (
    <div
      className="wrap quote"
      ref={region}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <div className="quote__portrait">
        {QUOTES.map((q, n) => (
          <img
            key={q.key}
            src={q.img}
            alt={n === index ? q.name : ""}
            className={n === index ? "is-on" : undefined}
            width={720}
            height={720}
            aria-hidden={n !== index}
          />
        ))}
      </div>

      <div>
        <div className="quote__stack">
          {QUOTES.map((q, n) => (
            <div
              key={q.key}
              className={`quote__item${n === index ? " is-on" : ""}`}
              role="tabpanel"
              id={`quote-panel-${q.key}`}
              aria-labelledby={`quote-tab-${q.key}`}
              aria-hidden={n !== index}
            >
              <blockquote>{q.quote}</blockquote>
              <p className="quote__name">{q.name}</p>
              <p className="quote__role">{q.role}</p>
              <p className="quote__firm">{q.firm}</p>
            </div>
          ))}
        </div>

        <div className="quote__dots" role="tablist" aria-label="Testimonials" onKeyDown={onKey}>
          {QUOTES.map((q, n) => (
            <button
              key={q.key}
              type="button"
              role="tab"
              id={`quote-tab-${q.key}`}
              aria-controls={`quote-panel-${q.key}`}
              aria-selected={n === index}
              tabIndex={n === index ? 0 : -1}
              data-on={n === index ? "true" : undefined}
              onClick={() => select(n)}
            >
              <span className="sr-only">{q.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
