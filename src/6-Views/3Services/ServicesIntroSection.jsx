import React from 'react'
import Metadata from '../../1-Assets/data/web_metadata.json'

const obj = Metadata;
const result = obj[Object.keys(obj)[1]];
const SImage = result.content[1].files[0];

const ServicesIntroSection = () => {
  return (
    <div className="bg-secondary-800 lg:h-[70vh]  flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen overflow-hidden">
      <div className="flex flex-col-reverse gap-10 items-center text-center justify-center lg:flex-row lg:text-left lg:items-start xl:flex-row lg:justify-between w-full lg:max-w-[1000px] ">
        {/** text portion */}
        <div className="flex flex-col gap-[20px] lg:max-w-[524.44px]">
          <div className="font-[Inter-SemiBold] text-[18px] sm:text-xl lg:text-2xl text-whites-50 text-opacity-70 font-semibold">
            Our Services
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="font-[Inter-Bold] font-bold text-[27px] sm:text-3xl lg:text-4xl lg:leading-tight capitalize text-whites-50">
              Partner with us for Unforgettable Film Production.
            </div>
            <div className="font-[Inter-Regular] font-normal text-base text-center lg:text-left 2xl:text-lg text-whites-50 opacity-45">
              Nyati Motion Pictures provides a wide range of technical support
              services at all levels of film production. We produce short
              feature films, both independent and commissioned, and develop
              original screenplays for films, series, and documentaries.
            </div>
          </div>
        </div>
        {/** Image */}
        <div className="flex w-[300px] max-h-[230.22px] sm:max-h-[401px] md:max-h-[410px] md:w-[547.3px] lg:w-[300px] 2xl:w-[362px]">
          <img
            src={SImage}
            alt=""
            className="w-full max-h-[230.22px] sm:max-h-[401px] md:max-h-[410px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesIntroSection