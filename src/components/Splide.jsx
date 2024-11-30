import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const CustomCarousel = () => {
  // Add ref for Splide
  const splideRef = React.useRef(null);

  // Update custom navigation buttons
  const customNext = () => {
    if (splideRef.current) {
      splideRef.current.go('+1');
    }
  };

  const customPrev = () => {
    if (splideRef.current) {
      splideRef.current.go('-1');
    }
  };

  return (
    <div className="carousel-container relative">
      <Splide
        ref={splideRef}
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          gap: '1rem',
          arrows: false, // Disable default arrows
          pagination: false, // Optional: disable default pagination
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
          },
        }}
      >
        {/* Add your slides here */}
        <SplideSlide>
          <div className="bg-gray-200 p-8 rounded">Slide 1</div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-gray-200 p-8 rounded">Slide 2</div>
        </SplideSlide>
        <SplideSlide>
          <div className="bg-gray-200 p-8 rounded">Slide 3</div>
        </SplideSlide>
        {/* Add more slides as needed */}
      </Splide>

      {/* Custom navigation buttons */}
      <button
        onClick={customPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={customNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomCarousel;
