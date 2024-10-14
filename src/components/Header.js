// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">
          <Link to="/">World Wide Education and Careers</Link>
        </h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about#about" className="hover:text-gray-200">About</Link>
          <Link to="/services#services" className="hover:text-gray-200">Services</Link>
          <Link to="/contact#contact" className="hover:text-gray-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
