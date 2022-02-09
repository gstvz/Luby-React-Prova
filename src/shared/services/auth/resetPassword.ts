import { toast } from 'react-toastify';
import { api } from "@services";
import { errorMessage, feedbackMesssage } from '@helpers';

export const resetPassword = async (userEmail: { email: string }) => {
  try {
    const feedback = toast.loading("Sending link...");
    const response = await api.post("reset", userEmail)
    .then(res => {
      feedbackMesssage(feedback, res, "Link sent 👌");
      return res.data.token;
    });

    return response;    
  } catch(error) {
    errorMessage(error);
  };  
};