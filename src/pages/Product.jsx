import React from "react";
import NavBar from "../components/NavBar";
import FooterOther from "../components/FooterOther";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../components/ReviewCard";
import shopItem from '../assets/shopitem.avif'

const Product = () => {
  const cardsData = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    date: `November ${index + 1}, 2024`,
    rating: Math.floor(Math.random() * 5) + 1,
    reviewText: `Review for card ${index + 1}: Let's see how it goes!`,
    isVerified: index % 2 === 0,
  }));
  return (
    <>
      <div className="bg-black text-white  min-h-screen">
        <NavBar />
        <div className="max-w-[68rem] px-4 pt-8 py-10 mx-auto lg:flex-col lg:justify-center lg:items-center">
          <div className="flex flex-wrap items-center pb-14 justify-between gap-3">
            <h1 className="sm:text-4xl txet-3xl font-semibold">Our Products</h1>
            <button className="flex items-center gap-3 border border-white/20 px-5 py-2 rounded-full">
              View All Products
              <FaArrowRightLong />
            </button>
          </div>
          <div className="relative w-fit bg-[#17161B] rounded-2xl shadow-md overflow-hidden">
            {/* Product Image */}
            <div className="relative">
              <img
                src={shopItem}
                alt="DogWifTools License"
                className="w-full filter h-[201px] object-cover rounded-t-lg"
              />
              {/* Cart Actions */}
              <div className="absolute inset-0  flex  justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                <div className="flex  justify-center items-end   w-[100%]  ">
                  {/* Add to Cart */}
                  <button className="bg-[#2A2B3F] w-[80vw] h-10 mb-5 mx-5 rounded-full  text-sm font-medium text-white  hover:bg-indigo-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Product Info */}
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold leading-6">
                DogWifTools License
              </h3>
              {/* Price */}
              <div className="flex items-center gap-2 mt-2">
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

                <span className="text-lg font-semibold">15.00000</span>
                <span className="ml-1 text-sm text-gray-400">SOL</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-20 pb-14 justify-between gap-3">
            <h1 className="sm:text-4xl txet-3xl font-semibold">Reviews</h1>
            <button className="flex items-center gap-3 border border-white/20 px-5 py-2 rounded-full">
              View All Reviews
              <FaArrowRightLong />
            </button>
          </div>
          <div className="mb-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {cardsData.map((card) => (
              <Card
                key={card.id}
                date={card.date}
                rating={card.rating}
                reviewText={card.reviewText}
                isVerified={card.isVerified}
              />
            ))}
          </div>
          <div className="rounded-xl px-4 mb-40 flex flex-col justify-center items-center bg-zinc-900 py-20 w-full">
            <h1 className="md:text-4xl font-semibold text-3xl">Get in Touch</h1>
            <p className="text-gray-400 text-center py-2">
              Got a question or need some help? Get in touch. We'd love to hear
              from you.
            </p>
            <button className="flex items-center gap-2 mt-8 justify-center px-6 py-2 rounded-full bg-[#818CF8]">
              Contact Us <FaArrowRightLong />
            </button>
          </div>
          <FooterOther />
        </div>
      </div>
    </>
  );
};

export default Product;
