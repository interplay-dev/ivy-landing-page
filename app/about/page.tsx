import type { Metadata } from "next";
import Shell, { Band, DemoButton } from "../v2/shell";

export const metadata: Metadata = {
  title: "About — Ivy",
  description:
    "Ivy is your team's AI operating partner — taking real jobs and real tasks off your plate, so the people in the room can focus on what actually matters.",
};

const META = [
  ["Located in", "New York, NY\nUnited States"],
  ["Built for", "Family offices\n& financial firms"],
  ["Entity", "Ivy One LLC\nDelaware"],
];

export default function AboutPage() {
  return (
    <Shell active="/about">
      <section className="sec">
        <div className="wrap">
          <div className="cols cols--600">
            <h1 className="d1">
              The AI engine
              <br />
              for <em className="acc">family offices</em>.
            </h1>
            <div style={{ paddingTop: 10 }}>
              <p className="lede">
                Ivy is your team&rsquo;s AI operating partner — taking real jobs and real tasks off
                your plate, so the people in the room can focus on what actually matters.
              </p>
              <div style={{ marginTop: 36 }}>
                <DemoButton>Request a demo</DemoButton>
              </div>
            </div>
          </div>
          <figure className="figure" style={{ marginTop: 72 }}>
            <img src="/img/photos/about-hero.jpg" alt="Family office principals in conversation" width={2160} height={1120} />
          </figure>
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap cols cols--440">
          <h2 className="d2">
            Supercharging firms with AI <em className="acc">superpowers</em>.
          </h2>
          <div className="stack-22">
            <p className="body">
              AI will reshape how financial firms operate. The firms that win will tailor the AI
              around their own operating model — that is the only way it reaches its full potential.
            </p>
            <p className="body">
              Ivy partners with family offices to build custom AI operating models that accelerate
              their work and impact. We combine a multi-model AI platform, local deployment teams and
              expert advisors to help financial firms transform their operations and workflows.
            </p>
            <figure className="figure figure--card" style={{ marginTop: 18 }}>
              <img src="/img/photos/about-advising.jpg" alt="An Ivy team at work with a client" width={1088} height={720} />
            </figure>
          </div>
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap cols cols--440">
          <h2 className="d2">
            Building the best
            <br />
            <em className="acc">AI operator</em> for
            <br />
            family offices.
          </h2>
          <div>
            <p className="body">
              At Ivy, our mission is to deliver the most efficient, reliable and trusted AI teammate
              and operator — making financial work faster and more effective. Our goal is to become
              the most trusted AI partner to family offices around the globe.
            </p>
            <div className="meta">
              {META.map(([k, v]) => (
                <div key={k}>
                  <h4>{k}</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Band
        image="/img/photos/band-about.jpg"
        title={
          <>
            Staff Ivy at your
            <br />
            family office, <em className="acc">today</em>.
          </>
        }
      />
    </Shell>
  );
}
