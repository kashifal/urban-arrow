import React from 'react'

const InstructionCards = ({src, title, desc}) => {
  return (
    <div className="flex items-start gap-5">
      <img src={src} className='w-16' alt="" />
      <div className="flex flex-col gap-4">
        <h1 className="text-[#227179] font-semibold text-2xl">{title}</h1>
        <p className='text-[#404B48] text-[17px] leading-normal'>{desc}</p>
        <div className="bg-[#D7D7D7] w-10 mt-2 h-[2px]"></div>
      </div>
    </div>
  )
}

export default InstructionCards