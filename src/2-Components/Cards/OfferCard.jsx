import React from 'react'

const OfferCard = ({ data }) => {
  return (
    <div className="w-[90%] sm:w-[224px] sm:h-[301.39px] flex flex-col justify-end  bg-primary-50 rounded-lg relative overflow-hidden">
      <div className="flex w-full h-full absolute object-cover z-10">
        <img src={data.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex w-full bg-secondary-800 bg-opacity-[80%] z-20  ">
        <div className="flex flex-col gap-[4.75px] text-whites-50 px-[21px] pt-[18px] pb-[12px] h-[178px]">
          <text className="font-medium font-[Inter-Medium] text-[18px] leading-[24px]">
            {data.title}
          </text>
          <text className="font-[Inter-Regular] font-normal text-[11px] ">
            {data.desc}
          </text>
        </div>
      </div>
    </div>
  );
};

export default OfferCard