// app/api/link/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/src/db';
import { validateToken } from '@/src/auth';

export async function POST(request: NextRequest) {
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

    // Parse the request body
    const body = await request.json();
    const { paper, url } = body;

    // Validate the input
    if (!paper || !url) {
      return NextResponse.json(
        { error: 'Missing "paper" or "url" in request body.' },
        { status: 400 }
      );
    }

    // Insert into the database
    const insertQuery = `
      INSERT INTO paper_url (paper, url)
      VALUES ($1, $2)
    `;
    await query(insertQuery, [paper, url]);

    // Return a success response
    return NextResponse.json({ message: 'Entry added successfully.' }, { status: 201 });
  } catch (error: unknown) {
    // Type narrowing to check if error is an instance of Error
    if (error instanceof Error) {
      console.error('Error inserting into paper_url:', error.message);
    } else {
      console.error('Error inserting into paper_url:', error);
    }

    // Handle specific error types if necessary
    return NextResponse.json(
      { error: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}