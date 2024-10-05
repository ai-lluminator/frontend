// app/api/auth/login/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/src/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const LINK_USERNAME: string = process.env.LINK_USERNAME || '';
    const LINK_PASSWORD: string = process.env.LINK_PASSWORD || '';

    // **Validate Credentials**
    // Replace this with your actual authentication logic
    const isValidUser = username === LINK_USERNAME && password === LINK_PASSWORD;

    if (!isValidUser) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // **Generate Token**
    const payload = { username };
    const token = generateToken(payload);

    // **Return the Token**
    return NextResponse.json({ token }, { status: 200 });
  } catch (error: unknown) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}