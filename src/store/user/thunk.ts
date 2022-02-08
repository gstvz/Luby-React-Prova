import { LoginData } from "@types";
import { userActions } from "@store";
import {
  listBet,
  loginUser,
  resetPassword,
} from "@services";

export const postUserData = (loginData: LoginData) => {
  return async (dispatch: Function) => {
    const userData = await loginUser(loginData);
    if(userData) {
      dispatch(userActions.loginUser(userData));
    }
  };
};

export const postResetPassword = (userEmail: { email: string }) => {
  return async (dispatch: Function) => {
    const response = await resetPassword(userEmail);

    if (response.status === 200) {
      alert("Link para resetar a senha enviado!");
    }
  };
};

export const getUserBets = (params: string) => {
  return async (dispatch: Function) => {
    const bets = await listBet(params);
    dispatch(userActions.setUserBets(bets));
  };
};
