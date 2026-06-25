import Stripe from "stripe";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const sessionId = req.query?.session_id;
  if (!sessionId) return res.status(400).json({ error: "Missing session_id" });

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(200).json({ paid: false });
    }

    res.status(200).json({
      paid: true,
      themeId: session.metadata?.themeId || null,
      question: session.metadata?.question || "",
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
