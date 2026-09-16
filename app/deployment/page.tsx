import type { Metadata } from "next";
import Shell, { Band, DemoButton } from "../v2/shell";
import Testimonials from "../v2/testimonials";
import Timeline from "../v2/timeline";
import { IconCloud, IconCube, IconLayers, IconRack } from "../v2/icons";

export const metadata: Metadata = {
  title: "Deployment — Ivy",
  description:
    "Ivy's deployment teams build your custom AI operating model, deliver measurable business impact, and hand you the keys.",
};

const TILES = [
  { icon: <IconLayers />, title: "Multi-tenant", body: "Continuous updates, fully monitored by Ivy. Shared infrastructure with an isolated tenant and isolated data." },
  { icon: <IconCube />, title: "Single-tenant", body: "Fully dedicated infrastructure — isolated at every layer, with automatic updates and custom configuration." },
  { icon: <IconCloud />, title: "Bring your own cloud", body: "Your AWS, Azure or GCP account, your governance and guardrails — Ivy is deployed inside it." },
  { icon: <IconRack />, title: "On-premise", body: "Completely air-gapped, zero external dependencies, and full in-house ownership of the stack." },
];

export default function DeploymentPage() {
  return (
    <Shell active="/deployment">
      <section className="sec" style={{ paddingBottom: 72 }}>
        <div className="wrap center">
          <h1 className="d1">
            Deployment is what
            <br />
            ensures <em className="acc">success</em>.
          </h1>
          <p className="lede measure-sm mx-auto" style={{ marginTop: 28 }}>
            Ivy&rsquo;s deployment teams build your custom AI operating model, deliver measurable
            business impact, and hand you the keys.
          </p>
          <div style={{ marginTop: 44 }}>
            <DemoButton>Request a demo</DemoButton>
          </div>
          <figure className="figure" style={{ marginTop: 72 }}>
            <img src="/img/photos/deploy-hero.jpg" alt="An Ivy deployment team working with a client" width={2160} height={1080} />
          </figure>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 24 }}>
        <div className="wrap cols cols--440">
          <h2 className="d2">
            Truly <em className="acc">embedded</em> deployment teams.
          </h2>
          <div className="stack-22">
            <p className="body">
              AI will reshape how financial firms operate. The firms that win will tailor the AI
              around their own operating model.
            </p>
            <p className="body">
              Ivy partners with family offices and decision-dense firms to build custom AI operating
              models that accelerate their work and impact. We combine a best-model AI platform, local
              deployment teams and expert advisors to help firms transform their operations and
              workflows.
            </p>
            <figure className="figure figure--card" style={{ marginTop: 18 }}>
              <img src="/img/photos/deploy-advising.jpg" alt="An Ivy deployment lead advising a client" width={1088} height={720} />
            </figure>
          </div>
        </div>
      </section>

      <section className="sec sec--line">
        <div className="wrap">
          <h2 className="d2" style={{ maxWidth: 760 }}>
            Deployment and training
            <br />
            <em className="acc">tailored to your firm</em>.
          </h2>
          <div style={{ marginTop: 48 }}>
            <Timeline />
          </div>
        </div>
      </section>

      <section className="sec sec--line">
        <Testimonials />
      </section>

      <section className="sec sec--line">
        <div className="wrap">
          <h2 className="d2">
            Deploy <em className="acc">anywhere</em>.
          </h2>
          <p className="lede measure-sm" style={{ marginTop: 16 }}>
            Ivy deploys your custom AI operating system to match your infrastructure and compliance
            needs.
          </p>
          <div className="grid-4" style={{ marginTop: 48 }}>
            {TILES.map((t) => (
              <article className="card" key={t.title}>
                <div className="card__icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Band
        image="/img/photos/band-deploy.jpg"
        title={
          <>
            Give your team
            <br />
            AI <em className="acc">superpowers</em>.
          </>
        }
        cta="Get in touch"
      />
    </Shell>
  );
}
