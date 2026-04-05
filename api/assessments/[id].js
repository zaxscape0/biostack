const { supabase, cors } = require('../_lib/supabase');

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { id } = req.query;

  try {
    const { data: assessment, error: aErr } = await supabase
      .from('biostack_assessments')
      .select('*')
      .eq('id', id)
      .single();

    if (aErr || !assessment) {
      return res.status(404).json({ error: 'Assessment not found' });
    }

    const { data: recommendations, error: rErr } = await supabase
      .from('biostack_recommendations')
      .select('*')
      .eq('assessment_id', id)
      .order('id');

    // Map snake_case to camelCase for frontend
    const mappedAssessment = {
      id: assessment.id,
      age: assessment.age,
      sex: assessment.sex,
      height: assessment.height,
      weight: assessment.weight,
      goals: typeof assessment.goals === 'string' ? assessment.goals : JSON.stringify(assessment.goals),
      bloodwork: typeof assessment.bloodwork === 'string' ? assessment.bloodwork : JSON.stringify(assessment.bloodwork),
      sleepHours: assessment.sleep_hours,
      exerciseDays: assessment.exercise_days,
      stressLevel: assessment.stress_level,
      currentSupplements: assessment.current_supplements,
      allergies: assessment.allergies,
      createdAt: assessment.created_at,
    };

    const mappedRecs = (recommendations || []).map(r => ({
      id: r.id,
      name: r.name,
      category: r.category,
      matchStrength: r.match_strength,
      researchStatus: r.research_status,
      reasoning: r.reasoning,
      dosage: r.dosage,
      timing: r.timing,
      mechanism: r.mechanism,
    }));

    return res.status(200).json({
      assessment: mappedAssessment,
      recommendations: mappedRecs,
    });
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
