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
import EthPay from "./pages/eth-payment";
import BnbPay from "./pages/bnb-payment";
import SolPay from "./pages/sol-payment";
import Product from "./pages/Product";
import ProductInfo from "./pages/ProductInfo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 
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
        <Route path="/eth-payment" element={<EthPay />} />
        <Route path="/bnb-payment" element={<BnbPay />} />
        <Route path="/sol-payment" element={<SolPay />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productInfo" element={<ProductInfo />} />
      </Routes>
    </>
  );
};

export default App;
