import React from 'react'
import SmothRide from '../assets/smothRide.png'
import Animate from './Animate';

const Ride = () => {
  return (
    <Animate>
    <div className='2xl:min-h-[50vw] min-h-[60vw] text-[#1A1919] bg-[#FAFAF0] mt-6 grid sm:grid-cols-2 2xl:h-full'>
        <img src={SmothRide} className='w-full h-[50vh] md:h-full object-cover ' alt="" />
        <div className="xl:w-[70%] py-14 md:py-10 w-[95%] md:w-[90%] mx-auto h-full flex flex-col justify-center px-6">
    <h1 className="sm:text-[7vw] text-4xl md:text-[4.9vw] xl:text-[65px]  leading-none ">The smoothest ride</h1>
    <p className='py-5 mt-4 text-black font-medium'>Since 2011, we’ve been making electric cargo bikes you can rely on. By collaborating with renowned partners like Bosch, Enviolo, and Schwalbe, we ensure the highest quality.</p>
    <p className='py- text-black font-medium'>We offer you the best riding experience and “the smoothest ride”. The lowered centre of gravity positively affects the road handling and balance of our bikes. Glide through traffic with the wind in your hair, and your day will run smoothly.</p>
            <div className="flex flex-wrap items-center gap-1.5 mt-5">
                <button className="bg-[#BEEB82] px-5 hover:bg-[#a2c86f] py-3.5 rounded-full text-black font-medium">Find your dealer</button>
                <button className="bg-[#FF8C3C] px-5 hover:bg-[#e78741] py-3.5 rounded-full text-black font-medium">Configure your bike</button>
            </div>
        </div>
      </div>
    </Animate>
  )
}

export default Ride