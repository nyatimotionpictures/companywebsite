import React from 'react'
import AchievedFilmCard from '../../2-Components/Cards/AchievedFilmCard';
import Buttons from '../../2-Components/Buttons/Buttons';
import ImpactData from '../../1-Assets/data/impactData.json'
import { useNavigate } from 'react-router-dom';


const AImpactSection = () => {
  let navigate = useNavigate()
  return (
    <div className="bg-[#141118]  flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 sm:py-16 lg:py-24 w-screen overflow-hidden relative gap-[42px] md:gap-[42px] lg:gap-[30px]">
      <div className="flex flex-col lg:flex-col justify-between items-center md:max-w-[743px] lg:max-w-[1000px] gap-[20px] md:gap-[20px] xl:gap-[26px] ">
        {/* main title */}
        <h1 className="text-[#F2F2F2] w-full font-[Inter-Bold] text-center text-[30px] md:text-[38px] lg:text-[40px]">
          Our Impact & Achievement
        </h1>

        {/* Paragraph */}
        <p className="w-full text-[#F2F2F2] font-[Inter-Regular] text-[14px] md:text-[18px] text-opacity-70 text-justify">
          Film is a very powerful and effective medium for transmitting messages in society. In the last decade, Nyati Motion Pictures (NMP) has produced educative and entertaining films that have positively affected our society.
        </p>
        <p className="w-full text-[#F2F2F2] font-[Inter-Regular] text-[14px] md:text-[18px] text-opacity-70 text-justify">
          The Nyati Motion Pictures is motivated by ‘art for man’s sake’. As a result, the Nyati team is committed to telling authentic African stories that bring the artistic reality close to the people. Our films are inspired by real-life experiences specific to the spatial and temporal setting, yet with universal themes. Our films represent and bring Uganda’s culture and experience to the whole world with the primary purpose of contributing to the socio-economic development of our country and Africa at large.
        </p>
      </div>
      {/** Achievements */}
      <div className="flex flex-col gap-[69px] w-full md:items-center lg:max-w-[1000px]">
        {/* Title */}
        <h1 className="text-[#F2F2F2] font-[Inter-SemiBold] text-2xl text-center text-opacity-70 lg:mt-[30px]">Below Are Some Themes</h1>
        {/* Themes Section */}

        <div className="gap-[29px] flex flex-col items-center md:items-center lg:items-start w-full ">
          <div className="flex flex-wrap gap-[30px] md:gap-[30px] md:px-[4px] md:flex-wrap lg:flex-col lg:gap-[20px] w-full justify-center ">
            {
              ImpactData.map((data, index) => {
                return <AchievedFilmCard key={index} data={data} />
              })
            }
          </div>
         

          <Buttons onClick={()=> navigate("/film")} className="w-max bg-[#1A171E] px-[30px] py-[16px] text-[#EE5070] italic font-[Inter-Bold] text-base">MORE NYATI FILMS</Buttons>
        </div>
      </div>
     
    </div>
  );
}

export default AImpactSection