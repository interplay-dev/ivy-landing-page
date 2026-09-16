"use client";

import dynamic from "next/dynamic";

/* Agentation's click-to-annotate overlay. Loaded lazily and client-side only, and
   only rendered in development (see the guard in app/layout.tsx), so it never
   reaches the production bundle or the live site. */
const Agentation = dynamic(() => import("agentation").then((m) => m.Agentation), {
  ssr: false,
});

export default function DevAnnotations() {
  return <Agentation />;
}
