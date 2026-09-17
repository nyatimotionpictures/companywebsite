import React from "react";
import Buttons from "../../2-Components/Buttons/Buttons";
import { NavLink } from "react-router-dom";
import Metadata from '../../1-Assets/data/web_metadata.json'

const obj = Metadata;
const result = obj[Object.keys(obj)[4]];
const image=result.content[0].files[3]


const ADonationSection = () => {
  return (
    <div className="min-h-[60vh] h-full bg-[#21151d] flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen overflow-hidden relative">
      <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-between items-center gap-[20px] lg:gap-0 mt-[10%] md:mt-0 lg:px-[10%]">
        {/* main text, paragraph and button */}
        <div className="lg:max-w-[498px] flex flex-col gap-5 md:gap-5 items-center justify-center lg:items-start space-y-1">
         
            <h1 className="max-w-[210px] md:max-w-[746px] lg:max-w-[350px] text-[25px] md:text-4xl text-[#F2F2F2] font-[Inter-SemiBold] text-center lg:text-left">
              Help Us Tell Amazing Stories:{" "}
              <span className="block italic mt-2">Crowdfund Now</span>
            </h1>
            <p className="text-[#F2F2F2] text-center lg:text-left text-opacity-70 font-[Inter-Regular] text-[14px] md:text-[20px]">
              We are building a community of thousands of investors to finance
              creative projects that will be created, funded, and distributed. We
              are a team of passionate creators using our visual media to engage
              the Easter African and audience.
            </p>
          
          
          <Buttons className="bg-[#EE5170] text-[#F2F2F2] w-[190px] h-[41px] text-[15.96px] font-[Roboto-Medium] px-4 py-2 rounded-full ">
            <NavLink to="/donate" >Send Us A Donation</NavLink>
          </Buttons>
        </div>

        {/* image container */}
        <div className="w-[40%] h-full flex justify-center items-center">
          <img src={image} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ADonationSection;
