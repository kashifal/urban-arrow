import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Retrieve the language from localStorage or use default 'en'
const storedLang = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next) // Initializes i18next for React
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          hello: "Hello",
          shop: "Shop",
          contact: "Contact",
          reviews: "Reviews",
          faq: "FAQ",
          terms: "Terms",
          language: "Language",
          cart: "Cart",
          footer_copyright: "Copyright 2024, BullRunner All Rights Reserved.",
          footer_shop: "Shop",
          footer_about: "About",
          footer_contact: "Contact",
          footer_terms: "Terms",
          footer_products: "Products",
          footer_collections: "Collections",
          shop: "Shop",
          product_count: "1 product",
          search_placeholder: "Search for a product...",
          sort_by: "Sort by:",
          default: "Default",
          low_to_high: "Price: Low to High",
          high_to_low: "Price: High to Low",
          newest: "Newest",
          add_to_cart: "Add to Cart",
          price: "Price",
          currency: "SOL",
          product_name: "DogWifTools License",
          contact_title: "Get in Touch",
          contact_subtitle:
            "Got a question or need some help? Get in touch. We'd love to hear from you.",
          contact_form_title: "Title",
          contact_form_email: "Email",
          contact_form_invoice_id: "Invoice Id (optional field)",
          contact_form_message: "Message",
          contact_form_placeholder_title:
            "e.g : Terms and Conditions for dropshipper",
          contact_form_placeholder_email: "example@gmail.com",
          contact_form_placeholder_invoice_id: "Enter 12 digit invoice id",
          contact_form_placeholder_message: "What would you like to ask?",
          contact_form_button: "Submit",
          faq_title: "FAQ",
          faq_subtitle: "Frequently Asked Questions",
          faq_q1:
            "How can I get in touch with support after I bought the product?",
          faq_a1:
            "To receive support, please join our Discord server and open a support ticket.",
          faq_q2: "Can I make payments using my preferred method?",
          faq_a2:
            "We currently only support Solana for payments. If you would like to use a different cryptocurrency, please open a support ticket on our Discord server.",
          faq_q3: "Is it safe to make payments?",
          faq_a3:
            "Yes, we take security very seriously. We use advanced fraud prevention measures to protect against fraudulent transactions and securely store all payment information.",
          faq_q4: "How do I make a purchase?",
          faq_a4:
            "Making a purchase is easy. Simply browse the available products and add the ones you wish to purchase to your cart. When you are ready to checkout, you will be prompted to enter your payment information and complete the transaction.",
          faq_q5: "What is the return policy for purchases?",
          faq_a5: "All sales are final and non-refundable.",
          checkout_title: "Checkout",
          checkout_items: "{{count}} item in your cart",
          order_summary: "Order Summary",
          coupon_code: "Enter coupon code",
          subtotal: "Subtotal",
          total: "Total",
          continue: "Continue",
          sol_currency: "SOL",
          back_to_shop: "Back to Shop",
          bull_runner: "Bull Runner",
          dogwiftools_license: "DogWifTools License",
          price: "15.00 SOL",
          quantity: "Quantity 1",
          subtotal: "Subtotal",
          total: "Total",
          invoice_taking: "Invoice Taking",
          how_to_pay: "How would you like to Pay",
          cryptocurrencies: "Cryptocurrencies",
          send_crypto: "Send a cryptocurrency transaction from your wallet",
          update_invoice: "Update Invoice",
          change_gateway: "Change gateway",
          awaiting_payment: "Awaiting Payment",
          total_price: "Total Price",
          exchange_rate: "Exchange Rate",
          amount: "Amount",
          created: "Created",
          payWithQR: "Pay With QR Code",
          copyPaymentDetails: "Copy Payment Details",
          scanQRCode:
            "Scan the QR Code with your preferred cryptocurrency app to send the payment.",
          solanaSupport:
            "We only support crypto transactions through the SOL chain.",
          otherChainsWarning:
            "Transactions sent to other chains will not be detected and will result in a loss of crypto.",
          amount: "Amount",
          solanaAddress: "Solana Address",
          ourProducts: "Our Products",
          viewAllProducts: "View All Products",
          productAlt: "DogWifTools License",
          addToCart: "Add to Cart",
          productName: "DogWifTools License",
          reviews: "Reviews",
          viewAllReviews: "View All Reviews",
          getInTouch: "Get in Touch",
          contactInfo:
            "Got a question or need some help? Get in touch. We'd love to hear from you.",
          contactUs: "Contact Us",
          productTitle: "DogWifTools License",
          productPrice: "15.06963 SOL",
          totalPrice: "Total:",
          quantitySelector: "1",
          addToCart: "Add to Cart",
          descriptionToggle: "Description",
          viewMore: "View More",
          reviews: "Reviews",

          // Description Section
          descriptionTitle: "Pump.fun Volume + Bundler + Bump It + Comment Bot",
          volumeModes: "Volume Modes",
          bundler: "Bundler",
          comments: "Comments",
          bumpIt: "Bump It",
          genVolume: "Gen Volume",
          autoVolume: "Auto Volume",
          humanMode: "Human Mode",
          microBuy: "Micro Buy",
          sellAll: "Sell All",
          singleWalletSell: "Single Wallet Sell",
          safeMode: "Safe Mode",
          experimentalMode: "Experimental Mode",
          dumpAll: "Dump All",
          dumpAllPercent: "Dump All %",
          delaySell: "Delay Sell",
          delaySellPercent: "Delay Sell %",
          customCommenter: "Custom Commenter",
          customBumpIt: "Custom Bump It (set username)",

          // Review Texts
          verifiedBuyer: "Verified Buyer",
          ratingText: "Rating",
          reviewText: "Review Text",
          reviewDate: "Date",

          termsTitle: "Terms and Conditions",
          termsDescription:
            "Please review our terms and conditions carefully before using our website or services.",
          termsOfService: "Terms of Service",
          agreementToTermsTitle: "AGREEMENT TO TERMS",
          agreementToTermsText: `These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and DogWifTools, doing business as ("DogWifTools," "we," “us”, or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, desktop website or desktop application related, linked, or otherwise connected thereto (collectively, the “Site”). DogWifTools operates in accordance with applicable laws and regulations. You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.`,
          supplementalTermsText: `Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.`,
          jurisdictionText: `The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.`,
          complianceText: `The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).`,
          ageRequirementText: `The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.`,
          intellectualPropertyTitle: "Intellectual Property Rights",
          intellectualPropertyText: `Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.`,
          licenseText: `Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content, and the Marks.`,
          userRepresentationsTitle: "3. USER REPRESENTATIONS",
          userRepresentationsDesc:
            "By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.",
          userInformationInvalid:
            "If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).",
          userRegistrationTitle: "4. USER REGISTRATION",
          userRegistrationDesc:
            "You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.",
          feesAndPaymentTitle: "5. FEES AND PAYMENT",
          feesAndPaymentDesc: "We accept the following form of payment:",
          cryptocurrencyTitle: "Cryptocurrency",
          cryptocurrencyDesc:
            "You may be required to purchase or pay a fee to access some of our services. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address and payment method, so that we can complete your transactions and contact you as needed. We bill you through an online billing account for purchases made via the Site. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in cryptocurrency. You agree to pay all charges or fees at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such amounts upon making your purchase. If your purchase is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until you notify us of your cancellation.",
          pricingErrorsDesc:
            "We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We also reserve the right to refuse any order placed through the Site.",

          cancellationTitle: "6. CANCELLATION",
          cancellationDesc:
            "All purchases are non-refundable. You can cancel your subscription at any time by logging into your account or contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term.",
          contactEmailTitle:
            "If you are unsatisfied with our services, please email us at",
          softwareTitle: "7. SOFTWARE",
          softwareDesc:
            "We may include software for use in connection with our services. If such software is accompanied by an end user license agreement (“EULA”), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our services and in accordance with these Terms of Use. Any Software and any related documentation is provided “as is” without warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and all risk arising out of use or performance of any Software. You may not reproduce or redistribute any software except in accordance with the EULA or these Terms of Use.",

          prohibitedActivitiesTitle: "8. PROHIBITED ACTIVITIES",
          prohibitedActivitiesDesc:
            "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to: Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us. Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords. Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site. Use any information obtained from the Site in order to harass, abuse, or harm another person. Make improper use of our support services or submit false reports of abuse or misconduct. Use the Site in a manner inconsistent with any applicable laws or regulations. Engage in unauthorized framing of or linking to the Site. Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site. Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools. Delete the copyright or other proprietary rights notice from any Content. Attempt to impersonate another user or person or use the username of another user. Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”). Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you. Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site. Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site. Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software. Use a buying agent or purchasing agent to make purchases on the Site. Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses. Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise. Use the Site to advertise or offer to sell goods and services.",

          userGeneratedContributionsTitle: "9. USER GENERATED CONTRIBUTIONS",
          userGeneratedContributionsDesc:
            'The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that: The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party. You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use. You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use. Your Contributions are not false, inaccurate, or misleading. Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation. Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us). Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone. Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people. Your Contributions do not violate any applicable law, regulation, or rule. Your Contributions do not violate the privacy or publicity rights of any third party. Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors. Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap. Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation. Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.',
          contributionLicenseTitle: "10. CONTRIBUTION LICENSE",
          contributionLicenseDesc:
            "You and the Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings). By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you. We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.",
          guidelinesForReviewsTitle: "11. GUIDELINES FOR REVIEWS",
          guidelinesForReviewsDesc:
            "We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.",
          socialMediaTitle: "12. SOCIAL MEDIA",
          socialMediaDesc:
            'As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Site; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the "Social Network Content") so that it is available on and through the Site via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Site. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Site. You will have the ability to disable the connection between your account on the Site and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Site. You can deactivate the connection between the Site and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.',
          submissionsTitle: "13. SUBMISSIONS",
          submissionsDesc:
            'You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.',
          thirdPartyTitle: "14. THIRD-PARTY WEBSITES AND CONTENT",
          thirdPartyDesc:
            'The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.',
          usGovRightsTitle: "15. U.S. GOVERNMENT RIGHTS",
          usGovRightsDesc:
            "Our services are “commercial items” as defined in Federal Acquisition Regulation (“FAR”) 2.101. If our services are acquired by or on behalf of any agency not within the Department of Defense (“DOD”), our services are subject to the terms of these Terms of Use in accordance with FAR 12.212 (for computer software) and FAR 12.211 (for technical data). If our services are acquired by or on behalf of any agency within the Department of Defense, our services are subject to the terms of these Terms of Use in accordance with Defense Federal Acquisition Regulation (“DFARS”) 227.7202‑3. In addition, DFARS 252.227‑7015 applies to technical data acquired by the DOD. This U.S. Government Rights clause is in lieu of, and supersedes, any other FAR, DFARS, or other clause or provision that addresses government rights in computer software or technical data under these Terms of Use.",
          siteManagementTitle: "16. SITE MANAGEMENT",
          siteManagementDesc:
            "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.",
          termAndTerminationTitle: "17. TERM AND TERMINATION",
          termAndTerminationDesc:
            "These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION. If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.",
          modificationsTitle: "18. MODIFICATIONS AND INTERRUPTIONS",
          modificationsDesc:
            "We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site. We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.",
          governingLawTitle: "19. GOVERNING LAW",
          governingLawDesc:
            "These Terms shall be governed by and defined following the laws applicable to decentralized digital platforms. The jurisdiction for resolving any disputes will be mutually agreed upon by the parties involved.",
          disputeResolutionTitle: "20. DISPUTE RESOLUTION",
          disputeResolutionDesc:
            "You agree to irrevocably submit all disputes related to these Terms or the legal relationship established by this Agreement to a mutually agreed-upon jurisdiction. DogWifTools reserves the right to bring proceedings in the courts of the country where you reside or, if these Terms are entered into in the course of your trade or profession, the state of your principal place of business.",
          correctionsTitle: "21. CORRECTIONS",
          correctionsDesc:
            "There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.",
          disclaimerTitle: "22. DISCLAIMER",
          disclaimerDesc:
            "THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.",
          limitationsOfLiabilityTitle: "23. LIMITATIONS OF LIABILITY",
          limitationsOfLiabilityDesc:
            "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.",
          indemnificationTitle: "24. INDEMNIFICATION",
          indemnificationDesc:
            "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.",
          userDataTitle: "25. USER DATA",
          userDataDesc:
            "We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.",

          electronicCommunicationsTitle:
            "26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
          electronicCommunicationsDesc:
            "Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.",
          californiaUsersTitle: "27. CALIFORNIA USERS AND RESIDENTS",
          californiaUsersDesc:
            "If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.",

          miscellaneousTitle: "28. MISCELLANEOUS",
          miscellaneousDesc:
            "These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use. Unauthorized copying, editing, and sharing of any file, via any medium is strictly prohibited.",

          contactTitle: "29. CONTACT US",
          contactDesc:
            "In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido",
          hello: "Hola",
          shop: "Tienda",
          contact: "Contacto",
          reviews: "Reseñas",
          faq: "Preguntas Frecuentes",
          terms: "Términos",
          language: "Idioma",
          cart: "Carrito",
          footer_copyright:
            "Copyright 2024, BullRunner Todos los derechos reservados.",
          footer_shop: "Tienda",
          footer_about: "Acerca de",
          footer_contact: "Contacto",
          footer_terms: "Términos",
          footer_products: "Productos",
          footer_collections: "Colecciones",
          shop: "Tienda",
          product_count: "1 producto",
          search_placeholder: "Busca un producto...",
          sort_by: "Ordenar por:",
          default: "Por defecto",
          low_to_high: "Precio: Bajo a Alto",
          high_to_low: "Precio: Alto a Bajo",
          newest: "Más Nuevo",
          add_to_cart: "Agregar al Carrito",
          price: "Precio",
          currency: "SOL",
          product_name: "Licencia DogWifTools",
          contact_title: "Ponerse en contacto",
          contact_subtitle:
            "¿Tienes alguna pregunta o necesitas ayuda? Ponte en contacto. Nos encantaría saber de ti.",
          contact_form_title: "Título",
          contact_form_email: "Correo electrónico",
          contact_form_invoice_id: "ID de factura (campo opcional)",
          contact_form_message: "Mensaje",
          contact_form_placeholder_title:
            "Ejemplo: Términos y condiciones para dropshipper",
          contact_form_placeholder_email: "ejemplo@gmail.com",
          contact_form_placeholder_invoice_id:
            "Introduce un ID de factura de 12 dígitos",
          contact_form_placeholder_message: "¿Qué te gustaría preguntar?",
          contact_form_button: "Enviar",
          faq_title: "Preguntas Frecuentes",
          faq_subtitle: "Preguntas Más Frecuentes",
          faq_q1:
            "¿Cómo puedo ponerme en contacto con soporte después de comprar el producto?",
          faq_a1:
            "Para recibir soporte, por favor únete a nuestro servidor de Discord y abre un ticket de soporte.",
          faq_q2: "¿Puedo hacer pagos utilizando mi método preferido?",
          faq_a2:
            "Actualmente solo soportamos pagos en Solana. Si deseas usar otra criptomoneda, por favor abre un ticket de soporte en nuestro servidor de Discord.",
          faq_q3: "¿Es seguro realizar pagos?",
          faq_a3:
            "Sí, tomamos la seguridad muy en serio. Usamos medidas avanzadas de prevención de fraudes para proteger contra transacciones fraudulentas y almacenamos de manera segura toda la información de pago.",
          faq_q4: "¿Cómo hago una compra?",
          faq_a4:
            "Hacer una compra es fácil. Simplemente navega por los productos disponibles y agrega los que deseas comprar a tu carrito. Cuando estés listo para pagar, se te pedirá que ingreses tu información de pago y completes la transacción.",
          faq_q5: "¿Cuál es la política de devoluciones de las compras?",
          faq_a5: "Todas las ventas son finales y no reembolsables.",
          checkout_title: "Finalizar compra",
          checkout_items: "{{count}} artículo en tu carrito",
          order_summary: "Resumen del pedido",
          coupon_code: "Ingresa el código de descuento",
          subtotal: "Subtotal",
          total: "Total",
          continue: "Continuar",
          sol_currency: "SOL",
          back_to_shop: "Volver a la tienda",
          bull_runner: "Bull Runner",
          dogwiftools_license: "Licencia DogWifTools",
          price: "15.00 SOL",
          quantity: "Cantidad 1",
          subtotal: "Subtotal",
          total: "Total",
          invoice_taking: "Tomando factura",
          how_to_pay: "¿Cómo te gustaría pagar?",
          cryptocurrencies: "Criptomonedas",
          send_crypto:
            "Envía una transacción de criptomonedas desde tu billetera",
          update_invoice: "Actualizar factura",
          change_gateway: "Cambiar pasarela",
          awaiting_payment: "Esperando pago",
          total_price: "Precio total",
          exchange_rate: "Tasa de cambio",
          amount: "Cantidad",
          created: "Creado",
          payWithQR: "Pagar con código QR",
          copyPaymentDetails: "Copiar detalles de pago",
          scanQRCode:
            "Escanea el código QR con tu aplicación de criptomonedas preferida para realizar el pago.",
          solanaSupport:
            "Solo admitimos transacciones criptográficas a través de la cadena SOL.",
          otherChainsWarning:
            "Las transacciones enviadas a otras cadenas no serán detectadas y resultarán en una pérdida de criptomonedas.",
          amount: "Cantidad",
          solanaAddress: "Dirección Solana",
          ourProducts: "Nuestros Productos",
          viewAllProducts: "Ver Todos los Productos",
          productAlt: "Licencia DogWifTools",
          addToCart: "Agregar al Carrito",
          productName: "Licencia DogWifTools",
          reviews: "Opiniones",
          viewAllReviews: "Ver Todas las Opiniones",
          getInTouch: "Ponerse en Contacto",
          contactInfo:
            "¿Tienes alguna pregunta o necesitas ayuda? Contáctanos. Nos encantaría saber de ti.",
          contactUs: "Contáctanos",
          productTitle: "Licencia DogWifTools",
          productPrice: "15.06963 SOL",
          totalPrice: "Total:",
          quantitySelector: "1",
          addToCart: "Agregar al carrito",
          descriptionToggle: "Descripción",
          viewMore: "Ver más",
          reviews: "Reseñas",

          // Description Section
          descriptionTitle: "Pump.fun Volume + Bundler + Bump It + Comment Bot",
          volumeModes: "Modos de volumen",
          bundler: "Agrupador",
          comments: "Comentarios",
          bumpIt: "Bump It",
          genVolume: "Volumen Gen",
          autoVolume: "Volumen Automático",
          humanMode: "Modo Humano",
          microBuy: "Compra Micro",
          sellAll: "Vender Todo",
          singleWalletSell: "Vender Solo en Billetera",
          safeMode: "Modo Seguro",
          experimentalMode: "Modo Experimental",
          dumpAll: "Vender Todo",
          dumpAllPercent: "Vender Todo %",
          delaySell: "Vender con Retardo",
          delaySellPercent: "Vender con Retardo %",
          customCommenter: "Comentador Personalizado",
          customBumpIt: "Bump It Personalizado (configurar usuario)",

          // Review Texts
          verifiedBuyer: "Comprador Verificado",
          ratingText: "Calificación",
          reviewText: "Texto de la reseña",
          reviewDate: "Fecha",

          termsTitle: "Términos y Condiciones",
          termsDescription:
            "Por favor, revise nuestros términos y condiciones cuidadosamente antes de usar nuestro sitio web o servicios.",
          termsOfService: "Términos de Servicio",
          agreementToTermsTitle: "ACUERDO CON LOS TÉRMINOS",
          agreementToTermsText: `Estos Términos de Uso constituyen un acuerdo legalmente vinculante entre usted, ya sea personalmente o en nombre de una entidad (“usted”) y DogWifTools, operando bajo el nombre de ("DogWifTools," "nosotros," "nos", o "nuestro"), en relación con su acceso y uso del sitio web, así como cualquier otro medio relacionado, canal de medios, sitio web móvil o aplicación móvil, sitio web de escritorio o aplicación de escritorio relacionada, vinculada o de otra manera conectada a ello (colectivamente, el “Sitio”). DogWifTools opera de acuerdo con las leyes y regulaciones aplicables. Usted acepta que al acceder al Sitio, ha leído, comprendido y acepta estar sujeto a todos estos Términos de Uso. SI NO ESTÁ DE ACUERDO CON TODOS ESTOS TÉRMINOS DE USO, SE LE PROHÍBE EXPRESAMENTE USAR EL SITIO Y DEBE DEJAR DE USARLO INMEDIATAMENTE.`,
          supplementalTermsText: `Los términos y condiciones suplementarios o documentos que puedan publicarse en el Sitio de vez en cuando se incorporan expresamente en el presente por referencia. Nos reservamos el derecho, a nuestra sola discreción, de realizar cambios o modificaciones a estos Términos de Uso de vez en cuando. Le alertaremos sobre cualquier cambio actualizando la fecha de “Última actualización” de estos Términos de Uso, y usted renuncia a cualquier derecho a recibir un aviso específico de cada uno de dichos cambios. Asegúrese de consultar los Términos aplicables cada vez que use nuestro Sitio para que entienda qué Términos aplican. Estará sujeto a, y se considerará que ha sido informado y ha aceptado, los cambios en cualquier Término de Uso revisado por su uso continuo del Sitio después de la fecha en que dichos Términos de Uso revisados sean publicados.`,
          jurisdictionText: `La información proporcionada en el Sitio no está destinada a su distribución ni uso por parte de ninguna persona o entidad en ninguna jurisdicción o país donde dicha distribución o uso sea contrario a la ley o la regulación, o que nos sometería a cualquier requisito de registro dentro de dicha jurisdicción o país. En consecuencia, aquellas personas que elijan acceder al Sitio desde otras ubicaciones lo hacen por su propia iniciativa y son completamente responsables del cumplimiento de las leyes locales, si las leyes locales son aplicables.`,
          complianceText: `El Sitio no está diseñado para cumplir con regulaciones específicas de la industria (Ley de Portabilidad y Responsabilidad de Seguro de Salud (HIPAA), Ley Federal de Gestión de Seguridad de la Información (FISMA), etc.), por lo que si sus interacciones estarían sujetas a tales leyes, no puede usar este Sitio. No puede usar el Sitio de una manera que viole la Ley Gramm-Leach-Bliley (GLBA).`,
          ageRequirementText: `El Sitio está destinado a usuarios que tengan al menos 18 años de edad. Las personas menores de 18 años no pueden usar ni registrarse en el Sitio.`,
          intellectualPropertyTitle: "Derechos de Propiedad Intelectual",
          intellectualPropertyText: `A menos que se indique lo contrario, el Sitio es propiedad exclusiva nuestra y todo el código fuente, bases de datos, funcionalidades, software, diseños de sitios web, audio, video, texto, fotografías y gráficos en el Sitio (colectivamente, el "Contenido") y las marcas comerciales, marcas de servicio y logotipos contenidos en él (las "Marcas") son propiedad nuestra o están controladas o licenciadas por nosotros, y están protegidas por leyes de derechos de autor y marcas comerciales, así como por diversas otras leyes de propiedad intelectual y leyes de competencia desleal de los Estados Unidos, leyes internacionales de derechos de autor y convenios internacionales. El Contenido y las Marcas se proporcionan en el Sitio "TAL CUAL" solo para su información y uso personal. A menos que se disponga expresamente en estos Términos de Uso, ninguna parte del Sitio y ningún Contenido o Marca podrá ser copiado, reproducido, agregado, republicado, cargado, publicado, exhibido públicamente, codificado, traducido, transmitido, distribuido, vendido, licenciado ni explotado de ningún otro modo para fines comerciales sin nuestro permiso expreso y previo por escrito.`,
          licenseText: `Siempre que sea elegible para utilizar el Sitio, se le otorga una licencia limitada para acceder y utilizar el Sitio y descargar o imprimir una copia de cualquier parte del Contenido al que haya obtenido acceso de manera adecuada, únicamente para su uso personal y no comercial. Nos reservamos todos los derechos no expresamente otorgados a usted en y para el Sitio, el Contenido y las Marcas.`,
          userRepresentationsTitle: "3. REPRESENTACIONES DEL USUARIO",
          userRepresentationsDesc:
            "Al usar el Sitio, usted declara y garantiza que: (1) toda la información de registro que envíe será verdadera, precisa, actual y completa; (2) mantendrá la precisión de dicha información y actualizará puntualmente dicha información de registro según sea necesario; (3) tiene la capacidad legal y acepta cumplir con estos Términos de Uso; (4) no es menor de edad en la jurisdicción en la que reside; (5) no accederá al Sitio a través de medios automatizados o no humanos, ya sea mediante un bot, script o de otra manera; (6) no utilizará el Sitio para ningún propósito ilegal o no autorizado; y (7) su uso del Sitio no violará ninguna ley o regulación aplicable.",
          userInformationInvalid:
            "Si proporciona información que sea falsa, inexacta, desactualizada o incompleta, tenemos el derecho de suspender o terminar su cuenta y rechazar cualquier uso actual o futuro del Sitio (o cualquier parte del mismo).",
          userRegistrationTitle: "4. REGISTRO DE USUARIO",
          userRegistrationDesc:
            "Es posible que se le requiera registrarse en el Sitio. Usted acepta mantener su contraseña confidencial y será responsable de todo uso de su cuenta y contraseña. Nos reservamos el derecho de eliminar, reclamar o cambiar el nombre de usuario que seleccione si determinamos, a nuestra entera discreción, que dicho nombre de usuario es inapropiado, obsceno o de alguna manera objetable.",
          feesAndPaymentTitle: "5. TARIFAS Y PAGO",
          feesAndPaymentDesc: "Aceptamos la siguiente forma de pago:",
          cryptocurrencyTitle: "Criptomoneda",
          cryptocurrencyDesc:
            "Es posible que se le requiera comprar o pagar una tarifa para acceder a algunos de nuestros servicios. Usted acepta proporcionar información de compra y cuenta actual, completa y precisa para todas las compras realizadas a través del sitio. Además, acepta actualizar rápidamente la información de la cuenta y el pago, incluida la dirección de correo electrónico y el método de pago, para que podamos completar sus transacciones y contactarlo cuando sea necesario. Le facturamos a través de una cuenta de facturación en línea por las compras realizadas a través del sitio. El impuesto sobre las ventas se agregará al precio de las compras según lo considere necesario. Podemos cambiar los precios en cualquier momento. Todos los pagos se realizarán en criptomoneda. Usted acepta pagar todos los cargos o tarifas a los precios vigentes en el momento de su compra, y nos autoriza a cobrar a su proveedor de pago elegido por dichos montos al realizar su compra. Si su compra está sujeta a cargos recurrentes, acepta que carguemos su método de pago de manera recurrente sin necesidad de su aprobación previa para cada cargo recurrente, hasta que nos notifique su cancelación.",
          pricingErrorsDesc:
            "Nos reservamos el derecho de corregir cualquier error o equivocación en los precios, incluso si ya hemos solicitado o recibido el pago. También nos reservamos el derecho de rechazar cualquier pedido realizado a través del sitio.",
          cancellationTitle: "6. CANCELACIÓN",
          cancellationDesc:
            "Todas las compras son no reembolsables. Puede cancelar su suscripción en cualquier momento iniciando sesión en su cuenta o poniéndose en contacto con nosotros utilizando la información de contacto proporcionada a continuación. Su cancelación surtirá efecto al final del período pagado actual.",
          contactEmailTitle:
            "Si no está satisfecho con nuestros servicios, por favor envíenos un correo electrónico a",
          softwareTitle: "7. SOFTWARE",
          softwareDesc:
            "Podemos incluir software para su uso en relación con nuestros servicios. Si dicho software está acompañado por un acuerdo de licencia de usuario final (“EULA”), los términos del EULA regirán su uso del software. Si el software no está acompañado por un EULA, le otorgamos una licencia no exclusiva, revocable, personal y no transferible para usar dicho software únicamente en conexión con nuestros servicios y de acuerdo con estos Términos de Uso. Cualquier software y cualquier documentación relacionada se proporciona “tal como está”, sin garantía de ningún tipo, ya sea expresa o implícita, incluyendo, sin limitación, las garantías implícitas de comerciabilidad, idoneidad para un propósito particular o no infracción. Usted acepta todo riesgo derivado del uso o rendimiento de cualquier software. No puede reproducir ni redistribuir ningún software excepto de acuerdo con el EULA o estos Términos de Uso.",
          prohibitedActivitiesTitle: "8. ACTIVIDADES PROHIBIDAS",
          prohibitedActivitiesDesc:
            "No podrá acceder al Sitio o utilizarlo para ningún propósito distinto al que nosotros lo ponemos a disposición. El Sitio no podrá ser utilizado en conexión con ningún esfuerzo comercial, excepto aquellos que estén específicamente respaldados o aprobados por nosotros. Como usuario del Sitio, usted acepta no: Recuperar sistemáticamente datos u otro contenido del Sitio para crear o compilar, directa o indirectamente, una colección, compilación, base de datos o directorio sin nuestro permiso por escrito. Engañarnos, defraudarnos o inducirnos a error a nosotros y a otros usuarios, especialmente en cualquier intento de obtener información sensible de cuentas, como contraseñas de usuario. Eludir, deshabilitar o interferir de otro modo con las características de seguridad del Sitio, incluidas las características que impiden o restringen el uso o la copia de cualquier Contenido o imponen limitaciones sobre el uso del Sitio y/o del Contenido contenido en él. Desacreditar, dañar o de otro modo perjudicar, a nuestro juicio, a nosotros y/o al Sitio. Usar cualquier información obtenida del Sitio para acosar, abusar o dañar a otra persona. Hacer un uso indebido de nuestros servicios de soporte o presentar informes falsos de abuso o mala conducta. Utilizar el Sitio de una manera inconsistente con cualquier ley o regulación aplicable. Participar en la creación no autorizada de marcos o enlaces al Sitio. Subir o transmitir (o intentar subir o transmitir) virus, caballos de Troya u otro material, incluyendo el uso excesivo de mayúsculas y el envío de spam (publicación continua de texto repetitivo), que interfiera con el uso ininterrumpido y disfrute del Sitio por parte de cualquier parte o que modifique, degrade, interrumpa, altere o interfiera con el uso, las características, funciones, operación o mantenimiento del Sitio. Participar en el uso automatizado del sistema, como usar scripts para enviar comentarios o mensajes, o usar herramientas de minería de datos, robots o herramientas similares de recopilación y extracción de datos. Eliminar el aviso de derechos de autor u otro aviso de derechos de propiedad de cualquier Contenido. Intentar suplantar a otro usuario o persona o usar el nombre de usuario de otro usuario. Subir o transmitir (o intentar subir o transmitir) cualquier material que actúe como un mecanismo de recopilación o transmisión de información activa o pasiva, incluidos, entre otros, formatos gráficos de intercambio de gráficos, píxeles 1×1, web bugs, cookies u otros dispositivos similares Interferir, interrumpir o crear una carga indebida sobre el Sitio o las redes o servicios conectados al Sitio. Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes que estén involucrados en la provisión de cualquier parte del Sitio. Intentar eludir cualquier medida del Sitio diseñada para prevenir o restringir el acceso al Sitio, o a cualquier parte del Sitio. Copiar o adaptar el software del Sitio, incluidos, entre otros, Flash, PHP, HTML, JavaScript u otro código. Excepto según lo permita la ley aplicable, descifrar, descompilar, desensamblar o realizar ingeniería inversa de cualquier software que forme parte del Sitio. Excepto cuando sea resultado del uso estándar de un motor de búsqueda o un navegador de Internet, utilizar, lanzar, desarrollar o distribuir cualquier sistema automatizado, incluidos, entre otros, cualquier araña, robot, utilidad para hacer trampas, scraper o lector fuera de línea que acceda al Sitio, o usar o lanzar cualquier script no autorizado u otro software. Utilizar un agente de compras o agente de compras para realizar compras en el Sitio. Hacer un uso no autorizado del Sitio, incluida la recopilación de nombres de usuario y/o direcciones de correo electrónico de usuarios mediante medios electrónicos u otros para enviar correos electrónicos no solicitados, o crear cuentas de usuario mediante medios automatizados o bajo falsos pretextos. Usar el Sitio como parte de cualquier esfuerzo para competir con nosotros o usar el Sitio y/o el Contenido para cualquier empresa generadora de ingresos o emprendimiento comercial. Utilizar el Sitio para anunciar o ofrecer vender bienes y servicios.",
          userGeneratedContributionsTitle:
            "9. CONTRIBUCIONES GENERADAS POR EL USUARIO",
          userGeneratedContributionsDesc:
            'El Sitio no ofrece a los usuarios la posibilidad de enviar o publicar contenido. Podemos proporcionarle la oportunidad de crear, enviar, publicar, mostrar, transmitir, ejecutar, publicar, distribuir o transmitir contenido y materiales a nosotros o en el Sitio, incluyendo pero no limitado a texto, escritos, video, audio, fotografías, gráficos, comentarios, sugerencias o información personal u otros materiales (colectivamente, "Contribuciones"). Las Contribuciones pueden ser visibles para otros usuarios del Sitio y a través de sitios web de terceros. Como tal, cualquier Contribución que transmita puede ser tratada de acuerdo con la Política de Privacidad del Sitio. Al crear o poner a disposición cualquier Contribución, usted declara y garantiza que: La creación, distribución, transmisión, exhibición pública o ejecución, y el acceso, la descarga o la copia de sus Contribuciones no infringen ni infringirán los derechos de propiedad, incluyendo pero no limitado a derechos de autor, patentes, marcas comerciales, secretos comerciales o derechos morales de terceros. Usted es el creador y propietario o tiene las licencias, derechos, consentimientos, liberaciones y permisos necesarios para usar y autorizar a nosotros, al Sitio y a otros usuarios del Sitio a utilizar sus Contribuciones de la manera contemplada por el Sitio y estos Términos de Uso. Usted tiene el consentimiento escrito, liberación y/o permiso de cada persona identificable en sus Contribuciones para usar el nombre o la imagen de cada persona identificable para permitir la inclusión y el uso de sus Contribuciones de la manera contemplada por el Sitio y estos Términos de Uso. Sus Contribuciones no son falsas, inexactas ni engañosas. Sus Contribuciones no son publicidad no solicitada ni no autorizada, materiales promocionales, esquemas piramidales, cartas encadenadas, spam, envíos masivos ni otras formas de solicitud. Sus Contribuciones no son obscenas, lascivas, sucias, violentas, acosadoras, difamatorias, calumniosas ni objetables (según lo determinado por nosotros). Sus Contribuciones no ridiculizan, se burlan, difaman, intimidan ni abusan de nadie. Sus Contribuciones no se utilizan para acosar ni amenazar (en el sentido legal de esos términos) a ninguna otra persona y no promueven la violencia contra una persona o grupo específico de personas. Sus Contribuciones no violan ninguna ley, regulación o norma aplicable. Sus Contribuciones no violan los derechos de privacidad o publicidad de terceros. Sus Contribuciones no violan ninguna ley aplicable sobre pornografía infantil, ni están destinadas a proteger la salud o el bienestar de menores. Sus Contribuciones no incluyen comentarios ofensivos relacionados con raza, origen nacional, género, preferencia sexual o discapacidad física. Sus Contribuciones no violan, ni enlazan a materiales que violen, ninguna disposición de estos Términos de Uso ni ninguna ley o regulación aplicable. Cualquier uso del Sitio en violación de lo anterior viola estos Términos de Uso y puede resultar, entre otras cosas, en la terminación o suspensión de sus derechos para usar el Sitio.',
          contributionLicenseTitle: "10. LICENCIA DE CONTRIBUCIÓN",
          contributionLicenseDesc:
            "Usted y el Sitio acuerdan que podemos acceder, almacenar, procesar y usar cualquier información y datos personales que proporcione, de acuerdo con los términos de la Política de Privacidad y sus elecciones (incluidos los ajustes). Al enviar sugerencias u otros comentarios sobre el Sitio, usted acepta que podamos usar y compartir dichos comentarios para cualquier propósito sin compensación alguna para usted. No reclamamos ningún derecho de propiedad sobre sus Contribuciones. Usted conserva la plena propiedad de todas sus Contribuciones y de los derechos de propiedad intelectual o derechos de propiedad asociados con sus Contribuciones. No somos responsables de ninguna declaración o representación en sus Contribuciones proporcionadas por usted en ninguna área del Sitio. Usted es el único responsable de sus Contribuciones al Sitio y acepta expresamente exonerarnos de cualquier responsabilidad y abstenerse de tomar acciones legales contra nosotros con respecto a sus Contribuciones.",
          guidelinesForReviewsTitle: "11. DIRECTRICES PARA RÍSENAS",
          guidelinesForReviewsDesc:
            "Podemos proporcionarle áreas en el Sitio para dejar reseñas o calificaciones. Al publicar una reseña, debe cumplir con los siguientes criterios: (1) debe tener experiencia directa con la persona/entidad que está reseñando; (2) sus reseñas no deben contener blasfemias ofensivas, ni lenguaje abusivo, racista, ofensivo o de odio; (3) sus reseñas no deben contener referencias discriminatorias basadas en religión, raza, género, origen nacional, edad, estado civil, orientación sexual o discapacidad; (4) sus reseñas no deben contener referencias a actividades ilegales; (5) no debe estar afiliado a competidores si publica reseñas negativas; (6) no debe hacer ninguna conclusión sobre la legalidad de la conducta; (7) no puede publicar declaraciones falsas o engañosas; y (8) no puede organizar una campaña animando a otros a publicar reseñas, ya sean positivas o negativas.",
          socialMediaTitle: "12. REDES SOCIALES",
          socialMediaDesc:
            'Como parte de la funcionalidad del Sitio, puede vincular su cuenta con cuentas en línea que tenga con proveedores de servicios de terceros (cada una de estas cuentas, una "Cuenta de Terceros") de la siguiente manera: (1) proporcionando la información de inicio de sesión de su Cuenta de Terceros a través del Sitio; o (2) permitiéndonos acceder a su Cuenta de Terceros, según lo permita los términos y condiciones aplicables que rigen su uso de cada Cuenta de Terceros. Usted declara y garantiza que tiene derecho a divulgar su información de inicio de sesión de la Cuenta de Terceros a nosotros y/o otorgarnos acceso a su Cuenta de Terceros, sin que ello infrinja ninguno de los términos y condiciones que rigen su uso de la Cuenta de Terceros aplicable, y sin obligarnos a pagar ninguna tarifa ni someternos a ninguna limitación de uso impuesta por el proveedor de servicios de la Cuenta de Terceros. Al otorgarnos acceso a cualquier Cuenta de Terceros, entiende que (1) podemos acceder, poner a disposición y almacenar (si es aplicable) cualquier contenido que haya proporcionado y almacenado en su Cuenta de Terceros (el "Contenido de Redes Sociales") para que esté disponible en y a través del Sitio a través de su cuenta, incluyendo sin limitación las listas de amigos y (2) podemos enviar y recibir información adicional de su Cuenta de Terceros en la medida en que se le notifique cuando vincule su cuenta con la Cuenta de Terceros. Dependiendo de las Cuentas de Terceros que elija y sujeto a la configuración de privacidad que haya establecido en tales Cuentas de Terceros, la información personal que publique en sus Cuentas de Terceros puede estar disponible en y a través de su cuenta en el Sitio. Tenga en cuenta que si una Cuenta de Terceros o servicio asociado se vuelve no disponible o nuestro acceso a dicha Cuenta de Terceros es terminada por el proveedor de servicios de terceros, el Contenido de Redes Sociales puede ya no estar disponible en y a través del Sitio. Tendrá la capacidad de desactivar la conexión entre su cuenta en el Sitio y sus Cuentas de Terceros en cualquier momento. TENGA EN CUENTA QUE SU RELACIÓN CON LOS PROVEEDORES DE SERVICIOS DE TERCEROS ASOCIADOS CON SUS CUENTAS DE TERCEROS SE RIGE EXCLUSIVAMENTE POR SU(S) ACUERDO(S) CON DICHOS PROVEEDORES DE SERVICIOS DE TERCEROS. No hacemos ningún esfuerzo por revisar el Contenido de Redes Sociales con ningún propósito, incluyendo, pero no limitado a, precisión, legalidad o falta de infracción, y no somos responsables de ningún Contenido de Redes Sociales. Usted reconoce y acepta que podemos acceder a su libreta de direcciones asociada con una Cuenta de Terceros y a su lista de contactos almacenada en su dispositivo móvil o tableta únicamente con fines de identificar e informarle sobre aquellos contactos que también se hayan registrado para usar el Sitio. Puede desactivar la conexión entre el Sitio y su Cuenta de Terceros poniéndose en contacto con nosotros utilizando la información de contacto que se encuentra a continuación o a través de la configuración de su cuenta (si corresponde). Intentaremos eliminar cualquier información almacenada en nuestros servidores que haya sido obtenida a través de dicha Cuenta de Terceros, excepto el nombre de usuario y la foto de perfil que se asocian con su cuenta.',
          submissionsTitle: "13. ENVIOS",
          submissionsDesc:
            'Usted reconoce y acepta que cualquier pregunta, comentario, sugerencia, idea, retroalimentación u otra información respecto al Sitio ("Envíos") proporcionada por usted a nosotros es no confidencial y se convertirá en nuestra única propiedad. Nosotros poseeremos los derechos exclusivos, incluidos todos los derechos de propiedad intelectual, y tendremos derecho al uso y difusión irrestricto de estos Envíos para cualquier propósito lícito, comercial o de otro tipo, sin reconocimiento ni compensación para usted. Por la presente, usted renuncia a todos los derechos morales sobre dichos Envíos y garantiza que estos Envíos son originales de su parte o que tiene el derecho de enviarlos. Usted acepta que no habrá recurso en nuestra contra por cualquier infracción o apropiación indebida de cualquier derecho propietario sobre sus Envíos.',
          thirdPartyTitle: "14. SITIOS WEB Y CONTENIDO DE TERCEROS",
          thirdPartyDesc:
            'El Sitio puede contener (o puede que se le envíen a través del Sitio) enlaces a otros sitios web ("Sitios Web de Terceros"), así como artículos, fotografías, textos, gráficos, imágenes, diseños, música, sonidos, videos, información, aplicaciones, software y otros contenidos o elementos que pertenecen o provienen de terceros ("Contenido de Terceros"). Dichos Sitios Web de Terceros y Contenido de Terceros no son investigados, monitoreados ni revisados por nosotros en cuanto a precisión, adecuación o integridad, y no somos responsables por ningún Sitio Web de Terceros al que se acceda a través del Sitio o cualquier Contenido de Terceros publicado, disponible a través o instalado desde el Sitio, incluyendo el contenido, precisión, ofensas, opiniones, confiabilidad, prácticas de privacidad u otras políticas de los Sitios Web de Terceros o del Contenido de Terceros. La inclusión de, el enlace a o la autorización del uso o instalación de cualquier Sitio Web de Terceros o Contenido de Terceros no implica nuestra aprobación o respaldo de los mismos. Si decide salir del Sitio y acceder a los Sitios Web de Terceros o usar o instalar cualquier Contenido de Terceros, lo hace bajo su propio riesgo, y debe tener en cuenta que estos Términos de Uso ya no rigen. Debe revisar los términos y políticas aplicables, incluyendo las prácticas de privacidad y recopilación de datos, de cualquier sitio web al que navegue desde el Sitio o en relación con cualquier aplicación que use o instale desde el Sitio. Cualquier compra que realice a través de Sitios Web de Terceros será a través de otros sitios web y de otras compañías, y no asumimos ninguna responsabilidad con respecto a dichas compras, las cuales son exclusivamente entre usted y el tercero correspondiente. Usted acepta y reconoce que no respaldamos los productos o servicios ofrecidos en los Sitios Web de Terceros y nos exime de cualquier daño causado por su compra de dichos productos o servicios. Además, nos exime de cualquier pérdida o daño que sufra relacionado o que resulte de cualquier forma del Contenido de Terceros o de cualquier contacto con los Sitios Web de Terceros.',
          usGovRightsTitle: "15. DERECHOS DEL GOBIERNO DE EE. UU.",
          usGovRightsDesc:
            'Nuestros servicios son "artículos comerciales" según se define en el Reglamento de Adquisiciones Federales (“FAR”) 2.101. Si nuestros servicios son adquiridos por o en nombre de cualquier agencia fuera del Departamento de Defensa (“DOD”), nuestros servicios están sujetos a los términos de estos Términos de Uso de acuerdo con FAR 12.212 (para software informático) y FAR 12.211 (para datos técnicos). Si nuestros servicios son adquiridos por o en nombre de cualquier agencia dentro del Departamento de Defensa, nuestros servicios están sujetos a los términos de estos Términos de Uso de acuerdo con el Reglamento de Adquisiciones Federales de Defensa (“DFARS”) 227.7202‑3. Además, DFARS 252.227‑7015 se aplica a los datos técnicos adquiridos por el DOD. Esta cláusula de Derechos del Gobierno de EE. UU. reemplaza y sustituye cualquier otro FAR, DFARS o cláusula o disposición que aborde los derechos del gobierno sobre software informático o datos técnicos bajo estos Términos de Uso.',
          siteManagementTitle: "16. GESTIÓN DEL SITIO",
          siteManagementDesc:
            "Nos reservamos el derecho, pero no la obligación, de: (1) monitorear el Sitio para detectar violaciones de estos Términos de Uso; (2) tomar las medidas legales apropiadas contra cualquier persona que, a nuestra sola discreción, viole la ley o estos Términos de Uso, incluyendo, sin limitación, informar a las autoridades policiales de dicho usuario; (3) a nuestra sola discreción y sin limitación, rechazar, restringir el acceso a, limitar la disponibilidad de, o deshabilitar (en la medida en que sea tecnológicamente posible) cualquier de sus Contribuciones o cualquier parte de las mismas; (4) a nuestra sola discreción y sin limitación, notificación o responsabilidad, eliminar del Sitio o deshabilitar de otra manera todos los archivos y contenidos que sean excesivos en tamaño o que de alguna manera sean una carga para nuestros sistemas; y (5) gestionar el Sitio de otra manera de una forma diseñada para proteger nuestros derechos y propiedad y facilitar el funcionamiento adecuado del Sitio.",
          termAndTerminationTitle: "17. DURACIÓN Y TERMINACIÓN",
          termAndTerminationDesc:
            "Estos Términos de Uso permanecerán en pleno vigor y efecto mientras utilice el Sitio. SIN LIMITAR CUALQUIER OTRA DISPOSICIÓN DE ESTOS TÉRMINOS DE USO, NOS RESERVAMOS EL DERECHO DE, A NUESTRA ENTERA DISCRECIÓN Y SIN AVISO O RESPONSABILIDAD, DENEGAR EL ACCESO Y EL USO DEL SITIO (INCLUYENDO BLOQUEAR CIERTAS DIRECCIONES IP), A CUALQUIER PERSONA POR CUALQUIER RAZÓN O SIN RAZÓN ALGUNA, INCLUYENDO SIN LIMITACIÓN, POR INCUMPLIMIENTO DE CUALQUIER DECLARACIÓN, GARANTÍA O COMPROMISO CONTENIDO EN ESTOS TÉRMINOS DE USO O DE CUALQUIER LEY O REGULACIÓN APLICABLE. PODEMOS TERMINAR SU USO O PARTICIPACIÓN EN EL SITIO O ELIMINAR SU CUENTA Y CUALQUIER CONTENIDO O INFORMACIÓN QUE USTED HAYA PUBLICADO EN CUALQUIER MOMENTO, SIN PREVIO AVISO, A NUESTRA ENTERA DISCRECIÓN. Si terminamos o suspendemos su cuenta por cualquier motivo, se le prohíbe registrarse y crear una nueva cuenta bajo su nombre, un nombre falso o prestado, o el nombre de un tercero, incluso si está actuando en nombre de dicho tercero. Además de terminar o suspender su cuenta, nos reservamos el derecho de tomar las medidas legales apropiadas, incluyendo, sin limitación, perseguir la reparación civil, penal e injuntiva.",

          modificationsTitle: "18. MODIFICACIONES E INTERRUPCIONES",
          modificationsDesc:
            "Nos reservamos el derecho de cambiar, modificar o eliminar el contenido del Sitio en cualquier momento y por cualquier motivo a nuestra entera discreción sin previo aviso. Sin embargo, no tenemos la obligación de actualizar ninguna información en nuestro Sitio. También nos reservamos el derecho de modificar o descontinuar todo o parte del Sitio sin previo aviso en cualquier momento. No seremos responsables ante usted ni ante ningún tercero por ninguna modificación, cambio de precio, suspensión o interrupción del Sitio. No podemos garantizar que el Sitio estará disponible en todo momento. Podemos experimentar problemas de hardware, software u otros, o necesitar realizar tareas de mantenimiento relacionadas con el Sitio, lo que resulta en interrupciones, demoras o errores. Nos reservamos el derecho de cambiar, revisar, actualizar, suspender, descontinuar o modificar el Sitio en cualquier momento y por cualquier motivo sin previo aviso. Usted acepta que no tenemos ninguna responsabilidad por cualquier pérdida, daño o inconveniente causado por su incapacidad de acceder o usar el Sitio durante cualquier tiempo de inactividad o interrupción del Sitio. Nada en estos Términos de uso se interpretará como una obligación de mantener y apoyar el Sitio o de proporcionar correcciones, actualizaciones o lanzamientos en relación con este.",
          governingLawTitle: "19. LEY APLICABLE",
          governingLawDesc:
            "Estos Términos se regirán y definirán de acuerdo con las leyes aplicables a las plataformas digitales descentralizadas. La jurisdicción para resolver cualquier disputa será acordada mutuamente por las partes involucradas.",
          disputeResolutionTitle: "20. RESOLUCIÓN DE DISPUTAS",
          disputeResolutionDesc:
            "Usted acepta someter irrevocablemente todas las disputas relacionadas con estos Términos o la relación legal establecida por este Acuerdo a una jurisdicción acordada mutuamente. DogWifTools se reserva el derecho de iniciar procedimientos en los tribunales del país donde usted reside o, si estos Términos se acuerdan en el curso de su comercio o profesión, en el estado de su principal lugar de negocios.",
          correctionsTitle: "21. CORRECCIONES",
          correctionsDesc:
            "Puede haber información en el Sitio que contenga errores tipográficos, inexactitudes u omisiones, incluidas descripciones, precios, disponibilidad y varias otras informaciones. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, así como de cambiar o actualizar la información en el Sitio en cualquier momento, sin previo aviso.",

          disclaimerTitle: "22. DESCARGO DE RESPONSABILIDAD",
          disclaimerDesc:
            "EL SITIO SE PROPORCIONA TAL CUAL Y SEGÚN DISPONIBILIDAD. USTED ACEPTA QUE EL USO DEL SITIO Y NUESTROS SERVICIOS SERÁ BAJO SU PROPIO RIESGO. EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, RENUNCIAMOS A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, EN RELACIÓN CON EL SITIO Y SU USO DEL MISMO, INCLUYENDO, SIN LIMITACIÓN, LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. NO HACEMOS GARANTÍAS NI REPRESENTACIONES SOBRE LA EXACTITUD O INTEGRIDAD DEL CONTENIDO DEL SITIO O EL CONTENIDO DE CUALQUIER SITIO WEB VINCULADO AL SITIO Y NO ASUMIREMOS NINGUNA RESPONSABILIDAD POR CUALQUIER (1) ERRORES, EQUIVOCACIONES O INEXACTITUDES EN EL CONTENIDO Y LOS MATERIALES, (2) LESIONES PERSONALES O DAÑOS A LA PROPIEDAD, DE CUALQUIER NATURALEZA, RESULTANTES DE SU ACCESO Y USO DEL SITIO, (3) CUALQUIER ACCESO NO AUTORIZADO O USO DE NUESTROS SERVIDORES SEGUROS Y/O CUALQUIER INFORMACIÓN PERSONAL Y/O FINANCIERA ALMACENADA EN LOS MISMOS, (4) CUALQUIER INTERRUPCIÓN O CESE DE LA TRANSMISIÓN HACIA O DESDE EL SITIO, (5) CUALQUIER BUG, VIRUS, CABALLOS DE TROYA O SIMILARES QUE PUEDAN SER TRANSMITIDOS AL O A TRAVÉS DEL SITIO POR CUALQUIER TERCERO, Y/O (6) CUALQUIER ERROR U OMISIÓN EN CUALQUIER CONTENIDO Y MATERIALES O POR CUALQUIER PÉRDIDA O DAÑO DE CUALQUIER TIPO INCURRIDO COMO RESULTADO DEL USO DE CUALQUIER CONTENIDO PUBLICADO, TRANSMITIDO O DISPONIBLE DE OTRO MODO A TRAVÉS DEL SITIO. NO GARANTIZAMOS, AVALAMOS, GARANTIZAMOS NI ASUMIMOS RESPONSABILIDAD POR NINGÚN PRODUCTO O SERVICIO ANUNCIADO U OFRECIDO POR UN TERCERO A TRAVÉS DEL SITIO, CUALQUIER SITIO WEB HIPERVINCULADO O CUALQUIER SITIO WEB O APLICACIÓN MÓVIL PRESENTADO EN CUALQUIER BANNER U OTRO ANUNCIO, Y NO SEREMOS PARTE NI DE NINGUNA MANERA RESPONSABLE DE MONITOREAR CUALQUIER TRANSACCIÓN ENTRE USTED Y CUALQUIER PROVEEDOR DE TERCEROS DE PRODUCTOS O SERVICIOS. COMO CON LA COMPRA DE UN PRODUCTO O SERVICIO A TRAVÉS DE CUALQUIER MEDIO O EN CUALQUIER ENTORNO, DEBE USAR SU MEJOR JUICIO Y ACTUAR CON PRECAUCIÓN DONDE SEA APROPIADO.",
          limitationsOfLiabilityTitle: "23. LIMITACIONES DE RESPONSABILIDAD",
          limitationsOfLiabilityDesc:
            "EN NINGÚN CASO NOSOTROS O NUESTROS DIRECTORES, EMPLEADOS O AGENTES SEREMOS RESPONSABLES ANTE USTED O CUALQUIER TERCERO POR DAÑOS DIRECTOS, INDIRECTOS, CONSECUENTES, EJEMPLARES, INCIDENTALES, ESPECIALES O PUNITIVOS, INCLUYENDO PÉRDIDA DE BENEFICIOS, PÉRDIDA DE INGRESOS, PÉRDIDA DE DATOS U OTROS DAÑOS QUE SURJAN DE SU USO DEL SITIO, INCLUSO SI HEMOS SIDO ADVERTIDOS DE LA POSIBILIDAD DE TALES DAÑOS. A PESAR DE CUALQUIER COSA EN CONTRARIO CONTENIDA EN EL PRESENTE, NUESTRA RESPONSABILIDAD HACIA USTED POR CUALQUIER CAUSA Y SIN IMPORTAR LA FORMA DE LA ACCIÓN, SIEMPRE ESTARÁ LIMITADA A LA CANTIDAD PAGADA, SI LA HUBIERA, POR USTED A NOSOTROS DURANTE EL PERÍODO DE UN (1) MES ANTERIOR A CUALQUIER CAUSA QUE GENERE ACCIÓN. CIERTAS LEYES ESTATALES DE LOS EE.UU. Y LEYES INTERNACIONALES NO PERMITEN LIMITACIONES EN GARANTÍAS IMPLÍCITAS O LA EXCLUSIÓN O LIMITACIÓN DE CIERTOS DAÑOS. SI ESTAS LEYES SE APLICAN A USTED, ALGUNAS O TODAS LAS EXENCIONES DE RESPONSABILIDAD O LIMITACIONES ANTERIORES PUEDEN NO APLICARSE A USTED, Y USTED PUEDE TENER DERECHOS ADICIONALES.",
          indemnificationTitle: "24. INDEMNIZACIÓN",
          indemnificationDesc:
            "Usted acepta defender, indemnizar y eximirnos de responsabilidad, incluidas nuestras subsidiarias, afiliadas y todos nuestros respectivos funcionarios, agentes, socios y empleados, frente a cualquier pérdida, daño, responsabilidad, reclamo o demanda, incluidos los honorarios y gastos razonables de abogados, realizados por cualquier tercero debido a o que surjan de: (1) el uso del Sitio; (2) el incumplimiento de estos Términos de Uso; (3) cualquier incumplimiento de sus declaraciones y garantías establecidas en estos Términos de Uso; (4) su violación de los derechos de un tercero, incluidos, entre otros, los derechos de propiedad intelectual; o (5) cualquier acto dañino manifiesto hacia cualquier otro usuario del Sitio con quien se haya conectado a través del Sitio. No obstante lo anterior, nos reservamos el derecho, a su cargo, de asumir la defensa y el control exclusivos de cualquier asunto por el cual usted esté obligado a indemnizarnos, y usted acepta cooperar, a su cargo, con nuestra defensa de tales reclamos. Haremos esfuerzos razonables para notificarle sobre cualquier reclamo, acción o procedimiento sujeto a esta indemnización al tener conocimiento de ello.",
          userDataTitle: "25. DATOS DEL USUARIO",
          userDataDesc:
            "Mantendremos ciertos datos que usted transmite al Sitio con el propósito de gestionar el rendimiento del Sitio, así como datos relacionados con su uso del Sitio. Aunque realizamos copias de seguridad rutinarias de los datos, usted es el único responsable de todos los datos que transmite o que están relacionados con cualquier actividad que haya realizado utilizando el Sitio. Usted acepta que no tendremos ninguna responsabilidad hacia usted por cualquier pérdida o corrupción de dichos datos, y por la presente renuncia a cualquier derecho de acción contra nosotros derivado de dicha pérdida o corrupción de esos datos.",
          electronicCommunicationsTitle:
            "26. COMUNICACIONES ELECTRÓNICAS, TRANSACCIONES Y FIRMAS",
          electronicCommunicationsDesc:
            "Visitar el Sitio, enviarnos correos electrónicos y completar formularios en línea constituyen comunicaciones electrónicas. Usted acepta recibir comunicaciones electrónicas, y está de acuerdo en que todos los acuerdos, avisos, divulgaciones y otras comunicaciones que le proporcionemos electrónicamente, a través del correo electrónico y en el Sitio, cumplen con cualquier requisito legal de que dicha comunicación sea por escrito. POR LA PRESENTE, USTED ACEPTA EL USO DE FIRMAS ELECTRÓNICAS, CONTRATOS, PEDIDOS Y OTROS REGISTROS, Y LA ENTREGA ELECTRÓNICA DE AVISOS, POLÍTICAS Y REGISTROS DE TRANSACCIONES INICIADAS O COMPLETADAS POR NOSOTROS O A TRAVÉS DEL SITIO. Por la presente, renuncia a cualquier derecho o requisito bajo cualquier estatuto, regulación, regla, ordenanza u otra ley en cualquier jurisdicción que requiera una firma original o la entrega o conservación de registros no electrónicos, o pagos o la concesión de créditos por medios distintos a los electrónicos.",

          californiaUsersTitle: "27. USUARIOS Y RESIDENTES DE CALIFORNIA",
          californiaUsersDesc:
            "Si alguna queja con nosotros no se resuelve satisfactoriamente, puede ponerse en contacto con la Unidad de Asistencia de Quejas de la División de Servicios al Consumidor del Departamento de Asuntos del Consumidor de California por escrito en 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 o por teléfono al (800) 952-5210 o (916) 445-1254.",
          miscellaneousTitle: "28. DIVERSOS",
          miscellaneousDesc:
            "Estos Términos de Uso y las políticas o reglas operativas publicadas por nosotros en el Sitio o en relación con el Sitio constituyen el acuerdo y la comprensión total entre usted y nosotros. Nuestra falta de ejercicio o cumplimiento de cualquier derecho o disposición de estos Términos de Uso no operará como una renuncia de dicho derecho o disposición. Estos Términos de Uso operan en la medida máxima permitida por la ley. Podemos ceder cualquiera o todos nuestros derechos y obligaciones a otros en cualquier momento. No seremos responsables ni tendremos ninguna obligación por cualquier pérdida, daño, retraso o falta de acción causada por cualquier causa fuera de nuestro control razonable. Si alguna disposición o parte de una disposición de estos Términos de Uso se determina como ilegal, nula o inaplicable, esa disposición o parte de la disposición se considerará separable de estos Términos de Uso y no afectará la validez y aplicabilidad de cualquier disposición restante. No se crea ninguna relación de empresa conjunta, sociedad, empleo o agencia entre usted y nosotros como resultado de estos Términos de Uso o el uso del Sitio. Usted acepta que estos Términos de Uso no serán interpretados en su contra por el hecho de haberlos redactado. Por la presente, renuncia a cualquier y todas las defensas que pueda tener basadas en la forma electrónica de estos Términos de Uso y la falta de firma de las partes para ejecutar estos Términos de Uso. Se prohíbe estrictamente la copia no autorizada, la edición y el intercambio de cualquier archivo, por cualquier medio.",

          contactTitle: "29. CONTÁCTANOS",
          contactDesc:
            "Para resolver una queja relacionada con el Sitio o para recibir más información sobre el uso del Sitio, comuníquese con nosotros en:",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue",
          hello: "Bonjour",
          shop: "Boutique",
          contact: "Contact",
          reviews: "Avis",
          faq: "FAQ",
          terms: "Termes",
          language: "Langue",
          cart: "Panier",
          footer_copyright: "Copyright 2024, BullRunner Tous droits réservés.",
          footer_shop: "Boutique",
          footer_about: "À propos",
          footer_contact: "Contact",
          footer_terms: "Termes",
          footer_products: "Produits",
          footer_collections: "Collections",
          shop: "Boutique",
          product_count: "1 produit",
          search_placeholder: "Rechercher un produit...",
          sort_by: "Trier par:",
          default: "Par défaut",
          low_to_high: "Prix: Bas à Haut",
          high_to_low: "Prix: Haut à Bas",
          newest: "Le plus récent",
          add_to_cart: "Ajouter au Panier",
          price: "Prix",
          currency: "SOL",
          product_name: "Licence DogWifTools",
          contact_title: "Contactez-nous",
          contact_subtitle:
            "Vous avez une question ou besoin d'aide? Contactez-nous. Nous serions ravis de vous entendre.",
          contact_form_title: "Titre",
          contact_form_email: "Email",
          contact_form_invoice_id: "ID de facture (champ facultatif)",
          contact_form_message: "Message",
          contact_form_placeholder_title:
            "Ex : Termes et conditions pour dropshipper",
          contact_form_placeholder_email: "exemple@gmail.com",
          contact_form_placeholder_invoice_id:
            "Entrez un ID de facture de 12 chiffres",
          contact_form_placeholder_message: "Que souhaitez-vous demander?",
          contact_form_button: "Envoyer",
          faq_title: "FAQ",
          faq_subtitle: "Questions fréquemment posées",
          faq_q1:
            "Comment puis-je contacter le support après avoir acheté le produit ?",
          faq_a1:
            "Pour recevoir de l'aide, veuillez rejoindre notre serveur Discord et ouvrir un ticket de support.",
          faq_q2: "Puis-je effectuer des paiements avec ma méthode préférée ?",
          faq_a2:
            "Actuellement, nous ne supportons que Solana pour les paiements. Si vous souhaitez utiliser une autre cryptomonnaie, veuillez ouvrir un ticket de support sur notre serveur Discord.",
          faq_q3: "Est-il sûr de faire des paiements ?",
          faq_a3:
            "Oui, nous prenons la sécurité très au sérieux. Nous utilisons des mesures avancées de prévention de fraude pour protéger contre les transactions frauduleuses et stockons en toute sécurité toutes les informations de paiement.",
          faq_q4: "Comment effectuer un achat ?",
          faq_a4:
            "Effectuer un achat est simple. Il suffit de parcourir les produits disponibles et d'ajouter ceux que vous souhaitez acheter à votre panier. Lorsque vous êtes prêt à passer à la caisse, vous serez invité à entrer vos informations de paiement et à compléter la transaction.",
          faq_q5: "Quelle est la politique de retour pour les achats ?",
          faq_a5: "Toutes les ventes sont finales et non remboursables.",
          checkout_title: "Caisse",
          checkout_items: "{{count}} article dans votre panier",
          order_summary: "Résumé de la commande",
          coupon_code: "Entrez le code de réduction",
          subtotal: "Sous-total",
          total: "Total",
          continue: "Continuer",
          sol_currency: "SOL",
          back_to_shop: "Retour à la boutique",
          bull_runner: "Bull Runner",
          dogwiftools_license: "Licence DogWifTools",
          price: "15.00 SOL",
          quantity: "Quantité 1",
          subtotal: "Sous-total",
          total: "Total",
          invoice_taking: "Prise de facture",
          how_to_pay: "Comment souhaitez-vous payer",
          cryptocurrencies: "Cryptomonnaies",
          send_crypto:
            "Envoyez une transaction de cryptomonnaie depuis votre portefeuille",
          update_invoice: "Mettre à jour la facture",
          change_gateway: "Changer passerelle",
          awaiting_payment: "En attente de paiement",
          total_price: "Prix total",
          exchange_rate: "Taux de change",
          amount: "Montant",
          created: "Créé",
          payWithQR: "Payer avec le code QR",
          copyPaymentDetails: "Copier les détails du paiement",
          scanQRCode:
            "Scannez le code QR avec votre application de cryptomonnaie préférée pour envoyer le paiement.",
          solanaSupport:
            "Nous ne supportons que les transactions crypto via la chaîne SOL.",
          otherChainsWarning:
            "Les transactions envoyées sur d'autres chaînes ne seront pas détectées et entraîneront une perte de crypto.",
          amount: "Montant",
          solanaAddress: "Adresse Solana",
          ourProducts: "Nos Produits",
          viewAllProducts: "Voir Tous les Produits",
          productAlt: "Licence DogWifTools",
          addToCart: "Ajouter au Panier",
          productName: "Licence DogWifTools",
          reviews: "Avis",
          viewAllReviews: "Voir Tous les Avis",
          getInTouch: "Nous Contacter",
          contactInfo:
            "Vous avez une question ou avez besoin d'aide ? Contactez-nous. Nous serions ravis de vous entendre.",
          contactUs: "Contactez-nous",
          // Product Info Component
          productTitle: "Licence DogWifTools",
          productPrice: "15.06963 SOL",
          totalPrice: "Total:",
          quantitySelector: "1",
          addToCart: "Ajouter au panier",
          descriptionToggle: "Description",
          viewMore: "Voir plus",
          reviews: "Avis",

          // Description Section
          descriptionTitle: "Pump.fun Volume + Bundler + Bump It + Comment Bot",
          volumeModes: "Modes de volume",
          bundler: "Groupement",
          comments: "Commentaires",
          bumpIt: "Bump It",
          genVolume: "Volume Gen",
          autoVolume: "Volume Automatique",
          humanMode: "Mode Humain",
          microBuy: "Achat Micro",
          sellAll: "Vendre Tout",
          singleWalletSell: "Vente de portefeuille unique",
          safeMode: "Mode Sûr",
          experimentalMode: "Mode Expérimental",
          dumpAll: "Vendre Tout",
          dumpAllPercent: "Vendre Tout %",
          delaySell: "Vente Retardée",
          delaySellPercent: "Vente Retardée %",
          customCommenter: "Commentateur Personnalisé",
          customBumpIt: "Bump It Personnalisé (définir utilisateur)",

          // Review Texts
          verifiedBuyer: "Acheteur Vérifié",
          ratingText: "Évaluation",
          reviewText: "Texte de l'avis",
          reviewDate: "Date",

          termsTitle: "Termes et Conditions",
          termsDescription:
            "Veuillez lire attentivement nos termes et conditions avant d'utiliser notre site web ou nos services.",
          termsOfService: "Conditions d'Utilisation",
          agreementToTermsTitle: "ACCORD AUX CONDITIONS",
          agreementToTermsText: `Ces Conditions d'Utilisation constituent un accord juridiquement contraignant entre vous, que ce soit en votre nom ou au nom d'une entité (“vous”) et DogWifTools, opérant sous le nom de ("DogWifTools," "nous," "notre"), concernant votre accès et votre utilisation du site web ainsi que de tout autre média, chaîne de médias, site web mobile ou application mobile associée, site web de bureau ou application de bureau liée, ou d'une autre manière connectée à celui-ci (collectivement, le "Site"). DogWifTools agit conformément aux lois et réglementations applicables. Vous acceptez qu'en accédant au Site, vous ayez lu, compris et accepté d'être lié par tous ces Termes d'Utilisation. SI VOUS N'ÊTES PAS D'ACCORD AVEC TOUS CES TERMES D'UTILISATION, VOUS ÊTES EXPRESSÉMENT INTERDIT D'UTILISER LE SITE ET VOUS DEVEZ CESSER IMMÉDIATEMENT L'UTILISATION.`,
          supplementalTermsText: `Les conditions et documents supplémentaires qui peuvent être publiés sur le Site de temps à autre sont expressément incorporés par référence. Nous nous réservons le droit, à notre seule discrétion, d'apporter des modifications ou des changements à ces Termes d'Utilisation de temps à autre. Nous vous informerons de tout changement en mettant à jour la date de « Dernière mise à jour » de ces Termes d'Utilisation, et vous renoncez à tout droit de recevoir un avis spécifique de chaque changement. Veuillez vous assurer de vérifier les Termes applicables chaque fois que vous utilisez notre Site afin de comprendre quels Termes s'appliquent. Vous serez soumis à, et considéré comme ayant été informé et accepté, les changements apportés aux Termes d'Utilisation révisés par votre utilisation continue du Site après la date à laquelle ces Termes d'Utilisation révisés sont publiés.`,
          jurisdictionText: `Les informations fournies sur le Site ne sont pas destinées à être distribuées ou utilisées par toute personne ou entité dans une juridiction ou un pays où une telle distribution ou utilisation serait contraire à la loi ou à la réglementation, ou qui nous soumettrait à toute exigence d'enregistrement dans cette juridiction ou ce pays. En conséquence, les personnes qui choisissent d'accéder au Site depuis d'autres endroits le font de leur propre initiative et sont seules responsables du respect des lois locales, si et dans la mesure où les lois locales sont applicables.`,
          complianceText: `Le Site n'est pas conçu pour se conformer aux réglementations spécifiques à l'industrie (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), donc si vos interactions seraient soumises à de telles lois, vous ne pouvez pas utiliser ce Site. Vous ne pouvez pas utiliser le Site de manière à violer la Gramm-Leach-Bliley Act (GLBA).`,
          ageRequirementText: `Le Site est destiné aux utilisateurs âgés d'au moins 18 ans. Les personnes de moins de 18 ans ne sont pas autorisées à utiliser ou à s'inscrire sur le Site.`,
          intellectualPropertyTitle: "Droits de Propriété Intellectuelle",
          intellectualPropertyText: `Sauf indication contraire, le Site est notre propriété exclusive et tout le code source, les bases de données, la fonctionnalité, les logiciels, les conceptions de sites web, l'audio, la vidéo, le texte, les photographies et les graphiques sur le Site (collectivement, le “Contenu”) et les marques, marques de service et logos qui y figurent (les “Marques”) sont la propriété de ou contrôlées par nous ou sous licence de notre part, et sont protégées par les lois sur les droits d'auteur et les marques déposées ainsi que par diverses autres lois de propriété intellectuelle et de concurrence déloyale des États-Unis, les lois internationales sur le droit d'auteur et les conventions internationales. Le Contenu et les Marques sont fournis sur le Site “EN L'ÉTAT” à des fins d'information et d'utilisation personnelle uniquement. Sauf disposition expresse dans ces Conditions d'Utilisation, aucune partie du Site et aucun Contenu ou Marque ne peut être copié, reproduit, agrégé, republier, téléchargé, affiché publiquement, codé, traduit, transmis, distribué, vendu, licencié ou autrement exploité à des fins commerciales sans notre autorisation écrite préalable et expresse.`,
          licenseText: `À condition que vous soyez éligible pour utiliser le Site, vous bénéficiez d'une licence limitée pour accéder et utiliser le Site et pour télécharger ou imprimer une copie de toute partie du Contenu auquel vous avez correctement accédé, uniquement pour votre usage personnel et non commercial. Nous nous réservons tous les droits non expressément accordés à vous dans et sur le Site, le Contenu et les Marques.`,
          userRepresentationsTitle: "3. REPRÉSENTATIONS DE L'UTILISATEUR",
          userRepresentationsDesc:
            "En utilisant le Site, vous déclarez et garantissez que : (1) toutes les informations d'enregistrement que vous soumettez seront vraies, exactes, actuelles et complètes ; (2) vous maintiendrez l'exactitude de ces informations et mettrez à jour rapidement ces informations d'enregistrement si nécessaire ; (3) vous avez la capacité juridique et vous acceptez de vous conformer à ces Conditions d'Utilisation ; (4) vous n'êtes pas mineur dans la juridiction dans laquelle vous résidez ; (5) vous n'accéderez pas au Site par des moyens automatisés ou non humains, que ce soit par un bot, un script ou autrement ; (6) vous n'utiliserez pas le Site à des fins illégales ou non autorisées ; et (7) votre utilisation du Site ne violera aucune loi ou réglementation applicable.",
          userInformationInvalid:
            "Si vous fournissez des informations fausses, inexactes, obsolètes ou incomplètes, nous avons le droit de suspendre ou de résilier votre compte et de refuser toute utilisation actuelle ou future du Site (ou de toute partie de celui-ci).",
          userRegistrationTitle: "4. INSCRIPTION DE L'UTILISATEUR",
          userRegistrationDesc:
            "Il se peut que vous deviez vous inscrire sur le Site. Vous acceptez de garder votre mot de passe confidentiel et serez responsable de toute utilisation de votre compte et de votre mot de passe. Nous nous réservons le droit de supprimer, revendiquer ou modifier un nom d'utilisateur que vous sélectionnez si nous déterminons, à notre seule discrétion, que ce nom d'utilisateur est inapproprié, obscène ou autrement répréhensible.",
          feesAndPaymentTitle: "5. FRAIS ET PAIEMENT",
          feesAndPaymentDesc: "Nous acceptons la forme de paiement suivante :",
          cryptocurrencyTitleFr: "Cryptomonnaie",
          cryptocurrencyDescFr:
            "Il se peut que vous soyez tenu d'acheter ou de payer des frais pour accéder à certains de nos services. Vous acceptez de fournir des informations d'achat et de compte actuelles, complètes et exactes pour tous les achats effectués via le Site. Vous acceptez également de mettre à jour rapidement les informations de votre compte et de paiement, y compris l'adresse e-mail et le mode de paiement, afin que nous puissions compléter vos transactions et vous contacter si nécessaire. Nous vous facturons via un compte de facturation en ligne pour les achats effectués via le Site. La taxe de vente sera ajoutée au prix des achats, selon ce que nous jugeons nécessaire. Nous pouvons modifier les prix à tout moment. Tous les paiements doivent être effectués en cryptomonnaie. Vous acceptez de payer tous les frais ou charges au prix en vigueur pour vos achats, et vous nous autorisez à facturer votre fournisseur de paiement choisi pour ces montants lors de votre achat. Si votre achat est soumis à des frais récurrents, vous consentez à ce que nous débitions votre mode de paiement de manière récurrente sans nécessiter votre approbation préalable pour chaque charge récurrente, jusqu'à ce que vous nous informiez de votre annulation.",
          pricingErrorsDesc:
            "Nous nous réservons le droit de corriger toute erreur ou inexactitude de prix, même si nous avons déjà demandé ou reçu un paiement. Nous nous réservons également le droit de refuser toute commande passée via le Site.",
          cancellationTitle: "6. ANNULATION",
          cancellationDesc:
            "Tous les achats sont non remboursables. Vous pouvez annuler votre abonnement à tout moment en vous connectant à votre compte ou en nous contactant en utilisant les informations de contact ci-dessous. Votre annulation prendra effet à la fin de la période payée en cours.",
          contactEmailTitle:
            "Si vous n'êtes pas satisfait de nos services, veuillez nous envoyer un e-mail à",
          softwareTitle: "7. LOGICIEL",
          softwareDesc:
            "Nous pouvons inclure un logiciel à utiliser en lien avec nos services. Si ce logiciel est accompagné d'un contrat de licence utilisateur final (« EULA »), les termes de l'EULA régiront votre utilisation du logiciel. Si le logiciel n'est pas accompagné d'une EULA, nous vous accordons une licence non exclusive, révocable, personnelle et non transférable pour utiliser ce logiciel uniquement en relation avec nos services et conformément à ces Conditions d'Utilisation. Tout logiciel et toute documentation connexe sont fournis « en l'état », sans garantie d'aucune sorte, expresse ou implicite, y compris, sans s'y limiter, les garanties implicites de qualité marchande, d'adaptation à un usage particulier ou de non-contrefaçon. Vous acceptez tous les risques liés à l'utilisation ou à la performance de tout logiciel. Vous ne pouvez pas reproduire ou redistribuer un logiciel sauf conformément à l'EULA ou à ces Conditions d'Utilisation.",
          prohibitedActivitiesTitle: "8. ACTIVITÉS INTERDITES",
          prohibitedActivitiesDesc:
            "Vous ne pouvez pas accéder au Site ou l'utiliser à d'autres fins que celles pour lesquelles nous mettons le Site à votre disposition. Le Site ne peut pas être utilisé en lien avec des initiatives commerciales, sauf celles qui sont spécifiquement approuvées ou autorisées par nous. En tant qu'utilisateur du Site, vous acceptez de ne pas : Récupérer systématiquement des données ou d'autres contenus du Site pour créer ou compiler, directement ou indirectement, une collection, une compilation, une base de données ou un annuaire sans notre autorisation écrite. Tromper, frauder ou induire en erreur nous et d'autres utilisateurs, en particulier dans toute tentative d'obtenir des informations sensibles sur des comptes, telles que des mots de passe d'utilisateur. Contourner, désactiver ou interférer d'une autre manière avec les fonctionnalités de sécurité du Site, y compris les fonctionnalités qui empêchent ou restreignent l'utilisation ou la copie de tout Contenu ou imposent des limitations sur l'utilisation du Site et/ou du Contenu qu'il contient. Diffamer, ternir ou autrement nuire, selon notre jugement, à nous et/ou au Site. Utiliser toute information obtenue à partir du Site afin de harceler, abuser ou nuire à une autre personne. Abuser de nos services de support ou soumettre de faux rapports d'abus ou de mauvaise conduite. Utiliser le Site d'une manière incompatible avec toute loi ou réglementation applicable. Participer à une utilisation non autorisée du Site en créant des cadres ou des liens vers celui-ci. Télécharger ou transmettre (ou tenter de télécharger ou transmettre) des virus, des chevaux de Troie ou d'autres matériels, y compris l'utilisation excessive de lettres majuscules et du spam (publication continue de texte répétitif), qui interfère avec l'utilisation ininterrompue du Site par toute partie ou qui modifie, altère, perturbe, altère ou interfère avec l'utilisation, les fonctionnalités, les opérations ou la maintenance du Site. Participer à une utilisation automatisée du système, comme l'utilisation de scripts pour envoyer des commentaires ou des messages, ou l'utilisation d'outils de collecte et d'extraction de données tels que le data mining, les robots ou d'autres outils similaires. Supprimer l'avis de droit d'auteur ou tout autre avis de propriété intellectuelle du Contenu. Tenter de se faire passer pour un autre utilisateur ou une autre personne ou utiliser le nom d'utilisateur d'un autre utilisateur. Télécharger ou transmettre (ou tenter de télécharger ou de transmettre) tout matériel agissant comme un mécanisme passif ou actif de collecte ou de transmission d'informations, y compris sans limitation, les formats graphiques d'échange d'images, les pixels 1×1, les web bugs, les cookies ou d'autres dispositifs similaires. Interférer, perturber ou créer une charge excessive sur le Site ou les réseaux ou services connectés au Site. Harceler, déranger, intimider ou menacer nos employés ou agents impliqués dans la fourniture de toute partie du Site. Tenter de contourner les mesures du Site visant à empêcher ou restreindre l'accès au Site ou à une partie de celui-ci. Copier ou adapter le logiciel du Site, y compris mais sans s'y limiter, Flash, PHP, HTML, JavaScript ou tout autre code. Sauf dans la mesure où la loi applicable le permet, déchiffrer, décompiler, désassembler ou effectuer une ingénierie inverse de tout logiciel faisant partie du Site. Sauf dans la mesure où cela résulte de l'utilisation normale d'un moteur de recherche ou d'un navigateur Internet, utiliser, lancer, développer ou distribuer un système automatisé, y compris sans limitation, toute araignée, robot, utilitaire de triche, scraper ou lecteur hors ligne qui accède au Site, ou utiliser ou lancer tout script non autorisé ou autre logiciel. Utiliser un agent d'achat ou un agent d'achat pour effectuer des achats sur le Site. Faire un usage non autorisé du Site, y compris la collecte de noms d'utilisateurs et/ou d'adresses e-mail d'utilisateurs par voie électronique ou autre dans le but d'envoyer des e-mails non sollicités, ou créer des comptes d'utilisateurs par des moyens automatisés ou sous de faux prétextes. Utiliser le Site dans le cadre d'un effort visant à concurrencer avec nous ou à utiliser autrement le Site et/ou le Contenu pour toute activité génératrice de revenus ou entreprise commerciale. Utiliser le Site pour annoncer ou proposer à la vente des biens et services.",
          userGeneratedContributionsTitle:
            "9. CONTRIBUTIONS GÉNÉRÉES PAR L'UTILISATEUR",
          userGeneratedContributionsDesc:
            "Le Site ne permet pas aux utilisateurs de soumettre ou publier du contenu. Nous pouvons vous offrir l'opportunité de créer, soumettre, publier, afficher, transmettre, exécuter, publier, distribuer ou diffuser du contenu et des matériaux à nous ou sur le Site, y compris mais sans s'y limiter du texte, des écrits, des vidéos, des audios, des photographies, des graphiques, des commentaires, des suggestions ou des informations personnelles ou d'autres matériels (collectivement, \"Contributions\"). Les Contributions peuvent être visibles par d'autres utilisateurs du Site et via des sites Web tiers. En tant que tel, toute Contribution que vous transmettez peut être traitée conformément à la Politique de Confidentialité du Site. Lorsque vous créez ou mettez à disposition toute Contribution, vous déclarez et garantissez que : La création, distribution, transmission, affichage public, ou performance, ainsi que l'accès, le téléchargement ou la copie de vos Contributions ne portent pas atteinte et ne porteront pas atteinte aux droits de propriété, y compris mais sans s'y limiter les droits d'auteur, brevets, marques, secrets commerciaux ou droits moraux de tout tiers. Vous êtes le créateur et propriétaire ou vous avez les licences, droits, consentements, libérations et autorisations nécessaires pour utiliser et autoriser notre utilisation des Contributions sur le Site, conformément à ces Conditions d'Utilisation. Vous avez le consentement écrit, la libération et/ou la permission de chaque personne identifiable dans vos Contributions pour utiliser son nom ou son image afin de permettre l'inclusion et l'utilisation de vos Contributions de la manière envisagée par le Site et ces Conditions d'Utilisation. Vos Contributions ne sont pas fausses, inexactes ou trompeuses. Vos Contributions ne sont pas de la publicité non sollicitée ou non autorisée, des matériaux promotionnels, des schémas pyramidaux, des chaînes de lettres, du spam, des envois massifs ou d'autres formes de sollicitation. Vos Contributions ne sont pas obscènes, lascives, dégoûtantes, violentes, harcelantes, diffamatoires, calomnieuses ou autrement répréhensibles (selon notre jugement). Vos Contributions ne ridiculisent, ne moquent, ne diffament, ne menacent ni n'abusent de personne. Vos Contributions ne sont pas utilisées pour harceler ni menacer (au sens juridique de ces termes) toute autre personne, ni pour promouvoir la violence contre une personne ou un groupe spécifique de personnes. Vos Contributions ne violent aucune loi, réglementation ou règle applicable. Vos Contributions ne violent pas les droits de confidentialité ou de publicité de tout tiers. Vos Contributions ne violent pas de lois relatives à la pornographie infantile, ni ne sont destinées à protéger la santé ou le bien-être des mineurs. Vos Contributions ne comprennent aucun commentaire offensant lié à la race, à l'origine nationale, au sexe, à la préférence sexuelle ou au handicap physique. Vos Contributions ne violent pas, ni ne renvoient à des matériels violant, aucune disposition de ces Conditions d'Utilisation ni aucune loi ou réglementation applicable. Toute utilisation du Site en violation de ce qui précède viole ces Conditions d'Utilisation et peut entraîner, entre autres, la résiliation ou la suspension de vos droits d'utilisation du Site.",
          contributionLicenseTitle: "10. LICENCE DE CONTRIBUTION",
          contributionLicenseDesc:
            "Vous et le Site convenez que nous pouvons accéder, stocker, traiter et utiliser toutes les informations et données personnelles que vous fournissez, conformément aux termes de la Politique de Confidentialité et à vos choix (y compris les paramètres). En soumettant des suggestions ou d'autres retours concernant le Site, vous acceptez que nous puissions utiliser et partager ces retours à toutes fins sans compensation pour vous. Nous ne revendiquons aucun droit de propriété sur vos Contributions. Vous conservez l'entière propriété de toutes vos Contributions ainsi que de tous les droits de propriété intellectuelle ou autres droits associés à vos Contributions. Nous ne sommes pas responsables des déclarations ou des représentations contenues dans vos Contributions fournies par vous dans n'importe quelle zone du Site. Vous êtes seul responsable de vos Contributions sur le Site et vous acceptez expressément de nous exonérer de toute responsabilité et de vous abstenir de toute action légale contre nous concernant vos Contributions.",
          guidelinesForReviewsTitle: "11. LIGNES DIRECTRICES POUR LES AVIS",
          guidelinesForReviewsDesc:
            "Nous pouvons vous fournir des espaces sur le Site pour laisser des avis ou des évaluations. Lorsque vous publiez un avis, vous devez respecter les critères suivants : (1) vous devez avoir une expérience directe avec la personne/l'entité faisant l'objet de l'avis ; (2) vos avis ne doivent pas contenir de jurons offensants, ni de langage abusif, raciste, offensant ou haineux ; (3) vos avis ne doivent pas contenir de références discriminatoires basées sur la religion, la race, le sexe, l'origine nationale, l'âge, l'état civil, l'orientation sexuelle ou le handicap ; (4) vos avis ne doivent pas contenir de références à des activités illégales ; (5) vous ne devez pas être affilié à des concurrents si vous publiez des avis négatifs ; (6) vous ne devez pas faire de conclusions sur la légalité des comportements ; (7) vous ne pouvez pas publier de déclarations fausses ou trompeuses ; et (8) vous ne pouvez pas organiser une campagne incitant les autres à publier des avis, qu'ils soient positifs ou négatifs.",
          socialMediaTitle: "12. RÉSEAUX SOCIAUX",
          socialMediaDesc:
            "Dans le cadre de la fonctionnalité du Site, vous pouvez lier votre compte à des comptes en ligne que vous possédez auprès de fournisseurs de services tiers (chaque compte ainsi lié étant un \"Compte Tiers\") en : (1) fournissant vos informations de connexion au Compte Tiers via le Site ; ou (2) en nous autorisant à accéder à votre Compte Tiers, comme le permettent les termes et conditions applicables régissant votre utilisation de chaque Compte Tiers. Vous déclarez et garantissez que vous êtes autorisé à divulguer vos informations de connexion au Compte Tiers et/ou à nous accorder un accès à votre Compte Tiers, sans enfreindre les termes et conditions régissant votre utilisation du Compte Tiers, et sans nous obliger à payer des frais ou à nous soumettre à des limitations d'utilisation imposées par le fournisseur de services tiers du Compte Tiers. En nous accordant l'accès à tout Compte Tiers, vous comprenez que (1) nous pouvons accéder, rendre disponible et stocker (si applicable) tout contenu que vous avez fourni et stocké dans votre Compte Tiers (le \"Contenu des Réseaux Sociaux\") afin qu'il soit disponible sur et via le Site via votre compte, y compris, mais sans s'y limiter, toute liste d'amis et (2) nous pouvons soumettre et recevoir de votre Compte Tiers des informations supplémentaires dans la mesure où cela vous est notifié lors de la liaison de votre compte avec le Compte Tiers. En fonction des Comptes Tiers que vous choisissez et sous réserve des paramètres de confidentialité que vous avez définis dans ces Comptes Tiers, des informations personnelles que vous publiez sur vos Comptes Tiers peuvent être disponibles sur et via votre compte sur le Site. Veuillez noter que si un Compte Tiers ou un service associé devient indisponible ou si notre accès à ce Compte Tiers est résilié par le fournisseur de services tiers, le Contenu des Réseaux Sociaux peut ne plus être disponible sur et via le Site. Vous aurez la possibilité de désactiver la connexion entre votre compte sur le Site et vos Comptes Tiers à tout moment. VEUILLEZ NOTER QUE VOTRE RELATION AVEC LES FOURNISSEURS DE SERVICES TIERS ASSOCIÉS À VOS COMPTES TIERS EST RÉGIE EXCLUSIVEMENT PAR VOTRE ACCORD(S) AVEC CES FOURNISSEURS DE SERVICES TIERS. Nous ne faisons aucun effort pour examiner le Contenu des Réseaux Sociaux à quelque fin que ce soit, y compris, mais sans s'y limiter, pour en vérifier l'exactitude, la légalité ou la non-infraction, et nous ne sommes pas responsables du Contenu des Réseaux Sociaux. Vous reconnaissez et acceptez que nous puissions accéder à votre carnet d'adresses associé à un Compte Tiers et à votre liste de contacts stockée sur votre appareil mobile ou tablette uniquement dans le but d'identifier et de vous informer de ceux de vos contacts qui se sont également inscrits pour utiliser le Site. Vous pouvez désactiver la connexion entre le Site et votre Compte Tiers en nous contactant à l'aide des informations de contact ci-dessous ou via les paramètres de votre compte (le cas échéant). Nous tenterons de supprimer toute information stockée sur nos serveurs qui a été obtenue par le biais de ce Compte Tiers, à l'exception du nom d'utilisateur et de la photo de profil qui deviennent associés à votre compte.",
          submissionsTitle: "13. SOUMISSIONS",
          submissionsDesc:
            "Vous reconnaissez et acceptez que toute question, commentaire, suggestion, idée, retour d'information ou autre information concernant le Site (\"Soumissions\") fournie par vous à notre attention soit non confidentielle et devienne notre propriété exclusive. Nous détiendrons des droits exclusifs, y compris tous les droits de propriété intellectuelle, et serons autorisés à utiliser et diffuser ces Soumissions de manière illimitée pour toute fin légale, commerciale ou autre, sans reconnaissance ni compensation pour vous. Par la présente, vous renoncez à tous les droits moraux sur ces Soumissions et garantissez que ces Soumissions sont originales de votre part ou que vous avez le droit de les soumettre. Vous acceptez qu'il n'y ait aucune action contre nous pour toute violation ou appropriation illégale de tout droit de propriété sur vos Soumissions.",
          thirdPartyTitle: "14. SITES WEB ET CONTENU TIERS",
          thirdPartyDesc:
            "Le Site peut contenir (ou vous pouvez être envoyé via le Site) des liens vers d'autres sites web (\"Sites Web Tiers\"), ainsi que des articles, photographies, textes, graphiques, images, conceptions, musique, sons, vidéos, informations, applications, logiciels et autres contenus ou éléments appartenant ou provenant de tiers (\"Contenu Tiers\"). Ces Sites Web Tiers et Contenus Tiers ne sont pas investigués, surveillés ni vérifiés par nous en termes de précision, de pertinence ou de complétude, et nous ne sommes pas responsables des Sites Web Tiers accessibles via le Site ni de tout Contenu Tiers publié sur, disponible via, ou installé depuis le Site, y compris le contenu, la précision, les propos offensants, les opinions, la fiabilité, les pratiques de confidentialité ou d'autres politiques des Sites Web Tiers ou du Contenu Tiers. L'inclusion de, le lien vers, ou l'autorisation de l'utilisation ou de l'installation de tout Site Web Tiers ou Contenu Tiers n'implique pas une approbation ou un soutien de notre part. Si vous décidez de quitter le Site et d'accéder aux Sites Web Tiers ou d'utiliser ou d'installer tout Contenu Tiers, vous le faites à vos propres risques, et vous devez être conscient que ces Conditions d'Utilisation ne régissent plus. Vous devez consulter les termes et politiques applicables, y compris les pratiques de confidentialité et de collecte de données, de tout site web auquel vous accédez depuis le Site ou concernant toute application que vous utilisez ou installez depuis le Site. Toute achat effectué via des Sites Web Tiers sera effectué sur d'autres sites web et auprès d'autres entreprises, et nous déclinons toute responsabilité concernant ces achats, qui sont exclusivement entre vous et le tiers concerné. Vous acceptez et reconnaissez que nous ne soutenons pas les produits ou services proposés sur les Sites Web Tiers et vous nous dégagez de toute responsabilité pour les dommages causés par l'achat de ces produits ou services. De plus, vous nous dégagez de toute perte ou dommage subi par vous, en lien avec ou résultant de toute façon du Contenu Tiers ou de tout contact avec les Sites Web Tiers.",
          usGovRightsTitle: "15. DROITS DU GOUVERNEMENT DES ÉTATS-UNIS",
          usGovRightsDesc:
            'Nos services sont des "articles commerciaux" tels que définis dans le Règlement Fédéral des Acquisitions ("FAR") 2.101. Si nos services sont acquis par ou au nom de toute agence qui n\'appartient pas au Département de la Défense ("DOD"), nos services sont soumis aux termes de ces Conditions d\'Utilisation conformément à FAR 12.212 (pour les logiciels informatiques) et FAR 12.211 (pour les données techniques). Si nos services sont acquis par ou au nom de toute agence au sein du Département de la Défense, nos services sont soumis aux termes de ces Conditions d\'Utilisation conformément au Règlement Fédéral des Acquisitions de Défense ("DFARS") 227.7202‑3. De plus, le DFARS 252.227‑7015 s\'applique aux données techniques acquises par le DOD. Cette clause relative aux droits du gouvernement des États-Unis remplace et annule toute autre clause FAR, DFARS ou disposition qui traite des droits du gouvernement sur les logiciels informatiques ou les données techniques dans le cadre de ces Conditions d\'Utilisation.',
          siteManagementTitle: "16. GESTION DU SITE",
          siteManagementDesc:
            "Nous nous réservons le droit, mais non l'obligation de : (1) surveiller le Site pour détecter les violations de ces Conditions d'Utilisation ; (2) prendre des mesures juridiques appropriées contre toute personne qui, à notre seule discrétion, viole la loi ou ces Conditions d'Utilisation, y compris, sans limitation, signaler cet utilisateur aux autorités chargées de l'application de la loi ; (3) à notre seule discrétion et sans limitation, refuser, restreindre l'accès à, limiter la disponibilité de, ou désactiver (dans la mesure où cela est technologiquement possible) toute Contribution de votre part ou toute portion de celle-ci ; (4) à notre seule discrétion et sans limitation, notification ou responsabilité, supprimer du Site ou désactiver de toute autre manière tous les fichiers et contenus qui sont excessifs en taille ou qui, de toute manière, sont trop lourds pour nos systèmes ; et (5) gérer le Site autrement de manière à protéger nos droits et propriétés et à faciliter le bon fonctionnement du Site.",
          termAndTerminationTitle: "17. DURÉE ET RÉSILIATION",
          termAndTerminationDesc:
            "Ces Conditions d'Utilisation resteront en vigueur tant que vous utilisez le Site. SANS LIMITER TOUTE AUTRE DISPOSITION DE CES CONDITIONS D'UTILISATION, NOUS NOUS RÉSERVONS LE DROIT, À NOTRE SEULE DISCRÉTION ET SANS AVIS NI RESPONSABILITÉ, DE REFUSER L'ACCÈS AU SITE (Y COMPRIS EN BLOQUANT CERTAINES ADRESSES IP), À TOUTE PERSONNE POUR QUELQUE RAISON QUE CE SOIT OU SANS RAISON AUCUNE, Y COMPRIS, SANS LIMITATION, POUR VIOLEUR TOUTE DÉCLARATION, GARANTIE OU ENGAGEMENT CONTENU DANS CES CONDITIONS D'UTILISATION OU DANS TOUTE LOI OU RÉGLEMENTATION APPLICABLE. NOUS POUVONS RÉSILIER VOTRE UTILISATION OU PARTICIPATION SUR LE SITE OU SUPPRIMER VOTRE COMPTE ET TOUT CONTENU OU INFORMATION QUE VOUS AVEZ PUBLIÉ À TOUT MOMENT, SANS AVERTISSEMENT, À NOTRE SEULE DISCRÉTION. Si nous résilions ou suspendons votre compte pour quelque raison que ce soit, vous êtes interdit de vous inscrire et de créer un nouveau compte sous votre nom, un faux nom, ou un nom emprunté, même si vous agissez au nom de ce tiers. En plus de résilier ou suspendre votre compte, nous nous réservons le droit de prendre les mesures légales appropriées, y compris, sans limitation, de poursuivre des recours civils, pénaux et injonctifs.",
          modificationsTitle: "18. MODIFICATIONS ET INTERRUPTIONS",
          modificationsDesc:
            "Nous nous réservons le droit de modifier, changer ou supprimer le contenu du Site à tout moment ou pour toute raison à notre seule discrétion, sans préavis. Cependant, nous n'avons aucune obligation de mettre à jour les informations sur notre Site. Nous nous réservons également le droit de modifier ou de cesser tout ou partie du Site sans préavis à tout moment. Nous ne serons pas responsables envers vous ou un tiers pour toute modification, changement de prix, suspension ou interruption du Site. Nous ne pouvons garantir que le Site sera disponible en permanence. Nous pouvons rencontrer des problèmes matériels, logiciels ou autres, ou devoir effectuer des opérations de maintenance liées au Site, entraînant des interruptions, des retards ou des erreurs. Nous nous réservons le droit de modifier, réviser, mettre à jour, suspendre, interrompre ou modifier le Site à tout moment ou pour toute raison, sans préavis. Vous acceptez que nous ne soyons pas responsables des pertes, dommages ou désagréments causés par votre incapacité à accéder ou à utiliser le Site pendant toute période d'inactivité ou d'interruption du Site. Rien dans ces Conditions d'utilisation ne sera interprété comme une obligation de notre part de maintenir et de supporter le Site ou de fournir des corrections, mises à jour ou versions en lien avec celui-ci.",
          governingLawTitle: "19. LOI APPLICABLE",
          governingLawDesc:
            "Ces Conditions seront régies et définies conformément aux lois applicables aux plateformes numériques décentralisées. La juridiction pour résoudre tout litige sera convenue mutuellement par les parties impliquées.",
          disputeResolutionTitle: "20. RÉSOLUTION DES LITIGES",
          disputeResolutionDesc:
            "Vous acceptez de soumettre irrévocablement tous les litiges liés à ces Conditions ou à la relation juridique établie par cet Accord à une juridiction convenue mutuellement. DogWifTools se réserve le droit d'intenter des actions en justice devant les tribunaux du pays où vous résidez ou, si ces Conditions sont conclues dans le cadre de votre activité professionnelle, dans l'état de votre principal lieu d'activité.",
          correctionsTitle: "21. CORRECTIONS",
          correctionsDesc:
            "Il peut y avoir des informations sur le Site contenant des erreurs typographiques, des inexactitudes ou des omissions, y compris des descriptions, des prix, des disponibilités et diverses autres informations. Nous nous réservons le droit de corriger toute erreur, inexactitude ou omission, ainsi que de modifier ou mettre à jour les informations sur le Site à tout moment, sans préavis.",
          disclaimerTitle: "22. AVERTISSEMENT",
          disclaimerDesc:
            "LE SITE EST FOURNI EN L'ÉTAT ET SELON SA DISPONIBILITÉ. VOUS ACCEPTEZ QUE VOTRE UTILISATION DU SITE ET DE NOS SERVICES SE FERA À VOS PROPRES RISQUES. DANS TOUTE LA MESURE PERMISE PAR LA LOI, NOUS DÉCLINONS TOUTE GARANTIE, EXPRESSE OU IMPLICITE, EN LIEN AVEC LE SITE ET VOTRE UTILISATION DE CELUI-CI, Y COMPRIS, SANS LIMITATION, LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER ET DE NON-VIOLATION. NOUS NE FAISONS AUCUNE GARANTIE NI DÉCLARATION CONCERNANT L'EXACTITUDE OU L'EXHAUSTIVITÉ DU CONTENU DU SITE OU DU CONTENU DE TOUT SITE WEB LIÉ AU SITE ET NOUS N'ASSUMERONS AUCUNE RESPONSABILITÉ POUR (1) DES ERREURS, DES FAUTES OU DES INEXACTITUDES DU CONTENU ET DES MATÉRIAUX, (2) DES BLESSURES PERSONNELLES OU DES DOMMAGES MATÉRIELS, QUELLE QU'EN SOIT LA NATURE, RÉSULTANT DE VOTRE ACCÈS ET DE VOTRE UTILISATION DU SITE, (3) TOUT ACCÈS NON AUTORISÉ À OU UTILISATION DE NOS SERVEURS SÉCURISÉS ET/OU TOUTES LES INFORMATIONS PERSONNELLES ET/OU FINANCIÈRES STOCKÉES À L'INTÉRIEUR, (4) TOUTE INTERRUPTION OU ARRÊT DE LA TRANSMISSION VERS OU DEPUIS LE SITE, (5) TOUT BUG, VIRUS, CHEVAUX DE TROIE OU SIMILAIRES QUI POURRAIENT ÊTRE TRANSMIS AU OU PAR LE SITE PAR UN TIERS, ET/OU (6) TOUTE ERREUR OU OMISSION DANS LE CONTENU ET LES MATÉRIAUX OU POUR TOUTE PERTE OU DOMMAGE DE TOUTE NATURE ENCOURUS À LA SUITE DE L'UTILISATION DE TOUT CONTENU PUBLIÉ, TRANSMIS OU MIS À DISPOSITION VIA LE SITE. NOUS NE GARANTISSONS, N'APPROUVONS, NE GARANTISSONS NI N'ASSUMONS AUCUNE RESPONSABILITÉ POUR UN PRODUIT OU UN SERVICE ANNONCÉ OU PROPOSÉ PAR UN TIERS VIA LE SITE, UN SITE WEB LIÉ OU UNE APPLICATION MOBILE PRÉSENTÉE DANS UNE BANNIÈRE OU UNE AUTRE PUBLICITÉ, ET NOUS NE SERONS PAS PARTIE NI EN AUCUNE FAÇON RESPONSABLE DE SURVEILLER UNE TRANSACTION ENTRE VOUS ET UN FOURNISSEUR TIERS DE PRODUITS OU DE SERVICES. COMME POUR L'ACHAT D'UN PRODUIT OU D'UN SERVICE PAR TOUT MOYEN OU DANS TOUT ENVIRONNEMENT, VOUS DEVRIEZ FAIRE PREUVE DE VOTRE MEILLEUR JUGEMENT ET EXERCER LA PRUDENCE LÀ OÙ CELA EST APPROPRIÉ.",
          limitationsOfLiabilityTitle: "23. LIMITATIONS DE RESPONSABILITÉ",
          limitationsOfLiabilityDesc:
            "EN AUCUN CAS, NOUS OU NOS DIRECTEURS, EMPLOYÉS OU AGENTS NE SERONS RESPONSABLES ENVERS VOUS OU TOUT TIERS POUR DES DOMMAGES DIRECTS, INDIRECTS, CONSÉCUTIFS, EXEMPLAIRES, ACCESSOIRES, SPÉCIAUX OU PUNITIFS, Y COMPRIS LA PERTE DE PROFIT, LA PERTE DE REVENUS, LA PERTE DE DONNÉES OU D'AUTRES DOMMAGES RÉSULTANT DE VOTRE UTILISATION DU SITE, MÊME SI NOUS AVONS ÉTÉ INFORMÉS DE LA POSSIBILITÉ DE TELS DOMMAGES. NONOBSTANT TOUT CE QUI EST CONTRAIRE CONTENU AUX PRÉSENTES, NOTRE RESPONSABILITÉ ENVERS VOUS, QUELLE QU'EN SOIT LA CAUSE ET QUELLE QUE SOIT LA FORME DE L'ACTION, SERA TOUJOURS LIMITÉE AU MONTANT PAYÉ, LE CAS ÉCHÉANT, PAR VOUS À NOUS AU COURS DE LA PÉRIODE D'UN (1) MOIS PRÉCÉDANT TOUTE CAUSE D'ACTION. CERTAINES LOIS ÉTATIQUES DES ÉTATS-UNIS ET LOIS INTERNATIONALES N'AUTORISENT PAS LES LIMITATIONS SUR LES GARANTIES IMPLICITES OU L'EXCLUSION OU LA LIMITATION DE CERTAINS DOMMAGES. SI CES LOIS S'APPLIQUENT À VOUS, CERTAINS OU TOUS LES AVERTISSEMENTS OU LIMITATIONS CI-DESSUS PEUVENT NE PAS S'APPLIQUER À VOUS, ET VOUS POUVEZ AVOIR DES DROITS SUPPLÉMENTAIRES.",

          indemnificationTitle: "24. INDEMNISATION",
          indemnificationDesc:
            "Vous acceptez de défendre, d'indemniser et de nous tenir à l'écart de tout préjudice, y compris nos filiales, affiliés et tous nos responsables, agents, partenaires et employés respectifs, contre toute perte, dommage, responsabilité, réclamation ou demande, y compris les frais et honoraires d'avocats raisonnables, formulés par un tiers en raison de ou découlant de : (1) l'utilisation du Site ; (2) la violation des présentes Conditions d'utilisation ; (3) toute violation de vos déclarations et garanties énoncées dans ces Conditions d'utilisation ; (4) votre violation des droits d'un tiers, y compris, mais sans s'y limiter, les droits de propriété intellectuelle ; ou (5) tout acte intentionnellement préjudiciable envers tout autre utilisateur du Site avec lequel vous vous êtes connecté via le Site. Nonobstant ce qui précède, nous nous réservons le droit, à vos frais, d'assumer la défense et le contrôle exclusifs de toute affaire pour laquelle vous êtes tenu de nous indemniser, et vous acceptez de coopérer, à vos frais, avec notre défense de telles réclamations. Nous ferons des efforts raisonnables pour vous notifier de toute réclamation, action ou procédure qui est soumise à cette indemnisation dès que nous en aurons connaissance.",

          userDataTitle: "25. DONNÉES UTILISATEUR",
          userDataDesc:
            "Nous conserverons certaines données que vous transmettez au Site dans le but de gérer les performances du Site, ainsi que des données relatives à votre utilisation du Site. Bien que nous effectuions des sauvegardes régulières des données, vous êtes seul responsable de toutes les données que vous transmettez ou qui sont liées à toute activité que vous avez entreprise en utilisant le Site. Vous acceptez que nous n'assumions aucune responsabilité envers vous en cas de perte ou de corruption de telles données, et vous renoncez par la présente à tout droit d'action contre nous résultant de toute perte ou corruption de ces données.",

          electronicCommunicationsTitle:
            "26. COMMUNICATIONS ÉLECTRONIQUES, TRANSACTIONS ET SIGNATURES",
          electronicCommunicationsDesc:
            "La visite du Site, l'envoi de courriels et la complétion de formulaires en ligne constituent des communications électroniques. Vous consentez à recevoir des communications électroniques et acceptez que tous les accords, avis, divulgations et autres communications que nous vous fournissons électroniquement, par courriel et sur le Site, satisfont à toute exigence légale selon laquelle cette communication doit être écrite. PAR LA PRÉSENTE, VOUS CONSENTEZ À L'UTILISATION DE SIGNATURES ÉLECTRONIQUES, DE CONTRATS, DE COMMANDES ET D'AUTRES ENREGISTREMENTS, ET À LA LIVRAISON ÉLECTRONIQUE D'AVIS, DE POLITIQUES ET D'ENREGISTREMENTS DE TRANSACTIONS INITIÉES OU COMPLÉTÉES PAR NOS SOINS OU VIA LE SITE. Par la présente, vous renoncez à tous les droits ou exigences en vertu de toute législation, réglementation, règle, ordonnance ou autre loi dans toute juridiction qui exige une signature originale ou la livraison ou la conservation de documents non électroniques, ou de paiements ou l'octroi de crédits par d'autres moyens que les moyens électroniques.",

          californiaUsersTitle: "27. UTILISATEURS ET RÉSIDENTS DE CALIFORNIE",
          californiaUsersDesc:
            "Si une plainte avec nous n'est pas résolue de manière satisfaisante, vous pouvez contacter l'Unité d'Assistance aux Plaintes de la Division des Services aux Consommateurs du Département des Affaires des Consommateurs de Californie par écrit à l'adresse suivante : 1625 North Market Blvd., Suite N 112, Sacramento, Californie 95834, ou par téléphone au (800) 952-5210 ou (916) 445-1254.",

          miscellaneousTitle: "28. DIVERS",
          miscellaneousDesc:
            "Les présentes Conditions d'utilisation et toutes les politiques ou règles opérationnelles publiées par nous sur le Site ou en relation avec le Site constituent l'accord et la compréhension complets entre vous et nous. Notre incapacité à exercer ou à appliquer un droit ou une disposition de ces Conditions d'utilisation ne sera pas considérée comme une renonciation à ce droit ou à cette disposition. Ces Conditions d'utilisation sont applicables dans toute la mesure permise par la loi. Nous pouvons céder tout ou partie de nos droits et obligations à d'autres à tout moment. Nous ne serons pas responsables de toute perte, dommage, retard ou échec d'action causé par une cause échappant à notre contrôle raisonnable. Si une disposition ou une partie d'une disposition de ces Conditions d'utilisation est jugée illégale, nulle ou inapplicable, cette disposition ou cette partie de la disposition est réputée séparable de ces Conditions d'utilisation et n'affecte pas la validité et l'applicabilité des autres dispositions restantes. Il n'y a pas de partenariat, de société, de relation d'emploi ou d'agence créée entre vous et nous en raison de ces Conditions d'utilisation ou de l'utilisation du Site. Vous acceptez que ces Conditions d'utilisation ne seront pas interprétées contre nous en raison de notre rédaction. Par la présente, vous renoncez à toutes les défenses que vous pourriez avoir sur la base de la forme électronique de ces Conditions d'utilisation et de l'absence de signature des parties pour exécuter ces Conditions d'utilisation. Il est strictement interdit de copier, modifier ou partager tout fichier, par tout moyen.",

          contactTitle: "29. CONTACTEZ-NOUS",
          contactDesc:
            "Pour résoudre une plainte concernant le Site ou pour recevoir des informations supplémentaires concernant l'utilisation du Site, veuillez nous contacter à :",
        },
      },
    },
    lng: storedLang, // Set the initial language from localStorage
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
