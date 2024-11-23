import React from 'react'
import InstructionCards from './InstructionCards'
import Icon1 from '../assets/icon1-1.png'
import Icon2 from '../assets/icon2.jfif'
import Icon3 from '../assets/icon3.png'

const HomeInstructions = () => {
  return (
    <div className='relative  -top-40 bg-[#F5F5F5] py-[70px]'>
      <div className="max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-9 mx-auto md:px-6 px-4">
        <InstructionCards src={Icon1} title={'Many Styles'} desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} />
        <InstructionCards src={Icon2} title={'Many Styles'} desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} />
        <InstructionCards src={Icon3} title={'Many Styles'} desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'} />

      </div>
    </div>
  )
}

export default HomeInstructions