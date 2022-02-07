import { toast } from 'react-toastify';
import { api } from "@services";
import { NewUser } from "@types";

export const createUser = async (newUser: NewUser) => {  
  const response = await toast.promise(
    api.post("user/create", newUser),
    {
      pending: 'Registering user...',
      success: 'User registered 👌',
      error: 'Registration failed 🤯'
    }
  )
  return response;
};