import type { ReactNode } from "react";

export function LegalPage({
  title,
  intro,
  updated = "5 August 2026",
  children,
}: {
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Legal</div>
      <h1 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
      <div className="mt-10 space-y-8 text-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_li]:text-muted-foreground [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
      <p className="mt-12 rounded-2xl border border-border/60 bg-secondary/40 p-5 text-sm text-muted-foreground">
        Placeholder content. Questions? Email{" "}
        <a className="text-primary hover:underline" href="mailto:orders@proagrisa.co.za">
          orders@proagrisa.co.za
        </a>
        .
      </p>
    </article>
  );
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2>{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
