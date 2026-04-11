// BioStack Instagram Image Generator
// Run: node generate.js
// Requires: none (generates HTML files, open in browser and screenshot at 1080x1080)

const fs = require('fs');
const path = require('path');

const BRAND = {
  bg: '#f8fafc',
  bgCard: '#ffffff',
  primary: '#0891b2', // teal
  primaryDark: '#0e7490',
  accent: '#7c3aed', // purple
  danger: '#e11d48',
  success: '#059669',
  warning: '#d97706',
  text: '#0f172a',
  textMuted: '#64748b',
  border: '#e2e8f0',
  gradient: 'linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)',
};

function wrapHTML(title, body, opts = {}) {
  const w = opts.width || 1080;
  const h = opts.height || 1080;
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:${w}px; height:${h}px; font-family:'Inter',sans-serif; background:${BRAND.bg}; color:${BRAND.text}; overflow:hidden; }
  .container { width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; padding:80px; position:relative; }
  .logo { position:absolute; bottom:40px; right:50px; display:flex; align-items:center; gap:10px; }
  .logo-icon { width:28px; height:28px; border-radius:50%; background:${BRAND.primary}; }
  .logo-text { font-size:18px; font-weight:700; color:${BRAND.textMuted}; letter-spacing:0.5px; }
  .tag { position:absolute; top:40px; left:50px; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:3px; color:${BRAND.primary}; }
  h1 { font-size:52px; font-weight:900; line-height:1.15; margin-bottom:24px; }
  h2 { font-size:38px; font-weight:800; line-height:1.2; margin-bottom:20px; }
  h3 { font-size:28px; font-weight:700; line-height:1.3; margin-bottom:16px; }
  p { font-size:22px; line-height:1.6; color:${BRAND.textMuted}; }
  .highlight { color:${BRAND.primary}; }
  .accent { color:${BRAND.accent}; }
  .danger { color:${BRAND.danger}; }
  .success { color:${BRAND.success}; }
  .warning { color:${BRAND.warning}; }
  .pill { display:inline-block; padding:6px 16px; border-radius:20px; font-size:14px; font-weight:600; margin:4px; }
  .pill-primary { background:${BRAND.primary}20; color:${BRAND.primary}; border:1px solid ${BRAND.primary}40; }
  .pill-accent { background:${BRAND.accent}20; color:${BRAND.accent}; border:1px solid ${BRAND.accent}40; }
  .divider { width:60px; height:3px; background:${BRAND.primary}; margin:20px 0; border-radius:2px; }
  .grid { display:grid; gap:20px; }
  .card { background:${BRAND.bgCard}; border:1px solid ${BRAND.border}; border-radius:16px; padding:28px; }
  .stat { text-align:center; }
  .stat-value { font-size:48px; font-weight:900; }
  .stat-label { font-size:16px; color:${BRAND.textMuted}; margin-top:4px; }
  .list-item { display:flex; align-items:flex-start; gap:14px; margin-bottom:18px; font-size:22px; }
  .list-icon { flex-shrink:0; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; margin-top:3px; }
  .check { background:${BRAND.success}25; color:${BRAND.success}; }
  .cross { background:${BRAND.danger}25; color:${BRAND.danger}; }
  .num { background:${BRAND.primary}25; color:${BRAND.primary}; }
  .vs-container { display:flex; gap:24px; margin-top:24px; }
  .vs-col { flex:1; }
  .vs-header { font-size:16px; font-weight:700; text-transform:uppercase; letter-spacing:2px; margin-bottom:16px; padding-bottom:12px; border-bottom:2px solid; }
  .glow { text-shadow: 0 0 40px ${BRAND.primary}40; }
  .bottom-cta { position:absolute; bottom:40px; left:50px; font-size:16px; color:${BRAND.textMuted}; }
  .bottom-cta span { color:${BRAND.primary}; font-weight:600; }
  .range-bar { height:12px; border-radius:6px; background:${BRAND.border}; margin:8px 0; position:relative; overflow:hidden; }
  .range-fill { height:100%; border-radius:6px; }
  .emoji { font-size:48px; margin-bottom:16px; }
</style>
</head><body>${body}
<div class="logo"><div class="logo-icon"></div><div class="logo-text">BioStack</div></div>
</body></html>`;
}

const posts = [];

// POST 1 — Hook
posts.push({
  name: 'post-01-hook',
  html: wrapHTML('Hook', `
<div class="container">
  <div class="tag">Personalized Protocols</div>
  <h1>Your supplement stack is probably <span class="danger">wrong.</span></h1>
  <div class="divider"></div>
  <div style="margin-top:12px;">
    <div class="list-item"><div class="list-icon cross">✕</div><div>Based on what an influencer takes</div></div>
    <div class="list-item"><div class="list-icon cross">✕</div><div>Based on what's trending on TikTok</div></div>
    <div class="list-item"><div class="list-icon cross">✕</div><div>Based on what your friend recommended</div></div>
    <div style="height:20px"></div>
    <div class="list-item"><div class="list-icon check">✓</div><div>Based on <span class="highlight">your actual bloodwork</span></div></div>
    <div class="list-item"><div class="list-icon check">✓</div><div>Based on <span class="highlight">your specific goals</span></div></div>
    <div class="list-item"><div class="list-icon check">✓</div><div>Based on <span class="highlight">your biology</span></div></div>
  </div>
  <div class="bottom-cta">Free assessment → <span>Link in bio</span> 🧬</div>
</div>`)
});

// POST 2 — ApoB
posts.push({
  name: 'post-02-apob',
  html: wrapHTML('ApoB', `
<div class="container">
  <div class="tag">Bloodwork Education</div>
  <h2>ApoB vs LDL:<br><span class="highlight">What Actually Matters</span></h2>
  <div class="divider"></div>
  <div class="vs-container">
    <div class="vs-col">
      <div class="vs-header" style="border-color:${BRAND.warning}; color:${BRAND.warning}">LDL</div>
      <p style="font-size:18px;">Measures cholesterol <strong>content</strong></p>
      <p style="font-size:16px; margin-top:12px;">Like counting how much cargo is on the highway</p>
    </div>
    <div class="vs-col">
      <div class="vs-header" style="border-color:${BRAND.success}; color:${BRAND.success}">ApoB ★</div>
      <p style="font-size:18px;">Counts the actual <strong>particles</strong></p>
      <p style="font-size:16px; margin-top:12px;">Like counting how many trucks are on the road</p>
    </div>
  </div>
  <div class="card" style="margin-top:32px; text-align:center;">
    <p style="font-size:18px; color:${BRAND.text};">Optimal ApoB: <span class="highlight" style="font-size:24px; font-weight:800;">< 90 mg/dL</span></p>
    <p style="font-size:16px; margin-top:8px;">Ideal (high risk): <span class="success">< 70 mg/dL</span></p>
  </div>
  <div class="bottom-cta">BioStack factors ApoB into your protocol → <span>Link in bio</span> 🧬</div>
</div>`)
});

// POST 3 — Poll
posts.push({
  name: 'post-03-poll',
  html: wrapHTML('Poll', `
<div class="container" style="text-align:center; justify-content:center; align-items:center;">
  <div class="tag" style="left:50%; transform:translateX(-50%);">Community Poll</div>
  <div class="emoji">💊</div>
  <h1 style="font-size:46px;">How many supplements are you taking daily?</h1>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:40px; width:100%;">
    <div class="card" style="text-align:center; cursor:pointer;"><span style="font-size:32px; font-weight:800; color:${BRAND.primary};">A</span><p style="font-size:18px; margin-top:8px;">0-2</p><p style="font-size:14px;">Keeping it minimal</p></div>
    <div class="card" style="text-align:center;"><span style="font-size:32px; font-weight:800; color:${BRAND.accent};">B</span><p style="font-size:18px; margin-top:8px;">3-5</p><p style="font-size:14px;">The basics</p></div>
    <div class="card" style="text-align:center;"><span style="font-size:32px; font-weight:800; color:${BRAND.success};">C</span><p style="font-size:18px; margin-top:8px;">6-10</p><p style="font-size:14px;">Dialed in</p></div>
    <div class="card" style="text-align:center;"><span style="font-size:32px; font-weight:800; color:${BRAND.warning};">D</span><p style="font-size:18px; margin-top:8px;">11+</p><p style="font-size:14px;">Walking pharmacy</p></div>
  </div>
  <p style="font-size:18px; margin-top:30px;">Drop your letter below 👇</p>
</div>`)
});

// POST 4 — Vitamin D
posts.push({
  name: 'post-04-vitamind',
  html: wrapHTML('VitD', `
<div class="container">
  <div class="tag">Supplement Science</div>
  <h2><span class="warning">93%</span> of Americans are Vitamin D insufficient</h2>
  <div class="divider"></div>
  <div style="margin-top:20px;">
    <div style="display:flex; justify-content:space-between; font-size:15px; color:${BRAND.textMuted}; margin-bottom:4px;">
      <span>Deficient</span><span>Normal</span><span class="highlight">Optimal</span>
    </div>
    <div class="range-bar">
      <div class="range-fill" style="width:35%; background:${BRAND.danger};"></div>
    </div>
    <div style="display:flex; justify-content:space-between; font-size:14px; color:${BRAND.textMuted};">
      <span>< 20</span><span>30</span><span>50-80 ng/mL</span>
    </div>
    <p style="font-size:15px; margin-top:4px;">Most people: 20-30 ng/mL → <span class="danger">"Normal" ≠ Optimal</span></p>
  </div>
  <div class="card" style="margin-top:28px;">
    <h3 style="font-size:20px; margin-bottom:14px;">Why it matters:</h3>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
      <div class="list-item" style="margin:0; font-size:17px;"><span class="highlight">→</span> Immune function</div>
      <div class="list-item" style="margin:0; font-size:17px;"><span class="highlight">→</span> Hormone production</div>
      <div class="list-item" style="margin:0; font-size:17px;"><span class="highlight">→</span> Bone density</div>
      <div class="list-item" style="margin:0; font-size:17px;"><span class="highlight">→</span> Mood regulation</div>
      <div class="list-item" style="margin:0; font-size:17px;"><span class="highlight">→</span> Cancer risk reduction</div>
      <div class="list-item" style="margin:0; font-size:17px;"><span class="highlight">→</span> Muscle function</div>
    </div>
  </div>
  <div style="margin-top:24px; padding:20px; border-left:3px solid ${BRAND.primary};">
    <p style="font-size:18px; color:${BRAND.text};"><strong>The fix:</strong> D3 + K2 (MK-7). Always pair them. Always take with fat.</p>
  </div>
  <div class="bottom-cta"><span>BioStack</span> personalizes your D3+K2 dose based on your levels 🧬</div>
</div>`)
});

// POST 5 — Authority
posts.push({
  name: 'post-05-authority',
  html: wrapHTML('Authority', `
<div class="container">
  <div class="tag">How It Works</div>
  <h2>What we check <span class="highlight">before</span> recommending a single supplement</h2>
  <div class="divider"></div>
  <div style="margin-top:16px;">
    <div class="list-item"><div class="list-icon num">1</div><div>Your age & biological sex</div></div>
    <div class="list-item"><div class="list-icon num">2</div><div>Your actual bloodwork <span class="highlight">(21+ markers)</span></div></div>
    <div class="list-item"><div class="list-icon num">3</div><div>Your health goals</div></div>
    <div class="list-item"><div class="list-icon num">4</div><div>Your sleep duration</div></div>
    <div class="list-item"><div class="list-icon num">5</div><div>Your exercise frequency</div></div>
    <div class="list-item"><div class="list-icon num">6</div><div>Your stress level</div></div>
    <div class="list-item"><div class="list-icon num">7</div><div>Current supplements & allergies</div></div>
  </div>
  <div class="card" style="margin-top:20px; text-align:center;">
    <p style="font-size:18px; color:${BRAND.text};">This isn't a quiz. It's a <span class="highlight">clinical-grade assessment.</span></p>
  </div>
  <div class="bottom-cta">Free. Takes 4 minutes. → <span>Link in bio</span> 🧬</div>
</div>`)
});

// POST 6 — Peptides 101
posts.push({
  name: 'post-06-peptides',
  html: wrapHTML('Peptides', `
<div class="container">
  <div class="tag">Peptides 101</div>
  <h2>Peptides: What they are & <span class="accent">why everyone's talking</span> about them</h2>
  <div class="divider"></div>
  <p style="margin-bottom:28px;">Short chains of amino acids that signal your body to do specific things:</p>
  <div style="display:grid; gap:16px;">
    <div class="card" style="display:flex; align-items:center; gap:20px;">
      <div style="font-size:28px;">🔧</div>
      <div><strong style="color:${BRAND.primary}">BPC-157</strong><br><span style="font-size:18px; color:${BRAND.textMuted}">Tissue repair & gut healing</span></div>
    </div>
    <div class="card" style="display:flex; align-items:center; gap:20px;">
      <div style="font-size:28px;">💪</div>
      <div><strong style="color:${BRAND.accent}">CJC-1295 + Ipamorelin</strong><br><span style="font-size:18px; color:${BRAND.textMuted}">Natural growth hormone release</span></div>
    </div>
    <div class="card" style="display:flex; align-items:center; gap:20px;">
      <div style="font-size:28px;">🧠</div>
      <div><strong style="color:${BRAND.success}">Semax</strong><br><span style="font-size:18px; color:${BRAND.textMuted}">Cognitive enhancement & neuroprotection</span></div>
    </div>
    <div class="card" style="display:flex; align-items:center; gap:20px;">
      <div style="font-size:28px;">🔥</div>
      <div><strong style="color:${BRAND.warning}">AOD-9604</strong><br><span style="font-size:18px; color:${BRAND.textMuted}">Targeted fat metabolism</span></div>
    </div>
  </div>
  <div class="bottom-cta">Your protocol should match YOUR goals → <span>Link in bio</span> 🧬</div>
</div>`)
});

// POST 7 — Myth Buster
posts.push({
  name: 'post-07-myth',
  html: wrapHTML('Myth', `
<div class="container" style="padding:60px 80px;">
  <div class="tag">Myth vs Fact</div>
  <div class="card" style="border-color:${BRAND.danger}40; margin-bottom:24px;">
    <div style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.danger}; margin-bottom:10px;">❌ MYTH</div>
    <p style="font-size:24px; color:${BRAND.text}; font-weight:600;">"Total cholesterol is the most important number on your lipid panel."</p>
  </div>
  <div class="card" style="border-color:${BRAND.success}40;">
    <div style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.success}; margin-bottom:10px;">✓ FACT</div>
    <p style="font-size:20px; color:${BRAND.text}; font-weight:600; margin-bottom:20px;">What actually predicts heart disease (ranked):</p>
    <div class="list-item" style="font-size:20px;"><div class="list-icon num" style="background:${BRAND.success}25; color:${BRAND.success};">1</div><div><strong>ApoB</strong> — particle count (gold standard)</div></div>
    <div class="list-item" style="font-size:20px;"><div class="list-icon num" style="background:${BRAND.success}25; color:${BRAND.success};">2</div><div><strong>Trig/HDL ratio</strong> — insulin resistance proxy</div></div>
    <div class="list-item" style="font-size:20px;"><div class="list-icon num" style="background:${BRAND.success}25; color:${BRAND.success};">3</div><div><strong>LDL-P</strong> — if ApoB unavailable</div></div>
    <div class="list-item" style="font-size:20px;"><div class="list-icon num" style="background:${BRAND.success}25; color:${BRAND.success};">4</div><div><strong>Lp(a)</strong> — genetic risk factor</div></div>
  </div>
  <div class="bottom-cta">BioStack reads your full lipid panel → <span>Link in bio</span> 🧬</div>
</div>`)
});

// POST 8 — Morning vs Night
posts.push({
  name: 'post-08-timing',
  html: wrapHTML('Timing', `
<div class="container" style="padding:60px 70px;">
  <div class="tag">Supplement Timing</div>
  <h2 style="text-align:center; font-size:34px;">Morning Stack <span class="highlight">vs</span> Night Stack</h2>
  <div class="vs-container" style="margin-top:30px;">
    <div class="card" style="flex:1;">
      <div style="text-align:center; font-size:36px; margin-bottom:12px;">☀️</div>
      <div class="vs-header" style="border-color:${BRAND.warning}; color:${BRAND.warning}; text-align:center;">Morning</div>
      <div style="font-size:18px; line-height:2.2;">
        → Vitamin D3 + K2<br>
        → Creatine<br>
        → Omega-3<br>
        → B-Complex<br>
        → Ashwagandha
      </div>
    </div>
    <div class="card" style="flex:1;">
      <div style="text-align:center; font-size:36px; margin-bottom:12px;">🌙</div>
      <div class="vs-header" style="border-color:${BRAND.accent}; color:${BRAND.accent}; text-align:center;">Night</div>
      <div style="font-size:18px; line-height:2.2;">
        → Magnesium Glycinate<br>
        → Zinc + Copper<br>
        → NAC<br>
        → CoQ10<br>
        → Niacin
      </div>
    </div>
  </div>
  <div class="card" style="margin-top:24px; text-align:center;">
    <p style="font-size:18px; color:${BRAND.text};"><span class="highlight">Timing matters</span> almost as much as what you take.</p>
  </div>
  <div class="bottom-cta">BioStack gives you exact timing for every rec → <span>Link in bio</span></div>
</div>`)
});

// POST 9 — Magnesium
posts.push({
  name: 'post-09-magnesium',
  html: wrapHTML('Magnesium', `
<div class="container">
  <div class="tag">The #1 Deficiency</div>
  <h1 style="font-size:46px;">The supplement <span class="accent">75% of Americans</span> are missing</h1>
  <div class="divider"></div>
  <h3 style="color:${BRAND.primary}; font-size:36px;">Magnesium Glycinate</h3>
  <div style="margin-top:20px;">
    <p style="font-size:18px; margin-bottom:16px; color:${BRAND.text};">Signs you're deficient:</p>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div style="font-size:18px;">😴 Poor sleep</div>
      <div style="font-size:18px;">💪 Muscle cramps</div>
      <div style="font-size:18px;">😰 Anxiety</div>
      <div style="font-size:18px;">🧠 Brain fog</div>
      <div style="font-size:18px;">❤️ High BP</div>
      <div style="font-size:18px;">⚡ Fatigue</div>
    </div>
  </div>
  <div class="card" style="margin-top:28px;">
    <p style="font-size:18px; color:${BRAND.text};"><strong class="highlight">The fix:</strong> 400-600mg glycinate before bed</p>
    <p style="font-size:16px; color:${BRAND.textMuted}; margin-top:8px;">NOT oxide (4% absorption, basically a laxative)</p>
    <p style="font-size:16px; color:${BRAND.success}; margin-top:8px;">✓ Superior bioavailability · ✓ Calms GABA receptors · ✓ No GI issues</p>
  </div>
  <div class="bottom-cta"><span>BioStack</span> flags this as HIGH priority if your stress is elevated 🧬</div>
</div>`)
});

// POST 10 — Testimonial
posts.push({
  name: 'post-10-testimonial',
  html: wrapHTML('Testimonial', `
<div class="container" style="justify-content:center; align-items:center; text-align:center;">
  <div class="tag" style="left:50%; transform:translateX(-50%);">Results</div>
  <div style="font-size:72px; margin-bottom:20px;">"</div>
  <p style="font-size:28px; color:${BRAND.text}; font-weight:500; line-height:1.5; max-width:800px;">I was taking <span class="danger">12 supplements</span>. BioStack told me I only needed <span class="highlight">7 — but different ones</span>. My sleep improved in the first week.</p>
  <div style="margin-top:30px; display:flex; align-items:center; gap:14px; justify-content:center;">
    <div style="width:48px; height:48px; border-radius:50%; background:${BRAND.primary}30;"></div>
    <div style="text-align:left;">
      <p style="font-size:16px; color:${BRAND.text}; font-weight:600;">BioStack User</p>
      <p style="font-size:14px; color:${BRAND.textMuted};">Age 34, Male</p>
    </div>
  </div>
  <div class="card" style="margin-top:40px; display:inline-block;">
    <p style="font-size:20px; color:${BRAND.text};">The goal isn't <span class="danger">more</span> supplements. It's the <span class="highlight">right</span> supplements.</p>
  </div>
  <div class="bottom-cta" style="left:50%; transform:translateX(-50%);">Free assessment → <span>Link in bio</span> 🧬</div>
</div>`)
});

// POST 11 — Triglycerides
posts.push({
  name: 'post-11-triglycerides',
  html: wrapHTML('Trigs', `
<div class="container">
  <div class="tag">The Underrated Marker</div>
  <h2>Your triglycerides might be the <span class="warning">most underrated</span> marker on your lipid panel</h2>
  <div class="divider"></div>
  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-top:20px;">
    <div class="card stat"><div class="stat-value success">< 100</div><div class="stat-label">Optimal (mg/dL)</div></div>
    <div class="card stat"><div class="stat-value warning">100-149</div><div class="stat-label">Borderline</div></div>
    <div class="card stat"><div class="stat-value danger">≥ 150</div><div class="stat-label">High</div></div>
  </div>
  <div class="card" style="margin-top:24px;">
    <p style="font-size:18px; color:${BRAND.text}; font-weight:600; margin-bottom:12px;">Trig/HDL Ratio — insulin resistance proxy:</p>
    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; text-align:center;">
      <div><span class="success" style="font-size:24px; font-weight:800;">< 1.5</span><br><span style="font-size:14px; color:${BRAND.textMuted}">Ideal</span></div>
      <div><span class="warning" style="font-size:24px; font-weight:800;">> 2.0</span><br><span style="font-size:14px; color:${BRAND.textMuted}">Concerning</span></div>
      <div><span class="danger" style="font-size:24px; font-weight:800;">> 3.0</span><br><span style="font-size:14px; color:${BRAND.textMuted}">Red flag</span></div>
    </div>
  </div>
  <p style="font-size:17px; margin-top:20px;">High trigs → <span class="highlight">High-dose EPA (2-4g/day)</span> + Berberine + Zone 2 cardio</p>
  <div class="bottom-cta"><span>BioStack</span> calculates this from your labs automatically 🧬</div>
</div>`)
});

// POST 12 — Bloodwork Question
posts.push({
  name: 'post-12-bloodwork-q',
  html: wrapHTML('Question', `
<div class="container" style="justify-content:center; align-items:center; text-align:center;">
  <div class="tag" style="left:50%; transform:translateX(-50%);">Question</div>
  <div style="font-size:56px; margin-bottom:20px;">🧪</div>
  <h1 style="font-size:44px;">When was the last time you got <span class="highlight">comprehensive</span> bloodwork done?</h1>
  <div style="margin-top:36px; text-align:left; max-width:700px;">
    <p style="font-size:18px; color:${BRAND.text}; margin-bottom:16px;">Not the basic panel. The FULL workup:</p>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:16px;">
      <div>🧬 Full hormone panel</div>
      <div>🫀 Complete lipid panel + ApoB</div>
      <div>🧠 Thyroid (TSH, fT3, fT4)</div>
      <div>🔬 Inflammation (hsCRP)</div>
      <div>💉 Metabolic (glucose, HbA1c)</div>
      <div>💊 Nutrients (Vit D, ferritin)</div>
    </div>
  </div>
  <div class="card" style="margin-top:32px;">
    <p style="font-size:20px; color:${BRAND.text};">You wouldn't invest without looking at the financials.<br>Why invest in your health <span class="highlight">without the data?</span></p>
  </div>
</div>`)
});

// POST 13 — Berberine
posts.push({
  name: 'post-13-berberine',
  html: wrapHTML('Berberine', `
<div class="container">
  <div class="tag">Supplement Deep Dive</div>
  <h1 style="font-size:48px;"><span class="warning">Berberine</span><br>Nature's Metformin</h1>
  <div class="divider"></div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:20px;">
    <div class="card stat"><div class="stat-value" style="color:${BRAND.success}; font-size:36px;">↓ 20-30%</div><div class="stat-label">LDL Reduction</div></div>
    <div class="card stat"><div class="stat-value" style="color:${BRAND.primary}; font-size:36px;">↓ 15-20%</div><div class="stat-label">Blood Glucose</div></div>
    <div class="card stat"><div class="stat-value" style="color:${BRAND.accent}; font-size:36px;">↑ AMPK</div><div class="stat-label">Master Switch</div></div>
    <div class="card stat"><div class="stat-value" style="color:${BRAND.warning}; font-size:36px;">↓ PCSK9</div><div class="stat-label">LDL Receptors ↑</div></div>
  </div>
  <div class="card" style="margin-top:24px;">
    <p style="font-size:17px; color:${BRAND.text};"><strong class="highlight">Dose:</strong> 500mg 2-3x/day with meals</p>
    <p style="font-size:17px; color:${BRAND.text}; margin-top:8px;"><strong class="warning">⚠️ Important:</strong> Always pair with CoQ10 (shared pathway depletion)</p>
    <p style="font-size:15px; color:${BRAND.textMuted}; margin-top:8px;">Research status: <span class="success">Established ✓</span></p>
  </div>
  <div class="bottom-cta"><span>BioStack</span> triggers berberine when LDL ≥130 or ApoB ≥90 🧬</div>
</div>`)
});

// POST 14 — Meme / Drake
posts.push({
  name: 'post-14-meme',
  html: wrapHTML('Meme', `
<div class="container" style="justify-content:center; gap:24px;">
  <div class="tag">Real Talk</div>
  <div class="card" style="display:flex; align-items:center; gap:24px; border-color:${BRAND.danger}40;">
    <div style="font-size:48px; flex-shrink:0;">🙅</div>
    <div>
      <p style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.danger}; margin-bottom:8px;">Nah</p>
      <p style="font-size:24px; color:${BRAND.text}; font-weight:600;">Taking <span class="danger">15 random supplements</span> because a podcast said so</p>
    </div>
  </div>
  <div class="card" style="display:flex; align-items:center; gap:24px; border-color:${BRAND.success}40;">
    <div style="font-size:48px; flex-shrink:0;">💯</div>
    <div>
      <p style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.success}; margin-bottom:8px;">Yes</p>
      <p style="font-size:24px; color:${BRAND.text}; font-weight:600;">Taking <span class="highlight">7 targeted supplements</span> based on your actual bloodwork</p>
    </div>
  </div>
  <div class="card" style="text-align:center; margin-top:12px;">
    <p style="font-size:22px; color:${BRAND.text};">Less waste. Better results. <span class="highlight">Actually personalized.</span></p>
  </div>
  <div class="bottom-cta">That's BioStack → <span>Link in bio</span> 🧬</div>
</div>`)
});

// POST 15 — Sleep + GH
posts.push({
  name: 'post-15-sleep',
  html: wrapHTML('Sleep', `
<div class="container">
  <div class="tag">Sleep Science</div>
  <div style="text-align:center; margin-bottom:24px;">
    <div style="font-size:80px; font-weight:900; background:${BRAND.gradient}; -webkit-background-clip:text; -webkit-text-fill-color:transparent;">80%</div>
    <p style="font-size:22px;">of your growth hormone is released during <span class="accent">deep sleep</span></p>
  </div>
  <div class="divider" style="margin:20px auto;"></div>
  <p style="font-size:20px; text-align:center; margin-bottom:28px;">< 7 hours = leaving gains on the table</p>
  <div class="card">
    <p style="font-size:16px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.primary}; margin-bottom:14px;">The Sleep Protocol</p>
    <div class="list-item" style="font-size:18px;"><div class="list-icon check">✓</div><div>Magnesium Glycinate 400mg</div></div>
    <div class="list-item" style="font-size:18px;"><div class="list-icon check">✓</div><div>Room temp: 65-68°F</div></div>
    <div class="list-item" style="font-size:18px;"><div class="list-icon check">✓</div><div>No screens 1 hour before bed</div></div>
    <div class="list-item" style="font-size:18px;"><div class="list-icon check">✓</div><div>Consistent bedtime ± 30 min</div></div>
    <div class="list-item" style="font-size:18px;"><div class="list-icon check">✓</div><div>No caffeine after 2 PM</div></div>
  </div>
  <div class="bottom-cta">Fix sleep first. Everything else amplifies. → <span>Link in bio</span> 🧬</div>
</div>`)
});

// POST 16 — Lp(a)
posts.push({
  name: 'post-16-lpa',
  html: wrapHTML('Lpa', `
<div class="container">
  <div class="tag">The Hidden Risk</div>
  <h2 style="font-size:40px;">The marker <span class="danger">95% of people</span> have never heard of</h2>
  <h1 style="font-size:56px; margin-top:12px;"><span class="highlight">Lp(a)</span></h1>
  <div class="divider"></div>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:20px;">
    <div class="card">
      <p style="font-size:16px; color:${BRAND.textMuted};">Prevalence</p>
      <p style="font-size:28px; font-weight:800; color:${BRAND.warning};">1 in 5</p>
      <p style="font-size:14px; color:${BRAND.textMuted};">have elevated levels</p>
    </div>
    <div class="card">
      <p style="font-size:16px; color:${BRAND.textMuted};">Genetic factor</p>
      <p style="font-size:28px; font-weight:800; color:${BRAND.accent};">~90%</p>
      <p style="font-size:14px; color:${BRAND.textMuted};">determined by DNA</p>
    </div>
  </div>
  <div class="card" style="margin-top:20px; border-color:${BRAND.danger}30;">
    <p style="font-size:17px; color:${BRAND.text};">Elevated: <span class="danger">> 75 nmol/L</span></p>
    <p style="font-size:16px; color:${BRAND.textMuted}; margin-top:8px;">Independent CV risk factor · Most doctors never test it · Doesn't change with diet or exercise</p>
  </div>
  <div style="margin-top:20px; padding:16px; border-left:3px solid ${BRAND.warning};">
    <p style="font-size:17px; color:${BRAND.text};">Test once (it barely changes). That one test could change your entire risk strategy.</p>
  </div>
  <div class="bottom-cta"><span>BioStack</span> flags elevated Lp(a) & adjusts your entire protocol 🧬</div>
</div>`)
});

// POST 17 — Optimal Ranges Cheat Sheet
posts.push({
  name: 'post-17-ranges',
  html: wrapHTML('Ranges', `
<div class="container" style="padding:50px 60px;">
  <div class="tag">📌 Save This</div>
  <h2 style="font-size:32px; text-align:center;">Optimal Bloodwork Ranges<br><span class="highlight">Your Doctor Won't Tell You</span></h2>
  <div style="display:grid; gap:12px; margin-top:24px; font-size:15px;">
    <div class="card" style="padding:16px 20px;">
      <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.primary}; margin-bottom:8px;">Hormones</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; color:${BRAND.textMuted};">
        <div>Testosterone: <span style="color:${BRAND.text}">600-900 ng/dL</span></div>
        <div>Free T: <span style="color:${BRAND.text}">15-25 pg/mL</span></div>
        <div>Estradiol: <span style="color:${BRAND.text}">20-35 pg/mL</span></div>
        <div>DHEA-S: <span style="color:${BRAND.text}">200-400 µg/dL</span></div>
      </div>
    </div>
    <div class="card" style="padding:16px 20px;">
      <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.warning}; margin-bottom:8px;">Lipids</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; color:${BRAND.textMuted};">
        <div>LDL: <span style="color:${BRAND.text}">< 100 mg/dL</span></div>
        <div>HDL: <span style="color:${BRAND.text}">> 60 mg/dL</span></div>
        <div>Triglycerides: <span style="color:${BRAND.text}">< 100 mg/dL</span></div>
        <div>ApoB: <span style="color:${BRAND.text}">< 90 mg/dL</span></div>
      </div>
    </div>
    <div class="card" style="padding:16px 20px;">
      <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.success}; margin-bottom:8px;">Metabolic</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; color:${BRAND.textMuted};">
        <div>Glucose: <span style="color:${BRAND.text}">72-85 mg/dL</span></div>
        <div>HbA1c: <span style="color:${BRAND.text}">< 5.3%</span></div>
        <div>hsCRP: <span style="color:${BRAND.text}">< 1.0 mg/L</span></div>
        <div>Homocysteine: <span style="color:${BRAND.text}">< 8 µmol/L</span></div>
      </div>
    </div>
    <div class="card" style="padding:16px 20px;">
      <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.accent}; margin-bottom:8px;">Thyroid & Nutrients</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; color:${BRAND.textMuted};">
        <div>TSH: <span style="color:${BRAND.text}">1.0-2.0 mIU/L</span></div>
        <div>Free T3: <span style="color:${BRAND.text}">3.0-4.0 pg/mL</span></div>
        <div>Vitamin D: <span style="color:${BRAND.text}">50-80 ng/mL</span></div>
        <div>Ferritin: <span style="color:${BRAND.text}">50-150 ng/mL</span></div>
      </div>
    </div>
  </div>
  <div class="bottom-cta" style="text-align:center; left:50%; transform:translateX(-50%);">These are <span>OPTIMAL</span> ranges — not just "normal" 🧬</div>
</div>`)
});

// POST 18 — Product Feature
posts.push({
  name: 'post-18-product',
  html: wrapHTML('Product', `
<div class="container" style="align-items:center; text-align:center;">
  <div class="tag" style="left:50%; transform:translateX(-50%);">How It Works</div>
  <h2 style="font-size:36px;"><span class="highlight">4 minutes. 4 steps.</span><br>A protocol built for your biology.</h2>
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; width:100%; text-align:center;">
    <div class="card">
      <div style="font-size:36px; font-weight:900; color:${BRAND.primary};">01</div>
      <p style="font-size:18px; color:${BRAND.text}; font-weight:600; margin-top:8px;">Demographics</p>
      <p style="font-size:14px; color:${BRAND.textMuted};">Age, sex, height, weight</p>
    </div>
    <div class="card">
      <div style="font-size:36px; font-weight:900; color:${BRAND.accent};">02</div>
      <p style="font-size:18px; color:${BRAND.text}; font-weight:600; margin-top:8px;">Health Goals</p>
      <p style="font-size:14px; color:${BRAND.textMuted};">Anti-aging, muscle, cognitive...</p>
    </div>
    <div class="card">
      <div style="font-size:36px; font-weight:900; color:${BRAND.success};">03</div>
      <p style="font-size:18px; color:${BRAND.text}; font-weight:600; margin-top:8px;">Bloodwork</p>
      <p style="font-size:14px; color:${BRAND.textMuted};">21+ markers incl. lipid panel</p>
    </div>
    <div class="card">
      <div style="font-size:36px; font-weight:900; color:${BRAND.warning};">04</div>
      <p style="font-size:18px; color:${BRAND.text}; font-weight:600; margin-top:8px;">Lifestyle</p>
      <p style="font-size:14px; color:${BRAND.textMuted};">Sleep, exercise, stress</p>
    </div>
  </div>
  <div class="card" style="margin-top:28px; width:100%;">
    <p style="font-size:20px; color:${BRAND.text};">→ 🧬 Peptides · 💊 Supplements · 🏃 Lifestyle</p>
    <p style="font-size:16px; color:${BRAND.textMuted}; margin-top:8px;">Dosages, timing, mechanisms — all personalized</p>
  </div>
  <div class="bottom-cta" style="left:50%; transform:translateX(-50%);">Free. No account needed. → <span>Link in bio</span></div>
</div>`)
});

// POST 19 — CoQ10
posts.push({
  name: 'post-19-coq10',
  html: wrapHTML('CoQ10', `
<div class="container">
  <div class="tag">Supplement Deep Dive</div>
  <h2>If you're over 40, you should probably be taking <span class="highlight">CoQ10</span></h2>
  <div class="divider"></div>
  <div style="margin-top:16px;">
    <p style="font-size:18px; color:${BRAND.text}; margin-bottom:20px;">Your body's CoQ10 production over time:</p>
    <div style="display:flex; align-items:flex-end; gap:12px; height:160px; margin-bottom:12px;">
      <div style="flex:1; text-align:center;">
        <div style="height:150px; background:${BRAND.success}; border-radius:8px 8px 0 0;"></div>
        <p style="font-size:13px; color:${BRAND.textMuted}; margin-top:6px;">Age 20</p>
      </div>
      <div style="flex:1; text-align:center;">
        <div style="height:120px; background:${BRAND.primary}; border-radius:8px 8px 0 0;"></div>
        <p style="font-size:13px; color:${BRAND.textMuted}; margin-top:6px;">Age 30</p>
      </div>
      <div style="flex:1; text-align:center;">
        <div style="height:90px; background:${BRAND.warning}; border-radius:8px 8px 0 0;"></div>
        <p style="font-size:13px; color:${BRAND.textMuted}; margin-top:6px;">Age 40</p>
      </div>
      <div style="flex:1; text-align:center;">
        <div style="height:60px; background:${BRAND.danger}; border-radius:8px 8px 0 0;"></div>
        <p style="font-size:13px; color:${BRAND.textMuted}; margin-top:6px;">Age 60</p>
      </div>
    </div>
  </div>
  <div class="card" style="margin-top:20px;">
    <p style="font-size:17px; color:${BRAND.text};"><strong class="highlight">Ubiquinol</strong> (reduced form) > Ubiquinone</p>
    <p style="font-size:15px; color:${BRAND.textMuted}; margin-top:6px;">3-4x better absorption · Directly neutralizes free radicals · Protects LDL from oxidation</p>
    <p style="font-size:17px; color:${BRAND.text}; margin-top:12px;"><strong>Dose:</strong> 100-200mg/day with fat</p>
    <p style="font-size:15px; color:${BRAND.warning}; margin-top:6px;">⚠️ Critical if taking berberine or statins (mevalonate pathway depletion)</p>
  </div>
  <div class="bottom-cta"><span>BioStack</span> auto-recommends CoQ10 when your lipids trigger berberine 🧬</div>
</div>`)
});

// POST 20 — Final CTA
posts.push({
  name: 'post-20-cta',
  html: wrapHTML('CTA', `
<div class="container" style="justify-content:center; align-items:center; text-align:center;">
  <div style="font-size:56px; margin-bottom:24px;">🧬</div>
  <h1 style="font-size:48px;">Your body is unique.<br>Your protocol <span class="highlight">should be too.</span></h1>
  <div class="divider" style="margin:28px auto;"></div>
  <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-top:12px; width:100%;">
    <div class="card stat" style="padding:20px;">
      <div style="font-size:28px;">🧬</div>
      <p style="font-size:16px; color:${BRAND.text}; margin-top:8px; font-weight:600;">Peptides</p>
    </div>
    <div class="card stat" style="padding:20px;">
      <div style="font-size:28px;">💊</div>
      <p style="font-size:16px; color:${BRAND.text}; margin-top:8px; font-weight:600;">Supplements</p>
    </div>
    <div class="card stat" style="padding:20px;">
      <div style="font-size:28px;">🏃</div>
      <p style="font-size:16px; color:${BRAND.text}; margin-top:8px; font-weight:600;">Lifestyle</p>
    </div>
  </div>
  <div style="margin-top:32px;">
    <p style="font-size:20px; color:${BRAND.textMuted};">Dosages · Timing · Mechanisms of Action</p>
    <p style="font-size:20px; color:${BRAND.textMuted}; margin-top:4px;">All personalized to YOUR biology.</p>
  </div>
  <div style="margin-top:36px; padding:18px 48px; background:${BRAND.gradient}; border-radius:12px; display:inline-block;">
    <p style="font-size:22px; font-weight:700; color:white;">Take the Free Assessment →</p>
  </div>
  <p style="font-size:16px; color:${BRAND.textMuted}; margin-top:16px;">Link in bio 🧬</p>
</div>`)
});

// AD 1 — Lead Gen
posts.push({
  name: 'ad-01-leadgen',
  html: wrapHTML('Ad1', `
<div class="container" style="padding:60px 70px;">
  <div class="tag">Sponsored · BioStack</div>
  <h1 style="font-size:50px;">Your supplements are probably <span class="danger">wrong.</span></h1>
  <div class="divider"></div>
  <div class="vs-container" style="margin-top:24px;">
    <div class="card" style="flex:1; border-color:${BRAND.danger}30; text-align:center;">
      <p style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.danger}; margin-bottom:12px;">Guessing</p>
      <div style="font-size:48px; margin-bottom:12px;">🤷</div>
      <p style="font-size:16px; color:${BRAND.textMuted};">Random supplements<br>No bloodwork<br>No personalization<br>$100+/month wasted</p>
    </div>
    <div class="card" style="flex:1; border-color:${BRAND.success}30; text-align:center;">
      <p style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:2px; color:${BRAND.success}; margin-bottom:12px;">Personalized</p>
      <div style="font-size:48px; margin-bottom:12px;">🧬</div>
      <p style="font-size:16px; color:${BRAND.text};">Based on YOUR labs<br>21+ biomarkers<br>Exact dosages & timing<br>Research-backed</p>
    </div>
  </div>
  <div style="margin-top:32px; display:flex; gap:12px; flex-wrap:wrap; justify-content:center;">
    <span class="pill pill-primary">✓ 21+ Biomarkers</span>
    <span class="pill pill-primary">✓ Peptides + Supplements</span>
    <span class="pill pill-primary">✓ Free in 4 min</span>
  </div>
  <div style="margin-top:28px; text-align:center; padding:18px 48px; background:${BRAND.gradient}; border-radius:12px; display:inline-block; width:100%;">
    <p style="font-size:22px; font-weight:700; color:white;">Get Your Free Protocol →</p>
  </div>
</div>`)
});

// AD 2 — Cholesterol
posts.push({
  name: 'ad-02-cholesterol',
  html: wrapHTML('Ad2', `
<div class="container" style="padding:55px 65px;">
  <div class="tag">Sponsored · BioStack</div>
  <h2 style="font-size:38px;">What your doctor's cholesterol test is <span class="danger">missing</span></h2>
  <div class="divider"></div>
  <div class="vs-container" style="margin-top:20px;">
    <div class="card" style="flex:1;">
      <div class="vs-header" style="border-color:${BRAND.danger}; color:${BRAND.danger}; font-size:14px;">What They Test</div>
      <div style="font-size:17px; line-height:2; color:${BRAND.textMuted};">
        Total Cholesterol<br>LDL (basic)<br>HDL<br><span style="color:${BRAND.border};">— that's it —</span>
      </div>
    </div>
    <div class="card" style="flex:1;">
      <div class="vs-header" style="border-color:${BRAND.success}; color:${BRAND.success}; font-size:14px;">What Actually Matters</div>
      <div style="font-size:17px; line-height:2; color:${BRAND.text};">
        <span class="highlight">ApoB</span> — particle count<br>
        <span class="highlight">Lp(a)</span> — genetic risk<br>
        <span class="highlight">Trig/HDL</span> — insulin signal<br>
        <span class="highlight">hsCRP</span> — inflammation
      </div>
    </div>
  </div>
  <div class="card" style="margin-top:20px;">
    <p style="font-size:16px; font-weight:700; color:${BRAND.primary}; margin-bottom:10px;">BioStack reads your FULL panel & recommends:</p>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:15px;">
      <div>→ Berberine for high LDL/ApoB</div>
      <div>→ High-dose EPA for trigs</div>
      <div>→ Niacin for low HDL / Lp(a)</div>
      <div>→ CoQ10 for CV protection</div>
    </div>
  </div>
  <div style="margin-top:24px; text-align:center; padding:18px 48px; background:${BRAND.gradient}; border-radius:12px;">
    <p style="font-size:22px; font-weight:700; color:white;">Get Your Free Protocol →</p>
  </div>
  <p style="font-size:14px; color:${BRAND.textMuted}; text-align:center; margin-top:12px;">Free assessment · No account needed · Takes 4 minutes</p>
</div>`)
});

// Generate all files
const outDir = path.join(__dirname);
posts.forEach(p => {
  const filepath = path.join(outDir, `${p.name}.html`);
  fs.writeFileSync(filepath, p.html);
  console.log(`✓ ${p.name}.html`);
});

console.log(`\n✅ Generated ${posts.length} images.`);
console.log(`\nTo convert to PNG:`);
console.log(`1. Open each HTML file in Chrome`);
console.log(`2. Set window to 1080x1080`);
console.log(`3. Screenshot, or use a tool like puppeteer/playwright`);
console.log(`\nOr run: npx playwright screenshot --viewport-size=1080,1080 <file.html> <output.png>`);
