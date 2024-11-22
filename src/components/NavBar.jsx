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
      submenu: [
        { label: "Home __ Online Classes", href: "#" },
        { label: "Home __ Online Classes", href: "#" },
      ],
    },
    {
      label: "About Us",
      submenu: [
        {
          label: "Our Team",
          href: "#",
          submenu: [
            { label: "Team Member 1", href: "#" },
            { label: "Team Member 2", href: "#" },
          ],
        },
        { label: "Our Story", href: "#" },
      ],
    },
    {
      label: "Classes",
      submenu: [
        { label: "Yoga", href: "#" },
        { label: "Meditation", href: "#" },
      ],
    },
    {
      label: "Pages",
      submenu: [
        { label: "Contact", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      label: "Blog",
      submenu: [
        { label: "Latest Posts", href: "#" },
        { label: "Archives", href: "#" },
      ],
    },
    {
      label: "Features",
      submenu: [
        { label: "Feature 1", href: "#" },
        { label: "Feature 2", href: "#" },
      ],
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
    <nav
      className="relative z-[4] first flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-6 py-10"
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
        className={`lg:flex lg:items-center  lg:gap-6 lg:static lg:w-auto lg:h-auto lg:bg-transparent 
          absolute top-16 left-0 w-full h-screen bg-white z-20 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0 bg-slate-100 top-0" : "-translate-x-full"
    } lg:transform-none`}
      >
        <div className="flex  flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 px-6 py-4 lg:p-0">
          {links.map((link, index) => (
            <div key={index} className="relative">
              <LinkItem
                label={link.label}
                submenu={link.submenu}
                setDotPosition={setDotPosition}
              />
            </div>
          ))}

          {/* Moving Dot */}
          <div
            className="hidden lg:block bg-[#547670] rounded-full"
            style={{
              width: "6px",
              height: "6px",
              position: "absolute",
              top: "70%",
              transform: "translate(-50%, -50%)",
              left: `${dotPosition.left}px`,
            }}
          />
        </div>

        {/* Buttons Section */}

      </div>
      <div className="flex gap-2 sm:gap-4 items-center ">
          <button className="sm:px-8 py-2 px-4 sm:py-4 text-sm font-medium text-white rounded-full bg-[#547670] hover:bg-opacity-80">
            View Classes
          </button>
          <button className="p-2 rounded-full text-white bg-[#547670] hover:bg-opacity-80">
            <RiAccountCircleLine size={20} />
          </button>
        </div>
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
  );
};

export default Navbar;
