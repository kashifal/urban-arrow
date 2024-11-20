import React from "react";
import "../css/FAQ.css";
import NavBar from "../components/NavBar";
import FooterOther from "../components/FooterOther";
import { useTranslation } from 'react-i18next'; // Import the i18n hook

const Terms = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <>
      <NavBar />
      <section className="bg-black text-white  pb-[50px]">
        <div className="w-[80%] mx-auto pt-[50px]">
        <div className="bg-[rgb(14,14,14)] text-white pl-[50px] shadow-xl rounded-lg py-[30px]">
  <h1 className="text-[3rem] font-semibold">
    {t('termsTitle')}
  </h1>
  <p className="text-[#a19e9e]">
    {t('termsDescription')}
  </p>
</div>

          <div className="bg-[rgb(14,14,14)] text-white px-[20px] mt-[50px] py-[10px] leading-[24px]">
            <p>{t('termsOfService')}</p>
            <p className="mt-2">Last updated June 23, 2024</p>
            <p className="mt-4">{t('agreementToTermsTitle')}</p>
            <p className="mt-10 leading-normal">
            {t('agreementToTermsText')}
              <a href="https://dogwiftools.com" className="text-blue-500">
                https://dogwiftools.com
              </a>
            </p>
            <p className=" leading-normal mt-[10px]">
            {t('supplementalTermsText')}
            </p>
            <p className=" leading-normal mt-[10px]">
            {t('jurisdictionText')}
            </p>
            <p className=" leading-normal mt-[10px]">
            {t('complianceText')}
            </p>
            <p className=" leading-normal mt-[10px]">
            {t('ageRequirementText')}
            </p>
            <p className="mt-[10px]">    {t('intellectualPropertyTitle')}
            </p>
            <p className=" leading-normal mt-[10px]">
            {t('intellectualPropertyText')}

            </p>
            <p className=" leading-normal mt-[10px]">
            {t('licenseText')}
            </p>
            <p className="mt-[10px]">{t('userRepresentationsTitle')}</p>
            <p className=" leading-normal mt-[10px]">
            {t('userRepresentationsDesc')}
            </p>
            <p className=" leading-normal mt-[10px]">
            {t('userInformationInvalid')}
            </p>
            <p className="mt-[10px]">{t('userRegistrationTitle')}</p>
            <p className=" leading-normal mt-[10px]">
            {t('userRegistrationDesc')}
            </p>
            <p className="mt-[10px]">{t('feesAndPaymentTitle')}</p>
            <p className=" leading-normal mt-[10px]">
            {t('feesAndPaymentDesc')}
            </p>
           <div className="flex mt-2.5 items-center gap-3">
            <div className="flex items-center gap-2 size-1.5 bg-white rounded-full"></div>
           <p className="">{t('cryptocurrencyTitle')}</p>
           </div>
            <p className=" leading-normal mt-[10px]">
            {t('cryptocurrencyDesc')}
            </p>
            <p className=" leading-normal mt-[10px]">
            {t('pricingErrorsDesc')}
            </p>
            <p className="mt-[10px]">{t('cancellationTitle')}</p>
            <p className=" leading-normal mt-[10px]">
            {t('cancellationDesc')}
            </p>
            <p className=" leading-normal mt-[10px]">
            {t('contactEmailTitle')}
              <a href="dogwiftools@gmail.com" className="text-blue-500">
                dogwiftools@gmail.com .
              </a>
            </p>
            <p className="mt-[10px]">{t('softwareTitle')}</p>
            <p className=" leading-normal mt-[10px]">
             {t('softwareDesc')}
            </p>
            <p className="mt-[10px]">{t('prohibitedActivitiesTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('prohibitedActivitiesDesc')}
            </p>
            <p className="mt-[10px]">{t('userGeneratedContributionsTitle')}</p>
            <p className=" leading-normal mt-[10px]">
             {t('userGeneratedContributionsDesc')}
            </p>
            <p className="mt-[10px]">{t('contributionLicenseTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('contributionLicenseDesc')}
            </p>
            <p className="mt-[10px]">{t('guidelinesForReviewsTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('guidelinesForReviewsTitle')}
            </p>
            <p className=" leading-normal mt-[10px]">
             {t('guidelinesForReviewsDesc')}
            </p>
            <p className="mt-[10px]">{t('socialMediaTitle')}</p>
            <p className=" leading-normal mt-[10px]">
             {t('socialMediaDesc')}
            </p>
            <p className="mt-[10px]">{t('submissionsTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('submissionsDesc')}
            </p>
            <p className="mt-[10px]">{t('thirdPartyTitle')}</p>
            <p className=" leading-normal mt-[10px]">
             {t('thirdPartyDesc')}
            </p>
            <p className="mt-[10px]">{t('usGovRightsTitle')}</p>
            <p className=" leading-normal mt-[10px]">
             {t('usGovRightsDesc')}
            </p>
            <p className="mt-[10px]">{t('siteManagementTitle')}</p>
            <p className=" leading-normal mt-[10px]">
             {t('siteManagementDesc')}
            </p>
            <p className="mt-[10px]">{t('termAndTerminationTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('termAndTerminationDesc')}
            </p>
            <p className="mt-[10px]">{t('modificationsTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('modificationsDesc')}
            </p>
            <p className="mt-[10px]">{t('governingLawTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('governingLawDesc')}
            </p>
            <p className="mt-[10px]">{t('disputeResolutionTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('disputeResolutionDesc')}
            </p>
            <p className="mt-[10px]">{t('correctionsTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('correctionsDesc')}
            </p>
            <p className="mt-[10px]">{t('disclaimerTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('disclaimerDesc')}
            </p>
            <p className="mt-[10px]">{t('limitationsOfLiabilityTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('limitationsOfLiabilityDesc')}
            </p>
            <p className="mt-[10px]">{t('indemnificationTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('indemnificationDesc')}
            </p>
            <p className="mt-[10px]">{t('userDataTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('userDataDesc')}
            </p>
            <p className="mt-[10px]">
              {t('electronicCommunicationsTitle')}
            </p>
            <p className=" leading-normal mt-[10px]">
             {t('electronicCommunicationsDesc')}
            </p>
            <p className="mt-[10px]">{t('californiaUsersTitle')}</p>
            <p className=" leading-normal mt-[10px]">
             {t('californiaUsersDesc')}
            </p>
            <p className="mt-[10px]">{t('miscellaneousTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('miscellaneousDesc')}
            </p>
            <p className="mt-[10px]">{t('contactTitle')}</p>
            <p className=" leading-normal mt-[10px]">
              {t('contactDesc')}
            </p>
            <p className=" leading-normal mt-[10px]">
              <a href="dogwiftools@gmail.com" className="text-blue-500">
                {" "}
                dogwiftools@gmail.com
              </a>
            </p>
          </div>
      <FooterOther />

        </div>
      </section>
    </>
  );
};

export default Terms;