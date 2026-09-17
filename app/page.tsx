import type { Metadata } from "next";
import Shell, { Band, DemoButton } from "./v2/shell";
import RoleCycler from "./v2/role-cycler";

const TITLE = "Ivy: The AI Operator for Family Offices";
const DESCRIPTION =
  "Ivy is the most capable AI teammate for family offices. She joins your team, learns your firm and gets the work done.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // What Slack, LinkedIn and iMessage read when ivy.one is shared.
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ivy.one",
    siteName: "Ivy",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

/* The \n in each label is deliberate — .stats span is white-space:pre-line, so the
   second half of every label drops to its own line. */
const STATS = [
  ["3–6", "Roles absorbed\nby Ivy"],
  ["7", "Days from kickoff\nto live"],
  ["10×", "Return on payroll\nreplaced"],
  ["100+", "Workstreams\non day one"],
];

const FEATURES = [
  {
    title: (
      <>
        She works
        <br />
        <em className="acc">where you work</em>.
      </>
    ),
    body: "Ivy lives in your inbox, your calendar and your files. Send her an email, forward a thread, drop a document in the shared drive and she picks it up like anyone else on the team.",
    img: "/img/mocks/product-phone.jpg",
    alt: "A phone showing a Slack conversation with Ivy",
    reverse: false,
  },
  {
    title: (
      <>
        Talk to her
        <br />
        <em className="acc">like an employee</em>.
      </>
    ),
    body: "Ivy takes on any kind of work, is proactive and works 24/7. Email her a deck and a one-line ask, the way you would a senior team member. She asks the questions a good hire asks, then gets on with it.",
    img: "/img/mocks/product-email.jpg",
    alt: "An email addressed to Ivy with a pitch deck attached",
    reverse: true,
  },
  {
    title: (
      <>
        She already
        <br />
        <em className="acc">knows your business</em>.
      </>
    ),
    body: "Ivy learns how your firm actually operates. How the entities, the people, the way you like a memo written and works to your investment philosophy, not a generic one.",
    img: "/img/mocks/product-slack.jpg",
    alt: "A Slack thread where Ivy answers an investment question and attaches a summary",
    reverse: false,
  },
  {
    title: (
      <>
        She&rsquo;s fully
        <br />
        <em className="acc">custom to your firm</em>.
      </>
    ),
    body: "Ivy is deployed into your firm, your tenant, your tools, your controls. She connects to what you already use, and nothing she learns ever leaves your walls.",
    img: "/img/mocks/product-tools.png",
    alt: "Ivy connected to Gmail, Drive, Slack, Notion, Excel and other tools",
    reverse: true,
  },
];

const PROTOCOLS = [
  {
    img: "/img/mocks/protocol-k1.png",
    alt: "A K-1 collection tracker with a follow-up email drafted by Ivy",
    title: "K-1 tax tracker",
    body: "Chases fund admins for missing K-1s, keeps the tracker current, and escalates what is late.",
  },
  {
    img: "/img/mocks/protocol-briefing.png",
    alt: "A morning briefing email from Ivy",
    title: "Morning briefing",
    body: "Overnight markets, news on your holdings and the day's calendar, one email, in your inbox before coffee. Custom built to your flows.",
  },
  {
    img: "/img/mocks/protocol-triage.png",
    alt: "An inbox triage summary with a draft reply awaiting review",
    title: "Inbox triage",
    body: "Sorts what came in, drafts the routine replies, and routes the three things that actually need you. You just need to approve & send.",
  },
];

const OUTPUTS = [
  { title: "Dashboard", body: "A live board for the family — net worth, liquidity, allocation — refreshed nightly.", img: "/img/mocks/out-dashboard.png" },
  { title: "Tracker", body: "Capital calls, K-1s, deal flow, renewals: every pipeline in one place, always current.", img: "/img/mocks/out-tracker.png" },
  { title: "Report", body: "Quarterly letters and IC memos, cited to source, in the firm's own voice.", img: "/img/mocks/out-report.png" },
  { title: "Decks", body: "Board-ready slides in your template — highlights, financials, presence.", img: "/img/mocks/out-decks.png" },
  { title: "Spreadsheets", body: "Models and reconciliations with the formulas intact, not a pasted table.", img: "/img/mocks/out-spreadsheets.png" },
  { title: "Websites", body: "A private microsite for the next family meeting or a co-invest.", img: "/img/mocks/out-websites.png" },
];

const IVY_SIDE = [
  "Onboarded to your firm, files and philosophy",
  "Takes work end to end — draft, chase, deliver",
  "Works proactively on a standing brief, 24/7",
  "Lives in your inbox, calendar and drive",
  "Your tenant, your controls, no model training",
  "A named deployment lead and a 30-day plan",
];
const SUB_SIDE = [
  "Blank page every session — you carry the context",
  "Answers questions; you still do the work",
  "Waits to be prompted",
  "Copy-paste in, copy-paste out",
  "Shared infrastructure, vendor terms",
  "A help centre",
];

export default function HomePage({ demoOpen = false }: { demoOpen?: boolean }) {
  return (
    <Shell demoOpen={demoOpen}>
      {/* hero */}
      <section className="sec" style={{ paddingBottom: 112 }}>
        <div className="wrap center">
          <img className="ivy-avatar" src="/img/team/head-ivy.jpg" alt="Ivy" width={88} height={88} />
          <h1 className="d1" style={{ marginTop: 28 }}>
            Meet Ivy,
            <br />
            your new{" "}
            <em className="acc">
              <RoleCycler />
            </em>
          </h1>
          <p className="lede measure-sm mx-auto" style={{ marginTop: 26 }}>
            {DESCRIPTION}
          </p>
          <div style={{ marginTop: 40 }}>
            <DemoButton>Request a demo</DemoButton>
          </div>
          <figure className="mock" style={{ marginTop: 80 }}>
            <img src="/img/mocks/product-hero-visual.jpg" alt="Ivy answering a request in Slack" width={2160} height={1240} />
          </figure>
        </div>
      </section>

      {/* senior hire band */}
      <section className="sec sec--dark">
        <div className="wrap center">
          <h2 className="d1" style={{ fontSize: "clamp(34px,4.6vw,64px)" }}>
            Ivy is your new <em className="acc">senior hire</em>.
          </h2>
          <p className="lede measure-sm mx-auto" style={{ marginTop: 22, fontSize: 20 }}>
            She knows your workflows, takes over what you delegate, and works proactively. So you can
            do what you do best.
          </p>
          <div className="stats" style={{ marginTop: 64, textAlign: "left" }}>
            {STATS.map(([n, l]) => (
              <div key={l}>
                <b>{n}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* feature rows */}
      {FEATURES.map((f) => (
        <section className="sec sec--tight" key={f.alt}>
          <div className={`wrap cols cols--mid feature${f.reverse ? " feature--rev" : ""}`}>
            <div className="feature__copy">
              <h2 className="d2">{f.title}</h2>
              <p className="body" style={{ marginTop: 18 }}>{f.body}</p>
            </div>
            <figure className="mock feature__fig">
              <img src={f.img} alt={f.alt} />
            </figure>
          </div>
        </section>
      ))}

      {/* protocols */}
      <section className="sec sec--line">
        <div className="wrap">
          <h2 className="d2">
            She&rsquo;ll work <em className="acc">in your sleep</em>.
          </h2>
          <p className="lede measure-sm" style={{ marginTop: 16 }}>
            Give Ivy a standing brief once. She runs it on schedule, every time, and only wakes you
            when something needs a decision.
          </p>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {PROTOCOLS.map((p) => (
              <article key={p.title}>
                <figure className="mock">
                  <img src={p.img} alt={p.alt} width={680} height={660} />
                </figure>
                <h3 className="d3" style={{ marginTop: 22 }}>{p.title}</h3>
                <p className="small" style={{ marginTop: 8 }}>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* outputs */}
      <section className="sec sec--line">
        <div className="wrap">
          <h2 className="d2">
            She hands you the <em className="acc">finished thing</em>.
          </h2>
          <p className="lede measure-sm" style={{ marginTop: 16 }}>
            Ivy is pro-active and gives you the actual deliverable, in the format you need it in.
          </p>
          <div className="grid-2" style={{ marginTop: 48 }}>
            {OUTPUTS.map((o) => (
              <article className="out" key={o.title}>
                <div className="out__head">
                  <h3 className="d3">{o.title}</h3>
                  <p className="small" style={{ marginTop: 6 }}>{o.body}</p>
                </div>
                <img src={o.img} alt={`${o.title} produced by Ivy`} width={940} height={640} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* approval */}
      <section className="sec sec--line">
        <div className="wrap cols cols--mid">
          <div>
            <h2 className="d2">
              She asks for
              <br />
              <em className="acc">your approval</em>.
            </h2>
            <p className="body" style={{ marginTop: 18 }}>
              Nothing leaves the firm without your sign-off. Ivy prepares, you decide — one tap to
              approve, edit or send it back with a note.
            </p>
          </div>
          <figure className="mock">
            <img src="/img/mocks/product-approval.jpg" alt="A Slack thread where Ivy asks for approval before sending" width={1128} height={828} />
          </figure>
        </div>
      </section>

      {/* hire not subscription */}
      <section className="sec sec--line">
        <div className="wrap">
          <h2 className="d2 center">
            Ivy is <em className="acc">a hire</em>, not a subscription.
          </h2>
          <div className="grid-2 vs" style={{ marginTop: 48 }}>
            <div className="vs__col vs__col--dark">
              <h3 className="d3 acc" style={{ fontStyle: "italic" }}>Ivy</h3>
              <p className="vs__sub">A deployed teammate, custom to your firm</p>
              <ul>
                {IVY_SIDE.map((l) => (
                  <li key={l}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="vs__col">
              <h3 className="d3">An AI subscription</h3>
              <p className="vs__sub">A seat in someone else&rsquo;s chat window</p>
              <ul>
                {SUB_SIDE.map((l) => (
                  <li key={l}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12" /></svg>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Band
        image="/img/photos/band-product.jpg"
        title={
          <>
            Give Ivy your <em className="acc">first task</em>.
            <br />
            Feel the relief.
          </>
        }
      />
    </Shell>
  );
}
