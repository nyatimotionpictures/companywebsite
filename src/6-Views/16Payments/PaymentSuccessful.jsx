import React from "react";
import { Icon } from "@iconify/react";
import Buttons from "../../2-Components/Buttons/Buttons";

const PaymentSuccessful = (status) => {
  const handleClose = () => {
    window.ReactNativeWebView.postMessage("returntofilm");
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (status === "SUCCESSFUL") {
        handleClose();
      }
    }, 30000);

    return () => {
      clearTimeout();
    };
  }, [status]);
  return (
    <div className="flex flex-col  items-center text-whites-40  max-w-[287px] gap-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4 w-full">
          <Icon
            icon="arcticons:ticktick"
            className=" text-[#06CC6B] flex justify-center items-center w-[40px] h-[40px] border-none border-[0.79px] "
          />
          <h1 className="text-[#06CC6B] font-[Inter-SemiBold] text-2xl  font-bold text-center lg:text-left">
            Payment Successful
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
            Your payment is confirmed. <br />
            Enjoy watching <br />
          </p>

          <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
            You have 72hrs to view the movie.
          </p>

          <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
            If you have any inquiries with this payment contact:
          </p>

          <p className="text-[#FFFAF6] text-center font-[Inter-Bold] text-base ">
            info@nyatimotionpictures.com
          </p>
        </div>
      </div>

      <div className="w-full relative flex justify-center items-center ">
        <Buttons
          onClick={handleClose}
          className="w-full rounded-full text-whites-50 font-[Roboto-Medium] text-base"
        >
          Close
        </Buttons>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
