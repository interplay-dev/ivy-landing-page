"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import "../v2.css";

/* ---------------- demo modal context ---------------- */

const DemoCtx = createContext<() => void>(() => {});
export const useDemo = () => useContext(DemoCtx);

type BtnProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
};

export function DemoButton({ children, variant = "primary", className = "" }: BtnProps) {
  const open = useDemo();
  return (
    <button type="button" className={`btn btn--${variant} ${className}`} onClick={open}>
      {children}
    </button>
  );
}

/* The "Yours — built with your team" chip is a call to action, not a label. */
export function DemoChip({ children }: { children: React.ReactNode }) {
  const open = useDemo();
  return (
    <button type="button" className="chip chip--solid chip--action" onClick={open}>
      {children}
    </button>
  );
}

/* ---------------- nav ---------------- */

const LINKS = [
  { href: "/product", label: "Product" },
  { href: "/customers", label: "Customers" },
  { href: "/deployment", label: "Deployment" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
];

function Nav({ active }: { active?: string }) {
  const open = useDemo();
  return (
    <header className="nav">
      <div className="wrap nav__in">
        <Link href="/" className="nav__logo" aria-label="Ivy — home">
          <img src="/img/brand/ivy-lockup-green.png" alt="Ivy" width={57} height={24} />
        </Link>
        <nav className="nav__links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={active === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button type="button" className="btn btn--primary btn--sm" onClick={open}>
          Request a demo
        </button>
      </div>
    </header>
  );
}

/* ---------------- footer ---------------- */

function Footer() {
  const open = useDemo();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <div className="footer__logo">
              <img src="/img/brand/ivy-lockup-bone.png" alt="Ivy" width={61} height={26} />
            </div>
            <p className="footer__tag">
              The AI partner
              <br />
              for <em className="acc">family offices</em>.
            </p>
            <button type="button" className="btn btn--onDark" style={{ marginTop: 30 }} onClick={open}>
              Get in touch
            </button>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <h4>Overview</h4>
              <Link href="/">Ivy</Link>
              <Link href="/product">Product</Link>
              <Link href="/customers">Customers</Link>
              <Link href="/security">Security</Link>
              <Link href="/deployment">Deployment</Link>
            </div>
            <div className="footer__col">
              <h4>Company</h4>
              <Link href="/about">About</Link>
              <a href="mailto:leon@ivy.one">Contact</a>
              <a href="https://www.linkedin.com/company/ivyoneai/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <button type="button" onClick={open}>
                Request demo
              </button>
            </div>
            <div className="footer__col">
              <h4>Legal</h4>
              <Link href="/terms">Terms of use</Link>
              <Link href="/privacy">Privacy policy</Link>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <span className="mono">© 2026 Ivy One LLC · New York</span>
          <a
            className="interplay"
            href="https://www.interplay.vc/"
            target="_blank"
            rel="noreferrer"
            aria-label="An Interplay company — visit interplay.vc"
          >
            <span className="mono">An</span>
            <img src="/img/brand/interplay-white.png" alt="Interplay" width={48} height={13} />
            <span className="mono">company</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- demo modal ---------------- */

const FIRM_TYPES = [
  "Single-family office",
  "Multi-family office",
  "Private equity / venture",
  "Investment adviser",
  "Other",
];
const AUM = ["Under $250M", "$250M – $1B", "$1B – $5B", "Over $5B", "Prefer not to say"];
const SOURCES = ["A colleague or friend", "LinkedIn", "Search", "An event", "Interplay", "Other"];

function DemoModal({ onClose }: { onClose: () => void }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: f.get("firstName"),
          lastName: f.get("lastName"),
          email: f.get("email"),
          company: f.get("company"),
          companyType: f.get("companyType"),
          companySize: f.get("companySize"),
          source: f.get("source"),
        }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div className="modal v2" role="dialog" aria-modal="true" aria-label="Request a demo" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__card">
        <button type="button" className="modal__close" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <div className="modal__form">
          {state === "done" ? (
            <>
              <h2 className="d2">
                Thank you — <em className="acc">we&rsquo;ll be in touch</em>.
              </h2>
              <p className="body" style={{ marginTop: 18 }}>
                One of us will reply within a business day to find a time. If it&rsquo;s urgent, write to{" "}
                <a href="mailto:leon@ivy.one" style={{ color: "var(--ivy-700)", fontWeight: 500 }}>leon@ivy.one</a>.
              </p>
              <button type="button" className="btn btn--secondary" style={{ marginTop: 32 }} onClick={onClose}>
                Close
              </button>
            </>
          ) : (
            <form onSubmit={submit}>
              <h2 className="d2">
                See why leading family
                <br />
                offices <em className="acc">run on Ivy</em>.
              </h2>
              <p className="body" style={{ marginTop: 18, maxWidth: "46ch" }}>
                Ivy is your new favorite employee — built around your workflows, not a generic chat
                window. Book a demo and see it run on your own operating model.
              </p>

              <div style={{ marginTop: 34, display: "grid", gap: 14 }}>
                <div className="row2">
                  <input className="field" name="firstName" placeholder="First name*" required autoComplete="given-name" />
                  <input className="field" name="lastName" placeholder="Last name*" required autoComplete="family-name" />
                </div>
                <input className="field" name="email" type="email" placeholder="Work email*" required autoComplete="email" />
                <input className="field" name="company" placeholder="Firm*" required autoComplete="organization" />
                <div className="row2">
                  <select className="field" name="companyType" required defaultValue="">
                    <option value="" disabled>Firm type*</option>
                    {FIRM_TYPES.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <select className="field" name="companySize" required defaultValue="">
                    <option value="" disabled>Assets under management*</option>
                    {AUM.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <select className="field" name="source" required defaultValue="">
                  <option value="" disabled>How did you hear about us?*</option>
                  {SOURCES.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              <label className="consent" style={{ marginTop: 22 }}>
                <input type="checkbox" required />
                <span>
                  I agree to Ivy&rsquo;s{" "}
                  <Link href="/privacy" style={{ color: "var(--ivy-700)", textDecoration: "underline" }}>Privacy Policy</Link>
                </span>
              </label>

              <button type="submit" className="btn btn--primary" style={{ width: "100%", marginTop: 26 }} disabled={state === "sending"}>
                {state === "sending" ? "Sending…" : "Request demo"}
              </button>

              {state === "error" && (
                <p className="small" style={{ marginTop: 14, color: "var(--down)" }}>
                  That didn&rsquo;t go through. Please email leon@ivy.one and we&rsquo;ll pick it up.
                </p>
              )}

              <p className="mono" style={{ marginTop: 26 }}>
                Trusted by leading family offices &nbsp;·&nbsp; Reply within one business day
              </p>
            </form>
          )}
        </div>

        <figure className="modal__aside">
          <img src="/img/photos/wallst-photo.jpg" alt="The New York Stock Exchange on Wall Street" />
          <figcaption>New York Stock Exchange · 11 Wall Street</figcaption>
        </figure>
      </div>
    </div>
  );
}

/* ---------------- shell ---------------- */

export default function Shell({
  active,
  demoOpen = false,
  children,
}: {
  active?: string;
  demoOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(demoOpen);
  const openModal = useCallback(() => setOpen(true), []);

  return (
    <DemoCtx.Provider value={openModal}>
      <div className="v2">
        <Nav active={active} />
        <main>{children}</main>
        <Footer />
        {open && <DemoModal onClose={() => setOpen(false)} />}
      </div>
    </DemoCtx.Provider>
  );
}

/* ---------------- shared page pieces ---------------- */

export function Band({
  image,
  title,
  sub,
  cta = "Request a demo",
}: {
  image: string;
  title: React.ReactNode;
  sub?: string;
  cta?: string;
}) {
  return (
    <section className="band">
      <img className="band__bg" src={image} alt="" aria-hidden="true" />
      <div className="band__in">
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
        <DemoButton variant="onDark">{cta}</DemoButton>
      </div>
    </section>
  );
}
