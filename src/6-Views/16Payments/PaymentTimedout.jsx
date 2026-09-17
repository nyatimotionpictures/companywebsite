import { Icon } from "@iconify/react";
import Buttons from "../../2-Components/Buttons/Buttons";

const PaymentTimedout = () => {
  return (
    <div className="flex flex-col  items-center text-whites-40  max-w-[287px] gap-40">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4 w-full">
          <Icon
            icon="arcticons:chrono24"
            className=" text-[#B3B3B3] flex justify-center items-center w-[40px] h-[40px] border-none border-[0.79px] "
          />
          <h1 className="text-[#B3B3B3] font-[Inter-SemiBold] text-2xl  font-bold text-center lg:text-left">
            Payment Timed Out
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
            It seems your payment didn&apos;t go through in time.
          </p>

          <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
            Please try again to complete your purchase. If the issue persists,
            feel free to contact us at:
          </p>

          <p className="text-[#FFFAF6] text-center font-[Inter-Bold] text-base ">
            info@nyatimotionpictures.com
          </p>
        </div>
      </div>

      <div className="w-full relative flex justify-center items-center ">
        <Buttons
          className="w-full rounded-full"
          onClick={() => {
            if (window.ReactNativeWebView) {
              window.ReactNativeWebView.postMessage("failedcancel");
            }
          }}
        >
          Close
        </Buttons>
      </div>
    </div>
  );
};

export default PaymentTimedout;
