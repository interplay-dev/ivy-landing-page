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

export const metadata: Metadata = {
  title: "Ivy — Your new AI hire",
  description:
    "Ivy is the AI operator for family offices, private equity, and investment funds. One hire that does the work of three to five — live in days.",
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
