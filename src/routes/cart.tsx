import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { zar } from "@/lib/format";
import { ProductImage } from "@/components/site/ProductImage";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Living Culture Health" },
      { name: "description", content: "Review your live cultures before checkout." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { detailed, subtotal, setQty, remove } = useCart();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-foreground sm:text-5xl">Your cart</h1>

      {detailed.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-12 text-center">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow"
          >
            Browse cultures
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <ul className="divide-y divide-border rounded-2xl border border-border/60 bg-card">
            {detailed.map(({ product, qty, lineTotal }) => (
              <li key={product.sku} className="flex gap-4 p-4">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl"><ProductImage product={product} /></div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <Link to="/shop/$slug" params={{ slug: product.slug }} className="font-display text-lg text-foreground hover:text-primary">
                      {product.name}
                    </Link>
                    <button onClick={() => remove(product.sku)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-xs text-muted-foreground">SKU {product.sku}</div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center gap-1 rounded-full border border-border">
                      <button onClick={() => setQty(product.sku, qty - 1)} className="grid h-8 w-8 place-items-center hover:text-primary" aria-label="Decrease">
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-[2ch] text-center text-sm">{qty}</span>
                      <button onClick={() => setQty(product.sku, qty + 1)} className="grid h-8 w-8 place-items-center hover:text-primary" aria-label="Increase">
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="font-display text-lg text-primary">{zar(lineTotal)}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="font-display text-2xl text-foreground">Order summary</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span><span>{zar(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span><span>Calculated at checkout</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg">
              <span className="font-medium text-foreground">Total</span>
              <span className="font-display text-2xl text-primary">{zar(subtotal)}</span>
            </div>
            <Link
              to="/checkout"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow"
            >
              Proceed to checkout
            </Link>
            <Link to="/shop" className="mt-3 block text-center text-sm text-muted-foreground hover:text-primary">
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
