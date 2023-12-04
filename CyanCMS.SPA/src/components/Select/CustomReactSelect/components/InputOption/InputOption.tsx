import Form from 'react-bootstrap/Form';
import { components } from 'react-select';

import type { InputOptionsProps } from './models';

export const InputOption = (props: InputOptionsProps) => {
    const {
        innerProps,
        label,
        isSelected,
        getValue,
        setValue,
        selectOption,
        ...rest
    } = props;

    return (
        <components.Option
            {...rest}
            selectOption={selectOption}
            isSelected={isSelected}
            label={label}
            getValue={getValue}
            setValue={setValue}
            innerProps={{
                ...innerProps,
                style: {
                    display: 'flex',
                    gap: '1rem',
                    textAlign: 'left',
                },
            }}
        >
            <Form.Check
                id={`filter-checkbox-${label}`}
                label={label}
                type="checkbox"
                checked={isSelected}
                style={{
                    pointerEvents: 'none',
                }}
                onChange={() => {
                    const prevValues = getValue();
                    setValue([...prevValues], 'select-option');
                }}
            />
        </components.Option>
    );
};
