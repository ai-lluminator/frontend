import { Pool } from 'pg';

// Create a connection pool to PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER || 'Ailluminator', // Make sure the username matches exactly
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'papers',
  password: process.env.DB_PASSWORD || 'Avatar30.11', // Consider using environment variables for security
  port: parseInt(process.env.DB_PORT || '5432'),
});

// Function to execute queries
export const query = (text: string, params?: (string | null)[]) => pool.query(text, params);