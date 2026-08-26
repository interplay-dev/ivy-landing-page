import type { Metadata } from "next";
import LegalShell from "../legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Ivy",
  description: "How Ivy collects, uses, and protects information.",
};

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" updated="August 26, 2026">
      <h2>1. Who we are</h2>
      <p>
        Ivy (“Ivy”, “we”, “us”) is a software and consulting firm and an Interplay company. We
        build Ivy, an AI operator that runs in the cloud for our clients, and we provide
        customization and consulting services around it. This policy explains how we handle
        information when you visit ivy.one, contact us, or work with us.
      </p>

      <h2>2. Information we collect</h2>
      <p>
        When you request a demo, join a waitlist, or email us, we collect the details you choose
        to share — typically your name, work email, company, and the contents of your message.
        Our hosting infrastructure also records basic technical logs (such as IP address, browser
        type, and pages requested) to keep the site secure and reliable. The ivy.one website does
        not use advertising trackers.
      </p>

      <h2>3. Client and engagement data</h2>
      <p>
        When a firm engages us, Ivy processes business information on that client’s behalf under a
        written service agreement. We act on the client’s instructions, connect only to the
        systems the client authorizes, scope every connection to the permissions granted, and
        keep an audit trail of the work performed. Client data is used to deliver the engagement —
        never to market to third parties.
      </p>

      <h2>4. How we use information</h2>
      <p>
        We use the information we collect to provide and improve our software and services,
        respond to enquiries, schedule and prepare demos, send communications you have requested,
        and meet our legal obligations. We do not sell personal data.
      </p>

      <h2>5. How we share information</h2>
      <p>
        We share information with service providers who help us operate — cloud infrastructure,
        AI model providers, and email and scheduling tools — each bound by agreements that limit
        their use of it. We may also disclose information where the law requires it, or as part
        of a corporate transaction such as a merger or acquisition, in which case this policy
        continues to apply.
      </p>

      <h2>6. Security</h2>
      <p>
        We protect information with industry-standard measures, including encryption in transit,
        access controls, permission-scoped integrations, and logging. No method of transmission
        or storage is completely secure, but we work to protect information appropriate to its
        sensitivity.
      </p>

      <h2>7. Retention</h2>
      <p>
        We keep personal information only as long as needed for the purposes described above or
        as required by law. Client engagement data is retained and returned or deleted according
        to the terms of the applicable service agreement.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or object to
        our processing of your personal information. To exercise them, email{" "}
        <a href="mailto:hello@ivy.one">hello@ivy.one</a> and we will respond within a reasonable
        time.
      </p>

      <h2>9. International transfers</h2>
      <p>
        We may process information in countries other than the one where you live. Where we do,
        we take steps designed to ensure it receives an appropriate level of protection.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will post the updated version on this
        page with a revised date, and material changes will be communicated to active clients.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about privacy at Ivy: <a href="mailto:hello@ivy.one">hello@ivy.one</a>.
      </p>
    </LegalShell>
  );
}
