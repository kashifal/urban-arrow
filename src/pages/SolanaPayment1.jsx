import React, { useState } from "react";
import SolanaPaymentLeft from "../components/SolanaPaymentLeft";
import { Link } from "react-router-dom";

const SolanaPayment1 = () => {
  const [buttonhide, setbuttonhide] = useState(false)
  const setButton = () => {
    setbuttonhide(true)
    }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 text-white bg-[#1B1F23] min-h-screen w-full">
        <SolanaPaymentLeft />
        <div className="md:col-span-7 py-16">
          <div className="max-w-[34rem] px-4 mx-auto ">
            <p className="text-sm font-normal">How would you like to Pay</p>
            <h2 className="pt-5 font-medium">Cryptocurrencies</h2>
            <p className="text-sm pt-1 font-light text-[#777F89]">
              Send a cryptocurrency transaction from your wallet
            </p>
              <ul className="mt-6 space-y-3">
                <li>
                  <label onClick={setButton} className="block text-white relative">
                    <input
                      type="radio"
                      name="payment"
                      className="sr-only peer"
                    />
                    <div className="w-full py-2 cursor-pointer rounded-lg border border-white/10   peer-checked:border-[#FF00C0] duration-200">
                      <div className="pl-2 flex items-center gap-2">
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
                        <h1 className="text-sm font-light">Solana</h1>
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
              <Link to="/solanaPayment2" className={`mt-10 bg-[#FF00C0] ${buttonhide ? 'block' : 'hidden'} rounded-full py-2 text-center font-medium text-sm w-full hover:opacity-90`}>Update Invoice</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolanaPayment1;