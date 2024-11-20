import React from 'react';
import NavBar from '../components/NavBar';
import FooterOther from '../components/FooterOther';
import { useTranslation } from 'react-i18next'; // Import the i18n hook

const Contact = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <NavBar />
        <div className="max-w-[68rem] mx-auto pt-10 pb-20 lg:flex-col lg:justify-center lg:items-center">
          <div className="grid grid-cols-1 lg:p-0 mt-0 mb-0 bg-transparent rounded-lg gap-y-0 gap-x-8 md:p-5">
            <div className="bg-[#17161B] p-10 md:p-9 rounded-lg w-full">
              {/* Title Section */}
              <div className="flex items-center justify-start mb-2">
                <h1 className="text-4xl font-bold leading-tight text-white text-start">
                  {t('contact_title')}
                </h1>
              </div>
              {/* Subtitle Section */}
              <div className="flex items-center justify-start">
                <p className="text-base font-normal leading-6 text-white text-start">
                  {t('contact_subtitle')}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-transparent">
            <div className="px-0 my-0">
              <div className="flex justify-center">
                <div className="flex justify-center">
                  <form
                    className="flex-col items-center justify-center w-full p-4 bg-transparent border-none shadow-none rounded-2xl"
                    onSubmit="return false"
                    noValidate="novalidate"
                  >
                    {/* Title Field */}
                    <div className="mb-6">
                      <label htmlFor="title" className="text-sm font-medium text-white">
                        {t('contact_form_title')}
                      </label>
                      <div className="relative">
                        <input
                          className="h-10 mt-2 w-full sm:w-[45vw] bg-gray-800 text-white text-sm border border-gray-700 placeholder-white rounded-full px-4"
                          autoComplete="off"
                          type="text"
                          id="title"
                          name="title"
                          placeholder={t('contact_form_placeholder_title')}
                        />
                      </div>
                    </div>
                    {/* Email Field */}
                    <div className="mb-7">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        {t('contact_form_email')}
                      </label>
                      <div className="relative">
                        <input
                          className="h-10 w-full sm:w-[45vw] mt-2 bg-gray-800 text-white text-sm border border-gray-700 placeholder-white rounded-full px-4"
                          autoComplete="off"
                          type="email"
                          id="email"
                          name="email"
                          placeholder={t('contact_form_placeholder_email')}
                        />
                      </div>
                    </div>
                    {/* Invoice Id Field */}
                    <div className="mb-7">
                      <label htmlFor="invoice_id" className="text-sm font-medium text-white">
                        {t('contact_form_invoice_id')}
                      </label>
                      <div className="relative">
                        <input
                          className="h-10 w-full sm:w-[45vw] mt-2 bg-gray-800 text-white text-sm border border-gray-700 placeholder-white rounded-full px-4"
                          autoComplete="off"
                          type="text"
                          id="invoice_id"
                          name="invoice_id"
                          placeholder={t('contact_form_placeholder_invoice_id')}
                        />
                      </div>
                    </div>
                    {/* Message Field */}
                    <div className="mb-7">
                      <label htmlFor="message" className="text-sm font-medium text-white">
                        {t('contact_form_message')}
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          placeholder={t('contact_form_placeholder_message')}
                          className="h-32 mt-2 bg-gray-800 text-white text-sm w-full sm:w-[45vw] border border-gray-700 placeholder-white rounded-lg p-4"
                          rows={5}
                        />
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="flex w-full justify-stretch">
                      <button
                        type="submit"
                        className="flex justify-center items-center bg-indigo-500 text-white rounded-full py-3 w-full sm:w-[45vw]"
                      >
                        <span className="ripple-button-label">
                          {t('contact_form_button')}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <FooterOther />
        </div>
      </div>
    </>
  );
};

export default Contact;
