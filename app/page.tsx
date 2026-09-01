import Link from "next/link";
import DemoModal from "./demo-modal";
import Effects from "./effects";
import Leaf from "./leaf";
import PhoneMockup from "./phone-mockup";

export default function Home({ demoOpen = false }: { demoOpen?: boolean }) {
  return (
    <>
      <Effects />
      <DemoModal initialOpen={demoOpen} />

      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <mask id="ivyLeafMask" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
            <path
              fill="#fff"
              d="M48.5 11.5 C51.5 26.5 45.5 40.5 34 46 C22 51.8 9 45.5 8.5 34.5 C8 23.5 17.5 15.5 30 14 C36.5 13.2 41.5 17 48.5 11.5 Z"
            />
            <path
              stroke="#000"
              strokeWidth="4.2"
              fill="none"
              strokeLinecap="round"
              d="M11 41 C19 43 28 38 36 29"
            />
          </mask>
          <g id="ivyLeaf">
            <path
              fill="currentColor"
              mask="url(#ivyLeafMask)"
              d="M48.5 11.5 C51.5 26.5 45.5 40.5 34 46 C22 51.8 9 45.5 8.5 34.5 C8 23.5 17.5 15.5 30 14 C36.5 13.2 41.5 17 48.5 11.5 Z"
            />
            <path
              d="M3.5 56 C6.5 51 8.5 45.5 11 41"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </defs>
      </svg>

      {/* ============ NAV ============ */}
      <header className="nav" id="nav">
        <div className="container nav__row">
          <a className="lockup" href="#top" aria-label="Ivy home">
            <Leaf size={26} />
            <span className="lockup__word">Ivy</span>
          </a>
          <div className="nav__actions">
            <a className="btn btn--primary" href="/demo" data-demo>Request a demo</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="container hero__row">
            <div className="hero__copy reveal">
              <p className="eyebrow">The AI operator for family offices</p>
              <h1 className="hero__h1">
                Meet Ivy.<br />
                <span className="muted">Your new AI hire.</span>
              </h1>
              <p className="hero__sub">
                Ivy is your firm’s new team member — one hire that does the work of three to five,
                at a fraction of the payroll. She runs on your protocols, in your tools, and
                reports every step.
              </p>
              <div className="hero__ctas">
                <a className="btn btn--primary btn--pill btn--xl" href="/demo" data-demo>Request a demo</a>
              </div>
            </div>

            {/* Device cluster */}
            <div className="cluster-wrap reveal">
              <div className="cluster">
                {/* Laptop */}
                <div className="laptop">
                  <div className="laptop__lid">
                    <div className="laptop__screen">
                      <div className="scale scale--laptop">
                        <div className="dash">
                          <div className="dash__topbar">
                            <Leaf size={16} />
                            <span className="dash__brand">Ivy</span>
                            <nav className="dash__tabs">
                              <span className="is-active">Today</span>
                              <span>Runs</span>
                              <span>Approvals</span>
                              <span>Vault</span>
                              <span>Protocols</span>
                            </nav>
                            <span className="dash__search">Search the vault…</span>
                            <span className="dash__avatar">C</span>
                          </div>
                          <div className="dash__body">
                            <div className="dash__main">
                              <div className="dash__kpis">
                                <div className="kpi">
                                  <span className="kpi__label">AUM tracked</span>
                                  <span className="kpi__value">$2.48B</span>
                                </div>
                                <div className="kpi">
                                  <span className="kpi__label">Runs today</span>
                                  <span className="kpi__value">47</span>
                                </div>
                                <div className="kpi">
                                  <span className="kpi__label">Hours saved · wk</span>
                                  <span className="kpi__value">31.5</span>
                                </div>
                              </div>
                              <p className="dash__section-title">Active runs</p>
                              <table className="runs">
                                <thead>
                                  <tr><th>Protocol</th><th>Role</th><th>Status</th><th className="t-right">Time</th></tr>
                                </thead>
                                <tbody>
                                  <tr><td>Quarterly LP letter</td><td>IR</td><td><span className="badge badge--live">Live</span></td><td className="t-right mono">09:41</td></tr>
                                  <tr><td>Bank-feed reconcile</td><td>Controller</td><td><span className="badge badge--live">Live</span></td><td className="t-right mono">09:38</td></tr>
                                  <tr><td>Deal-flow screen</td><td>Analyst</td><td><span className="badge badge--neutral">Queued</span></td><td className="t-right mono">09:30</td></tr>
                                  <tr><td>Board-pack assembly</td><td>Chief of Staff</td><td><span className="badge badge--neutral">Done</span></td><td className="t-right mono">08:52</td></tr>
                                  <tr><td>Manager scorecards</td><td>Analyst</td><td><span className="badge badge--warn">Review</span></td><td className="t-right mono">08:17</td></tr>
                                </tbody>
                              </table>
                              <span className="dash__viewall">View all 47 runs →</span>
                            </div>
                            <aside className="approvals">
                              <p className="approvals__head">Approvals <span className="approvals__count">3</span></p>
                              <div className="approvals__item">
                                <b>Q3 distribution memo</b>
                                <span>$1.2M across 4 entities</span>
                                <div className="approvals__btns">
                                  <span className="mini-btn">Approve</span>
                                  <span className="mini-link">Open</span>
                                </div>
                              </div>
                              <div className="approvals__item"><b>Wire — Meridian Capital</b><span>Awaiting second signer</span></div>
                              <div className="approvals__item"><b>LP letter — final draft</b><span>12 recipients</span></div>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="laptop__base"><span className="laptop__notch" /></div>
                </div>

                {/* iPad */}
                <div className="ipad">
                  <div className="ipad__screen">
                    <div className="scale scale--ipad">
                      <div className="pad-ui">
                        <div className="pad-ui__status"><b>9:41</b><span>Today</span></div>
                        <div className="pad-ui__bar">
                          <Leaf size={15} />
                          <span className="pad-ui__brand">Ivy</span>
                        </div>
                        <div className="pad-ui__kpis">
                          <div className="kpi-card">
                            <span className="kpi__label">AUM tracked</span>
                            <span className="kpi-card__value">$2.48B</span>
                          </div>
                          <div className="kpi-card">
                            <span className="kpi__label">Runs today</span>
                            <span className="kpi-card__value">47</span>
                          </div>
                        </div>
                        <p className="pad-ui__title">Active runs</p>
                        <ul className="pad-runs">
                          <li><i className="dot dot--live" />Quarterly LP letter<span className="mono">09:41</span></li>
                          <li><i className="dot dot--live" />Bank-feed reconcile<span className="mono">09:38</span></li>
                          <li><i className="dot dot--idle" />Deal-flow screen<span className="mono">09:30</span></li>
                          <li><i className="dot dot--warn" />Manager scorecards<span className="mono">08:17</span></li>
                        </ul>
                        <div className="pad-chart">
                          <div className="pad-chart__head">
                            <span className="kpi__label">Hours saved this week</span>
                            <b>31.5</b>
                          </div>
                          <div className="pad-chart__bars">
                            <i style={{ height: 16, background: "#B6D9C7" }} />
                            <i style={{ height: 22, background: "#B6D9C7" }} />
                            <i style={{ height: 18, background: "#83BFA4" }} />
                            <i style={{ height: 27, background: "#83BFA4" }} />
                            <i style={{ height: 24, background: "#4E9F7E" }} />
                            <i style={{ height: 33, background: "#2C8462" }} />
                            <i style={{ height: 40, background: "#1B6A4D" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <PhoneMockup />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="container stats reveal">
            <div className="stats__row">
              <div className="stat"><b>3–6</b><span>Roles absorbed by Ivy</span></div>
              <div className="stat"><b>7</b><span>Days from kickoff to live</span></div>
              <div className="stat"><b>10–20×</b><span>Return on the payroll she replaces</span></div>
              <div className="stat"><b>40+</b><span>Workstreams ready on day one</span></div>
            </div>
          </div>
        </section>

        {/* ============ PROBLEM ============ */}
        <section className="band" id="problem">
          <div className="container">
            <p className="eyebrow eyebrow--ondark reveal">The problem</p>
            <div className="problem__cols">
              <div className="reveal">
                <h2 className="h2 h2--ondark">
                  Time is valuable<br />
                  <span className="h2__muted">Don’t spend it on<br />non-partner work.</span>
                </h2>
                <p className="problem__lede">
                  Family offices run in a hiring dead zone: more work than the team can carry, but
                  too lumpy, too varied, and too senior to hire for. So the principal does it — at
                  midnight.
                </p>
              </div>
              <ol className="pains">
                <li className="reveal">
                  <span className="pains__num">01</span>
                  <div>
                    <b>The AI you already bought has no memory of you</b>
                    <p>Copilot, ChatGPT Enterprise, a generative-AI pilot — nothing returned to the P&L. The diagnosed cause, every time: context that never sticks.</p>
                  </div>
                </li>
                <li className="reveal">
                  <span className="pains__num">02</span>
                  <div>
                    <b>AI spend is scattered across seats and token bills</b>
                    <p>Eleven subscriptions, no owner, nothing compounding. Every tool starts from zero again on Monday morning.</p>
                  </div>
                </li>
                <li className="reveal">
                  <span className="pains__num">03</span>
                  <div>
                    <b>The firm’s memory lives in inboxes and in people’s heads</b>
                    <p>Why the family passed on that manager in 2018. How the trust is structured. Which broker to call in Zurich. When people leave, it leaves with them.</p>
                  </div>
                </li>
                <li className="reveal">
                  <span className="pains__num">04</span>
                  <div>
                    <b>You want to be AI-native — and nobody will own it</b>
                    <p>A ten-person office has no CTO to run AI as a platform, and no appetite for a pilot that dies in month two.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ============ ROLES ============ */}
        <section className="section" id="roles">
          <div className="container">
            <p className="eyebrow reveal">One hire, six seats</p>
            <h2 className="h2 reveal">
              One teammate.<br />
              <span className="h2__muted">Six roles on the org chart.</span>
            </h2>
            <p className="lede reveal">
              Ivy doesn’t sit in one seat. She moves across the org chart as the work demands —
              every role running on your firm’s protocols, with an audit trail behind every task.
            </p>
            <div className="roles-grid">
              <article className="role-card reveal"><span className="role-card__num">01</span><h3>Chief of Staff</h3><p>Runs the principal’s week. Agendas, follow-ups, and the decision memos that never got written.</p></article>
              <article className="role-card reveal"><span className="role-card__num">02</span><h3>Controller</h3><p>Chases the bank feeds, reconciles the books, preps approvals, and flags the expense nobody can explain.</p></article>
              <article className="role-card reveal"><span className="role-card__num">03</span><h3>Analyst</h3><p>Screens deal flow, builds the one-pagers, and has the numbers ready before Monday’s meeting.</p></article>
              <article className="role-card reveal"><span className="role-card__num">04</span><h3>Investor Relations</h3><p>Drafts the quarterly letters, answers every data request, and keeps each LP conversation warm.</p></article>
              <article className="role-card reveal"><span className="role-card__num">05</span><h3>Engineer</h3><p>Wires up new data sources, keeps the integrations healthy, and automates what she did yesterday.</p></article>
              <article className="role-card reveal"><span className="role-card__num">06</span><h3>Executive Assistant</h3><p>Inbox triage, scheduling, travel — the thousand small threads that used to eat the day.</p></article>
            </div>
          </div>
        </section>

        {/* ============ QUOTE ============ */}
        <section className="quote">
          <div className="container quote__inner reveal">
            <Leaf size={38} />
            <blockquote>
              “Since we started working with Ivy she has taken over the work of six full-time
              roles. We are ten times more productive — and more effective.”
            </blockquote>
            <cite>Christian — Partner, Ascend Family Office</cite>
          </div>
        </section>

        {/* ============ PROTOCOLS ============ */}
        <section className="section" id="protocols">
          <div className="container">
            <p className="eyebrow reveal">Protocol library</p>
            <h2 className="h2 reveal">
              Set up 100+ tasks in seconds.<br />
              <span className="h2__muted">Built custom to your firm.</span>
            </h2>
            <p className="lede reveal">
              Battle-tested across IR, sourcing, deals, marketing, and operations. Pick the ones
              that match your firm — we build the rest with you.
            </p>
            <div className="chips reveal">
              {[
                "Quarterly LP letter", "Deal-flow screen", "Bank-feed reconcile", "IC memo draft",
                "Inbox triage", "Capital-call notices", "Meeting debriefs", "One-pager builder",
                "Expense flags", "Data-room requests", "Manager scorecards", "Cash-position digest",
                "Board-pack assembly", "Diligence tracker", "Invoice approval prep", "News monitoring",
                "Term-sheet compare", "Travel & scheduling", "Distribution memos", "LP onboarding pack",
                "Vendor renewals", "K-1 chase", "Portfolio flash report",
              ].map((chip) => (
                <span className="chip" key={chip}>{chip}</span>
              ))}
              <span className="chip chip--accent">+ Yours — built with you</span>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON ============ */}
        <section className="section section--bone" id="difference">
          <div className="container">
            <p className="eyebrow reveal">The difference</p>
            <h2 className="h2 reveal">
              A true company brain.<br />
              <span className="h2__muted">Not just a chatbot.</span>
            </h2>
            <p className="lede reveal">
              Ivy runs on the world’s best models — then adds what a real hire needs: memory,
              identity, and a place on your channels.
            </p>
            <div className="compare-scroll reveal">
              <div className="compare" role="table" aria-label="Claude Desktop compared with Ivy">
                <div className="compare__row compare__row--head" role="row">
                  <span role="columnheader" />
                  <span className="compare__col-claude" role="columnheader">Claude Desktop</span>
                  <span className="compare__col-ivy compare__ivy-head" role="columnheader"><Leaf size={18} /> Ivy</span>
                </div>
                <div className="compare__row" role="row">
                  <span className="compare__label" role="rowheader">Memory & context</span>
                  <span className="compare__col-claude" role="cell"><i className="glyph glyph--no">✕</i>Single-thread context. Forgets your firm between sessions.</span>
                  <span className="compare__col-ivy" role="cell"><i className="glyph glyph--yes">✓</i>Four-layer memory model — full firm context, always retained.</span>
                </div>
                <div className="compare__row" role="row">
                  <span className="compare__label" role="rowheader">Identity & access</span>
                  <span className="compare__col-claude" role="cell"><i className="glyph glyph--no">✕</i>One personal login. No roles, no oversight.</span>
                  <span className="compare__col-ivy" role="cell"><i className="glyph glyph--yes">✓</i>Firm-wide identity with approval levels set at setup.</span>
                </div>
                <div className="compare__row" role="row">
                  <span className="compare__label" role="rowheader">Availability</span>
                  <span className="compare__col-claude" role="cell"><i className="glyph glyph--no">✕</i>Runs only while the app window is open.</span>
                  <span className="compare__col-ivy" role="cell"><i className="glyph glyph--yes">✓</i>Always on — keeps working while your laptop sleeps.</span>
                </div>
                <div className="compare__row" role="row">
                  <span className="compare__label" role="rowheader">Where she lives</span>
                  <span className="compare__col-claude" role="cell"><i className="glyph glyph--no">✕</i>A desktop chat window.</span>
                  <span className="compare__col-ivy" role="cell"><i className="glyph glyph--yes">✓</i>Slack, Telegram, WhatsApp, iMessage, and email.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TIMELINE ============ */}
        <section className="section" id="onboarding">
          <div className="container">
            <p className="eyebrow reveal">Onboarding</p>
            <h2 className="h2 reveal">
              Live in two weeks.<br />
              <span className="h2__muted">Tailored to your firm.</span>
            </h2>
            <p className="lede reveal">
              No engineers on your side, no change program. One operator from our team, a
              fortnight, and a teammate who already knows the firm.
            </p>
            <ol className="timeline">
              <li className="tl-step reveal">
                <span className="tl-step__dot">1</span>
                <span className="tl-step__days">Days 1–3</span>
                <h3>Vault build</h3>
                <p>We build the vault: identity files for your people, entities, projects, and CRM. Ivy starts by knowing your world.</p>
              </li>
              <li className="tl-step reveal">
                <span className="tl-step__dot">2</span>
                <span className="tl-step__days">Days 4–8</span>
                <h3>Protocol intake</h3>
                <p>You pick from the 40+ library. We calibrate each protocol to your voice and your firm’s way of working.</p>
              </li>
              <li className="tl-step reveal">
                <span className="tl-step__dot">3</span>
                <span className="tl-step__days">Days 8–11</span>
                <h3>Channel auth</h3>
                <p>Gmail, calendar, Slack, Telegram, CRM — every connection logged, permission-scoped, and fully reversible.</p>
              </li>
              <li className="tl-step reveal">
                <span className="tl-step__dot">4</span>
                <span className="tl-step__days">Days 12–14</span>
                <h3>Calibration & go-live</h3>
                <p>A senior operator runs the first live protocols beside you. By day fourteen, Ivy ships on her own.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ============ CTA + FOOTER ============ */}
        <section className="band band--footer">
          <div className="container">
            <div className="cta reveal">
              <h2 className="cta__h2">Go further with Ivy.</h2>
              <p className="cta__sub">Help your firm go 10x — without adding headcount.</p>
              <a className="btn btn--ondark btn--pill btn--xl" href="/demo" data-demo>Request a demo</a>
            </div>
            <hr className="footer__divider" />
            <footer className="footer">
              <div className="footer__cols">
                <div className="footer__brand">
                  <a className="lockup" href="#top" aria-label="Ivy home">
                    <Leaf size={26} />
                    <span className="lockup__word lockup__word--ondark">Ivy</span>
                  </a>
                  <p>The AI operator for family offices,<br />private equity, and investment funds.</p>
                  <span className="footer__site">IVY.ONE</span>
                </div>
                <div className="footer__group">
                  <p className="footer__head">Legal</p>
                  <Link href="/privacy">Privacy</Link>
                  <Link href="/terms">Terms</Link>
                </div>
                <div className="footer__group">
                  <p className="footer__head">Get in touch</p>
                  <a href="mailto:leon@ivy.one">Contact us</a>
                  <a href="/demo" data-demo>Request a demo</a>
                  <a href="https://www.linkedin.com/company/interplayecosystem/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
              <div className="footer__legal">
                <span>© 2026 Ivy One, LLC. All rights reserved.</span>
                <span className="footer__interplay">An Interplay company</span>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
