import React from 'react'
import NavBar from '../components/NavBar'
import FooterOther from '../components/FooterOther'
import Card from '../components/ReviewCard'

const Reviews = () => {
  const cardsData = Array.from({ length: 60 }, (_, index) => ({
    id: index + 1,
    date: `November ${index + 1}, 2024`,
    rating: Math.floor(Math.random() * 5) + 1,
    reviewText: `Review for card ${index + 1}: Let's see how it goes!`,
    isVerified: index % 2 === 0,
  }));
  return (
    <>
 <div className="bg-black text-white  min-h-screen">
    <NavBar />
  <div className="max-w-[68rem] py-20 mx-auto lg:flex-col lg:justify-center lg:items-center">
    <div className="">
      <div className="">
        <div className=" p-10 bg-[#17161B] rounded-xl w-full">
          <div className="">
            <div className=" flex items-center bg-transparent justify-start py-0 mb-2">
              <div className=" text-white text-left text-4xl font-bold leading-tight">
                Reviews
              </div>
            </div>
          </div>
          <div className="">
            <div className=" flex items-center bg-transparent justify-start py-0 mb-0">
              <div className=" text-white text-left text-base font-normal leading-6">
                15 Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-9 gap-5 mx-3 ">
    {cardsData.map((card) => (
        <Card
          key={card.id}
          date={card.date}
          rating={card.rating}
          reviewText={card.reviewText}
          isVerified={card.isVerified}
        />
      ))}
     
    </div>
    <div className="flex items-center justify-center space-x-2  mt-7">
      <div
        id="prevBtn"
        className="prev cursor-pointer px-2 py-1 rounded-md bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="fa-solid fa-chevron-left" />
      </div>
      <div
        id="page1"
        className="item cursor-pointer px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 active:bg-blue-500 active:text-white"
      >
        <span>1</span>
      </div>
      <div
        id="page2"
        className="item cursor-pointer px-3 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
      >
        <span>2</span>
      </div>
      <div
        id="nextBtn"
        className="next cursor-pointer px-2 py-1 rounded-md bg-gray-300 text-gray-500 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="fa-solid fa-chevron-right" />
      </div>
    </div>
   <FooterOther />
  </div>



 </div>
    </>
  )
}

export default Reviews