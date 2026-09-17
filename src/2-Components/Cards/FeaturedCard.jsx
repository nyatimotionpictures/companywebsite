import React from "react";
import Buttons from "../Buttons/Buttons";
import { NavLink } from "react-router-dom";
import { BASE_URL_PROD } from "../../3-Middleware/base-url.config";

const FeaturedCard = ({ data }) => {
 /**
 * Change this link
 */
  const base_url = BASE_URL_PROD

  const [openModal, setOpenModal] = React.useState(false);

  const handleMouseEnter = () => {
    setOpenModal(true);
  };

  const handleMouseLeave = () => {
    setOpenModal(false);
  };

  return (
    <div
      className="flex flex-col bg-transparent w-[240px] sm:w-[267.18px] h-[400px] md:w-[300px] md:h-[449.14px] gap-[17px] relative cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full overflow-hidden">
        <img src={data.imageUrl} alt="" className="size-fit w-full h-full " />
      </div>

      <p className="font-[Inter-SemiBold] font-semibold text-whites-40 text-opacity-70 text-left text-[16.92px] md:text-[19px] leading-normal ">
        {data.title}
      </p>

      {/** hover popup */}

      {openModal && (
        <div className="absolute top-0 w-full h-full gap-[15px] flex flex-col items-center justify-center bg-secondary-800 bg-opacity-70">
          <Buttons className="bg-[#1A171E] rounded-lg w-[220px] h-[54px] flex items-center justify-center text-[#EE5070] text-[13.96px] md:text-[16px] uppercase italic font-[Inter-Bold] hover:text-primary-500 mx-auto lg:mx-0">
            <NavLink to={`${base_url}${data.link}`}>Read More</NavLink>
          </Buttons>
          <Buttons className="bg-[#1A171E] rounded-lg w-[220px] h-[54px] flex items-center justify-center text-[#EE5070] text-[13.96px] md:text-[16px] uppercase italic font-[Inter-Bold] tracking-normal hover:text-primary-500 mx-auto lg:mx-0">
            <a href={`${data.Trailerlink}`} target="_blank">Watch Trailer</a>
          </Buttons>
        </div>
      )}
    </div>
  );
};

export default FeaturedCard;
