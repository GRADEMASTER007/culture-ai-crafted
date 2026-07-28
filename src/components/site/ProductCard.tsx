import { Link } from "@tanstack/react-router";
import type { Product } from "@/content/products";
import { zar } from "@/lib/format";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const price = product.salePrice ?? product.price;
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <ProductImage
          product={product}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{product.brand}</div>
        <h3 className="font-display text-xl leading-tight text-foreground">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.shortDescription}</p>
        <div className="mt-auto flex items-baseline justify-between pt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-primary">{zar(price)}</span>
            {product.salePrice && (
              <span className="text-sm text-muted-foreground line-through">{zar(product.price)}</span>
            )}
          </div>
          <span className="text-sm font-medium text-accent-foreground/80 group-hover:text-accent-foreground">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
