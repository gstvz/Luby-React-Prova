import { api } from "../axiosConfig";
import { LoginData } from "@types";
import { errorMessage } from "@helpers";

export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await api.post("login", loginData)
    .then(res => {
      return {
        id: res.data.user.id,
        email: res.data.user.email,
        token: res.data.token.token,
        expires_at: res.data.token.expires_at,
      };
    })
    .catch(err => {
      if(err.response.status === 401) {
        throw new Error('Invalid email or password.');
      }

      throw new Error(err.message);
    })

    return response;
  } catch(error) {
    errorMessage(error);
  }
};