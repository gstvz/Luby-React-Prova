import { api } from "@services";
import { errorMessage, getUserToken } from "@helpers";

export const listBet = async (params: string) => {
  try {
    const response = await api.get(`bet/all-bets${params}`, {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    errorMessage(error);
  }
};
