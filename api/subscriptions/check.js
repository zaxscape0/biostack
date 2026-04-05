const { supabase, cors } = require('../_lib/supabase');

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const email = req.query.email;
    if (!email) return res.status(200).json({ active: false });

    const { data, error } = await supabase
      .from('biostack_subscriptions')
      .select('active')
      .eq('email', email)
      .eq('active', true)
      .limit(1)
      .single();

    return res.status(200).json({ active: !!(data && data.active) });
  } catch (err) {
    return res.status(200).json({ active: false });
  }
};
