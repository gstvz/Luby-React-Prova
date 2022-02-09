import { toast } from "react-toastify";
import { api } from "@services";
import { errorMessage, feedbackMesssage } from "@helpers";

export const changePassword = async (
  newPassword: { password: string },
  token: string
) => {
  try {
    const feedback = toast.loading("Resetting password...");
    await api.post(`reset/${token}`, newPassword).then((res) => {
      feedbackMesssage(feedback, res, "Password reset 👌");
    });
  } catch (error) {
    errorMessage(error);
  }
};
