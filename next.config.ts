import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Agentation is a dev-only annotation overlay. It is already gated out of every
  // production render, but aliasing it away in a production build keeps its ~400KB
  // chunk from being emitted and uploaded at all.
  turbopack: {
    resolveAlias:
      process.env.NODE_ENV === "production" ? { agentation: "./app/dev-annotations-noop.ts" } : {},
  },
  async rewrites() {
    // Shareable one-pager: ivy.one/onepager serves public/onepager.pdf.
    // Renew by replacing that file — the link never changes.
    return [{ source: "/onepager", destination: "/onepager.pdf" }];
  },
  async headers() {
    const pdfHeaders = [
      { key: "Content-Disposition", value: 'inline; filename="Ivy-OnePager.pdf"' },
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
    ];
    return [
      { source: "/onepager", headers: pdfHeaders },
      { source: "/onepager.pdf", headers: pdfHeaders },
    ];
  },
};

export default nextConfig;
