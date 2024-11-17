import React from 'react'
import NavBar from '../components/NavBar'
import FooterOther from '../components/FooterOther'

const Reviews = () => {
  return (
    <>
 <div className="bg-black text-white  min-h-screen">
    <NavBar />
  <div className="max-w-[68rem] py-20 mx-auto lg:flex-col lg:justify-center lg:items-center">
    <div className="">
      <div className="">
        {/* Section Container */}
        <div className=" p-10 bg-[#17161B] rounded-xl w-full">
          <div className="">
            {/* Header */}
            <div className=" flex items-center bg-transparent justify-start py-0 mb-2">
              <div className=" text-white text-left text-4xl font-bold leading-tight">
                Reviews
              </div>
            </div>
          </div>
          {/* Content Block */}
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
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
      <div className="max-w-full mt-3  bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
        {/* Date */}
        <div className="flex justify-between">
          <p className="text-gray-400 text-sm mb-4 mt-3">November 04, 2024</p>
          {/* Star Rating */}
          <div className="flex items-center mb-3">
            {/* Stars */}
            <div className="flex space-x-1">
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
              <svg
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-lg font-medium mb-4">lets see how its goes</p>
        {/* Verified Buyer */}
        <div className="flex gap-2 items-center text-blue-600">
          {/* Check Icon */}
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 8.00008L7.33333 9.33341L10 6.66675"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Verified Buyer</span>
        </div>
      </div>
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