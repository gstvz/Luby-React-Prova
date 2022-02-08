import { toast } from "react-toastify";

export function errorMessage(error: unknown) {  
  const message = error instanceof Error ? error.message : 'Unknown error occurred!';
  toast.error(message);
}