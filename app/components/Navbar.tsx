'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/70 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight hover:text-purple-300 transition-colors">
              Yazan Al-Hasanat
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-6">
              <Link href="#home" className="text-gray-100 hover:text-purple-300 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-100 hover:text-purple-300 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-100 hover:text-purple-300 px-3 py-2 text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="bg-gradient-to-r from-purple-400 to-pink-400 text-gray-900 hover:from-purple-300 hover:to-pink-300 px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 focus:outline-none focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <Link href="#home" onClick={toggleMenu} className="text-gray-100 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="#about" onClick={toggleMenu} className="text-gray-100 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="#projects" onClick={toggleMenu} className="text-gray-100 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </Link>
            <Link href="#contact" onClick={toggleMenu} className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-gray-900 hover:from-purple-300 hover:to-pink-300 px-4 py-2 rounded-full text-sm font-semibold transition-all mt-2">
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


