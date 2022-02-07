import { api } from "@services";

export const changePassword = async (newPassword: { password: string }, token: string) => {
  const response = await api.post(`reset/${token}`, newPassword);
  return response;
};