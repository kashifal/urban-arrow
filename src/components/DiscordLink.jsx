import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const DiscordLink = () => {
  return (
    <a
      href="#"
      className="flex items-center gap-3 hover:gap-6 transition-all duration-400 w-fit border border-white/5 pl-4 pr-[1px] relative rounded-full py-[1px] bg-[#1A1A1A] text-[10px] font-medium"
    >
      Join The Discord
      <div className="w-[29px] h-5 flex items-center  justify-center bg-white rounded-full text-[#7F29AE]"><FaArrowRightLong /></div>
    </a>
  );
};

export default DiscordLink;
