import React from "react";
import { FaPlus } from "react-icons/fa";
import DiscordLink from "./DiscordLink";
import { MdKeyboardArrowRight } from "react-icons/md";
import download from '../assets/download.png'
import circle1 from '../assets/circle1.avif'

const Integration = () => {
  return (
    <>
  <div className="relative w-full flex justify-center items-center bg-black">
    <div className=" flex justify-between  sm:hidden md:flex">
      <img
        src={download}
        className="left=[0%] filter top-[20%] absolute"
        alt=""
      />
      <img
        src={download}
        className="right-[0%] filter top-[20%] absolute "
        alt=""
      />
    </div>
    <div className=" h-screen w-full flex justify-center items-center">
      <div className="absolute flex justify-center items-center rounded-full">
        <div className="absolute w-64 h-64 rounded-full bg-white/5 backdrop-blur-3xl border border-white/5" />
        <div className="absolute w-52 h-52 rounded-full bg-white/5 backdrop-blur-3xl border border-white/5" />
      </div>
      <div className="relative flex bg-white/30 backdrop-blur-3xl border border-white/5 justify-center items-center w-32 h-32 rounded-full shadow-lg z-10">
        <span className="text-white text-3xl font-bold">
          <faplus></faplus>
        </span>
      </div>
    </div>
    <div className="absolute lg:block hidden top-[10%] xl:top-[20%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-full">
        <img src={circle1} alt="Icon 1" className="filter" />
      </div>
    </div>
    <div className="absolute lg:block hidden top-[32%] left-[65%] xl:left-[61%] transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-full">
        <img src={circle1} alt="Icon 1" className="filter" />
      </div>
    </div>
    <div className="absolute lg:block hidden top-[30%] left-[35.5%] xl:left-[39%] transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-full">
        <img src={circle1} alt="Icon 1" className="filter" />
      </div>
    </div>
    <div className="absolute lg:block hidden top-[50%] left-[30%] xl:left-[36%] transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-full">
        <img src={circle1} alt="Icon 1" className="filter" />
      </div>
    </div>
    <div className="absolute lg:block hidden top-[50%] left-[70%] xl:left-[64.5%] transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-center items-center w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-full">
        <img src={circle1} alt="Icon 1" className="filter" />
      </div>
    </div>
  </div>


      <div className="-mt-20 relative z-[9999] max-w-[74rem] mx-auto lg:px-0 px-4  ">
        <div className="flex flex-col jsutify-center items-center">
          <DiscordLink />
          <h1 className="sm:text-5xl pt-8  text-transparent bg-clip-text bg-gradient-to-r from-[#411C8E] to-[#FF00C0] text-3xl text-center  pb-5 font-medium">
            Integrations for
            <span className="opacity-80 text-white lg:ml-2">
              everything
              <br /> Solana
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Integration;
