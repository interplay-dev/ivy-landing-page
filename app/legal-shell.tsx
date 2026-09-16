import Shell from "./v2/shell";

/* Shared chrome for the legal pages. These sit inside the same v2 Shell as every
   other page, so the nav and footer are there to navigate back out with. */
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <Shell>
      <section className="sec">
        <div className="wrap">
          <div className="legal-doc">
            <p className="mono">Legal</p>
            <h1 className="d1" style={{ fontSize: "clamp(34px,4.2vw,52px)", marginTop: 16 }}>
              {title}
            </h1>
            <p className="small" style={{ marginTop: 14 }}>Last updated: {updated}</p>
            <div className="legal-doc__body">{children}</div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
