import { api } from "@services";

export const resetPassword = async (userEmail: { email: string }) => {
  const response = await api.post("reset", userEmail);
  return response.data.token;
};