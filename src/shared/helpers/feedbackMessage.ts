import { AxiosResponse } from "axios";
import React from "react";
import { toast } from "react-toastify";

export const feedbackMesssage = (
  feedback: React.ReactText,
  res: AxiosResponse,
  message: string
) => {
  if (res.status === 200) {
    toast.update(feedback, {
      render: message,
      type: "success",
      isLoading: false,
      hideProgressBar: true,
    });
    setTimeout(toast.dismiss, 1000);
  }
};
