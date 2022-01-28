import { createSlice } from "@reduxjs/toolkit";
import { UserData } from '../../shared/types/index';

const initialState: UserData = {
  email: '',
  password: '',
  isAuthenticated: false
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

export const userActions = userSlice.actions;
export default userSlice;