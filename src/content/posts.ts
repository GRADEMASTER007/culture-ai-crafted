import kombuchaImg from "@/assets/kombucha.jpg";
import kefirImg from "@/assets/hero-kefir.jpg";
import sourdoughImg from "@/assets/sourdough.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string; // markdown-lite (paragraphs & ##)
  author: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  faq: { q: string; a: string }[];
  relatedProducts: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "what-is-fermentation",
    title: "What is Fermentation? A Beginner's Guide",
    excerpt:
      "The ancient science behind kefir, kombucha and sourdough — and why living foods matter for modern gut health.",
    author: "Living Culture Health",
    date: "2026-06-10",
    readingTime: "5 min read",
    image: kefirImg,
    imageAlt: "Water kefir grains fermenting in sunlight",
    seoTitle: "What is Fermentation? Beginner's Guide | Living Culture Health",
    metaDescription:
      "Learn what fermentation is, how it works, and why traditional fermented foods like kefir and kombucha support gut health.",
    keywords: ["fermentation guide", "gut health", "probiotic foods", "fermentation basics"],
    body: `## The living science

Fermentation is one of the oldest food preservation techniques on earth. Beneficial microbes — bacteria, yeasts, and moulds — transform sugars and starches into acids, gases, and alcohol, producing complex flavours and living probiotic cultures.

## Why it matters

Traditional fermented foods deliver diverse, resilient probiotics that support digestion, immunity, and mental wellbeing. Every jar of kefir or kombucha is a small ecosystem of live cultures your gut microbiome can draw from.

## Where to begin

Start with water kefir grains or a kombucha SCOBY. Both are forgiving, quick to produce results, and give you a daily probiotic drink at a fraction of shop prices.`,
    faq: [
      { q: "Is fermented food safe?", a: "Yes — traditional ferments are among the safest foods on earth when made with clean equipment and healthy cultures." },
      { q: "How much should I drink?", a: "Start with 50–100ml daily and increase gradually as your gut adjusts." },
    ],
    relatedProducts: ["water-kefir-grains", "kombucha-scoby"],
  },
  {
    slug: "kombucha-health-benefits",
    title: "The Real Health Benefits of Kombucha",
    excerpt:
      "Beyond the hype: what research actually shows about kombucha's effects on gut health, energy and inflammation.",
    author: "Living Culture Health",
    date: "2026-06-24",
    readingTime: "6 min read",
    image: kombuchaImg,
    imageAlt: "Kombucha SCOBY floating in amber tea",
    seoTitle: "Real Health Benefits of Kombucha | Living Culture Health",
    metaDescription:
      "Research-backed benefits of kombucha for gut health, energy and inflammation. From South Africa's premium fermentation experts.",
    keywords: ["kombucha benefits", "gut health", "probiotic tea", "kombucha South Africa"],
    body: `## A living probiotic tea

Kombucha is fermented sweet tea, transformed by a SCOBY — a symbiotic culture of bacteria and yeasts — into a lightly effervescent, tangy drink rich in organic acids, live cultures and antioxidants.

## What the science shows

Emerging research links regular kombucha consumption to improved microbiome diversity, reduced systemic inflammation, and better blood-sugar response. It is not a miracle cure — it is a nutrient-dense addition to a whole-foods diet.

## Brewing at home

A single SCOBY can produce kombucha for years. Home brewing lets you control sugar levels, flavour with fresh African botanicals, and avoid the pasteurised, sugar-heavy commercial versions.`,
    faq: [
      { q: "Does kombucha contain caffeine?", a: "Yes, but far less than a cup of tea — most of the caffeine is metabolised by the SCOBY." },
      { q: "Is kombucha alcoholic?", a: "Home-brewed kombucha typically sits at 0.5–1% ABV — below legal alcohol thresholds." },
    ],
    relatedProducts: ["kombucha-scoby", "kombucha-sugar-mix"],
  },
  {
    slug: "caring-for-your-sourdough-starter",
    title: "Caring for Your Sourdough Starter",
    excerpt:
      "A simple, sustainable feeding routine to keep your sourdough starter thriving for decades.",
    author: "Living Culture Health",
    date: "2026-07-08",
    readingTime: "4 min read",
    image: sourdoughImg,
    imageAlt: "Active sourdough starter beside a fresh sourdough loaf",
    seoTitle: "How to Care for a Sourdough Starter | Living Culture Health",
    metaDescription:
      "A simple guide to feeding, storing and reviving your sourdough starter for consistently great bread.",
    keywords: ["sourdough starter care", "wild yeast", "sourdough baking", "starter feeding"],
    body: `## The rhythm of a starter

A healthy starter needs food, water, warmth — and a little patience. Feed daily at room temperature, or weekly in the fridge.

## Feeding ratios

We recommend 1:1:1 by weight — equal parts starter, flour, and water. This keeps acidity balanced and yeast vigorous.

## Reviving after a break

Even a neglected starter can bounce back. Discard most, feed twice a day for two or three days, and it will be ready to bake with again.`,
    faq: [
      { q: "Can I skip a day?", a: "At room temperature, feed daily. In the fridge, once a week is fine." },
      { q: "Why does my starter smell like acetone?", a: "It is hungry — feed it and it will recover within a day." },
    ],
    relatedProducts: ["sourdough-starter"],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
