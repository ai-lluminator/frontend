import { createClient } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// zod schema for the request body
const schema = z.object({
  paper_id: z.number(),
  user_id: z.number(),
  prompt_id: z.number(),
});

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  // Authentication
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== process.env.EXTERNAL_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE!;
  const supabase = createClient(supabaseUrl, supabaseServiceRole);

  // Parse the request body
  const body = await request.json();

  // Validate the input using the zod schema
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.message }, { status: 400 });
  }

  const publicId = nanoid(6)

  // Insert into the database using Supabase
  const { data, error } = await supabase
    .from('paper_tracking_links')
    .insert([{
      public_id: publicId,
      user_id: result.data.user_id,
      paper_id: result.data.paper_id,
      prompt_id: result.data.prompt_id
    }])
    .select()
    .single();

  if (error) {
    console.error('Error inserting into paper_tracking_links:', error);
    return NextResponse.json({ error: 'Internal Server Error.' }, { status: 500 });
  }

  // Redirect the user to the URL associated with the paper
  return NextResponse.json({
    data: { ...data, ...{ public_url: "https://ailluminator.com/links" + publicId } }
  }, { status: 201 });
}

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  // Ensure the Authorization header is present and matches env.EXTERNAL_API_KEY
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== process.env.EXTERNAL_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE!;
  const supabase = createClient(supabaseUrl, supabaseServiceRole);

  // Insert into the database using Supabase
  const { data, error } = await supabase
    .from('paper_tracking_links')
    .select('id, public_id, paper_id, user_id, prompt_id')

  if (error) {
    console.error('Error inserting into paper_tracking_links:', error);
    return NextResponse.json({ error: 'Internal Server Error.' }, { status: 500 });
  }

  // Redirect the user to the URL associated with the paper
  return NextResponse.json({ data }, { status: 201 });
}
