import React from "react";
import postersImg from "../../1-Assets/laptop.png";
import Buttons from "../../2-Components/Buttons/Buttons";
import { NavLink } from "react-router-dom";

const HContentSection = () => {
  return (
    <div className="w-full bg-[#141118] py-16 px-4 md:px-12 overflow-hidden">
      <div className="mx-auto flex flex-col items-center lg:flex-row-reverse md:gap-10 lg:gap-16 lg:max-w-[1000px] xl:gap-28">
        <div className="w-full lg:max-w-[500px]">
          <img
            className="object-cover mx-auto w-full max-w-[500px] h-auto my-4"
            src={postersImg}
            alt=""
          />
        </div>

        <div className="h-max flex flex-col justify-center">
          <div className="w-full sm:w-[60%] md:w-full text-white flex flex-col justify-center gap-2 mx-auto my-4 text-center md:text-left lg:max-w-[462.22px]">
            <p className="font-[Inter-Bold] font-bold text-[27px] text-center lg:text-left lg:leading-snug sm:text-3xl lg:text-4xl capitalize text-whites-50">
              Contribute to
              <span className="ps-2 md:px-0 md:block">Content Creation</span>
            </p>

            <p className="text-[#FFFAF6] mx-auto mt-4 max-w-3xl font-[Inter-Medium] lg:leading-normal  sm:text-sm lg:text-[19.74px] tracking-tight text-opacity-70">
              Support stories that are authentically Ugandan and built a
              community of pioneers
            </p>
          </div>
          <NavLink to="/donate">
            <Buttons className="bg-[#1A171E] rounded-lg w-full md:max-w-[347px] h-[64px] lg:mt-5 flex items-center justify-center text-[#EE5070] text-[13.96px] md:text-[16px] uppercase italic font-bold hover:text-whites-50 mx-auto lg:mx-0">
              SEND US A DONATION
            </Buttons>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HContentSection;
