import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/site/LegalPage";

export const Route = createFileRoute("/facebook-data-deletion")({
  head: () => ({
    meta: [
      { title: "Facebook Data Deletion Instructions | Living Culture Health" },
      { name: "description", content: "How to request deletion of data associated with your Facebook login or interactions with Living Culture Health." },
      { property: "og:title", content: "Facebook Data Deletion Instructions" },
      { property: "og:description", content: "How to request deletion of your Facebook-related data." },
    ],
  }),
  component: FacebookDeletion,
});

function FacebookDeletion() {
  return (
    <LegalPage
      title="Facebook Data Deletion Instructions"
      intro="Placeholder instructions for requesting deletion of any data we hold that is linked to your Facebook account."
    >
      <Section heading="1. Remove the app from Facebook">
        <ul>
          <li>Open Facebook and go to Settings &amp; Privacy → Settings.</li>
          <li>Select Apps and Websites.</li>
          <li>Find Living Culture Health in the list and choose Remove.</li>
        </ul>
      </Section>
      <Section heading="2. Request deletion from us">
        <p>Email orders@proagrisa.co.za with the subject "Facebook Data Deletion" and include the name and email address linked to your Facebook account.</p>
      </Section>
      <Section heading="3. What happens next">
        <p>We confirm receipt within 5 business days and delete the associated data within 30 days, except records we are legally required to retain.</p>
      </Section>
      <Section heading="4. Questions">
        <p>Contact us at orders@proagrisa.co.za for help with any deletion request.</p>
      </Section>
    </LegalPage>
  );
}
