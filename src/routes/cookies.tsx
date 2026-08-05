import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Living Culture Health" },
      { name: "description", content: "How Living Culture Health uses cookies and similar technologies, and how you can control them." },
      { property: "og:title", content: "Cookie Policy | Living Culture Health" },
      { property: "og:description", content: "How we use cookies and how to control them." },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This placeholder policy explains the cookies and similar technologies used on the Living Culture Health website."
    >
      <Section heading="1. What cookies are">
        <p>Cookies are small text files stored on your device that help a website remember your preferences and understand how it is used.</p>
      </Section>
      <Section heading="2. Cookies we use">
        <ul>
          <li><strong>Essential</strong> — cart contents, cookie consent choice and basic site function.</li>
          <li><strong>Analytics</strong> — Google Analytics and Google Tag Manager, to understand traffic and improve the store.</li>
          <li><strong>Preference</strong> — remembering choices such as shipping method.</li>
        </ul>
      </Section>
      <Section heading="3. Managing cookies">
        <p>You can clear or block cookies in your browser settings at any time. Blocking essential cookies may break the cart and checkout.</p>
      </Section>
      <Section heading="4. More information">
        <p>
          See our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for how the resulting data is handled.
        </p>
      </Section>
    </LegalPage>
  );
}
