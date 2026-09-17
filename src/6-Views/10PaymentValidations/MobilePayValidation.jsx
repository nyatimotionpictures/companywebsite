import React, { useCallback, useMemo } from 'react'
import LogoImg from "../../1-Assets/logo/logo.svg";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { BASE_API } from '../../3-Middleware/base-url.config.js';

import PaymentFailed from '../../2-Components/MobilePayModes/PaymentFailed.jsx';
import PaymentProcessing from '../../2-Components/MobilePayModes/PaymentProcessing.jsx';
import PaymentSuccess from '../../2-Components/MobilePayModes/PaymentSuccess.jsx';
import PaymentTimedOut from '../../2-Components/MobilePayModes/PaymentTimedOut.jsx';
import PaymentError from '../../2-Components/MobilePayModes/PaymentError.jsx';

const getSubmissionLink = (payMethod) => {
    switch (payMethod) {
        case "Airtel":
            return `${BASE_API}/payment/airtel`
        case "Mtn":
            return `${BASE_API}/payment/mtn`
    }
}

const MobilePayValidation = () => {
    let timer;
    const [responseVals, setResponseVals] = React.useState({
        timeset: 0,
        timedOut: false,
        paymentError: "",
        paymentFailed: ''
    });

    const [responseData, setResponseData] = React.useState(null);
    const [currentStatus, setCurrentStatus] = React.useState(null);
    let [searchParams] = useSearchParams();
    let location = useLocation();
    let getTransactId = searchParams.get("tId");
    let getPayMethod = location.state;

    React.useEffect(() => {
        initiateCheckTransact()
    }, [])

    const initiateCheckTransact = () => {
        timer = setTimeout(() => {
            checkTransaction(getTransactId);
        }, 10000)
    }

    const checkTransaction = async (Id) => {
        if (!getPayMethod?.mt && !getTransactId) {
            setResponseVals({
                paymentError: "Sorry there is an Error with Validation. Parameter Error.",
            })
            // console.log("timer", timer)
            clearTimeout(timer);
            setCurrentStatus(() => "payError")
        } else if (getPayMethod.mt && getTransactId) {

            if (responseVals.timeset <= 5) {
                let numberOfTimes = responseVals.timeset + 1;
                setResponseVals(() => ({ ...responseVals, timeset: numberOfTimes }));

                let requestLink = getSubmissionLink(getPayMethod.mt)
                let getStatus = await axios.get(`${requestLink}/transact_statuses/${Id}`);

                //console.log("getStatus", getStatus.data)

                if (getStatus.data.payStatus === "Transaction Successful" || getStatus.data.payStatus === "Completed" || getStatus.data?.payStatus === undefined  && getStatus.data?.payStatus?.includes("success")) {
                    clearTimeout(timer);
                    paySuccessful(Id);
                } else if (getStatus.data.payStatus === "Transaction has Failed" || getStatus.data.payStatus === "Transaction Rejected" || getStatus.data?.payStatus === undefined && getStatus.data?.payStatus?.includes("failed")) {
                   
                    //console.error("payment failed", getStatus.data.status_reason)
                    setCurrentStatus(() => "failed")
                    
                    clearTimeout(timer);
                   
                    setResponseVals(() => ({
                        ...setResponseVals, timeset: 0,
                        timedOut: false, paymentError: "",
                        paymentFailed: getStatus.data.status_reason,
                    }))
                   
                } else {
                    setCurrentStatus(() => "pending")
                    initiateCheckTransact();
                }
            } else {
                // console.log("timer", timer)
                clearTimeout(timer);
                setResponseVals({
                    timedOut: true,
                })
            }

        }


    }

    const resetTimer = () => {
        setResponseVals({ timeset: 0, timedOut: false, paymentError: "" });
        initiateCheckTransact();
    }

    const paySuccessful = async (Id) => {
        let requestLink = getSubmissionLink(getPayMethod.mt)
        let getStatus = await axios.get(`${requestLink}/checkStatus?OrderTrackingId=${Id}`);
       // console.log("getStatus", getStatus.data)
        if (getStatus.data) {
            setResponseData(() => getStatus.data)
            setCurrentStatus(() => "success")
        }
    }

    {/** display property */ }

    const DisplayContainer = React.memo(({ status }) => {
        const renderSwitch = useCallback((status) => {
            switch (status) {
                /** Processing Payment */
                case null:
                    return (
                        < PaymentProcessing />
                    );
                    break;
                case "pending":
                    return (
                        < PaymentProcessing />
                    );
                    break;
                /** payment failed */
                case "failed":
                    return (<PaymentFailed responseVals={responseVals} tranactId={getTransactId} />);
                    break;
                /** payment success */
                case "success":
                    return (
                        <PaymentSuccess responseData={responseData} tranactId={getTransactId} />
                    )
                    break;
                /** payment timedout */
                case "timeout":
                    return (
                        <PaymentTimedOut responseVals={responseVals} resettimer={resetTimer} />
                    )
                    break;
                /** payment Error */
                case "payError":
                    return (
                        <PaymentError responseVals={responseVals} />
                    )
                    break;
                default:
                    return null;
                    break;
            }
        }, [status])

        return <div>{renderSwitch(status)}</div>;
    })
  //  console.log("displayContainer", displayContainer)
  return (
      <div className="bg-[#D7D5D5] min-h-[100vh] w-full flex flex-col items-center justify-center gap-[20px] relative">
          <div className="w-screen h-[85px] absolute z-[10] top-0 flex items-center justify-between px-2 lg:px-12  xl:px-16 !overflow-hidden">
              <div className="w-[70px] h-[70px] lg:w-[70px] lg:h-[70px] relative flex">
                  <img src={LogoImg} alt="" className="object-cover w-full h-full" />
              </div>
          </div>

          {<DisplayContainer status={currentStatus} />}

      </div>
  )
}

export default MobilePayValidation