# ivy.one — Next.js landing page

The ivy.one marketing site, rebuilt as a Next.js 16 (App Router, TypeScript) app for Vercel hosting.

Ported from the static `~/.openclaw/workspace/data/ivy-one-site/` build (index.html + waitlist.html) on 2026-08-14.

## Routes

- `/` — landing page (hero, "built for" strip, what Ivy does, the gap, how she lands, protocol library, pull quote, closing CTA, footer)
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
