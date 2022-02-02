import { createSlice } from "@reduxjs/toolkit";
import { UserData } from '../../shared/types/index';

const initialState: UserData = {
  isAuthenticated: false,
  userBets: [{
    choosen_numbers: '',
    created_at: '',
    game_id: 0,
    id: 0,
    price: 0,
    type: {id: 0, type: ''},
    user_id: 0,
  }],
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
      const isLoggedIn: string | null = localStorage.getItem('user');

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
    },
    setUserBets(state, action) {
      state.userBets = action.payload;
    }
  },
});

export const userActions = userSlice.actions;
export default userSlice;