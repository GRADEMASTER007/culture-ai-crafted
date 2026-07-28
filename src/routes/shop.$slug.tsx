import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Truck, ShieldCheck, Sparkles } from "lucide-react";
import { getProduct, getRelated } from "@/content/products";
import { ProductCard } from "@/components/site/ProductCard";
import { zar } from "@/lib/format";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const p = loaderData.product;
    return {
      meta: [
        { title: p.seoTitle },
        { name: "description", content: p.metaDescription },
        { name: "keywords", content: p.keywords.join(", ") },
        { property: "og:title", content: p.seoTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/shop/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/shop/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            sku: p.sku,
            description: p.longDescription,
            brand: { "@type": "Brand", name: p.brand },
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              price: p.salePrice ?? p.price,
              availability: p.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            },
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
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = getRelated(product.related);
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const price = product.salePrice ?? product.price;

  return (
    <article className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/shop" className="hover:text-primary">Shop</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card">
          <img src={product.image} alt={product.imageAlt} className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary">{product.brand}</div>
          <h1 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{product.shortDescription}</p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl text-primary">{zar(price)}</span>
            {product.salePrice && (
              <span className="text-lg text-muted-foreground line-through">{zar(product.price)}</span>
            )}
          </div>

          <button
            onClick={() => {
              add(product.sku, 1);
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }}
            disabled={!product.inStock}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary-glow disabled:opacity-40 sm:w-auto"
          >
            {added ? "Added ✓" : product.inStock ? "Add to cart" : "Out of stock"}
          </button>

          <div className="mt-8 grid gap-3 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Truck className="h-4 w-4 text-primary" /> {product.shippingInfo}
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" /> Live-culture guarantee — arrives active or replaced.
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" /> SKU: {product.sku}
            </div>
          </div>

          <div className="mt-10 space-y-4 text-foreground">
            <h2 className="font-display text-2xl">About this culture</h2>
            <p className="text-muted-foreground">{product.longDescription}</p>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl text-foreground">Frequently asked</h2>
            <div className="mt-4 divide-y divide-border">
              {product.faq.map((f: { q: string; a: string }) => (
                <details key={f.q} className="group py-3">
                  <summary className="cursor-pointer list-none font-medium text-foreground marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="font-display text-3xl text-foreground">You may also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.sku} product={p} />)}
          </div>
        </div>
      )}
    </article>
  );
}
