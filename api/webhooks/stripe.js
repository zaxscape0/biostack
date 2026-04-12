const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { supabase, cors } = require('../_lib/supabase');

// Vercel: disable body parsing for raw body access
module.exports.config = { api: { bodyParser: false } };

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const sig = req.headers['stripe-signature'];
  const rawBody = await getRawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.BIOSTACK_STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_email || session.metadata?.email;

    if (email) {
      const { error } = await supabase
        .from('biostack_subscriptions')
        .upsert({ email, plan: 'lifetime', active: true, stripe_session_id: session.id }, { onConflict: 'email' });

      if (error) console.error('Supabase upsert error:', error);
    }
  }

  return res.status(200).json({ received: true });
};
