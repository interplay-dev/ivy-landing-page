import type { Metadata } from "next";
import LegalShell from "../legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Ivy",
  description: "How Ivy collects, uses, and protects information.",
};

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" updated="October 26, 2026">
      <h2>1. Who we are</h2>
      <p>
        Ivy One LLC (“<strong>Ivy</strong>”, “<strong>we</strong>”, “<strong>us</strong>”) is a
        Delaware limited liability company based at 363 Lafayette Street, Floor 4, New York, NY
        10012, and an Interplay company. We build and operate Ivy, an AI platform that works inside
        the systems our clients already use, and we provide the implementation and support services
        around it. Our clients are businesses, mainly family offices and investment firms.
      </p>
      <p>
        This policy explains how we handle personal information when you visit ivy.one, contact us,
        meet us, or do business with us. It also explains, in Section 5, how we protect the data our
        clients entrust to us.
      </p>

      <h2>2. What this policy covers</h2>
      <p>
        This policy covers personal information we collect and use{" "}
        <strong>for our own business purposes</strong>, about:
      </p>
      <ul>
        <li>visitors to our website;</li>
        <li>people who request a demo, contact us, subscribe to our updates or attend our events;</li>
        <li>business contacts at our clients, prospective clients, partners and vendors.</li>
      </ul>
      <p>
        It does <strong>not</strong> govern data we process <strong>on behalf of our clients</strong>{" "}
        while providing our services (“<strong>Client Data</strong>”), such as the emails, documents
        and calendars of a client firm. We process Client Data only as our client’s service
        provider, under a written agreement with that client and on its instructions. If your
        information is held by one of our clients and you want to exercise your privacy rights,
        please contact that client. We will help them respond. Section 5 summarizes how we protect
        Client Data.
      </p>

      <h2>3. Information we collect</h2>
      <p>
        <strong>Information you give us.</strong> Your name, work email address, phone number, job
        title and company; the content of your messages and of the forms you complete; and notes of
        our meetings and calls with you.
      </p>
      <p>
        <strong>Information collected automatically.</strong> When you visit ivy.one, our hosting
        provider records standard technical information, such as your IP address, browser type,
        device type, the pages you request and the time of your visit, to deliver the site and keep
        it secure. We also use <strong>Mixpanel</strong>, a product-analytics service, to understand
        how visitors use our website so we can improve it. Mixpanel records the pages you view and
        the actions you take on the site, together with your browser, device and approximate
        location (city and country) derived from your IP address, and uses a cookie to recognize a
        returning browser. We use this information to improve the site, not for advertising. See
        Section 7 for your choices.
      </p>
      <p>
        <strong>Information from other sources.</strong> Professional information that is publicly
        available, such as from company websites, professional networking profiles, regulatory
        filings and press; attendee and speaker information from events we attend or sponsor; and
        introductions from people and partners who refer you to us.
      </p>
      <p>
        We do not knowingly collect sensitive personal information about you, such as government
        identification numbers, financial account details, health information or precise location,
        for our own business purposes.
      </p>

      <h2>4. How we use your information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>respond to your enquiries and arrange and run demos and meetings;</li>
        <li>provide, support and improve our services for our clients;</li>
        <li>
          send business communications you have asked for, or that are relevant to your
          professional role, which you can opt out of at any time;
        </li>
        <li>operate, maintain and secure our website and systems;</li>
        <li>manage our relationships with clients, partners and vendors;</li>
        <li>comply with law and enforce our agreements.</li>
      </ul>
      <p>
        We use usage data about how our Platform is used, such as which features are used, how
        often, run times and errors, to operate, support, secure and improve the Platform. Usage
        data never includes the content of Client Data.
      </p>

      <h2>5. How we protect Client Data</h2>
      <p>
        When a firm engages us, the following commitments are binding obligations in our agreement
        with that firm:
      </p>
      <ul>
        <li>
          <strong>No training, ever.</strong> Client Data is never used to train, fine-tune or
          improve any AI model, whether ours or anyone else’s.
        </li>
        <li>
          <strong>Zero data retention.</strong> Every AI model and AI processing service that
          handles Client Data processes it transiently and keeps none of it.
        </li>
        <li>
          <strong>No frontier AI company sees Client Data.</strong> The AI models we use run inside
          Amazon Web Services, through Amazon Bedrock. Their developers have no access to prompts,
          documents or outputs, and Client Data is never sent to any frontier AI developer’s own
          models or services.
        </li>
        <li>
          <strong>An isolated environment for every client.</strong> Each client’s data, memory,
          workflows, credentials and logs are kept in its own logically isolated environment.
        </li>
        <li>
          <strong>Encryption.</strong> Client Data is encrypted in transit with TLS 1.2 or higher
          and at rest with AES-256. Credentials and data the client designates as sensitive are
          encrypted a second time.
        </li>
        <li>
          <strong>United States only.</strong> Client Data is stored and processed only in the
          United States.
        </li>
        <li>
          <strong>The client stays in control.</strong> The client owns its data, can see what Ivy
          has done, can revoke Ivy’s access at any time, and can have its data deleted. When the
          agreement ends, the client receives its data back and we delete it.
        </li>
      </ul>

      <h2>6. How we share information</h2>
      <p>We share personal information only with:</p>
      <ul>
        <li>
          <strong>service providers</strong> who help us run our business, such as cloud hosting,
          website analytics (Mixpanel), email, scheduling, customer-relationship and document tools,
          under agreements that limit their use of it to providing services to us;
        </li>
        <li>
          <strong>professional advisers</strong>, such as lawyers, accountants, auditors and
          insurers, under duties of confidentiality;
        </li>
        <li>
          <strong>authorities</strong>, where the law requires it, or where needed to protect our
          rights, our clients or others;
        </li>
        <li>
          <strong>a successor</strong>, if we are involved in a merger, acquisition or sale of
          assets, in which case this policy continues to apply to the information transferred;
        </li>
        <li>
          <strong>anyone else, with your consent.</strong>
        </li>
      </ul>
      <p>
        <strong>
          We do not sell personal information, and we do not share it for cross-context behavioral
          advertising.
        </strong>
      </p>

      <h2>7. Cookies and tracking</h2>
      <p>
        Our website uses two kinds of cookies and similar technologies:{" "}
        <strong>essential cookies</strong>, which the site needs to work, and{" "}
        <strong>analytics cookies</strong> set by Mixpanel (Section 3), which help us understand how
        the site is used. We do not use advertising cookies or cross-site tracking, and we do not
        allow third parties to collect information about your activity on our site for advertising.
      </p>
      <p>
        You can block or delete cookies in your browser settings, and the site will still work.
        Where the law requires your consent before analytics cookies are set, as it does for
        visitors in the EEA and the UK, we ask for it first. We do not sell or share personal
        information, and we treat a Global Privacy Control signal from your browser as a valid
        request to opt out of any sale or sharing.
      </p>

      <h2>8. Where we process information</h2>
      <p>
        We are based in the United States, and we store and process personal information in the
        United States. If you contact us from outside the United States, your information will be
        transferred to and processed in the United States.
      </p>

      <h2>9. How long we keep information</h2>
      <p>
        We keep personal information only as long as we need it for the purposes in this policy.
        Enquiry and business-contact information is kept for as long as we have, or may reasonably
        expect to have, a business relationship, and then deleted or anonymized. Website logs and
        analytics data are kept for a limited period, for security and to understand how the site
        is used. Client Data is kept and deleted as the client’s agreement provides.
      </p>

      <h2>10. Security</h2>
      <p>
        We protect personal information with administrative, technical and physical safeguards
        appropriate to its sensitivity, including encryption in transit and at rest, multi-factor
        authentication, least-privilege access, logging and regular security reviews. No method of
        transmission or storage is completely secure, but we work continually to protect the
        information we hold.
      </p>

      <h2>11. Your choices and rights</h2>
      <p>
        <strong>Marketing.</strong> You can opt out of our business communications at any time by
        using the unsubscribe link in any message or by contacting us.
      </p>
      <p>
        <strong>Your rights.</strong> Depending on where you live, you may have the right to:
      </p>
      <ul>
        <li>
          know what personal information we hold about you and how we use it, and receive a copy;
        </li>
        <li>correct inaccurate personal information;</li>
        <li>delete your personal information;</li>
        <li>
          opt out of the sale or sharing of personal information, or of its use for targeted
          advertising or profiling (we do none of these);
        </li>
        <li>not be treated differently for exercising your rights.</li>
      </ul>
      <p>
        <strong>California residents.</strong> If the California Consumer Privacy Act applies, you
        have the rights listed above. In the past 12 months we have collected the categories of
        personal information described in Section 3 (identifiers, professional or
        employment-related information, commercial information and internet activity on our
        website), from the sources described there, for the purposes in Section 4, and disclosed
        them for business purposes to the categories of recipients in Section 6. We have not sold or
        shared personal information, and we do not use sensitive personal information to infer
        characteristics about you.
      </p>
      <p>
        <strong>How to make a request.</strong> Email us at{" "}
        <a href="mailto:privacy@ivy.one">privacy@ivy.one</a>. We will verify your identity before
        acting, normally by confirming information we already hold, and respond within 45 days. You
        may use an authorized agent, who must provide proof of their authority. If we decline a
        request, we will tell you why, and you may appeal by replying to our decision.
      </p>

      <h2>12. Individuals in the European Economic Area and the United Kingdom</h2>
      <p>
        If you are in the EEA or the UK, Ivy One LLC is the controller of the personal information
        described in this policy. We rely on the following legal bases: our{" "}
        <strong>legitimate interests</strong> in communicating with business contacts, running our
        business and securing our website;{" "}
        <strong>taking steps at your request before entering into a contract</strong>, or
        performing one; <strong>consent</strong>, where the law requires it, such as for analytics
        cookies; and <strong>compliance with legal obligations</strong>. You have the rights to
        access, rectify and erase your personal information, to restrict or object to its
        processing, to data portability, and to withdraw consent at any time.{" "}
        <strong>You may object to direct marketing at any time, and we will stop.</strong> You may
        also complain to your local data-protection authority. Your information is transferred to
        and processed in the United States, as described in Section 8.
      </p>

      <h2>13. Children</h2>
      <p>
        Our website and services are intended for businesses and are not directed to children under
        16. We do not knowingly collect personal information from children.
      </p>

      <h2>14. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will post the updated version on this page
        with a new “Last updated” date. We will tell active clients about material changes.
      </p>

      <h2>15. Contact us</h2>
      <p>
        <strong>Privacy questions and requests:</strong>{" "}
        <a href="mailto:privacy@ivy.one">privacy@ivy.one</a>
        <br />
        <strong>Post:</strong> Ivy One LLC, 363 Lafayette Street, Floor 4, New York, NY 10012,
        United States
      </p>
    </LegalShell>
  );
}
