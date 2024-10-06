import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/src/db';
import { validateToken } from '@/src/auth';

// Define the type for the data returned by the database
interface PaperAccess {
  paper: string;
  user_id: string;
  timestamp: string; // You could also use Date if you're handling dates properly in the app
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');

    // Validate the token
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    const user = validateToken(token);
    if (!user) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Query to get all data from the paper_access table
    const selectQuery = `
      SELECT paper, user_id, timestamp
      FROM paper_access;
    `;

    // Execute the query and fetch the data
    const results = await query(selectQuery);

    // Explicitly define the type of the rows being returned
    const jsonData: PaperAccess[] = results.rows.map((row: PaperAccess) => ({
      paper: row.paper,
      user_id: row.user_id,
      timestamp: row.timestamp,
    }));

    // Return the JSON data
    return NextResponse.json(jsonData, { status: 200 });
  } catch (error: unknown) {
    // Type narrowing to check if error is an instance of Error
    if (error instanceof Error) {
      console.error('Error fetching data from paper_access:', error.message);
    } else {
      console.error('Error fetching data from paper_access:', error);
    }

    // Handle specific error types if necessary
    return NextResponse.json(
      { error: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}