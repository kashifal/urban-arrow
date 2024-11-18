import React from 'react'
import NavBar from '../components/NavBar'
import FooterOther from '../components/FooterOther'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
const Shop = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(products[0]));
    toast.success(`${products[0].name} has been added to the cart!`);
  };
  return (
    <>
 <div className="bg-black text-white  min-h-screen">
    <NavBar />
 <div className="max-w-[68rem] mx-auto pt-10 pb-20 lg:flex-col lg:justify-center lg:items-center">
    <div className="flex-col  w-full">
      <div className=" bg-[#2A2B3F] lg:pt-6 lg:p-0 p-5 rounded-2xl w-full ">
        <div className="flex flex-col lg:flex-row gap-4  rounded-2xl w-full bg-[#17161B] p-10 ">
          {/* Shop Title */}
          <div className="flex flex-col w-full lg:w-auto">
            <div className="flex items-center mb-2">
              <h1 className="text-white  text-4xl font-bold leading-tight">
                Shop
              </h1>
            </div>
            {/* Product Count */}
            <div className="flex items-center">
              <p className="text-white text-base font-normal leading-9">
                1 products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:flex justify-between">
      <div className=" w-full px-3 mt-11">
        <label
          htmlFor=""
          className="rounded-full text-sm font-normal text-white bg-[#17161B] border-none h-10  w-full placeholder-white "
        >
          <svg
            className="shop-search-icon absolute ml-4 mt-3 "
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.80469 13.2C10.7042 13.2 13.0547 10.8494 13.0547 7.94995C13.0547 5.05046 10.7042 2.69995 7.80469 2.69995C4.90519 2.69995 2.55469 5.05046 2.55469 7.94995C2.55469 10.8494 4.90519 13.2 7.80469 13.2Z"
              stroke="#555D67"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4594 14.85L11.8594 11.25"
              stroke="#555D67"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            id="shop-search-y16f8xxkd82    "
            defaultValue=""
            className="rounded-full text-sm  text-white bg-[#17161B] border-none h-10  w-full placeholder-gray-500 font-semibold px-12 "
            placeholder="Search for a product..."
          />
        </label>
      </div>
      <div className=" sm:mt-11 sm:ml-4 mt-3 ml-4  pr-3">
        {/* Button */}
        <button
          id="dropdownButton"
          type="button"
          className="flex items-center sm:w-40 w-full justify-between  bg-[#2A2B3F] text-white text-sm font-medium py-2 px-4 rounded-full  focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span>
            {" "}
            Sort by :
            <span className=" sm:ml-1 ml-2 font-semibold text-start">
              Default
            </span>
          </span>
          <svg
            className=" w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M5.5 12.5L10.5 7.5L15.5 12.5"
              stroke="#555D67"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Dropdown Menu */}
        <div
          id="dropdownMenu"
          className="absolute z-10 hidden mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg"
        >
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Default
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Price: Low to High
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Price: High to Low
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Newest
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 px-4 mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {/* Single Product Card */}
      <div className="relative bg-[#17161B] rounded-2xl shadow-md overflow-hidden">
        {/* Product Image */}
        <div className="relative">
          <img
            src="../src/assets/shopitem.avif"
            alt="DogWifTools License"
            className="w-full filter h-[201px] object-cover rounded-t-lg"
          />
          {/* Cart Actions */}
          <div className="absolute inset-0  flex  justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30">
            <div className="flex  justify-center items-end   w-[100%]  ">
              {/* Add to Cart */}
             <button   onClick={() => handleAddToCart()} className="bg-[#2A2B3F] w-[80vw] text-center items-center justify-center flex h-10 mb-5 mx-5 rounded-full  text-sm font-medium text-white  hover:bg-[#FF00C0]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Product Info */}
        <div className="p-4 text-white">
          <h3 className="text-lg font-semibold leading-6">
            DogWifTools License
          </h3>
          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="4" fill="url(#paint0_linear_1221_31173)"/>
    <path d="M10.7085 21.9173C10.8389 21.787 11.0181 21.7109 11.2082 21.7109H28.4451C28.7601 21.7109 28.9176 22.0911 28.6949 22.3137L25.2899 25.7188C25.1596 25.8491 24.9804 25.9251 24.7903 25.9251H7.55331C7.23833 25.9251 7.08084 25.545 7.3035 25.3223L10.7085 21.9173Z" fill="white"/>
    <path d="M10.7085 9.20637C10.8443 9.07603 11.0235 9 11.2082 9H28.4451C28.7601 9 28.9176 9.38015 28.6949 9.60281L25.2899 13.0078C25.1596 13.1382 24.9804 13.2142 24.7903 13.2142H7.55331C7.23833 13.2142 7.08084 12.8341 7.3035 12.6114L10.7085 9.20637Z" fill="white"/>
    <path d="M25.2899 15.5189C25.1596 15.3885 24.9804 15.3125 24.7903 15.3125H7.55331C7.23833 15.3125 7.08084 15.6926 7.3035 15.9153L10.7085 19.3203C10.8389 19.4507 11.0181 19.5267 11.2082 19.5267H28.4451C28.7601 19.5267 28.9176 19.1466 28.6949 18.9239L25.2899 15.5189Z" fill="white"/>
    <defs>
        <linearGradient id="paint0_linear_1221_31173" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2ED1B7"/>
            <stop offset="0.520833" stop-color="#708ED2"/>
            <stop offset="1" stop-color="#B647F0"/>
        </linearGradient>
    </defs>
</svg>
            
            <span className="text-lg font-semibold">15.00000</span>
            <span className="ml-1 text-sm text-gray-400">SOL</span>
          </div>
        </div>
      </div>
    </div>
  <FooterOther />
  </div>

 </div>
    </>
  )
}

export default Shop