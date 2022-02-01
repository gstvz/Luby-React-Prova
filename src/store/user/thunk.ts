import { api } from "../../api/api";
import { LoginData, NewUser } from "../../shared/types";
import { userActions } from "./user";

export const postUserData = (loginData: LoginData) => {
  return async (dispatch: Function) => {
    const postData = async () => {
      const response = await api.post('login', loginData);
      return {
        id: response.data.user.id,
        email: response.data.user.email,
        token: response.data.token.token,
        expires_at: response.data.token.expires_at
      };
    };

    const userData = await postData();    
    dispatch(userActions.loginUser(userData));
    // const expirationTime = new Date(userData.expires_at).getTime();
    // setTimeout(() => {dispatch(userActions.logoutUser())}, expirationTime);
  }
};

export const postRegisterUser = (newUser: NewUser) => {
  return async (dispatch: Function) => {
    const postData = async () => {
      const response = await api.post('user/create', newUser);
      if(response.status === 200) {
        dispatch(userActions.registerUser());        
      }
    }

    postData();
  }
};