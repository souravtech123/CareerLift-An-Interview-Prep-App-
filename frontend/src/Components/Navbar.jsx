import React from 'react';
import Logo from '../assets/Frontier Physicians (2).png';

const Navbar = () => {
  return (
    <nav className="w-full bg-white h-15 shadow-md fixed top-0 left-0 z-50 md:h-auto ">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img className="w-15 h-15 md:h-auto md:w-32 rounded-xl" src={Logo} alt="Logo" />
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-blue-950">
          <li className="hover:text-blue-600 cursor-pointer">Explore</li>
          <li className="hover:text-blue-600 cursor-pointer">Library</li>
          <li className="hover:text-blue-600 cursor-pointer">Practice</li>
          <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="border-2 border-black rounded-xl px-4 py-1 bg-black text-white hover:bg-gray-800 transition">
            Login
          </button>
          <button className="border-2 border-blue-600 rounded-xl px-4 py-1 text-blue-600 hover:bg-blue-50 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-blue-950 focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" 
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
