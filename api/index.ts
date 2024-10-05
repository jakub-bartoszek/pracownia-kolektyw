import express from 'express';
import { api } from './api';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(api);

app.listen(3002, () => console.log('Server started'));

const supabaseUrl = process.env['SUPABASE_URL'];
const supabaseAnonKey = process.env['SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase URL or Anon Key is missing from environment variables.'
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const authenticateToken = async (req: any, res: any, next: any) => {
  const token = req.headers['authorization'];

  if (!token) return res.sendStatus(403);

  try {
    const { data, error } = await supabase.auth.getUser(token);

    if (error) return res.status(401).json({ error: 'Unauthorized' });

    req.user = data.user;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports = authenticateToken;
