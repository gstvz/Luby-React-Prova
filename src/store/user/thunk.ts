import { api } from "../../api/api";
import { getUserToken } from "@helpers";
import { LoginData, NewUser } from "@types";
import { userActions } from "@store";
import { postData } from "src/shared/services/auth/login";

export const postUserData = (loginData: LoginData) => {
  return async (dispatch: Function) => {
    const userData = await postData(loginData);
    dispatch(userActions.loginUser(userData));
  };
};

export const postRegisterUser = (newUser: NewUser) => {
  return async (dispatch: Function) => {
    const postData = async () => {
      const response = await api.post("user/create", newUser);
      if (response.status === 200) {
        dispatch(userActions.registerUser());
      }
    };

    postData();
  };
};

export const postResetPassword = (userEmail: { email: string }) => {
  return async (dispatch: Function) => {
    const postData = async () => {
      const response = await api.post("reset", userEmail);
      if (response.status === 200) {
        alert("Link para resetar a senha enviado!");
      }
    };

    postData();
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
