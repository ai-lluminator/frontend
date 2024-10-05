// app/api/link/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/src/db';

export async function POST(request: NextRequest) {
  try {
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
  } catch (error: any) {
    console.error('Error inserting into paper_url:', error);

    // Handle specific error types if necessary
    return NextResponse.json(
      { error: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}
