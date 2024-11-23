import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsArrowDown } from "react-icons/bs";
import InstructorCard from './InstructorCard';

const HomeInstructors = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // Create a reference for Swiper

  const cards = Array.from({ length: 6 }, (_, index) => (
    <InstructorCard key={index} />
  ));

  const handleNextClick = () => {
    const swiper = swiperRef.current.swiper; // Access the Swiper instance
    if (swiper.isEnd) {
      // If we're on the last card, wrap around to the first card
      swiper.slideTo(0, 300); // 300ms fast transition to the first slide
    } else {
      // Otherwise, go to the next card
      swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    const swiper = swiperRef.current.swiper; // Access the Swiper instance
    if (swiper.isBeginning) {
      // If we're on the first card, wrap around to the last card
      swiper.slideTo(swiper.slides.length - 1, 300); // 300ms fast transition to the last slide
    } else {
      // Otherwise, go to the previous card
      swiper.slidePrev();
    }
  };

  return (
    <div className=' relative py-20 max-w-7xl mx-auto md:px-6 px-4'>
      <div className="flex items-center justify-between gap-6 flex-wrap">
        <div className="flex flex-col sm:w-[80%] gap-6">
          <div className="h-[2px] w-10 bg-[#D7D7D7]"></div>
          <h1 className="text-[#227179] font-medium tracking-wider text-[44px]">Our Instructors</h1>
          <p className="text-[#8B8792] -mt-2 leading-loose text-[17px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor, nihil vel incidunt vitae ipsam ad autem repudiandae obcaecati saepe provident ratione exercitationem id reiciendis?
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
      <div className="mt-14">
        <Swiper
          ref={swiperRef} // Pass the swiper reference to access the swiper instance
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop={true} // Enable looping to go back to the first slide after the last one
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-8"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              {card}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeInstructors;
