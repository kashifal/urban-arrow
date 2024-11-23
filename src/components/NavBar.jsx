import React, { useState } from "react";
import LinkItem from "./LinkItem";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile toggle icons
import logo from "../assets/logo.png";

const Navbar = () => {
  const [dotPosition, setDotPosition] = useState({ left: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Course",
      href: "/courseList",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const handleMouseLeave = () => {
    const homeLink = document.querySelector('.home-link');
    if (homeLink) {
      const homeRect = homeLink.getBoundingClientRect();
      const navRect = document.querySelector('nav').getBoundingClientRect();

      const dotLeft = homeRect.left - navRect.left + homeRect.width / 5;
      setDotPosition({ left: dotLeft });
    }
  };

  return (
    <div>
      <nav
        className="relative z-[4] flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-6 py-10"
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-28" />
        </div>
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Mobile Menu Toggle */}

          {/* Links for Desktop and Mobile */}
          <div
            className={`lg:flex lg:items-center lg:gap-6 lg:static lg:w-auto lg:h-auto lg:bg-transparent 
            absolute top-24 left-0 w-full h-screen bg-white z-20 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0 bg-slate-100 top-0" : "-translate-x-full"
              } lg:transform-none`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 px-6 py-4 lg:p-0">
              {links.map((link, index) => (
                <div key={index} className="relative">
                  <LinkItem
                    label={link.label}
                    href={link.href}  // Pass href to LinkItem
                    setDotPosition={setDotPosition}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex gap-2 sm:gap-4 items-center">
            <button className="sm:px-8 py-2 px-4 sm:py-4 text-sm font-medium text-white rounded-full bg-[#547670] hover:bg-opacity-80">
              View Classes
            </button>
            <button className="p-2 rounded-full text-white bg-[#547670] hover:bg-opacity-80">
              <RiAccountCircleLine size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
