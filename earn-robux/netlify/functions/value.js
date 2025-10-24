import { createClient } from '@supabase/supabase-js';
console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function handler(event) {
  if (event.httpMethod === 'GET') {
    const { data, error } = await supabase
      .from('Points')
      .select('points')
      .eq('id', 1)
      .single();

    if (error) return { statusCode: 500, body: error.message };
    return { statusCode: 200, body: JSON.stringify(data) };
  }

  if (event.httpMethod === 'POST') {
  const body = JSON.parse(event.body);
  const { error } = await supabase
    .from('Points')
    .update({ points: body.points })
    .eq('id', 1);

  if (error) return { statusCode: 500, body: error.message };
  return { statusCode: 200, body: JSON.stringify({ success: true }) };
}

  return { statusCode: 405, body: 'Method Not Allowed' };
}