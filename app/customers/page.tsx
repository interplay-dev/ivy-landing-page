import type { Metadata } from "next";
import Shell, { Band, DemoButton } from "../v2/shell";
import Testimonials from "../v2/testimonials";

export const metadata: Metadata = {
  title: "Customers — Ivy",
  description:
    "Ivy was born inside our own family office — built, tested and refined on real workstreams before we brought it to anyone else.",
};

const STATS = [
  ["Average hours saved\nper month", "922"],
  ["Average hours saved\nper year", "11,064"],
  ["FTE\nequivalent", "5.47"],
  ["Workstreams\ndone by Ivy", "189"],
];

export default function CustomersPage() {
  return (
    <Shell active="/customers">
      <section className="sec">
        <div className="wrap cols cols--600">
          <h1 className="d1">
            Built in-house,
            <br />
            in our own
            <br />
            <em className="acc">family office</em>.
          </h1>
          <div style={{ paddingTop: 10 }}>
            <p className="lede">
              Ivy was born in early 2026 inside our own family office — built, tested and refined on
              real workstreams before we brought it to anyone else.
            </p>
            <div style={{ marginTop: 36 }}>
              <DemoButton>Request a demo</DemoButton>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--dark">
        <div className="wrap cols cols--440 cols--wide">
          <div>
            <h2 className="d2">
              Helping teams save time and be <em className="acc">more productive</em>.
            </h2>
            <div className="stack-22" style={{ marginTop: 32 }}>
              <p className="body">Ivy started in-house, in our own family office: Ascend Capital.</p>
              <p className="body">
                Over the last six months Ivy has grown to deliver the output of 5.5 workers and now
                supports our 14-person multi-family office.
              </p>
              <p className="body">
                Overall we&rsquo;ve seen an 11× return when we compare the investment in Ivy against
                the labor output we&rsquo;d be hiring for a family office in New York.
              </p>
            </div>
          </div>
          <div className="statrows" style={{ paddingTop: 46 }}>
            {STATS.map(([label, value]) => (
              <div key={value}>
                <p style={{ whiteSpace: "pre-line" }}>{label}</p>
                <b>{value}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <Testimonials />
      </section>

      <Band
        image="/img/photos/band-customers.jpg"
        title={
          <>
            Write your <em className="acc">success story</em>
            <br />
            with Ivy.
          </>
        }
      />
    </Shell>
  );
}
