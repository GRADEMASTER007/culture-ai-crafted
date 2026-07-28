import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChatWidget } from "@/components/site/ChatWidget";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Living Culture Health",
  url: "/",
  description:
    "Premium South African live cultures and fermentation supplies — water kefir, milk kefir, kombucha SCOBYs and more.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  areaServed: ["ZA", "Africa"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Living Culture Health",
  url: "/",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Living Culture Health | Premium Fermented Cultures South Africa" },
      {
        name: "description",
        content:
          "Premium live fermented cultures from South Africa — water kefir, milk kefir, kombucha SCOBYs, sourdough starters and more. Nationwide delivery.",
      },
      { name: "author", content: "Living Culture Health" },
      { name: "geo.region", content: "ZA" },
      { name: "geo.placename", content: "South Africa" },
      { property: "og:site_name", content: "Living Culture Health" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Living Culture Health" },
      {
        property: "og:description",
        content:
          "Premium live fermented cultures from South Africa. Kefir, kombucha, sourdough & more.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#2d4a3a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd) },
      {
        children: `(function(){try{var h=location.hostname;var isLC=h.indexOf('livingculturehealth')!==-1;var GTM=isLC?'GTM-NMHN6F7P':'GTM-PJ4S224L';var GA=isLC?'G-D4NQCVMS98':'G-V0DEMTMBEZ';(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',GTM);var ga=document.createElement('script');ga.async=true;ga.src='https://www.googletagmanager.com/gtag/js?id='+GA;document.head.appendChild(ga);window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',GA);window.__GTM_ID__=GTM;var n=document.createElement('noscript');var i=document.createElement('iframe');i.src='https://www.googletagmanager.com/ns.html?id='+GTM;i.height='0';i.width='0';i.style.display='none';i.style.visibility='hidden';n.appendChild(i);document.body.insertBefore(n,document.body.firstChild);}catch(e){}})();`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ChatWidget />
      </CartProvider>
    </QueryClientProvider>
  );
}
