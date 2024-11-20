import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SolanaWalletQR from '../assets/SolanaWalletQR.png';
import pay4 from '../assets/pay4.svg';

const PaymentMethodCards = () => {
  const { t } = useTranslation();  // Use the translation hook
  const [open, setOpen] = useState(true);
  const [qr, setQr] = useState(0);

  const modalFunc = (value) => {
    setOpen(!open);
    setQr(value);
  };

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div className="bg-[#121417] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {qr === 0 && (
                  <div className="bg-[#121417] rounded-lg">
                    <div className="group flex cursor-pointer items-center justify-between border border-white/10 px-4 py-2.5 text-white">
                      <div className="flex items-center gap-2">
                        <span className="overflow-hidden rounded-lg">
                          <img src={pay4} alt="" className="shrink-0" />
                        </span>
                        <p className="text-sm font-light">{t('payWithQR')}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdKeyboardArrowRight size={25} />
                      </div>
                    </div>
                    <div className="grid px-6 py-6 lg:grid-cols-2 gap-5">
                      <div className="">
                        <img src={SolanaWalletQR} className="filter" alt="" />
                      </div>
                      <div className="text-[#777F89]">
                        <p className="text-sm">{t('scanQRCode')}</p>
                        <p className="text-sm mt-6 leading-normal">
                          {t('solanaSupport')}{' '}
                          <span className="px-2 py-[1px] rounded text-white bg-[#262A30]">
                            SOL chain
                          </span>
                          . {t('otherChainsWarning')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {qr === 1 && (
                  <div className="text-gray-200">
                    <div className="flex flex-col text-left w-full rounded-b-lg p-6 gap-4 leading-5 text-sm text-slate-900 bg-transparent">
                      <div className="flex flex-col gap-3">
                        <div className="text-[13px] text-slate-400">
                          {t('solanaSupport')}{' '}
                          <span className="p-1 rounded-[0.25rem] font-medium bg-slate-700 text-white">
                            SOL chain
                          </span>
                        </div>
                        <div className="sellix-wallet-qr-title text-[13px] font-normal text-slate-500 dark:text-slate-400">
                          {t('otherChainsWarning')}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="cursor-pointer flex min-w-full w-full gap-1">
                          <div className="gray flex flex-col min-w-full w-full justify-center p-3 text-lg font-bold rounded-lg bg-slate-700">
                            <div className="font-medium text-[13px] text-slate-400">{t('amount')}</div>
                            <div className="text-[14px] font-medium text-white">
                              <span className="text-slate-400 w-full min-w-full">
                                15.00000000
                              </span>
                            </div>
                          </div>
                        </span>
                        <span className="cursor-pointer flex min-w-full w-full gap-1">
                          <div className="gray flex flex-col min-w-full w-full justify-center p-3 text-lg font-bold rounded-lg dark:bg-slate-700">
                            <div className="font-medium text-[13px] text-slate-400">
                              {t('solanaAddress')}
                            </div>
                            <div className="text-[14px] font-medium text-white">
                              <span className="text-slate-400 w-full min-w-full">
                                Hmfe4yRX4ZrH3CZvV5MhUTDzQGhp5KLsh7N5Y3Xm5UNQ
                              </span>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div
        onClick={() => modalFunc(0)}
        className="bg-[#121417] cursor-pointer group border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="rounded-lg overflow-hidden">
            <img src={pay4} alt="" className="shrink-0" />
          </span>
          <p className="font-light text-sm">{t('payWithQR')}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
      <div
        onClick={() => modalFunc(1)}
        className="bg-[#121417] cursor-pointer group border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="rounded-lg overflow-hidden">
            <img src={pay4} alt="" className="shrink-0" />
          </span>
          <p className="font-light text-sm">{t('copyPaymentDetails')}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
    </>
  );
};

export default PaymentMethodCards;
