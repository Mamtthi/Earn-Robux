import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('Points')
      .select('points')
      .eq('id', 1)
      .single();

    console.log("DATA:", data, "ERROR:", error);

    if (error) return res.status(500).send(error.message);
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { points } = req.body;
    const { error } = await supabase
      .from('Points')
      .update({ points })
      .eq('id', 1);

    if (error) return res.status(500).send(error.message);
    return res.status(200).json({ success: true });
  }

  res.status(405).send('Method Not Allowed');
}