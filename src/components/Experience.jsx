import React from "react";
import UncleWithKids from "../assets/UncleWithKids.png";
import Animate from "./Animate";

const Experience = () => {
  return (
    <div className="xl:max-w-[86%] text-[#1A1919] mx-auto  pt-40 pb-14 max-w-[72rem] px-6 grid sm:grid-cols-2 gap-10">
      <div className="h-full sm:order-1 md:py-0  order-2 w-fit flex flex-col justify-center">
        <Animate time={0.2}>
          <h1 className="sm:text-[7vw] text-4xl md:text-[45px] xl:text-[65px]  leading-none ">
            Experience Urban Arrow near you
          </h1>
        </Animate>
        <Animate time={0.3}>
          <p className="text-black pt-8 pb-5 font-medium">
            Ask all your questions to our experts, take a test ride and find out
            which bike suits you and your family <br />
            best.
          </p>
        </Animate>
        <Animate time={0.4}>
          <button className="bg-[#BEE6D7]  button-font w-fit px-5 hover:bg-[#b0d0c4] py-3.5 rounded-full text-black font-medium">
            Find a dealer
          </button>
        </Animate>
      </div>
      <div className=" sm:order-2 sm:w-fit  2xl:pl-16 h-fit rounded-xl overflow-hidden order-1">
        <Animate time={0.1}>
          <img
            src={UncleWithKids}
            className="lg:h-[40vw] rounded-xl h-[90vw] sm:h-[50vw] md:h-[60vw]   w-full object-cover"
            alt=""
          />
        </Animate>
      </div>
    </div>
  );
};

export default Experience;
