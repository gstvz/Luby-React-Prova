import { createSlice } from "@reduxjs/toolkit";
import { UserData } from '../../shared/types/index';

const initialState: UserData = {
  isAuthenticated: false,
  user: {
    id: 0,
    email: '',
    token: '',
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.isAuthenticated = true;
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
      state.user.token = action.payload.token;
    }
  },
});

export const userActions = userSlice.actions;
export default userSlice;