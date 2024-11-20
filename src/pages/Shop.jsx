import React from 'react';
import NavBar from '../components/NavBar';
import FooterOther from '../components/FooterOther';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next'; // Import the i18n hook
import shopItem from '../assets/shopitem.avif';

const Shop = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(); // Get the translation function

  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} has been added to the cart!`);
  };

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <NavBar />
        <div className="max-w-[68rem] mx-auto pt-10 pb-20 lg:flex-col lg:justify-center lg:items-center">
          <div className="flex-col w-full">
            <div className="bg-[#2A2B3F] lg:pt-6 lg:p-0 p-5 rounded-2xl w-full">
              <div className="flex flex-col lg:flex-row gap-4 rounded-2xl w-full bg-[#17161B] p-10">
                {/* Shop Title */}
                <div className="flex flex-col w-full lg:w-auto">
                  <div className="flex items-center mb-2">
                    <h1 className="text-white text-4xl font-bold leading-tight">
                      {t('shop')}
                    </h1>
                  </div>
                  {/* Product Count */}
                  <div className="flex items-center">
                    <p className="text-white text-base font-normal leading-9">
                      {t('product_count')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-between">
            <div className="w-full px-3 mt-11">
              <label htmlFor="" className="rounded-full text-sm font-normal text-white bg-[#17161B] border-none h-10 w-full placeholder-white">
                <svg className="shop-search-icon absolute ml-4 mt-3" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.80469 13.2C10.7042 13.2 13.0547 10.8494 13.0547 7.94995C13.0547 5.05046 10.7042 2.69995 7.80469 2.69995C4.90519 2.69995 2.55469 5.05046 2.55469 7.94995C2.55469 10.8494 4.90519 13.2 7.80469 13.2Z" stroke="#555D67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.4594 14.85L11.8594 11.25" stroke="#555D67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input type="text" className="rounded-full text-sm text-white bg-[#17161B] border-none h-10 w-full placeholder-gray-500 font-semibold px-12" placeholder={t('search_placeholder')} />
              </label>
            </div>
            <div className="sm:mt-11 sm:ml-4 mt-3 ml-4 pr-3">
              {/* Sort Button */}
              <button id="dropdownButton" type="button" className="flex items-center sm:w-40 w-full justify-between bg-[#2A2B3F] text-white text-sm font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <span>{t('sort_by')}:</span>
                <span className="sm:ml-1 ml-2 font-semibold text-start">{t('default')}</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 px-4 mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Single Product Card */}
            {
              products.map((product) => (
                <div key={product.id} className="relative bg-[#17161B] rounded-2xl shadow-md overflow-hidden">
              {/* Product Image */}
              <div className="relative">
                <img src={shopItem} alt="DogWifTools License" className="w-full filter h-[201px] object-cover rounded-t-lg" />
                {/* Cart Actions */}
                <div className="absolute inset-0 flex justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                  <div className="flex justify-center items-end w-[100%]">
                    <button onClick={() => handleAddToCart(product)} className="bg-[#2A2B3F] w-[80vw] text-center items-center justify-center flex h-10 mb-5 mx-5 rounded-full text-sm font-medium text-white hover:bg-[#FF00C0]">
                      {t('add_to_cart')}
                    </button>
                  </div>
                </div>
              </div>
              {/* Product Info */}
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold leading-6">
                  {/* {t('product_name')} */}
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-semibold">{t('price')}: {product.price}</span>
                  <span className="ml-1 text-sm text-gray-400">{t('currency')}</span>
                </div>
              </div>
            </div>
              ))
            }
            
          </div>
        </div>
        <FooterOther />
      </div>
    </>
  );
};

export default Shop;
