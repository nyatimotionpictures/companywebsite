import React from 'react'
import DiscoverCard from "../../2-Components/Cards/DiscoverCard";
import Buttons from '../../2-Components/Buttons/Buttons';
import Metadata from '../../1-Assets/data/web_metadata.json'

const obj = Metadata;
const result = obj[Object.keys(obj)[1]];
const Images = result.content[2].files;

const discoverItems = [
  {
    title: "States People",
    bgImage: Images[2],
    subtext:
      "A gripping story about an optimistic, incorruptible police officer navigating the idealistic world of training and the harsh realities of the field, both of which prove to be fallacies.",
    author: "Cindy Magara",
    type: "Scripts for sale",
  },
  {
    title: "2100",
    bgImage: Images[0],
    subtext: "A futuristic film about a developed, corrupt-free Africa",
    author: "Cindy Magara",
    type: "Scripts for sale",
  },
];

const SScriptSection = () => {
  return (
    <div className="bg-[#17141B] flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen">
      <div className="flex flex-col-reverse w-full justify-between lg:flex-row lg:max-w-[1000px] gap-[30px]">
        {/** discover content */}
        <div className="w-full flex flex-row gap-10 flex-wrap  items-center justify-center">
          {discoverItems.map((data, index) => {
            return <DiscoverCard data={data} />;
          })}
        </div>
        {/** text portion */}
        <div className="flex flex-col gap-[40px] text-center lg:max-w-[355px] lg:text-right">
          <div className="flex flex-col gap-2">
            <div className="font-[Inter-SemiBold] text-[18px] sm:text-xl lg:text-2xl text-whites-50 text-opacity-70 font-semibold">
              Scripts for Sale
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="font-[Inter-Bold] font-bold text-[27px] sm:text-3xl lg:text-4xl  capitalize text-whites-50">
                Unlock creativity on demand!
              </div>
              <div className="font-[Inter-Regular] font-normal text-base 2xl:text-lg text-whites-50 opacity-45">
                We have ready-made scripts, tailored for film production houses
                and television networks. From gripping dramas to uproarious
                comedies.
              </div>
            </div>
          </div>

          <div>
            <span className="w-max italic bg-transparent text-primary-500  lg:text-whites-40 font-[Inter-Regular] text-base  py-0 px-0 hover:bg-transparent  ">
              Contact us for more information.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SScriptSection