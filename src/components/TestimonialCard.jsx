import React from 'react'
import CustomerImg from '../assets/customer.jpg'

const TestimonialCard = () => {
  return (
    <div className="md:w-auto  bg-white shadow-xl px-4 md:px-8 md:pb-16 border-b-4 border-[#227179] pt-10 pb-10 md:pt-14">
      <p className="text-[#909090] w-fit  text-wrap font-medium">
        The Yoga Yajnavalkya is another early text on yoga that provides description of Yoga techniques and its benefits. Two of its Sanskrit palm-leaf manuscripts have been dated, one is from the early 10th-century CE and another more firmly</p>
      <div className="flex items-center gap-5 mt-6">
        <img src={CustomerImg} className='size-14 rounded-full' alt="" />
        <div className="">
          <h1 className="text-[#6F948D] text-[17px] font-semibold">Msalli</h1>
          <h1 className="text-[#3B3B3B] text-[15px] pt-[2px] font-semibold">Customer</h1>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard