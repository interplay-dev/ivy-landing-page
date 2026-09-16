import type { Metadata } from "next";
import Shell, { Band, DemoButton, DemoChip } from "../v2/shell";
import Testimonials from "../v2/testimonials";
import {
  IconAgenda, IconAudit, IconBoard, IconBolt, IconCalendar, IconChart, IconCheck, IconCode,
  IconDatabase, IconDoc, IconDollar, IconFilter, IconFlag, IconFocus, IconFolder, IconInbox,
  IconKey, IconLedger, IconLines, IconLock, IconMail, IconPage, IconPerson, IconPlus,
  IconRefresh, IconShield,
} from "../v2/icons";

export const metadata: Metadata = {
  title: "Product — Ivy",
  description:
    "We help family offices leverage AI the right way. Ivy is a true teammate for your entire firm — six roles in one hire.",
};

const ROLES = [
  { icon: <IconAgenda />, t: "Chief of staff", b: "Runs the agenda, keeps the follow-ups moving." },
  { icon: <IconLedger />, t: "Controller", b: "Reconciles the books, tracks capital calls, and closes the quarter." },
  { icon: <IconChart />, t: "Analyst", b: "Models, benchmarks, and writes the memo with a citation on every line." },
  { icon: <IconMail />, t: "Investor relations", b: "Drafts the LP letters, answers the questions, keeps the data room current." },
  { icon: <IconCode />, t: "Engineer", b: "Wires the tools together, keeps the data clean." },
  { icon: <IconCalendar />, t: "Executive assistant", b: "Owns the calendar, the inbox, the travel and the follow-ups." },
];

const GID = [
  { t: "Takes ownership", b: "Takes a task from research to shipped: decides, builds, updates your tools, hands back something you can use.", img: "/img/mocks/gid-ownership.png" },
  { t: "Works across your company", b: "Slack, Notion, HubSpot, Google Drive, Excel and Stripe — she finishes the work where it lives.", img: "/img/mocks/gid-across.png" },
  { t: "Gets better over time", b: "She remembers your processes, decisions and preferences, and gets faster and more aligned every week.", img: "/img/mocks/gid-better.png" },
];

const CHIPS: [React.ReactNode, string, boolean][] = [
  [<IconMail key="a" />, "Quarterly LP letter", false],
  [<IconFilter key="b" />, "Deal-flow screen", true],
  [<IconLines key="c" />, "Bank-feed reconcile", false],
  [<IconDoc key="d" />, "IC memo draft", false],
  [<IconInbox key="e" />, "Inbox triage", false],
  [<IconDollar key="f" />, "Capital-call notices", false],
  [<IconCalendar key="g" />, "Meeting debrief", true],
  [<IconPage key="h" />, "One-pager builder", false],
  [<IconFlag key="i" />, "Expense flags", false],
  [<IconFolder key="j" />, "Data-room requests", false],
  [<IconPerson key="k" />, "Manager one-pagers", false],
  [<IconChart key="l" />, "Cash-position digest", false],
  [<IconBoard key="m" />, "Board pack assembly", true],
  [<IconRefresh key="n" />, "Vendor renewals", false],
  [<IconCheck key="o" />, "K-1 chase", false],
  [<IconBolt key="p" />, "Portfolio-flash report", false],
  [<IconAgenda key="q" />, "Family-meeting agenda", false],
];

const BOXES = [
  { t: "Integrations", b: "Ivy connects to all your tools for one seamless working experience.", img: "/img/mocks/box-integrations.png" },
  { t: "Firm's brain and soul", b: "Ivy learns your ways of working and becomes the firm's AI operating model.", img: "/img/mocks/box-brain.png" },
  { t: "Training and education", b: "White-glove implementation and hands-on training with our team of engineers.", img: "/img/mocks/box-training.png" },
  { t: "Designed for family offices", b: "Custom-built models and workflows for family offices and decision-dense firms.", img: "/img/mocks/box-org.png" },
  { t: "Governance and approvals", b: "Full permission controls and governance policies to streamline compliance.", img: "/img/mocks/box-governance.png" },
  { t: "Custom deployment", b: "Your tenant, your cloud or on-premise. Ivy is deployed the way your firm requires.", img: "/img/mocks/box-deployment.png" },
];

const CMP = [
  ["Memory and context", "Remembers your firm, people and decisions", "Blank page every session"],
  ["Identity and access", "Her own inbox, calendar and permissions", "Logged in as you"],
  ["Availability", "Proactive, on a standing brief, 24/7", "Waits for a prompt"],
  ["Where she lives", "Slack, email, Drive — where the work is", "A separate tab"],
];

const SECURITY = [
  { icon: <IconLock />, t: "No training on your data" },
  { icon: <IconShield />, t: "Private by construction" },
  { icon: <IconFocus />, t: "Full control, full visibility" },
  { icon: <IconKey />, t: "Zero-trust by default" },
  { icon: <IconDatabase />, t: "Encrypted end to end" },
  { icon: <IconAudit />, t: "Audited and tested" },
];

export default function ProductPage() {
  return (
    <Shell active="/product">
      <section className="sec" style={{ paddingBottom: 24 }}>
        <div className="wrap center">
          <h1 className="d1" style={{ fontSize: "clamp(34px,4.6vw,60px)" }}>
            We help family offices
            <br />
            leverage AI <em className="acc">the right way</em>.
          </h1>
          <div style={{ marginTop: 40 }}>
            <DemoButton>Request a demo</DemoButton>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 24 }}>
        <div className="wrap cols cols--mid cols--420">
          <div>
            <h2 className="d2">
              A <em className="acc">true teammate</em>
              <br />
              for your entire firm.
            </h2>
            <p className="body" style={{ marginTop: 18 }}>
              Ivy sits inside the team, with a name, an inbox and a seat at the Monday meeting, next
              to the people who already run your firm.
            </p>
          </div>
          <figure className="mock">
            <img src="/img/mocks/cluster.png" alt="Ivy alongside the people who run the firm" width={1128} height={600} />
          </figure>
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap cols cols--360">
          <h2 className="d2">
            Six roles, <em className="acc">one hire</em>.
          </h2>
          <div className="roles">
            {ROLES.map((r) => (
              <article className="card" key={r.t}>
                <div className="card__icon">{r.icon}</div>
                <h3>{r.t}</h3>
                <p>{r.b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap">
          <h2 className="d2" style={{ maxWidth: 560 }}>
            Get it done, <em className="acc">better and faster</em>.
          </h2>
          <p className="body measure-sm" style={{ marginTop: 18 }}>
            Ivy works proactively on the tasks you teach her and she never forgets how you like them
            done.
          </p>
          <div className="grid-3" style={{ marginTop: 48 }}>
            {GID.map((g) => (
              <article className="gid" key={g.t}>
                <div className="gid__head">
                  <h3 className="d3">{g.t}</h3>
                  <p className="small" style={{ marginTop: 8 }}>{g.b}</p>
                </div>
                <img src={g.img} alt="" aria-hidden="true" width={689} height={464} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap cols cols--360">
          <div>
            <h2 className="d2">
              Automate all
              <br />
              <em className="acc">your workflows</em>.
            </h2>
            <p className="body" style={{ marginTop: 18 }}>
              Every recurring job in the firm, taught once and run on schedule. Ivy comes built in with
              100+ workflows she already does.
            </p>
          </div>
          <div className="chips">
            {CHIPS.map(([icon, label, lift]) => (
              <span className={`chip${lift ? " chip--lift" : ""}`} key={label}>
                {icon}
                {label}
              </span>
            ))}
            <DemoChip>
              <IconPlus />
              Yours — built with your team
            </DemoChip>
          </div>
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap">
          <h2 className="d2" style={{ maxWidth: 760 }}>
            AI that understands how
            <br />
            your firm <em className="acc">thinks and works</em>.
          </h2>
          <div className="grid-3 boxes" style={{ marginTop: 48 }}>
            {BOXES.map((b) => (
              <article className="card" key={b.t}>
                <h3>{b.t}</h3>
                <p>{b.b}</p>
                <img src={b.img} alt="" aria-hidden="true" width={560} height={300} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--line">
        <Testimonials />
      </section>

      <section className="sec sec--line">
        <div className="wrap cols cols--360">
          <div>
            <h2 className="d2">
              A hire, <em className="acc">not a seat</em>.
            </h2>
            <p className="body" style={{ marginTop: 18 }}>
              One hire for the whole company, briefed like a person, not configured like software.
            </p>
          </div>
          <div className="cmp">
            <div className="cmp__row cmp__row--head">
              <div />
              <div>
                <img src="/img/brand/ivy-lockup-green.png" alt="Ivy" width={33} height={14} />
              </div>
              <div>A seat in AI software</div>
            </div>
            {CMP.map(([label, ivy, other]) => (
              <div className="cmp__row" key={label}>
                <div className="lbl">{label}</div>
                <div><p>{ivy}</p></div>
                <div><p>{other}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap cols cols--360">
          <div>
            <h2 className="d2">
              Security <em className="acc">matters</em>.
            </h2>
            <p className="body" style={{ marginTop: 18 }}>
              Built for family offices that take security seriously.
            </p>
            <a className="link-arrow" href="/security" style={{ marginTop: 22 }}>
              Find out more →
            </a>
          </div>
          <div className="grid-3" style={{ gap: 16 }}>
            {SECURITY.map((s) => (
              <article className="card card--dark" key={s.t}>
                <div className="card__icon">{s.icon}</div>
                <h3>{s.t}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Band
        image="/img/photos/band-company.jpg"
        title={
          <>
            One hire.
            <br />
            The <em className="acc">output of a team</em>.
          </>
        }
      />
    </Shell>
  );
}
