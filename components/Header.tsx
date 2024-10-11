"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-screen-lg">
        <Link href="/" className="text-2xl font-bold">
          AI/lluminator
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link href="/technology" className="text-sm font-medium hover:underline">
            Technology
          </Link>
          <Link href="/how-to-use" className="text-sm font-medium hover:underline">
            How to use
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md hover:bg-gray-50">
            Open Telegram bot
          </a>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/technology" className="text-sm font-medium hover:underline">
              Technology
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About us
            </Link>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md hover:bg-gray-50 text-center">
              Open Telegram bot
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}