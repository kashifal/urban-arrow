import React from "react";
import DiscordLink from "./DiscordLink";
import { MdDone } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Pricing = () => {
  return (
    <>
      <div className="max-w-[74rem] py-28 mt-32 mx-auto lg:px-0 px-4">
        <div className="flex flex-col jsutify-center items-center">
          <DiscordLink />
          <h1 className="text-5xl text-center py-5 ">Pricing</h1>
          <div className="mt-10 px-4 py-8 rounded-2xl max-w-sm w-full min-h-[60vh] border border-white/5 bg-white/5 backdrop-blur-3xl">
            <div className="w-[75%] mx-auto flex flex-col justify-center">
              <p className="font-medium text-sm text-center">DogWifTools 1.0</p>
              <h1 className="py-5 text-5xl text-center font-semibold">
                15 SOL
              </h1>
              <button className="bg-[#ffffff01] mt-3 backdrop-blur-3xl px-8 py-2 rounded-full text-sm font-medium mx-auto">
                Lifetime
              </button>
              <div className="pt-10 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-5 text-[10px] font-bold rounded-full bg-white/5 flex items-center justify-center backdrop-blur-3xl">
                    <MdDone />
                  </div>
                  <p className="text-xs font-medium">Bundler</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-5 text-[10px] font-bold rounded-full bg-white/5 flex items-center justify-center backdrop-blur-3xl">
                    <MdDone />
                  </div>
                  <p className="text-xs font-medium">Volume Tools
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-5 text-[10px] font-bold rounded-full bg-white/5 flex items-center justify-center backdrop-blur-3xl">
                    <MdDone />
                  </div>
                  <p className="text-xs font-medium">Comment Bot
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-5 text-[10px] font-bold rounded-full bg-white/5 flex items-center justify-center backdrop-blur-3xl">
                    <MdDone />
                  </div>
                  <p className="text-xs font-medium">Bump It
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-5 text-[10px] font-bold rounded-full bg-white/5 flex items-center justify-center backdrop-blur-3xl">
                    <MdDone />
                  </div>
                  <p className="text-xs font-medium">+ Much More
                  </p>
                </div>
              </div>
              <div className="relative mt-20 rounded-lg group w-full transition-all duration-200 bg-white/10 flex items-center jsutify-center group h-fit">
                <button className="flex text-[#7F29AE] w-full group-hover:gap-4 transition-all duration-200 items-center gap-4 rounded-lg justify-center font-semibold text-sm  bg-white py-[9px] px-[18px]">
                  Purchase Today
                  <MdKeyboardArrowRight size={20}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
