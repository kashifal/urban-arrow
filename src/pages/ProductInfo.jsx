import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FaPlus } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

import NavBar from "../components/NavBar";
import FooterOther from "../components/FooterOther";
import Card from "../components/ReviewCard";
import shopItem from '../assets/shopitem.avif'

const ProductInfo = () => {
  const { t } = useTranslation();  // Translation hook

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
    shopItem,
    shopItem,
    shopItem,
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
      <div className="bg-black text-white min-h-screen">
        <NavBar />
        <div className="max-w-[68rem] py-10 sm:py-20 mx-auto lg:flex-col lg:justify-center lg:items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="flex lg:col-span-7 flex-col items-center">
              {/* Main Swiper */}
              <Swiper
                onSwiper={setSwiperInstance}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full max-w-4xl mb-6"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Product ${index}`}
                      className="w-full filter rounded-lg shadow-md"
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
                      className="rounded-lg filter shadow-md cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="lg:col-span-5 text-white rounded-lg shadow-lg px-4">
              {/* Product Title */}
              <h1 className="text-2xl font-medium mb-2">{t('productTitle')}</h1>

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
                  {t('productPrice')}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-2 gap-1 mb-4">
                {/* ... Rating stars (you can modify based on dynamic rating) */}
                <div className="flex">
                  <span className="text-white text-sm ml-1">5.0</span>
                  <span className="text-gray-400 text-sm ml-1">
                    (16 {t('reviews')})
                  </span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex border-t border-white/20 mt-6 pt-6 items-center gap-4 mb-4">
                <span className=" bg-[#2A2B3F] px-14 py-1.5 rounded-full">
                  {t('quantitySelector')}
                </span>
              </div>

              {/* Total Price */}
              <div className="flex py-4 mb-2 items-center justify-between">
                <p className=" font-medium ">{t('totalPrice')}</p>
                <p className="font-medium ">15.07 SOL</p>
              </div>

              <p className="text-center text-xs text-gray-300 pb-4">
                {t('youCanOnlyPurchaseOneItem')}
              </p>

              <button className="w-full py-2 bg-[#818CF8] text-white font-semibold rounded-full transition mb-4">
                {t('addToCart')}
              </button>

              <div className="border-t border-white/20 border-b text-white mt-4 py-6 shadow-md w-full  mx-auto">
                <h2
                  className=" cursor-pointer flex gap-2 items-center"
                  onClick={toggleDescription}
                >
                  <FaPlus />
                  {t('descriptionToggle')}
                </h2>

                {isOpen && (
                  <div className="mt-4 h-[50vh] descScroller overflow-auto">
                  <h3 className="text-xs font-medium mb-2">
                    {t('descriptionTitle')}
                  </h3>
                
                  <div className="mb-6">
                    <h4 className="text-xs font-medium mb-2">
                      {t('volumeModes')}
                    </h4>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      <li>{t('genVolume')}</li>
                      <li>{t('autoVolume')}</li>
                      <li>{t('humanMode')}</li>
                      <li>{t('microBuy')}</li>
                      <li>{t('sellAll')}</li>
                      <li>{t('singleWalletSell')}</li>
                    </ul>
                  </div>
                
                  <div className="mb-6">
                    <h4 className="text-xs font-medium mb-2">{t('bundler')}</h4>
                    <ul className="list-disc text-xs pl-5 space-y-1">
                      <li>{t('safeMode')}</li>
                      <li>{t('experimentalMode')}</li>
                      <li>{t('dumpAll')}</li>
                      <li>{t('dumpAllPercent')}</li>
                      <li>{t('delaySell')}</li>
                      <li>{t('delaySellPercent')}</li>
                    </ul>
                  </div>
                
                  <div className="mb-6">
                    <h4 className="text-xs font-medium mb-2">{t('comments')}</h4>
                    <ul className="list-disc text-xs pl-5 space-y-1">
                      <li>{t('customCommenter')}</li>
                    </ul>
                  </div>
                
                  <div className="mb-6">
                    <h4 className="text-xs font-medium mb-2">{t('bumpIt')}</h4>
                    <ul className="list-disc text-xs pl-5 space-y-1">
                      <li>{t('customBumpIt')}</li>
                    </ul>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
          <div className="py-20">
            <h1 className="font-medium text-3xl sm:text-4xl text-white">
              {t('reviews')}
            </h1>
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
                  className="mt-6 self-center bg-gray-800 w-full text-white px-4 py-2 rounded-lg transition"
                >
                  {t('viewMore')}
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
