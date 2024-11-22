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
      {submenu && isHovered && (
        <div className="absolute  left-0 py-4 shadow -mt-2 w-48 bg-white  opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 z-10">
          {submenu.map((item, index) => (
            <div key={index} className="relative group">
              <a
                onMouseEnter={() => setIsSubmenuVisible(true)} // Show submenu on hover of arrow
                onMouseLeave={() => setIsSubmenuVisible(false)}
                href={item.href || "#"}
                className="flex justify-between items-center hover:text-[#629BA0] px-4 py-2 text-sm text-gray-700"
              >
                {item.label}
                {/* Right Arrow for submenu */}
                {item.submenu && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </a>

              {item.submenu && isSubmenuVisible && (
                <div className="absolute  left-full flex flex-col py-2 top-0 mt-2 w-48 bg-white shadow opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 z-10">
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href || "#"}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-teal-100"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default LinkItem;
