import type { FormCheckInputProps } from 'react-bootstrap/esm/FormCheckInput';

export interface InputCheckboxProps extends FormCheckInputProps {
    id: string;
    label?: string | React.ReactNode;
    errorMessage?: string;
}
