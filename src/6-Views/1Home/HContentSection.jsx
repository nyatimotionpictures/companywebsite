import React from "react";
import Buttons from "../../2-Components/Buttons/Buttons";
import { NavLink } from "react-router-dom";

const postersImg = "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/images/Contribute%20to%20%20Content%20Creation_image.png?updatedAt=1724268788409";

const HContentSection = () => {
  return (
    <div className="w-full bg-[#141118] py-16 px-12 overflow-hidden">
      <div className="mx-auto flex flex-col items-center lg:flex-row-reverse lg:gap-16 lg:max-w-[1000px] xl:gap-28">
        <div className="lg:max-w-[448.89px]">
          <img
            className="object-cover mx-auto w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px]  md:h-auto lg:w-[500px]   my-4"
            src={postersImg}
            alt={""}
          />
        </div>

        <div className="h-max flex flex-col justify-center">
          <div className="w-[100%] sm:w-[60%] md:w-full text-white flex flex-col justify-center mx-auto my-4 text-center md:text-left lg:max-w-[462.22px]">
            <p className="font-[Inter-Bold] font-bold text-[27px] text-center lg:text-left sm:text-3xl lg:text-4xl capitalize text-whites-50 ">
              Contribute to
              <span className="ps-2 md:px-0 md:block">Content Creation</span>
            </p>

            <p className="text-[#FFFAF6] mx-auto mt-4 max-w-3xl sm:px-0 md:px-0 lg:px-0 capitalize font-[Inter-Medium] sm:text-sm/relaxed text-opacity-70 lg:text-[19.74px] tracking-tight">
              Support stories that are authentically Ugandan (African) and build a community of storytellers.
            </p>
          </div>
          <NavLink to="/donate" className="mt-4">
            <Buttons className="bg-[#1A171E] rounded-lg w-full md:max-w-[347px] h-[64px] flex items-center justify-center text-[#EE5070] text-[13.96px] md:text-[16px] uppercase italic font-bold hover:text-primary-500 mx-auto lg:mx-0">
              SEND US A DONATION
            </Buttons>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HContentSection;
