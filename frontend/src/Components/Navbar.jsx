import React, { useState } from 'react';
import Logo from '../assets/Frontier Physicians (2).png';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white h-25 shadow-md fixed top-0 left-0 z-50 md:h-auto">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-15 h-15 md:h-auto md:w-32 rounded-xl"
              src={Logo}
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-medium text-blue-950">
          <NavLink className="hover:text-blue-600 cursor-pointer" to="/Roadmap" end>
           Explore
          </NavLink>
          <NavLink className="hover:text-blue-600 cursor-pointer" to="/explore" end>
           Library
          </NavLink>
          <NavLink className="hover:text-blue-600 cursor-pointer" to="/practice" end>
           Practice
          </NavLink>
          <NavLink className="hover:text-blue-600 cursor-pointer" to="/About" end>
           QuickTip
          </NavLink>
          <NavLink className="hover:text-blue-600 cursor-pointer" to="/Contact" end>
           Cheats
          </NavLink>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-blue-950 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
  <ul className="md:hidden bg-white/90 backdrop-blur-md shadow-lg rounded-xl flex flex-col gap-4 px-6 py-4 text-blue-950 font-medium animate-slide-down">
    {[
      { name: "Explore", path: "/Roadmap" },
      { name: "Library", path: "/explore" },
      { name: "Practice", path: "/practice" },
      { name: "QuickTip", path: "/About" },
      { name: "Cheats", path: "/Contact" },
    ].map((link, idx) => (
      <NavLink
        key={idx}
        to={link.path}
        end
        className={({ isActive }) =>
          `relative px-4 py-2 rounded-lg transition-all duration-300
           ${isActive ? "bg-blue-100 text-blue-800 font-semibold shadow-md" : "hover:bg-blue-50 hover:text-blue-700"}`
        }
      >
        <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-lg scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
        {link.name}
      </NavLink>
    ))}
  </ul>
)}

      </nav>
    </>
  );
};

export default Navbar;