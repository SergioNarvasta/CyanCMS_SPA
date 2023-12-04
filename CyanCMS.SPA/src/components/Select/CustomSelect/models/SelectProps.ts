import type { FormSelectProps } from 'react-bootstrap';

import type { LabelStyle } from '@/components/Inputs';
import type { ISelectOption } from '../../BasicSelect/models';

export interface SelectProps {
    label: string;
    errorMessage?: string;
    selectProps: FormSelectProps;
    options: ISelectOption[];
    labelStyle?: LabelStyle;
}
