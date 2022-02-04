import { api } from "../../api/api";
import { getUserToken } from "@helpers";
import { LoginData, NewUser } from "@types";
import { userActions } from "@store";

export const postUserData = (loginData: LoginData) => {
  return async (dispatch: Function) => {
    const postData = async () => {
      const response = await api.post("login", loginData);
      return {
        id: response.data.user.id,
        email: response.data.user.email,
        token: response.data.token.token,
        expires_at: response.data.token.expires_at,
      };
    };

    const userData = await postData();
    dispatch(userActions.loginUser(userData));
    // const expirationTime = new Date(userData.expires_at).getTime();
    // setTimeout(() => {dispatch(userActions.logoutUser())}, expirationTime);
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
      const response = await api.get(`bet/all-bets?${params}`, {
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
