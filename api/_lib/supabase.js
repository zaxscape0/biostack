const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://enoebbimfsvqjiddgpyc.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVub2ViYmltZnN2cWppZGRncHljIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTM3NDI5NSwiZXhwIjoyMDkwOTUwMjk1fQ.o9QhL03SO6xv-GCWa2_5rOw8rZ4c7dORQi5DU-9PvRc';

const supabase = createClient(supabaseUrl, supabaseKey);

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = { supabase, cors };
