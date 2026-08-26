"use client";

import { useEffect } from "react";

// Sticky-nav hairline + brand scroll reveal (520ms, once only, honors
// prefers-reduced-motion, reveals instantly when the page loads hidden).
export default function Effects() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll(".reveal");
    let io: IntersectionObserver | undefined;
    if (reduce || document.hidden || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((el) => io?.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return null;
}
