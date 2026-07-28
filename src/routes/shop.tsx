import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories, type Category } from "@/content/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Live Cultures | Living Culture Health" },
      {
        name: "description",
        content:
          "Browse our full range of premium live fermented cultures — water kefir, milk kefir, kombucha SCOBYs, sourdough starters and more. Ships across South Africa.",
      },
      { property: "og:title", content: "Shop Live Cultures — Living Culture Health" },
      { property: "og:description", content: "Premium South African fermentation supplies." },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  const [active, setActive] = useState<Category | "all">("all");
  const list = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Shop</div>
        <h1 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Live cultures & starters</h1>
        <p className="mt-4 text-muted-foreground">
          Every culture is hand-fed and freshly packed the day it ships.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full border px-4 py-2 text-sm transition ${
            active === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground hover:border-primary/50"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === c.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary/50"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <ProductCard key={p.sku} product={p} />)}
      </div>
    </section>
  );
}
