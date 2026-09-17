import axios, { AxiosError } from "axios";
import apiRequest from "../../../3-Middleware/apiRequest";
import { BASE_API } from "../../../3-Middleware/base-url.config";

interface ErrorResponse {
  message: string;
}
export interface paymentRequest {
  userId: string;
  videoId: string;
  option: string;
  phoneCode: string;
  paymentNumber: string;
}
interface paymentRequestResponse {
  orderTrackingId: string;
}

export interface donationRequest {
  userId: string;
  filmId: string;
  option: string;
  phoneCode: string;
  paymentNumber: string;
  amount: number | string;
}

interface paymentStatusResponse {
  status: string;
}

export const postPaymentProcess = async (
  details: paymentRequest
): Promise<paymentRequestResponse> => {
  try {
    let token = localStorage.getItem("token");
    let { ...rest } = details;
    const response = await axios.post<paymentRequestResponse>(
      `${BASE_API}/film/purchase`,
      {
        ...rest,
        
      },{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    //console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    const axiosError = error as AxiosError<ErrorResponse>;

    throw axiosError.response?.data ?? { message: "An unknown error occurred" };
  }
};

export const getPaymentStatus = async (
  orderId: string
): Promise<paymentStatusResponse> => {
  try {
    console.log("orderId", orderId);
    let token = localStorage.getItem("token");
    const response = await axios.get<paymentStatusResponse>(
    `${BASE_API}/film/checkpaymentstatus/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
    );
    //console.log("response", response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;

    throw axiosError.response?.data ?? { message: "An unknown error occurred" };
  }
};

//donation
export const postDonationProcess = async (
  details: donationRequest
): Promise<paymentRequestResponse> => {
  try {
    let token = localStorage.getItem("token");
    let { userId, filmId, ...rest } = details;
    const response = await axios.post(
      `${BASE_API}/film/donate/${userId}/${filmId}`,
      rest, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // const response = await axios.post(
    //   `http://localhost:4500/api/v1/film/donate/6732300de13fb1bc0e97bc21/66ba92032df5ff8a0a4574ac`,
    //   {
    //     option:"mtnmomo",
    //     "amount": "1000",
    //     "phoneCode": "+256",
    //     "paymentNumber": "782765353",
    //       "filmtitle": "Fair Play"
        
    //   }, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    //console.log("response", response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;

    throw axiosError.response?.data ?? { message: "An unknown error occurred" };
  }
};

export const getDonationStatus = async (
  orderId: string
): Promise<paymentStatusResponse> => {
  try {
    const response = await axios.get<paymentStatusResponse>(
       `http://localhost:4500/api/v1/film/checkpaymentstatus/${orderId}`
    );
    //console.log("response", response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;

    throw axiosError.response?.data ?? { message: "An unknown error occurred" };
  }
};
