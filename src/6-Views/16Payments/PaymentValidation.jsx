import React, { useCallback, useState } from "react";
// import CustomLoader from "../../2-Components/Modals/CustomLoader";
import PropTypes from "prop-types";

import PaymentFailed from "./PaymentFailed";
import PaymentTimedout from "./PaymentTimedout";
import PaymentSuccessful from "./PaymentSuccessful";
import PaymentPending from "./PaymentPending";

// import { useGetPaymentStatus } from "../../5-Store/tanstack/state/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "../../5-Store/tanstack/state/api";
import { queryClient } from "../../lib/tanstack";

const PaymentValidation = () => {
  const params = useParams();
  //const [isLoading, setIsLoading] = useState(false);
  // const [orderTrackingId, setOrderTrackingId] = useState("");
  // const [checkingStatus, setCheckingStatus] = useState(false);
  // const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [transaction, setTransaction] = useState(null);

  // check every 3s while pending (MoMo approvals take seconds); stop after
  // 3 minutes, by which point MTN has timed the prompt out
  const startedAt = React.useRef(Date.now());
  const { data } = useQuery({
    queryKey: ["paymentStatus", params.orderTrackingId],
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
      <DisplayContainer
        errorMessage={errorMessage}
        transaction={data?.transaction}
        status={data?.status ?? "PENDING"}
      />
    </div>
  );
};

const DisplayContainer = React.memo(({ status, transaction, errorMessage }) => {
  const renderSwitch = useCallback(
    (status) => {
      let statusLower = status ? status.toLowerCase() : "";
      switch (statusLower) {
        case "successful":
          return (
            <PaymentSuccessful transaction={transaction} status={status} />
          );
        case "pending" || null || undefined:
          return <PaymentPending errorMessage={errorMessage} />;
        case "failed":
          return <PaymentFailed />;
        case "timeout":
        case "timedout":
          return <PaymentTimedout />;
        default:
          return <PaymentPending errorMessage={errorMessage} />;
      }
    },
    [transaction, errorMessage]
  );

  return <div>{renderSwitch(status)}</div>;
});

DisplayContainer.propTypes = {
  status: PropTypes.string.isRequired,
  transaction: PropTypes.object,
  errorMessage: PropTypes.string,
};

DisplayContainer.displayName = "DisplayContainer";

export default PaymentValidation;
