import React from "react";
import MeetFleetCard from "../components/MeetFleetCard";
import MeetGirl from "../assets/meetGirl.jpg";
import meetMan from "../assets/meetMan.jpg";
import Animate from "./Animate";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AnimateLeft from "./AnimateLeft";
const MeetFleet = () => {
  const splideRef = React.useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const customNext = () => {
    if (splideRef.current && !isEnd) {
      splideRef.current.go("+1");
    }
  };

  const customPrev = () => {
    if (splideRef.current && !isBeginning) {
      splideRef.current.go("-1");
    }
  };

  const handleSplideMove = () => {
    if (splideRef.current) {
      setIsBeginning(splideRef.current.splide.index === 0);
      setIsEnd(
        splideRef.current.splide.index ===
          stories.length - splideRef.current.splide.options.perPage
      );
    }
  };
  return (
    <div className="bg-white pb-20 xl:max-w-[86%] max-w-[72rem] xl:px-0 px-6  gap-4 mx-auto">
      <h1 className="text-4xl sm:text-[7vw]  md:text-[5.2vw]  xl:text-[68px]  leading-none ">
        Meet our fleet
      </h1>
      <div className="mt-10 hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:mt-20 items-start gap-4 md:gap-6 xl:gap-10">
        <AnimateLeft time={0.3} x={"-80%"}>
          <MeetFleetCard
            MainImg={MeetGirl}
            heading={"Urban Arrow Family"}
            hasGradient={true}
          />
        </AnimateLeft>
        <AnimateLeft time={0.2} x={"-80%"}>
          <MeetFleetCard
            MainImg={meetMan}
            heading={"Urban Arrow Family Smart System"}
            hasGradient={false}
          />
        </AnimateLeft>
        <AnimateLeft time={0.1} x={"-80%"}>
          <MeetFleetCard
            MainImg={
              "https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_448,h_631,dpr_2/ar_0.65,c_fill/w_auto,c_fill/f_auto,q_auto/v1727789784/2T6A9317_edited/2T6A9317_edited.png?_i=AA"
            }
            heading={"Test Arrow"}
            hasGradient={false}
          />
        </AnimateLeft>
      </div>
      <Splide
        className="md:hidden mt-20 flex"
        ref={splideRef}
        options={{
          type: "slide",
          perPage: 3,
          perMove: 1,

          arrows: false,
          pagination: false,
          gap: "2rem",
          speed: 800,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          breakpoints: {
            768: {
              perPage: 1, // Mobile view: 1 slide
            },
            1024: {
              perPage: 2, // Tablet view: 2 slides
            },
            1280: {
              perPage: 3, // Desktop view: 1 slide
            },
          },
        }}
        onMove={handleSplideMove}
        onMounted={handleSplideMove}
      >
        <SplideSlide>
          <AnimateLeft time={0.3} x={"-80%"}>
            <MeetFleetCard
              MainImg={MeetGirl}
              heading={"Urban Arrow Family"}
              hasGradient={true}
            />
          </AnimateLeft>
        </SplideSlide>
        <SplideSlide>
          <AnimateLeft time={0.2} x={"-80%"}>
            <MeetFleetCard
              MainImg={meetMan}
              heading={"Urban Arrow Family Smart System"}
              hasGradient={false}
            />
          </AnimateLeft>
        </SplideSlide>
        <SplideSlide>
          <AnimateLeft time={0.1} x={"-80%"}>
            <MeetFleetCard
              MainImg={
                "https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_448,h_631,dpr_2/ar_0.65,c_fill/w_auto,c_fill/f_auto,q_auto/v1727789784/2T6A9317_edited/2T6A9317_edited.png?_i=AA"
              }
              heading={"Test Arrow"}
              hasGradient={false}
            />
          </AnimateLeft>
        </SplideSlide>
      </Splide>
      <div className="flex justify-end mt-10 md:hidden  items-center gap-1.5">
        <div
          onClick={customPrev}
          className={`size-10 rotate-180 transition-opacity duration-300 ease-in-out ${
            isBeginning
              ? "opacity-30 cursor-not-allowed"
              : "opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]"
          } bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
            />
          </svg>
        </div>
        <div
          onClick={customNext}
          className={`size-10 rotate-0 transition-opacity duration-300 ease-in-out ${
            isEnd
              ? "opacity-30 cursor-not-allowed"
              : "opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]"
          } bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MeetFleet;
