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
    .from('paper_tracking_links')
    .select('id, public_id, user_id, paper:papers(id, paper_url)')
    .eq('public_id', slug)
    .single();

  if (!data || error) {
    return NextResponse.json({ error: 'Link not found.' }, { status: 404 });
  }

  try {
    await supabase
      .from('paper_views')
      // @ts-ignore
      .insert([{ paper_id: data.paper.id, user_id: data.user_id }])
  } catch (error) {
    console.error('Error updating last_accessed_at:', error);
  }

  // http://localhost:3001/link/y6qDNt

  // @ts-ignore
  return NextResponse.redirect(data!.paper.paper_url);
  //return NextResponse.json({ url: });
}
