import { api } from "@services";
import { NewUser } from "@types";

export const createUser = async (newUser: NewUser) => {
  const response = await api.post("user/create", newUser);
  return response;
};