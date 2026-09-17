import React from "react";
import { Icon } from "@iconify/react";

const ContactFooter = () => {
  return (
    <div className="bg-[#141118] flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen">
      <div className="flex flex-col  lg:max-w-[1000px] gap-[20px]">
        <text className="font-[Inter-Bold] text-[20px] sm:text-[30px] font-bold text-whites-50 text-center lg:text-left">
          Let’s Connect
        </text>

        <div className="flex flex-col md:flex-row justify-around items-center gap-[20px] md:h-[100px]">
          <text className="font-[Inter-Medium] lg:pr-[100px] text-[18px] sm:text-[20.44px] font-medium text-[#FFFAF6] text-opacity-[70%]">
            <a className="hover:text-[#EE5170]" href="mailto:info@nyatimotionpictures.com">info@nyatimotionpictures.com</a> <br/>
            X: <a className="hover:text-[#EE5170]" href="https://x.com/NyatiMPictures">@NyatiMP</a><br/>
            Facebook: <a className="hover:text-[#EE5170]" href="https://www.facebook.com/nyati.motionpictures">@nyatimotionpictures</a>
           {/* nyatimotionpictures@gmail.com{" "} */}
          </text>
          <div className="hidden h-full md:flex md:w-[1px] bg-whites-40 bg-opacity-[60%]" />
          {/** contacts */}
          <div className="flex flex-col lg:pl-[100px] w-max gap-2 text-center">
            <div className="flex gap-[20px] w-full items-center text-[18px] sm:text-[23px]">
              <text className="text-primary-500 font-[Inter-SemiBold] ">
                Call.
              </text>
              <text className="text-whites-50 text-opacity-[70%] font-[Inter-Medium]">
                {" "}
                +256 760 213440
              </text>
            </div>
            <div className="flex gap-[20px] w-full items-center justify-between text-[18px] sm:text-[23px]">
              <Icon
                icon="ion:logo-whatsapp"
                width="20px"
                height="20px"
                className=" text-primary-500 flex justify-center items-center w-[32px] h-[32px] border-none border-[0.79px] "
              />
              <text className="text-whites-50  text-opacity-[70%] font-[Inter-Medium]">
                +256 778 787 660
              </text>
            </div>
          </div>

          {/**  */}
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
