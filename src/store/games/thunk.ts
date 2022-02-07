import { Bets } from "@types";
import { gamesActions } from "@store";
import { listGames, newBet } from "@services";

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
    const response = await newBet(bets);

    if (response.status === 200) {
      dispatch(gamesActions.saveBet());
      dispatch(gamesActions.calculateCartTotal());      
    }
  };
};
