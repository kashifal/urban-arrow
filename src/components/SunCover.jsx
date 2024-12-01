import React from "react";
import Cycle from "../assets/cycle.jpg";
import Animate from "./Animate";

const SunCover = () => {
  return (
    <div className="xl:max-w-[86%] text-[#1A1919] mx-auto pb-24 pt-32 max-w-[72rem] px-6 grid sm:grid-cols-2 gap-10">
      <div className="h-full 2xl:ml-20 md:order-2 md:py-0 sm:py-5 order-2 w-fit flex flex-col justify-center">
        <Animate time={0.2}>
          <h1 className="sm:text-[7vw] text-4xl md:text-[45px] xl:text-[65px]  leading-none ">
            Receive a Suncover as a gift now ☀️
          </h1>
        </Animate>
        <Animate time={0.3}>
          <p className="text-black py-8 font-medium">
            For limited time only, now receive an Urban Arrow Suncover as a gift
            with the purchase of an Urban Arrow Family Performance Plus or Cargo
            Line*!
          </p>
        </Animate>
        <Animate time={0.4}>
          <p className="text-black mb-4 font-medium">
            *Both Family and Family Smart System.
          </p>
        </Animate>
        <Animate time={0.5}>
          <button className="bg-[#F0E600]  button-font w-fit px-[18px] hover:bg-[#e1d83b] py-3.5 rounded-full text-black font-medium">
            Find your dealer
          </button>
        </Animate>
      </div>
      <Animate time={0.1}>
        <img
          src={Cycle}
          className="lg:h-[40vw] h-[80vw] sm:h-[40vw] md:h-[40vw] md:order-1 order-1 2xl:right-10 2xl:relative rounded-xl md:rounded-xl w-full object-cover"
          alt=""
        />
      </Animate>
    </div>
  );
};

export default SunCover;
