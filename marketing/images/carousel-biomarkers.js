const fs = require('fs');
const path = require('path');

const LOGO_B64 = fs.readFileSync(path.join(__dirname, 'logo_b64.txt'), 'utf8').trim();

function slide(num, total, body) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1350px; font-family:'Inter',sans-serif; overflow:hidden; position:relative; }
  .content { position:relative; z-index:2; width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; padding:70px 80px; }
  h1 { font-size:72px; font-weight:900; color:white; line-height:1.1; text-shadow: 0 2px 40px rgba(0,0,0,0.5); }
  h2 { font-size:56px; font-weight:800; color:white; line-height:1.15; text-shadow: 0 2px 30px rgba(0,0,0,0.5); }
  .small-label { font-size:18px; font-weight:600; text-transform:uppercase; letter-spacing:4px; color:rgba(255,255,255,0.7); margin-bottom:12px; }
  .glass-box {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius:16px;
    padding:28px 36px;
    margin-top:28px;
  }
  .glass-item {
    font-size:24px;
    color:rgba(255,255,255,0.9);
    padding:14px 0;
    border-bottom:1px solid rgba(255,255,255,0.1);
    font-weight:500;
  }
  .glass-item:last-child { border-bottom:none; }
  .bottom-note { font-size:22px; color:rgba(255,255,255,0.75); text-align:center; margin-top:24px; font-style:italic; }
  .bottom-bar {
    position:absolute; bottom:0; left:0; right:0; height:70px;
    display:flex; align-items:center; justify-content:space-between; padding:0 40px; z-index:10;
  }
  .logo-area { display:flex; align-items:center; gap:10px; }
  .logo-area img { width:32px; height:32px; border-radius:6px; }
  .logo-area span { font-size:16px; font-weight:700; color:rgba(255,255,255,0.6); }
  .bar-line { flex:1; height:1px; background:rgba(47,170,106,0.4); margin:0 20px; }
  .slide-num { font-size:14px; color:rgba(255,255,255,0.5); }
  .swipe { font-size:18px; font-style:italic; color:rgba(255,255,255,0.6); font-weight:500; }
  .green { color:#2faa6a; }
  .red { color:#ef4444; }
  .highlight-box {
    display:inline-block; background:rgba(47,170,106,0.15); border:1px solid rgba(47,170,106,0.3);
    border-radius:8px; padding:6px 16px; font-size:18px; color:#2faa6a; font-weight:600;
  }
  .marker-card {
    background: rgba(0,0,0,0.4); backdrop-filter:blur(20px);
    border:1px solid rgba(47,170,106,0.3); border-radius:16px; padding:28px 32px; margin-top:20px;
  }
  .marker-name { font-size:32px; font-weight:800; color:#2faa6a; margin-bottom:4px; }
  .marker-unit { font-size:16px; color:rgba(255,255,255,0.5); margin-bottom:14px; }
  .marker-detail { font-size:20px; color:rgba(255,255,255,0.85); line-height:1.6; margin-bottom:6px; }
  .marker-detail strong { color:white; }
  .range-row { display:flex; justify-content:space-between; margin-top:14px; gap:12px; }
  .range-block { flex:1; text-align:center; padding:12px 8px; border-radius:10px; }
  .range-val { font-size:22px; font-weight:800; }
  .range-label { font-size:13px; margin-top:4px; color:rgba(255,255,255,0.5); }
  .vs-row { display:flex; gap:20px; margin-top:24px; }
  .vs-col { flex:1; }
  .vs-box { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:20px 24px; height:100%; }
  .vs-title { font-size:16px; font-weight:700; text-transform:uppercase; letter-spacing:2px; margin-bottom:14px; padding-bottom:10px; border-bottom:2px solid; }
  .vs-item { font-size:19px; color:rgba(255,255,255,0.8); padding:8px 0; line-height:1.4; }
</style>
</head><body>
${body}
<div class="bottom-bar">
  <div class="logo-area">
    <img src="data:image/jpeg;base64,${LOGO_B64}" />
    <span>BioStack</span>
  </div>
  <div class="bar-line"></div>
  <span class="slide-num">${num}</span>
</div>
</body></html>`;
}

const slides = [];

// SLIDE 1 — Cover
slides.push({ name: 'carousel-biomarkers-1', html: slide(1, 10, `
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 50% 55%, #0a2e1a 0%, #000 70%);"></div>
<div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%);"></div>
<div style="position:absolute; top:38%; left:50%; transform:translate(-50%,-50%); z-index:1; opacity:0.4;">
  <svg width="240" height="240" viewBox="0 0 240 240">
    <circle cx="120" cy="120" r="100" fill="none" stroke="rgba(47,170,106,0.4)" stroke-width="2" stroke-dasharray="8 6"/>
    <circle cx="120" cy="120" r="70" fill="none" stroke="rgba(47,170,106,0.3)" stroke-width="1.5" stroke-dasharray="4 4"/>
    <circle cx="120" cy="120" r="40" fill="none" stroke="rgba(47,170,106,0.5)" stroke-width="2"/>
    <circle cx="120" cy="120" r="6" fill="rgba(47,170,106,0.8)"/>
    <circle cx="120" cy="20" r="5" fill="rgba(47,170,106,0.6)"/>
    <circle cx="210" cy="90" r="4" fill="rgba(47,170,106,0.5)"/>
    <circle cx="200" cy="170" r="4" fill="rgba(47,170,106,0.5)"/>
    <circle cx="120" cy="220" r="5" fill="rgba(47,170,106,0.6)"/>
    <circle cx="40" cy="170" r="4" fill="rgba(47,170,106,0.5)"/>
    <circle cx="30" cy="90" r="4" fill="rgba(47,170,106,0.5)"/>
    <line x1="120" y1="114" x2="120" y2="25" stroke="rgba(47,170,106,0.3)" stroke-width="1"/>
    <line x1="126" y1="118" x2="206" y2="88" stroke="rgba(47,170,106,0.3)" stroke-width="1"/>
    <line x1="126" y1="124" x2="196" y2="166" stroke="rgba(47,170,106,0.3)" stroke-width="1"/>
    <line x1="120" y1="126" x2="120" y2="215" stroke="rgba(47,170,106,0.3)" stroke-width="1"/>
    <line x1="114" y1="124" x2="44" y2="166" stroke="rgba(47,170,106,0.3)" stroke-width="1"/>
    <line x1="114" y1="118" x2="34" y2="88" stroke="rgba(47,170,106,0.3)" stroke-width="1"/>
  </svg>
</div>
<div class="content" style="justify-content:flex-start; padding-top:100px;">
  <div class="small-label">THE DEFINITIVE GUIDE</div>
  <h1 style="font-size:78px;">Biomarkers</h1>
  <p style="font-size:30px; color:rgba(255,255,255,0.7); margin-top:8px;">The Numbers That Actually Matter</p>
  <div style="margin-top:auto; margin-bottom:100px; text-align:center;">
    <p style="font-size:22px; color:rgba(255,255,255,0.6); line-height:1.6;">Your bloodwork tells a story.<br>Most doctors only read the first page.</p>
    <p class="swipe" style="margin-top:32px;">Swipe to learn more →</p>
  </div>
</div>`) });

// SLIDE 2 — The problem
slides.push({ name: 'carousel-biomarkers-2', html: slide(2, 10, `
<div style="position:absolute; inset:0; background:linear-gradient(135deg, #0a1628 0%, #0d0d0d 50%, #0a2018 100%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 30% 40%, rgba(47,170,106,0.08) 0%, transparent 60%);"></div>
<div class="content">
  <h2>The problem with<br>"<span style="color:rgba(255,255,255,0.4);">normal</span>" ranges</h2>
  <div class="vs-row">
    <div class="vs-col">
      <div class="vs-box">
        <div class="vs-title" style="border-color:#ef4444; color:#ef4444;">Standard Lab Range</div>
        <div class="vs-item">→ Designed to detect <strong style="color:white;">disease</strong></div>
        <div class="vs-item">→ Based on the <strong style="color:white;">average</strong> population</div>
        <div class="vs-item">→ "Normal" = not actively dying</div>
        <div class="vs-item">→ Wide ranges hide problems</div>
      </div>
    </div>
    <div class="vs-col">
      <div class="vs-box">
        <div class="vs-title" style="border-color:#2faa6a; color:#2faa6a;">Optimal Range</div>
        <div class="vs-item">→ Designed to detect <strong style="color:#2faa6a;">peak function</strong></div>
        <div class="vs-item">→ Based on <strong style="color:#2faa6a;">healthiest</strong> individuals</div>
        <div class="vs-item">→ "Optimal" = performing your best</div>
        <div class="vs-item">→ Tight ranges catch early drift</div>
      </div>
    </div>
  </div>
  <div class="bottom-note">There's a massive gap between "not sick" and "thriving."</div>
</div>`) });

// SLIDE 3 — The 6 categories
slides.push({ name: 'carousel-biomarkers-3', html: slide(3, 10, `
<div style="position:absolute; inset:0; background:linear-gradient(180deg, #0d1117 0%, #0a1a10 100%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 70% 30%, rgba(47,170,106,0.06) 0%, transparent 50%);"></div>
<div class="content">
  <div class="small-label">THE FULL PICTURE</div>
  <h2>6 categories<br>your panel should cover</h2>
  <div class="glass-box">
    <div class="glass-item" style="display:flex; gap:16px; align-items:center;">🧬 <div><strong style="color:white;">Hormones</strong> — Testosterone, Free T, Estradiol, DHEA-S</div></div>
    <div class="glass-item" style="display:flex; gap:16px; align-items:center;">🫀 <div><strong style="color:white;">Lipids</strong> — LDL, HDL, Triglycerides, ApoB, Lp(a)</div></div>
    <div class="glass-item" style="display:flex; gap:16px; align-items:center;">⚡ <div><strong style="color:white;">Metabolic</strong> — Fasting Glucose, HbA1c, Insulin</div></div>
    <div class="glass-item" style="display:flex; gap:16px; align-items:center;">🔥 <div><strong style="color:white;">Inflammation</strong> — hsCRP, Homocysteine</div></div>
    <div class="glass-item" style="display:flex; gap:16px; align-items:center;">🦋 <div><strong style="color:white;">Thyroid</strong> — TSH, Free T3, Free T4</div></div>
    <div class="glass-item" style="display:flex; gap:16px; align-items:center;">💊 <div><strong style="color:white;">Nutrients</strong> — Vitamin D, Ferritin, Magnesium RBC</div></div>
  </div>
  <div class="bottom-note">Most annual physicals cover maybe 2 of these. That's flying blind.</div>
</div>`) });

// SLIDE 4 — ApoB deep dive
slides.push({ name: 'carousel-biomarkers-4', html: slide(4, 10, `
<div style="position:absolute; inset:0; background:linear-gradient(160deg, #0d0d0d 0%, #0a2318 60%, #0d0d0d 100%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 20% 50%, rgba(47,170,106,0.1) 0%, transparent 50%);"></div>
<div class="content">
  <div class="small-label">MARKER SPOTLIGHT</div>
  <h2><span class="green">ApoB</span></h2>
  <p style="font-size:22px; color:rgba(255,255,255,0.5); margin-top:4px;">The #1 predictor of cardiovascular disease</p>
  <div class="marker-card">
    <div class="marker-detail"><strong>What it measures:</strong> The number of atherogenic particles in your blood — each one can embed in your artery walls</div>
    <div class="marker-detail"><strong>Why it's better than LDL:</strong> LDL measures cargo volume. ApoB counts the actual vehicles. More vehicles = more collisions.</div>
    <div class="range-row">
      <div class="range-block" style="background:rgba(47,170,106,0.15);">
        <div class="range-val green">< 70</div>
        <div class="range-label">Ideal (mg/dL)</div>
      </div>
      <div class="range-block" style="background:rgba(47,170,106,0.1);">
        <div class="range-val" style="color:#2faa6a;">< 90</div>
        <div class="range-label">Optimal</div>
      </div>
      <div class="range-block" style="background:rgba(245,158,11,0.15);">
        <div class="range-val" style="color:#f59e0b;">90–120</div>
        <div class="range-label">Borderline</div>
      </div>
      <div class="range-block" style="background:rgba(239,68,68,0.15);">
        <div class="range-val red">120+</div>
        <div class="range-label">High Risk</div>
      </div>
    </div>
  </div>
  <div class="bottom-note">Most doctors don't order this. You should ask for it.</div>
</div>`) });

// SLIDE 5 — Trig/HDL Ratio
slides.push({ name: 'carousel-biomarkers-5', html: slide(5, 10, `
<div style="position:absolute; inset:0; background:linear-gradient(135deg, #0a0a0f 0%, #0a2318 100%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 60% 70%, rgba(47,170,106,0.06) 0%, transparent 50%);"></div>
<div class="content">
  <div class="small-label">MARKER SPOTLIGHT</div>
  <h2><span class="green">Trig/HDL</span> Ratio</h2>
  <p style="font-size:22px; color:rgba(255,255,255,0.5); margin-top:4px;">The best proxy for insulin resistance hiding in plain sight</p>
  <div class="marker-card">
    <div class="marker-detail"><strong>How to calculate:</strong> Triglycerides ÷ HDL. That's it. Two numbers you already have.</div>
    <div class="marker-detail"><strong>Why it matters:</strong> Predicts metabolic syndrome, Type 2 diabetes risk, and cardiovascular events — often years before glucose goes abnormal.</div>
    <div class="range-row">
      <div class="range-block" style="background:rgba(47,170,106,0.15);">
        <div class="range-val green">< 1.0</div>
        <div class="range-label">Excellent</div>
      </div>
      <div class="range-block" style="background:rgba(47,170,106,0.1);">
        <div class="range-val" style="color:#2faa6a;">< 1.5</div>
        <div class="range-label">Ideal</div>
      </div>
      <div class="range-block" style="background:rgba(245,158,11,0.15);">
        <div class="range-val" style="color:#f59e0b;">2.0+</div>
        <div class="range-label">Concerning</div>
      </div>
      <div class="range-block" style="background:rgba(239,68,68,0.15);">
        <div class="range-val red">3.0+</div>
        <div class="range-label">Red Flag</div>
      </div>
    </div>
  </div>
  <div class="bottom-note">Your doctor probably never calculated this for you. Do it yourself.</div>
</div>`) });

// SLIDE 6 — hsCRP
slides.push({ name: 'carousel-biomarkers-6', html: slide(6, 10, `
<div style="position:absolute; inset:0; background:linear-gradient(180deg, #0d1117 0%, #0d0d0d 60%, #0a1a10 100%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 40% 30%, rgba(47,170,106,0.06) 0%, transparent 50%);"></div>
<div class="content">
  <div class="small-label">MARKER SPOTLIGHT</div>
  <h2><span class="green">hsCRP</span></h2>
  <p style="font-size:22px; color:rgba(255,255,255,0.5); margin-top:4px;">Your body's silent inflammation alarm</p>
  <div class="marker-card">
    <div class="marker-detail"><strong>What it measures:</strong> High-sensitivity C-reactive protein — a systemic marker of inflammation produced by the liver</div>
    <div class="marker-detail"><strong>Why it matters:</strong> Chronic low-grade inflammation drives heart disease, neurodegeneration, cancer, and accelerated aging. You can't feel it. You can only test it.</div>
    <div class="range-row">
      <div class="range-block" style="background:rgba(47,170,106,0.15);">
        <div class="range-val green">< 0.5</div>
        <div class="range-label">Excellent (mg/L)</div>
      </div>
      <div class="range-block" style="background:rgba(47,170,106,0.1);">
        <div class="range-val" style="color:#2faa6a;">< 1.0</div>
        <div class="range-label">Optimal</div>
      </div>
      <div class="range-block" style="background:rgba(245,158,11,0.15);">
        <div class="range-val" style="color:#f59e0b;">1–3</div>
        <div class="range-label">Elevated</div>
      </div>
      <div class="range-block" style="background:rgba(239,68,68,0.15);">
        <div class="range-val red">3+</div>
        <div class="range-label">High Risk</div>
      </div>
    </div>
  </div>
  <div class="bottom-note">Inflammation is the root of almost every chronic disease.</div>
</div>`) });

// SLIDE 7 — Vitamin D
slides.push({ name: 'carousel-biomarkers-7', html: slide(7, 10, `
<div style="position:absolute; inset:0; background:linear-gradient(135deg, #0d0d0d 0%, #0a2018 50%, #0d0d0d 100%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 50% 60%, rgba(47,170,106,0.08) 0%, transparent 60%);"></div>
<div class="content">
  <div class="small-label">MARKER SPOTLIGHT</div>
  <h2><span class="green">Vitamin D</span></h2>
  <p style="font-size:22px; color:rgba(255,255,255,0.5); margin-top:4px;">Not a vitamin. A hormone. And 93% of Americans are insufficient.</p>
  <div class="marker-card">
    <div class="marker-detail"><strong>What it controls:</strong> Immune function, hormone production, bone density, mood, cancer risk, cardiovascular health, gene expression</div>
    <div class="marker-detail"><strong>The gap:</strong> "Normal" starts at 30 ng/mL. Optimal is 50–80. Most people are 20–35 and think they're fine.</div>
    <div class="range-row">
      <div class="range-block" style="background:rgba(239,68,68,0.15);">
        <div class="range-val red">< 20</div>
        <div class="range-label">Deficient (ng/mL)</div>
      </div>
      <div class="range-block" style="background:rgba(245,158,11,0.15);">
        <div class="range-val" style="color:#f59e0b;">20–49</div>
        <div class="range-label">"Normal" but not optimal</div>
      </div>
      <div class="range-block" style="background:rgba(47,170,106,0.15); flex:1.3;">
        <div class="range-val green">50–80</div>
        <div class="range-label">Optimal ★</div>
      </div>
    </div>
  </div>
  <div class="bottom-note">The cheapest, highest-impact intervention in health optimization.</div>
</div>`) });

// SLIDE 8 — Lp(a)
slides.push({ name: 'carousel-biomarkers-8', html: slide(8, 10, `
<div style="position:absolute; inset:0; background:linear-gradient(160deg, #0d0d0d 0%, #1a0a0a 40%, #0d0d0d 100%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.06) 0%, transparent 50%);"></div>
<div class="content">
  <div class="small-label">THE HIDDEN RISK</div>
  <h2><span class="red">Lp(a)</span></h2>
  <p style="font-size:22px; color:rgba(255,255,255,0.5); margin-top:4px;">The genetic cardiovascular risk factor 95% of people never test</p>
  <div class="marker-card" style="border-color:rgba(239,68,68,0.3);">
    <div class="marker-detail"><strong>What it is:</strong> An LDL-like particle bound to apolipoprotein(a). It promotes atherosclerosis AND impairs your body's ability to dissolve clots.</div>
    <div class="marker-detail"><strong>The catch:</strong> ~90% genetically determined. Diet and exercise barely move it. 1 in 5 people are elevated.</div>
    <div class="marker-detail"><strong>What to do:</strong> Test once (it barely changes). If elevated, aggressively manage every other CV risk factor. Niacin may reduce 20–30%.</div>
    <div class="range-row">
      <div class="range-block" style="background:rgba(47,170,106,0.15);">
        <div class="range-val green">< 30</div>
        <div class="range-label">Low Risk (nmol/L)</div>
      </div>
      <div class="range-block" style="background:rgba(245,158,11,0.15);">
        <div class="range-val" style="color:#f59e0b;">30–75</div>
        <div class="range-label">Moderate</div>
      </div>
      <div class="range-block" style="background:rgba(239,68,68,0.15);">
        <div class="range-val red">75+</div>
        <div class="range-label">Elevated ⚠️</div>
      </div>
    </div>
  </div>
  <div class="bottom-note">One test. One time. Could change your entire health strategy.</div>
</div>`) });

// SLIDE 9 — What to do with the data
slides.push({ name: 'carousel-biomarkers-9', html: slide(9, 10, `
<div style="position:absolute; inset:0; background:linear-gradient(135deg, #0d0d0d 0%, #0a2018 50%, #0d0d0d 100%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 50% 40%, rgba(47,170,106,0.08) 0%, transparent 60%);"></div>
<div class="content" style="text-align:center; align-items:center;">
  <div class="small-label">NOW WHAT?</div>
  <h2 style="font-size:50px;">Testing is step 1.<br><span class="green">Acting on it</span> is step 2.</h2>
  <div class="glass-box" style="width:100%; text-align:left;">
    <div class="glass-item" style="display:flex; gap:16px; align-items:center; text-align:left;">
      <span style="font-size:28px; flex-shrink:0;">1️⃣</span>
      <div>Get comprehensive bloodwork (21+ markers)</div>
    </div>
    <div class="glass-item" style="display:flex; gap:16px; align-items:center; text-align:left;">
      <span style="font-size:28px; flex-shrink:0;">2️⃣</span>
      <div>Compare against <strong style="color:#2faa6a;">optimal</strong> ranges, not just "normal"</div>
    </div>
    <div class="glass-item" style="display:flex; gap:16px; align-items:center; text-align:left;">
      <span style="font-size:28px; flex-shrink:0;">3️⃣</span>
      <div>Build a targeted protocol: supplements, peptides, lifestyle</div>
    </div>
    <div class="glass-item" style="display:flex; gap:16px; align-items:center; text-align:left;">
      <span style="font-size:28px; flex-shrink:0;">4️⃣</span>
      <div>Retest in 90 days to verify what's working</div>
    </div>
  </div>
  <div class="bottom-note">Your body is giving you data. Start reading it.</div>
</div>`) });

// SLIDE 10 — CTA
slides.push({ name: 'carousel-biomarkers-10', html: slide(10, 10, `
<div style="position:absolute; inset:0; background:radial-gradient(ellipse at 50% 50%, #0a2e1a 0%, #000 70%);"></div>
<div style="position:absolute; inset:0; background:radial-gradient(circle at 50% 50%, rgba(47,170,106,0.12) 0%, transparent 50%);"></div>
<div class="content" style="align-items:center; text-align:center; justify-content:center;">
  <img src="data:image/jpeg;base64,${LOGO_B64}" style="width:80px; height:80px; border-radius:16px; margin-bottom:32px;" />
  <h1 style="font-size:54px;">Turn your biomarkers<br>into a <span class="green">personalized<br>protocol</span></h1>
  <div style="margin-top:28px;">
    <p style="font-size:22px; color:rgba(255,255,255,0.7); line-height:1.7;">
      Enter your bloodwork →<br>
      Get peptides, supplements & lifestyle recs<br>
      Dosages, timing & mechanisms included
    </p>
  </div>
  <div style="margin-top:36px;">
    <p style="font-size:36px; font-weight:800; color:#2faa6a;">↓ Link in bio ↓</p>
  </div>
  <p style="font-size:16px; color:rgba(255,255,255,0.4); margin-top:16px;">Free · 4 minutes · No account needed</p>
  <p style="font-size:18px; color:rgba(255,255,255,0.4); margin-top:8px;">BioStack — Personalized Longevity Protocol Engine</p>
</div>`) });

// Generate
slides.forEach(s => {
  const fp = path.join(__dirname, `${s.name}.html`);
  fs.writeFileSync(fp, s.html);
  console.log(`✓ ${s.name}.html`);
});
console.log(`\n✅ Generated ${slides.length} carousel slides.`);
