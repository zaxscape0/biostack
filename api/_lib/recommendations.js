/**
 * BioStack Recommendation Engine
 * Generates personalized peptide, supplement, and lifestyle recommendations
 *
 * NOTE: Cholesterol markers (totalCholesterol, ldl, hdl, triglycerides, apoB, lpa)
 * are processed below but the frontend form does not yet have input fields for them.
 * The bloodwork JSONB column already supports arbitrary keys — no schema change needed.
 * When frontend source is available, add these fields to the bloodwork form step.
 */

function generateRecommendations(assessment) {
  const goals = typeof assessment.goals === 'string' ? JSON.parse(assessment.goals) : assessment.goals;
  const bloodwork = typeof assessment.bloodwork === 'string' ? JSON.parse(assessment.bloodwork) : (assessment.bloodwork || {});
  const age = assessment.age;
  const sex = assessment.sex;
  const sleep = assessment.sleep_hours || 7;
  const exercise = assessment.exercise_days || 3;
  const stress = assessment.stress_level || 3;
  const recs = [];

  // ── PEPTIDES ──────────────────────────────────────────────

  if (goals.includes('anti-aging') || goals.includes('injury-recovery')) {
    recs.push({
      name: 'BPC-157',
      category: 'peptide',
      match_strength: goals.includes('injury-recovery') ? 'high' : 'medium',
      research_status: 'emerging',
      reasoning: `As a ${age}-year-old ${sex} focused on ${goals.includes('injury-recovery') ? 'injury recovery' : 'anti-aging'}, BPC-157 supports tissue repair and gut healing. Its regenerative properties align well with your goals.`,
      dosage: '250–500 mcg/day, subcutaneous',
      timing: 'Split into 2 doses: morning and evening, near injury site if applicable',
      mechanism: 'BPC-157 is a pentadecapeptide derived from human gastric juice. It promotes angiogenesis, upregulates growth hormone receptors, and accelerates tendon-to-bone healing via the FAK-paxillin pathway.'
    });
  }

  if (goals.includes('injury-recovery') || goals.includes('muscle-growth')) {
    recs.push({
      name: 'TB-500 (Thymosin Beta-4)',
      category: 'peptide',
      match_strength: goals.includes('injury-recovery') ? 'high' : 'medium',
      research_status: 'emerging',
      reasoning: `TB-500 complements BPC-157 for tissue repair. With ${exercise} training days/week, recovery support is important for your ${sex === 'male' ? 'body' : 'body'}.`,
      dosage: '2.5 mg twice weekly (loading), then 2.5 mg weekly (maintenance)',
      timing: 'Subcutaneous injection, any time of day',
      mechanism: 'Thymosin Beta-4 promotes cell migration by upregulating actin, reduces inflammation, and encourages stem cell maturation for tissue regeneration.'
    });
  }

  if (goals.includes('anti-aging') || goals.includes('sleep-optimization')) {
    recs.push({
      name: 'Epithalon',
      category: 'peptide',
      match_strength: goals.includes('anti-aging') ? 'high' : 'medium',
      research_status: 'experimental',
      reasoning: `At age ${age}, telomere maintenance becomes increasingly important. Epithalon may support cellular longevity${goals.includes('sleep-optimization') ? ' and has been associated with improved circadian regulation' : ''}.`,
      dosage: '5–10 mg/day for 10–20 day cycles, 2–3 times per year',
      timing: 'Subcutaneous injection, evening preferred',
      mechanism: 'Epithalon (Epitalon) is a synthetic tetrapeptide that activates telomerase, the enzyme responsible for maintaining telomere length, potentially slowing cellular aging.'
    });
  }

  if (goals.includes('muscle-growth') || goals.includes('fat-loss') || goals.includes('anti-aging')) {
    recs.push({
      name: 'CJC-1295 / Ipamorelin',
      category: 'peptide',
      match_strength: 'high',
      research_status: 'emerging',
      reasoning: `This GH secretagogue stack is well-suited for a ${age}-year-old ${sex} targeting ${goals.filter(g => ['muscle-growth','fat-loss','anti-aging'].includes(g)).join(' and ')}. It stimulates natural growth hormone release without the risks of exogenous GH.`,
      dosage: 'CJC-1295 (no DAC): 100 mcg + Ipamorelin: 100–300 mcg',
      timing: 'Before bed on an empty stomach (GH pulse during deep sleep). 5 days on, 2 days off.',
      mechanism: 'CJC-1295 mimics GHRH to stimulate GH release; Ipamorelin is a ghrelin mimetic that amplifies the pulse. Together they synergistically increase GH and IGF-1 without significant cortisol or prolactin elevation.'
    });
  }

  if (goals.includes('cognitive-enhancement')) {
    recs.push({
      name: 'Semax',
      category: 'peptide',
      match_strength: 'high',
      research_status: 'emerging',
      reasoning: `For cognitive enhancement, Semax offers neuroprotective and nootropic effects. With a stress level of ${stress}/5, its anxiolytic properties may also be beneficial.`,
      dosage: '200–600 mcg/day intranasal',
      timing: 'Morning, intranasal spray. Cycle: 3 weeks on, 1 week off.',
      mechanism: 'Semax is a synthetic analog of ACTH(4-10) that increases BDNF expression, modulates serotonergic and dopaminergic systems, and enhances neuroplasticity.'
    });
  }

  if (goals.includes('sleep-optimization')) {
    recs.push({
      name: 'DSIP (Delta Sleep-Inducing Peptide)',
      category: 'peptide',
      match_strength: 'high',
      research_status: 'experimental',
      reasoning: `With ${sleep} hours of sleep currently, DSIP may help improve sleep architecture and increase time in restorative delta wave sleep.`,
      dosage: '100–250 mcg before bed',
      timing: '30 minutes before sleep, subcutaneous or intranasal',
      mechanism: 'DSIP modulates sleep by promoting delta EEG activity, reduces cortisol, and may normalize disrupted circadian rhythms through action on GABA and serotonin systems.'
    });
  }

  if (goals.includes('fat-loss')) {
    recs.push({
      name: 'AOD-9604',
      category: 'peptide',
      match_strength: 'high',
      research_status: 'emerging',
      reasoning: `AOD-9604 targets fat metabolism without the diabetogenic effects of full GH. At ${assessment.weight} lbs, this can support your fat loss goals alongside exercise (${exercise} days/week).`,
      dosage: '300 mcg/day',
      timing: 'Morning on empty stomach, subcutaneous in abdominal fat area',
      mechanism: 'AOD-9604 is a modified fragment of hGH (176-191) that stimulates lipolysis and inhibits lipogenesis without affecting blood sugar or growth.'
    });
  }

  if (goals.includes('hormone-optimization') && sex === 'male') {
    recs.push({
      name: 'Kisspeptin-10',
      category: 'peptide',
      match_strength: 'high',
      research_status: 'experimental',
      reasoning: `For hormone optimization, Kisspeptin-10 stimulates your natural GnRH-LH-testosterone axis.${bloodwork.testosterone ? ` Your testosterone of ${bloodwork.testosterone} ng/dL can potentially be improved through this upstream approach.` : ''}`,
      dosage: '100–200 mcg/day',
      timing: 'Morning, subcutaneous. Cycle: 4 weeks on, 2 weeks off.',
      mechanism: 'Kisspeptin activates GPR54 receptors on GnRH neurons in the hypothalamus, triggering the HPG axis to increase LH, FSH, and subsequently endogenous testosterone production.'
    });
  }

  if (goals.includes('hair-skin-health') || goals.includes('anti-aging')) {
    recs.push({
      name: 'GHK-Cu (Copper Peptide)',
      category: 'peptide',
      match_strength: goals.includes('hair-skin-health') ? 'high' : 'medium',
      research_status: 'established',
      reasoning: `GHK-Cu is one of the most well-studied peptides for skin regeneration and hair health. At age ${age}, declining copper peptide levels make supplementation particularly relevant.`,
      dosage: '1–2 mg/day subcutaneous, or topical serum 1–2% concentration',
      timing: 'Evening application for topical; any time for injection. Cycle: 8 weeks on, 4 weeks off.',
      mechanism: 'GHK-Cu stimulates collagen and glycosaminoglycan synthesis, attracts immune and endothelial cells, and has antioxidant and anti-inflammatory effects. It remodels tissue by activating TGF-β and metalloproteinases.'
    });
  }

  // ── SUPPLEMENTS ───────────────────────────────────────────

  const lowVitD = bloodwork.vitaminD && bloodwork.vitaminD < 50;
  recs.push({
    name: 'Vitamin D3 + K2',
    category: 'supplement',
    match_strength: lowVitD ? 'high' : 'medium',
    research_status: 'established',
    reasoning: lowVitD
      ? `Your Vitamin D level of ${bloodwork.vitaminD} ng/mL is below optimal (50–80 ng/mL). D3+K2 supplementation is strongly recommended.`
      : `Vitamin D3+K2 is foundational for immune function, bone health, and hormone optimization. ${!bloodwork.vitaminD ? 'Consider testing to dial in your dose.' : `Your level of ${bloodwork.vitaminD} ng/mL is adequate but supplementation maintains it.`}`,
    dosage: lowVitD ? '5,000–10,000 IU D3 + 200 mcg K2 (MK-7) daily' : '2,000–5,000 IU D3 + 100 mcg K2 (MK-7) daily',
    timing: 'With a fat-containing meal for absorption',
    mechanism: 'Vitamin D3 regulates calcium absorption, immune function, and gene expression. K2 (MK-7) directs calcium to bones and away from arteries, preventing vascular calcification.'
  });

  recs.push({
    name: 'Magnesium Glycinate',
    category: 'supplement',
    match_strength: sleep < 7 || stress >= 4 ? 'high' : 'medium',
    research_status: 'established',
    reasoning: `Magnesium is involved in 300+ enzymatic reactions. ${sleep < 7 ? `With only ${sleep} hours of sleep, magnesium glycinate can improve sleep quality. ` : ''}${stress >= 4 ? `Your stress level of ${stress}/5 depletes magnesium faster. ` : ''}Most adults are deficient.`,
    dosage: '400–600 mg elemental magnesium daily',
    timing: 'Evening, 1–2 hours before bed',
    mechanism: 'Magnesium glycinate binds to GABA receptors (calming), regulates HPA axis cortisol output, and supports melatonin production. Glycinate form has superior bioavailability and minimal GI effects.'
  });

  if (goals.includes('muscle-growth') || goals.includes('cognitive-enhancement')) {
    recs.push({
      name: 'Creatine Monohydrate',
      category: 'supplement',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `Creatine is the most researched sports supplement with proven benefits for ${goals.includes('muscle-growth') ? 'muscle strength and lean mass' : ''}${goals.includes('muscle-growth') && goals.includes('cognitive-enhancement') ? ' and ' : ''}${goals.includes('cognitive-enhancement') ? 'cognitive performance and neuroprotection' : ''}.`,
      dosage: '5 g/day (no loading phase needed)',
      timing: 'Any time, with or without food. Consistency matters more than timing.',
      mechanism: 'Creatine replenishes phosphocreatine stores, enabling faster ATP regeneration during high-intensity efforts. In the brain, it supports bioenergetics and has neuroprotective properties.'
    });
  }

  recs.push({
    name: 'Omega-3 (EPA/DHA)',
    category: 'supplement',
    match_strength: (bloodwork.triglycerides && bloodwork.triglycerides >= 100) || (bloodwork.hsCRP && bloodwork.hsCRP > 1) ? 'high' : 'medium',
    research_status: 'established',
    reasoning: `Omega-3 fatty acids support cardiovascular health, reduce systemic inflammation${bloodwork.hsCRP && bloodwork.hsCRP > 1 ? ` (your hsCRP of ${bloodwork.hsCRP} mg/L suggests elevated inflammation)` : ''}${bloodwork.triglycerides && bloodwork.triglycerides >= 100 ? ` and help lower triglycerides (yours: ${bloodwork.triglycerides} mg/dL)` : ''}, and benefit brain function.`,
    dosage: bloodwork.triglycerides && bloodwork.triglycerides >= 100 ? '3–4 g combined EPA/DHA daily (high EPA ratio preferred)' : '2–3 g combined EPA/DHA daily (aim for 2:1 EPA:DHA ratio)',
    timing: 'With meals to improve absorption and reduce fishy aftertaste',
    mechanism: 'EPA and DHA are incorporated into cell membranes, produce anti-inflammatory resolvins and protectins, lower triglycerides by reducing hepatic VLDL output, and support neuronal membrane fluidity.'
  });

  if (stress >= 3 || goals.includes('hormone-optimization')) {
    recs.push({
      name: 'Ashwagandha (KSM-66)',
      category: 'supplement',
      match_strength: stress >= 4 ? 'high' : 'medium',
      research_status: 'established',
      reasoning: `With a stress level of ${stress}/5, ashwagandha (KSM-66 extract) can significantly reduce cortisol.${sex === 'male' && goals.includes('hormone-optimization') ? ' Studies also show 10–15% testosterone increases in men.' : ''} ${goals.includes('sleep-optimization') ? 'It also improves sleep quality.' : ''}`,
      dosage: '600 mg/day KSM-66 standardized extract',
      timing: 'With breakfast or split 300 mg morning + 300 mg evening',
      mechanism: 'Ashwagandha modulates the HPA axis, reducing cortisol by up to 30%. It acts as a GABAergic agent, supports thyroid function, and increases DHEA-S. The withanolides also have anti-inflammatory effects.'
    });
  }

  if (goals.includes('cognitive-enhancement')) {
    recs.push({
      name: "Lion's Mane (Hericium erinaceus)",
      category: 'supplement',
      match_strength: 'high',
      research_status: 'emerging',
      reasoning: `Lion's Mane is one of the most promising natural nootropics for cognitive enhancement. It stimulates nerve growth factor (NGF) production, supporting memory, focus, and neuroplasticity.`,
      dosage: '1,000–2,000 mg/day of fruiting body extract (min 30% polysaccharides)',
      timing: 'Morning with breakfast',
      mechanism: "Hericenones and erinacines cross the BBB and stimulate NGF and BDNF synthesis, promoting neurogenesis, myelination, and synaptic plasticity."
    });
  }

  if (goals.includes('gut-health')) {
    recs.push({
      name: 'Probiotics (Multi-Strain)',
      category: 'supplement',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `For gut health optimization, a multi-strain probiotic supports microbiome diversity. Gut health impacts immunity, mood (gut-brain axis), and nutrient absorption.`,
      dosage: '50+ billion CFU, 10+ strains including Lactobacillus and Bifidobacterium species',
      timing: 'Morning, 30 minutes before breakfast on an empty stomach',
      mechanism: 'Probiotics compete with pathogenic bacteria for adhesion sites, produce short-chain fatty acids (butyrate, propionate), strengthen tight junctions, and modulate immune responses via the GALT.'
    });
  }

  if (sex === 'male' && goals.includes('hormone-optimization')) {
    recs.push({
      name: 'Tongkat Ali (Eurycoma longifolia)',
      category: 'supplement',
      match_strength: 'high',
      research_status: 'emerging',
      reasoning: `Tongkat Ali has strong evidence for supporting male hormonal health.${bloodwork.testosterone ? ` With testosterone at ${bloodwork.testosterone} ng/dL, it may help optimize your levels naturally.` : ''} It works synergistically with ashwagandha.`,
      dosage: '400 mg/day standardized extract (min 2% eurycomanone)',
      timing: 'Morning with food. Cycle: 5 days on, 2 days off.',
      mechanism: 'Tongkat Ali reduces SHBG (increasing free testosterone), inhibits aromatase (reducing estrogen conversion), and supports Leydig cell function. It also lowers cortisol via HPA modulation.'
    });
  }

  const lowFerritin = bloodwork.ferritin && bloodwork.ferritin < 50;
  if (lowFerritin || (sex === 'female' && goals.includes('energy-vitality'))) {
    recs.push({
      name: 'Iron (Ferrous Bisglycinate)',
      category: 'supplement',
      match_strength: lowFerritin ? 'high' : 'medium',
      research_status: 'established',
      reasoning: lowFerritin
        ? `Your ferritin of ${bloodwork.ferritin} ng/mL is below optimal (50–150 ng/mL). Iron supplementation will improve oxygen delivery and energy.`
        : `As a ${sex} focused on energy and vitality, iron status is worth optimizing. Bisglycinate form is gentle on the stomach.`,
      dosage: '25–50 mg elemental iron daily',
      timing: 'On empty stomach with vitamin C for absorption. Separate from calcium, coffee, and tea by 2 hours.',
      mechanism: 'Iron is essential for hemoglobin synthesis, mitochondrial electron transport, and thyroid hormone production. Bisglycinate chelate has 3–4x absorption vs. ferrous sulfate with fewer GI side effects.'
    });
  }

  // ── LIFESTYLE ─────────────────────────────────────────────

  if (sleep < 7) {
    recs.push({
      name: 'Sleep Hygiene Protocol',
      category: 'lifestyle',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `You're currently getting ${sleep} hours of sleep. Research shows 7–9 hours is optimal for recovery, hormone production, and cognitive function. Improving sleep will amplify all other interventions.`,
      dosage: 'Target 7.5–8.5 hours of sleep per night',
      timing: 'Consistent bedtime ±30 min, even on weekends. No screens 1 hour before bed. Cool room (65–68°F).',
      mechanism: 'Adequate sleep optimizes GH secretion (80% released during deep sleep), consolidates memory, clears brain metabolites via the glymphatic system, and regulates appetite hormones (leptin/ghrelin).'
    });
  }

  if (exercise < 3) {
    recs.push({
      name: 'Structured Exercise Program',
      category: 'lifestyle',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `At ${exercise} training days/week, increasing to 3–5 days would significantly improve your outcomes across all goals. A mix of resistance and cardio is optimal.`,
      dosage: '3–5 days/week: 3 resistance + 2 cardio (or HIIT)',
      timing: 'Morning or early afternoon for optimal cortisol alignment. Allow 48h recovery between same muscle groups.',
      mechanism: 'Resistance training stimulates mTOR for muscle protein synthesis, increases GH and testosterone acutely, and improves insulin sensitivity. Cardio improves mitochondrial biogenesis and cardiovascular health.'
    });
  }

  if (stress >= 4) {
    recs.push({
      name: 'Stress Management Practice',
      category: 'lifestyle',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `Your stress level of ${stress}/5 is significantly elevated. Chronic stress elevates cortisol, impairs recovery, disrupts sleep, and accelerates aging. This is a foundational intervention.`,
      dosage: '10–20 minutes daily minimum',
      timing: 'Morning meditation or breathwork. Physiological sigh technique (double inhale + extended exhale) for acute stress.',
      mechanism: 'Meditation and breathwork activate the parasympathetic nervous system via vagal tone, reduce cortisol and inflammatory cytokines (IL-6, TNF-α), and improve HRV—a key biomarker of resilience.'
    });
  }

  if (goals.includes('energy-vitality') || goals.includes('anti-aging')) {
    recs.push({
      name: 'Cold Exposure Protocol',
      category: 'lifestyle',
      match_strength: 'medium',
      research_status: 'emerging',
      reasoning: `Cold exposure activates brown adipose tissue, increases norepinephrine (boosting energy and focus), and may support longevity pathways. At age ${age}, these hormetic stressors become increasingly valuable.`,
      dosage: '2–5 minutes cold water (50–59°F) 3–4x per week',
      timing: 'Morning for the energizing norepinephrine boost. Avoid within 4 hours after resistance training (may blunt hypertrophy).',
      mechanism: 'Cold exposure triggers norepinephrine release (2–3x baseline), activates brown fat thermogenesis via UCP1, increases mitochondrial biogenesis, and upregulates cold shock proteins (RBM3) with neuroprotective effects.'
    });
  }

  // ── CHOLESTEROL / LIPID PANEL ──────────────────────────────
  // Markers: totalCholesterol, ldl, hdl, triglycerides, apoB, lpa
  // Optimal ranges:
  //   LDL: <100 optimal, 100-129 borderline, ≥130 high
  //   HDL: >60 (male) / >70 (female) optimal; <40 (male) / <50 (female) low
  //   Triglycerides: <100 optimal, 100-149 borderline, ≥150 high
  //   ApoB: <90 mg/dL, <70 for high-risk
  //   Lp(a): >75 nmol/L elevated (genetic, limited treatment)
  //   Total Cholesterol: context-dependent (ratios matter more)

  const ldl = bloodwork.ldl;
  const hdl = bloodwork.hdl;
  const trigs = bloodwork.triglycerides;
  const apoB = bloodwork.apoB;
  const lpa = bloodwork.lpa;
  const totalChol = bloodwork.totalCholesterol;

  const hasAnyCholesterol = ldl || hdl || trigs || apoB || lpa || totalChol;

  // High LDL or ApoB → Berberine
  const highLDL = ldl && ldl >= 130;
  const borderlineLDL = ldl && ldl >= 100 && ldl < 130;
  const highApoB = apoB && apoB >= 90;

  if (highLDL || highApoB) {
    recs.push({
      name: 'Berberine',
      category: 'supplement',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `${highLDL ? `Your LDL of ${ldl} mg/dL is above optimal (<100 mg/dL). ` : ''}${highApoB ? `Your ApoB of ${apoB} mg/dL exceeds the recommended threshold (<90 mg/dL). ` : ''}Berberine has been shown to reduce LDL by 20–30% in clinical trials, comparable to moderate-dose statins. It also improves insulin sensitivity and glucose metabolism.`,
      dosage: '500 mg 2–3x daily (1,000–1,500 mg total)',
      timing: 'With meals to reduce GI side effects and improve absorption. Space doses throughout the day.',
      mechanism: 'Berberine upregulates LDL receptors via PCSK9 inhibition, activates AMPK (improving lipid and glucose metabolism), inhibits cholesterol absorption in the intestine, and reduces hepatic lipogenesis. It also modulates gut microbiota to produce beneficial short-chain fatty acids.'
    });
  } else if (borderlineLDL) {
    // Borderline LDL → Citrus Bergamot (gentler intervention)
    recs.push({
      name: 'Citrus Bergamot Extract',
      category: 'supplement',
      match_strength: 'medium',
      research_status: 'emerging',
      reasoning: `Your LDL of ${ldl} mg/dL is in the borderline range (100–129 mg/dL). Citrus bergamot is a well-tolerated natural approach to optimizing lipid levels before stronger interventions are needed.`,
      dosage: '500–1,000 mg/day standardized extract (min 25% flavonoids)',
      timing: 'With a meal, once or twice daily',
      mechanism: 'Bergamot polyphenols (brutieridin, melitidin) inhibit HMG-CoA reductase (statin-like mechanism), reduce ApoB secretion, activate AMPK, and increase LDL receptor recycling. Clinical trials show 20–30% LDL reduction at therapeutic doses.'
    });
  }

  // Elevated Triglycerides → upgrade Omega-3 recommendation
  const highTrigs = trigs && trigs >= 150;
  const borderlineTrigs = trigs && trigs >= 100 && trigs < 150;

  if (highTrigs) {
    // Remove any existing standard-dose Omega-3 rec so we can replace it
    const existingOmegaIdx = recs.findIndex(r => r.name.includes('Omega-3'));
    if (existingOmegaIdx !== -1) recs.splice(existingOmegaIdx, 1);

    recs.push({
      name: 'Omega-3 (High-Dose EPA)',
      category: 'supplement',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `Your triglycerides of ${trigs} mg/dL are elevated (optimal <100, high ≥150). High-dose EPA (icosapent ethyl) has been shown in the REDUCE-IT trial to lower cardiovascular events by 25% in patients with elevated triglycerides. Prescription-strength EPA is most effective.`,
      dosage: '2–4 g EPA daily (aim for pure EPA or high EPA:DHA ratio ≥4:1)',
      timing: 'With meals containing fat for absorption. Split into 2 doses (morning and evening).',
      mechanism: 'High-dose EPA reduces hepatic VLDL synthesis, enhances lipoprotein lipase activity (clearing triglyceride-rich particles), stabilizes atherosclerotic plaques via anti-inflammatory resolvins, and reduces residual cardiovascular risk independent of LDL lowering.'
    });
  }

  // Low HDL → Niacin
  const lowHDL = hdl && ((sex === 'male' && hdl < 40) || (sex === 'female' && hdl < 50));
  const suboptimalHDL = hdl && ((sex === 'male' && hdl < 60) || (sex === 'female' && hdl < 70));

  if (lowHDL || (lpa && lpa > 75)) {
    recs.push({
      name: 'Niacin (Vitamin B3)',
      category: 'supplement',
      match_strength: lowHDL ? 'high' : 'medium',
      research_status: 'established',
      reasoning: `${lowHDL ? `Your HDL of ${hdl} mg/dL is below the critical threshold (${sex === 'male' ? '<40' : '<50'} mg/dL). Niacin is the most effective agent for raising HDL, typically increasing it by 20–35%. ` : ''}${lpa && lpa > 75 ? `Your Lp(a) of ${lpa} nmol/L is elevated (>75 nmol/L). Niacin is one of the few agents shown to reduce Lp(a) by 20–30%, though genetic Lp(a) levels are difficult to fully normalize. ` : ''}Start low and titrate up to minimize flushing.`,
      dosage: '500 mg–2,000 mg/day (start at 500 mg, increase by 500 mg every 2–4 weeks)',
      timing: 'Before bed with a small snack. Take aspirin (81 mg) or apple 30 min before to reduce flushing. Use extended-release form only.',
      mechanism: 'Niacin inhibits hepatic diacylglycerol acyltransferase-2 (reducing VLDL/triglyceride synthesis), decreases ApoB secretion, reduces Lp(a) by inhibiting apo(a) synthesis in the liver, and raises HDL by reducing HDL-ApoA-I catabolism via inhibition of CETP activity.'
    });
  }

  // CoQ10 — cardiovascular support, especially important with berberine/statins
  if (hasAnyCholesterol && (highLDL || highApoB || age >= 40)) {
    recs.push({
      name: 'Coenzyme Q10 (Ubiquinol)',
      category: 'supplement',
      match_strength: highLDL || highApoB ? 'high' : 'medium',
      research_status: 'established',
      reasoning: `${highLDL || highApoB ? 'Berberine and statins both inhibit the mevalonate pathway, which also produces CoQ10. Supplementation prevents depletion and reduces muscle-related side effects. ' : ''}At age ${age}, endogenous CoQ10 production declines significantly. CoQ10 is essential for mitochondrial energy production and is a powerful lipid-soluble antioxidant protecting LDL from oxidation.`,
      dosage: '100–200 mg/day ubiquinol (reduced form, superior absorption to ubiquinone)',
      timing: 'With a fat-containing meal. Morning preferred for energy support.',
      mechanism: 'Ubiquinol is the electron carrier in mitochondrial complexes I–III of the electron transport chain, essential for ATP synthesis. As an antioxidant, it regenerates vitamin E and prevents LDL oxidation (ox-LDL is the key driver of atherosclerosis). It also improves endothelial function via nitric oxide pathways.'
    });
  }

  // Plant Sterols for LDL reduction (additive to other interventions)
  if (highLDL || (borderlineLDL && highApoB)) {
    recs.push({
      name: 'Plant Sterols / Stanols',
      category: 'supplement',
      match_strength: highLDL ? 'medium' : 'low',
      research_status: 'established',
      reasoning: `${ldl ? `With an LDL of ${ldl} mg/dL, ` : ''}plant sterols provide an additional 6–15% LDL reduction that stacks with other interventions (berberine, citrus bergamot, diet). They are FDA-approved for cholesterol reduction claims.`,
      dosage: '2–3 g/day of plant sterols or stanols',
      timing: 'Divided across 2–3 meals. Must be taken with food containing dietary cholesterol for maximum competitive inhibition.',
      mechanism: 'Plant sterols are structurally similar to cholesterol and compete for absorption in intestinal micelles via NPC1L1 transporters. This reduces dietary and biliary cholesterol absorption by ~50%, triggering upregulation of hepatic LDL receptors to compensate, lowering circulating LDL.'
    });
  }

  // Elevated Lp(a) advisory (genetic marker, limited interventions)
  if (lpa && lpa > 75) {
    recs.push({
      name: 'Lp(a) Monitoring & Risk Management',
      category: 'lifestyle',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `Your Lp(a) of ${lpa} nmol/L is elevated (>75 nmol/L). Lp(a) is ~90% genetically determined and is an independent cardiovascular risk factor. While few interventions significantly lower it, aggressive management of other modifiable risk factors (LDL, blood pressure, inflammation) becomes critical. Niacin may reduce Lp(a) by 20–30%. Novel antisense oligonucleotide therapies (pelacarsen) are in Phase 3 trials.`,
      dosage: 'Retest annually. Discuss with cardiologist if >125 nmol/L.',
      timing: 'Ensure all other CV risk factors are optimally controlled. Consider coronary calcium score (CAC) for further risk stratification.',
      mechanism: 'Lp(a) consists of an LDL-like particle bound to apolipoprotein(a). It promotes atherosclerosis (via ox-phospholipid cargo), impairs fibrinolysis (structural homology to plasminogen), and drives inflammation. Levels are primarily determined by the LPA gene and minimally affected by lifestyle.'
    });
  }

  // Cardiovascular exercise lifestyle rec if lipids are off
  const lipidsOff = highLDL || highTrigs || lowHDL || highApoB;
  if (lipidsOff && !recs.find(r => r.name === 'Cardiovascular Exercise Protocol')) {
    recs.push({
      name: 'Cardiovascular Exercise Protocol',
      category: 'lifestyle',
      match_strength: 'high',
      research_status: 'established',
      reasoning: `Your lipid panel shows areas for improvement${highTrigs ? ` (triglycerides: ${trigs} mg/dL)` : ''}${lowHDL ? ` (HDL: ${hdl} mg/dL)` : ''}${highLDL ? ` (LDL: ${ldl} mg/dL)` : ''}. Regular aerobic exercise is one of the most effective non-pharmacological interventions for lipid optimization — it raises HDL by 5–10%, lowers triglycerides by 15–30%, and improves LDL particle size.`,
      dosage: '150–300 min/week moderate-intensity or 75–150 min/week vigorous aerobic exercise',
      timing: 'Spread across 5+ days. Zone 2 training (conversational pace) for base; add 1–2 HIIT sessions weekly for triglyceride reduction.',
      mechanism: 'Aerobic exercise increases lipoprotein lipase activity (clearing triglyceride-rich particles), upregulates ABCA1 transporters (reverse cholesterol transport → higher HDL), improves endothelial nitric oxide production, reduces arterial stiffness, and shifts LDL from small dense (pattern B) to large buoyant (pattern A) particles.'
    });
  }

  // Ensure minimum recommendation count
  if (recs.length < 8) {
    if (!recs.find(r => r.name.includes('NAC'))) {
      recs.push({
        name: 'NAC (N-Acetyl Cysteine)',
        category: 'supplement',
        match_strength: 'low',
        research_status: 'established',
        reasoning: 'NAC is a powerful antioxidant and glutathione precursor. It supports liver detoxification, respiratory health, and has emerging evidence for mental health benefits.',
        dosage: '600–1,200 mg/day',
        timing: 'On empty stomach, morning. Separate from food by 30 minutes.',
        mechanism: 'NAC provides cysteine for glutathione synthesis (the master antioxidant), chelates heavy metals, modulates glutamate via the cystine-glutamate antiporter, and has mucolytic properties.'
      });
    }
    if (!recs.find(r => r.name.includes('Zinc'))) {
      recs.push({
        name: 'Zinc + Copper',
        category: 'supplement',
        match_strength: 'low',
        research_status: 'established',
        reasoning: `Zinc is critical for immune function, hormone production${sex === 'male' ? ' (testosterone synthesis)' : ''}, and wound healing. Copper is paired to prevent zinc-induced copper depletion.`,
        dosage: '30 mg zinc + 2 mg copper daily',
        timing: 'With dinner. Avoid taking with calcium or iron.',
        mechanism: 'Zinc is a cofactor for 300+ enzymes, supports thymulin for T-cell maturation, and inhibits aromatase. Copper is needed for ceruloplasmin, SOD, and iron metabolism.'
      });
    }
  }

  return recs;
}

module.exports = { generateRecommendations };
