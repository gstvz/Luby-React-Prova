import { api } from "../axiosConfig";
import { LoginData } from "@types";

export const loginUser = async (loginData: LoginData) => {
    const response = await api.post("login", loginData);

    return {
      id: response.data.user.id,
      email: response.data.user.email,
      token: response.data.token.token,
      expires_at: response.data.token.expires_at,
    };
};