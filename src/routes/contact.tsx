import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Living Culture Health" },
      {
        name: "description",
        content:
          "Get in touch with Living Culture Health — questions about our cultures, orders, wholesale or fermentation advice.",
      },
      { property: "og:title", content: "Contact — Living Culture Health" },
      { property: "og:description", content: "Reach our fermentation team in South Africa." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Contact</div>
        <h1 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Let's talk fermentation</h1>
        <p className="mt-4 text-muted-foreground">
          Questions, wholesale enquiries or brewing help — we'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-6">
          {[
            { icon: Mail, t: "Email", v: "hello@livingculturehealth.co.za" },
            { icon: Phone, t: "Phone", v: "+27 (0) 00 000 0000" },
            { icon: MapPin, t: "Based in", v: "South Africa · Shipping continent-wide" },
          ].map((c) => (
            <div key={c.t} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{c.t}</div>
                <div className="text-sm text-muted-foreground">{c.v}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="py-10 text-center">
              <div className="font-display text-2xl text-primary">Thank you</div>
              <p className="mt-2 text-muted-foreground">We'll get back to you within one working day.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Name</span>
                  <input required className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-primary" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-foreground">Email</span>
                  <input required type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-primary" />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="text-sm font-medium text-foreground">Subject</span>
                <input className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-primary" />
              </label>
              <label className="mt-4 block">
                <span className="text-sm font-medium text-foreground">Message</span>
                <textarea required rows={5} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 outline-none focus:border-primary" />
              </label>
              <button className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
