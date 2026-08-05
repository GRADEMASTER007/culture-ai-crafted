import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/site/LegalPage";

export const Route = createFileRoute("/community-guidelines")({
  head: () => ({
    meta: [
      { title: "Community Guidelines | Living Culture Health" },
      { name: "description", content: "How we expect our fermentation community to behave in reviews, comments and messages." },
      { property: "og:title", content: "Community Guidelines | Living Culture Health" },
      { property: "og:description", content: "Standards for reviews, comments and community conversation." },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <LegalPage
      title="Community Guidelines"
      intro="Placeholder standards for how we all behave in reviews, comments, social channels and messages to our team."
    >
      <Section heading="1. Be respectful">
        <p>Treat fellow fermenters and our team with courtesy. Harassment, hate speech and personal attacks are not tolerated.</p>
      </Section>
      <Section heading="2. Share honestly">
        <p>Reviews should reflect genuine experience. Do not post misleading, paid or fake feedback.</p>
      </Section>
      <Section heading="3. No unsafe or medical claims">
        <p>Do not present fermented foods as cures or treatments for illness, or share unsafe preparation practices.</p>
      </Section>
      <Section heading="4. Keep it relevant">
        <p>No spam, scams, resale offers or unrelated promotion.</p>
      </Section>
      <Section heading="5. Enforcement">
        <p>We may edit or remove content and restrict accounts that breach these guidelines.</p>
      </Section>
    </LegalPage>
  );
}
