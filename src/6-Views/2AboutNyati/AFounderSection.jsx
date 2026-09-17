import React from "react";
import Metadata from '../../1-Assets/data/web_metadata.json'

const obj = Metadata;
const result = obj[Object.keys(obj)[4]];
const DrImage = result.content[0].files[2];

const AFounderSection = ({ nRef }) => {
  return (
    <div
      ref={nRef}
      className="bg-[#141118] flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen max-h-[1080px] overflow-hidden relative"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center md:max-w-[743px] lg:max-w-[1000px] gap-10 md:gap-10 xl:gap-28">
        {/* Image with caption */}
        <div className=" flex flex-col gap-[9.91px] md:w-[80%] lg:max-w-[400px] ">
          <img src={DrImage} alt="Founder" className="w-[400px]" />
          <span className="font-[Inter-Regular] text-center lg:text-start text-[15px] md:text-[18px] text-[#FFFAF6] text-opacity-70 select-none">
            Founder, Dr. Evelyn Cindy Magara
          </span>
        </div>

        {/* Text */}
        <div className="lg:max-w-[440px] text-center lg:text-start h-full lg:-mt-32 flex flex-col gap-4 md:gap-5 lg:gap-5 items-center justify-center lg:items-start ">
          {/* Sub-text */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-5 items-center justify-center lg:items-start ">
            <h2 className="text-[#FFFAF6] font-bold font-[Inter-SemiBold] text-[20px] lg:text-[26px]">
              About
            </h2>
            {/* Main-text */}
            <h1 className="text-[#FFFAF6] flex flex-col md:gap-1 lg:gap-2 font-bold text-[30px] md:text-4xl font-[Inter-Bold] xl:text-[44px]">
              We Are Based In <span className="block">Uganda</span>
            </h1>
          </div>

          {/* Paragraph-text */}
          <p className="text-[#FFFAF6] font-[Inter-Regular] text-center text-opacity-70 font-normal text-base  md:max-w-[580px] lg:text-justify">
            Nyati Motion Pictures was formed in 2005 as a Film and Video
            Production Company. Nyati Motion Pictures was registered as a
            company in February 2006. The company started operations by
            co-producing short documentaries and films to perfect the skills.
            Nyati Motion Pictures is proud to be part of the creative companies
            that are developing the film industry to reckon with in Uganda and
            Africa at large.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AFounderSection;
