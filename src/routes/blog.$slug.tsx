import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { getPost } from "@/content/posts";
import { getRelated } from "@/content/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const p = loaderData.post;
    return {
      meta: [
        { title: p.seoTitle },
        { name: "description", content: p.metaDescription },
        { name: "keywords", content: p.keywords.join(", ") },
        { property: "og:title", content: p.seoTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            image: [p.image],
            datePublished: p.date,
            author: { "@type": "Organization", name: p.author },
            publisher: { "@type": "Organization", name: "Living Culture Health" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: Post,
});

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 font-display text-3xl text-foreground">
          {block.slice(3)}
        </h2>
      );
    }
    return (
      <p key={i} className="mt-4 leading-relaxed text-foreground/90">
        {block}
      </p>
    );
  });
}

function Post() {
  const { post } = Route.useLoaderData();
  const related = getRelated(post.relatedProducts);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="flex items-center gap-1 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/blog" className="hover:text-primary">Blog</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{post.title}</span>
      </nav>

      <header className="mt-6">
        <div className="text-xs text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })} · {post.readingTime}
        </div>
        <h1 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      </header>

      <div className="mt-8 overflow-hidden rounded-2xl">
        <img src={post.image} alt={post.imageAlt} loading="lazy" className="h-full w-full object-cover" />
      </div>

      <div className="mt-8">{renderBody(post.body)}</div>

      <section className="mt-14 rounded-2xl border border-border/60 bg-card p-6">
        <h2 className="font-display text-2xl text-foreground">FAQ</h2>
        <div className="mt-4 divide-y divide-border">
          {post.faq.map((f: { q: string; a: string }) => (
            <details key={f.q} className="py-3">
              <summary className="cursor-pointer font-medium text-foreground marker:hidden">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-2xl text-foreground">Related products</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((p) => <ProductCard key={p.sku} product={p} />)}
          </div>
        </section>
      )}
    </article>
  );
}
