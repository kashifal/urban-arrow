import React, { useState } from 'react';
import '../css/FAQ.css'
import { RxHamburgerMenu } from "react-icons/rx";


const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen); 
    };
  return (
   <>
    <header className="sticky  top-0 z-50">
         
          <nav className="bg-[rgb(14,14,14)] px-2 h-[70px]">
            <div className=" max-w-[68rem] mx-auto flex items-center justify-between pt-[14px] relative">
              <div className="col-span-3 xs:col-span-2 sm:col-span-6 md:col-span-3">
                <div className="flex items-center">
                  <img src="../src/assets/asset 0.png" className="h-[36px] w-[40px] brightness-[-100]" alt="" />
                  <p className="text-white ml-[6px] font-medium sm:text-[1.5rem] tracking-wider xs:hidden sm:block">
                    DogWifTools
                  </p>
                </div>
              </div>
             
              {/* Navbar Links (visible on larger screens) */}
              <div className="hidden lg:block">
                <div className="flex text-white gap-10 justify-around text-[0.9rem] pt-[8px]">
                  <a href="#">Shop</a>
                  <a href="#">Contact</a>
                  <a href="#">Reviews</a>
                  <a href="#">FAQ</a>
                  <a href="#">Terms</a>
                </div>
              </div>
              {/* Language  */}
              <div className=" text-white flex items-center gap-5 sm:gap-0 xs:col-span-6 md:col-span-4">
                <div className="flex">
                  <div className="sm:flex hidden border border-[#646363] rounded-full px-[10px] py-[2px]  mt-[6px]">
                    <p className="text-[14px]">Solana</p>
                    <img src="../src/assets/asset 9.svg" className="h-[18px] ml-[6px] mt-[2px]" alt="" />
                  </div>
                  <div className="sm:flex hidden border border-[#646363] rounded-full px-[10px] py-[2px] ml-[20px] mt-[6px]">
                    <p className="text-[14px]">English</p>
                    <img src="../src/assets/asset 9.svg" className="h-[18px] ml-[6px] mt-[2px]" alt="" />
                  </div>
                  <div className="flex mt-[6px]">
                    <img src="../src/assets/asset 3.svg" className="h-[24px] ml-[10px]" alt="" />
                    <img src="../src/assets/asset 7.svg" className="h-[24px] ml-[20px]" alt="" />
                    <p className="ml-[10px]">0</p>
                  </div>
                </div>
                <div className="relative text-white z-[9999] md:hidden block">
      <div className="cursor-pointer" onClick={toggleDrawer}>
        <RxHamburgerMenu size={30} />
      </div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#101010] p-6 transform transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start space-y-4">
          {["Home", "Features", "Pricing", "Faq"].map((item, index) => (
            <a
              href="#"
              className="px-4 py-2 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full text-sm font-medium"
              key={index}
            >
              {item}
            </a>
          ))}
            <div className="flex border w-full border-[#646363] rounded-full justify-center px-[10px] py-[2px]  mt-[6px]">
                    <p className="text-[14px]">Solana</p>
                    <img src="../src/assets/asset 9.svg" className="h-[18px] ml-[6px] mt-[2px]" alt="" />
                  </div>
                  <div className="flex w-full border border-[#646363] justify-center rounded-full px-[10px] py-[2px]  mt-[6px]">
                    <p className="text-[14px]">English</p>
                    <img src="../src/assets/asset 9.svg" className="h-[18px] ml-[6px] mt-[2px]" alt="" />
                  </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 -z-[4] bg-black opacity-50 transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-50 block' : 'opacity-0 hidden pointer-events-none'
        }`}
        onClick={toggleDrawer} 
      ></div>
    </div>
              </div>
             
            </div>
           
          </nav>
        </header>
   </>
  )
}

export default NavBar