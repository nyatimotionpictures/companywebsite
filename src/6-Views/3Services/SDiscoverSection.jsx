import React from "react";
import DiscoverCard from "../../2-Components/Cards/DiscoverCard";
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
  {
    title: "Conquer or Die",
    bgImage: Images[1],
    subtext:
      "Conquer or Die is woven around the predicaments of Uganda’s symbols of independent or colonial resistance.",
    author: "Cindy Magara",
    type: "Pre-production",
  },
];

const SDiscoverSection = () => {
  return (
    <div className="bg-secondary-800 flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen">
      <div className="flex flex-col w-full lg:max-w-[1000px] gap-[30px]">
        {/** discover text */}
        <div className="flex flex-col gap-[20px] text-center">
          <text className="text-whites-50 font-semibold font-[Inter-SemiBold] text-[18px] sm:text-xl md:text-[32px] lg:text-2xl capitalize">
            Discover Our Awesome Projects
          </text>
        </div>
        {/** discover content */}
        <div className="flex flex-row gap-[20px] flex-wrap items-center justify-center">
          {discoverItems.map((data, index) => {
            return <DiscoverCard data={data} btype={true} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SDiscoverSection;
