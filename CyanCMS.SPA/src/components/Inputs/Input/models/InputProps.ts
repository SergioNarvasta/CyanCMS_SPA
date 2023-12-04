import type { FormControlProps } from 'react-bootstrap';

export type LabelStyle = 'primary' | 'secondary';

export interface InputProps {
    label: string;
    labelStyle?: LabelStyle;
    labelComponent?: React.ReactNode;
    inputProps: FormControlProps;
    errorMessage?: string;
    addOn?: React.ReactNode;
    required?: boolean;
}
