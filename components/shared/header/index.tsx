'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }, // Added About (Links to Home section)
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/service' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-[#FFF5F7]/90 backdrop-blur-sm fixed w-full z-50 shadow-sm top-0 left-0 relative">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/mockups/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl font-bold text-gray-900">
              M. BENSALLOUA
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          {/* Added ml-auto to push right, mr-8 to separate from button */}
          <nav className="hidden md:flex space-x-8 ml-auto mr-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-sans font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Get in Touch Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#F0A0A0] to-[#E09090] text-white font-medium text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute w-full bg-[#FFF5F7] shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible top-full' : 'opacity-0 invisible -top-full'
        }`}
      >
        {/* Background Image Layer for Mobile Menu */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/mockups/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative z-10 px-4 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/#contact"
              onClick={toggleMenu}
              className="w-full flex items-center justify-center px-6 py-3 bg-linear-to-r from-[#F0A0A0] to-[#E09090] text-white font-medium text-base rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;