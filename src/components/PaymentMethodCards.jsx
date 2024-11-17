import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const PaymentMethodCards = () => {
  return (
   <>
    <div className="bg-[#121417] group border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-2">
      <span className=" rounded-lg overflow-hidden">
       <img src="../src/assets/Pay1.svg" alt="" className="shrink-0 filter" />
      </span>
      <p className="font-light text-sm">Play from your Exchange</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="sm:flex hidden items-center group-hover:space-x-0 -space-x-2">
            <span className="bg-[#121417]">
            <svg className=" w-6 h-6  bg-[#121417] rounded-md  dark:border-slate-900 dark:bg-slate-900 transition-all group-hover:ml-0.5" viewBox="0 0 126.61 126.61" xmlns="http://www.w3.org/2000/svg"><g fill="#f3ba2f"><path d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z"></path><path d="m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z"></path><path d="m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z"></path><path d="m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z"></path><path d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z"></path></g></svg>
            </span>
            <span className="bg-[#121417] ">
            <svg className="z-[4] min-w-6 w-6 h-6  bg-[#121417] rounded-md dark:border-slate-900 dark:bg-slate-900 transition-all group-hover:ml-0.5" width="100px" height="100px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#0052ff"></circle><path d="M516.3 361.83c60.28 0 108.1 37.18 126.26 92.47H764C742 336.09 644.47 256 517.27 256 372.82 256 260 365.65 260 512.49S370 768 517.27 768c124.35 0 223.82-80.09 245.84-199.28H642.55c-17.22 55.3-65 93.45-125.32 93.45-83.23 0-141.56-63.89-141.56-149.68.04-86.77 57.43-150.66 140.63-150.66z" fill="#fff"></path></svg>
            </span>
            <span className="bg-[#121417] ">
            <svg className="z-[2] min-w-6 w-6 h-6 rounded-md dark:border-slate-900 dark:bg-slate-900 transition-all group-hover:ml-0.5" width="100px" height="100px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#03ca9b"></circle><path d="M732.81 275c-1.67-.73-173.51-24.6-343.39 86.88C284 431.22 270 532.68 274.81 600.36c247.08-27.89 452.41-317.29 458-325.36zM291.57 675.53c21.24 38.14 181.77 124.6 323.87 5.35S745.62 344.66 732.81 275c-4.47 10.11-159.62 356.89-441.24 400.51" fill="#fff"></path></svg>
            </span>
            <span className="bg-[#121417] ">
            <svg className="z-[3] min-w-6 w-6 h-6 rounded-md dark:border-slate-900 dark:bg-slate-900 transition-all group-hover:ml-0.5" width="100px" height="100px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#5741d9"></circle><path d="M256.14 584.42c0-9.75.17-19.49-.06-29.24a292.47 292.47 0 0 1 4.07-56.2c5.4-31.14 15.21-60.54 31.25-87.73C318.3 365.58 356.23 332 404 309.49a239.35 239.35 0 0 1 66.67-20.61c12.09-1.84 24.23-3.34 36.54-3.23 52.3.39 101 13.31 145 42.16 43.11 28.29 75.47 65.72 94.91 113.79a276.71 276.71 0 0 1 17.72 70.4c3.29 26.68 3.45 53.47 3 80.32-.28 14.48-.22 29-.45 43.44-.11 6.29-.33 12.59-2 18.77-6.52 24-33.92 34.92-54 21.61-9-5.9-13.42-14.59-15-25a133.05 133.05 0 0 1-1.67-21.05V542.7c0-11.42-3.56-21.56-11.36-30-13.65-14.65-34.59-15.21-49.91-1.67-8.58 7.63-12.48 17.32-13.31 28.46-.33 4.18-.45 8.35-.45 12.53-.06 32.14.06 64.22-.17 96.36-.17 18.21-14 32.14-32.58 33.42a34.46 34.46 0 0 1-36.54-28.57 86.3 86.3 0 0 1-1.11-14.7c0-32.31.06-64.61 0-96.92a40.2 40.2 0 0 0-11.31-28.52c-15.32-16.1-38.38-15.6-53.25.95-7.3 8.08-10.47 17.49-10.47 28.24 0 31.92-.06 63.89 0 95.8 0 8.24-1 16.32-4.4 23.89a33.7 33.7 0 0 1-32.64 20.33c-13.65-.45-25.18-9-30.41-22.73a47 47 0 0 1-3-16.88q.08-46.37-.06-92.74c0-6.85-.28-13.76-2.34-20.39-4.68-15.21-14.82-24.9-30.47-27.46-15.93-2.62-27.74 4.9-36.59 17.71-4.23 6.13-5.63 13-5.63 20.33q0 44 .06 88c0 8.63.17 17.27-1.78 25.79-3.23 14.15-16.82 29.58-37.37 28.07-14.15-1.06-27.74-12.76-31.69-27.74a64.22 64.22 0 0 1-1.94-16.21c.17-18 .17-35.81.11-53.64z" fill="#fff"></path></svg>
            </span>
        </div>
        <MdKeyboardArrowRight size={25} />
      </div>
    </div>
    <div className="bg-[#121417] group border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-2">
      <span className=" rounded-lg  overflow-hidden">
       <img src="../src/assets/pay1.svg" alt="" className="shrink-0 filter" />
      </span>
      <p className="font-light text-sm">Pay With Wallet</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="sm:flex hidden items-center group-hover:space-x-0 -space-x-2">
            <span className="bg-[#121417]">
            <svg className=" w-6 h-6  bg-[#121417] rounded-md  dark:border-slate-900 dark:bg-slate-900 transition-all group-hover:ml-0.5" viewBox="0 0 126.61 126.61" xmlns="http://www.w3.org/2000/svg"><g fill="#f3ba2f"><path d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z"></path><path d="m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z"></path><path d="m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z"></path><path d="m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z"></path><path d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z"></path></g></svg>
            </span>
            <span className="bg-[#121417] ">
            <svg className="z-[4] min-w-6 w-6 h-6  bg-[#121417] rounded-md dark:border-slate-900 dark:bg-slate-900 transition-all group-hover:ml-0.5" width="100px" height="100px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#0052ff"></circle><path d="M516.3 361.83c60.28 0 108.1 37.18 126.26 92.47H764C742 336.09 644.47 256 517.27 256 372.82 256 260 365.65 260 512.49S370 768 517.27 768c124.35 0 223.82-80.09 245.84-199.28H642.55c-17.22 55.3-65 93.45-125.32 93.45-83.23 0-141.56-63.89-141.56-149.68.04-86.77 57.43-150.66 140.63-150.66z" fill="#fff"></path></svg>
            </span>
            <span className="bg-[#121417] ">
            <svg className="z-[2] min-w-6 w-6 h-6 rounded-md dark:border-slate-900 dark:bg-slate-900 transition-all group-hover:ml-0.5" width="100px" height="100px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#03ca9b"></circle><path d="M732.81 275c-1.67-.73-173.51-24.6-343.39 86.88C284 431.22 270 532.68 274.81 600.36c247.08-27.89 452.41-317.29 458-325.36zM291.57 675.53c21.24 38.14 181.77 124.6 323.87 5.35S745.62 344.66 732.81 275c-4.47 10.11-159.62 356.89-441.24 400.51" fill="#fff"></path></svg>
            </span>
            <span className="bg-[#121417] ">
            <svg className="z-[3] min-w-6 w-6 h-6 rounded-md dark:border-slate-900 dark:bg-slate-900 transition-all group-hover:ml-0.5" width="100px" height="100px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" fill="#5741d9"></circle><path d="M256.14 584.42c0-9.75.17-19.49-.06-29.24a292.47 292.47 0 0 1 4.07-56.2c5.4-31.14 15.21-60.54 31.25-87.73C318.3 365.58 356.23 332 404 309.49a239.35 239.35 0 0 1 66.67-20.61c12.09-1.84 24.23-3.34 36.54-3.23 52.3.39 101 13.31 145 42.16 43.11 28.29 75.47 65.72 94.91 113.79a276.71 276.71 0 0 1 17.72 70.4c3.29 26.68 3.45 53.47 3 80.32-.28 14.48-.22 29-.45 43.44-.11 6.29-.33 12.59-2 18.77-6.52 24-33.92 34.92-54 21.61-9-5.9-13.42-14.59-15-25a133.05 133.05 0 0 1-1.67-21.05V542.7c0-11.42-3.56-21.56-11.36-30-13.65-14.65-34.59-15.21-49.91-1.67-8.58 7.63-12.48 17.32-13.31 28.46-.33 4.18-.45 8.35-.45 12.53-.06 32.14.06 64.22-.17 96.36-.17 18.21-14 32.14-32.58 33.42a34.46 34.46 0 0 1-36.54-28.57 86.3 86.3 0 0 1-1.11-14.7c0-32.31.06-64.61 0-96.92a40.2 40.2 0 0 0-11.31-28.52c-15.32-16.1-38.38-15.6-53.25.95-7.3 8.08-10.47 17.49-10.47 28.24 0 31.92-.06 63.89 0 95.8 0 8.24-1 16.32-4.4 23.89a33.7 33.7 0 0 1-32.64 20.33c-13.65-.45-25.18-9-30.41-22.73a47 47 0 0 1-3-16.88q.08-46.37-.06-92.74c0-6.85-.28-13.76-2.34-20.39-4.68-15.21-14.82-24.9-30.47-27.46-15.93-2.62-27.74 4.9-36.59 17.71-4.23 6.13-5.63 13-5.63 20.33q0 44 .06 88c0 8.63.17 17.27-1.78 25.79-3.23 14.15-16.82 29.58-37.37 28.07-14.15-1.06-27.74-12.76-31.69-27.74a64.22 64.22 0 0 1-1.94-16.21c.17-18 .17-35.81.11-53.64z" fill="#fff"></path></svg>
            </span>
        </div>
        <MdKeyboardArrowRight size={25} />
      </div>
    </div>
    <div className="bg-[#121417] group border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-2">
      <span className=" rounded-lg overflow-hidden">
       <img src="../src/assets/pay4.svg" alt="" className="shrink-0 "  />
      </span>
      <p className="font-light text-sm">Pay With QR Code</p>
      </div>
      <div className="flex items-center gap-2">
       
        <MdKeyboardArrowRight size={25} />
      </div>
    </div>
    <div className="bg-[#121417] group border border-white/10 rounded-lg px-4 py-2.5 flex items-center justify-between cursor-pointer">
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
