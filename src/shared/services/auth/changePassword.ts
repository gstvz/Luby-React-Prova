import { toast } from 'react-toastify';
import { api } from "@services";
import { errorMessage } from "@helpers";

export const changePassword = async (newPassword: { password: string }, token: string) => {  
  try {
    await toast.promise(
      api.post(`reset/${token}`, newPassword),
      {
        pending: 'Resetting password...',
        success: 'Password reset 👌'        
      }
    )
  } catch(error) {
    errorMessage(error);
  }
};