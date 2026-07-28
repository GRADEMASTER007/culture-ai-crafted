import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/content/products";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

function catalogSummary() {
  return products
    .map(
      (p) =>
        `- ${p.name} (${p.slug}) — R${p.salePrice ?? p.price} — ${p.shortDescription}`,
    )
    .join("\n");
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: ChatMessage[] };
        if (!Array.isArray(messages)) return new Response("Bad request", { status: 400 });

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const system: ChatMessage = {
          role: "system",
          content: `You are the Living Culture AI Assistant for Living Culture Health, a premium South African fermented foods and live culture company. Answer questions about fermentation, gut health, kefir, kombucha, sourdough, and how to brew and care for cultures. Be warm, concise, and knowledgeable.

STRICT RULE: When recommending products, ONLY recommend items from the catalog below. Never invent products, prices, or SKUs. Prices are in South African Rand (ZAR).

CATALOG:
${catalogSummary()}

If asked about shipping: nationwide across South Africa, 2–4 working days in insulated packaging. International shipping available on request.
If asked about payment: we accept Yoco, PayFast and PayPal.
If unsure, tell the user to email hello@livingculturehealth.co.za.`,
        };

        const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
          body: JSON.stringify({
            model: "openai/gpt-5.6-sol",
            reasoning_effort: "none",
            messages: [system, ...messages].slice(-20),
          }),
        });

        if (!res.ok) {
          const errBody = await res.text();
          return new Response(errBody, { status: res.status });
        }
        const data = (await res.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a reply.";
        return Response.json({ reply });
      },
    },
  },
});
