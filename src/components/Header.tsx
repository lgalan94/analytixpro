
import React, { useState } from 'react';
import type { NavLink } from '../types';

const NAV_LINKS: NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
];

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
        <span className="text-2xl font-bold text-slate-900">AnalytixPro</span>
    </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-50/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="">
             <a href="#" aria-label="Home"><Logo /></a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="font-medium text-slate-600 hover:text-primary-600 transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="font-medium text-slate-600 hover:text-primary-600 transition-colors duration-200">
              Sign In
            </a>
            <a href="#" className="bg-primary-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition-all duration-200 shadow-sm">
              Sign Up Free
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-600 hover:bg-slate-100 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
                {link.label}
              </a>
            ))}
            <div className="border-t border-slate-200 my-2"></div>
            <a href="#" className="text-slate-600 hover:bg-slate-100 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Sign In
            </a>
            <a href="#" className="bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center hover:bg-primary-700">
              Sign Up Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
