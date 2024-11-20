import React from "react";
import NavBar from "../components/NavBar";
import FooterOther from "../components/FooterOther";
import { RxCross2 } from "react-icons/rx";
import { RiCouponFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import shopItem from '../assets/shopitem.avif';
import { useTranslation } from 'react-i18next';  // Import i18n hook

const Checkout = () => {
  const { t } = useTranslation();  // Initialize the translation function
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <NavBar />
        <div className="max-w-[68rem] lg:px-0 px-2 mx-auto pt-6 pb-20">
          <h1 className="text-5xl font-semibold">{t('checkout_title')}</h1>
          <p className="py-3">{t('checkout_items', { count: cartItems.length })}</p>
          <div className="gap-5 min-h-[80vh] grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-8 h-fit">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="border flex sm:flex-row flex-col items-start justify-between border-white/5 bg-white/5 backdrop-blur-3xl sm:p-5 p-2 rounded-xl"
                >
                  <div className="flex items-start gap-2">
                    <img
                      src={shopItem}
                      alt=""
                      className="sm:w-36 filter w-28 rounded-xl"
                    />
                    <div className="">
                      <h1 className="text-sm font-medium">DogWifTools License</h1>
                      <div className="flex items-start mt-1 gap-1">
                        <svg
                          width="15"
                          height="15"
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
                        <span className="text-sm">15.00000</span>
                        <span className=" text-sm">{t('sol_currency')}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-white/5 backdrop-blur-3xl rounded-full border-white/5 border sm:mt-0 mt-4 sm:w-auto w-full px-14 py-2 ">1</button>
                </div>
              ))}
            </div>

            <div className="md:col-span-4 h-fit bg-[#17161B] border-white/5 border rounded-xl">
              <div className="p-5 border-b border-white/5 flex items-center justify-between">
                <h5 className="font-medium">{t('order_summary')}</h5>
                <span className="cursor-pointer font-bold">
                  <RxCross2 />
                </span>
              </div>
              <div className="p-5">
                <div className="relative w-full h-fit">
                  <div className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-2.5">
                    <RiCouponFill />
                  </div>
                  <input
                    type="text"
                    placeholder={t('coupon_code')}
                    className="py-2 w-full placeholder:text-sm text-sm pl-8 text-gray-400 focus:border-[#818CF8] outline-none border-white/5 border pr-4 bg-[#2A2B3F] rounded-lg"
                  />
                  <div className="text-gray-400 size-8 cursor-pointer hover:text-white transition-all duration-500 rounded-md flex items-center justify-center hover:bg-[#818CF8] bg-[#17161B] absolute top-1/2 -translate-y-1/2 right-[3px]">
                    <RiCouponFill />
                  </div>
                </div>
                <div className="pt-12 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-sm font-normal">{t('subtotal')}</h4>
                    <h4 className="text-sm font-normal">15.00 SOL</h4>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-medium">{t('total')}</h4>
                    <h4 className="font-medium">15.00 SOL</h4>
                  </div>
                </div>
                <Link to="/solanaPayment1">
                  <button className="bg-[#FF00C0] py-2.5 rounded-full w-full text-center font-medium mt-8">
                    {t('continue')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <FooterOther />
        </div>
      </div>
    </>
  );
};

export default Checkout;
