import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="gradient-text text-9xl font-extrabold mb-4">404</h1>
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#58b9e6] text-white font-semibold rounded-lg hover:bg-[#e2eef3] hover:text-[#58b9e6] transition-all duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
