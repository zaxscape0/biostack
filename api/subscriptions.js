const { supabase, cors } = require('./_lib/supabase');

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email, plan } = req.body;

    if (!email) return res.status(400).json({ error: 'Email required' });

    const { error } = await supabase
      .from('biostack_subscriptions')
      .insert({ email, plan: plan || 'monthly', active: true });

    if (error) {
      console.error('Subscription error:', error);
      return res.status(500).json({ error: 'Failed to create subscription' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscription error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
