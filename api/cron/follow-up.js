const { supabase } = require('../_lib/supabase');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY || 're_eqGs12DJ_NFXcDg3vsgBKHYcbCH1d9i4V');

// Generic supplements for subscribers with no assessment
const GENERIC_SUPPLEMENTS = [
  {
    name: 'Creatine Monohydrate',
    benefit: 'Strength, muscle, and cognitive performance',
    dosage: '5g daily',
    link: 'https://www.amazon.com/dp/B002DYIZEO?tag=biostack-20',
    emoji: '💪',
  },
  {
    name: 'Vitamin D3 + K2',
    benefit: 'Immune function, bone health, mood regulation',
    dosage: '2,000–5,000 IU daily',
    link: 'https://www.amazon.com/dp/B01DBTFO98?tag=biostack-20',
    emoji: '☀️',
  },
  {
    name: 'Omega-3 Fish Oil',
    benefit: 'Cardiovascular health, inflammation, brain function',
    dosage: '2–4g EPA+DHA daily',
    link: 'https://www.amazon.com/dp/B07H93K1C5?tag=biostack-20',
    emoji: '🐟',
  },
];

function buildGenericEmail(email) {
  const supplementRows = GENERIC_SUPPLEMENTS.map(
    (s) => `
    <tr>
      <td style="padding: 20px; border-bottom: 1px solid #1a1a1a;">
        <div style="font-size: 28px; margin-bottom: 8px;">${s.emoji}</div>
        <div style="font-size: 18px; font-weight: 700; color: #2faa6a; margin-bottom: 4px;">${s.name}</div>
        <div style="font-size: 14px; color: #aaa; margin-bottom: 8px;">${s.benefit}</div>
        <div style="font-size: 13px; color: #888; margin-bottom: 12px;">Recommended dose: ${s.dosage}</div>
        <a href="${s.link}" style="display: inline-block; background: #2faa6a; color: #000; text-decoration: none; padding: 10px 22px; border-radius: 6px; font-weight: 700; font-size: 14px;">Shop on Amazon →</a>
      </td>
    </tr>
  `
  ).join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin: 0; padding: 0; background: #000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #000;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #0d0d0d; border-radius: 12px; overflow: hidden; border: 1px solid #1a1a1a;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; border-bottom: 1px solid #1a1a1a;">
              <div style="font-size: 28px; font-weight: 800; color: #2faa6a; letter-spacing: -1px;">BioStack</div>
              <div style="font-size: 13px; color: #555; margin-top: 4px; letter-spacing: 2px; text-transform: uppercase;">Personalized Optimization</div>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding: 36px 40px 24px;">
              <p style="margin: 0 0 16px; font-size: 22px; font-weight: 700; color: #fff; line-height: 1.3;">
                Your foundational stack — backed by research.
              </p>
              <p style="margin: 0; font-size: 15px; color: #888; line-height: 1.7;">
                Whether you're new to optimization or dialing things in, these three supplements are the highest-leverage starting point for most people. Simple, proven, and worth every dollar.
              </p>
            </td>
          </tr>

          <!-- Supplements -->
          ${supplementRows}

          <!-- Subscription upsell -->
          <tr>
            <td style="padding: 28px 40px; background: #111; border-top: 1px solid #1a1a1a; border-bottom: 1px solid #1a1a1a; text-align: center;">
              <div style="font-size: 13px; color: #2faa6a; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">BioStack Pro</div>
              <p style="margin: 0 0 16px; font-size: 15px; color: #aaa; line-height: 1.6;">
                Want a protocol built around <em>your</em> goals, bloodwork, and biology? Take the full assessment and get personalized peptide, supplement, and lifestyle recommendations.
              </p>
              <a href="https://trybiostack.com" style="display: inline-block; background: #2faa6a; color: #000; text-decoration: none; padding: 13px 28px; border-radius: 8px; font-weight: 800; font-size: 14px;">
                Get Your Personalized Protocol →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; text-align: center; border-top: 1px solid #1a1a1a;">
              <p style="margin: 0; font-size: 12px; color: #444; line-height: 1.6;">
                You're receiving this because you signed up at trybiostack.com.<br>
                <a href="https://trybiostack.com" style="color: #555; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildPersonalizedEmail(email, recommendations) {
  const topRecs = recommendations.slice(0, 5);
  const recRows = topRecs.map((rec) => {
    const strengthColor = rec.match_strength === 'high' ? '#2faa6a' : rec.match_strength === 'medium' ? '#f59e0b' : '#6b7280';
    return `
    <tr>
      <td style="padding: 20px; border-bottom: 1px solid #1a1a1a;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div style="font-size: 17px; font-weight: 700; color: #fff;">${rec.name}</div>
          <div style="font-size: 11px; font-weight: 600; color: ${strengthColor}; text-transform: uppercase; letter-spacing: 1px; margin-left: 12px; white-space: nowrap;">${rec.match_strength} match</div>
        </div>
        <div style="font-size: 12px; color: #555; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">${rec.category}</div>
        <div style="font-size: 14px; color: #aaa; line-height: 1.6; margin-bottom: 12px;">${rec.reasoning}</div>
        ${rec.dosage ? `<div style="font-size: 13px; color: #666; margin-bottom: 4px;"><strong style="color: #888;">Dose:</strong> ${rec.dosage}</div>` : ''}
        ${rec.timing ? `<div style="font-size: 13px; color: #666;"><strong style="color: #888;">Timing:</strong> ${rec.timing}</div>` : ''}
      </td>
    </tr>
  `;
  }).join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin: 0; padding: 0; background: #000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #000;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #0d0d0d; border-radius: 12px; overflow: hidden; border: 1px solid #1a1a1a;">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; border-bottom: 1px solid #1a1a1a;">
              <div style="font-size: 28px; font-weight: 800; color: #2faa6a; letter-spacing: -1px;">BioStack</div>
              <div style="font-size: 13px; color: #555; margin-top: 4px; letter-spacing: 2px; text-transform: uppercase;">Personalized Optimization</div>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding: 36px 40px 24px;">
              <p style="margin: 0 0 16px; font-size: 22px; font-weight: 700; color: #fff; line-height: 1.3;">
                Your personalized protocol is ready.
              </p>
              <p style="margin: 0; font-size: 15px; color: #888; line-height: 1.7;">
                Based on your assessment, here are your top recommendations — selected specifically for your biology and goals.
              </p>
            </td>
          </tr>

          <!-- Recs -->
          ${recRows}

          <!-- Affiliate shop block -->
          <tr>
            <td style="padding: 28px 40px; background: #0a0a0a; border-top: 1px solid #1a1a1a;">
              <div style="font-size: 13px; color: #555; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px;">Ready to start?</div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right: 8px;">
                    <a href="https://www.amazon.com/dp/B002DYIZEO?tag=biostack-20" style="display: block; background: #161616; border: 1px solid #2faa6a; color: #2faa6a; text-decoration: none; padding: 11px 0; border-radius: 7px; font-weight: 700; font-size: 13px; text-align: center;">💪 Creatine</a>
                  </td>
                  <td style="padding: 0 4px;">
                    <a href="https://www.amazon.com/dp/B01DBTFO98?tag=biostack-20" style="display: block; background: #161616; border: 1px solid #2faa6a; color: #2faa6a; text-decoration: none; padding: 11px 0; border-radius: 7px; font-weight: 700; font-size: 13px; text-align: center;">☀️ Vitamin D</a>
                  </td>
                  <td style="padding-left: 8px;">
                    <a href="https://www.amazon.com/dp/B07H93K1C5?tag=biostack-20" style="display: block; background: #161616; border: 1px solid #2faa6a; color: #2faa6a; text-decoration: none; padding: 11px 0; border-radius: 7px; font-weight: 700; font-size: 13px; text-align: center;">🐟 Fish Oil</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Subscription upsell -->
          <tr>
            <td style="padding: 28px 40px; background: #111; border-top: 1px solid #1a1a1a; text-align: center;">
              <div style="font-size: 13px; color: #2faa6a; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">BioStack Pro</div>
              <p style="margin: 0 0 16px; font-size: 15px; color: #aaa; line-height: 1.6;">
                Unlock cycle timing, stack synergies, bloodwork interpretation, and your full optimization roadmap.
              </p>
              <a href="https://trybiostack.com" style="display: inline-block; background: #2faa6a; color: #000; text-decoration: none; padding: 13px 28px; border-radius: 8px; font-weight: 800; font-size: 14px;">
                Upgrade to Pro →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; text-align: center; border-top: 1px solid #1a1a1a;">
              <p style="margin: 0; font-size: 12px; color: #444; line-height: 1.6;">
                You're receiving this because you signed up at trybiostack.com.<br>
                <a href="https://trybiostack.com" style="color: #555; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

module.exports = async (req, res) => {
  // Verify cron secret to prevent unauthorized triggers
  const cronSecret = process.env.CRON_SECRET || '376d17bef17cdf9b87becee5424fcc0cf95e428fc4b760bb99487ea39550d0e8';
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const cutoff48h = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();
    const cutoff72h = new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString();

    // Find subscribers who signed up 48–72h ago and haven't been emailed yet
    const { data: subscribers, error } = await supabase
      .from('biostack_subscribers')
      .select('id, email, assessment_id, created_at')
      .is('follow_up_sent_at', null)
      .lte('created_at', cutoff48h)
      .gte('created_at', cutoff72h)
      .limit(50);

    if (error) throw error;

    if (!subscribers || subscribers.length === 0) {
      return res.status(200).json({ sent: 0, message: 'No subscribers ready for follow-up' });
    }

    let sent = 0;
    let failed = 0;

    for (const subscriber of subscribers) {
      try {
        let subject, html;

        if (subscriber.assessment_id) {
          // Fetch their assessment
          const { data: assessment } = await supabase
            .from('biostack_assessments')
            .select('recommendations')
            .eq('id', subscriber.assessment_id)
            .single();

          const recommendations = assessment?.recommendations || [];

          if (recommendations.length > 0) {
            subject = 'Your BioStack protocol — personalized for you';
            html = buildPersonalizedEmail(subscriber.email, recommendations);
          } else {
            // Assessment exists but no recs — fallback to generic
            subject = 'Your BioStack foundation stack';
            html = buildGenericEmail(subscriber.email);
          }
        } else {
          // No assessment — generic foundational email
          subject = 'Your BioStack foundation stack';
          html = buildGenericEmail(subscriber.email);
        }

        await resend.emails.send({
          from: 'BioStack <info@zaxscape.com>',
          to: subscriber.email,
          subject,
          html,
        });

        // Mark as sent
        await supabase
          .from('biostack_subscribers')
          .update({ follow_up_sent_at: new Date().toISOString() })
          .eq('id', subscriber.id);

        sent++;
      } catch (emailErr) {
        console.error(`Failed to send to ${subscriber.email}:`, emailErr.message);
        failed++;
      }
    }

    return res.status(200).json({ sent, failed, total: subscribers.length });
  } catch (err) {
    console.error('Follow-up cron error:', err);
    return res.status(500).json({ error: err.message });
  }
};
