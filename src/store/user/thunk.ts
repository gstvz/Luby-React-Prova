import { api } from "../../api/api";
import { LoginData } from "../../shared/types";
import { userActions } from "./user";

export const postUserData = (loginData: LoginData) => {
  return async (dispatch: Function) => {
    const postData = async () => {
      const response = await api.post('login', loginData);
      return {
        id: response.data.user.id,
        email: response.data.user.email,
        token: response.data.token.token
      };
    };

    const userData = await postData();
    dispatch(userActions.loginUser(userData));
  }
}