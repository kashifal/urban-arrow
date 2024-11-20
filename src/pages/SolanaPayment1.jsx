import React, { useState } from "react";
import SolanaPaymentLeft from "../components/SolanaPaymentLeft";
import { Link } from "react-router-dom";
import eth from '../assets/ethereum.png';
import bnb from '../assets/bnb.png';
import solana from '../assets/solana.png';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const SolanaPayment1 = () => {
  const { t } = useTranslation(); // Initialize translation function
  const [buttonhide, setbuttonhide] = useState(false);
  
  const setButton = () => {
    setbuttonhide(true);
  };

  const coins = [
    {
      id: 1,
      name: 'eth',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <g fill="none" fillRule="evenodd">
          <circle cx="16" cy="16" r="16" fill="#627EEA"></circle>
          <g fill="#FFF" fillRule="nonzero">
            <path fillOpacity="0.602" d="M16.498 4v8.87l7.497 3.35z"></path>
            <path d="M16.498 4 9 16.22l7.498-3.35z"></path>
            <path fillOpacity="0.602" d="M16.498 21.968v6.027L24 17.616z"></path>
            <path d="M16.498 27.995v-6.028L9 17.616z"></path>
            <path fillOpacity="0.2" d="m16.498 20.573 7.497-4.353-7.497-3.348z"></path>
            <path fillOpacity="0.602" d="m9 16.22 7.498 4.353v-7.701z"></path>
          </g>
        </g>
      </svg>`,
    },
    {
      id: 2,
      name: 'bnb',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 384 381" fill="#EAB40B">
        <path d="m117.512 159.61 73.765-73.762 73.801 73.8L308 116.727 191.277 0 74.594 116.688zm-73.23-12.618 42.917 42.918-42.918 42.918L1.36 189.91zm73.23 73.23 73.765 73.762 73.801-73.796 42.945 42.898-116.746 116.746L74.59 263.148l-.063-.058zm263.687-30.292-42.918 42.922-42.926-42.918 42.922-42.926zm0 0"></path>
        <path d="M234.813 189.895h.019l-43.555-43.555-32.187 32.187h-.004l-3.695 3.7-7.688 7.687.059.063 43.515 43.515 43.555-43.554.02-.024zm0 0"></path>
      </svg>`,
    },
    {
      id: 3,
      name: 'solana',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24">
        <g fill="#20F3A3">
          <path d="M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6M4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6"></path>
        </g>
      </svg>`,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 text-white bg-[#1B1F23] min-h-screen w-full">
        <SolanaPaymentLeft />
        <div className="md:col-span-7 py-16">
          <div className="max-w-[34rem] px-4 mx-auto">
            <p className="text-sm font-normal">{t('how_to_pay')}</p> {/* Translated text */}
            <h2 className="pt-5 font-medium">{t('cryptocurrencies')}</h2> {/* Translated text */}
            <p className="text-sm pt-1 font-light text-[#777F89]">{t('send_crypto')}</p> {/* Translated text */}
            <ul className="mt-6 space-y-3">
              {coins.map((item) => (
                <li key={item.id}>
                  <label onClick={setButton} className="block text-white relative">
                    <input
                      type="radio"
                      name="payment"
                      className="sr-only peer"
                    />
                    <div className="w-full py-2 cursor-pointer rounded-lg border border-white/10 peer-checked:border-[#FF00C0] duration-200">
                      <div className="pl-2 flex items-center gap-2">
                        <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                        <h1 className="text-sm font-light">{item.name}</h1>
                      </div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
            <Link
              to="/solanaPayment2"
              className={`mt-10 bg-[#FF00C0] ${buttonhide ? 'block' : 'hidden'} rounded-full py-2 text-center font-medium text-sm w-full hover:opacity-90`}
            >
              {t('update_invoice')} {/* Translated text */}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolanaPayment1;
