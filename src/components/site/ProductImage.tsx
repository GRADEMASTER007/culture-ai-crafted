import type { Product } from "@/content/products";

const gradients = [
  "from-primary/20 via-primary/10 to-accent/20",
  "from-accent/25 via-primary/10 to-primary/20",
  "from-secondary/40 via-accent/15 to-primary/15",
  "from-primary/15 via-accent/20 to-secondary/30",
];

function pick(seed: string) {
  let n = 0;
  for (let i = 0; i < seed.length; i++) n = (n + seed.charCodeAt(i)) % gradients.length;
  return gradients[n];
}

export function ProductImage({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.imageAlt}
        loading="lazy"
        className={className || "h-full w-full object-cover"}
      />
    );
  }
  const initial = product.name.trim().charAt(0).toUpperCase();
  const grad = pick(product.slug);
  return (
    <div
      role="img"
      aria-label={product.imageAlt}
      className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${grad} ${className}`}
    >
      <span className="font-display text-6xl text-primary/60">{initial}</span>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-primary/50">
        Living Culture
      </span>
    </div>
  );
}
