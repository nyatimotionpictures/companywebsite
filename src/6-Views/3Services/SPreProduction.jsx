import React from 'react'
import { NavLink } from "react-router-dom";
import Buttons from '../../2-Components/Buttons/Buttons';
import Metadata from '../../1-Assets/data/web_metadata.json'

const obj = Metadata;
const result = obj[Object.keys(obj)[1]];
const preprodImage = result.content[6].files[0];

const SPreProduction = () => {
  return (
    <div className="bg-secondary-800 lg:h-[90vh] flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen overflow-hidden">
      <div className="flex flex-col gap-10 items-center text-center justify-center lg:text-left lg:items-start lg:flex-row  lg:justify-between w-full lg:max-w-[1000px] h-max">
        {/** text portion */}
        <div className="flex flex-col gap-[40px] lg:max-w-[415px]">
          <div className="flex flex-col gap-2">
            <div className="font-[Inter-SemiBold] text-[18px] sm:text-xl lg:text-2xl text-whites-50 text-opacity-70 font-semibold">
              Featured Pre-production
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="font-[Inter-Bold] font-bold text-[27px] sm:text-3xl xl:text-4xl capitalize text-whites-50">
                <h1 className='lg:leading-normal'>Conquer or Die: Uganda’s Symbols of Independence</h1>
              </div>
              <div className="flex mx-auto w-[300px] max-h-[182.43px] lg:hidden md:pt-5">
                <img
                  src={preprodImage}
                  alt=""
                  className="w-[300px] max-h-[182.43px] object-cover"
                />
              </div>
              <div className="font-[Inter-Regular] font-normal text-base text-center lg:text-left 2xl:text-lg text-whites-50 opacity-45">
                Conquer or Die is woven around the predicaments of Uganda’s
                symbols of independent or colonial resistance.
              </div>
            </div>
          </div>

          <div>
            <Buttons className="w-max italic bg-secondary-700 text-[#EE5070] font-[Inter-Bold] text-[14px] lg:text-[14px] uppercase p-0 py-[16px] px-[30px]">
            <NavLink to="/services/conquerordie">
              <text>Read More</text>
              </NavLink>
            </Buttons>
          </div>
        </div>
        {/** Image */}
        <div className="hidden lg:flex w-[421.33px] max-h-[414.22px] 2xl:w-[421.33px]">
          <img
            src={preprodImage}
            alt=""
            className="w-[421.33px] max-h-[414.22px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SPreProduction