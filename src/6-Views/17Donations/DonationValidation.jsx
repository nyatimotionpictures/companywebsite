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

  // check every 3s while pending (MoMo approvals take seconds); stop after
  // 3 minutes, by which point MTN has timed the prompt out
  const startedAt = React.useRef(Date.now());
  const { data } = useQuery({
    queryKey: ["donationStatus", params.orderTrackingId],
    queryFn: () => getPaymentStatus(params.orderTrackingId),
    enabled: !!params.orderTrackingId,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    refetchInterval: (query) => {
      const current = query.state.data?.status;
      const pending = !current || current === "PENDING";
      return pending && Date.now() - startedAt.current < 3 * 60 * 1000
        ? 3000
        : false;
    },
  });


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
        case "timeout":
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
