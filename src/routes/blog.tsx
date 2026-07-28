import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/content/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Fermentation Blog | Living Culture Health" },
      {
        name: "description",
        content:
          "Guides, science and stories about fermentation — kefir, kombucha, sourdough and gut health from South Africa's premium culture specialists.",
      },
      { property: "og:title", content: "Fermentation Blog — Living Culture Health" },
      { property: "og:description", content: "Guides on kefir, kombucha, sourdough & gut health." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Journal</div>
        <h1 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Fermentation stories</h1>
        <p className="mt-4 text-muted-foreground">
          Everything you need to brew, care for, and understand your live cultures.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })} · {p.readingTime}
              </div>
              <h2 className="mt-2 font-display text-2xl text-foreground">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <span className="mt-4 text-sm font-medium text-primary">Read article →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
