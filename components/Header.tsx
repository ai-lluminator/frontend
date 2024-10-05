// components/Header.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link'; // Use Link for client-side transitions
import { usePathname } from 'next/navigation';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const pathname = usePathname();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = scrollPosition > 10 ? 'bg-white shadow' : '';
  const navActionClasses =
    scrollPosition > 10
      ? 'bg-gradient-to-r from-purple-600 to-blue-400 text-white'
      : 'bg-white text-gray-800';
  const toggleColourClasses = scrollPosition > 10 ? 'text-gray-800' : 'text-white';

  return (
    <nav
      id="header"
      className={`fixed w-full z-30 top-0 text-white ${navClasses} transition-colors duration-300`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            href="#"
            className={`no-underline hover:no-underline font-bold text-2xl lg:text-4xl ${toggleColourClasses}`}
          >
            AI/lluminator
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            onClick={toggleNav}
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {/* Menu Icon */}
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 ${
            scrollPosition > 10 ? 'bg-white' : 'bg-gray-100'
          } lg:bg-transparent text-black p-4 lg:p-0 z-20 ${navOpen ? '' : 'hidden'}`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
                <Link
                href="/home"
                className={`inline-block py-2 px-4 no-underline ${
                    pathname === '/home' ? 'text-black font-bold' : 'text-black'
                }`}
                >
                Homepage
                </Link>
            </li>
            <li className="mr-3">
                <Link
                href="/technology"
                className={`inline-block py-2 px-4 no-underline ${
                    pathname === '/technology' ? 'text-black font-bold' : 'text-black'
                }`}
                >
                Technology
                </Link>
            </li>
            <li className="mr-3">
                <Link
                href="/about"
                className={`inline-block py-2 px-4 no-underline ${
                    pathname === '/about' ? 'text-black font-bold' : 'text-black'
                }`}
                >
                About Us
                </Link>
            </li>
            </ul>
          <button
            id="navAction"
            className={`mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ${navActionClasses}`}
          >
            Open Telegram Bot
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;
