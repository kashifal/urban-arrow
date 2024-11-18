import React from "react";
import DiscordLink from "./DiscordLink";
import AboutCards from "./AboutCards";
import { FaVolumeLow } from "react-icons/fa6";
import { GrBundle } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { SiStackshare } from "react-icons/si";
import DetailCards from "./detailCards";

const About = () => {
  return (
    <>
      <div className="py-20 max-w-[74rem] mx-auto lg:px-0 px-4 ">
        <div className="flex flex-col jsutify-center items-center">
          <DiscordLink />
          <h1 className="sm:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#411C8E] to-[#FF00C0] lg:leading-[70px] text-center pt-8 pb-5 font-medium">
            Key Features
            <span className="opacity-80 text-white lg:ml-2">
              That
              <br />
              Will Elevate Your
              <br /> Launches
            </span>
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 my-10 min-h-[40vh] gap-8">
          <AboutCards
            icon={<FaVolumeLow size={30} />}
            heading={"Volume"}
            desc={
              "Ensure consistent volume and maximize your token s potential with advanced automated processes."
            }
          />
          <AboutCards
            icon={<GrBundle size={30} />}
            heading={"Bundler"}
            desc={
              "Securely purchase token supply across multiple sub-wallets at launch without triggering flags on trading platforms."
            }
          />
          <AboutCards
            icon={<GiNotebook size={30} />}
            heading={"Comment"}
            desc={
              "Post custom comments on any pump.fun token s page to boost visibility and engagement."
            }
          />
          <AboutCards
            icon={<SiStackshare size={30} />}
            heading={"Bump It"}
            desc={
              "Boost your token to the top, simulating high activity to keep it trending on Pump.fun with minimal cost."
            }
          />
        </div>

        <div className="">
        <div className="min-h-[63vh] grid sm:grid-cols-2 xl:grid-cols-12 mt-5 gap-3 h-full w-full">
        <div className="xl:col-span-4">
        <DetailCards
            head={"Launch Your Token with Ease"}
            img={"../src/assets/card1.avif"}
            desc={
              "Ensure multiple wallet buys. Prevent snipers from buying before you."
            }
          />
          </div>
          <div className="xl:col-span-4">
          <DetailCards
            head={"Boost Your Token’s Volume in Multiple Ways"}
            img={"../src/assets/card1.avif"}
            desc={
              "Automate volume, micro-buys, bumps, and more—everything to keep your token active."
            }
          />
          </div>
          <div className="xl:col-span-4">
          <DetailCards
            head={"GUI Focused on User Experience"}
            img={"../src/assets/card1.avif"}
            desc={
              "Our Intuitive layout make it incredibly easy to use."
            }
          />
          </div>
            <div className="xl:col-span-4">
            <DetailCards
            head={"Bypass Bubble Map Detection Seamlessly"}
            img={"../src/assets/card1.avif"}
            desc={
              "Prevent wallets from being detected on bubble maps."
            }
          />
            </div>
            <div className="xl:col-span-8 h-fit">
            <DetailCards
            head={"Pump.Fun to Raydium"}
            img={"../src/assets/card1.avif"}
            desc={
              "Easily manage your token's transition to Raydium"
            }
          />
            </div>
        </div>
        <div className="">
          
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
