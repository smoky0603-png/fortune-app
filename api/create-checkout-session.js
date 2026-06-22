import Stripe from "stripe";

const PRICES = {
  love: 500,
  work: 500,
  general: 1000,
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { themeId, themeTitle, question } = req.body || {};
  const amount = PRICES[themeId];
  if (!amount) return res.status(400).json({ error: "Invalid theme" });

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = req.headers.origin || "https://" + req.headers.host;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: { name: "タロット占い - " + (themeTitle || themeId) },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        themeId,
        question: (question || "").slice(0, 480),
      },
      success_url: origin + "/?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: origin + "/",
    });

    res.status(200).json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
