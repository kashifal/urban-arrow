import React from 'react';

const DiscoverCard = () => {
  // Array of data for 3 cards
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
  ];

  return (
    <div className="flex  gap-6 ">
      {discoverCards.map((card) => (
        <div
          key={card.id}
          className="bg-[#FAFAF0] flex flex-col justify-between  w-[100vw] lg:w-[28%] cursor-pointer text-[#1A1919] overflow-hidden rounded-xl"
        >
          <img
            className="h-[28vh] w-full object-cover"
            src={card.image}
            alt={card.title}
          />
          <div className="px-6 text-center pb-8 pt-14">
            <h1 className="font-medium py-3 text-[28px]">{card.title}</h1>
            <h4 className="font-medium py-2">{card.description}</h4>
            <button className="px-5 py-3.5 rounded-full mt-2 hover:bg-[#fff53e] bg-[#F0E600] text-black">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscoverCard;
