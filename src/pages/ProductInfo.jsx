import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
// import { useTranslation } from 'react-i18next'; // Import the i18n hook
// import shopItem from '../assets/shopitem.avif';

import { FaPlus } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

import NavBar from "../components/NavBar";
import FooterOther from "../components/FooterOther";
import Card from "../components/ReviewCard";
import shopItem from '../assets/shopitem.avif'

const ProductInfo = () => {
  const { t } = useTranslation();  // Translation hook
  const reviews = [
    { id: 1, date: "November 1, 2024", rating: 5, reviewText: "Absolutely fantastic! This product exceeded all my expectations. Highly recommend it to everyone!", isVerified: true },
    { id: 2, date: "November 2, 2024", rating: 4, reviewText: "A great purchase! The quality is top-notch, and it’s super easy to use.", isVerified: false },
    { id: 3, date: "November 3, 2024", rating: 5, reviewText: "This is hands down the best product I’ve used this year. Worth every penny!", isVerified: true },
    { id: 4, date: "November 4, 2024", rating: 5, reviewText: "Amazing product! The design is sleek, and it performs even better than advertised.", isVerified: false },
    { id: 5, date: "November 5, 2024", rating: 4, reviewText: "Really impressed with the performance and reliability. Would definitely buy again!", isVerified: true },
    { id: 6, date: "November 6, 2024", rating: 5, reviewText: "Five stars! This product is a game-changer. Perfect for daily use.", isVerified: false },
    { id: 7, date: "November 7, 2024", rating: 5, reviewText: "The product quality is outstanding, and the customer service was great too!", isVerified: true },
    { id: 8, date: "November 8, 2024", rating: 4, reviewText: "I can’t believe how well this works. Great value for the price.", isVerified: false },
    { id: 9, date: "November 9, 2024", rating: 5, reviewText: "Fantastic! The attention to detail in this product is evident. Love it!", isVerified: true },
    { id: 10, date: "November 10, 2024", rating: 4, reviewText: "Exceeded my expectations! Works flawlessly and looks amazing too.", isVerified: false },
    { id: 11, date: "November 11, 2024", rating: 5, reviewText: "This product has made my life so much easier. Highly recommend it to everyone.", isVerified: true },
    { id: 12, date: "November 12, 2024", rating: 5, reviewText: "Top-notch quality and incredible performance. A must-have for anyone!", isVerified: false },
    { id: 13, date: "November 13, 2024", rating: 4, reviewText: "Couldn’t be happier with this purchase. It’s exactly what I needed.", isVerified: true },
    { id: 14, date: "November 14, 2024", rating: 5, reviewText: "This is my favorite product so far. The quality and functionality are unmatched.", isVerified: false },
    { id: 15, date: "November 15, 2024", rating: 5, reviewText: "Incredible value! The product delivers on every promise. Love it!", isVerified: true },
    { id: 16, date: "November 16, 2024", rating: 4, reviewText: "The build quality is superb, and it works perfectly. 10/10 would recommend!", isVerified: false },
    { id: 17, date: "November 17, 2024", rating: 5, reviewText: "One of the best purchases I’ve ever made. Highly functional and durable.", isVerified: true },
  ];
  
  const cardsData = reviews;

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

  const [isOpen, setIsOpen] = useState(true);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };


  const dispatch = useDispatch();
 
  const products = [
    { id: 1, name: 'BullRunner License', price: 15.0000 }, 
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(products[0]));
    toast.success(`${products[0].name} has been added to the cart!`);
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
              <h1 className="text-2xl font-medium mb-2">{products[0].name}</h1>

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
                  {products[0].price}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-2 gap-1 mb-4">
                {/* ... Rating stars (you can modify based on dynamic rating) */}
                <div className="flex">
                  <span className="text-white text-sm ml-1">5.0</span>
                  <span className="text-gray-400 text-sm ml-1">
                    (17 {t('reviews')})
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
                <p className="font-medium ">{products[0].price} SOL</p>
              </div>

              <p className="text-center text-xs text-gray-300 pb-4">
                {t('youCanOnlyPurchaseOneItem')}
              </p>

              <button onClick={() => handleAddToCart()} className="w-full py-2 bg-[#FF01C0] text-white font-semibold rounded-full transition mb-4">
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
