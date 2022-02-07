import { toast } from 'react-toastify';
import { api } from "@services";
import { UpdatedUser } from "@types";
import { getUserToken } from "@helpers";

export const updateMyUser = async (updatedUser: UpdatedUser) => {
  const response = await toast.promise(
    api.put("user/update", updatedUser, {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      }
    }),
    {
      pending: 'Updating user...',
      success: 'User updated 👌',
      error: 'Update failed 🤯'
    }
)
  
  return response;
};
