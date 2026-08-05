import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Living Culture Health" },
      { name: "description", content: "The terms that govern orders, quotations, delivery and use of the Living Culture Health website." },
      { property: "og:title", content: "Terms of Service | Living Culture Health" },
      { property: "og:description", content: "Terms governing orders, quotations, delivery and website use." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These placeholder terms govern your use of the Living Culture Health website and any orders or quotations placed through it."
    >
      <Section heading="1. Acceptance">
        <p>By browsing this website, requesting a quotation or placing an order, you agree to these terms.</p>
      </Section>
      <Section heading="2. Products and live cultures">
        <p>Our products are living organisms. Appearance, activity and colour vary naturally between batches. Care instructions are supplied with every culture and must be followed on arrival.</p>
      </Section>
      <Section heading="3. Pricing and quotations">
        <p>Prices are shown in South African Rand and may change without notice. Quotations are valid for 14 days unless stated otherwise.</p>
      </Section>
      <Section heading="4. Delivery">
        <p>Delivery is fulfilled by PUDO or The Courier Guy. Estimated timeframes are indicative and not guaranteed.</p>
      </Section>
      <Section heading="5. Returns">
        <p>Because cultures are perishable, returns are limited. Report damaged or inactive cultures within 48 hours of delivery with photographs.</p>
      </Section>
      <Section heading="6. Health disclaimer">
        <p>Our products are foods, not medicines. Nothing on this site is medical advice. Consult a healthcare professional before changing your diet.</p>
      </Section>
      <Section heading="7. Governing law">
        <p>These terms are governed by the laws of the Republic of South Africa.</p>
      </Section>
    </LegalPage>
  );
}
