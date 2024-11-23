import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const LinkItem = ({ label, href, setDotPosition }) => {
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef(null);

  useEffect(() => {
    if (isHovered && linkRef.current) {
      const linkRect = linkRef.current.getBoundingClientRect(); // Link's dimensions and position
      const navRect = document.querySelector("nav").getBoundingClientRect(); // Navbar dimensions and position

      const dotLeft = linkRect.left - navRect.left + linkRect.width / 4;

      setDotPosition({ left: dotLeft });
    }
  }, [isHovered, setDotPosition]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={linkRef}
    >
      {/* Main Link with dynamic href */}
      <Link to={href} className="px-4 home-link py-2 text-[#596D69] font-medium hover:text-[#629BA0]">
        {label}
      </Link>
    </div>
  );
};

export default LinkItem;
