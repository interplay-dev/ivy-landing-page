import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({ subsets: ["latin"], variable: "--nf-display" });
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
      className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
