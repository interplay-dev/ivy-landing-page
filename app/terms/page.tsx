import type { Metadata } from "next";
import LegalShell from "../legal-shell";

export const metadata: Metadata = {
  title: "Terms of Service — Ivy",
  description: "The terms that govern the ivy.one website and Ivy's services.",
};

export default function Terms() {
  return (
    <LegalShell title="Terms of Service" updated="August 26, 2026">
      <h2>1. Agreement to these terms</h2>
      <p>
        These terms govern your use of the ivy.one website and your general dealings with Ivy
        One, LLC (“Ivy”, “we”, “us”), a software and consulting firm and an Interplay company.
        By using the site or contacting us, you agree to these terms.
      </p>

      <h2>2. Our services</h2>
      <p>
        Ivy builds and operates cloud-hosted AI operator software and provides customization and
        consulting services around it. Client engagements — including scope, fees,
        confidentiality, data handling, and service levels — are governed by a separate written
        agreement between Ivy and the client. If anything in these terms conflicts with a signed
        client agreement, the client agreement prevails.
      </p>

      <h2>3. Demo requests and communications</h2>
      <p>
        Requesting a demo or contacting us creates no obligation on either side. Information you
        share with us is handled as described in our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>4. Acceptable use of the site</h2>
      <p>
        You agree not to misuse the site — including attempting to gain unauthorized access to
        our systems, interfering with the site’s operation, scraping it at scale, or using it to
        transmit anything unlawful or harmful.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The site and its content — including text, design, logos, and software — belong to Ivy or
        its licensors and are protected by law. Client materials remain the property of the
        client. If you send us feedback or suggestions, you grant us a non-exclusive, perpetual
        right to use them without restriction or compensation.
      </p>

      <h2>6. Confidentiality</h2>
      <p>
        We treat non-public information shared with us in the course of exploring or conducting
        an engagement as confidential, and we expect the same of information we share with you.
        Formal confidentiality obligations for engagements are set out in the applicable client
        agreement.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        Our software and services rely on third-party providers such as cloud infrastructure and
        AI model providers. Their services are governed by their own terms, and we are not
        responsible for third-party services we do not control.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The site and its content are provided “as is”, without warranties of any kind, express or
        implied. Content on the site is general information — it is not legal, financial,
        investment, or tax advice, and it does not create an advisory relationship.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Ivy is not liable for indirect, incidental,
        special, or consequential damages arising out of your use of the site, and our total
        liability in connection with the site is limited to one hundred US dollars. Liability
        under a signed client agreement is governed by that agreement.
      </p>

      <h2>10. Suspension and termination</h2>
      <p>
        We may suspend or restrict access to the site at any time, including to protect its
        security or integrity.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of the jurisdiction in which Ivy is established,
        without regard to conflict-of-law rules, unless mandatory law provides otherwise.
      </p>

      <h2>12. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The current version will always be posted on
        this page with a revised date; continued use of the site after changes means you accept
        them.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these terms: <a href="mailto:hello@ivy.one">hello@ivy.one</a>.
      </p>
    </LegalShell>
  );
}
