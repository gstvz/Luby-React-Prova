import { createSlice } from "@reduxjs/toolkit";
import { GameData, Bet } from "../../shared/types/index";

type GamesState = {
  min_cart_value: number;
  types: GameData[];
  activeGame: GameData;
  selectedNumbers: string[];
  bets: Bet[];
  cartTotal: number;
};

const initialState: GamesState = {
  min_cart_value: 0,
  types: [],
  activeGame: {
    id: 0,
    type: "",
    description: "",
    range: 0,
    price: 0,
    max_number: 0,
    color: "",
  },
  selectedNumbers: [],
  bets: [],
  cartTotal: 0,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    getGames(state, action) {
      state.min_cart_value = action.payload.min_cart_value;
      state.types = action.payload.types;
      state.activeGame = action.payload.types[0];
    },
    setActiveGame(state, action) {
      state.activeGame = action.payload.activeGame;
    },
    setSelectedNumbers(state, action) {
      state.selectedNumbers = action.payload.selectedNumbers;
    },
    addGameToCart(state, action) {
      state.bets = [...state.bets, action.payload];
    },
    calculateCartTotal(state) {
      const cartTotal = state.bets
        .map((game) => {
          const gamePrice = state.types.find((type) => type.id === game.gameId);
          return gamePrice!.price;
        })
        .reduce((acc, cur) => acc + cur, 0);
      state.cartTotal = cartTotal;
    },
    removeFromCart(state, action) {
      state.bets = state.bets.filter((bet) => bet.gameId !== action.payload);
    },
  },
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice;
