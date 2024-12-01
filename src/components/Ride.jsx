import React from "react";
import SmothRide from "../assets/smothRide.png";
import Animate from "./Animate";

const Ride = () => {
  return (
    <div className="2xl:min-h-[50vw] min-h-[60vw] text-[#1A1919] bg-[#FAFAF0] mt-6 grid sm:grid-cols-2 2xl:h-full">
      <Animate time={0.1}>
        <img
          src={SmothRide}
          className="w-full h-[50vh] md:h-full object-cover "
          alt=""
        />
      </Animate>
      <div className="xl:w-[70%] py-14 md:py-10 w-[95%] md:w-[90%] mx-auto h-full flex flex-col justify-center px-6">
        <Animate time={0.2}>
          <h1 className="sm:text-[7vw] text-4xl md:text-[4.9vw] xl:text-[65px]  leading-none ">
            The smoothest ride
          </h1>
        </Animate>
        <Animate time={0.3}>
          <p className="py-5   mt-4 text-black font-medium">
            Since 2011, we’ve been making electric cargo bikes you can rely on.
            By collaborating with renowned partners like Bosch, Enviolo, and
            Schwalbe, we ensure the highest quality.
          </p>
        </Animate>
        <Animate time={0.4}>
          <p className="py-   text-black font-medium">
            We offer you the best riding experience and “the smoothest ride”.
            The lowered centre of gravity positively affects the road handling
            and balance of our bikes. Glide through traffic with the wind in
            your hair, and your day will run smoothly.
          </p>
        </Animate>
        <Animate time={0.5}>
          <div className="flex flex-wrap items-center gap-1.5 mt-5">
            <button className="bg-[#BEEB82]  button-font px-5 hover:bg-[#a2c86f] py-3.5 rounded-full text-black font-medium">
              Find your dealer
            </button>
            <button className="bg-[#FF8C3C]  button-font px-5 hover:bg-[#e78741] py-3.5 rounded-full text-black font-medium">
              Configure your bike
            </button>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Ride;
