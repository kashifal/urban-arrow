import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosRefresh } from "react-icons/io";
import { Link } from 'react-router-dom';


const SolanaPaymentLeft = () => {
  return (
        <div className="md:col-span-5 px-4 text-white h-full flex py-14 bg-[#121417]">
            <div className="max-w-[350px] flex flex-col justify-between w-full mx-auto">
                <div className="">
                <Link to="/product" className="flex cursor-pointer group items-center gap-3">
                    <div className="bg-white/5 text-gray-600 group-hover:text-white backdrop-blur-3xl rounded-full size-8 flex items-center justify-center">
                    <FaArrowLeftLong />
                    </div>
                    <p className="text-sm font-normal">Back to Shop</p>
                </Link>
                <div className="flex mt-10 cursor-pointer group items-center gap-3">
                    <img src="../src/assets/bull.png" alt="" className="filter w-8 rounded-lg" />
                    <i><p className="text-sm font-bold">Bull Runner</p></i>
                </div>
                <h1 className="font-normal pt-6">DogWifTools License</h1>
                <h1 className="font-normal pt-1 text-lg pb-6">15.00
                SOL</h1>

                <div className="mt- w-full">
                    <div className="flex items-start justify-between">
                        <div className="flex items-start gap-2">
                            <img src="../src/assets/shopitem.avif" alt="" className="filter size-10 rounded-lg" />
                            <div className="">
                <h1 className="font-light text-sm">DogWifTools License
                </h1>
                <h1 className="font-normal pt-[2px] text-[#777F89] text-xs">Quantity 1
                </h1>

                            </div>
                        </div>
                        <h1 className="font-light text-sm">15.00
                        SOL
                        </h1>
                    </div>
                    <div className="flex items-start py-5 justify-between">
                    <h1 className="font-light text-[#777F89] text-sm">Subtotal
                    </h1>
                        <h1 className="font-medium text-sm">15.00
                        SOL
                        </h1>
                    </div>
                    <div className="flex items-start border-t border-white/10 py-5 justify-between">
                    <h1 className="font-medium text-sm">Total
                    </h1>
                        <h1 className="font-medium text-sm">15.00
                        SOL
                        </h1>
                    </div>
                </div>
                </div>
                <div className="bg-[#1B1F23] cursor-pointer px-5 py-3 flex items-center justify-between gap-2 rounded-lg">
                    <div className="flex items-center gap-1">
                    <IoIosRefresh />
                        <p className="text-sm">Invoice Taking</p>
                    </div>
                    <span className="rotate-180 text-[#777F89]">
                    <FaArrowLeftLong />
                    </span>    
                </div>
            </div>
        </div>
  )
}

export default SolanaPaymentLeft