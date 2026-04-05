const { supabase, cors } = require('./_lib/supabase');

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email, assessmentId, source } = req.body;

    if (!email) return res.status(400).json({ error: 'Email required' });

    // Upsert subscriber
    const { error } = await supabase
      .from('biostack_subscribers')
      .upsert(
        { email, assessment_id: assessmentId || null, source: source || 'unknown' },
        { onConflict: 'email', ignoreDuplicates: true }
      );

    if (error) {
      // If upsert fails due to no unique constraint, just insert
      await supabase.from('biostack_subscribers').insert({
        email,
        assessment_id: assessmentId || null,
        source: source || 'unknown',
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
