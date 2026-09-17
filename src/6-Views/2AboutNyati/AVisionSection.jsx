import React from "react";
import Metadata from '../../1-Assets/data/web_metadata.json'

const obj = Metadata;
const result = obj[Object.keys(obj)[4]];
const Bg=result.content[0].files[1]

const AVisionSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center md:h-full min-h-[50vh] px-[30px] py-[54px] sm:px-16 sm:py-16  relative">
      {/* Background image */}

      <img
        src={Bg}
        alt=""
        className="flex absolute top-0 left-0 object-cover h-full w-full select-none bg-gradient-to-b from-transparent to-secondary-700"
        style={{
          filter: "brightness(50%)", // Adjust brightness if needed
        }}
      />

      {/* Text */}
      <div className="relative h-full w-full flex flex-col gap-10 md:max-w-[743px] lg:max-w-[1000px] items-center justify-center">
        {/* text box 1 */}
        <div className="sm:w-[80%] md:max-w-[350px] lg:max-w-[430.22px] flex flex-col gap-4 items-center lg:items-start lg:self-start  ">
          <h2
            className="text-whites-600 font-[Inter-SemiBold] 
          text-[20px] md:text-[24px] lg:text-[26px]"
          >
            Our Vision
          </h2>
          <h1 className="text-[#F2F2F2] font-[Inter-Bold] text-[26px] sm:text-[35px] md:text-[40px]  lg:text-[44px] text-center lg:text-start leading-tight">
            We’re Creating authentic stories.
          </h1>
          <p className="text-whites-600 font-[Inter-Regular] text-[16px] md:text-[16px]  lg:text-[18px] text-center lg:text-start">
            To become the leading local ‘authentic’ Film and Video Production
            Company in Uganda.
          </p>
        </div>

        {/* text box 2 */}
        <div className=" sm:w-[80%] md:max-w-[350px] lg:max-w-[430.22px] flex flex-col gap-4 items-center lg:items-end  lg:self-end">
          <h2
            className="text-whites-600 font-[Inter-SemiBold] text-[20px] 
         md:text-[24px] lg:text-[26px]"
          >
            Our Mission
          </h2>
          <h1 className="text-[#F2F2F2] font-[Inter-Bold] text-[26px] sm:text-[35px] md:text-[40px]  lg:text-[44px] text-center lg:text-end leading-tight">
            Becoming a powerhouse in Eastern Africa.
          </h1>
          <p className="text-whites-600 font-[Inter-Regular]  text-[16px] md:text-[16px]  lg:text-[18px] text-center lg:text-end">
            To be the leading high-quality Film and Video Production powerhouse
            in Eastern Africa capable of satisfying local and international
            consumer demands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AVisionSection;
