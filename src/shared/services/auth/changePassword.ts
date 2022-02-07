import { toast } from 'react-toastify';
import { api } from "@services";

export const changePassword = async (newPassword: { password: string }, token: string) => {  
  const response = toast.promise(
    await api.post(`reset/${token}`, newPassword),
    {
      pending: 'Resetting password...',
      success: 'Password reset 👌',
      error: 'Reseting failed 🤯'
    },
    {
      autoClose: 2000,
      draggable: false,
      progress: undefined,
    }
  )
  return response;
};