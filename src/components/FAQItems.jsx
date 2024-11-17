import React, { useState } from 'react'; // Import useState
import { IoAdd, IoRemove } from "react-icons/io5"; // Import the remove icon for the toggle

const FAQItems = ({ question, answer }) => {
  // State to manage whether the answer is visible or not
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the visibility of the answer
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="px-6 py-6 cursor-pointer border-white/5 border bg-white/5 backdrop-blur-3xl rounded-2xl">
        <div className="flex items-center justify-between gap-2" onClick={handleToggle}>
          <h1 className="sm:text-lg text-sm font-semibold">{question}</h1>
          <div className="w-10 h-10 shrink-0 cursor-pointer text-white rounded-xl bg-white/5 backdrop-blur-3xl flex items-center justify-center">
            <span className='text-white'>
              {/* Toggle between IoAdd and IoRemove based on isOpen */}
              {isOpen ? <IoRemove /> : <IoAdd />}
            </span>
          </div>
        </div>
        {/* Conditionally render the answer based on isOpen */}
        {isOpen && <p className="text-sm pt-6 font-medium">{answer}</p>}
      </div>
    </>
  );
};

export default FAQItems;
