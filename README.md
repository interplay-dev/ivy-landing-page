# ivy.one — Next.js landing page

The ivy.one marketing site — Next.js 16 (App Router, TypeScript), built for Vercel hosting.

The `/` landing page follows the Ivy Brand System v1.0 (Aug 2026) and was ported on 2026-08-26 from the
"FINAL LANDING PAGE" frame in the [Ivy — Landing page Figma file](https://www.figma.com/design/cNF5nVeXhM5ZeugvtZdYXo).
Fonts are self-hosted via `next/font` (Inter Tight, Inter, Instrument Serif, IBM Plex Mono); the hero
device mockups (dashboard laptop, iPad, Slack phone) are pure HTML/CSS — no images.

## Routes

- `/` — landing page (hero + device cluster, stats, problem band, six roles, pull quote, protocol library, comparison table, onboarding timeline, CTA + footer). Every booking CTA ("Request a demo") opens `mailto:leon@ivy.one?subject=REQUEST A DEMO`.
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

## Demo-request modal

Every "Request a demo" CTA opens a modal (form: name, work email, company, type, size, source,
privacy consent — modeled on rogo.com/felix). Submitting opens a prefilled REQUEST A DEMO email
to leon@ivy.one and POSTs to `/api/demo-request`, which upserts a HubSpot contact and creates a
deal in the stage labeled "Lead identified" (portal 247192581). `#demo` in the URL deep-links
the modal open; without JavaScript the CTAs fall back to plain mailto.

## Env

- `HUBSPOT_TOKEN` — a HubSpot **Private App** access token (`pat-na2-…`) with scopes
  `crm.objects.contacts.read/write` and `crm.objects.deals.read/write`. Create it under
  HubSpot → Settings → Integrations → Private Apps. (Developer API keys `na2-…` do NOT work
  for the CRM API.) Without it the form still works; deals just aren't created.
- `NEXT_PUBLIC_WAITLIST_ENDPOINT` — Apps Script Web App URL for waitlist submissions. Defaults to the current production endpoint if unset.

## Deploy

Push to GitHub → connect the repo in Vercel → set `NEXT_PUBLIC_WAITLIST_ENDPOINT` (optional) in Project Settings → deploy. Point the `ivy.one` domain at the Vercel project.

## Brand

Design tokens (color ramp, type scale, radii, shadows, motion) live in `app/globals.css` and mirror
`~/IVY/brand/ivy-brand-guidelines.html` — one green (`#1B6A4D`), bone ground (`#F4F2ED`), Ivy 950 bands
as punctuation, Instrument Serif for a single pull quote.
