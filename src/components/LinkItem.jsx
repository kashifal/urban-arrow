import React, { useState, useEffect, useRef } from "react";


const LinkItem = ({ label, submenu, setDotPosition }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const linkRef = useRef(null);

  useEffect(() => {
    if (isHovered && linkRef.current) {
      const linkRect = linkRef.current.getBoundingClientRect(); // Link's dimensions and position
      const navRect = document.querySelector("nav").getBoundingClientRect(); // Navbar dimensions and position
  
      const dotLeft = linkRect.left - navRect.left + linkRect.width / 4 ;
  
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
      {/* Main Link */}
      <button className="px-4 home-link py-2 text-[#596D69] font-medium hover:text-[#629BA0]">
        {label}
      </button>

      {/* Dropdown Menu (visible when hovered over the menu link) */}
     
    </div>
  );
};


export default LinkItem;
