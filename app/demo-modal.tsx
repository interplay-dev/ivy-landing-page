"use client";

import { useCallback, useEffect, useState } from "react";
import Leaf from "./leaf";
import PhoneMockup from "./phone-mockup";

const COMPANY_TYPES = [
  "Family office",
  "Private equity",
  "Venture capital",
  "Hedge fund",
  "Investment bank / advisory",
  "Other",
];
const COMPANY_SIZES = ["1–10", "11–50", "51–200", "200+"];
const SOURCES = ["Referral", "LinkedIn", "Search", "Event", "Press", "Other"];

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  companyType: "",
  companySize: "",
  source: "",
};

// Demo-request dialog. Opens from any element carrying [data-demo], from the
// /demo route (initialOpen), or a #demo hash. Email + HubSpot fire only on a
// valid submit — never on open.
export default function DemoModal({ initialOpen = false }: { initialOpen?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  const [done, setDone] = useState(false);
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    if (window.location.hash === "#demo") setOpen(true);
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as Element | null)?.closest?.("[data-demo]");
      if (!trigger) return;
      e.preventDefault();
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const set = useCallback(
    (key: keyof typeof EMPTY) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value })),
    []
  );

  const valid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.company.trim() &&
    form.companyType &&
    form.companySize &&
    form.source &&
    agree;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    // Server side: emails the request to leon@ivy.one and creates the
    // HubSpot contact + deal. Fire-and-forget so the UI confirms instantly.
    void fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {});
    setDone(true);
  };

  const close = () => {
    setOpen(false);
    // Leaving the deep-linked /demo view returns the URL to the landing page.
    if (window.location.pathname === "/demo") {
      window.history.replaceState(null, "", "/");
    }
    if (done) {
      setDone(false);
      setForm(EMPTY);
      setAgree(false);
    }
  };

  if (!open) return null;

  return (
    <div className="dm-overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="dm" role="dialog" aria-modal="true" aria-label="Request a demo">
        <div className="dm__left">
          <div className="lockup">
            <Leaf size={24} />
            <span className="lockup__word">Ivy</span>
          </div>
          {done ? (
            <div className="dm__success">
              <h2 className="dm__title">Thank you.</h2>
              <p className="dm__sub">We’ll be in touch shortly to schedule a call.</p>
              <button className="btn btn--primary btn--lg" type="button" onClick={close}>
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="dm__title">See Ivy in action.</h2>
              <p className="dm__sub">
                Schedule a 30 minute demo with one of our AI consultants to see how Ivy can
                benefit your firm.
              </p>
              <form className="dm__form" onSubmit={submit} noValidate>
                <div className="dm__grid">
                  <input className="inp" placeholder="First name*" aria-label="First name" value={form.firstName} onChange={set("firstName")} required />
                  <input className="inp" placeholder="Last name*" aria-label="Last name" value={form.lastName} onChange={set("lastName")} required />
                </div>
                <input className="inp" type="email" placeholder="Work email*" aria-label="Work email" value={form.email} onChange={set("email")} required />
                <input className="inp" placeholder="Company*" aria-label="Company" value={form.company} onChange={set("company")} required />
                <div className="dm__grid">
                  <select className="inp dm__select" aria-label="Company type" value={form.companyType} onChange={set("companyType")} required>
                    <option value="" disabled>Company type*</option>
                    {COMPANY_TYPES.map((o) => (<option key={o} value={o}>{o}</option>))}
                  </select>
                  <select className="inp dm__select" aria-label="Company size" value={form.companySize} onChange={set("companySize")} required>
                    <option value="" disabled>Company size*</option>
                    {COMPANY_SIZES.map((o) => (<option key={o} value={o}>{o}</option>))}
                  </select>
                </div>
                <select className="inp dm__select" aria-label="How did you hear about us" value={form.source} onChange={set("source")} required>
                  <option value="" disabled>How did you hear about us?*</option>
                  {SOURCES.map((o) => (<option key={o} value={o}>{o}</option>))}
                </select>
                <label className="dm__agree">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                  <span>
                    I agree to Ivy’s <a href="/privacy" target="_blank">Privacy Policy</a>
                  </span>
                </label>
                <button className="btn btn--primary btn--lg dm__submit" type="submit" disabled={!valid}>
                  Request demo
                </button>
              </form>
            </>
          )}
        </div>
        <div className="dm__right">
          <button className="dm__close" type="button" aria-label="Close" onClick={close}>✕</button>
          <div className="dm__phone">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </div>
  );
}
