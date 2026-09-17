import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Buttons from "../../2-Components/Buttons/Buttons";
import Metadata from "../../1-Assets/data/web_metadata.json";

const obj = Metadata;
const result = obj[Object.keys(obj)[0]];
const HeroBg = result.content[1].files[4];
const Logo2 = result.content[2].files[0];

const HHero = ({ scrollFunc }) => {
  let navigate = useNavigate()
  return (
    <HeroContent className=" box-border flex flex-col w-full min-h-[70vh] h-full flex-grow xl:min-h-full lg:h-screen relative overflow-hidden">
      <div className="flex-grow py-20 sm:py-20 h-full lg:h-screen flex flex-col items-center justify-center ">
        {/** Background image */}

        {/** hero text && buttons */}
        <div className="box-border  pt-5  flex flex-col max-w-[80%] gap-[10px]  md:gap-[20px] lg:gap-[25px] xl:max-w-[631px] mx-auto max-h-max">
          {/** logo */}
          <div className="w-full h-[125px] md:h-[150px] lg:h-[170px] xl:h-[200px] 2xl:h-[200px] flex justify-center items-center">
            <img src={Logo2} alt="logo" className="w-full h-full" />
          </div>
          {/** head text */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-bold font-[Inter-Bold] text-[30px] sm:text-4xl md:text-[38px] xl:text-5xl 2xl:text-6xl md:leading-tight text-[#F2F2F2] text-center">
              The African Griot
            </h1>
            <h2 className="font-[Inter-Light] text-[14px] md:text-base xl:text-lg  text-[#FFFFFE] text-center">
              <NavLink to="/about" className="hover:text-[#E8CFD2]">
                Learn more about Nyati Motion Pictures
              </NavLink>
            </h2>
          </div>
          {/** subtext & buttons */}
          <div className="box-border flex flex-col gap-[16px] items-center max-w-[441px] xl:gap-[40px]">
            <p className=" font-[Inter-Light] text-[13px] md:text-[14px] xl:text-base leading-[20px] text-center text-[#FFFFFE] select-none">
              Stream Originals like <span onClick={() => navigate("/film/6653925ab30afd15ac294f7a")} className="italic font-bold hover:text-[#E8CFD2] cursor-pointer">Tuko Pamoja Docuseries</span> , <span onClick={() => navigate("/film/6653809ab30afd15ac294f78")} className="italic font-bold hover:text-[#E8CFD2] cursor-pointer">Windows of Hope</span>,
              <span onClick={() => navigate("/film/66504774b30afd15ac294f77")} className="italic font-[700] hover:text-[#E8CFD2] cursor-pointer">&nbsp;Fair Play</span> and <span onClick={() => navigate("/film/665383c3b30afd15ac294f79")} className="italic font-bold hover:text-[#E8CFD2] cursor-pointer">Fate</span>
            </p>

            <div className="flex flex-row w-full flex-wrap items-center justify-center gap-[20px]">
              <Buttons
                className="flex items-center justify-center bg-[#D9D9D90D] w-[100%] sm:max-w-[196.85px]  md:w-[196.85px] h-[41.38px] rounded-[49.66px] font-normal font-[Roboto-Regular]  tracking-wide text-[13.96px]  sm:text-[15.96px]  text-[#FFFAF6] cursor-pointer
           border-[1px] border-[#FFFAF6]"
              >
                <NavLink
                  to="https://stream.nyatimotionpictures.com/"
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  Watch Now
                </NavLink>
              </Buttons>

              <Buttons 
             // onClick={() => navigate("/comingsoon")} 
              onClick={() => window.open(
                "https://play.google.com/store/apps/details?id=com.nyatimotionpictures.nyatiflix&hl=en-US&ah=dCecoSMvMMkVps6CbI8XZztYrL0", 
                "_blank", 
                "noopener,noreferrer"
              )}
              className="bg-[#EE5170] w-[100%] md:w-[190.34px] h-[41.38px] rounded-[49.66px] sm:max-w-[196.85px] font-normal font-[Roboto-Regular] tracking-wide text-[13.96px]   sm:text-[15.96px] text-[#FFFAF6] cursor-pointer">
                Get App for Free
              </Buttons>
            </div>
          </div>
        </div>

        {/** floating icons */}
        <div className="absolute hidden  bottom-[8px] left-[24px] w-[246px] h-max rounded-[9.78px] p-[8px] lg:flex flex-col gap-[12px]">
          <div className="flex flex-col w-max items-center gap-[15px]">
            <a
              href="https://api.whatsapp.com/send?phone=256778787660&text=%20"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon="ic:baseline-whatsapp"
                width="20px"
                height="20px"
                style={{ color: "#E8CFD2" }}
                className="flex justify-center p-[4px] items-center w-[34px] h-[34px] bg-gradient-to-r from-[rgba(238,80,112,0.03)] to-[rgba(238,80,112,0.30)] rounded-[10px] shadow-[0px_0.529px_5.295px_rgba(255,255,255,0.35)_inset] backdrop-blur-[3.31px] hover:scale-110"
              />
            </a>
            <a
              href="https://x.com/NyatiMPictures"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon="prime:twitter"
                width="20px"
                height="20px"
                style={{ color: "#E8CFD2" }}
                className="flex justify-center cursor-pointer p-[5px] items-center w-[34px] h-[34px] bg-gradient-to-r from-[rgba(238,80,112,0.03)] to-[rgba(238,80,112,0.30)] rounded-[10px] shadow-[0px_0.529px_5.295px_rgba(255,255,255,0.35)_inset] backdrop-blur-[3.31px] hover:scale-110"
              />
            </a>
            <div className="flex  h-[63px] w-[2px]  bg-[#F2F2F266] " />
          </div>

          <p className="text-[#E8CFD2]">info@nyatimotionpictures.com</p>
        </div>

        {/** floating arrow down btn */}
        <div className="absolute w-[2rem] cursor-pointer bottom-3 left-0 right-0 mx-auto">
          <Icon
            onClick={scrollFunc}
            icon="solar:round-alt-arrow-down-broken"
            width="2rem"
            height="2rem"
            style={{ color: "#E8CFD2" }}
          />
        </div>
      </div>
    </HeroContent>
  );
};

export default HHero;

const HeroContent = styled.div`
  background: linear-gradient(
      to top,
      rgba(20, 17, 24, 1),
      rgba(20, 17, 24, 0.729)
    ),
    url(${HeroBg}) top/cover no-repeat;
`;
