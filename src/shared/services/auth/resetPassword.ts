import { toast } from 'react-toastify';
import { api } from "@services";
import { errorMessage } from '@helpers';

export const resetPassword = async (userEmail: { email: string }) => {
  try {
    const response = await toast.promise(
      api.post("reset", userEmail),
      {
        pending: 'Sending link...',
        success: 'Link sent 👌'
      }
    )
    return response.data.token;
  } catch(error) {
    errorMessage(error);
  };  
};