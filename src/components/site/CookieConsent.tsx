import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "lch-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const dismiss = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-md"
    >
      <div className="relative rounded-2xl border border-border/60 bg-card p-5 shadow-xl">
        <button
          onClick={() => dismiss("declined")}
          aria-label="Dismiss cookie notice"
          className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Cookie className="h-4 w-4" />
          </div>
          <div className="pr-4">
            <h2 className="font-display text-lg text-foreground">We use cookies</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Cookies keep your cart working and help us understand how the store is used. Read our{" "}
              <Link to="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => dismiss("accepted")}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Accept
          </button>
          <button
            onClick={() => dismiss("declined")}
            className="rounded-full border border-input bg-background px-5 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
