import React from 'react'

const ReviewCard = ({ date, rating, reviewText, isVerified }) => {
  return (
    <>
     <div className="max-w-full mt-3 bg-[#17161B] text-white p-4 rounded-lg shadow-lg">
      {/* Date */}
      <div className="flex justify-between">
        <p className="text-gray-400 text-[12px] mb-4 mt-3">{date}</p>
        {/* Star Rating */}
        <div className="flex items-center mb-3">
          <div className="flex space-x-1">
            {Array.from({ length: rating }).map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 6.003 1.414 8.501L12 20.347l-7.414 4.907L6 15.753l-6-6.003 8.332-1.595z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm font-medium mb-4">{reviewText}</p>

      {/* Verified Buyer */}
      {isVerified && (
        <div className="flex gap-2 items-center text-blue-600">
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
          <span className="text-[12px] font-medium">Verified Buyer</span>
        </div>
      )}
    </div>
    </>
  )
}

export default ReviewCard