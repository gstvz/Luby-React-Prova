import { createSlice } from "@reduxjs/toolkit";
import { UserData } from '../../shared/types/index';

const initialState: UserData = {
  isAuthenticated: false,
  user: {
    id: null,
    email: null,
    token: null,
    expires_at: null
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser() {
      alert("Usuário cadastrado!");
    },
    getUser(state) {
      const isLoggedIn: string | null = localStorage.getItem('token');

      if(isLoggedIn) {
        state.isAuthenticated = true;
      };
    },
    loginUser(state, action) {
      const user = {
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
        expires_at: action.payload.expires_at
      };     

      state.isAuthenticated = true;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser(state) {
      state.isAuthenticated = false;
      state.user = {
        id: null,
        email: null,
        token: null,
        expires_at: null
      };

      localStorage.clear();
    }
  },
});

export const userActions = userSlice.actions;
export default userSlice;