import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BottomCircle from '../assets/bottomCircle.png'

import { BsArrowDown } from "react-icons/bs";
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const testimonials = Array.from({ length: 7 }, (_, index) => (
    <TestimonialCard key={index} />
  ));

  const handleNextClick = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slideNext();
  };

  const handlePrevClick = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slidePrev();
  };

  return (
    <>
      <div className="relative">
        <div className="bg-[#EFF7F9] mb-80 relative overflow-hidden py-40">
          <div className="absolute -left-[40%] rotate-45 -top-[180%]">
            <img src={BottomCircle} alt="Bottom Circle" />
          </div>
          <div className="absolute -left-[50%] w-[70%] -top-[110%]">
            <img src={BottomCircle} alt="Bottom Circle" />
          </div>
          <div className="flex max-w-7xl mx-auto px-4 items-center justify-between gap-6 flex-wrap">
            <div className="flex flex-col sm:w-[80%] gap-6">
              <h1 className="text-[#227179] font-medium tracking-wider text-[44px]">Testimonial</h1>
              <p className="text-[#8B8792] -mt-4 leading-loose text-[17px]">
                What about you say
              </p>
            </div>
            <div className="flex text-[#C9C9C9] items-center gap-4">
              {/* Left Arrow */}
              <div
                ref={prevRef}
                onClick={handlePrevClick}
                className="relative group cursor-pointer hover:text-[#227179] transition-all duration-200"
              >
                <div className="rotate-90">
                  <BsArrowDown size={30} />
                </div>
                <div className="h-[4px] opacity-0 absolute w-9 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400 bg-[#D7D7D7]"></div>
              </div>
              {/* Right Arrow */}
              <div
                ref={nextRef}
                onClick={handleNextClick}
                className="relative group cursor-pointer hover:text-[#227179] transition-all duration-200"
              >
                <div className="-rotate-90">
                  <BsArrowDown size={30} />
                </div>
                <div className="h-[4px] opacity-0 absolute w-9 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400 bg-[#D7D7D7]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl px-4 absolute md:ml-7 -bottom-[40%] md:-bottom-[70%] mx-auto flex sm:px-6 md:px-4">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]} // Ensure Navigation is passed here
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 2 },
            }}
            className="my-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {testimonial}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonial;