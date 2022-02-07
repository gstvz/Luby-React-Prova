import { errorMessage } from "@helpers";
import { api } from "@services";

export const listGames = async () => {
  try {
    const response = await api.get("cart_games");
    return response;
  } catch(error) {
    errorMessage(error);
  };
};