import React from 'react';

// StoriesCard Component
const StoriesCard = ({ cardData }) => {
  return (
    <div className="bg-white w-[100vw] lg:w-[44%] 2xl:w-[28%] cursor-pointer text-[#1A1919] overflow-hidden rounded-xl">
      <img
        className="h-[35vh] w-full object-cover"
        src={cardData.image}
        alt={cardData.title}
      />
      <div className="px-4 py-5">
        <h4 className="font-medium">{cardData.date} | {cardData.category}</h4>
        <h1 className="font-medium py-3 text-[28px]">
          {cardData.title}
          <br className="xl:block hidden" /> {cardData.subtitle}
        </h1>
        <button className="px-[18px] py-3 rounded-full mt-2 bg-black text-white">
          {cardData.buttonText}
        </button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  // Stories Data
  const stories = [
    {
      id: 1,
      image:
        'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_487/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1730275035/IMG_5772/IMG_5772.jpg?_i=AA',
      date: 'November 07, 2024',
      category: 'News',
      title: 'The Cargo Bike Chronicles:',
      subtitle: 'a story by Seth Williams',
      buttonText: 'Read more',
    },
    {
      id: 2,
      image:
        'https://cloudinary.pondigital.solutions/urbanarrow/images/c_scale,w_648,h_415/ar_1.5,c_fill/w_auto,c_fill/f_auto,q_auto/v1728985547/UA_MattnPat/UA_MattnPat.jpg?_i=AA',
      date: 'October 25, 2024',
      category: 'Update',
      title: 'Riding the Urban Arrow:',
      subtitle: 'a story by Jane Doe',
      buttonText: 'Learn more',
    },
  
  ];

  return (
    <div className="flex flex-wrap gap-6">
      {stories.map((story) => (
        <StoriesCard key={story.id} cardData={story} />
      ))}
    </div>
  );
};

export default App;
