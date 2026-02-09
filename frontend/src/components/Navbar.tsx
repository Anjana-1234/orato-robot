import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isLoggedIn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          
    {/* Logo */}
    <div className="flex items-center">
    <Link
        to="/"
        className="flex items-center gap-2 no-underline"
        onClick={closeMobileMenu}
        >
        {/* Temporary SVG Icon */}
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-700 rounded-lg flex items-center justify-center shadow-md">
        <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
        </svg>
        </div>
    
        <span className="text-2xl font-bold text-violet-800">Orato</span>
    </Link>
    </div>


          {/* Navigation Links */}
          <ul className={`
            hidden md:flex md:items-center md:gap-8
            absolute left-1/2 -translate-x-1/2 top-[70px] md:static md:translate-x-0
            ${isMobileMenuOpen ? 'flex flex-col ...' : 'hidden'}
        `}>
            <li className="md:my-0 my-4 text-center">
              <Link 
      to="/" 
      className="text-text-dark font-medium hover:text-primary-purple hover:bg-[#f5e6ff] transition-all py-2 px-4 block no-underline hover:scale-110 hover:shadow-md rounded-lg" 
      onClick={closeMobileMenu}
    >
      Home
    </Link>
            </li>
            <li className="md:my-0 my-4 text-center">
              <Link 
      to="/dashboard" 
      className="text-text-dark font-medium hover:text-primary-purple hover:bg-[#f5e6ff] transition-all py-2 px-4 block no-underline hover:scale-105 hover:shadow-md rounded-lg" 
      onClick={closeMobileMenu}
    >
      Dashboard
    </Link>
            </li>
            <li className="md:my-0 my-4 text-center">
              <Link 
      to="/history" 
      className="text-text-dark font-medium hover:text-primary-purple hover:bg-[#f5e6ff] transition-all py-2 px-4 block no-underline hover:scale-105 hover:shadow-md rounded-lg" 
      onClick={closeMobileMenu}
    >
      History
    </Link>
            </li>
            <li className="md:my-0 my-4 text-center">
              <Link 
      to="/setting" 
      className="text-text-dark font-medium hover:text-primary-purple hover:bg-[#f5e6ff] transition-all py-2 px-4 block no-underline hover:scale-105 hover:shadow-md rounded-lg" 
      onClick={closeMobileMenu}
    >
      Setting
    </Link>
            </li>
            <li className="md:my-0 my-4 text-center">
              <Link 
      to="/about" 
      className="text-text-dark font-medium hover:text-primary-purple hover:bg-[#f5e6ff] transition-all py-2 px-4 block no-underline hover:scale-105 hover:shadow-md rounded-lg" 
      onClick={closeMobileMenu}
    >
      About Us
    </Link>
            </li>
          </ul>

          {/* Auth Button */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <Link to="/account" className="flex items-center gap-2 text-text-dark hover:bg-purple-400 py-2 px-4 rounded-lg transition-colors no-underline" onClick={closeMobileMenu}>
                <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="font-medium hidden md:inline">Account</span>
              </Link>
            ) : (
              <Link to="/login" className="gradient-primary text-white px-9 py-2.5 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all no-underline" onClick={closeMobileMenu}>
                Login
              </Link>
            )}

            {/* Hamburger */}
            <div className="md:hidden flex flex-col gap-1 cursor-pointer z-50" onClick={toggleMobileMenu}>
              <span className={`w-6 h-0.5 bg-text-dark transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-text-dark transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-text-dark transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;