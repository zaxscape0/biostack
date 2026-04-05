/**
 * BioStack Recommendation Engine
 * Generates personalized peptide, supplement, and lifestyle recommendations
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
    match_strength: 'medium',
    research_status: 'established',
    reasoning: `Omega-3 fatty acids support cardiovascular health, reduce systemic inflammation${bloodwork.hsCRP && bloodwork.hsCRP > 1 ? ` (your hsCRP of ${bloodwork.hsCRP} mg/L suggests elevated inflammation)` : ''}, and benefit brain function.`,
    dosage: '2–3 g combined EPA/DHA daily (aim for 2:1 EPA:DHA ratio)',
    timing: 'With meals to improve absorption and reduce fishy aftertaste',
    mechanism: 'EPA and DHA are incorporated into cell membranes, produce anti-inflammatory resolvins and protectins, lower triglycerides, and support neuronal membrane fluidity.'
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
