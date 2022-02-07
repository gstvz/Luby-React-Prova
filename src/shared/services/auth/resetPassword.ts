import { toast } from 'react-toastify';
import { api } from "@services";

export const resetPassword = async (userEmail: { email: string }) => {
  
  const response = await toast.promise(
    api.post("reset", userEmail),
    {
      pending: 'Sending link...',
      success: 'Link sent 👌',
      error: 'Sending link failed 🤯'
    }
  )
  return response.data.token;
};