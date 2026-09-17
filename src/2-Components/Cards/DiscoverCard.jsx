import React from 'react'

const DiscoverCard = ({ data, btype = false }) => {
  return (
    <div className="flex flex-col h-[320px] w-[216.22px] md:h-[328.89px] md:w-[222.22px] rounded-[8.04px] relative overflow-hidden ">
      <div className="absolute w-full h-full top-0 z-10">
        <img
          src={data.bgImage}
          alt=""
          className="w-full h-full "
          style={{
            filter: "brightness(40%)", // Adjust brightness if needed
          }}
        />
      </div>

      <div className="flex flex-col h-full w-full justify-between z-30 px-[18px] py-[21px]">
        <div className="flex flex-col gap-[5px]">
          <text className="font-semibold font-[Inter-SemiBold] text-[21.62px] md:text-[22.22px] text-whites-40">
            {data.title}
          </text>
          <div className="flex flex-col text-whites-50 text-[13.33px] font-[Inter-Regular] font-normal gap-[20px]">
            <text>{data.subtext}</text>

            <div className="">
              <text className="block">Written by</text>
              <text>{data.author}</text>
            </div>
          </div>
        </div>

        {btype && (
          <text className="font-[Inter-SemiBold] font-semibold text-[15.11px] text-whites-40 uppercase">
            {data.type}
          </text>
        )}
      </div>
    </div>
  );
};

export default DiscoverCard