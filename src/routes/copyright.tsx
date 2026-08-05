import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/site/LegalPage";

export const Route = createFileRoute("/copyright")({
  head: () => ({
    meta: [
      { title: "Copyright Policy | Living Culture Health" },
      { name: "description", content: "Copyright ownership, permitted use and how to submit an infringement notice to Living Culture Health." },
      { property: "og:title", content: "Copyright Policy | Living Culture Health" },
      { property: "og:description", content: "Ownership, permitted use and infringement notices." },
    ],
  }),
  component: Copyright,
});

function Copyright() {
  return (
    <LegalPage
      title="Copyright Policy"
      intro="Placeholder policy covering ownership of our content and how to report alleged infringement."
    >
      <Section heading="1. Our content">
        <p>All text, photography, product descriptions, guides and branding on this site belong to Living Culture Health unless otherwise stated.</p>
      </Section>
      <Section heading="2. Permitted use">
        <p>You may share short excerpts with clear credit and a link back. Bulk copying, scraping or commercial reuse requires written permission.</p>
      </Section>
      <Section heading="3. Reporting infringement">
        <ul>
          <li>Identify the copyrighted work concerned.</li>
          <li>Provide the exact URL of the allegedly infringing material.</li>
          <li>Include your name, contact details and a good-faith statement.</li>
        </ul>
        <p>Send notices to orders@proagrisa.co.za.</p>
      </Section>
      <Section heading="4. Counter-notices">
        <p>If your content was removed in error, contact us with an explanation and we will review promptly.</p>
      </Section>
    </LegalPage>
  );
}
