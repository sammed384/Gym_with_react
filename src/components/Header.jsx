import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 h-[4.563rem] w-[100%] bg-[#40495366] sticky top-0 z-[1]">
      <div className="flex items-center justify-between max-w-[1120px] m-auto relative">
        {/* Logo */}
        <div>
          <h1 className="uppercase text-[2rem] font-[900] text-white cursor-pointer">
            Training <span className="text-[#d8464d]">Studio</span>
          </h1>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-[#fcfafa] hover:text-[#d45f65]">
            <span className="text-[#d8464d]">HOME</span>
          </Link>
          <Link to="/About" className="text-[#fcfafa] hover:text-[#d45f65]">
            ABOUT
          </Link>
          <Link to="/Classes" className="text-[#fcfafa] hover:text-[#d45f65]">
            CLASSES
          </Link>
          <Link to="/Schedules" className="text-[#fcfafa] hover:text-[#d45f65]">
            SCHEDULES
          </Link>
          <Link to="/Contact" className="text-[#fcfafa] hover:text-[#d45f65]">
            CONTACT
          </Link>
        </div>

        {/* Sign-Up Button (Desktop) */}
        <div>
          <button className="hidden md:flex bg-[#ed563b] hover:bg-orange-400 text-white font-bold cursor-pointer p-[0.625rem] border-none">
            SIGN UP
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          id="menu"
          aria-label="Toggle navigation menu"
          className={`humburger block md:hidden ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute flex flex-col items-center self-end py-6 -mt-0 space-y-6 font-bold bg-slate-400 sm:w-auto sm:self-center left-0 right-0 top-full drop-shadow-md transition-all transform duration-300 ${
          isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <Link
          to="/"
          className="text-black hover:text-[#d45f65] transition-colors"
          onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
        >
          <span className="text-[#d8464d]">HOME</span>
        </Link>
        <Link
          to="/About"
          className="text-black hover:text-[#d45f65] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          ABOUT
        </Link>
        <Link
          to="/Classes"
          className="text-black hover:text-[#d45f65] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          CLASSES
        </Link>
        <Link
          to="/Schedules"
          className="text-black hover:text-[#d45f65] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          SCHEDULES
        </Link>
        <Link
          to="/Contact"
          className="text-black hover:text-[#d45f65] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header;
