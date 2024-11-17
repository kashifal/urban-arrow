import React from "react";
import DiscordLink from "./DiscordLink";
import FAQItems from "./FAQItems";


const FAQ = () => {
  return (
    <div className=" max-w-[74rem] mx-auto lg:px-0 px-4  py-32">
      <div className="flex flex-col jsutify-center items-center">
        <DiscordLink />
        <h1 className="sm:text-5xl text-4xl leading-tight text-center pt-8 pb-5 font-medium">
          Frequently
          <span className="opacity-50 lg:ml-2">
            asked
            <br /> questions
          </span>
        </h1>
      </div>
      <div className="max-w-3xl mx-auto mt-20 flex flex-col gap-2">
        <FAQItems question={'What is DogWifTools?'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error, dolorum magni hic quaerat quae eum debitis est laborum nesciunt optio eius eos esse corporis amet, dignissimos ea voluptatem dolore?'} />
        <FAQItems question={'How can I get started with DogWifTools?'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error, dolorum magni hic quaerat quae eum debitis est laborum nesciunt optio eius eos esse corporis amet, dignissimos ea voluptatem dolore?'} />
        <FAQItems question={'What operating system does DogWifTools support?'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error, dolorum magni hic quaerat quae eum debitis est laborum nesciunt optio eius eos esse corporis amet, dignissimos ea voluptatem dolore?'} />

      </div>
    </div>
  );
};

export default FAQ;
