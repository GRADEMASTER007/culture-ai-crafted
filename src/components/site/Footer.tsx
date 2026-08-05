import { Link } from "@tanstack/react-router";

const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/community-guidelines", label: "Community Guidelines" },
  { to: "/copyright", label: "Copyright Policy" },
  { to: "/facebook-data-deletion", label: "Facebook Data Deletion" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="font-display text-2xl">Living Culture Health</div>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/80">
            Premium live cultures & fermentation supplies from South Africa. Shipped nationwide across Africa and beyond.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/shop" className="hover:text-accent">All products</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Kefir cultures</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Kombucha</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Fermentation starters</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg">Learn</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/blog" className="hover:text-accent">Fermentation blog</Link></li>
            <li><Link to="/about" className="hover:text-accent">Our story</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <div>© {new Date().getFullYear()} Living Culture Health. All rights reserved.</div>
            <div className="mt-1">
              <a href="mailto:orders@proagrisa.co.za" className="hover:text-accent">orders@proagrisa.co.za</a> · South Africa
            </div>
          </div>
          <div>Made with living cultures in South Africa.</div>
        </div>
      </div>
    </footer>
  );
}
