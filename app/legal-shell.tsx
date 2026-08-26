import Link from "next/link";

const REQUEST_A_DEMO = "mailto:leon@ivy.one?subject=REQUEST%20A%20DEMO";

// Shared chrome for the legal pages: brand nav, 680px document column, slim footer.
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
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <mask id="ivyLeafMask" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
            <path
              fill="#fff"
              d="M48.5 11.5 C51.5 26.5 45.5 40.5 34 46 C22 51.8 9 45.5 8.5 34.5 C8 23.5 17.5 15.5 30 14 C36.5 13.2 41.5 17 48.5 11.5 Z"
            />
            <path
              stroke="#000"
              strokeWidth="4.2"
              fill="none"
              strokeLinecap="round"
              d="M11 41 C19 43 28 38 36 29"
            />
          </mask>
          <g id="ivyLeaf">
            <path
              fill="currentColor"
              mask="url(#ivyLeafMask)"
              d="M48.5 11.5 C51.5 26.5 45.5 40.5 34 46 C22 51.8 9 45.5 8.5 34.5 C8 23.5 17.5 15.5 30 14 C36.5 13.2 41.5 17 48.5 11.5 Z"
            />
            <path
              d="M3.5 56 C6.5 51 8.5 45.5 11 41"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </defs>
      </svg>

      <header className="nav">
        <div className="container nav__row">
          <Link className="lockup" href="/" aria-label="Ivy home">
            <svg className="leaf" width="26" height="26" viewBox="0 0 64 64">
              <use href="#ivyLeaf" />
            </svg>
            <span className="lockup__word">Ivy</span>
          </Link>
          <div className="nav__actions">
            <a className="btn btn--primary" href={REQUEST_A_DEMO}>Request a demo</a>
          </div>
        </div>
      </header>

      <main className="legal">
        <div className="container">
          <div className="legal__inner">
            <p className="eyebrow">Legal</p>
            <h1 className="legal__title">{title}</h1>
            <p className="legal__updated">Last updated: {updated}</p>
            {children}
          </div>
        </div>
      </main>

      <footer className="legal__footer">
        <div className="container legal__footer-row">
          <span>© 2026 Ivy One, LLC. All rights reserved.</span>
          <span>
            <Link href="/">ivy.one</Link> · <Link href="/privacy">Privacy</Link> ·{" "}
            <Link href="/terms">Terms</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
