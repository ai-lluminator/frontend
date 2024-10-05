import { query } from '../../../src/db';  // Assuming your db.ts is in the src folder
import { QueryResult } from 'pg'; // Assuming you're using the pg library

// Define the expected type of a row in the paper_access table
interface PaperAccessRow {
  paper: string;
  user_id: string;
  timestamp: string; // or whatever type your 'timestamp' column uses
}

// Define the PostgresError interface
interface PostgresError extends Error {
  code?: string;
}

// Helper function to attempt inserting a paper with a generated id
async function insertPaperWithUniqueId(paper: string, user_id: string, date: string): Promise<PaperAccessRow> {
  let success = false;
  let result: QueryResult<PaperAccessRow> | null = null;

  const formattedDate = date ? new Date(parseInt(date, 10) * 1000).toISOString() : null;

  // Try to insert the paper with a new unique ID up to 5 times
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      // If date is provided, insert it, otherwise use DEFAULT for current timestamp
      const insertQuery = 'INSERT INTO paper_access (paper, user_id, timestamp) VALUES ($1, $2, $3) RETURNING *';
      const params = [paper, user_id, formattedDate];

      result = await query(insertQuery, params);

      success = true; // If the insertion succeeds, break the loop
      break;
    } catch (error: unknown) {
      // Check if the error is a PostgresError and check the code
      const pgError = error as PostgresError;
      if (pgError.code === '23505') {
        // If the error is a unique violation (duplicate id), continue to retry
        continue;
      } else {
        throw error; // If it's another error, rethrow it
      }
    }
  }

  if (!success || result === null) {
    throw new Error('Failed to generate a unique ID for the paper after multiple attempts.');
  }

  return result.rows[0]; // Return the inserted paper record
}

// Handle POST requests to /api/paper
export async function POST(req: Request) {
  try {
    // Extract query parameters from the URL
    const url = new URL(req.url);
    const paper = url.searchParams.get('u');
    const user_id = url.searchParams.get('p');

    // Use current timestamp if date is not provided
    const date = url.searchParams.get('date') || new Date().toISOString();

    console.log('date', date);

    // Validate input
    if (!paper || !user_id) {
      return new Response(JSON.stringify({ error: 'Paper and user_id are required' }), { status: 400 });
    }

    // Insert the paper with the formatted date into the database
    const paper_response = await insertPaperWithUniqueId(paper, user_id, date);

    // Return the newly created paper as a JSON response
    return new Response(JSON.stringify(paper_response), { status: 201 });
  } catch (error) {
    console.error('Error creating paper:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

