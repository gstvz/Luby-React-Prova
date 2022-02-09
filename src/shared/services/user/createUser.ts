import { toast } from "react-toastify";
import { api } from "@services";
import { NewUser } from "@types";
import { errorMessage, feedbackMesssage } from "@helpers";

export const createUser = async (newUser: NewUser) => {
  try {
    const feedback = toast.loading("Registering user...");
    await api.post("user/create", newUser).then((res) => {
      feedbackMesssage(feedback, res, "User registered! 👌");
    });
  } catch (error) {
    errorMessage(error);
  }
};
