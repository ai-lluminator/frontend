// app/api/paper/route.ts

import { query } from '@/src/db';  // Adjust the path to your db module
import { NextResponse } from 'next/server';

// Handle GET requests to /api/paper
export async function GET(req: Request) {
  try {
    // Extract query parameters from the URL
    const url = new URL(req.url);
    const paper = url.searchParams.get('u');
    const user_id = url.searchParams.get('p');

    // Use current timestamp if date is not provided
    const dateParam = url.searchParams.get('date');
    const date = dateParam ? new Date(parseInt(dateParam, 10) * 1000) : new Date();

    // Validate input
    if (!paper || !user_id) {
      return new NextResponse(
        JSON.stringify({ error: 'Paper and user_id are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // First, check if the paper exists in the paper_url table and get the associated URL
    const checkQuery = 'SELECT url FROM paper_url WHERE paper = $1';
    const checkResult = await query(checkQuery, [paper]);

    if (checkResult.rows.length === 0) {
      // Paper does not exist in paper_url table
      return new NextResponse(
        JSON.stringify({ error: 'Paper not found in paper_url table' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Extract the URL from the query result
    const paperUrl = checkResult.rows[0].url;

    // Optionally, insert into paper_access table for logging purposes
    const insertQuery = `
      INSERT INTO paper_access (paper, user_id, timestamp)
      VALUES ($1, $2, $3)
    `;
    await query(insertQuery, [paper, user_id, date.toISOString()]);

    // Redirect the user to the URL associated with the paper
    return NextResponse.redirect(paperUrl);
  } catch (error) {
    console.error('Error processing request:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}