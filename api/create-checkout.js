const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { cors } = require('./_lib/supabase');

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      line_items: [{ price: 'price_1TLXPXH13TBMWbWrzysOBDe1', quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://trybiostack.com'}/?payment=success&email=${encodeURIComponent(email)}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://trybiostack.com'}/?payment=cancelled`,
      metadata: { email },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Checkout error:', err);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
};
