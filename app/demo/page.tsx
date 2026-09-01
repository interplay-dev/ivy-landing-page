import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Request a demo — Ivy",
  description:
    "Schedule a 30 minute demo with one of our AI consultants to see how Ivy can benefit your firm.",
};

// Direct-linkable demo request: the landing page with the modal already open.
export default function DemoPage() {
  return <Home demoOpen />;
}
