import React from "react";
import SolanaPaymentLeft from "../components/SolanaPaymentLeft";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import PaymentMethodCards from "../components/PaymentMethodCards";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { useSelector } from "react-redux";
import solanaQrCode from "../assets/SolanaWalletQR.png";
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
              <Link
                to="/solanaPayment1"
                className="flex items-center gap-1 cursor-pointer w-fit text-[#737A84] hover:text-white"
              >
                <MdOutlineKeyboardArrowLeft />
                <p className="text-sm font-light">{t("change_gateway")}</p>{" "}
                {/* Translated text */}
              </Link>
              <button className="px-3 py-1 bg-[#35241E] text-[#E16727] text-xs font-medium rounded-md">
                {t("awaiting_payment")} {/* Translated text */}
              </button>
            </div>
            <div className="mt-10 border-t border-b border-white/10 py-5">
              <div className="flex flex-wrap gap-5 items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g fill="#20F3A3">
                      <path d="M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6M4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6"></path>
                    </g>
                  </svg>
                  <div className="">
                    <p className="font-light text-sm">Solana</p>
                    <p className="text-[#737A84] text-[13px] sm:text-xs">
                      8b6a87-e2a7845566-82cc4b
                    </p>
                  </div>
                </div>
                <button className="px-1 py-[2px] text-[13px] sm:text-sm bg-[#454C56] text-[#777F7C]">
                  00:49:19
                </button>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-[#737A84] font-light text-[13px] sm:text-sm">
                    {t("total_price")}
                  </h4>{" "}
                  {/* Translated text */}
                  <div className="flex items-center gap-1">
                    <h4 className="text-[#737A84] font-light text-sm">15.00</h4>
                    <h4 className="text-white font-light text-[13px] sm:text-sm">
                      SOL
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-[#737A84] font-light text-sm">
                    {t("exchange_rate")}
                  </h4>{" "}
                  {/* Translated text */}
                  <div className="flex items-center gap-1">
                    <h4 className="text-white font-light text-sm">
                      $231.570000
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-[#737A84] font-light text-[13px] sm:text-sm">
                    {t("amount")}
                  </h4>{" "}
                  {/* Translated text */}
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g fill="#20F3A3">
                        <path d="M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6M4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6"></path>
                      </g>
                    </svg>
                    <h4 className="text-white font-light text-[13px] sm:text-sm">
                      15.099685000000
                    </h4>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-[#737A84] font-light text-[13px] sm:text-sm">
                    {t("created")}
                  </h4>{" "}
                  {/* Translated text */}
                  <div className="flex items-center gap-1">
                    <h4 className="text-white font-light text-[13px] sm:text-sm">
                      17:42, 17.11.2024 (GMT+5)
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <PaymentMethodCards
                qrCode={solanaQrCode}
                code="CwWLj1W57hMo14RHkZz23GjfVbJjpjutqVte1kRe1v3i"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolanaPayment1;
