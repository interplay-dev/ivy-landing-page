"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./waitlist.module.css";

const WAITLIST_ENDPOINT =
  process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ||
  "https://script.google.com/macros/s/AKfycbwG2Dbj2egJYFpbJ7sfz5Y5_YXt5GaXXsLDrsbXEDbYiorkFkdj8-ExyCQa9iVY4NKZ/exec";

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "ymail.com",
  "rocketmail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "aol.com",
  "aim.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "gmx.us",
  "gmx.de",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "fastmail.com",
  "hey.com",
  "tutanota.com",
  "tuta.io",
  "duck.com",
  "qq.com",
  "163.com",
  "126.com",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Field = "first" | "last" | "email" | "company";
type FormData = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

export default function WaitlistPage() {
  const [data, setData] = useState<FormData>({
    first: "",
    last: "",
    email: "",
    company: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ text: string; ok: boolean }>({
    text: "",
    ok: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const setField = (name: Field, value: string) => {
    setData((d) => ({ ...d, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
    setStatus({ text: "", ok: false });
  };

  const validate = (d: FormData): Errors => {
    const errs: Errors = {};
    if (!d.first.trim()) errs.first = "Required";
    if (!d.last.trim()) errs.last = "Required";
    if (!d.company.trim()) errs.company = "Required";
    if (!d.email.trim()) {
      errs.email = "Required";
    } else if (!EMAIL_RE.test(d.email)) {
      errs.email = "That doesn't look like a valid email.";
    } else {
      const domain = d.email.split("@")[1].toLowerCase();
      if (FREE_EMAIL_DOMAINS.has(domain)) {
        errs.email =
          "Please use your work email — personal addresses aren't accepted.";
      }
    }
    return errs;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed: FormData = {
      first: data.first.trim(),
      last: data.last.trim(),
      email: data.email.trim(),
      company: data.company.trim(),
    };
    const errs = validate(trimmed);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setStatus({ text: "", ok: false });

    if (!WAITLIST_ENDPOINT) {
      setSubmitting(false);
      setStatus({
        text: "Waitlist isn't accepting submissions yet. Please try again shortly.",
        ok: false,
      });
      return;
    }

    try {
      // Apps Script Web Apps don't support custom CORS preflights, so we send
      // as text/plain (a simple request) and parse JSON on the server.
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(trimmed),
      });
      const out = await res
        .json()
        .catch(() => ({ ok: false, error: "Bad server response" }));
      if (!res.ok || !out.ok) {
        const msg =
          (out && out.error) || "Something went wrong. Please try again.";
        if (out && out.field) {
          setErrors((prev) => ({ ...prev, [out.field]: msg }));
        } else {
          setStatus({ text: msg, ok: false });
        }
        setSubmitting(false);
        return;
      }
      // Success
      setDone(true);
      setStatus({ text: "You're in. We'll be in touch.", ok: true });
    } catch {
      setStatus({ text: "Network error. Please try again.", ok: false });
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.body}>
      <header className={styles.nav}>
        <Link className={styles.brand} href="/">
          <span className="leaf" style={{ color: "var(--accent)" }}>
            🌿
          </span>{" "}
          Ivy
        </Link>
        <Link className={styles.backLink} href="/">
          ← Back
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>Join the waitlist</div>
          <h1 style={{ marginTop: 16 }}>Be the first to meet Ivy.</h1>
          <p className="lead" style={{ maxWidth: 600, margin: "0 auto 40px" }}>
            Drop your details. We&apos;ll reach out when your invite is ready.
          </p>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.field}>
              <input
                type="text"
                name="first"
                placeholder="First name"
                autoComplete="given-name"
                value={data.first}
                onChange={(e) => setField("first", e.target.value)}
                disabled={done}
                className={errors.first ? "invalid" : ""}
              />
              <div
                className={`${styles.fieldError} ${
                  errors.first ? styles.fieldErrorShow : ""
                }`}
              >
                {errors.first || ""}
              </div>
            </div>
            <div className={styles.field}>
              <input
                type="text"
                name="last"
                placeholder="Last name"
                autoComplete="family-name"
                value={data.last}
                onChange={(e) => setField("last", e.target.value)}
                disabled={done}
                className={errors.last ? "invalid" : ""}
              />
              <div
                className={`${styles.fieldError} ${
                  errors.last ? styles.fieldErrorShow : ""
                }`}
              >
                {errors.last || ""}
              </div>
            </div>
            <div className={`${styles.field} ${styles.fieldFull}`}>
              <input
                type="email"
                name="email"
                placeholder="Work email"
                autoComplete="email"
                value={data.email}
                onChange={(e) => setField("email", e.target.value)}
                disabled={done}
                className={errors.email ? "invalid" : ""}
              />
              <div
                className={`${styles.fieldError} ${
                  errors.email ? styles.fieldErrorShow : ""
                }`}
              >
                {errors.email || ""}
              </div>
            </div>
            <div className={`${styles.field} ${styles.fieldFull}`}>
              <input
                type="text"
                name="company"
                placeholder="Company"
                autoComplete="organization"
                value={data.company}
                onChange={(e) => setField("company", e.target.value)}
                disabled={done}
                className={errors.company ? "invalid" : ""}
              />
              <div
                className={`${styles.fieldError} ${
                  errors.company ? styles.fieldErrorShow : ""
                }`}
              >
                {errors.company || ""}
              </div>
            </div>
            <div className={styles.submitRow}>
              <button type="submit" disabled={submitting || done}>
                {done
                  ? "✓ On the list"
                  : submitting
                  ? "Sending…"
                  : "Get on the list"}
              </button>
            </div>
          </form>
          <div
            className={`${styles.status} ${status.ok ? styles.statusOk : ""}`}
          >
            {status.text}
          </div>
          <div className={styles.note}>
            We&apos;ll never share your details. One thoughtful email when
            we&apos;re ready for you.
          </div>
        </div>
      </main>

      <footer className={styles.footer}>An Interplay platform product.</footer>
    </div>
  );
}
