import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SolanaWalletQR from '../assets/SolanaWalletQR.png'
const PaymentMethodCards = () => {
  const [open, setOpen] = useState(true);
  const [qr, setQr] = useState(0);


  const modalFunc = (value) => {
    setOpen(!open);
    setQr(value)
  }
  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-[#121417] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              {
                  qr === 0 && <div className="bg-[#121417] rounded-lg">
                  <div className="group flex cursor-pointer items-center justify-between  border border-white/10  px-4 py-2.5 text-white">
                    <div className="flex items-center gap-2">
                      <span className="overflow-hidden rounded-lg">
                        <img
                          src="../src/assets/pay4.svg"
                          alt=""
                          className="shrink-0"
                        />
                      </span>
                      <p className="text-sm font-light">Pay With QR Code</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <mdkeyboardarrowright size="{25}"></mdkeyboardarrowright>
                    </div>
                  </div>
                  <div className="grid px-6 py-6 lg:grid-cols-2 gap-5">
                  <div className=" ">  <img src={SolanaWalletQR} alt="" /></div>
                    <div className="text-[#777F89]">
                      <p className="text-sm">
                        Scan the QR Code with your preferred cryptocurrency app
                        to send the payment.
                      </p>
                      <p className="text-sm mt-6 leading-normal">
                        We only support crypto transactions through the{" "}
                        <span className="px-2 py-[1px] rounded text-white bg-[#262A30]">
                          SOL chain
                        </span>
                        .Transactions sent to other chains will not be detected
                        and will result in a loss of crypto.
                      </p>
                    </div>
                  </div>
                </div>}
                
                {/* ---------------------------- */}
                {/* ---------------------------- */}
                {/* ---------------------------- */}
                {/* ---------------------------- */}
                {
                  qr === 1 && <div className=" text-gray-200 ">
                  <div className=" flex flex-col  text-left w-full rounded-b-lg  p-6 gap-4 leading-5  text-sm text-slate-900 bg-transparent     ">
                    {/* Transaction Information Text */}
                    <div className="flex flex-col gap-3">
                      <div className=" text-[13px] text-slate-400 ">
                        We only support crypto transactions through the
                        <span className="p-1 rounded-[0.25rem] font-medium bg-slate-700 text-white">
                          SOL chain
                        </span>
                        .
                      </div>
                      <div className="sellix-wallet-qr-title text-[13px] font-normal text-slate-500 dark:text-slate-400">
                        Transactions sent to other chains will not be detected and will result
                        in a loss of crypto.
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className=" cursor-pointer flex min-w-full w-full gap-1">
                        <div className=" gray flex flex-col min-w-full w-full justify-center p-3 text-lg font-bold rounded-lg bg-slate-700">
                          <div className="  font-medium text-[13px] text-slate-400">Amount</div>
                          <div className="text-[14px]  font-medium text-white">
                            <span
                              className=" text-slate-400 w-full min-w-full "
                              style={{ overflowWrap: "anywhere" }}
                            >
                              15.00000000
                              <svg
                                className="inline-block mb-1"
                                width={20}
                                height={20}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ minWidth: 20 }}
                              >
                                <path
                                  d="M18 8.5H10C8.89543 8.5 8 9.39543 8 10.5V18.5C8 19.6046 8.89543 20.5 10 20.5H18C19.1046 20.5 20 19.6046 20 18.5V10.5C20 9.39543 19.1046 8.5 18 8.5Z"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16 8.5V6.5C16 5.96957 15.7893 5.46086 15.4142 5.08579C15.0391 4.71071 14.5304 4.5 14 4.5H6C5.46957 4.5 4.96086 4.71071 4.58579 5.08579C4.21071 5.46086 4 5.96957 4 6.5V14.5C4 15.0304 4.21071 15.5391 4.58579 15.9142C4.96086 16.2893 5.46957 16.5 6 16.5H8"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </span>
                      <span className=" cursor-pointer flex min-w-full w-full gap-1">
                        <div className=" gray flex flex-col min-w-full w-full justify-center p-3 text-lg font-bold rounded-lg  dark:bg-slate-700">
                          <div className=" font-medium text-[13px] text-slate-400">
                            Solana Address
                          </div>
                          <div className="text-[14px]  font-medium text-white">
                            <span
                              className="  text-slate-400 w-full min-w-full"
                              style={{ overflowWrap: "anywhere" }}
                            >
                              Hmfe4yRX4ZrH3CZvV5MhUTDzQGhp5KLsh7N5Y3Xm5UNQ
                              <svg
                                className="inline-block mb-1"
                                width={20}
                                height={20}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ minWidth: 20 }}
                              >
                                <path
                                  d="M18 8.5H10C8.89543 8.5 8 9.39543 8 10.5V18.5C8 19.6046 8.89543 20.5 10 20.5H18C19.1046 20.5 20 19.6046 20 18.5V10.5C20 9.39543 19.1046 8.5 18 8.5Z"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16 8.5V6.5C16 5.96957 15.7893 5.46086 15.4142 5.08579C15.0391 4.71071 14.5304 4.5 14 4.5H6C5.46957 4.5 4.96086 4.71071 4.58579 5.08579C4.21071 5.46086 4 5.96957 4 6.5V14.5C4 15.0304 4.21071 15.5391 4.58579 15.9142C4.96086 16.2893 5.46957 16.5 6 16.5H8"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                }
                

              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div onClick={() => modalFunc(0)} className="bg-[#121417] cursor-pointer group border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <span className=" rounded-lg overflow-hidden">
            <img src="../src/assets/pay4.svg" alt="" className="shrink-0 " />
          </span>
          <p className="font-light text-sm">Pay With QR Code</p>
        </div>
        <div className="flex items-center gap-2">
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
      <div onClick={() => modalFunc(1)} className="bg-[#121417] cursor-pointer group border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <span className=" rounded-lg overflow-hidden">
            <img src="../src/assets/pay4.svg" alt="" className="shrink-0 " />
          </span>
          <p className="font-light text-sm">Copy Patyment Details</p>
        </div>
        <div className="flex items-center gap-2">
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
    </>
  );
};

export default PaymentMethodCards;
