import { toast } from "react-toastify";
import { api } from "@services";
import { errorMessage, feedbackMesssage, getUserToken } from "@helpers";
import { Bets } from "@types";

export const newBet = async (bets: Bets) => {
  try {
    const feedback = toast.loading("Saving bet...");
    const response = await api
      .post("bet/new-bet", bets, {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      })
      .then((res) => {
        feedbackMesssage(feedback, res, "Bet saved! 👌");
        return res;
      });

    return response;
  } catch (error) {
    errorMessage(error);
  }
};
