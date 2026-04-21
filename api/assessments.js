const { supabase, cors } = require('./_lib/supabase');
const { generateRecommendations } = require('./_lib/recommendations');

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body;

    const goals = typeof body.goals === 'string' ? JSON.parse(body.goals) : body.goals;
    const bloodwork = typeof body.bloodwork === 'string' ? JSON.parse(body.bloodwork) : (body.bloodwork || {});

    // Map string stress levels to integers (DB column is INT)
    const stressMap = { low: 1, mild: 2, moderate: 3, high: 4, severe: 5 };
    const stressRaw = body.stressLevel;
    const stressLevel = typeof stressRaw === 'string' && isNaN(stressRaw)
      ? (stressMap[stressRaw.toLowerCase()] ?? 3)
      : (parseInt(stressRaw, 10) || 3);

    const { data: assessment, error: insertError } = await supabase
      .from('biostack_assessments')
      .insert({
        age: body.age,
        sex: body.sex,
        height: body.height,
        weight: body.weight,
        goals: goals,
        bloodwork: bloodwork,
        sleep_hours: body.sleepHours,
        exercise_days: body.exerciseDays,
        stress_level: stressLevel,
        current_supplements: body.currentSupplements || null,
        allergies: body.allergies || null,
      })
      .select('id')
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      return res.status(500).json({ error: 'Failed to save assessment' });
    }

    // Generate recommendations
    const recs = generateRecommendations({
      ...body,
      goals,
      bloodwork,
      sleep_hours: body.sleepHours,
      exercise_days: body.exerciseDays,
      stress_level: stressLevel,
    });

    const recsWithAssessment = recs.map(r => ({
      assessment_id: assessment.id,
      name: r.name,
      category: r.category,
      match_strength: r.match_strength,
      research_status: r.research_status,
      reasoning: r.reasoning,
      dosage: r.dosage || null,
      timing: r.timing || null,
      mechanism: r.mechanism || null,
    }));

    const { error: recError } = await supabase
      .from('biostack_recommendations')
      .insert(recsWithAssessment);

    if (recError) {
      console.error('Rec insert error:', recError);
    }

    return res.status(200).json({ id: assessment.id });
  } catch (err) {
    console.error('Assessment error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
