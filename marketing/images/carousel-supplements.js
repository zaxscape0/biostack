const fs = require('fs');
const path = require('path');

const LOGO_B64 = fs.readFileSync(path.join(__dirname, 'logo_b64.txt'), 'utf8').trim();

// Alternating dark charcoal / warm cream / green tones
const supps = [
  {
    name: 'cover',
    bg: '#3d3a38',
    textColor: '#f5f0e8',
    accentColor: '#2faa6a',
    body: `
      <div class="content" style="justify-content:center; padding:80px 90px;">
        <h1 style="font-family:'Playfair Display',serif; font-size:74px; line-height:1.1; color:#f5f0e8; font-weight:400;">
          6 supplements<br>to <em style="color:#2faa6a;">optimize</em><br>your health
        </h1>
        <div style="margin-top:60px;">
          <div class="row"><span class="left">Sleep & recovery</span><span class="line" style="background:#2faa6a;"></span><span class="right">Magnesium Glycinate</span></div>
          <div class="row"><span class="left">Immune & hormones</span><span class="line" style="background:#2faa6a;"></span><span class="right">Vitamin D3 + K2</span></div>
          <div class="row"><span class="left">Heart & inflammation</span><span class="line" style="background:#2faa6a;"></span><span class="right">Omega-3 (EPA/DHA)</span></div>
          <div class="row"><span class="left">Strength & cognition</span><span class="line" style="background:#2faa6a;"></span><span class="right">Creatine</span></div>
          <div class="row"><span class="left">Stress & cortisol</span><span class="line" style="background:#2faa6a;"></span><span class="right">Ashwagandha KSM-66</span></div>
          <div class="row"><span class="left">Cholesterol & glucose</span><span class="line" style="background:#2faa6a;"></span><span class="right">Berberine</span></div>
        </div>
        <div class="logo-bottom">
          <img src="data:image/jpeg;base64,${LOGO_B64}" />
          <span>BioStack</span>
        </div>
      </div>`
  },
  {
    name: 'magnesium',
    bg: '#f5f0e8',
    textColor: '#3d3a38',
    accentColor: '#2faa6a',
    body: `
      <div class="content" style="justify-content:center; padding:80px 90px;">
        <h1 class="question" style="color:#3d3a38;">
          Struggling with <em style="color:#2faa6a;">poor sleep</em> & feeling wired at night?
        </h1>
        <div class="pill-box" style="border-color:#2faa6a;">
          <span style="color:#2faa6a;">Magnesium<br>glycinate</span>
        </div>
        <p class="description" style="color:#3d3a38;">
          Binds GABA receptors to calm your nervous system. Improves deep sleep, reduces cortisol, and supports 300+ enzymatic reactions. Take 400–600mg before bed.
        </p>
        <div class="logo-bottom">
          <img src="data:image/jpeg;base64,${LOGO_B64}" />
          <span style="color:#3d3a38;">BioStack</span>
        </div>
      </div>`
  },
  {
    name: 'vitamind',
    bg: '#2faa6a',
    textColor: '#ffffff',
    accentColor: '#f5f0e8',
    body: `
      <div class="content" style="justify-content:center; padding:80px 90px;">
        <h1 class="question" style="color:white;">
          Low <em style="color:#f5f0e8;">energy</em>, weak immunity & mood dips?
        </h1>
        <div class="pill-box" style="border-color:white;">
          <span style="color:white;">Vitamin D3<br>+ K2</span>
        </div>
        <p class="description" style="color:rgba(255,255,255,0.9);">
          93% of Americans are insufficient. D3 regulates immune function, hormone production, and mood. K2 directs calcium to bones, not arteries. Optimal: 50–80 ng/mL.
        </p>
        <div class="logo-bottom">
          <img src="data:image/jpeg;base64,${LOGO_B64}" />
          <span style="color:rgba(255,255,255,0.7);">BioStack</span>
        </div>
      </div>`
  },
  {
    name: 'omega3',
    bg: '#3d3a38',
    textColor: '#f5f0e8',
    accentColor: '#2faa6a',
    body: `
      <div class="content" style="justify-content:center; padding:80px 90px;">
        <h1 class="question" style="color:#f5f0e8;">
          Worried about <em style="color:#2faa6a;">heart health</em> & chronic inflammation?
        </h1>
        <div class="pill-box" style="border-color:#2faa6a;">
          <span style="color:white;">Omega-3<br>EPA / DHA</span>
        </div>
        <p class="description" style="color:rgba(245,240,232,0.95);">
          EPA and DHA reduce triglycerides, lower hsCRP inflammation, stabilize arterial plaques, and support brain function. Aim for 2–4g combined daily with meals.
        </p>
        <div class="logo-bottom">
          <img src="data:image/jpeg;base64,${LOGO_B64}" />
          <span style="color:rgba(245,240,232,0.75);">BioStack</span>
        </div>
      </div>`
  },
  {
    name: 'creatine',
    bg: '#f5f0e8',
    textColor: '#3d3a38',
    accentColor: '#2faa6a',
    body: `
      <div class="content" style="justify-content:center; padding:80px 90px;">
        <h1 class="question" style="color:#3d3a38;">
          Want more <em style="color:#2faa6a;">strength</em>, sharper thinking & faster recovery?
        </h1>
        <div class="pill-box" style="border-color:#2faa6a;">
          <span style="color:#2faa6a;">Creatine<br>monohydrate</span>
        </div>
        <p class="description" style="color:#3d3a38;">
          The most researched supplement in existence. Replenishes ATP for explosive strength, supports cognitive performance and neuroprotection. 5g/day — no loading needed.
        </p>
        <div class="logo-bottom">
          <img src="data:image/jpeg;base64,${LOGO_B64}" />
          <span style="color:#3d3a38;">BioStack</span>
        </div>
      </div>`
  },
  {
    name: 'ashwagandha',
    bg: '#3d3a38',
    textColor: '#f5f0e8',
    accentColor: '#2faa6a',
    body: `
      <div class="content" style="justify-content:center; padding:80px 90px;">
        <h1 class="question" style="color:#f5f0e8;">
          Dealing with high <em style="color:#2faa6a;">stress</em> & elevated cortisol?
        </h1>
        <div class="pill-box" style="border-color:#2faa6a;">
          <span style="color:white;">Ashwagandha<br>KSM-66</span>
        </div>
        <p class="description" style="color:rgba(245,240,232,0.95);">
          Reduces cortisol by up to 30%, acts on GABA receptors for calm, supports thyroid function, and increases DHEA-S. Men see 10–15% testosterone boost. 600mg/day.
        </p>
        <div class="logo-bottom">
          <img src="data:image/jpeg;base64,${LOGO_B64}" />
          <span style="color:rgba(245,240,232,0.75);">BioStack</span>
        </div>
      </div>`
  },
  {
    name: 'berberine',
    bg: '#f5f0e8',
    textColor: '#3d3a38',
    accentColor: '#2faa6a',
    body: `
      <div class="content" style="justify-content:center; padding:80px 90px;">
        <h1 class="question" style="color:#3d3a38;">
          High <em style="color:#2faa6a;">LDL</em>, blood sugar, or metabolic issues?
        </h1>
        <div class="pill-box" style="border-color:#2faa6a;">
          <span style="color:#2faa6a;">Berberine</span>
        </div>
        <p class="description" style="color:#3d3a38;">
          Nature's metformin. Lowers LDL 20–30%, reduces fasting glucose 15–20%, activates AMPK — the master metabolic switch. 500mg 2–3x/day with meals. Pair with CoQ10.
        </p>
        <div class="logo-bottom">
          <img src="data:image/jpeg;base64,${LOGO_B64}" />
          <span style="color:#3d3a38;">BioStack</span>
        </div>
      </div>`
  },
];

function makeSlide(s, idx) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Inter:wght@400;500;600;700&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1350px; font-family:'Inter',sans-serif; overflow:hidden; position:relative; background:${s.bg}; }
  .content { position:relative; z-index:2; width:100%; height:100%; display:flex; flex-direction:column; }
  .question {
    font-family:'Playfair Display',serif;
    font-size:64px;
    font-weight:400;
    line-height:1.15;
    margin-bottom:50px;
  }
  .question em { font-style:italic; }
  .pill-box {
    display:inline-block;
    border-radius:0px;
    padding:24px 0 24px 32px; border-left:5px solid currentColor; background:none !important; box-shadow:none;
    margin-bottom:40px;
    max-width:500px;
  }
  .pill-box span {
    font-family:'Playfair Display',serif;
    font-size:48px;
    font-weight:700;
    line-height:1.2;
  }
  .description {
    font-family:'Playfair Display',serif;
    font-size:28px;
    font-weight:400;
    line-height:1.5;
    max-width:700px;
  }
  /* Cover slide rows */
  .row {
    display:flex;
    align-items:center;
    padding:22px 0;
    font-family:'Playfair Display',serif;
    font-size:32px;
    color:${supps[0].textColor};
  }
  .left { flex:1; font-weight:400; }
  .line { flex:0 0 120px; height:2px; margin:0 24px; }
  .right { flex:1; text-align:right; font-weight:400; }
  .logo-bottom {
    position:absolute; bottom:40px; left:90px;
    display:flex; align-items:center; gap:10px;
  }
  .logo-bottom img { width:30px; height:30px; border-radius:6px; }
  .logo-bottom span { font-size:16px; font-weight:600; color:rgba(245,240,232,0.75); }
</style>
</head><body>
${s.body}
</body></html>`;
}

supps.forEach((s, i) => {
  const html = makeSlide(s, i);
  const fp = path.join(__dirname, `carousel-supps-${i+1}-${s.name}.html`);
  fs.writeFileSync(fp, html);
  console.log(`✓ carousel-supps-${i+1}-${s.name}.html`);
});
console.log(`\n✅ Generated ${supps.length} slides.`);
