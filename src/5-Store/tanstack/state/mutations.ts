import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  donationRequest,
  paymentRequest,
  postDonationProcess,
  postPaymentProcess,
} from "./api";

export function usePurchaseFilm() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["purchaseFilm"],
    mutationFn: (details: paymentRequest) => postPaymentProcess(details),
  });
}

export function useFilmDonate() {
  return useMutation({
    mutationFn: (details: donationRequest) => postDonationProcess(details),
  });
}
