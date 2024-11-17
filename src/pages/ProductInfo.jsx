import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaPlus } from "react-icons/fa";

import NavBar from "../components/NavBar";
import FooterOther from "../components/FooterOther";
import Card from "../components/ReviewCard";

const ProductInfo = () => {


    const cardsData = Array.from({ length: 22 }, (_, index) => ({
        id: index + 1,
        date: `November ${index + 1}, 2024`,
        rating: Math.floor(Math.random() * 5) + 1,
        reviewText: `Review for card ${index + 1}: Let's see how it goes!`,
        isVerified: index % 2 === 0,
      }));

      
      const [visibleCards, setVisibleCards] = useState(5); 

      const handleViewMore = () => {
        setVisibleCards((prev) => prev + 5);
      };






  const [swiperInstance, setSwiperInstance] = useState(null);

  const images = [
    "../src/assets/shopitem.avif",
    "../src/assets/shopitem.avif",
    "../src/assets/shopitem.avif",
  ];

  const handleThumbnailClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-black text-white  min-h-screen">
        <NavBar />
        <div className="max-w-[68rem] py-10 sm:py-20 mx-auto lg:flex-col lg:justify-center lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="flex lg:col-span-7 flex-col items-center">
              {/* Main Swiper */}
              <Swiper
                onSwiper={setSwiperInstance}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                className="w-full max-w-4xl mb-6"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Product ${index}`}
                      className="w-full rounded-lg shadow-md"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Bottom Thumbnail Swiper */}
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                className="w-full max-w-4xl"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Thumbnail ${index}`}
                      onClick={() => handleThumbnailClick(index)}
                      className="rounded-lg shadow-md cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="lg:col-span-5  text-white rounded-lg shadow-lg px-4">
              {/* Product Title */}
              <h1 className="text-2xl font-medium mb-2">DogWifTools License</h1>

              {/* Price */}
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="36"
                    height="36"
                    rx="4"
                    fill="url(#paint0_linear_1221_31173)"
                  />
                  <path
                    d="M10.7085 21.9173C10.8389 21.787 11.0181 21.7109 11.2082 21.7109H28.4451C28.7601 21.7109 28.9176 22.0911 28.6949 22.3137L25.2899 25.7188C25.1596 25.8491 24.9804 25.9251 24.7903 25.9251H7.55331C7.23833 25.9251 7.08084 25.545 7.3035 25.3223L10.7085 21.9173Z"
                    fill="white"
                  />
                  <path
                    d="M10.7085 9.20637C10.8443 9.07603 11.0235 9 11.2082 9H28.4451C28.7601 9 28.9176 9.38015 28.6949 9.60281L25.2899 13.0078C25.1596 13.1382 24.9804 13.2142 24.7903 13.2142H7.55331C7.23833 13.2142 7.08084 12.8341 7.3035 12.6114L10.7085 9.20637Z"
                    fill="white"
                  />
                  <path
                    d="M25.2899 15.5189C25.1596 15.3885 24.9804 15.3125 24.7903 15.3125H7.55331C7.23833 15.3125 7.08084 15.6926 7.3035 15.9153L10.7085 19.3203C10.8389 19.4507 11.0181 19.5267 11.2082 19.5267H28.4451C28.7601 19.5267 28.9176 19.1466 28.6949 18.9239L25.2899 15.5189Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1221_31173"
                      x1="18"
                      y1="0"
                      x2="18"
                      y2="36"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2ED1B7" />
                      <stop offset="0.520833" stop-color="#708ED2" />
                      <stop offset="1" stop-color="#B647F0" />
                    </linearGradient>
                  </defs>
                </svg>

                <p className="font-light text-sm text-white mb-1">
                  15.06963 SOL
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-2 gap-1 mb-4">
                <svg
                  className="w-4 h-4 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
                </svg>
                <svg
                  className="w-4 h-4 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
                </svg>
                <svg
                  className="w-4 h-4 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
                </svg>
                <svg
                  className="w-4 h-4 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
                </svg>
                <svg
                  className="w-4 h-4 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
                </svg>

                <div className="flex">
                  <span className="text-white text-sm ml-1">5.0</span>
                  <span className="text-gray-400 text-sm ml-1">
                    (16 reviews)
                  </span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex border-t border-white/20 mt-6 pt-6 items-center gap-4 mb-4">
                <span className=" bg-[#2A2B3F] px-14 py-1.5 rounded-full">
                  1
                </span>
              </div>

              {/* Total Price */}
              <div className="flex py-4 mb-2 items-center justify-between">
                <p className=" font-medium ">Total:</p>
                <p className="font-medium ">15.07 SOL</p>
              </div>

              <p className="text-center text-xs text-gray-300 pb-4">
                You can only purchase 1 items per order
              </p>
              <button className="w-full py-2 bg-[#818CF8] text-white font-semibold rounded-full transition mb-4">
                Add to Cart
              </button>

              <div className="border-t border-white/20 border-b text-white mt-4 py-6 shadow-md w-full  mx-auto">
                <h2
                  className=" cursor-pointer flex gap-2 items-center"
                  onClick={toggleDescription}
                >
                  <FaPlus />
                  Description
                </h2>

                {isOpen && (
                  <div className="mt-4 h-[50vh] descScroller overflow-auto">
                    <h3 className="text-xs font-medium mb-2">
                      Pump.fun Volume + Bundler + Bump It + Comment Bot
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-xs font-medium mb-2">Volume Modes</h4>
                      <ul className="list-disc pl-5 text-xs space-y-1">
                        <li>Gen Volume</li>
                        <li>Auto Volume</li>
                        <li>Human Mode</li>
                        <li>Micro Buy</li>
                        <li>Sell All</li>
                        <li>Single Wallet Sell</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-medium mb-2">Bundler</h4>
                      <ul className="list-disc text-xs pl-5 space-y-1">
                        <li>Safe Mode</li>
                        <li>Experimental Mode</li>
                        <li>Dump All</li>
                        <li>Dump All %</li>
                        <li>Delay Sell</li>
                        <li>Delay Sell %</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-medium mb-2">Comments</h4>
                      <ul className="list-disc text-xs pl-5 space-y-1">
                        <li>Custom Commenter</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-medium mb-2">Bump It</h4>
                      <ul className="list-disc text-xs pl-5 space-y-1">
                        <li>Custom Bump It (set username)</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="py-20">
            <h1 className="font-medium text-3xl  sm:text-4xl text-white">Reviews</h1>
             <div className="mt-16 flex flex-col gap-3">
      {/* Render only the visible cards */}
      {cardsData.slice(0, visibleCards).map((card) => (
        <Card
          key={card.id}
          date={card.date}
          rating={card.rating}
          reviewText={card.reviewText}
          isVerified={card.isVerified}
        />
      ))}

      {/* Show the "View More" button only if there are more cards to display */}
      {visibleCards < cardsData.length && (
        <button
          onClick={handleViewMore}
          className="mt-6 self-center bg-gray-800 w-full text-white px-4 py-2 rounded-lg  transition"
        >
          View More
        </button>
      )}
    </div>
          </div>
          <FooterOther />
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
