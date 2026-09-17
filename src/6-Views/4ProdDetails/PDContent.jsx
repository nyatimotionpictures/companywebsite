import React, { useContext } from "react";

import iconImg from "../../1-Assets/ProdImages/Union.svg";
import Buttons from "../../2-Components/Buttons/Buttons";
import DonateModal from "../../2-Components/Modals/DonateModal";
import Metadata from "../../1-Assets/data/web_metadata.json";

const obj = Metadata;
const result = obj[Object.keys(obj)[5]];
const Content = result.content[0];

const priceArray = [
  
  {
    key: "1",
    amount: 10000,
  },
  {
    key: "2",
    amount: 20000,
  },
  {
    key: "3",
    amount: 40000,
  },
  {
    key: "4",
    amount: 100000,
  },
  {
    key: "5",
    amount: 200000,
  },
  {
    key: "6",
    amount: 300000,
  },
];

const PDContent = () => {
  const [openAmountModal, setOpenAmountModal] = React.useState(false);
  const [selectedAmount, setSelectedAmount] = React.useState(10000);
 

  React.useEffect(() => {
    if (openAmountModal) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }

  }, [openAmountModal])

  const handleChangeAmount = (amount) => {
    setSelectedAmount(() => amount);
  };

  const handleAmountOpen = () => {
    setOpenAmountModal(() => true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  }
  const handleAmountClose = () => {
    setOpenAmountModal(() => false);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="bg-secondary-800  flex flex-col items-center justify-center px-[30px] py-[54px] sm:px-16 md:px-16 lg:px-16 sm:py-16 w-screen overflow-hidden">
      <div className="flex flex-col gap-10 items-center text-center justify-center md:items-start md:flex-row lg:text-left lg:items-start xl:flex-row lg:justify-between w-full lg:max-w-[1000px] ">
        {/** text portion */}
        <div className="flex flex-col gap-[20px] lg:max-w-[570px]">
          {/** overview */}
          <div className="flex flex-col gap-[12px]">
            <div className="font-[Inter-SemiBold] text-[18px] text-left sm:text-xl lg:text-2xl text-whites-50 font-semibold">
              Overview
            </div>
            <div className="font-[Inter-Regular] font-normal text-base text-left  lg:text-justify 2xl:text-lg text-whites-50 opacity-45 ">
             { Content.text }
            </div>
          </div>
          {/** directors */}
          <div className="flex flex-col gap-[12px]">
            <div className="font-[Inter-SemiBold] text-[18px] text-left sm:text-xl lg:text-2xl text-whites-50 font-semibold">
              Directors
            </div>
            <div className="font-[Inter-Regular] font-normal text-base text-left lg:text-justify 2xl:text-lg text-whites-50 opacity-45 ">
              Cindy Magara
            </div>
          </div>
          {/** Producers */}
          <div className="flex flex-col gap-[12px]">
            <div className="font-[Inter-SemiBold] text-[18px] text-left sm:text-xl lg:text-2xl text-whites-50 font-semibold">
              Producers
            </div>
            <div className="font-[Inter-Regular] font-normal text-base text-left lg:text-justify 2xl:text-lg text-whites-50 opacity-45 ">
              Cindy Magara, Godwin Otwoma
            </div>
          </div>
          {/** Writers */}
          <div className="flex flex-col gap-[12px]">
            <div className="font-[Inter-SemiBold] text-[18px] text-left sm:text-xl lg:text-2xl text-whites-50 font-semibold">
              Writers
            </div>
            <div className="font-[Inter-Regular] font-normal text-base text-left lg:text-justify 2xl:text-lg text-whites-50 opacity-45 ">
              Cindy Magara
            </div>
          </div>
        </div>

        {/** donation section */}
        <div className="w-[300px] md:min-w-[300px] lg:min-w-[360px] lg:w-[360px] h-[420px] flex flex-col items-center justify-between rounded-lg px-[10px] lg:px-[39px] py-[30.45px] bg-[#18161C] border-2 border-transparent ring-2 ring-[#2a282e]">
          {/** title */}
          <div className="flex flex-row items-center w-full  lg:w-full gap-[20px]">
            <div>
              <div className="w-[57px] h-[57px] rounded-full bg-[#F7A8B8] flex flex-col items-center justify-center relative">
                <img src={iconImg} alt="" className="w-[50%]" />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <text className="text-whites-50 font-[Inter-SemiBold] text-[14px] items-start lg:text-[17.73px] ">
                From Script to Screen Join Our Journey
              </text>
            </div>
          </div>

          {/** amount */}

          <div className="flex flex-row text-[28px] text-[#FFFAF6] h-[20px] items-center justify-center gap-[20px]    w-full min-w-[168px]">
            <div className="font-[Inter-SemiBold] w-max">UGX</div>
            <div className="flex flex-row w-full max-w-max">
              <p className="h-full bg-transparent  w-full p-0 m-0">
                {" "}
                {selectedAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>

          {/** amount inputs && Buttons */}

          <div className="w-full flex flex-col gap-[30px]">
            <div className="w-full flex flex-row flex-wrap items-center justify-center gap-[7.5px]">
              {priceArray.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`border-[#ED3F62] border-[1px] rounded-[20px] flex items-center justify-center font-[Inter-Bold]  text-[13.13px] py-[7.5px] px-[13px] w-max cursor-pointer select-none  ${
                      data.amount === selectedAmount
                        ? "text-[#F2F2F2] bg-primary-500"
                        : "text-primary-500 bg-[#302d38]"
                    }`}
                    onClick={() => handleChangeAmount(data.amount)}
                  >
                    <p>
                      {data.amount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                );
              })}
            </div>
            <Buttons onClick={handleAmountOpen} className="bg-primary-500 w-full rounded-full py-[10.5px] text-[18px] font-[Roboto-Medium] font-medium text-[#ffffff]">
              Send Us A Donation
            </Buttons>
          </div>
        </div>
      </div>

      {openAmountModal && (

        <DonateModal visible={openAmountModal} onClose={handleAmountClose} selectedAmount={selectedAmount} />

      )}
    </div>
  );
};

export default PDContent;
