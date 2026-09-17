import React from "react";
import { Icon } from "@iconify/react";
import CustomLoader from "../../2-Components/Modals/CustomLoader";
import Buttons from "../../2-Components/Buttons/Buttons";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import qs from "query-string";
import { useFilmDonate } from "../../5-Store/tanstack/state/mutations";

const DonationPay = () => {
  const params = useParams();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [searchParams] = useSearchParams();
  const search = qs.parse(searchParams.toString());
  let navigate = useNavigate();
  const usePayMutation = useFilmDonate();

  console.log("search", search);
  /**
   * Query string
   * token, option, phoneCode, paymentNumber
   *
   * userId, videoId
   *
   */
  React.useEffect(() => {
    localStorage.setItem("token", search?.token);
    localStorage.setItem("filmtitle", search?.filmtitle);
    localStorage.setItem("userId", params?.userId);
    localStorage.setItem("videoId", params?.videoId);
    // localStorage.setItem("phoneCode", search.phoneCode)
    // localStorage.setItem("paymentNumber", search.paymentNumber)
    console.log("search", search.token, params.userId, params.videoId);
  }, [search, params?.userId, params?.videoId]);

  const handleSubmitPayment = async () => {
    setErrorMessage(null);
    let paymentRequestData = {
      userId: params.userId,
      filmId: params.filmId,
      amount: search.amount,
      option: search.option,
      phoneCode: search.phoneCode,
      paymentNumber: search.paymentNumber,
    };

    usePayMutation.mutate(paymentRequestData, {
      onSuccess: (data) => {
        console.log("data", data);
        localStorage.setItem("orderTrackingId", data?.orderTrackingId);
        navigate(`/donate/validate/${data.orderTrackingId}`, { replace: true });
      },
      onError: (error) => {
        console.log("error", error);
        if (error?.message) {
          setErrorMessage(error?.message);
        }
      },
    });
  };

  return (
    <div className="bg-secondary-800 text-whites-50 min-h-[100vh] w-full flex flex-col items-center justify-center gap-[20px] relative">
      <div className="flex flex-col  items-center text-whites-40 gap-4 max-w-[287px]">
        <div className="flex flex-col items-center gap-4 w-full">
          {errorMessage !== null && (
            <p className="text-red-500 text-center font-[Inter-Regular] text-base text-opacity-80  ">
              {errorMessage}
            </p>
          )}
          <Icon
            icon="arcticons:chrono24"
            className=" text-[#FEAF38] flex justify-center items-center w-[40px] h-[40px] border-none border-[0.79px] "
          />
          <h1 className="text-[#FEAF38] font-[Inter-SemiBold] text-2xl  font-bold text-center lg:text-left">
            Confirm Details
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
            Please confirm the details Below and continue
          </p>

          <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80  ">
            You are making donation for <br />{" "}
            <span className="text-primary-500">{search?.filmtitle}</span> <br />
            <span className="font-[Inter-Bold]">Price:</span> UGX{" "}
            {search?.amount}
          </p>

          <p className="text-[#FFFAF6] text-center font-[Inter-Regular] text-base text-opacity-80 ">
            If you have any inquiries, reach out to us at:
          </p>

          <p className="text-[#FFFAF6] text-center font-[Inter-Bold] text-base ">
            info@nyatimotionpictures.com
          </p>
        </div>

        <div className="w-full relative flex justify-center items-center mt-10">
          {usePayMutation.isPending ? (
            <CustomLoader />
          ) : (
            <Buttons
              disabled={usePayMutation.isPending}
              onClick={handleSubmitPayment}
              className="w-full rounded-full text-whites-50 font-[Roboto-Medium] text-base"
            >
              Continue
            </Buttons>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationPay;
