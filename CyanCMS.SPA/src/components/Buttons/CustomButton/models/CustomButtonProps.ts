import type { ButtonProps } from 'react-bootstrap/Button';

export interface CustomButtonProps extends ButtonProps {
    text: string;
    isLoading?: boolean;
}
