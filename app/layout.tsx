import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter, Inter_Tight, Newsreader } from "next/font/google";
import "./globals.css";
import DevAnnotations from "./dev-annotations";

const display = Inter_Tight({ subsets: ["latin"], variable: "--nf-display" });
// Brand v2 display face — used by the /product, /customers, /deployment,
// /security and /about pages. The v1 landing page keeps Inter Tight.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--nf-newsreader",
});
const sans = Inter({ subsets: ["latin"], variable: "--nf-sans" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--nf-serif",
});
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--nf-mono" });

const TITLE = "Ivy: The AI Operator for Family Offices";
const DESCRIPTION =
  "Ivy is the most capable AI teammate for family offices. She joins your team, learns your firm and gets the work done.";

// Site-wide default, used by any route that does not set its own. Deliberately no
// openGraph block here: a page that sets no openGraph of its own would inherit
// this one wholesale, so every inner page would unfurl with the home page's title
// and URL. The share tags live on the home page instead.
export const metadata: Metadata = {
  metadataBase: new URL("https://ivy.one"),
  title: TITLE,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable} ${newsreader.variable}`}
    >
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <DevAnnotations />}
      </body>
    </html>
  );
}
