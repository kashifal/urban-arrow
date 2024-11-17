import React from 'react'
import '../css/FAQ.css'
import NavBar from '../components/NavBar'
import FooterOther from '../components/FooterOther'

const FAQ = () => {
  return (
    <>
     <div>
       <NavBar />

        <section className="w-[100%] text-white  bg-black pb-[50px]">
          <div className="w-[80%] mx-auto pt-[50px]">
            <div className="bg-[rgb(14,14,14)] text-white pl-[50px] shadow-xl rounded-lg py-[30px]">
              <h1 className="text-[3rem] font-semibold">FAQ</h1>
              <p className="text-[#a19e9e]">Frequently Asked Questions</p>
            </div>
            {/* Question 1 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[40px]">
              <div className="flex justify-between text-white items-center cursor-pointer" onclick="toggleAnswer(1)">
                <p>
                  How can I get in touch with support after I bought the product?
                </p>
                <img src="../src/assets/asset 9.svg" className='filter' alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-1" className="hidden text-[#a19e9e] mt-[10px]">
                To receive support, please join our Discord server and open a
                support ticket.
              </div>
            </div>
            {/* Question 2 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[14px]">
              <div className="flex justify-between text-white items-center cursor-pointer" onclick="toggleAnswer(2)">
                <p>Can I make payments using my preferred method?</p>
                <img src="../src/assets/asset 9.svg" className='filter' alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-2" className="hidden text-[#a19e9e] mt-[10px]">
                We currently only support Solana for payments. If you would like to
                use a different cryptocurrency, please open a support ticket on our
                Discord server.
              </div>
            </div>
            {/* Question 3 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[14px]">
              <div className="flex justify-between text-white items-center cursor-pointer" onclick="toggleAnswer(3)">
                <p>Is it safe to make payments?</p>
                <img src="../src/assets/asset 9.svg" className='filter' alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-3" className="hidden text-[#a19e9e] mt-[10px]">
                Yes, we take security very seriously. We use advanced fraud
                prevention measures to protect against fraudulent transactions and
                we securely store all payment information.
              </div>
            </div>
            {/* Question 4 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[14px]">
              <div className="flex justify-between text-white items-center cursor-pointer" onclick="toggleAnswer(4)">
                <p>How do I make a purchase?</p>
                <img src="../src/assets/asset 9.svg" className='filter' alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-4" className="hidden text-[#a19e9e] mt-[10px]">
                Making a purchase is easy. Simply browse the available products and
                add the ones you wish to purchase to your cart. When you are ready
                to checkout, you will be prompted to enter your payment information
                and complete the transaction.
              </div>
            </div>
            {/* Question 5 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[10px]">
              <div className="flex justify-between text-white items-center cursor-pointer" onclick="toggleAnswer(5)">
                <p>What is the return policy for purchases?</p>
                <img src="../src/assets/asset 9.svg" className='filter' alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-5" className="hidden text-[#a19e9e] mt-[10px]">
                All sales are final and non-refundable.
              </div>
            </div>
           <FooterOther />
          </div>
        </section>
      </div>
    </>
  )
}

export default FAQ