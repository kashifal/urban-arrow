import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
  <div className="pt-28 flex  flex-col pb-20 items-center jsutify-center relative">
    <div className="w-full  h-[270px] bg-white-glow opacity-100 absolute top-[60%]">
      <img
        src="../src/assets/download.png"
        className="left=[0%] filter top-[80%] w-[80%] h-[250px] object-cover"
        alt=""
      />
    </div>
    <img
      src="../src/assets/fooDooggggLAnding.avif"
      alt=""
      className="size-32 filter  roudned-xl"
    />
    <div className="max-w-[74rem] mx-auto lg:px-0 pb-20 px-4">
      <div className="flex flex-col jsutify-center items-center">
        <h1 className="sm:text-4xl text-3xl text-center pt-8 pb-5 font-medium">
          Elevate your
          <span className="opacity-50 ml-2">
            launches to
            <br />
            the next level
          </span>
        </h1>
        <div className="pt-7 justify-center flex-wrap flex items-center gap-6">
          <a target="_blank" href="/shop">
          <div className="relative rounded-lg group transition-all duration-200 flex items-center jsutify-center group h-fit w-fit">
            <button className="flex text-[#7F29AE] group-hover:gap-4 transition-all duration-200 items-center gap-1 rounded-lg font-semibold text-sm bg-white py-[9px] px-[18px]">
              Purchase Today
              <MdKeyboardArrowRight />
            </button>
          </div>
          </a>
          <a target="_blank" href="https://www.youtube.com/watch?v=8HSQdpHETBo">
          <div className="relative rounded-lg group transition-all duration-200 flex items-center jsutify-center group h-fit w-fit">
            <button className="flex flex-row-reverse group-hover:gap-4 border border-white/5 transition-all bg-white/5 backdrop-blur-lg duration-200 items-center gap-1 rounded-lg font-semibold text-sm bg-white py-[9px] px-[18px]">
              Watch Video
              <BsFillPlayFill />
            </button>
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>

      <div className="bg-black relative z-[999] sm:flex-row flex-col sm:gap-3 gap-6 px-8 py-4 flex items-center justify-between">
      <div className="flex cursor-pointer items-center gap-3">
              <img src="../src/assets/logo.avif" alt="" className="size-10 filter" />
              <p className="text-sm font-medium">DogWifTools</p>
            </div>
            <div className="flex flex-col text-center gap-1 justify-center">
            <a target="_blank" href="/terms" className="text-white/70 underline hover:text-white font-normal text-xs">Terms of Service</a>
            <p className="font-normal text-xs cursor-context-menu text-white/70  hover:text-white ">© 2024 DogWifTools. All rights reserved.

</p>
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-white/5 text-white/50 rounded-xl size-10 backdrop-blur-3xl border-white/5 border flex items-center justify-center">
                <BsTwitterX />

                </button>
                <button className="bg-white/5 text-white/50 rounded-xl size-10 backdrop-blur-3xl border-white/5 border flex items-center justify-center">
               <img src="../src/assets/discordICon.avif" alt="" className="size-6" />

                </button>
            </div>
      </div>
    </>
  );
};

export default Footer;
