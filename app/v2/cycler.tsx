"use client";

import { useEffect, useState } from "react";

/* A phrase that flips through a list in place.

   Every phrase sits in the same grid cell, so the slot is as wide as the
   longest one and as tall as the tallest, and all of them start at the slot's
   left edge. Nothing reflows as they change, and because the slot sizes itself
   there is no width to measure in JS.

   Inactive phrases are visibility:hidden (delayed, so the outgoing one still
   gets to fade) which also keeps them out of the heading's text for crawlers. */

export default function Cycler({
  words,
  hold = 2000,
  className = "",
}: {
  words: string[];
  hold?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % words.length), hold);
    return () => window.clearTimeout(t);
  }, [index, hold, words.length]);

  return (
    <span className={`cyc ${className}`.trim()} aria-label={words[0]}>
      {words.map((word, i) => (
        <span key={word} className={`cyc__w${i === index ? " is-on" : ""}`} aria-hidden="true">
          {word}
        </span>
      ))}
    </span>
  );
}
