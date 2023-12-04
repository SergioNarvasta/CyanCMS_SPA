import type { Control, FieldValues, Path } from 'react-hook-form';
import type { Props } from 'react-select';

export interface CustomReactSelectProps<T extends FieldValues> extends Props {
    options: SelectOption[];
    name?: Path<T>;
    control?: Control<T>;
    controlled?: boolean;
    withCheckbox?: boolean;
    isInvalid?: boolean;
}

export interface SelectOption {
    label: string;
    value: string | number;
    index?: number;
    isDisabled?: boolean;
}
