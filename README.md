# ivy.one — Next.js landing page

The ivy.one marketing site — Next.js 16 (App Router, TypeScript), built for Vercel hosting.

The `/` landing page follows the Ivy Brand System v1.0 (Aug 2026) and was ported on 2026-08-26 from the
"FINAL LANDING PAGE" frame in the [Ivy — Landing page Figma file](https://www.figma.com/design/cNF5nVeXhM5ZeugvtZdYXo).
Fonts are self-hosted via `next/font` (Inter Tight, Inter, Instrument Serif, IBM Plex Mono); the hero
device mockups (dashboard laptop, iPad, Slack phone) are pure HTML/CSS — no images.

## Routes

- `/` — landing page (hero + device cluster, stats, problem band, six roles, pull quote, protocol library, comparison table, onboarding timeline, CTA + footer). Every booking CTA opens `mailto:leon@ivy.one?subject=BOOK A CALL`.
- `/waitlist` — waitlist signup form (validates work email against free-email blocklist, POSTs to a Google Apps Script Web App bound to the "TEST Ivy-as-a-Service Waitlist Auto Populate" Sheet)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Env

- `NEXT_PUBLIC_WAITLIST_ENDPOINT` — Apps Script Web App URL for waitlist submissions. Defaults to the current production endpoint if unset.

## Deploy

Push to GitHub → connect the repo in Vercel → set `NEXT_PUBLIC_WAITLIST_ENDPOINT` (optional) in Project Settings → deploy. Point the `ivy.one` domain at the Vercel project.

## Brand

Design tokens (color ramp, type scale, radii, shadows, motion) live in `app/globals.css` and mirror
`~/IVY/brand/ivy-brand-guidelines.html` — one green (`#1B6A4D`), bone ground (`#F4F2ED`), Ivy 950 bands
as punctuation, Instrument Serif for a single pull quote.
