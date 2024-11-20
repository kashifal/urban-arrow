import React, { useState } from 'react';
import DiscordLink from "./DiscordLink";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-scroll';
import layers from '../assets/layers.png'
import abc from '../assets/abc.png'
const HeaderLAnding = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); 
  };
  
  const menuItems = [
    { name: "Home", to: "header" },
    { name: "Features", to: "features" },
    { name: "Pricing", to: "pricing" },
    { name: "FAQ", to: "faq" },
  ];

  return (
    <>
    <img className='fixed top-0 right-0 h-[100vh] z-0 w-auto' src={layers} alt="" />
    <div className="fixed -top-[350px]  blur-3xl opacity-30 -left-[350px] bg-gradient-to-tr h-[1000px] -z-0 rounded-full w-[1000px] from-[#FF00C0] to-[#411C8E]"></div>
     <div className="bg-[#000000] text-white min-h-screen w-full">
        <div className="w-full border-b bg-[#070708]/30 relative border-white/10 z-50  top-0  py-[18px]">
          <div className=" max-w-[74rem] mx-auto lg:px-0 px-4 flex items-center justify-between md:grid grid-cols-3">
            <Link to="/" className="flex cursor-pointer items-center gap-3">
              <img src={abc} alt="" className="filter  h-10  w-auto" />  
            </Link>
            <div className="bg-[#101010] md:flex hidden w-fit mx-auto border border-white/5 p-1 rounded-full items-center gap-1">
            {menuItems.map((item, index) => (
          <div className='p-1' key={index}>
            <Link
              to={item.to}  
              className="px-4 cursor-pointer py-2 transition-all duration-300 hover:bg-white/5 rounded-full text-sm font-medium"
            >
              {item.name}
            </Link>
          </div>
        ))}
            </div>
           
            <div className="md:block hidden"></div>
            <div className="relative z-[9999] md:hidden block">
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
        <div className=" max-w-[74rem] mx-auto lg:px-0  px-4  py-16">
          <div className="flex flex-col jsutify-center items-center">
            <DiscordLink />
            <h1 className="sm:text-8xl relative z-50 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#411C8E] to-[#FF00C0] text-center pt-8 pb-5 font-medium">
              All-In-One{" "}
                
              <span className="opacity-80 text-white">
              pump  
                <br /> token maker
              </span>
            </h1>
            <p className="text-sm text-center font-medium">
              Dominate on the blockchain with our custom Pump.fun
              <br /> solutions and modules for token developers.
            </p>
            <div className="pt-7 justify-center flex-wrap flex items-center gap-6">
            <a target='_blank' href="/shop">
            <div className="relativ rounded-lg group transition-all duration-200  flex items-center jsutify-center group h-fit w-fit">
                <button className="flex text-[#FF00C0] group-hover:gap-4 transition-all duration-200 items-center gap-1 rounded-full font-semibold text-sm  bg-white  px-6 py-3">
                  Purchase Today
                  <MdKeyboardArrowRight size={20}/>
                </button>
              </div>
            </a>
              <a href="https://www.youtube.com/watch?v=8HSQdpHETBo" target='_blank'>
              <div className="relative  rounded-lg group transition-all duration-200  flex items-center jsutify-center group h-fit w-fit">
                <button className="flex flex-row-reverse group-hover:gap-4  px-6 py-3 font-medium text-black rounded-full bg-gradient-to-r text-sm  from-[#FF00C0] to-[#411C8E] shadow-lg hover:scale-105 transform transition">
                  Watch Video
                  <BsFillPlayFill size={20}/>
                </button>
              </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[78%] bg-[#ffffff05] relative z-50 flex items-center justify-center border border-white/5 rounded-3xl overflow-hidden [#040404] backdrop-blur-3xl my-20 h-[60vh] mx-auto">
        <div className=" max-w-[74rem] mx-auto p-4  w-full shadow shadow-white/10 bg-[#ffffff00] border border-white/5 relative overflow-hidden flex flex-col jusitfy-end items-end rounded-3xl [#040404] backdrop-blur-3xl h-[95%]">
        <audio src="../src/assets/headerAudio.mp4" className="w-full mt-auto" controls></audio>
        </div>
        </div>

      </div>
    </>
  )
}

export default HeaderLAnding