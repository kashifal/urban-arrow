import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import { useTranslation } from 'react-i18next';

import Reviews from "./pages/Reviews";
import Checkout from "./pages/Checkout";
import SolanaPayment1 from "./pages/SolanaPayment1";
import SolanaPayment2 from "./pages/SolanaPayment2";
import Product from "./pages/Product";
import ProductInfo from "./pages/ProductInfo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Save the selected language to localStorage
  };
  return (
    <>
      {/* <Terms /> */}
      {/* <FAQ /> */}
      {/* <Shop /> */}
      {/* <Contact /> */}
      {/* <Reviews /> */}
      {/* <Checkout /> */}
      {/* <SolanaPayment1 /> */}
      {/* <SolanaPayment2 /> */}
      {/* <Product /> */}
      {/* <ProductInfo /> */}
      <ToastContainer />
      <div>
      <h1>{t('welcome')}</h1>
      <p>{t('hello')}</p>
      
      {/* Language Switcher */}
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/solanaPayment1" element={<SolanaPayment1 />} />
        <Route path="/solanaPayment2" element={<SolanaPayment2 />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productInfo" element={<ProductInfo />} />
      </Routes>
    </>
  );
};

export default App;
