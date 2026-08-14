import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivy — A senior teammate. Always on.",
  description:
    "Built for decision-dense firms that need a partner-grade operator without a partner-cost headcount.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
