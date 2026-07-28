import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { zar } from "@/lib/format";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Living Culture Health" },
      { name: "description", content: "Complete your order of live fermented cultures." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const SHIPPING_METHODS = [
  {
    id: "pudo",
    name: "PUDO Locker-to-Locker",
    description: "Nationwide PUDO locker network — collect from any PUDO locker in SA.",
    eta: "2–4 working days",
    price: 60,
  },
  {
    id: "courier-guy",
    name: "The Courier Guy — Door-to-Door",
    description: "Insulated door-to-door courier delivery anywhere in South Africa.",
    eta: "1–3 working days",
    price: 120,
  },
] as const;

type ShippingId = (typeof SHIPPING_METHODS)[number]["id"];

function Checkout() {
  const { detailed, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const [shipping, setShipping] = useState<ShippingId>("pudo");
  const shippingMethod = SHIPPING_METHODS.find((m) => m.id === shipping)!;
  const total = subtotal + shippingMethod.price;

  if (placed) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <div className="font-display text-4xl text-primary">Order received</div>
        <p className="mt-4 text-muted-foreground">
          Thanks for supporting Living Culture Health. Payments (Yoco, PayFast, PayPal) will be enabled shortly — for now,
          we'll email you to arrange payment and shipping. A confirmation is on its way to your inbox.
        </p>
        <Link to="/shop" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
          Back to shop
        </Link>
      </section>
    );
  }

  if (detailed.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <p className="text-muted-foreground">Your cart is empty.</p>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
          Browse cultures
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl text-foreground sm:text-5xl">Checkout</h1>

      <form
        className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]"
        onSubmit={(e) => {
          e.preventDefault();
          clear();
          setPlaced(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="space-y-8">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="font-display text-2xl text-foreground">Contact</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input required placeholder="First name" className="rounded-lg border border-input bg-background px-3 py-2" />
              <input required placeholder="Last name" className="rounded-lg border border-input bg-background px-3 py-2" />
              <input required type="email" placeholder="Email" className="rounded-lg border border-input bg-background px-3 py-2 sm:col-span-2" />
              <input required placeholder="Phone" className="rounded-lg border border-input bg-background px-3 py-2 sm:col-span-2" />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="font-display text-2xl text-foreground">Shipping address</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input required placeholder="Street address" className="rounded-lg border border-input bg-background px-3 py-2 sm:col-span-2" />
              <input required placeholder="City" className="rounded-lg border border-input bg-background px-3 py-2" />
              <input required placeholder="Postal code" className="rounded-lg border border-input bg-background px-3 py-2" />
              <input required defaultValue="South Africa" placeholder="Country" className="rounded-lg border border-input bg-background px-3 py-2 sm:col-span-2" />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="font-display text-2xl text-foreground">Payment</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Yoco, PayFast and PayPal integrations are being finalised. Place your order and we'll email a secure
              payment link within one working day.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border px-3 py-1">Yoco</span>
              <span className="rounded-full border border-border px-3 py-1">PayFast</span>
              <span className="rounded-full border border-border px-3 py-1">PayPal</span>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-border/60 bg-card p-6">
          <h2 className="font-display text-2xl text-foreground">Order summary</h2>
          <ul className="mt-4 divide-y divide-border">
            {detailed.map(({ product, qty, lineTotal }) => (
              <li key={product.sku} className="flex justify-between gap-3 py-3 text-sm">
                <span className="text-foreground">{product.name} × {qty}</span>
                <span className="font-medium text-primary">{zar(lineTotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg">
            <span className="font-medium text-foreground">Total</span>
            <span className="font-display text-2xl text-primary">{zar(subtotal)}</span>
          </div>
          <button className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
            Place order
          </button>
        </aside>
      </form>
    </section>
  );
}
