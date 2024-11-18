import React from 'react'
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const FooterOther = () => {
  return (
   <>
    <div className="sm:grid grid-cols-12 flex flex-col gap-8 pb-10 min-h-[50vh] text-white bg-[rgb(14,14,14)] px-[30px] pt-[30px]  rounded-lg mt-[50px]">
              <div className="col-span-8 h-full  flex flex-col justify-between text-white xs:col-span-12 md:col-span-8">
                <div className="">
                <div className="flex">
                  <img src="../src/assets/abc.png" className="h-8 filter w-auto brightness-[-100]" alt="" />
                  
                </div>
                <p className=" text-[14px] font-normal mt-[10px]">
                  Copyright 2024, DogWifTools All Rights Reserved.
                </p>
                </div>
                <div className=" flex sm:mt-0 mt-10 gap-3 ml-[10px]">
                 <span className="text-white/80 hover:text-white cursor-pointer">
                 <FaDiscord size={20} />
                 </span>
                 <span className="text-white/80 hover:text-white cursor-pointer">
                 <FaTwitter size={20} />
                 </span>
                </div>
              </div>
              <div className="col-span-3 gap-8 md:flex-row flex-col flex items-start justify-between">
              <div className=" text-[14px] xs:col-span-12 md:col-span-2">
                <p className="text-[#494848]">Shop</p>
                <a href="#" className="block mt-[10px]">Products</a>
                <a href="#" className="block mt-[10px]">Collections</a>
                <a href="#" className="block mt-[10px]">Reviews</a>
              </div>
              <div className=" text-[14px] xs:col-span-12 md:col-span-2">
                <p className="text-[#494848]">About</p>
                <a href="#" className="block mt-[10px]">Contact</a>
                <a href="#" className="block mt-[10px]">Terms</a>
              </div>
              </div>
            </div>
   </>
  )
}

export default FooterOther