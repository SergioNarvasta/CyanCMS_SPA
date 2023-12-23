import { toast } from 'react-toastify';

export const toastErrorMessage = (errorMessage: string) => {
    return toast.error(errorMessage ?? 'Algo salió mal');
};
