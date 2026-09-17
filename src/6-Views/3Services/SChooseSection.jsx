import React from "react";
import ideaImg from "../../1-Assets/Services/Choose/idea.svg";
import equipmentImg from "../../1-Assets/Services/Choose/equipment.svg";
import creativeImg from "../../1-Assets/Services/Choose/creative.svg";
import consultImg from "../../1-Assets/Services/Choose/consult.svg";
import Metadata from '../../1-Assets/data/web_metadata.json'

const obj = Metadata;
const result = obj[Object.keys(obj)[1]];
const bgImages = result.content[5].files[0];

const ListItems = [
  {
    title: "Comprehensive Services Across All Production Stages",
    image: ideaImg,
  },
  {
    title: "High-Quality Equipment",
    image: equipmentImg,
  },
  {
    title: "Creative and Innovative Script Development",
    image: creativeImg,
  },
  {
    title: "Tailored Consultancy Services",
    image: consultImg,
  },
];

const SChooseSection = () => {
  return (
    <div
      className={`bg-secondary-900 flex flex-col items-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen h-full relative`}
    >
      {/**bg-image */}
      <div className="w-full h-full object-cover absolute top-0 blur-[0px] z-10">
        <img
          src={bgImages}
          alt=""
          className="object-cover w-full h-full object-left "
          style={{
            filter: "brightness(40%)", // Adjust brightness if needed
          }}
        />
      </div>

      <div className="flex flex-col-reverse gap-10 xl:gap-[20px]  lg:flex-row w-full lg:max-w-[1000px] justify-between items-center z-30">
        {/** List */}
        <div className="lg:max-w-[418.67px] justify-center flex lg:flex-col flex-wrap lg:flex-nowrap gap-[30px]">
          {ListItems.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center w-[131.03px] lg:w-full gap-[20px]"
              >
                <div>
                  <div className="w-[92px] h-[92px] rounded-full bg-[#F7A8B8] flex flex-col items-center justify-center relative">
                    <img src={data.image} alt="" className="w-[50%]" />
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <text className="text-whites-50 font-[Inter-SemiBold] text-[14px] items-start lg:text-[22px] ">
                    {data.title}
                  </text>
                </div>
              </div>
            );
          })}
        </div>

        {/** text */}
        <div className="flex flex-col lg:max-w-[452.44px] text-center lg:text-right gap-2 ">
          <text className="font-[Inter-SemiBold] text-[18px] sm:text-xl  lg:text-2xl text-whites-50 text-opacity-70 font-semibold capitalize">
            Why Choose Us
          </text>
          <div className="font-[Inter-Bold] font-bold text-[27px] sm:text-3xl  md:leading-[50px] lg:text-4xl capitalize text-whites-50">
            for A professional creative partner{" "}
          </div>
          <div className="text-whites-50 font-normal font-[Inter-Regular] text-base lg:text-lg text-opacity-60">
            Based in Uganda, Nyati Motion Pictures combines deep local knowledge
            with global industry standards. This blend allows us to deliver
            culturally relevant content that meets international quality
            benchmarks, making us the ideal partner.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SChooseSection