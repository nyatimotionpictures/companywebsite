import React from 'react'
import Metadata from "../../1-Assets/data/web_metadata.json";

const obj = Metadata;
const result = obj[Object.keys(obj)[5]];
const Content = result.content[0].files[0];

const PDHero = () => {
  return (
    <div
      className={`flex flex-col h-[50vh]  md:h-[70vh] w-screen bg-cover bg-no-repeat bg-fixed relative items-center md:items-center  justify-center overflow-hidden`}
    >
      <img
        src={Content}
        alt=""
       className="flex absolute top-0 object-cover h-full w-full select-none bg-gradient-to-b from-transparent to-secondary-700"
        style={{
          filter: "brightness(20%)", // Adjust brightness if needed
        }}
      />
      <div className="flex flex-col h-full w-full relative items-center md:items-start justify-end overflow-hidden  bg-gradient-to-b from-transparent to-secondary-800">
        <div className="flex flex-col text-left px-5 pb-[5%] sm:px-16 md:px-16 xl:mx-0 xl:px-16  gap-[14px] md:gap-[24px] lg:gap-[61px]   md:max-w-[586px] xl:max-w-[520.89px]   xl:text-left z-40 text-[#ffffff]">
          <div className="flex flex-col gap-[10px] md:gap-[21px]">
            <p className=" text-center md:text-left font-[Inter-Bold] text-[24px] md:text-5xl text-whites-40 select-none">
              Conquer or Die
            </p>
            <p className="font-Regular font-[Inter-Regular] text-sm text-center  sm:text-base md:text-lg xl:text-lg md:text-left xl:leading-normal text-[#EEF1F4]">
            This is majorly a fiction representation of the stories told in Tuko Pamoja.
            </p>
            <p className="font-extrabold font-[Inter-Regular] text-xs text-center sm:text-base md:text-lg xl:text-lg md:text-left xl:leading-normal text-[#EEF1F4]">
            Production Stage: Pre-production
            </p>
          </div>
          {
            /** tags */
        }
          <div className="w-full flex flex-row items-center justify-center md:justify-start">
            <div className="font-[Inter-Regular] text-[#FFFAF6] flex flex-wrap w-full space-x-2 md:space-x-8 text-xs  md:text-base gap-y-3 items-center justify-center md:justify-start">
              
              <ul className="font-[Inter-Regular] text-[#FFFAF6] flex list-disc w-full space-x-6 md:space-x-8 text-xs md:text-base flex-wrap gap-y-3 items-start justify-center md:justify-start">
                <div className="w-max">Live-action</div>
                <li className="w-max">Historical series</li>
                <li className="w-max">5 Season </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDHero