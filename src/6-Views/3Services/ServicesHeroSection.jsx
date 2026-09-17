import React from "react";
import Metadata from "../../1-Assets/data/web_metadata.json";

const obj = Metadata;
const result = obj[Object.keys(obj)[1]];
const Image = result.content[0].files[0];

const ServicesHeroSection = () => {
  return (
    <div
      className={`flex flex-col h-[70vh] md:h-[70vh] lg:h-[90vh] w-screen bg-cover bg-no-repeat bg-fixed relative items-center justify-center overflow-hidden`}
    >
      <img
        src={Image}
        alt=""
        className="absolute top-0 object-cover h-full w-full object-top select-none z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent via-80% to-secondary-800 z-1" />
      <div className="relative flex max-w-[300px] md:max-w-[613px] xl:max-w-[720px] text-[#ffffff] font-Bold lg:mt-8 z-10">
        <p className="font-Bold font-[Inter-Bold] text-3xl md:text-5xl lg:text-6xl 2xl:text-6xl text-center capitalize">
          Trust our professionals to get Beautiful Experience
        </p>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
