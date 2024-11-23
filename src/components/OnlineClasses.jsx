import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsArrowDown } from "react-icons/bs";
import BgBubble from '../assets/bubbles.png';
import ClassesCard from './ClassesCard';

const OnlineClasses = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null); // Create a reference for Swiper

    const cards = Array.from({ length: 6 }, (_, index) => (
        <ClassesCard key={index} />
    ));

    // Initialize navigation only after Swiper is available
    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    }, []);

    const handleNextClick = () => {
        const swiper = swiperRef.current.swiper; // Access the Swiper instance
        if (swiper.isEnd) {
            swiper.slideTo(0, 300); // 300ms fast transition to the first slide
        } else {
            swiper.slideNext();
        }
    };

    const handlePrevClick = () => {
        const swiper = swiperRef.current.swiper; // Access the Swiper instance
        if (swiper.isBeginning) {
            swiper.slideTo(swiper.slides.length - 1, 300); // 300ms fast transition to the last slide
        } else {
            swiper.slidePrev();
        }
    };

    return (
        <div className='-top-40 relative'>
            <div className="relative">
                <div className="absolute overflow-x-hidden w-full z-[3] px-0 py-0 object-cover">
                    <img src={BgBubble} alt="" />
                </div>
                <div className="max-w-7xl mx-auto py-16 px-4 md:px-6 relative z-[4]">
                    <div className="max-w-full mx-auto">
                        {/* Title Section */}
                        <div className="flex items-center lg:w-[85%] justify-between gap-6 flex-wrap">
                            <div className="flex flex-col sm:w-[80%] gap-6">
                                <h1 className="text-[#227179] font-medium tracking-wider text-[44px]">Popular Online Classes</h1>
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
                        {/* Button Section */}
                        <div className="mt-10 lg:absolute lg:mt-12 lg:z-50 lg:left-10 text-center">
                            <a
                                href="#"
                                className="inline-flex items-center px-6 py-3 font-semibold text-sm text-gray-200 bg-[#6f948d] hover:bg-teal-900 rounded-full transition duration-300"
                            >
                                Browse All Classes
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 ml-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Content Section */}
                    <div className="lg:mt-16 mt-12   gap-3">
                        <Swiper
                            ref={swiperRef} // Pass the swiper reference to access the swiper instance
                            modules={[Navigation]}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            loop={true} // Enable looping to go back to the first slide after the last one
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            speed={500} // Adjust transition speed
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
            </div>
        </div>
    );
}

export default OnlineClasses;
