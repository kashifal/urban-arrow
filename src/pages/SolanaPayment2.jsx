import React from "react";
import SolanaPaymentLeft from "../components/SolanaPaymentLeft";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import PaymentMethodCards from "../components/PaymentMethodCards";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const SolanaPayment1 = () => {
  const { t } = useTranslation(); // Initialize translation function

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
                  <svg
                    width="30"
                    height="30"
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
                  <div className="">
                  <p className="font-light text-sm">Solana</p>
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
                    <svg width="15" height="15" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="36" height="36" rx="4" fill="url(#paint0_linear_1221_31173)"/>
                      <path d="M10.7085 21.9173C10.8389 21.787 11.0181 21.7109 11.2082 21.7109H28.4451C28.7601 21.7109 28.9176 22.0911 28.6949 22.3137L25.2899 25.7188C25.1596 25.8491 24.9804 25.9251 24.7903 25.9251H7.55331C7.23833 25.9251 7.08084 25.545 7.3035 25.3223L10.7085 21.9173Z" fill="white"/>
                      <path d="M10.7085 9.20637C10.8443 9.07603 11.0235 9 11.2082 9H28.4451C28.7601 9 28.9176 9.38015 28.6949 9.60281L25.2899 13.0078C25.1596 13.1382 24.9804 13.2142 24.7903 13.2142H7.55331C7.23833 13.2142 7.08084 12.8341 7.3035 12.6114L10.7085 9.20637Z" fill="white"/>
                      <path d="M25.2899 15.5189C25.1596 15.3885 24.9804 15.3125 24.7903 15.3125H7.55331C7.23833 15.3125 7.08084 15.6926 7.3035 15.9153L10.7085 19.3203C10.8389 19.4507 11.0181 19.5267 11.2082 19.5267H28.4451C28.7601 19.5267 28.9176 19.1466 28.6949 18.9239L25.2899 15.5189Z" fill="white"/>
                      <defs>
                        <linearGradient id="paint0_linear_1221_31173" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#2ED1B7"/>
                          <stop offset="0.520833" stop-color="#708ED2"/>
                          <stop offset="1" stop-color="#B647F0"/>
                        </linearGradient>
                      </defs>
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
                <PaymentMethodCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolanaPayment1;
