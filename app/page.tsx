"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

const RedirectToLogin = () => {
  const router = useRouter();

  useEffect(() => {
    // Programmatically navigate to /login
    router.push('/home');
  }, [router]);

  return (
    <div>
      <p>Redirecting to login...</p>
      <p>
        If you are not redirected, click <Link href="/home">here</Link>.
      </p>
    </div>
  );
};

export default RedirectToLogin;