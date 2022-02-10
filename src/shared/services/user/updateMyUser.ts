import { toast } from "react-toastify";
import { api } from "@services";
import { UpdatedUser } from "@types";
import { errorMessage, feedbackMesssage, getUserToken } from "@helpers";

export const updateMyUser = async (updatedUser: UpdatedUser) => {
  try {
    const feedback = toast.loading("Updating user...");
    await api
      .put("user/update", updatedUser, {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      })
      .then((res) => {
        feedbackMesssage(feedback, res, "User updated! 👌");
      });
  } catch (error) {
    toast.dismiss();
    errorMessage(error);
  }
};
