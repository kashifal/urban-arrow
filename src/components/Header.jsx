import React, { useState } from "react";

const Header = ({
  title,
  subtitle,
  bgHeight = "100vh",
  textHeight = "100vh",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" p-[1rem] absolute sm:p-[1.75rem] z-40 top-0 left-0   w-screen min-h-[4.875rem] flex items-center justify-between">
      {isMenuOpen && (
        <div className="bg-[#FAFAF0]  py-6 px-6 z-[99999999] h-screen fixed top-0 left-0 w-full">
          <div className="flex h-fit flex-wrap items-center justify-between gap-2">
            <div
              onClick={() => setIsMenuOpen(false)}
              className=" sm:h-[45px]  shadow-lg cursor-pointer z-50 w-[38px] h-[38px] sm:w-[45px] bg-white rounded-full flex items-center justify-center left-0 top-20"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="18.5"
                className=" w-[145px] h-[13px] sm:h-auto sm:w-auto"
                viewBox="0 0 220 21"
              >
                <path
                  fill="#1a1919"
                  fillRule="evenodd"
                  d="M147.518 13.133a4.5 4.5 0 0 0-.759-1.024 4.2 4.2 0 0 0-1.149-.829 4.86 4.86 0 0 0 2.245-1.924 5.6 5.6 0 0 0 .815-2.876 6.1 6.1 0 0 0-.45-2.469 5.4 5.4 0 0 0-1.375-1.967 5.7 5.7 0 0 0-1.952-1.177 6.1 6.1 0 0 0-2.118-.421H130.86v19.559h3.593v-7.489h5.486c.241 0 .52.013.828.042a6 6 0 0 1 .954.168 4.7 4.7 0 0 1 .955.364 3.2 3.2 0 0 1 .856.66 3.4 3.4 0 0 1 .792 1.616l.7 4.61h3.794l-.818-5.4a5 5 0 0 0-.482-1.443m-3.4-4.729a2.73 2.73 0 0 1-2 .743h-7.675V3.813h7.675a2.73 2.73 0 0 1 2 .744 2.6 2.6 0 0 1 .756 1.923 2.59 2.59 0 0 1-.751 1.92ZM168.775 13.133a4.5 4.5 0 0 0-.758-1.024 4.2 4.2 0 0 0-1.15-.829 4.87 4.87 0 0 0 2.246-1.924 5.6 5.6 0 0 0 .815-2.876 6.1 6.1 0 0 0-.451-2.469 5.44 5.44 0 0 0-1.377-1.967 5.8 5.8 0 0 0-1.949-1.177 6.1 6.1 0 0 0-2.12-.421h-11.912v19.559h3.59v-7.489h5.491c.24 0 .52.013.829.042a6 6 0 0 1 .954.168 4.7 4.7 0 0 1 .954.364 3.3 3.3 0 0 1 .856.66 3.4 3.4 0 0 1 .792 1.616l.7 4.61h3.794l-.819-5.4a5 5 0 0 0-.485-1.443M165.38 8.4a2.73 2.73 0 0 1-2 .743h-7.676v-5.33h7.676a2.73 2.73 0 0 1 2 .744 2.59 2.59 0 0 1 .756 1.923 2.58 2.58 0 0 1-.756 1.92M38.064 13.112a4.5 4.5 0 0 0-.758-1.024 4.2 4.2 0 0 0-1.15-.829A4.86 4.86 0 0 0 38.4 9.335a5.6 5.6 0 0 0 .815-2.876 6.1 6.1 0 0 0-.45-2.469 5.44 5.44 0 0 0-1.375-1.966A5.75 5.75 0 0 0 35.439.846a6.1 6.1 0 0 0-2.118-.421H21.407v19.528H25V12.5h5.486c.242 0 .521.013.829.042a6 6 0 0 1 .955.168 4.8 4.8 0 0 1 .954.364 3.3 3.3 0 0 1 .856.66 3.4 3.4 0 0 1 .792 1.616l.7 4.61h3.788l-.818-5.4a5 5 0 0 0-.478-1.448m-3.4-4.729a2.73 2.73 0 0 1-1.994.743H25V3.792h7.676a2.72 2.72 0 0 1 1.994.745 2.58 2.58 0 0 1 .756 1.922 2.58 2.58 0 0 1-.758 1.924ZM59.562 12.146a4.7 4.7 0 0 0-.913-1.135 5.2 5.2 0 0 0-1.348-.887 5.5 5.5 0 0 0 .744-.476 5.3 5.3 0 0 0 .928-.886 4.8 4.8 0 0 0 .784-1.36 5.2 5.2 0 0 0 .324-1.909 5.6 5.6 0 0 0-.308-1.783 4.9 4.9 0 0 0-.955-1.656 4.85 4.85 0 0 0-1.685-1.22 9 9 0 0 0-3.308-.418H43.091l.027 19.591h11.488a6.2 6.2 0 0 0 2.6-.493 5.3 5.3 0 0 0 1.77-1.247 4.7 4.7 0 0 0 1-1.685 5.7 5.7 0 0 0 .309-1.825 5 5 0 0 0-.182-1.333 5.7 5.7 0 0 0-.541-1.278M46.78 3.725h6.9a3.4 3.4 0 0 1 1.235.2 2.2 2.2 0 0 1 .812.518 2.17 2.17 0 0 1 .617 1.531 2.22 2.22 0 0 1-.729 1.77 3.63 3.63 0 0 1-2.309.7H46.78Zm8.991 12.268a3.5 3.5 0 0 1-2.183.645H46.78v-4.83h6.535a4.1 4.1 0 0 1 1.5.241 3 3 0 0 1 .982.6 2.07 2.07 0 0 1 .532.83 2.8 2.8 0 0 1 .156.883 2.1 2.1 0 0 1-.714 1.631M97.264 13.627 86.704.4h-3.069v19.558h3.68V7.081l10.558 12.913h3.057V.353h-3.666zM14.149 11.247a6.6 6.6 0 0 1-.586 3.262l-.051.1c-.86 1.457-3.121 1.977-4.588 1.982s-3.724-.525-4.588-1.982l-.051-.1a6.6 6.6 0 0 1-.585-3.262V.426H0V11.77a9.44 9.44 0 0 0 1.174 5.1c1.474 1.978 4.042 3.38 7.744 3.387h.012c3.7-.007 6.27-1.409 7.744-3.387a9.43 9.43 0 0 0 1.174-5.1V.426h-3.7ZM69.346.332l-8.017 19.622h3.953l1.687-4.138h8.864l1.69 4.138h3.893L73.4.332Zm-1.028 12.2 3.094-7.54 3.078 7.54ZM116.777.387l-8.018 19.622h3.953l1.688-4.139h8.864l1.689 4.139h3.894L120.829.387Zm-1.028 12.2 3.094-7.541 3.077 7.541ZM182.674 0a10.184 10.184 0 1 0 10.184 10.184A10.184 10.184 0 0 0 182.674 0m0 16.831a6.647 6.647 0 1 1 6.647-6.647 6.647 6.647 0 0 1-6.647 6.647M215.863.338l-3.664 12.672L208.368.338h-3.862l-3.831 12.672L197.01.338h-3.847l5.535 19.642h3.602l4.137-13.096 4.138 13.096h3.601L219.712.338z"
                ></path>
              </svg>
            </div>
            <div className="button-font font-medium sm:mx-0 mx-auto overflow-hidden shadow-lg cursor-pointer z-50  bg-white rounded-full flex items-center justify-center">
              <div className="flex items-center px-4 py-1 hover:bg-[#C8C8B9] hover:bg-opacity-30  gap-3">
                <img
                  src="https://urbanarrow.com/app/uploads/flags/flag-na.svg"
                  alt=""
                />
                <div className="text-sm">
                  <h1 className="button-font">English (US)</h1>
                  <p className="text-[#C8C8B9] button-font">North America</p>
                </div>
              </div>
              <div className="px-4 button-font py-3.5 border-l text-sm  hover:bg-[#C8C8B9] hover:bg-opacity-30  h-full border-[#C8C8B9]">
                USD US $
              </div>
            </div>
          </div>
          <div className="flex  flex-col mx-auto items-center justify-center h-full w-full sm:-mt-20">
            <div className=" grid grid-cols-2  md:whitespace-nowrap md:grid-cols-4 xl:grid-cols-5 items-start justify-between xl:max-w-[90%] w-full mx-auto max-w-[80rem]  gap-20">
              <div className="flex justify-between items-start gap-12 flex-wrap">
                <div className="flex flex-col gap-1">
                  <a href="#" className="text-[25px] block hover:underline">
                    Configurator
                  </a>
                  <a href="#" className="text-[25px] block hover:underline">
                    Find your dealer
                  </a>
                  <a href="#" className="text-[25px] block hover:underline">
                    Configurator
                  </a>
                </div>
              </div>

              <div className="">
                <h4 className="text-[#9A9A94] text-2xl">Products</h4>
                <div className="flex flex-col mt-4 gap-5">
                  <a href="#" className="block button-font hover:underline">
                    Family
                  </a>
                  <a href="#" className="block button-font hover:underline">
                    Accessories
                  </a>
                </div>
              </div>
              <div className="">
                <h4 className="text-[#9A9A94] text-2xl">About us</h4>
                <div className="flex flex-col mt-4 gap-5">
                  <a href="#" className="block button-font hover:underline">
                    About us
                  </a>
                  <a href="#" className="block button-font hover:underline">
                    Community
                  </a>
                  <a href="#" className="block button-font hover:underline">
                    Careers
                  </a>
                </div>
              </div>
              <div className="">
                <h4 className="text-[#9A9A94] text-2xl">Support</h4>
                <div className="flex flex-col mt-4 gap-5">
                  <a
                    href="#"
                    className="flex items-center button-font gap-[1px] hover:underline"
                  >
                    Service Center
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 7L7 17M8 7h9v9"
                      />
                    </svg>
                  </a>
                  <a href="#" className="block button-font hover:underline">
                    Reviews
                  </a>
                  <a href="#" className="block button-font hover:underline">
                    Documents
                  </a>
                  <a href="#" className="block button-font hover:underline">
                    Contact
                  </a>
                </div>
              </div>
              <div className="">
                <h4 className="text-[#9A9A94] text-2xl">Dealers</h4>
                <div className="flex flex-col mt-4 gap-5">
                  <a href="#" className="block button-font hover:underline">
                    Become a dealer
                  </a>
                  <a
                    href="#"
                    className="flex button-font items-center gap-[1px] hover:underline"
                  >
                    Dealer Portal
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 7L7 17M8 7h9v9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        onClick={() => setIsMenuOpen(true)}
        className=" sm:h-[45px]  shadow-lg cursor-pointer z-50 w-[38px] h-[38px] sm:w-[45px] bg-white rounded-full flex items-center justify-center left-0 top-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="220"
        height="18.5"
        className="absolute w-[145px] h-[13px] sm:h-auto sm:w-auto   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 220 21"
      >
        <path
          fill="#1a1919"
          fillRule="evenodd"
          d="M147.518 13.133a4.5 4.5 0 0 0-.759-1.024 4.2 4.2 0 0 0-1.149-.829 4.86 4.86 0 0 0 2.245-1.924 5.6 5.6 0 0 0 .815-2.876 6.1 6.1 0 0 0-.45-2.469 5.4 5.4 0 0 0-1.375-1.967 5.7 5.7 0 0 0-1.952-1.177 6.1 6.1 0 0 0-2.118-.421H130.86v19.559h3.593v-7.489h5.486c.241 0 .52.013.828.042a6 6 0 0 1 .954.168 4.7 4.7 0 0 1 .955.364 3.2 3.2 0 0 1 .856.66 3.4 3.4 0 0 1 .792 1.616l.7 4.61h3.794l-.818-5.4a5 5 0 0 0-.482-1.443m-3.4-4.729a2.73 2.73 0 0 1-2 .743h-7.675V3.813h7.675a2.73 2.73 0 0 1 2 .744 2.6 2.6 0 0 1 .756 1.923 2.59 2.59 0 0 1-.751 1.92ZM168.775 13.133a4.5 4.5 0 0 0-.758-1.024 4.2 4.2 0 0 0-1.15-.829 4.87 4.87 0 0 0 2.246-1.924 5.6 5.6 0 0 0 .815-2.876 6.1 6.1 0 0 0-.451-2.469 5.44 5.44 0 0 0-1.377-1.967 5.8 5.8 0 0 0-1.949-1.177 6.1 6.1 0 0 0-2.12-.421h-11.912v19.559h3.59v-7.489h5.491c.24 0 .52.013.829.042a6 6 0 0 1 .954.168 4.7 4.7 0 0 1 .954.364 3.3 3.3 0 0 1 .856.66 3.4 3.4 0 0 1 .792 1.616l.7 4.61h3.794l-.819-5.4a5 5 0 0 0-.485-1.443M165.38 8.4a2.73 2.73 0 0 1-2 .743h-7.676v-5.33h7.676a2.73 2.73 0 0 1 2 .744 2.59 2.59 0 0 1 .756 1.923 2.58 2.58 0 0 1-.756 1.92M38.064 13.112a4.5 4.5 0 0 0-.758-1.024 4.2 4.2 0 0 0-1.15-.829A4.86 4.86 0 0 0 38.4 9.335a5.6 5.6 0 0 0 .815-2.876 6.1 6.1 0 0 0-.45-2.469 5.44 5.44 0 0 0-1.375-1.966A5.75 5.75 0 0 0 35.439.846a6.1 6.1 0 0 0-2.118-.421H21.407v19.528H25V12.5h5.486c.242 0 .521.013.829.042a6 6 0 0 1 .955.168 4.8 4.8 0 0 1 .954.364 3.3 3.3 0 0 1 .856.66 3.4 3.4 0 0 1 .792 1.616l.7 4.61h3.788l-.818-5.4a5 5 0 0 0-.478-1.448m-3.4-4.729a2.73 2.73 0 0 1-1.994.743H25V3.792h7.676a2.72 2.72 0 0 1 1.994.745 2.58 2.58 0 0 1 .756 1.922 2.58 2.58 0 0 1-.758 1.924ZM59.562 12.146a4.7 4.7 0 0 0-.913-1.135 5.2 5.2 0 0 0-1.348-.887 5.5 5.5 0 0 0 .744-.476 5.3 5.3 0 0 0 .928-.886 4.8 4.8 0 0 0 .784-1.36 5.2 5.2 0 0 0 .324-1.909 5.6 5.6 0 0 0-.308-1.783 4.9 4.9 0 0 0-.955-1.656 4.85 4.85 0 0 0-1.685-1.22 9 9 0 0 0-3.308-.418H43.091l.027 19.591h11.488a6.2 6.2 0 0 0 2.6-.493 5.3 5.3 0 0 0 1.77-1.247 4.7 4.7 0 0 0 1-1.685 5.7 5.7 0 0 0 .309-1.825 5 5 0 0 0-.182-1.333 5.7 5.7 0 0 0-.541-1.278M46.78 3.725h6.9a3.4 3.4 0 0 1 1.235.2 2.2 2.2 0 0 1 .812.518 2.17 2.17 0 0 1 .617 1.531 2.22 2.22 0 0 1-.729 1.77 3.63 3.63 0 0 1-2.309.7H46.78Zm8.991 12.268a3.5 3.5 0 0 1-2.183.645H46.78v-4.83h6.535a4.1 4.1 0 0 1 1.5.241 3 3 0 0 1 .982.6 2.07 2.07 0 0 1 .532.83 2.8 2.8 0 0 1 .156.883 2.1 2.1 0 0 1-.714 1.631M97.264 13.627 86.704.4h-3.069v19.558h3.68V7.081l10.558 12.913h3.057V.353h-3.666zM14.149 11.247a6.6 6.6 0 0 1-.586 3.262l-.051.1c-.86 1.457-3.121 1.977-4.588 1.982s-3.724-.525-4.588-1.982l-.051-.1a6.6 6.6 0 0 1-.585-3.262V.426H0V11.77a9.44 9.44 0 0 0 1.174 5.1c1.474 1.978 4.042 3.38 7.744 3.387h.012c3.7-.007 6.27-1.409 7.744-3.387a9.43 9.43 0 0 0 1.174-5.1V.426h-3.7ZM69.346.332l-8.017 19.622h3.953l1.687-4.138h8.864l1.69 4.138h3.893L73.4.332Zm-1.028 12.2 3.094-7.54 3.078 7.54ZM116.777.387l-8.018 19.622h3.953l1.688-4.139h8.864l1.689 4.139h3.894L120.829.387Zm-1.028 12.2 3.094-7.541 3.077 7.541ZM182.674 0a10.184 10.184 0 1 0 10.184 10.184A10.184 10.184 0 0 0 182.674 0m0 16.831a6.647 6.647 0 1 1 6.647-6.647 6.647 6.647 0 0 1-6.647 6.647M215.863.338l-3.664 12.672L208.368.338h-3.862l-3.831 12.672L197.01.338h-3.847l5.535 19.642h3.602l4.137-13.096 4.138 13.096h3.601L219.712.338z"
        ></path>
      </svg>
      <p></p>
    </div>
  );
};

export default Header;
