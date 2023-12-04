import type { Control, FieldValues, Path } from 'react-hook-form';

export interface SwitchProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    control?: Control<T, any>;
}
