import { api } from "../api/api";
import { gamesActions } from './games';

export const getGamesData = () => {
  return async (dispatch: Function) => {
    const getData = async () => {
      const response = await api.get('cart_games');
      return response;
    };

    const gamesData = await getData();  
    dispatch(gamesActions.getGames({
      min_cart_value: gamesData.data.min_cart_value,   
      types: gamesData.data.types
    }));
  }
}