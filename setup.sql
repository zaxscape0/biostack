-- Cholesterol/lipid markers (totalCholesterol, ldl, hdl, triglycerides, apoB, lpa)
-- are stored in the `bloodwork` JSONB column alongside existing markers.
-- No schema change needed — JSONB accepts arbitrary keys.

CREATE TABLE IF NOT EXISTS biostack_assessments (
  id SERIAL PRIMARY KEY,
  age INT NOT NULL,
  sex TEXT NOT NULL,
  height NUMERIC NOT NULL,
  weight NUMERIC NOT NULL,
  goals JSONB NOT NULL DEFAULT '[]',
  bloodwork JSONB DEFAULT '{}',
  sleep_hours NUMERIC DEFAULT 7,
  exercise_days INT DEFAULT 3,
  stress_level INT DEFAULT 3,
  current_supplements TEXT,
  allergies TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS biostack_recommendations (
  id SERIAL PRIMARY KEY,
  assessment_id INT REFERENCES biostack_assessments(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  match_strength TEXT NOT NULL,
  research_status TEXT NOT NULL,
  reasoning TEXT,
  dosage TEXT,
  timing TEXT,
  mechanism TEXT
);

CREATE TABLE IF NOT EXISTS biostack_subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  assessment_id INT,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS biostack_subscriptions (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  plan TEXT,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
