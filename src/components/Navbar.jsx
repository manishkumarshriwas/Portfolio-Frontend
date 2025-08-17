import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold font-['Poppins']">
          <span className="bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] bg-clip-text text-transparent">
            Manish PortFolio
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group text-white hover:text-[#9B5DE5] transition-all duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#9B5DE5] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-[#0D0D0D]/95 backdrop-blur-sm transition-max-h duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-[#9B5DE5] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
