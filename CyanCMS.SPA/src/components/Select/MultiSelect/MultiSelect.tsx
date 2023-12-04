/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
import type { Control, FieldValues, Path } from 'react-hook-form';
import {
    components,
    type InputActionMeta,
    type InputProps,
    type MultiValueProps,
} from 'react-select';

import { CustomReactSelect, type SelectOption } from '@/components';
import { MultiValueRemove } from './components/MultiValueRemove';

export interface MultiSelectProps<T extends FieldValues> {
    selectId: string;
    label: string;
    name?: Path<T>;
    control: Control<T>;
    options: SelectOption[];
    isLoading: boolean;
    inputText: string;
    onInputChange: (newValue: string, actionMeta: InputActionMeta) => void;
    placeholder: string;
}

export const MultiSelect = <T extends object>({
    selectId,
    label,
    name,
    control,
    options,
    isLoading,
    inputText,
    onInputChange,
    placeholder,
}: MultiSelectProps<T>) => {
    return (
        <div className="mb-3">
            <Form.Label
                htmlFor={selectId}
                className="juntoz-form__label--secondary"
            >
                {label}
            </Form.Label>
            <CustomReactSelect
                id={selectId}
                name={name}
                control={control}
                controlled
                placeholder={placeholder}
                options={options}
                isLoading={isLoading}
                inputValue={inputText}
                onInputChange={onInputChange}
                isMulti
                isSearchable
                isClearable
                components={{
                    MultiValue: DefaultMultiValue,
                    MultiValueLabel: () => null,
                    MultiValueRemove,
                    Input: DefaultInput,
                }}
            />
        </div>
    );
};

const DefaultInput = (props: InputProps) => <components.Input {...props} />;

const DefaultMultiValue = (props: MultiValueProps) => (
    <components.MultiValue {...props} />
);
