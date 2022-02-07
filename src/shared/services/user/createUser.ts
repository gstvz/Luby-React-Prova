import { toast } from 'react-toastify';
import { api } from "@services";
import { NewUser } from "@types";
import { errorMessage } from '@helpers';

export const createUser = async (newUser: NewUser) => {  
  try {
    const response = await toast.promise(
      api.post("user/create", newUser),
      {
        pending: 'Registering user...',
        success: 'User registered 👌'
      }
    )
    return response;
  } catch(error) {
    errorMessage(error);
  }
};