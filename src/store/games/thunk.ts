import { api } from "../../api/api";
import { getUserToken } from "@helpers";
import { Bets } from "@types";
import { gamesActions } from "@store";
import { listGames } from "@services";

export const getGamesData = () => {
  return async (dispatch: Function) => {
    const gamesData = await listGames();
    
    dispatch(
      gamesActions.getGames({
        min_cart_value: gamesData.data.min_cart_value,
        types: gamesData.data.types,
      })
    );
  };
};

export const postBetData = (bets: Bets) => {
  return async (dispatch: Function) => {
    const postData = async () => {
      const response = await api.post("bet/new-bet", bets, {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      });

      if (response.status === 200) {
        dispatch(gamesActions.saveBet());
        dispatch(gamesActions.calculateCartTotal());
      }
    };

    postData();
  };
};
