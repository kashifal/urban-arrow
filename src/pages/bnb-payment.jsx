import React from "react";
import SolanaPaymentLeft from "../components/SolanaPaymentLeft";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import PaymentMethodCards from "../components/PaymentMethodCards";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import { useSelector } from "react-redux";
import EthQrCode from '../assets/ETHBNBWALLETQR.png';
const SolanaPayment1 = () => {
  const { t } = useTranslation(); // Initialize translation function
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 text-white bg-[#1B1F23] min-h-screen w-full">
        <SolanaPaymentLeft />
        <div className="md:col-span-7 px-4 py-16">
          <div className="max-w-[34rem] mx-auto">
            <div className="flex flex-wrap gap-5 items-center justify-between">
              <Link to="/solanaPayment1" className="flex items-center gap-1 cursor-pointer w-fit text-[#737A84] hover:text-white">
                <MdOutlineKeyboardArrowLeft />
                <p className="text-sm font-light">{t('change_gateway')}</p> {/* Translated text */}
              </Link>
              <button className="px-3 py-1 bg-[#35241E] text-[#E16727] text-xs font-medium rounded-md">
                {t('awaiting_payment')} {/* Translated text */}
              </button>
            </div>
            <div className="mt-10 border-t border-b border-white/10 py-5">
              <div className="flex flex-wrap gap-5 items-start justify-between">
                <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 384 381" fill="#EAB40B">
        <path d="m117.512 159.61 73.765-73.762 73.801 73.8L308 116.727 191.277 0 74.594 116.688zm-73.23-12.618 42.917 42.918-42.918 42.918L1.36 189.91zm73.23 73.23 73.765 73.762 73.801-73.796 42.945 42.898-116.746 116.746L74.59 263.148l-.063-.058zm263.687-30.292-42.918 42.922-42.926-42.918 42.922-42.926zm0 0"></path>
        <path d="M234.813 189.895h.019l-43.555-43.555-32.187 32.187h-.004l-3.695 3.7-7.688 7.687.059.063 43.515 43.515 43.555-43.554.02-.024zm0 0"></path>
      </svg>
                  <div className="">
                  <p className="font-light text-sm">BNB</p>
                  <p className="text-[#737A84] text-[13px] sm:text-xs">8b6a87-e2a7845566-82cc4b
                  </p>
                  </div>
                </div>
                <button className="px-1 py-[2px] text-[13px] sm:text-sm bg-[#454C56] text-[#777F7C]">
                    00:49:19
                </button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[#737A84] font-light text-[13px] sm:text-sm">{t('total_price')}</h4> {/* Translated text */}
                    <div className="flex items-center gap-1">
                    <h4 className="text-[#737A84] font-light text-sm">15.00</h4>
                    <h4 className="text-white font-light text-[13px] sm:text-sm">SOL</h4>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[#737A84] font-light text-sm">{t('exchange_rate')}</h4> {/* Translated text */}
                    <div className="flex items-center gap-1">
                    <h4 className="text-white font-light text-sm">$231.570000
                    </h4>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[#737A84] font-light text-[13px] sm:text-sm">{t('amount')}</h4> {/* Translated text */}
                    <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 384 381" fill="#EAB40B">
        <path d="m117.512 159.61 73.765-73.762 73.801 73.8L308 116.727 191.277 0 74.594 116.688zm-73.23-12.618 42.917 42.918-42.918 42.918L1.36 189.91zm73.23 73.23 73.765 73.762 73.801-73.796 42.945 42.898-116.746 116.746L74.59 263.148l-.063-.058zm263.687-30.292-42.918 42.922-42.926-42.918 42.922-42.926zm0 0"></path>
        <path d="M234.813 189.895h.019l-43.555-43.555-32.187 32.187h-.004l-3.695 3.7-7.688 7.687.059.063 43.515 43.515 43.555-43.554.02-.024zm0 0"></path>
      </svg>
                    <h4 className="text-white font-light text-[13px] sm:text-sm">15.099685000000</h4>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[#737A84] font-light text-[13px] sm:text-sm">{t('created')}</h4> {/* Translated text */}
                    <div className="flex items-center gap-1">
                    <h4 className="text-white font-light text-[13px] sm:text-sm">17:42, 17.11.2024 (GMT+5)</h4>
                    </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
                <PaymentMethodCards qrCode={EthQrCode} code="0x6CF6aA6753A903E3D4b9198e4cBA59260509AD21" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolanaPayment1;
