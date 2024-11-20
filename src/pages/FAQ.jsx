import React from 'react';
import '../css/FAQ.css';
import NavBar from '../components/NavBar';
import FooterOther from '../components/FooterOther';
import asset9 from '../assets/asset 9.svg';
import { useTranslation } from 'react-i18next'; // Import i18n hook

const FAQ = () => {
  const { t } = useTranslation(); // Get the translation function

  const toggleAnswer = (index) => {
    const answer = document.getElementById(`answer-${index}`);
    answer.classList.toggle('hidden');
  };

  return (
    <>
      <div>
        <NavBar />
        <section className="w-[100%] text-white bg-black pb-[50px]">
          <div className="w-[80%] mx-auto pt-[50px]">
            <div className="bg-[rgb(14,14,14)] text-white pl-[50px] shadow-xl rounded-lg py-[30px]">
              <h1 className="text-[3rem] font-semibold">{t('faq_title')}</h1>
              <p className="text-[#a19e9e]">{t('faq_subtitle')}</p>
            </div>

            {/* Question 1 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[40px]">
              <div
                className="flex justify-between text-white items-center cursor-pointer"
                onClick={() => toggleAnswer(1)}
              >
                <p>{t('faq_q1')}</p>
                <img src={asset9} className="filter" alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-1" className="hidden text-[#a19e9e] mt-[10px]">
                {t('faq_a1')}
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[14px]">
              <div
                className="flex justify-between text-white items-center cursor-pointer"
                onClick={() => toggleAnswer(2)}
              >
                <p>{t('faq_q2')}</p>
                <img src={asset9} className="filter" alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-2" className="hidden text-[#a19e9e] mt-[10px]">
                {t('faq_a2')}
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[14px]">
              <div
                className="flex justify-between text-white items-center cursor-pointer"
                onClick={() => toggleAnswer(3)}
              >
                <p>{t('faq_q3')}</p>
                <img src={asset9} className="filter" alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-3" className="hidden text-[#a19e9e] mt-[10px]">
                {t('faq_a3')}
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[14px]">
              <div
                className="flex justify-between text-white items-center cursor-pointer"
                onClick={() => toggleAnswer(4)}
              >
                <p>{t('faq_q4')}</p>
                <img src={asset9} className="filter" alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-4" className="hidden text-[#a19e9e] mt-[10px]">
                {t('faq_a4')}
              </div>
            </div>

            {/* Question 5 */}
            <div className="bg-[rgb(14,14,14)] px-[20px] py-[24px] rounded-lg mt-[10px]">
              <div
                className="flex justify-between text-white items-center cursor-pointer"
                onClick={() => toggleAnswer(5)}
              >
                <p>{t('faq_q5')}</p>
                <img src={asset9} className="filter" alt="Toggle Answer" />
              </div>
              {/* Hidden Answer */}
              <div id="answer-5" className="hidden text-[#a19e9e] mt-[10px]">
                {t('faq_a5')}
              </div>
            </div>
            <FooterOther />
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
