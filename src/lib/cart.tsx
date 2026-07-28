import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "@/content/products";

export interface CartItem {
  sku: string;
  qty: number;
}

interface CartCtx {
  items: CartItem[];
  add: (sku: string, qty?: number) => void;
  remove: (sku: string) => void;
  setQty: (sku: string, qty: number) => void;
  clear: () => void;
  detailed: { product: Product; qty: number; lineTotal: number }[];
  count: number;
  subtotal: number;
}

const Ctx = createContext<CartCtx | null>(null);
const KEY = "lch-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* noop */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* noop */
    }
  }, [items, hydrated]);

  const value = useMemo<CartCtx>(() => {
    const detailed = items
      .map((it) => {
        const product = products.find((p) => p.sku === it.sku);
        if (!product) return null;
        const price = product.salePrice ?? product.price;
        return { product, qty: it.qty, lineTotal: price * it.qty };
      })
      .filter((v): v is { product: Product; qty: number; lineTotal: number } => v !== null);

    return {
      items,
      detailed,
      count: items.reduce((s, i) => s + i.qty, 0),
      subtotal: detailed.reduce((s, d) => s + d.lineTotal, 0),
      add: (sku, qty = 1) =>
        setItems((prev) => {
          const found = prev.find((p) => p.sku === sku);
          if (found) return prev.map((p) => (p.sku === sku ? { ...p, qty: p.qty + qty } : p));
          return [...prev, { sku, qty }];
        }),
      remove: (sku) => setItems((prev) => prev.filter((p) => p.sku !== sku)),
      setQty: (sku, qty) =>
        setItems((prev) =>
          qty <= 0 ? prev.filter((p) => p.sku !== sku) : prev.map((p) => (p.sku === sku ? { ...p, qty } : p)),
        ),
      clear: () => setItems([]),
    };
  }, [items]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
