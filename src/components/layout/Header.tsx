import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          My App
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};