import React from "react";
import BgLogo from "../../1-Assets/BgLogo.png";
import Buttons from "../../2-Components/Buttons/Buttons";
import { NavLink } from "react-router-dom";

const FDiscoverSection = () => {
  return (
      <div className="bg-[#141118]  flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 md:py-16 w-screen overflow-hidden relative">
          <div
              className=" flex flex-col lg:flex-row justify-between items-center md:max-w-[743px] lg:max-w-[1000px]"
             
          >
              {/* text stack */}
              <div className=" flex flex-col gap-[30px] mx-auto lg:max-w-[625px]">
                  {/* main title */}
                  <h1 className="font-[Inter-Bold] font-bold text-[27px] text-center lg:text-left sm:text-3xl lg:text-4xl capitalize text-whites-50 ">
                     Nyati Films 
                  </h1>

                  {/* paragraph */}
                  <div className="flex flex-col font-[Inter-Medium] text-[14px]  md:text-base text-justify sm:text-center md:text-center lg:text-[18px] lg:text-left 2xl:text-lg text-[#FFFAF6B2] gap-[20px] md:leading-[26px]">
                      <p>
                          Since its establishment, Nyati Motion Pictures has contributed to the corpus of entertainment through its epic films and documentaries. Most of our films cover a wide range of themes and ideas which affect society today. The films touch on universal feelings: human resilience, love and pain. Like the authentic African griots, we aim to empower humanity through the visual media and, most significantly, to raise mass consciousness about pertinent issues affecting the African continent
                      </p>
                      <p>
                        See film below for details.
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
  )
}

export default FDiscoverSection