import { configureStore } from "@reduxjs/toolkit";
import { gamesSlice } from "./games/games";
import { userSlice } from "./user/user";

export const store = configureStore({
  reducer: { games: gamesSlice.reducer, user: userSlice.reducer },
});
