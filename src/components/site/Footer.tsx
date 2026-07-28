import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="font-display text-2xl">Living Culture Health</div>
          <p className="mt-3 text-sm text-primary-foreground/80">
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
          <h4 className="font-display text-lg">Contact</h4>
          <address className="mt-3 space-y-2 text-sm not-italic text-primary-foreground/80">
            <div>South Africa</div>
            <div>hello@livingculturehealth.co.za</div>
            <div>+27 (0) 00 000 0000</div>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} Living Culture Health. All rights reserved.</div>
          <div>Made with living cultures in South Africa.</div>
        </div>
      </div>
    </footer>
  );
}
