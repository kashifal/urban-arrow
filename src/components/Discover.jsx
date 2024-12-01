import React from 'react'
import DiscoverCard from './DiscoverCard'
import Animate from './Animate';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AnimateLeft from './AnimateLeft';  

const Discover = () => {
  const [isEnd, setIsEnd] = React.useState(false);
  const splideRef = React.useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
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
      const isAtBeginning = splideRef.current.splide.index === 0;
      setIsBeginning(isAtBeginning);
      setIsEnd(splideRef.current.splide.index === stories.length - splideRef.current.splide.options.perPage);
    }
  };

  const discoverCards = [
    {
      id: 1,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_967/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1723554357/NEW%20website/Roadshow%20-%20WEB/DSCF9773/DSCF9773.jpg?_i=AA',
      title: 'Bike Advisor',
      description: 'With the bike advisor, you will discover which bike suits you in one time',
      buttonText: 'Bike Advisor',
    },
    {
      id: 2,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_967/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1716367044/NEW%20website/Shoot%20US%202023%20-%20WEB/DSC_2659/DSC_2659.jpg?_i=AA',
      title: 'Cargo bike pocket guide',
      description: 'Take your favorite bike on the road and see how it fits your lifestyle.',
      buttonText: 'Read',
    },
    {
      id: 3,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_432/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1690363308/NEW%20website/Shoot%20US%202023%20-%20WEB/_DSC0771-web/_DSC0771-web.jpg?_i=AA',
      title: 'Service Center',
      description: 'Learn how to keep your bike in top shape with expert advice.',
      buttonText: 'Go To Service Center',
    },
    {
      id: 4,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_432/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1690363308/NEW%20website/Shoot%20US%202023%20-%20WEB/_DSC0771-web/_DSC0771-web.jpg?_i=AA',
      title: 'Service Center',
      description: 'Learn how to keep your bike in top shape with expert advice.',
      buttonText: 'Go To Service Center',
    },
    {
      id: 5,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_432/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1690363308/NEW%20website/Shoot%20US%202023%20-%20WEB/_DSC0771-web/_DSC0771-web.jpg?_i=AA',
      title: 'Service Center',
      description: 'Learn how to keep your bike in top shape with expert advice.',
      buttonText: 'Go To Service Center',
    },
    {
      id: 6,
      image: 'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_432/ar_16:9,c_fill/w_auto,c_fill/f_auto,q_auto/v1690363308/NEW%20website/Shoot%20US%202023%20-%20WEB/_DSC0771-web/_DSC0771-web.jpg?_i=AA',
      title: 'Service Center',
      description: 'Learn how to keep your bike in top shape with expert advice.',
      buttonText: 'Go To Service Center',
    },
  ];
  return (
    <div className='pt-6 pb-32'>
      <div className='xl:max-w-[86%] text-[#000] mx-auto pt-16 md:pt-20   max-w-[72rem] px-6'>
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-[7vw] md:text-[45px] xl:text-[63px]  leading-none ">More to discover</h1>
          <div className="md:flex hidden items-center gap-1.5">
            <div onClick={customPrev} className={`size-10 rotate-180 transition-opacity duration-300 ease-in-out ${isBeginning ? 'opacity-30 cursor-not-allowed' : 'opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]'} bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z" />
              </svg>
            </div>
            <div onClick={customNext} className={`size-10 transition-opacity duration-300 ease-in-out ${isEnd ? 'opacity-30 cursor-not-allowed' : 'opacity-90 cursor-pointer hover:bg-black hover:scale-[1.05]'} bg-[#1A1919] rounded-full z-[4] relative flex text-white transition-all duration-100 items-center justify-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path fill="currentColor" d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z" />
              </svg>
            </div>
          </div>
        </div>
         
        <div className="mt-14 flex justify-between md:justify-end">

         
        </div>
      </div>
      <div className={`${isBeginning ? "xl:pl-36" : "pl-0"} pl-0`}>
        <Splide
          ref={splideRef}
          options={{
            type: 'slide',
            perPage: 3.5,
            perMove: 1,
            arrows: false,
            pagination: false,
            gap: '3rem',
            speed: 800,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            breakpoints: {
              768: {
                perPage: 1.3, // Mobile view: 1 slide
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
          {discoverCards.map((card, index) => (
            <SplideSlide key={card.id} >
               <AnimateLeft time={index === 0 ? 0.3 : index === 1 ? 0.2 : index === 2 ? 0.1 : 0.1 } x={"-80%"} >
              <div className="bg-[#FAFAF0] h-[80vh] flex flex-col justify-between  cursor-pointer text-[#1A1919] overflow-hidden rounded-xl">
                <img
                  className="h-[28vh] w-full object-cover"
                  src={card.image}
                  alt={card.title}
                />
                <div className="px-6 text-center pb-8 pt-14">
                  <h1 className="font-medium py-3 text-[28px]">{card.title}</h1>
                  <h4 className="font-medium py-2">{card.description}</h4>
                  <button className="px-5  button-font py-3.5 rounded-full mt-2 hover:bg-[#fff53e] bg-[#F0E600] text-black">
                    {card.buttonText}
                  </button>
                </div>
                </div>
                </AnimateLeft>
            </SplideSlide>
            
          ))}
        </Splide>
      </div>
      <div className="md:hidden mt-8 px-6 justify-end w-full flex items-center gap-1.5">
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
  )
}

export default Discover