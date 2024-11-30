import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};