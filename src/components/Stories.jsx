import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AnimateLeft from './AnimateLeft';

const Stories = () => {
  const splideRef = React.useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  // Stories Data
  const stories = [
    {
      id: 1,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
      date: 'November 07, 2024',
      category: 'News',
      title: 'The Cargo Bike Chronicles:',
      subtitle: 'a story by Seth Williams',
      buttonText: 'Read more',
    },
    {
      id: 2,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
      date: 'November 08, 2024',
      category: 'News',
      title: 'Urban Mobility Solutions:',
      subtitle: 'the future of city transport',
      buttonText: 'Read more',
    },
    {
      id: 3,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
      date: 'November 08, 2024',
      category: 'News',
      title: 'Urban Mobility Solutions:',
      subtitle: 'the future of city transport',
      buttonText: 'Read more',
    },
    {
      id: 3,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
      date: 'November 08, 2024',
      category: 'News',
      title: 'Urban Mobility Solutions:',
      subtitle: 'the future of city transport',
      buttonText: 'Read more',
    },
    
    // Add more stories as needed
  ];

  const customNext = () => {
    if (splideRef.current && !isEnd) {
      splideRef.current.go('+1');
    }
  };

  const customPrev = () => {
    if (splideRef.current && !isBeginning) {
      splideRef.current.go('-1');
    }
  };

  const handleSplideMove = () => {
    if (splideRef.current) {
      setIsBeginning(splideRef.current.splide.index === 0);
      setIsEnd(splideRef.current.splide.index === stories.length - splideRef.current.splide.options.perPage);
    }
  };

  return (
    <div className="bg-[#F0E600] min-h-[20vw] h-full xl:min-h-[55vw]">
      <div className='xl:max-w-[86%] text-[#000] mx-auto py-16 md:py-32 max-w-[72rem] px-6'>
        <div className="flex items-center justify-between gap-2">
          <h1 className="sm:text-[7vw] text-4xl md:text-[45px] xl:text-[65px] leading-none">We've got stories to tell</h1>
          <div className="md:flex hidden items-center gap-1.5">
            <div onClick={customPrev} className={`size-10 rotate-180 transition-opacity duration-300 ease-in-out ${isBeginning ? 'opacity-30 cursor-not-allowed' : 'opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]'} bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z" />
              </svg>
            </div>
            <div onClick={customNext} className={`size-10 rotate-0 transition-opacity duration-300 ease-in-out ${isEnd ? 'opacity-30 cursor-not-allowed' : 'opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]'} bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <Splide
            ref={splideRef}
            options={{
              type: 'slide',
              perPage: 3,
              perMove: 1,
              arrows: false,
              pagination: false,
              gap: '2rem',
              speed: 800,
              easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
              breakpoints: {
                768: {
                  perPage: 1, // Mobile view: 1 slide
                },
                1024: {
                  perPage: 2, // Tablet view: 2 slides
                },
                1280: {
                  perPage: 3, // Desktop view: 1 slide
                }
              },
            }}
            onMove={handleSplideMove}
            onMounted={handleSplideMove}
          >
            {stories.map((story, index) => (
              <SplideSlide key={story.id}>
                 <AnimateLeft time={index === 0 ? 0.3 : index === 1 ? 0.2 : index === 2 ? 0.1 : 0.1 } x={"-80%"}>
                  <div className="bg-white w-full cursor-pointer text-[#1A1919] overflow-hidden rounded-xl">
                    <img
                      className="h-[35vh] w-full object-cover"
                      src={story.image}
                      alt={story.title}
                    />
                    <div className="px-4 py-5">
                      <h4 className="font-medium">{story.date} | {story.category}</h4>
                      <h1 className="font-medium py-3 text-[28px]">
                        {story.title}
                        <br className="xl:block hidden" /> {story.subtitle}
                      </h1>
                      <button className="px-[18px]  button-font py-3 rounded-full mt-2 bg-black text-white">
                        {story.buttonText}
                      </button>
                    </div>
                  </div>
                </AnimateLeft>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="mt-14 flex flex-wrap justify-between md:justify-end">
          <button className="px-5  button-font py-3 rounded-full mt-2 border-black border hover:bg-black text-black hover:text-white">
            All stories
          </button>
          <div className="md:hidden flex items-center gap-1.5">
            <div onClick={customPrev} className={`size-10 rotate-180 transition-opacity duration-300 ease-in-out ${isBeginning ? 'opacity-30 cursor-not-allowed' : 'opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]'} bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z" />
              </svg>
            </div>
            <div onClick={customNext} className={`size-10 rotate-0 transition-opacity duration-300 ease-in-out ${isEnd ? 'opacity-30 cursor-not-allowed' : 'opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]'} bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories