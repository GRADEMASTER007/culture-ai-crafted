import { createFileRoute } from "@tanstack/react-router";
import { Leaf, HeartHandshake, MapPin } from "lucide-react";
import img from "@/assets/kombucha.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Living Culture Health" },
      {
        name: "description",
        content:
          "Living Culture Health is a South African family of fermenters dedicated to premium live cultures and traditional wellness.",
      },
      { property: "og:title", content: "About — Living Culture Health" },
      { property: "og:description", content: "South African premium fermentation culture specialists." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Our story</div>
          <h1 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">
            Rooted in Africa, alive with tradition.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Living Culture Health began in a small home kitchen with a single jar of kefir and a belief that
            traditional fermentation belongs in every home.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-3xl">
          <img src={img} alt="Kombucha fermenting in a jar" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl text-foreground">The living culture philosophy</h2>
          <p className="mt-4 text-muted-foreground">
            Every strain we cultivate is heritage — passed hand to hand, jar to jar, generation to generation. We
            believe living foods should be affordable, accessible and produced with care for people and place.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Leaf, t: "Small batch, always live", b: "We ship cultures the day we pack them." },
              { icon: HeartHandshake, t: "Support first", b: "Every order includes brewing guidance and after-care." },
              { icon: MapPin, t: "Proudly South African", b: "Sourced, cultured and dispatched from South Africa." },
            ].map((p) => (
              <div key={p.t} className="flex gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{p.t}</div>
                  <div className="text-sm text-muted-foreground">{p.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
