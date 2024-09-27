import { Pool } from "pg";

const pool = new Pool({
  user: 'test',
  host: '172.17.0.2',
  database: 'ailluminator',
  password: 'test',
  port: 5432, // default PostgreSQL port
});

export const query = (text: string, params?: any[]) => pool.query(text, params);