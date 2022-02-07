import { toast } from 'react-toastify';
import { api } from "@services";

export const changePassword = async (newPassword: { password: string }, token: string) => {  
  const response = await toast.promise(
    api.post(`reset/${token}`, newPassword),
    {
      pending: 'Resetting password...',
      success: 'Password reset 👌',
      error: 'Reseting failed 🤯'
    }
  )
  return response;
};