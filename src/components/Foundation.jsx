import React from 'react'
import bgImg from '../assets/bgImgFoundation.png'
import bubbleBg from '../assets/bubbles2.jpeg'

const Foundation = () => {
    return (
        <>

            <div className={`flex  relative xl:mt-28 mb-20 flex-wrap items-center justify-center   sm:px-8 px-4 py-12 max-w-7xl xl:px-6 lg:py-16`}>
                <div className="absolute z-[2] -bottom-[130%] w-[180%]">
                <img src={bubbleBg} className='w-[100%] bg-cover' alt="" />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="xl:absolute z-[4] xl:-top-60 -left-[20%]">
                        <div className="absolute inset-0  z-[2] w-full h-full lg:w-[350px] lg:h-[350px] mx-auto"></div>
                        <img
                            src={bgImg}
                            alt="Modern Yoga"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="w-full relative z-[4] lg:w-1/2 top-20 xl:-top-40 lg:mt-0 lg:pl-12">
                    <h4 className="text-xl text-[#3DBCA8]">Our foundation is</h4>
                    <h2 className="sm:text-6xl font-medium text-4xl text-[#227179] mt-2">Modern Yoga</h2>
                    <p className="text-[15px] text-lg text-balance text-[#5B6762] mt-4">
                        Modern postural yoga consists largely but not exclusively of the practice
                        of asanas. There were very few standing asanas before 1900. By 2012,
                        there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga.
                        These emphasize different aspects including aerobic exercise, precision
                        in the asanas, and spirituality in the Hatha yoga tradition. For example,
                        Bikram Yoga has an aerobic exercise style with rooms heated to 105 °F.
                    </p>
                    <div className="flex z-[10] gap-5 mt-6">
                        <a href="#" className="px-10 py-3.5 border-2 border-teal-500  cursor-pointer text-teal-500 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition duration-300" >
                            Learn More
                        </a>
                        <a href="#" className="px-10 py-3.5 cursor-pointer bg-teal-500 text-white shadow-lg shadow-teal-400/40 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition duration-300">
                            Our Story
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foundation