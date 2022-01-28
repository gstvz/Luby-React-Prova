import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from './games/games';

const store = configureStore({
  reducer: { games: gamesSlice.reducer }
});

export default store;