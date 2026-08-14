"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./home.module.css";

export default function HomePage() {
  const navRef = useRef<HTMLElement | null>(null);
  const shapeARef = useRef<HTMLDivElement | null>(null);
  const shapeBRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Sticky nav scrolled state + subtle parallax on hero shapes
    const onScroll = () => {
      const y = window.scrollY;
      if (navRef.current) {
        if (y > 40) navRef.current.classList.add(styles.navScrolled);
        else navRef.current.classList.remove(styles.navScrolled);
      }
      if (shapeARef.current)
        shapeARef.current.style.transform = `translateY(${y * 0.25}px)`;
      if (shapeBRef.current)
        shapeBRef.current.style.transform = `translateY(${y * -0.15}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll-triggered reveals
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.revealIn);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(`.${styles.reveal}`).forEach((el) => {
      if (!el.classList.contains(styles.revealIn)) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <header className={styles.nav} ref={navRef}>
        <div className={styles.brand}>
          <span className="leaf" style={{ color: "var(--accent)" }}>
            🌿
          </span>{" "}
          Ivy
        </div>
        <div className={styles.navLinks}>
          <Link href="/waitlist">Join the waitlist</Link>
          <a href="#what">What she does</a>
          <a href="#how">How she lands</a>
        </div>
        <Link className={styles.navCta} href="/waitlist">
          Join the waitlist
        </Link>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div
          className={`${styles.floatShape} ${styles.floatShapeA}`}
          ref={shapeARef}
        />
        <div
          className={`${styles.floatShape} ${styles.floatShapeB}`}
          ref={shapeBRef}
        />
        <div className={styles.heroInner}>
          <div className={`${styles.eyebrow} ${styles.reveal} ${styles.revealIn}`}>
            🌿 Ivy
          </div>
          <h1
            className={`${styles.reveal} ${styles.revealIn} ${styles.d1}`}
            style={{ marginTop: 24 }}
          >
            A senior teammate. <em>Always on.</em>
          </h1>
          <p
            className={`${styles.heroLead} ${styles.reveal} ${styles.revealIn} ${styles.d2}`}
            style={{ marginTop: 28 }}
          >
            Built for decision-dense firms that need a partner-grade operator
            without a partner-cost headcount.
          </p>
          <div
            className={`${styles.actions} ${styles.reveal} ${styles.revealIn} ${styles.d3}`}
            style={{ marginTop: 40 }}
          >
            <a className={`${styles.btn} ${styles.btnInk}`} href="#what">
              Learn more →
            </a>
          </div>
        </div>
        <div className={styles.scrollCue}>
          <span>Scroll</span>
          <span className="line" />
        </div>
      </section>

      {/* BUILT-FOR STRIP */}
      <div className={styles.forStrip}>
        <div className={styles.forStripInner}>
          <div className={`${styles.forStripLabel} ${styles.reveal}`}>
            Built for
          </div>
          <div
            className={`${styles.forStripItems} ${styles.reveal} ${styles.d1}`}
          >
            <span>Venture capital</span>
            <span>Private equity</span>
            <span>Family offices</span>
            <span>Boutique investment banks</span>
            <span>Professional-services partnerships</span>
          </div>
        </div>
      </div>

      {/* WHAT IVY DOES */}
      <section className={styles.scene} id="what">
        <div className={styles.statement}>
          <div className={`${styles.eyebrow} ${styles.reveal}`}>
            What Ivy does
          </div>
          <h2
            className={`${styles.reveal} ${styles.d1}`}
            style={{ marginTop: 24 }}
          >
            A partner-grade operator who <em>actually shows up.</em>
          </h2>
          <p className={`${styles.reveal} ${styles.d2}`}>
            Custom-fitted to your firm. Lives in your inbox, your calendar,
            your vault, your chat — under partner control. Runs the work no one
            has time to own.
          </p>
        </div>

        <div className={styles.threeUp}>
          <div className={styles.reveal}>
            <span className="num" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 18, display: "block" }}>01</span>
            <h3>She remembers.</h3>
            <p>
              Every decision, every commitment, every person. A persistent
              vault that learns your firm&apos;s people, projects, and
              protocols. She won&apos;t ask the same question twice.
            </p>
          </div>
          <div className={`${styles.reveal} ${styles.d1}`}>
            <span className="num" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 18, display: "block" }}>02</span>
            <h3>She runs the recurring.</h3>
            <p>
              IR digests. Sourcing sweeps. Talent screens. Marketing pipelines.
              Weekly ops. The workstreams that quietly compound when no
              one&apos;s watching.
            </p>
          </div>
          <div className={`${styles.reveal} ${styles.d2}`}>
            <span className="num" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.15em", marginBottom: 18, display: "block" }}>03</span>
            <h3>She holds the bar.</h3>
            <p>
              Partner-grade judgment. Principal-only direction. Voice and
              values calibrated to how your firm operates — not a generic
              chatbot voice.
            </p>
          </div>
        </div>
      </section>

      {/* THE GAP */}
      <section className={`${styles.full} ${styles.fullAlt}`}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className={styles.statement}>
            <div className={`${styles.eyebrow} ${styles.reveal}`}>The gap</div>
            <h2
              className={`${styles.reveal} ${styles.d1}`}
              style={{ marginTop: 24 }}
            >
              Between a $50 chatbot and a <em>$60k chief of staff.</em>
            </h2>
            <p className={`${styles.reveal} ${styles.d2}`}>
              Today&apos;s market gives you either commodity SaaS bots with no
              firm-specific memory — or a human VA at full-time-employee cost.
              Neither serves a partner running a decision-dense firm.
            </p>
          </div>

          <div className={styles.gapGrid}>
            <div className={`${styles.gapCol} ${styles.reveal}`}>
              <div className={styles.gapTag}>On one side</div>
              <h3>Horizontal SaaS bots</h3>
              <div className={styles.gapPriceLine}>$25–100 / month</div>
              <p>
                Generic &quot;AI employee&quot; tools. No firm-specific memory.
                No protocol library. No partner-grade judgment. They forget you
                the moment the session ends.
              </p>
            </div>
            <div
              className={`${styles.gapCol} ${styles.gapColMiddle} ${styles.reveal} ${styles.d1}`}
            >
              <div className={styles.gapTag}>Ivy</div>
              <h3>A custom-fitted teammate</h3>
              <div className={styles.gapPriceLine}>
                You pay for outcomes — not seats
              </div>
              <p>
                Persistent memory of your firm. A 25-protocol library
                calibrated to how you work. White-glove implementation.
                Partner-grade judgment. Six months of proof, running live.
              </p>
            </div>
            <div className={`${styles.gapCol} ${styles.reveal} ${styles.d2}`}>
              <div className={styles.gapTag}>On the other</div>
              <h3>Human virtual assistants</h3>
              <div className={styles.gapPriceLine}>$36k–$67k / year</div>
              <p>
                Dedicated humans at full-time-employee cost. Slow to spin up.
                Hard to scale. Limited to one inbox and one timezone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SHE LANDS */}
      <section className={styles.landSection} id="how">
        <div className={`${styles.eyebrow} ${styles.reveal}`}>How she lands</div>
        <h2
          className={`${styles.reveal} ${styles.d1}`}
          style={{ marginTop: 24, maxWidth: 760 }}
        >
          Two weeks from intake to live.
        </h2>
        <p
          className={`${styles.reveal} ${styles.d2}`}
          style={{ fontSize: 19, maxWidth: 620 }}
        >
          A productized onboarding pipeline. We do the work; you approve the
          work.
        </p>

        <div className={styles.landGrid}>
          {[
            {
              day: "Days 1–3",
              h: "Vault build",
              p: "We scaffold the vault, identity files, and your firm's people, projects, and CRM. Ivy starts knowing your world.",
              d: "",
            },
            {
              day: "Days 4–7",
              h: "Protocol intake",
              p: "You pick from a 25-protocol library — IR, sourcing, talent, marketing, ops. We calibrate each one to your voice and your bar.",
              d: styles.d1,
            },
            {
              day: "Days 8–11",
              h: "Channel auth",
              p: "Gmail. Calendar. Slack. Telegram. CRM. Audit-logged, partner-scoped, fully reversible. Ivy lives in your stack.",
              d: styles.d2,
            },
            {
              day: "Days 12–14",
              h: "Calibration & go-live",
              p: "A senior operator runs the first 90 days alongside you. Ivy ships work; you adjust the bar. By week two she's earning her keep.",
              d: styles.d3,
            },
          ].map((s) => (
            <div
              key={s.day}
              className={`${styles.landStep} ${styles.reveal} ${s.d}`}
            >
              <div className="dot" />
              <div className="day">{s.day}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROTOCOL LIBRARY */}
      <section className={styles.libSection}>
        <div className={`${styles.eyebrow} ${styles.reveal}`}>
          The protocol library
        </div>
        <h2
          className={`${styles.reveal} ${styles.d1}`}
          style={{ marginTop: 24 }}
        >
          25+ workstreams Ivy already knows how to run.
        </h2>
        <p
          className={`${styles.reveal} ${styles.d2}`}
          style={{ fontSize: 19, maxWidth: 640, marginTop: 16 }}
        >
          Battle-tested inside Interplay across IR, sourcing, talent,
          marketing, and operations. Pick the ones that match your firm — we
          customize the rest.
        </p>

        <div className={styles.libTags}>
          {[
            ["IR Intelligence", ""],
            ["Engage Tracker", ""],
            ["Fundraise", ""],
            ["VC Sourcing", styles.d1],
            ["Talent Hiring", styles.d1],
            ["This Week @", styles.d1],
            ["Inbox Triage", styles.d2],
            ["Calendar Brief", styles.d2],
            ["Board Prep", styles.d2],
            ["Investor Updates", styles.d2],
            ["LP CRM Enrichment", styles.d3],
            ["Corp Dev Outreach", styles.d3],
            ["Newsletter Pipeline", styles.d3],
            ["Auto-Draft Social", styles.d3],
            ["Pipeline Hygiene", styles.d4],
            ["Meeting Memory", styles.d4],
            ["Office Operations", styles.d4],
            ["Weekly Digest", styles.d4],
            ["Quarterly Review Prep", styles.d5],
            ["Conference Tracking", styles.d5],
            ["+ custom protocols", styles.d5],
          ].map(([label, d]) => (
            <div
              key={label}
              className={`${styles.libTag} ${styles.reveal} ${d}`}
            >
              {label}
            </div>
          ))}
        </div>

        <p className={`${styles.libFoot} ${styles.reveal}`}>
          Each customer customizes a subset. We build the rest with you.
        </p>
      </section>

      {/* PULL QUOTE */}
      <section className={styles.scene}>
        <div className={styles.pullQuote}>
          <span className={`mark ${styles.reveal}`}>&ldquo;</span>
          <blockquote className={`${styles.reveal} ${styles.d1}`}>
            Six months in production at Interplay. Thirteen live workstreams.
            The model isn&apos;t a thesis. It&apos;s a <em>track record.</em>
          </blockquote>
          <cite className={`${styles.reveal} ${styles.d2}`}>
            — Built and proven inside Interplay
          </cite>
        </div>
      </section>

      {/* CLOSING */}
      <section className={styles.closing}>
        <div className={`${styles.eyebrow} ${styles.reveal}`}>
          The invitation
        </div>
        <h2
          className={`${styles.reveal} ${styles.d1}`}
          style={{ marginTop: 24, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}
        >
          Pick one workstream you keep putting off.
          <br />
          <em>Let Ivy take it.</em>
        </h2>
        <p
          className={`${styles.reveal} ${styles.d2}`}
          style={{ maxWidth: 560, margin: "0 auto", fontSize: 18 }}
        >
          Two weeks to live. White-glove implementation. Partner-grade judgment
          from day one.
        </p>
        <Link
          href="/waitlist"
          className={`${styles.btn} ${styles.btnInk} ${styles.reveal} ${styles.d3}`}
          style={{ marginTop: 40 }}
        >
          Join the Waitlist
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.brand}>
          <span style={{ color: "var(--accent)" }}>🌿</span> Ivy
        </div>
        <div className="links" style={{ display: "flex", gap: 28 }}>
          <Link href="/waitlist">Join the waitlist</Link>
          <a href="#what">What she does</a>
          <a href="#how">How she lands</a>
        </div>
        <div>An Interplay platform product.</div>
      </footer>
    </>
  );
}
