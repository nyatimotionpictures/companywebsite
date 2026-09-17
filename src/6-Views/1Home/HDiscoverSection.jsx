import React from "react";
import BgLogo from "../../1-Assets/BgLogo.png";
import Buttons from "../../2-Components/Buttons/Buttons";
import { NavLink } from "react-router-dom";

const HDiscoverSection = ({ nRef }) => {
  return (
    <div className="bg-[#141118]  flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen overflow-hidden relative">
      <div
        className=" flex flex-col lg:flex-row justify-between items-center md:max-w-[743px] lg:max-w-[1000px]"
        ref={nRef}
      >
        {/* text stack */}
        <div className=" flex flex-col gap-[30px] mx-auto lg:max-w-[625px]">
          {/* main title */}
          <h1 className="font-[Inter-Bold] font-bold text-[27px] text-center lg:text-left sm:text-3xl lg:text-4xl capitalize text-whites-50 ">
            We are <span className="block">Nyati Motion Pictures</span>
          </h1>

          {/* paragraph */}
          <div className="flex flex-col font-[Inter-Medium] text-[14px]  md:text-base text-justify sm:text-center md:text-center lg:text-[18px] lg:text-left 2xl:text-lg text-[#FFFAF6B2] gap-[20px] md:leading-[26px]">
            <p>
              Nyati (
              <span className="text-[#EE5070]">Buffalo</span>) Motion Pictures (NMP) is a leading film and video production powerhouse in Uganda, East Africa, established in 2005.
            </p>
            <p>
              NMP has produced several notable films: <span className="italic font-bold">Fate</span> (2006), <span className="italic font-bold">Fair Play</span>
              (2010), and <span className="italic font-bold">Windows of Hope</span> (2011) in the feature film category,
              and <span className="italic font-bold">A Book for Every Child</span> (2013) in the documentary category, and <span className="italic font-bold">Tuko Pamoja</span>(2024) a docuseries in the documentary category. 
              Tuko Pamoja is a 13-part historical series exploring Uganda’s precolonial heroes and heroines and centering what the contemporary Ugandan (African) can learn from history.
            </p>
          </div>

          {/* button */}
          <NavLink to="/about">
            <Buttons className="bg-[#1A171E] rounded-lg w-full md:max-w-[347px] h-[64px] flex items-center justify-center text-[#EE5070] text-[13.96px] md:text-[16px] uppercase italic font-bold hover:text-primary-500 mx-auto lg:mx-0">
              Discover more about Company
            </Buttons>
          </NavLink>
        </div>
        {/* image stack */}
        <div className="hidden lg:flex lg:w-[337.7px]">
          <div className="flex">
            <img
              src={BgLogo}
              alt=""
              className="hidden lg:flex my-auto absolute right-0 top-0 bottom-0 h-[80%] max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HDiscoverSection;
