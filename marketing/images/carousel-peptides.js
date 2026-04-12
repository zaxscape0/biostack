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
  .bg { position:absolute; inset:0; }
  .overlay { position:absolute; inset:0; }
  .content { position:relative; z-index:2; width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; padding:70px 80px; }
  
  h1 { font-size:72px; font-weight:900; color:white; line-height:1.1; text-shadow: 0 2px 40px rgba(0,0,0,0.5); }
  h2 { font-size:58px; font-weight:800; color:white; line-height:1.15; text-shadow: 0 2px 30px rgba(0,0,0,0.5); }
  .subtitle { font-size:26px; color:rgba(255,255,255,0.85); line-height:1.5; margin-top:16px; text-shadow: 0 1px 20px rgba(0,0,0,0.5); }
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
    text-align:center;
    font-weight:500;
  }
  .glass-item:last-child { border-bottom:none; }
  
  .bottom-note {
    font-size:22px;
    color:rgba(255,255,255,0.75);
    text-align:center;
    margin-top:24px;
    font-style:italic;
  }
  
  .bottom-bar {
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 40px;
    z-index:10;
  }
  .logo-area { display:flex; align-items:center; gap:10px; }
  .logo-area img { width:32px; height:32px; border-radius:6px; }
  .logo-area span { font-size:16px; font-weight:700; color:rgba(255,255,255,0.6); }
  .bar-line { flex:1; height:1px; background:rgba(47,170,106,0.4); margin:0 20px; }
  .slide-num { font-size:14px; color:rgba(255,255,255,0.5); }
  .swipe { font-size:18px; font-style:italic; color:rgba(255,255,255,0.6); font-weight:500; }
  
  .green { color:#2faa6a; }
  .highlight-box {
    display:inline-block;
    background: rgba(47,170,106,0.15);
    border:1px solid rgba(47,170,106,0.3);
    border-radius:8px;
    padding:6px 16px;
    font-size:18px;
    color:#2faa6a;
    font-weight:600;
  }
  
  .peptide-card {
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(20px);
    border:1px solid rgba(47,170,106,0.3);
    border-radius:16px;
    padding:32px;
    margin-top:24px;
  }
  .peptide-name { font-size:36px; font-weight:800; color:#2faa6a; margin-bottom:8px; }
  .peptide-cat { font-size:16px; text-transform:uppercase; letter-spacing:3px; color:rgba(255,255,255,0.5); margin-bottom:16px; }
  .peptide-detail { font-size:20px; color:rgba(255,255,255,0.85); line-height:1.6; margin-bottom:8px; }
  .peptide-detail strong { color:white; }
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
slides.push({
  name: 'carousel-peptides-1',
  html: slide(1, 8, `
<div class="bg" style="background: radial-gradient(ellipse at 50% 60%, #0a2e1a 0%, #000000 70%);"></div>
<div class="overlay" style="background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%);"></div>
<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); z-index:1;">
  <div style="width:280px; height:280px; border-radius:50%; background:radial-gradient(circle, rgba(47,170,106,0.3) 0%, rgba(47,170,106,0.05) 60%, transparent 80%); filter:blur(40px);"></div>
</div>
<div style="position:absolute; top:42%; left:50%; transform:translate(-50%,-50%); z-index:1;">
  <svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="60" cy="80" r="24" fill="none" stroke="rgba(47,170,106,0.6)" stroke-width="2"/>
    <circle cx="140" cy="80" r="24" fill="none" stroke="rgba(47,170,106,0.6)" stroke-width="2"/>
    <circle cx="100" cy="40" r="24" fill="none" stroke="rgba(47,170,106,0.6)" stroke-width="2"/>
    <circle cx="100" cy="120" r="24" fill="none" stroke="rgba(47,170,106,0.6)" stroke-width="2"/>
    <circle cx="100" cy="160" r="24" fill="none" stroke="rgba(47,170,106,0.4)" stroke-width="1.5"/>
    <line x1="78" y1="68" x2="84" y2="52" stroke="rgba(47,170,106,0.5)" stroke-width="1.5"/>
    <line x1="122" y1="68" x2="116" y2="52" stroke="rgba(47,170,106,0.5)" stroke-width="1.5"/>
    <line x1="78" y1="92" x2="84" y2="108" stroke="rgba(47,170,106,0.5)" stroke-width="1.5"/>
    <line x1="122" y1="92" x2="116" y2="108" stroke="rgba(47,170,106,0.5)" stroke-width="1.5"/>
    <line x1="84" y1="80" x2="116" y2="80" stroke="rgba(47,170,106,0.5)" stroke-width="1.5"/>
    <line x1="100" y1="144" x2="100" y2="136" stroke="rgba(47,170,106,0.4)" stroke-width="1.5"/>
    <circle cx="100" cy="80" r="8" fill="rgba(47,170,106,0.8)"/>
  </svg>
</div>
<div class="content" style="justify-content:flex-start; padding-top:100px;">
  <div class="small-label">YOUR GUIDE TO</div>
  <h1 style="font-size:82px;">Peptides</h1>
  <div style="margin-top:auto; margin-bottom:100px; text-align:center;">
    <p style="font-size:24px; color:rgba(255,255,255,0.7); line-height:1.6;">The Most Powerful Signaling Molecules<br>for Health Optimization & Longevity</p>
    <p class="swipe" style="margin-top:32px;">Swipe for more →</p>
  </div>
</div>`)
});

// SLIDE 2 — What are peptides?
slides.push({
  name: 'carousel-peptides-2',
  html: slide(2, 8, `
<div class="bg" style="background: linear-gradient(135deg, #0a1628 0%, #0d0d0d 50%, #0a2018 100%);"></div>
<div class="overlay" style="background: radial-gradient(ellipse at 30% 40%, rgba(47,170,106,0.08) 0%, transparent 60%);"></div>
<div class="content">
  <h2>What are<br>peptides?</h2>
  <div class="glass-box">
    <p style="font-size:24px; color:rgba(255,255,255,0.9); line-height:1.7;">
      Short chains of <strong style="color:white;">amino acids</strong> — typically 2 to 50 — that act as <strong style="color:#2faa6a;">signaling molecules</strong> in your body.
    </p>
    <div style="height:20px;"></div>
    <p style="font-size:22px; color:rgba(255,255,255,0.7); line-height:1.6;">
      They tell your cells what to do: repair tissue, release hormones, reduce inflammation, enhance cognition — with precision that supplements alone can't match.
    </p>
  </div>
  <div class="bottom-note">Think of them as biological text messages to your cells.</div>
</div>`)
});

// SLIDE 3 — What can they target?
slides.push({
  name: 'carousel-peptides-3',
  html: slide(3, 8, `
<div class="bg" style="background: linear-gradient(180deg, #0d1117 0%, #0a1a10 100%);"></div>
<div class="overlay" style="background: radial-gradient(ellipse at 70% 30%, rgba(47,170,106,0.06) 0%, transparent 50%);"></div>
<div class="content">
  <h2>What can<br>they target?</h2>
  <div class="glass-box">
    <div class="glass-item">🔧 Tissue repair & gut healing</div>
    <div class="glass-item">💪 Muscle growth & fat loss</div>
    <div class="glass-item">🧠 Cognitive enhancement</div>
    <div class="glass-item">😴 Deep sleep optimization</div>
    <div class="glass-item">⚡ Hormone production</div>
    <div class="glass-item">🛡️ Anti-aging & longevity</div>
  </div>
  <div class="bottom-note">Each peptide has a specific mechanism. Choose wrong and you waste time + money.</div>
</div>`)
});

// SLIDE 4 — The Big 5
slides.push({
  name: 'carousel-peptides-4',
  html: slide(4, 8, `
<div class="bg" style="background: linear-gradient(160deg, #0d0d0d 0%, #0a2318 60%, #0d0d0d 100%);"></div>
<div class="overlay" style="background: radial-gradient(ellipse at 50% 80%, rgba(47,170,106,0.05) 0%, transparent 50%);"></div>
<div class="content" style="padding-top:60px; padding-bottom:90px;">
  <div class="small-label">THE TOP 5</div>
  <h2 style="font-size:48px;">Peptides You<br>Should Know</h2>
  <div style="display:grid; gap:14px; margin-top:28px;">
    <div class="glass-box" style="padding:18px 28px; margin:0; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:24px; font-weight:700; color:#2faa6a;">BPC-157</span>
      <span style="font-size:18px; color:rgba(255,255,255,0.6);">Tissue Repair</span>
    </div>
    <div class="glass-box" style="padding:18px 28px; margin:0; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:24px; font-weight:700; color:#2faa6a;">CJC-1295 / Ipamorelin</span>
      <span style="font-size:18px; color:rgba(255,255,255,0.6);">Growth Hormone</span>
    </div>
    <div class="glass-box" style="padding:18px 28px; margin:0; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:24px; font-weight:700; color:#2faa6a;">Semax</span>
      <span style="font-size:18px; color:rgba(255,255,255,0.6);">Cognition</span>
    </div>
    <div class="glass-box" style="padding:18px 28px; margin:0; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:24px; font-weight:700; color:#2faa6a;">Epithalon</span>
      <span style="font-size:18px; color:rgba(255,255,255,0.6);">Anti-Aging</span>
    </div>
    <div class="glass-box" style="padding:18px 28px; margin:0; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:24px; font-weight:700; color:#2faa6a;">AOD-9604</span>
      <span style="font-size:18px; color:rgba(255,255,255,0.6);">Fat Loss</span>
    </div>
  </div>
  <div class="bottom-note">The right one depends on YOUR goals and biology.</div>
</div>`)
});

// SLIDE 5 — BPC-157 Deep Dive
slides.push({
  name: 'carousel-peptides-5',
  html: slide(5, 8, `
<div class="bg" style="background: linear-gradient(135deg, #0a0a0f 0%, #0a2318 100%);"></div>
<div class="overlay" style="background: radial-gradient(ellipse at 20% 50%, rgba(47,170,106,0.1) 0%, transparent 50%);"></div>
<div class="content">
  <div class="small-label">DEEP DIVE</div>
  <h2 style="font-size:52px;"><span class="green">BPC-157</span></h2>
  <p style="font-size:22px; color:rgba(255,255,255,0.6); margin-top:4px;">Body Protection Compound-157</p>
  <div class="peptide-card">
    <div class="peptide-detail"><strong>What it does:</strong> Accelerates healing of tendons, ligaments, muscles, gut lining, and even the blood-brain barrier</div>
    <div class="peptide-detail"><strong>How:</strong> Upregulates growth hormone receptors, promotes angiogenesis via the FAK-paxillin pathway</div>
    <div class="peptide-detail"><strong>Dose:</strong> 250–500 mcg/day subcutaneous</div>
    <div class="peptide-detail"><strong>Timing:</strong> Split AM/PM, near injury site if applicable</div>
    <div style="margin-top:16px;">
      <span class="highlight-box">Research: Emerging ✓</span>
    </div>
  </div>
  <div class="bottom-note">The most popular peptide for injury recovery — for good reason.</div>
</div>`)
});

// SLIDE 6 — Why supplements aren't enough
slides.push({
  name: 'carousel-peptides-6',
  html: slide(6, 8, `
<div class="bg" style="background: linear-gradient(180deg, #0d1117 0%, #0d0d0d 60%, #0a1a10 100%);"></div>
<div class="overlay" style="background: radial-gradient(ellipse at 60% 70%, rgba(47,170,106,0.06) 0%, transparent 50%);"></div>
<div class="content">
  <h2>Why supplements<br>alone <span style="color:rgba(255,255,255,0.3);">aren't enough</span></h2>
  <div class="glass-box">
    <div class="glass-item" style="text-align:left; display:flex; gap:16px; align-items:center;">
      <span style="font-size:28px;">💊</span>
      <div><strong style="color:white;">Supplements</strong> fill nutritional gaps<br><span style="font-size:18px; color:rgba(255,255,255,0.5);">Vitamins, minerals, adaptogens</span></div>
    </div>
    <div class="glass-item" style="text-align:left; display:flex; gap:16px; align-items:center;">
      <span style="font-size:28px;">🧬</span>
      <div><strong style="color:#2faa6a;">Peptides</strong> send targeted signals<br><span style="font-size:18px; color:rgba(255,255,255,0.5);">Repair, hormone release, neuroprotection</span></div>
    </div>
    <div class="glass-item" style="text-align:left; display:flex; gap:16px; align-items:center;">
      <span style="font-size:28px;">🏃</span>
      <div><strong style="color:white;">Lifestyle</strong> creates the environment<br><span style="font-size:18px; color:rgba(255,255,255,0.5);">Sleep, exercise, stress management</span></div>
    </div>
  </div>
  <div class="bottom-note">The best protocols combine all three. That's what BioStack builds.</div>
</div>`)
});

// SLIDE 7 — Personalization matters
slides.push({
  name: 'carousel-peptides-7',
  html: slide(7, 8, `
<div class="bg" style="background: linear-gradient(135deg, #0d0d0d 0%, #0a2018 50%, #0d0d0d 100%);"></div>
<div class="overlay" style="background: radial-gradient(ellipse at 50% 40%, rgba(47,170,106,0.08) 0%, transparent 60%);"></div>
<div class="content" style="align-items:center; text-align:center;">
  <div class="small-label" style="text-align:center;">Why it matters</div>
  <h2 style="font-size:52px;">Your peptide protocol<br>should match<br><span class="green">your biology</span></h2>
  <div class="glass-box" style="width:100%;">
    <div class="glass-item">A 28-year-old athlete needs different peptides than a 55-year-old executive</div>
    <div class="glass-item">Your bloodwork reveals what your body actually needs</div>
    <div class="glass-item">Generic protocols waste money and miss opportunities</div>
  </div>
  <div class="bottom-note">One protocol. Built for one person. You.</div>
</div>`)
});

// SLIDE 8 — CTA
slides.push({
  name: 'carousel-peptides-8',
  html: slide(8, 8, `
<div class="bg" style="background: radial-gradient(ellipse at 50% 50%, #0a2e1a 0%, #000000 70%);"></div>
<div class="overlay" style="background: radial-gradient(circle at 50% 50%, rgba(47,170,106,0.12) 0%, transparent 50%);"></div>
<div class="content" style="align-items:center; text-align:center; justify-content:center;">
  <img src="data:image/jpeg;base64,${LOGO_B64}" style="width:80px; height:80px; border-radius:16px; margin-bottom:32px;" />
  <h1 style="font-size:56px;">Get your personalized<br><span class="green">peptide + supplement</span><br>protocol</h1>
  <div style="margin-top:32px;">
    <p style="font-size:22px; color:rgba(255,255,255,0.7); line-height:1.7;">
      21+ biomarkers analyzed<br>
      Dosages, timing & mechanisms<br>
      Free in under 5 minutes
    </p>
  </div>
  <div style="margin-top:40px;">
    <p style="font-size:36px; font-weight:800; color:#2faa6a;">↓ Link in bio ↓</p>
  </div>
  <p style="font-size:18px; color:rgba(255,255,255,0.4); margin-top:20px;">BioStack — Personalized Longevity Protocol Engine</p>
</div>`)
});

// Generate all
slides.forEach(s => {
  const filepath = path.join(__dirname, `${s.name}.html`);
  fs.writeFileSync(filepath, s.html);
  console.log(`✓ ${s.name}.html`);
});
console.log(`\n✅ Generated ${slides.length} carousel slides.`);
