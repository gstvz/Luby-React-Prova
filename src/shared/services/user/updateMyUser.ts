import { toast } from 'react-toastify';
import { api } from "@services";
import { UpdatedUser } from "@types";
import { errorMessage, getUserToken } from "@helpers";

export const updateMyUser = async (updatedUser: UpdatedUser) => {
  try {
    const response = await toast.promise(
      api.put("user/update", updatedUser, {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        }
      }),
      {
        pending: 'Updating user...',
        success: 'User updated 👌'
      }
    )  
    return response;    
  } catch(error) {
    errorMessage(error);
  }
};
