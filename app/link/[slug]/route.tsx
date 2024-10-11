import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE!;
  const supabase = createClient(supabaseUrl, supabaseServiceRole);

  // read out the slug from the params
  const slug = params.slug;

  // read the slug from Supabase
  const { data, error } = await supabase
    .from('links')
    .select('*')
    .eq('public_id', slug)
    .single();

  if (!data || error) {
    return NextResponse.json({ error: 'Link not found.' }, { status: 404 });
  }

  try {
    await supabase
      .from('link_views')
      .insert([{ link_id: data.id }])
  } catch (error) {
    console.error('Error updating last_accessed_at:', error);
  }

  // http://localhost:3001/link/baw6e2

  return NextResponse.redirect(data.url);
}
