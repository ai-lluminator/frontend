import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../../../src/db';

// Helper function to attempt inserting a paper with a generated id
async function insertPaperWithUniqueId(id: string, title: string, url: string, date: string) {
  let success = false;
  let result: any;

  // Try to insert the paper with a new unique ID up to 5 times
  for (let attempt = 0; attempt < 5; attempt++) {

    try {
      result = await query(
        'INSERT INTO paper (id, title, url, date) VALUES ($1, $2, $3, &4) RETURNING *',
        [id, title, url, date]
      );
      success = true; // If the insertion succeeds, break the loop
      break;
    } catch (error: any) {
      // Check if the error is related to a unique violation (duplicate id)
      if (error.code !== '23505') { // 23505 is the Postgres error code for unique constraint violation
        throw error; // If it's another error, rethrow it
      }
      // If the id was a duplicate, the loop will try again with a new id
    }
  }

  if (!success) {
    throw new Error('Failed to generate a unique ID for the paper after multiple attempts.');
  }

  return result.rows[0]; // Return the inserted paper record
}

// Handle POST requests to /api/paper
export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body
    let jsonData = await req.json();
    console.log(jsonData);
    const { id, title, url, timestep } = jsonData;

    // Validate input
    if (!title || !url || !id || !timestep) {
      return NextResponse.json(
        { error: 'Title and URL are required' },
        { status: 400 }
      );
    }

    // Attempt to insert the paper and handle possible ID conflicts
    const paper = await insertPaperWithUniqueId(id, title, url, timestep);

    // Return the newly created paper as a JSON response
    return NextResponse.json(paper, { status: 201 });
  } catch (error) {
    console.error('Error creating paper:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
