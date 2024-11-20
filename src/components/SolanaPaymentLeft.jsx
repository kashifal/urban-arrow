import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosRefresh } from "react-icons/io";
import { Link } from 'react-router-dom';
import bull from '../assets/bull.png';
import shopItem from '../assets/shopitem.avif';
import { useSelector } from "react-redux";

import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const SolanaPaymentLeft = () => {
  const { t } = useTranslation(); // Initialize translation function
  const cartItems = useSelector((state) => state.cart.items);


  return (
    <div className="md:col-span-5 px-4 text-white h-full flex py-14 bg-[#121417]">
      <div className="max-w-[350px] flex flex-col justify-between w-full mx-auto">
        <div className="">
          <Link to="/shop" className="flex cursor-pointer group items-center gap-3">
            <div className="bg-white/5 text-gray-600 group-hover:text-white backdrop-blur-3xl rounded-full size-8 flex items-center justify-center">
              <FaArrowLeftLong />
            </div>
            <p className="text-sm font-normal">{t('back_to_shop')}</p> {/* Translated text */}
          </Link>
          <div className="flex my-10 cursor-pointer group items-center gap-3">
            <img src={bull} alt="" className="filter w-8 rounded-lg" />
            <i><p className="text-sm font-bold">{t('bull_runner')}</p></i> {/* Translated text */}
          </div>
          {/* <h1 className="font-normal pt-6">{t('dogwiftools_license')}</h1>  */}
          {/* <h1 className="font-normal pt-1 text-lg pb-6">{t('price')}</h1>  */}

          <div className="mt- w-full">
            {
              cartItems.map((item) => (
                <div className="flex items-start justify-between mt-3">
                <div className="flex items-start gap-2">
                  <img src={shopItem} alt="" className="filter size-10 rounded-lg" />
                  <div className="">
                    <h1 className="font-light text-sm">{item.name}</h1> {/* Translated text */}
                    <h1 className="font-normal pt-[2px] text-[#777F89] text-xs">{t('quantity')}</h1> {/* Translated text */}
                  </div>
                </div>
                <h1 className="font-light text-sm">{item.price} SOL</h1> {/* Translated text */}
              </div>
              ))
            }
           
            <div className="flex items-start py-5 justify-between">
              <h1 className="font-light text-[#777F89] text-sm">{t('subtotal')}</h1> {/* Translated text */}
              <h1 className="font-medium text-sm">{cartItems.reduce((total, product) => total + product.price * product.quantity, 0)} SOL</h1> {/* Translated text */}
            </div>
            <div className="flex items-start border-t border-white/10 py-5 justify-between">
              <h1 className="font-medium text-sm">{t('total')}</h1> {/* Translated text */}
              <h1 className="font-medium text-sm">{cartItems.reduce((total, product) => total + product.price * product.quantity, 0)} SOL</h1> {/* Translated text */}
            </div>
          </div>
        </div>
        <div className="bg-[#1B1F23] cursor-pointer px-5 py-3 flex items-center justify-between gap-2 rounded-lg">
          <div className="flex items-center gap-1">
            <IoIosRefresh />
            <p className="text-sm">{t('invoice_taking')}</p> {/* Translated text */}
          </div>
          <span className="rotate-180 text-[#777F89]">
            <FaArrowLeftLong />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolanaPaymentLeft;
