import { api } from "@services";
import { getUserToken } from "@helpers";
import { Bets } from "@types";

export const newBet = async (bets: Bets) => {
  const response = await api.post("bet/new-bet", bets, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });

  return response;
};