import { api } from "@services";
import { UpdatedUser } from "@types";
import { getUserToken } from "@helpers";

export const updateMyUser = async (updatedUser: UpdatedUser) => {
  const response = await api.put("user/update", updatedUser, {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    }
  });
  return response;
};
