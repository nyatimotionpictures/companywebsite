import React from 'react'
import OfferCard from "../../2-Components/Cards/OfferCard";
import Metadata from '../../1-Assets/data/web_metadata.json'

const obj = Metadata;
const result = obj[Object.keys(obj)[1]];
const Images = result.content[4].files;


const offerArray = [
  {
    title: "Consultancy",
    img: Images[0],
    desc: "We do consultancy on all aspects of film production, ie screenplay writing, pre-production, production and post-production. We also research on the creative, media and culture industries in the region and the continent.",
  },
  {
    title: "Script Development",
    img: Images[1],
    desc: "We develop and write screenplays for films/ series and documentaries. We also sell readymade scripts to other film production houses and television",
  },
  {
    title: "Film Production",
    img: Images[2],
    desc: "We produce short feature films, both independent and commissioned",
  },
  {
    title: "Film Editing",
    img: Images[3],
    desc: "We Provided video editing services to piece together the filmed material into a coherent and engaging narrative.",
  },
  {
    title: "Sound Mastering",
    img: Images[4],
    desc: "We enhancing the audio quality and ensure that the final sound mix meets industry standards.",
  },
  {
    title: "Equipment Hire",
    img: Images[5],
    desc: "We rent out production equipment such as drone cameras, Mirrorless Cameras, lenses, etc) ",
  },
  {
    title: "Film Distribution",
    img: Images[6],
    desc: "Nyati Motion Pictures distributes all Nyati films via Video of Demand App—Nyati Films App and via the website for streaming. Some films are uploaded on YouTube for open access (for schools only).",
  },
];

const ServicesOfferSection = () => {
  return (
    <div className="bg-secondary-800 flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 w-screen">
      <div className="flex flex-col w-full lg:max-w-[1000px] gap-[30px]">
        {/** offer text */}
        <div className="flex flex-col gap-4 text-center">
          <text className="font-[Inter-SemiBold] text-[18px] sm:text-xl lg:text-2xl text-whites-50 text-opacity-70 font-semibold">
            What we offer
          </text>
          <div className="font-[Inter-Bold] font-bold text-[27px] sm:text-3xl lg:text-4xl capitalize text-whites-50">
            Enhance Your Visual Storytelling
          </div>
        </div>

        {/** offer content */}
        <div className="flex flex-row flex-wrap gap-[19px] items-center justify-center w-full lg:mt-4">
          {offerArray.map((data, index) => {
            return <OfferCard key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesOfferSection