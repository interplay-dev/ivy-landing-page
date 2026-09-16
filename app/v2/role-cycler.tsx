"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/* The hero role opens and closes on "senior hire", running through everything
   Ivy absorbs in between.

   The slot is a fixed width — the longest word plus its full stop — and every
   word is aligned to its LEFT edge, so each one starts flush against "your new"
   and always reads as a clean sentence. Because the slot never changes size,
   nothing before it reflows; only the word itself animates. The full stop is
   carried inside the slot so it stays tight to whichever word is showing.

   Widths are measured in a detached probe rather than on the words themselves,
   so the words can be laid out edge to edge inside the slot and contribute no
   horizontal overflow of their own. */

const WORDS = [
  "senior hire",
  "analyst",
  "investor",
  "assistant",
  "controller",
  "engineer",
  "designer",
  "senior hire",
];

const FIRST_HOLD = 2200;
const HOLD = 1700;

export default function RoleCycler() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const slot = useRef<HTMLSpanElement | null>(null);

  const measure = useCallback(() => {
    const el = slot.current;
    if (!el) return;
    const cs = window.getComputedStyle(el);
    const probe = document.createElement("span");
    probe.style.cssText = "position:absolute;left:-9999px;top:0;white-space:nowrap;visibility:hidden;pointer-events:none";
    probe.style.fontFamily = cs.fontFamily;
    probe.style.fontSize = cs.fontSize;
    probe.style.fontStyle = cs.fontStyle;
    probe.style.fontWeight = cs.fontWeight;
    probe.style.letterSpacing = cs.letterSpacing;
    document.body.appendChild(probe);

    let max = 0;
    for (const word of WORDS) {
      probe.textContent = `${word}.`;
      max = Math.max(max, probe.getBoundingClientRect().width);
    }
    probe.remove();
    if (max > 0) setWidth(Math.ceil(max));
  }, []);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    let live = true;
    document.fonts?.ready.then(() => live && measure());
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => {
      live = false;
      window.removeEventListener("resize", onResize);
    };
  }, [measure]);

  useEffect(() => {
    if (index >= WORDS.length - 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setIndex((i) => i + 1), index === 0 ? FIRST_HOLD : HOLD);
    return () => window.clearTimeout(t);
  }, [index]);

  return (
    <span
      className="cycle"
      ref={slot}
      aria-hidden="true"
      style={width ? { width: `${width}px` } : undefined}
    >
      {/* A zero-width space gives the slot a real text line box — full height and a
          proper text baseline — while advancing the line by nothing, so it cannot
          overflow the fixed-width slot the way a real word would. */}
      <span className="cycle__h">{"\u200B"}</span>
      {WORDS.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`cycle__w${i === index ? " is-on" : ""}${i < index ? " is-out" : ""}`}
        >
          {word}
          <span className="cycle__dot">.</span>
        </span>
      ))}
    </span>
  );
}
