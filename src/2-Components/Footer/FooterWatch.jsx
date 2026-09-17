import React from "react";
import Buttons from "../Buttons/Buttons";
import { Icon } from "@iconify/react";
import Metadata from "../../1-Assets/data/web_metadata.json";
import { useNavigate } from "react-router-dom";

const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const watchBg = result.content[1].files[1];

const FooterWatch = () => {
  let navigate = useNavigate()
  return (
    <div className="flex w-full bg-[#141118] py-5  md:py-16 md:px-12 lg:px-[86px] overflow-hidden">
      <div className="flex flex-col gap-0  max-w-[300px] md:max-w-full mx-auto md:gap-5 md:items-center lg:flex-row lg:gap-16 lg:max-w-[1000px] lg:items-center xl:gap-28">
        <img
          className="object-contain md:object-contain mx-auto w-[340px] h-[250px] lg:w-[500px] my-4 rounded-lg"
          src={watchBg}
          alt={"apps"}
        />

        <div className=" flex flex-col justify-center  mx-auto my-2 md:my-4 text-center md:text-left">
          <h1 className="text-whites-40 text-[25px] font-bold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight  2xl:text-7xl 2xl:leading-tight tracking-wider text-center lg:text-start">
            Watch <span className="block">Anytime.</span> 
            <span className="ps-2 md:px-0 md:block ">Anywhere.</span>
          </h1>

          <p className="text-[#FFFAF6] italic mx-auto mt-4 max-w-3xl sm:px-0 md:px-0 lg:px-0 capitalize font-[Inter-Medium] sm:text-sm/relaxed text-opacity-70 lg:text-xl tracking-tight">
            Download Nyatiflix, or subscribe to our YouTube channel to see the
            trailers...
          </p>

          <div className="flex w-full gap-x-[20px] mt-[20px]">
            {/** Apple store Btn */}
            {/* <Buttons onClick={() => navigate("/comingsoon")} className="flex w-[50%] lg:gap-[6px]  items-center h-[52px] items-between lg:justify-center gap-x-[9.95px] lg:px-[12px] rounded-md border bg-transparent">
              <div className="my-0 mx-0">
                <Icon
                  icon="ion:logo-apple"
                  width="20px"
                  height="20px"
                  className="flex justify-center items-center w-[32px] h-[32px] border-none border-[0.79px] "
                />
              </div>

              <div className="lg:leading-tight text-left ">
                <p
                  className={
                    "text-[#F2F2F2] font-[Inter-Regular] text-[9px] lg:text-[12px]"
                  }
                >
                  Download on the
                </p>
                <h1 className="text-[#F2F2F2] text-[13px] lg:text-[20px] font-sans font-medium">
                  App Store
                </h1>
              </div>
            </Buttons> */}

            {/** Google Play Btn */}
            <Buttons 
              onClick={() => window.open(
               "https://play.google.com/store/apps/details?id=com.nyatimotionpictures.nyatiflix&hl=en-US&ah=dCecoSMvMMkVps6CbI8XZztYrL0", 
                "_blank", 
                "noopener,noreferrer"
              )}
              className="flex w-[50%] lg:gap-[6px] items-center h-[52px] items-between lg:justify-center gap-x-[9.95px] lg:px-[12px] rounded-md border bg-transparent">
              <div>
                <Icon
                  icon="ion:logo-google-playstore"
                  width="20px"
                  height="20px"
                  className="flex justify-center items-center w-[32px] h-[32px] border-none border-[0.79px] "
                />
              </div>
              <div className="flex flex-col lg:leading-tight text-left ">
                <text
                  className={
                    "text-[#F2F2F2] font-[Inter-Regular] text-[10px] xl:text-[12px]"
                  }
                >
                  GET IT ON
                </text>
                <text className="text-[#F2F2F2] text-[13px] lg:text-[18px] xl:text-[20px] font-sans font-medium">
                  Google Play
                </text>
              </div>
            </Buttons>
          </div>

          {/**
                 <div className="mx-auto md:w-full">
            <Box
              className={`text-[#FFFAF6] mx-auto font-[Inter-SemiBold]  text-left mt-4 max-w-3xl sm:px-0 md:px-0 md:w-full lg:px-0  sm:text-xl/relaxed  lg:text-2xl `}
            >
              Download the App below for free.
            </Box>
            
            <Box className="flex gap-x-[20px] mt-[20px]">
              <button className="flex gap-[6px] items-center h-[52px] justify-center px-[12px] rounded-md border">
                <Box className="my-0 mx-0">
                  <span className="icon-[ion--logo-apple]"></span>
                </Box>

                <Box className="leading-tight ">
                  <p
                    className={
                      "text-[#F2F2F2] font-[Inter-Regular] text-[12px]"
                    }
                  >
                    Download on the
                  </p>
                  <h1 className="text-[#F2F2F2] text-[20px] font-[Inter-Medium]">
                    App Store
                  </h1>
                </Box>
              </button>
              <button className="flex gap-[6px] items-center h-[52px] justify-center px-[12px] rounded-md border">
                <Box>
                  <span className="icon-[ion--logo-google-playstore]"></span>
                </Box>
                <Box className="leading-tight text-left ">
                  <p
                    className={
                      "text-[#F2F2F2] font-[Inter-Regular] text-[12px]"
                    }
                  >
                    GET IT ON
                  </p>
                  <h1 className="text-[#F2F2F2] text-[20px] font-sans font-medium">
                    Google Play
                  </h1>
                </Box>
              </button>
            </Box>
          </div>
                */}
        </div>
      </div>
    </div>
  );
};

export default FooterWatch;
