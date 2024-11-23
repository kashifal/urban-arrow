import React from 'react'
import Girl from '../assets/girls.png'
import ArticlesInfo from './ArticlesInfo'
import bg from '../assets/lasyImg.jpeg'

const Articles = () => {
  return (
    <div className=" bg-cover mt-20 relative bg-right  py-16">
  <div className=" mx-auto flex z-[4] relative flex-col md:flex-row items-center px-6 md:px-12 lg:px-24">
    <div className="md:w-1/2 flex flex-col items-start space-y-6">
      <div className="w-16 relative h-16">
        <a href="">
          <img src={Girl} className='z-[4] relative' alt="Yoga Icon" />
        </a>
        <div className="bg-[#F0F9F8] top-[30%] size-32 absolute z-[2] rounded-full"></div>
      </div>
      <h2 className="text-5xl  z-[4]  font-medium text-teal-700">Inspired Articles</h2>
      <p className="text-lg mt-4 text-balance text-gray-600">
        Modern postural yoga consists largely but not exclusively of the
        practice of asanas. There were very few standing asanas before 1900. By
        2012, there were at least 19 widespread styles.
      </p>
      <ul className="grid md:grid-cols-2 gap-4">
      <ArticlesInfo title={'Meditation'} />
      <ArticlesInfo title={'Yoga Therapy'} />
      <ArticlesInfo title={'Anatomy'} />
      <ArticlesInfo title={'Paranayama'} />
      <ArticlesInfo title={'Yoga Poses'} />
      <ArticlesInfo title={'Remides'} />
      <ArticlesInfo title={'Meditation'} />
      <ArticlesInfo title={'Yoga Therapy'} />
      <ArticlesInfo title={'Anatomy'} />
      <ArticlesInfo title={'Paranayama'} />
      <ArticlesInfo title={'Yoga Poses'} />
      <ArticlesInfo title={'Remides'} />
      </ul>
    </div>
  </div>
  <div className="bg-[#D7D7D7] h-[2px] ml-24 mt-20 w-8">
  </div>

<div className="absolute lg:block hidden z-[2] right-0 bottom-0">
  <img src={bg} alt="" className="w-full" />

</div>

</div>

  )
}

export default Articles