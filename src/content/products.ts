import waterKefirImg from "@/assets/hero-kefir.jpg";
import milkKefirImg from "@/assets/milk-kefir.jpg";
import kombuchaImg from "@/assets/kombucha.jpg";
import acvImg from "@/assets/acv.jpg";
import sourdoughImg from "@/assets/sourdough.jpg";
import gingerBugImg from "@/assets/ginger-bug.jpg";

export type Category =
  | "kefir-cultures"
  | "kombucha"
  | "fermentation-starters"
  | "culture-feeding";

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface Product {
  sku: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;      // ZAR
  salePrice?: number;
  inStock: boolean;
  category: Category;
  brand: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  faq: ProductFAQ[];
  shippingInfo: string;
  related: string[]; // slugs
  featured?: boolean;
}

export const categories: { id: Category; name: string; description: string }[] = [
  { id: "kefir-cultures", name: "Kefir Cultures", description: "Live water & milk kefir grains" },
  { id: "kombucha", name: "Kombucha", description: "SCOBYs and starter tea" },
  { id: "fermentation-starters", name: "Fermentation Starters", description: "Ginger bug, sourdough, ACV mother" },
  { id: "culture-feeding", name: "Culture Feeding", description: "Sugar mixes and culture food" },
];

export const products: Product[] = [
  {
    sku: "LCH-WKG-001",
    slug: "water-kefir-grains",
    name: "Premium Water Kefir Grains",
    shortDescription: "Live water kefir grains for brewing sparkling probiotic drinks at home.",
    longDescription:
      "Our premium water kefir grains are living, active cultures nurtured in South Africa under carefully controlled conditions. Each batch produces a lightly effervescent, naturally probiotic beverage from sugar water — a caffeine-free, dairy-free alternative to sodas that supports gut health. Grains arrive hydrated and ready to brew, with a full guide included.",
    price: 220,
    inStock: true,
    category: "kefir-cultures",
    brand: "Living Culture Health",
    seoTitle: "Premium Water Kefir Grains South Africa | Living Culture Health",
    metaDescription:
      "Buy live water kefir grains in South Africa. Premium fermentation cultures delivered nationwide. Start making natural probiotic kefir at home.",
    keywords: [
      "water kefir South Africa",
      "live kefir grains",
      "probiotic cultures",
      "fermentation starter",
      "healthy gut foods",
      "natural probiotics",
    ],
    image: waterKefirImg,
    imageAlt: "Translucent water kefir grains in a glass jar with golden sunlight",
    faq: [
      {
        q: "How much sugar water do I need?",
        a: "Roughly 1 litre of filtered water with 4–6 tablespoons of raw cane sugar per 3–4 tablespoons of grains.",
      },
      {
        q: "How long do the grains last?",
        a: "Well cared for, water kefir grains multiply and last indefinitely — you'll have grains to share within weeks.",
      },
    ],
    shippingInfo: "Ships nationwide across South Africa in insulated packaging. 2–4 working days.",
    related: ["milk-kefir-grains", "kombucha-scoby", "kefir-sugar-mix"],
    featured: true,
  },
  {
    sku: "LCH-MKG-002",
    slug: "milk-kefir-grains",
    name: "Live Milk Kefir Grains",
    shortDescription: "Traditional milk kefir grains for tangy, creamy probiotic kefir.",
    longDescription:
      "Cauliflower-like clusters of beneficial bacteria and yeasts that transform fresh milk into a rich, tangy probiotic beverage in 24 hours. Our grains are traditionally cultured and thrive on cow, goat or coconut milk.",
    price: 240,
    inStock: true,
    category: "kefir-cultures",
    brand: "Living Culture Health",
    seoTitle: "Live Milk Kefir Grains South Africa | Living Culture Health",
    metaDescription:
      "Traditional live milk kefir grains delivered across South Africa. Make creamy, probiotic-rich kefir at home from any milk.",
    keywords: ["milk kefir grains", "traditional kefir", "probiotic milk", "South Africa fermentation"],
    image: milkKefirImg,
    imageAlt: "Milk kefir grains in a white ceramic bowl on cream linen",
    faq: [
      { q: "Can I use plant milk?", a: "Occasionally, but grains stay healthiest fed on lactose-containing dairy milk." },
      { q: "Do they need refrigeration?", a: "Room temperature during brewing; refrigerate briefly to slow fermentation." },
    ],
    shippingInfo: "Insulated nationwide delivery. 2–4 working days.",
    related: ["water-kefir-grains", "sourdough-starter"],
    featured: true,
  },
  {
    sku: "LCH-KOM-003",
    slug: "kombucha-scoby",
    name: "Kombucha SCOBY with Starter Tea",
    shortDescription: "A robust live SCOBY and 250ml of mature starter tea.",
    longDescription:
      "A healthy, well-fed kombucha mother (SCOBY) with 250ml of strong starter tea — everything you need to begin brewing kombucha at home. Our SCOBYs are grown in small batches from organic black tea and raw cane sugar.",
    price: 260,
    inStock: true,
    category: "kombucha",
    brand: "Living Culture Health",
    seoTitle: "Kombucha SCOBY South Africa | Live Culture with Starter Tea",
    metaDescription:
      "Buy a live kombucha SCOBY with strong starter tea. Delivered across South Africa. Begin brewing kombucha at home today.",
    keywords: ["kombucha SCOBY", "kombucha South Africa", "live kombucha culture", "kombucha starter"],
    image: kombuchaImg,
    imageAlt: "Kombucha SCOBY floating in amber tea in a glass jar with lemon and ginger",
    faq: [
      { q: "How much tea does this brew?", a: "Enough starter for a 1.5–2 litre first brew." },
      { q: "Do I need a special vessel?", a: "A clean glass jar and breathable cloth cover are all you need." },
    ],
    shippingInfo: "Ships nationwide. Keep SCOBY at room temperature on arrival.",
    related: ["water-kefir-grains", "kombucha-sugar-mix", "ginger-bug-starter"],
    featured: true,
  },
  {
    sku: "LCH-GBS-004",
    slug: "ginger-bug-starter",
    name: "Ginger Bug Starter",
    shortDescription: "A wild-fermented ginger starter for natural sodas and tonics.",
    longDescription:
      "A traditional ginger bug is the base for wild-fermented sodas, tonics and old-fashioned ginger beer. Our starter arrives active and ready to feed — a lively colony of beneficial wild yeasts and bacteria.",
    price: 180,
    inStock: true,
    category: "fermentation-starters",
    brand: "Living Culture Health",
    seoTitle: "Ginger Bug Starter South Africa | Wild Fermentation",
    metaDescription:
      "Live ginger bug starter for wild fermented sodas and tonics. Delivered nationwide across South Africa.",
    keywords: ["ginger bug", "wild fermentation", "natural soda starter", "ginger beer culture"],
    image: gingerBugImg,
    imageAlt: "Ginger bug fermentation starter in a mason jar with fresh ginger and raw sugar",
    faq: [
      { q: "How do I feed it?", a: "One tablespoon of grated ginger and one tablespoon of raw sugar daily." },
      { q: "Is it alcoholic?", a: "Trace amounts only — below 0.5% ABV in most home brews." },
    ],
    shippingInfo: "Nationwide delivery in South Africa. 2–4 working days.",
    related: ["kombucha-scoby", "apple-cider-vinegar-mother"],
    featured: true,
  },
  {
    sku: "LCH-ACV-005",
    slug: "apple-cider-vinegar-mother",
    name: "Apple Cider Vinegar Mother",
    shortDescription: "Raw, live vinegar mother for making unfiltered apple cider vinegar.",
    longDescription:
      "A vibrant vinegar mother from a heritage strain, ideal for turning apple juice or fresh apple scraps into raw, unfiltered apple cider vinegar rich in beneficial acids and enzymes.",
    price: 200,
    inStock: true,
    category: "fermentation-starters",
    brand: "Living Culture Health",
    seoTitle: "Apple Cider Vinegar Mother South Africa | Raw Live Culture",
    metaDescription:
      "Buy a raw apple cider vinegar mother in South Africa. Ferment your own raw ACV at home with our live heritage culture.",
    keywords: ["ACV mother", "apple cider vinegar culture", "raw vinegar", "South Africa fermentation"],
    image: acvImg,
    imageAlt: "Amber apple cider vinegar mother in a glass jar beside fresh apples and cinnamon",
    faq: [
      { q: "How long does a batch take?", a: "3–6 weeks depending on temperature and starting sugar content." },
      { q: "Can I reuse the mother?", a: "Yes — it grows with every batch and can be split." },
    ],
    shippingInfo: "Nationwide delivery in South Africa. 2–4 working days.",
    related: ["ginger-bug-starter", "sourdough-starter"],
  },
  {
    sku: "LCH-SDS-006",
    slug: "sourdough-starter",
    name: "Heritage Sourdough Starter",
    shortDescription: "A robust wild-yeast sourdough starter, active and ready to bake.",
    longDescription:
      "Our heritage sourdough starter has been maintained for years on organic stoneground flour. It produces open-crumbed, deeply flavoured loaves and is forgiving for new bakers.",
    price: 160,
    inStock: true,
    category: "fermentation-starters",
    brand: "Living Culture Health",
    seoTitle: "Sourdough Starter South Africa | Heritage Wild Yeast",
    metaDescription:
      "Buy a live heritage sourdough starter online in South Africa. Active wild yeast, delivered nationwide.",
    keywords: ["sourdough starter", "wild yeast", "sourdough South Africa", "bread starter"],
    image: sourdoughImg,
    imageAlt: "Active sourdough starter in a mason jar beside a crusty sourdough loaf",
    faq: [
      { q: "What flour should I feed it?", a: "Stoneground bread flour or a rye-white blend works best." },
      { q: "Is it gluten free?", a: "No — this starter is wheat-based." },
    ],
    shippingInfo: "Nationwide delivery. Ships dormant and easily revived in 24 hours.",
    related: ["milk-kefir-grains", "apple-cider-vinegar-mother"],
  },
  {
    sku: "LCH-KSM-007",
    slug: "kefir-sugar-mix",
    name: "Water Kefir Feeding Mix",
    shortDescription: "Mineral-rich raw sugar blend for feeding water kefir grains.",
    longDescription:
      "A hand-blended mix of raw cane sugar and unrefined mineral sugars formulated specifically to keep water kefir grains thriving. 500g pouch — enough for approximately 20 litres of brew.",
    price: 120,
    inStock: true,
    category: "culture-feeding",
    brand: "Living Culture Health",
    seoTitle: "Water Kefir Sugar Feeding Mix | Living Culture Health",
    metaDescription:
      "Mineral-rich raw sugar blend to feed your water kefir grains. Ships across South Africa.",
    keywords: ["kefir sugar", "water kefir feeding", "raw cane sugar", "mineral sugar"],
    image: waterKefirImg,
    imageAlt: "Raw cane sugar blend for feeding water kefir grains",
    faq: [{ q: "Can I use white sugar?", a: "You can, but grains stay strongest on our mineral blend." }],
    shippingInfo: "Nationwide delivery. Dry goods ship in 1–3 working days.",
    related: ["water-kefir-grains", "kombucha-sugar-mix"],
  },
  {
    sku: "LCH-KBS-008",
    slug: "kombucha-sugar-mix",
    name: "Kombucha Feeding Mix",
    shortDescription: "Organic sugar & black tea blend for consistent kombucha brews.",
    longDescription:
      "A pre-portioned mix of organic black tea and raw cane sugar — ideal ratios for consistent, tangy kombucha every batch. 500g pack brews approximately 15 litres.",
    price: 130,
    inStock: true,
    category: "culture-feeding",
    brand: "Living Culture Health",
    seoTitle: "Kombucha Tea & Sugar Feeding Mix | Living Culture Health",
    metaDescription:
      "Pre-portioned organic tea and sugar blend for brewing kombucha. Delivered across South Africa.",
    keywords: ["kombucha sugar", "kombucha tea", "brewing supplies", "fermentation"],
    image: kombuchaImg,
    imageAlt: "Organic black tea and raw cane sugar blend for kombucha brewing",
    faq: [{ q: "Which tea is best?", a: "Our blend uses organic Ceylon and Assam for a balanced brew." }],
    shippingInfo: "Ships nationwide in 1–3 working days.",
    related: ["kombucha-scoby", "kefir-sugar-mix"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelated(slugs: string[]) {
  return products.filter((p) => slugs.includes(p.slug));
}

export function getFeatured() {
  return products.filter((p) => p.featured);
}

export function byCategory(cat: Category) {
  return products.filter((p) => p.category === cat);
}
