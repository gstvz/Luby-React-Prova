import { api } from "@services";

export const listGames = async () => {
  const response = await api.get("cart_games");
  return response;
};