import React, { useState } from 'react'
import BottomCircle from '../assets/bottomCircle.png'
import Mail from '../assets/newlesster.png'
import { BsSendFill } from "react-icons/bs";
import bg from '../assets/newlettser bg.jpeg'

const Newlesster = () => {
    const [email, setemail] = useState('')
  return (
    <div className="pt-28 min-h-screen overflow-hidden relative w-full">
          
        <div className="max-w-xl z-[4] px-4 relative flex flex-col justify-center mx-auto">
        <div className=" absolute left-1/3 ml-3 top-[15%] w-full">
            <img src={BottomCircle} className='w-[30%]' alt="" />
                </div>
            <div className="relative mx-auto text-center w-full flex flex-col items-center">
                <img src={Mail} alt="" className="w-16" />
                <h1 className="text-[#227179]  pt-10 text-4xl sm:text-4xl font-medium  tracking-wider mt-6">Subscribe to our newsletter</h1>
                <p className="text-[#878787] py-3">Get updates for new classes and new products</p>
                <div className="relative mt-8 w-full text-[#5E5E5E] ">
                    <div className="absolute top-1/2 -translate-y-1/2 left-6">
                        <BsSendFill />
                    </div>
                    <input type="email" placeholder='Your Email Address' className='py-4 outline-none shadow-xl w-full pl-14 pr-40 rounded-full border border-gray-100' value={email} onChange={(e)=>{
                        setemail(e.target.value)
                    }} />
                    <button className="uppercase text-white px-10 py-4 absolute top-0 right-0 text-sm font-medium hover:opacity-90 rounded-full h-full  bg-[#3CC3A9]">Subscribe</button>
                </div>
            </div>
        </div>

<div className="-mt-20">
        <img src={bg} alt="w-full " />
        </div>
    </div>
  )
}

export default Newlesster