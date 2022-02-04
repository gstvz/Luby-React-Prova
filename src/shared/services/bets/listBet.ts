import { api } from "@services";
import { getUserToken } from "@helpers";

export const listBet = async (params: string) => {
  const response = await api.get(`bet/all-bets${params}`, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  });
  return response.data;
};