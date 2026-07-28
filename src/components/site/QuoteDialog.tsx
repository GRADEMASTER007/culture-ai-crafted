import { useEffect, useRef, useState } from "react";
import { X, FileText, Send } from "lucide-react";
import { z } from "zod";
import { useCart } from "@/lib/cart";
import { zar } from "@/lib/format";

const QUOTE_EMAIL = "orders@proagrisa.co.za";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name required").max(60),
  lastName: z.string().trim().min(1, "Surname required").max(60),
  email: z.string().trim().email("Valid email required").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number required")
    .max(24)
    .regex(/^[+0-9 ()\-]+$/, "Digits, spaces, +, -, () only"),
  address: z.string().trim().min(6, "Delivery address required").max(400),
  products: z.string().trim().min(3, "List products / quantities").max(1500),
  shipping: z.enum(["pudo", "courier-guy"]),
  notes: z.string().trim().max(800).optional().or(z.literal("")),
});

const SHIPPING_LABEL: Record<"pudo" | "courier-guy", string> = {
  pudo: "PUDO Locker-to-Locker (R60, 2–4 working days)",
  "courier-guy": "The Courier Guy — Door-to-Door (R120, 1–3 working days)",
};

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

export function QuoteDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { detailed, subtotal } = useCart();
  const cartSummary = detailed
    .map((d) => `- ${d.qty} × ${d.product.name} (SKU ${d.product.sku}) — ${zar(d.lineTotal)}`)
    .join("\n");

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    products: cartSummary || "",
    shipping: "pudo",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && cartSummary && !form.products.trim()) {
      setForm((f) => ({ ...f, products: cartSummary }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    const d = parsed.data;
    const subject = `Quotation Request — ${d.firstName} ${d.lastName}`;
    const bodyLines = [
      "New quotation request from Living Culture Health website:",
      "",
      `Name:    ${d.firstName} ${d.lastName}`,
      `Email:   ${d.email}`,
      `Phone:   ${d.phone}`,
      `Address: ${d.address}`,
      "",
      "Products / quantities requested:",
      d.products,
      "",
      d.notes ? `Notes: ${d.notes}` : "",
      detailed.length ? `Current cart subtotal: ${zar(subtotal)}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines)}`;
    window.location.href = mailto;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        className="my-8 w-full max-w-2xl rounded-3xl border border-border/60 bg-background shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border/60 p-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <FileText className="h-4 w-4" /> Request a Quotation
            </div>
            <h2 id="quote-title" className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
              Get a personal quote for your order
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We'll send a manual quotation and invoice to your email — usually within one working day.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={submit} className="grid gap-4 p-6" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" error={errors.firstName}>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => set("firstName", e.target.value)}
                maxLength={60}
                autoComplete="given-name"
                className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </Field>
            <Field label="Surname" error={errors.lastName}>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => set("lastName", e.target.value)}
                maxLength={60}
                autoComplete="family-name"
                className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                maxLength={160}
                autoComplete="email"
                className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </Field>
            <Field label="Phone / WhatsApp" error={errors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                maxLength={24}
                autoComplete="tel"
                className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </Field>
          </div>

          <Field label="Delivery address" error={errors.address}>
            <textarea
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
              maxLength={400}
              rows={2}
              autoComplete="street-address"
              className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Street, suburb, city, postal code, province"
              required
            />
          </Field>

          <Field
            label="Products & quantities"
            error={errors.products}
            hint="List what you'd like quoted. Cart items are pre-filled if available."
          >
            <textarea
              value={form.products}
              onChange={(e) => set("products", e.target.value)}
              maxLength={1500}
              rows={5}
              className="w-full rounded-xl border border-border bg-card px-4 py-2.5 font-mono text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              required
            />
          </Field>

          <Field label="Additional notes (optional)" error={errors.notes}>
            <textarea
              value={form.notes ?? ""}
              onChange={(e) => set("notes", e.target.value)}
              maxLength={800}
              rows={2}
              className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Delivery date, business name, VAT number, etc."
            />
          </Field>

          <p className="text-xs text-muted-foreground">
            Submitting opens your email client and sends the request to{" "}
            <span className="font-semibold text-foreground">{QUOTE_EMAIL}</span>. We'll reply with a
            manual quotation and invoice.
          </p>

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Send className="h-4 w-4" /> Send quotation request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-foreground">{label}</span>
      {children}
      {hint && !error && <span className="text-xs text-muted-foreground">{hint}</span>}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}
