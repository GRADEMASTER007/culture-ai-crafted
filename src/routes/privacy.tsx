import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Living Culture Health" },
      { name: "description", content: "How Living Culture Health collects, uses and protects your personal information when you shop live cultures in South Africa." },
      { property: "og:title", content: "Privacy Policy | Living Culture Health" },
      { property: "og:description", content: "How we collect, use and protect your personal information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This placeholder policy explains how Living Culture Health handles personal information under South Africa's POPI Act."
    >
      <Section heading="1. Information we collect">
        <p>We collect the details you give us when placing an order or requesting a quotation: name, surname, email address, phone number and delivery address. We also collect basic usage data through analytics cookies.</p>
      </Section>
      <Section heading="2. How we use your information">
        <ul>
          <li>To process orders, quotations and deliveries.</li>
          <li>To respond to enquiries and provide customer support.</li>
          <li>To improve our products, catalogue and website experience.</li>
          <li>To send updates you have opted in to receive.</li>
        </ul>
      </Section>
      <Section heading="3. Sharing with third parties">
        <p>We share only what is necessary with couriers (PUDO, The Courier Guy), payment providers and analytics services. We never sell your personal information.</p>
      </Section>
      <Section heading="4. Data retention">
        <p>We keep order and invoice records for as long as required by South African tax and consumer legislation, then delete or anonymise them.</p>
      </Section>
      <Section heading="5. Your rights">
        <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us.</p>
      </Section>
      <Section heading="6. Security">
        <p>We apply reasonable technical and organisational safeguards to protect your data against loss, misuse and unauthorised access.</p>
      </Section>
    </LegalPage>
  );
}
