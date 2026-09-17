import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import DonationFailed from "./DonationFailed";
import DonationTimedout from "./DonationTimedout";
import DonationSuccessful from "./DonationSuccessful";
import DonationPending from "./DonationPending";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPaymentStatus } from "../../5-Store/tanstack/state/api";
import { queryClient } from "../../lib/tanstack";

const DonationValidation = () => {
  const params = useParams();
  //const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const { data, status, error, refetch } = useQuery({
    queryKey: ["donationStatus", params.orderTrackingId],
    queryFn: () => getPaymentStatus(params.orderTrackingId),
    enabled: !!params.orderTrackingId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    // onSettled: (data, error) => {
    //   if (error) {
    //     setErrorMessage(error?.message);
    //     return;
    //   }
    //   console.log("data2323", data);

    //   if (data?.status === "PENDING") {
    //     console.log("PENDING");
    //     setTimeout(() => {
    //       queryClient.invalidateQueries({
    //         queryKey: ["donationStatus", params.orderTrackingId],
    //       })
    //       refetch();
    //      // queryClient.refetchQueries("donationStatus");
    //     }, 1000);
    //   } else {
    //     console.log("done");
    //   }
    // },
  });

  React.useEffect(() => {
  
    let timedout = null;
    if (status === "success") {
      if (data?.status === "PENDING") {
        timedout = setTimeout(() => {
           // console.log(data?.status);
            refetch();
          // queryClient.invalidateQueries({
          //   queryKey: ["donationStatus", params.orderTrackingId],
          // });
        //  queryClient.refetchQueries("donationStatus");
        }, 20000);
      } else {
        clearTimeout(timedout);
      }
    }
    

    return () => {
      console.log("unmount");
     
    };
  }, [data, params.orderTrackingId, status]);

  return (
    <div className="bg-secondary-800 text-whites-50 min-h-[100vh] w-full flex flex-col items-center justify-center gap-[20px] relative">
      {/* <DonationPending/> */}
      {/* <DonationFailed /> */}
      {/* <DonationTimedout /> */}
      {/* <DonationSuccessful /> */}
      {/* <ProcessingPay /> */}

      {
        <DisplayContainer
          status={data?.status ?? "PENDING"}
          errorMessage={errorMessage}
        />
      }
    </div>
  );
};

const DisplayContainer = React.memo(({ status, errorMessage }) => {
  const renderSwitch = useCallback(
    (status) => {
      let statusLower =
        (status && status !== null) || (status && status !== undefined)
          ? status.toLowerCase()
          : "";
      switch (statusLower) {
        case "successful":
          return <DonationSuccessful />;
        case "pending" || null || undefined:
          return <DonationPending errorMessage={errorMessage} />;
        case "failed":
          return <DonationFailed />;
        case "timedout":
          return <DonationTimedout />;
        default:
          return <DonationPending errorMessage={errorMessage} />;
      }
    },
    [errorMessage]
  );

  return <div>{renderSwitch(status)}</div>;
});

DisplayContainer.displayName = "DisplayContainer";

DisplayContainer.propTypes = {
  status: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default DonationValidation;
