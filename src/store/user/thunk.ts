import { api } from "../../api/api";
import { getUserToken } from "@helpers";
import { LoginData, NewUser } from "@types";
import { userActions } from "@store";
import { createUser, loginUser, resetPassword } from "@services";

export const postUserData = (loginData: LoginData) => {
  return async (dispatch: Function) => {
    const userData = await loginUser(loginData);
    dispatch(userActions.loginUser(userData));
  };
};

export const postRegisterUser = (newUser: NewUser) => {
  return async (dispatch: Function) => {
    const response = await createUser(newUser);

    if (response.status === 200) {
      dispatch(userActions.registerUser());
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
    const getData = async () => {
      const response = await api.get(`bet/all-bets${params}`, {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      });
      return response.data;
    };
    const bets = await getData();
    dispatch(userActions.setUserBets(bets));
  };
};
