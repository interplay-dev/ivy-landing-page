import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
