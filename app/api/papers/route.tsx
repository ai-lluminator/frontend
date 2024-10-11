import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// zod schema for the request body
const paperSchema = z.object({
  paper_url: z.string().url(),
  title: z.string().optional(),
  summary: z.string().optional(),
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
  const result = paperSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.message }, { status: 400 });
  }

  // Insert into the database using Supabase
  const { data, error } = await supabase
    .from('papers')
    .insert(result.data)
    .select()
    .single();

  // prompt, paper, user
  if (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }

  // Redirect the user to the URL associated with the paper
  return NextResponse.json({ data: data }, { status: 201 });
}

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  // Authentication
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== process.env.EXTERNAL_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE!;
  const supabase = createClient(supabaseUrl, supabaseServiceRole);

  // Insert into the database using Supabase
  const { data, error } = await supabase
    .from('papers')
    .select('*')

  if (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }

  // Redirect the user to the URL associated with the paper
  return NextResponse.json({ data }, { status: 201 });
}
