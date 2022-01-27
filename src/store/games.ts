import { createSlice } from "@reduxjs/toolkit";

type GameData = {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
}

type GamesState = {
  min_cart_value: number,
  types: GameData[];
};

const initialState: GamesState = {
  min_cart_value: 0,
  types: []
}

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    getGames(state, action) {
      state.min_cart_value = action.payload.min_cart_value;
      state.types = action.payload.types;
    }
  }
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice;