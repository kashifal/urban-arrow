import React from 'react'
import bg from '../assets/circlesLogo.jpeg'
import logo1 from '../assets/yogalogo1.png'
import logo2 from '../assets/yogalogo2.png'
import logo3 from '../assets/yogalogo3.png'
import logo4 from '../assets/yogalogo4.png'
import logo5 from '../assets/yogalogo5.png'

const Logos = () => {
  return (
    <>
    <div className={` relative md:bg-transparent bg-gray-100 w-full py-12`}>
        <div className="absolute md:block hidden z-[2] w-full h-full top-0 left-0 ">
            <img src={bg} alt="" className="w-full lg:h-auto h-[50vh] object-cover" />
        </div>
  <div className=" max-w-7xl z-[4] relative mx-auto flex flex-col justify-center items-center  text-center">
    <h3 className="text-2xl font-[400] text-[#547670] mb-6">
      We are featured in
    </h3>
    <div className="flex flex-wrap mt-5  gap-6 items-center justify-center px-4">
      <div className="flex justify-center">
        <img
          src={logo1}
          alt="Logo 1"
          className="w-40  object-contain"
        />
      </div>
      <div className="flex justify-center">
        <img
          src={logo2}
          alt="Logo 2"
          className="w-40  object-contain"
        />
      </div>
      <div className="flex justify-center">
        <img
          src={logo3}
          alt="Logo 3"
          className=" w-40 object-contain"
        />
      </div>
      <div className="flex justify-center">
        <img
          src={logo4}
          alt="Logo 4"
          className=" w-40 object-contain"
        />
      </div>
      <div className="flex justify-center">
        <img
          src={logo5}
          alt="Logo 5"
          className=" w-40 object-contain"
        />
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Logos