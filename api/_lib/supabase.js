const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://wxkyrurufyvwrshfcpjj.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = { supabase, cors };
