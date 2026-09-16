import type { Metadata } from "next";
import Shell, { Band, DemoButton } from "../v2/shell";
import { IconAudit, IconDatabase, IconFocus, IconKey, IconLock, IconShield } from "../v2/icons";

export const metadata: Metadata = {
  title: "Security — Ivy",
  description:
    "Ivy secures your data, your models and your firm's knowledge — with the controls, audits and posture you can hand straight to counsel.",
};

const PILLARS = [
  {
    icon: <IconLock />,
    title: "No training on your data",
    body: "Your documents, prompts and outputs never train or fine-tune a model — not ours, not a vendor's.",
  },
  {
    icon: <IconShield />,
    title: "Private by construction",
    body: "Every firm runs in an isolated tenant. Your data is never pooled with another client's, ever.",
  },
  {
    icon: <IconFocus />,
    title: "Full control, full visibility",
    body: "You decide who reaches what. Every action Ivy takes is logged, attributable and reviewable.",
  },
  {
    icon: <IconKey />,
    title: "Zero-trust by default",
    body: "Least privilege, short-lived credentials and strong authentication on every path into your data.",
  },
  {
    icon: <IconDatabase />,
    title: "Encrypted end to end",
    body: "Encrypted in transit and at rest — across storage, networks and backups, at all times.",
  },
  {
    icon: <IconAudit />,
    title: "Audited and tested",
    body: "Independent audits and penetration tests, in house and by third parties, on a fixed cadence.",
  },
];

export default function SecurityPage() {
  return (
    <Shell active="/security">
      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap center">
          <h1 className="d1 measure mx-auto">
            Privacy matters.
            <br />
            Especially for <em className="acc">your data</em>.
          </h1>
          <p className="lede measure-sm mx-auto" style={{ marginTop: 26 }}>
            Ivy secures your data, your models, and your firm&rsquo;s knowledge — with the controls,
            audits and posture you can hand straight to counsel.
          </p>
          <div style={{ marginTop: 44 }}>
            <DemoButton>Request a demo</DemoButton>
          </div>
          <p className="trust" style={{ marginTop: 56 }}>
            Audited &amp; tested &nbsp;·&nbsp; No model training &nbsp;·&nbsp; US data residency
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap grid-3">
          {PILLARS.map((p) => (
            <article className="card" key={p.title}>
              <div className="card__icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap cols cols--500">
          <h2 className="d2">
            Your data will
            <br />
            always <em className="acc">stay yours</em>.
          </h2>
          <div className="stack-22">
            <p className="body">
              As AI reaches further into the firm, the question stops being what a model can do and
              becomes what it is allowed to touch. For family offices and the firms that advise them,
              that answer has to stay in-house.
            </p>
            <p className="body">
              So we build Ivy the other way around: the vault stays locked, your records stay on your
              side of the fence, and every action Ivy takes leaves a trail you can read. Security is
              not a feature here, and it is not an afterthought — it is the frame the rest of the work
              is built on.
            </p>
          </div>
        </div>
      </section>

      <Band
        image="/img/photos/band-security.jpg"
        title={
          <>
            Unlock AI for
            <br />
            your <em className="acc">family office</em>.
          </>
        }
      />
    </Shell>
  );
}
