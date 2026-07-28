import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sparkles, Shield, Globe2, Star } from "lucide-react";
import heroImg from "@/assets/hero-kefir.jpg";
import { getFeatured } from "@/content/products";
import { posts } from "@/content/posts";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Living Culture Health | Premium Fermented Cultures South Africa" },
      {
        name: "description",
        content:
          "Live kefir grains, kombucha SCOBYs and heritage fermentation starters — crafted in South Africa, shipped across Africa.",
      },
      { property: "og:title", content: "Living Culture Health" },
      {
        property: "og:description",
        content: "Premium live cultures. Natural wellness. African fermentation excellence.",
      },
    ],
  }),
  component: Home,
});

const testimonials = [
  {
    name: "Thandi M., Cape Town",
    text: "My water kefir grains from Living Culture arrived healthy and thriving. Best cultures I've bought in SA.",
  },
  {
    name: "Andrew K., Johannesburg",
    text: "The kombucha SCOBY produced an incredible first brew. Packaging and instructions were top tier.",
  },
  {
    name: "Nomvula S., Durban",
    text: "Their sourdough starter has completely changed my baking. Reliable, active and full of flavour.",
  },
];

function Home() {
  const featured = getFeatured();
  return (
    <>
      {/* HERO */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur">
              <Leaf className="h-3.5 w-3.5" /> Live fermented cultures · South Africa
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground text-balance sm:text-6xl lg:text-7xl">
              Live cultures.<br />
              <span className="text-primary">Natural wellness.</span><br />
              <span className="italic text-accent-foreground">African fermentation excellence.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground text-balance">
              Small-batch water kefir, milk kefir, kombucha SCOBYs and heritage starters — nurtured in South Africa
              and shipped nationwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary-glow"
              >
                Buy Live Cultures <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-background"
              >
                Learn About Fermentation
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card overflow-hidden rounded-3xl">
              <img
                src={heroImg}
                alt="Water kefir grains fermenting in golden light"
                width={1920}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-2xl glass-card p-4 md:block">
              <div className="flex items-center gap-2 text-amber-ink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm text-foreground">
                "Alive, active and beautifully packaged — a joy to receive."
              </p>
              <p className="mt-1 text-xs text-muted-foreground">— Verified customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">Why Living Culture Health</h2>
          <p className="mt-4 text-muted-foreground">
            Every culture we ship is grown, fed and cared for like a member of the family.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, title: "100% Live Cultures", body: "Never pasteurised. Always active on arrival." },
            { icon: Leaf, title: "Natural Fermentation", body: "Traditional methods, small-batch care." },
            { icon: Shield, title: "Premium Quality", body: "Heritage strains, rigorously tested." },
            { icon: Globe2, title: "African Wellness", body: "Rooted in South Africa. Delivered continent-wide." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="border-y border-border/60 bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Shop</div>
              <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">Featured cultures</h2>
            </div>
            <Link to="/shop" className="text-sm font-medium text-primary hover:text-accent-foreground">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <ProductCard key={p.sku} product={p} />)}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Learn</div>
            <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
              What is fermentation?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fermentation is one of the oldest food-preservation techniques on earth. Beneficial microbes transform
              simple ingredients into complex, probiotic-rich foods that support digestion, immunity and wellbeing.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Kefir cultures milk or sugar water into a tangy, probiotic drink in 24–48 hours.",
                "Kombucha uses a SCOBY to ferment sweet tea into a sparkling tonic.",
                "Sourdough starters use wild yeast to leaven bread naturally.",
              ].map((l) => (
                <li key={l} className="flex gap-3 text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-foreground"
            >
              Read the fermentation guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featured.slice(0, 4).map((p) => (
              <div key={p.sku} className="overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-4xl sm:text-5xl">Loved across South Africa</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-primary-foreground/5 p-6 backdrop-blur">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-primary-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-4 text-sm text-primary-foreground/70">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Journal</div>
            <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">From the blog</h2>
          </div>
          <Link to="/blog" className="text-sm font-medium text-primary hover:text-accent-foreground">
            All articles →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{p.readingTime}</div>
                <h3 className="mt-2 font-display text-xl text-foreground">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-10 text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Join the culture</h2>
          <p className="mt-2 text-muted-foreground">
            Fermentation tips, new products and early access — straight to your inbox.
          </p>
          <form
            className="mx-auto mt-6 flex max-w-md gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch soon!");
            }}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
